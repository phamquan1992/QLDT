using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using QLDT.Extention;
using QLDT.Repositories.IRepository;
using QLDT.Repositories.Repository;
using QLDT.Service.IService;
using QLDT.Service.ServiceImp;
using System;

namespace QLDT
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddNHibernate(Configuration["ConnectionStrings:DefaultConnection"]);
            #region Repository
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IDmchucvuRepository, DmchucvuRepository>();
            services.AddScoped<IDmXaRepository, DmXaRepository>();
            services.AddScoped<IDmHuyenRepository, DmHuyenRepository>();
            services.AddScoped<IDmdvqlRepository, DmdvqlRepository>();
            services.AddScoped<IDmtinhRepository, DmtinhRepository>();
            services.AddScoped<IDM_BAOCAORepository, DM_BAOCAORepository>();
            #endregion
            #region Service
            services.AddScoped<IDmchucvuService, DmchucvuService>();
            services.AddScoped<IDmXaService, DmXaService>();
            services.AddScoped<IDmHuyenService, DmHuyenService>();
            services.AddScoped<IDmDVQLService, DmDVQLService>();
            services.AddScoped<IDmtinhService, DmtinhService>();
            services.AddScoped<IDM_BAOCAOService, DM_BAOCAOService>();
            #endregion
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";
                spa.Options.StartupTimeout = new TimeSpan(0, 15, 0);
                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
