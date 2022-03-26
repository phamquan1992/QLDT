using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using Microsoft.Extensions.DependencyInjection;
using NHibernate.Cache;
using NHibernate.Driver;
using NHibernate.Tool.hbm2ddl;
using QLDT.Core.Domain;

namespace QLDT.Extention
{
    public static class NHibernateExtention
    {
        [System.Obsolete]
        public static IServiceCollection AddNHibernate(this IServiceCollection services, string connectionString)
        {
            var configuration = Fluently.Configure()
               .Database(OracleDataClientConfiguration.Oracle10.ConnectionString(connectionString)
               .Provider<NHibernate.Connection.DriverConnectionProvider>().Driver<OracleManagedDataClientDriver>()
               .Dialect<NHibernate.Dialect.Oracle10gDialect>().ShowSql())
               .Cache(c => c.UseQueryCache().UseSecondLevelCache().ProviderClass<HashtableCacheProvider>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<DM_CHUCVUMapping>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<DM_XAMapping>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<DM_HUYENMapping>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<DM_DVQLMapping>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<DM_TINHMapping>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<DM_BAOCAOMapping>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<USERDATAMapping>())
               .ExposeConfiguration(cf => new SchemaUpdate(cf).Execute(false, false));

            var sessionFactory = configuration.BuildSessionFactory();
            services.AddSingleton(sessionFactory);
            services.AddScoped(factory => sessionFactory.OpenSession());

            return services;
        }
    }
}
