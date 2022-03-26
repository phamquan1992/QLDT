using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLDT.Core.Domain;
using QLDT.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLDT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class dmbaocaoController : ControllerBase
    {
        private readonly IDM_BAOCAOService _IDM_BAOCAOService;
        public dmbaocaoController(IDM_BAOCAOService dM_BAOCAOService)
        {
            _IDM_BAOCAOService = dM_BAOCAOService;
        }
        [HttpGet]
        public IEnumerable<DM_BAOCAO> Get()
        {
            return _IDM_BAOCAOService.GetAll();
        }
        [HttpGet]
        [Route("Filter")]
        public IEnumerable<DM_BAOCAO> GetbyFilter(int take, int skip)
        {
            return _IDM_BAOCAOService.GetFilter(take, skip);
        }
        [HttpGet]
        [Route("{id}")]
        public DM_BAOCAO GetbyKey(int id)
        {
            return _IDM_BAOCAOService.GetAll().FirstOrDefault(t => t.id == id);
        }
        [HttpPost]
        [Route("Create")]
        public bool Create([FromBody] DM_BAOCAO dmbaocao)
        {
            dmbaocao.ngay_tao = DateTime.Now;
            dmbaocao.nguoi_tao = "";
            var result = _IDM_BAOCAOService.CreateNew(dmbaocao);
            return result;
        }
        [HttpPut]
        [Route("Update")]
        public bool Update([FromBody] DM_BAOCAO dmbaocao)
        {
            var obj = _IDM_BAOCAOService.GetAll().FirstOrDefault(t => t.id == dmbaocao.id);
            obj.noidung = dmbaocao.noidung;
            obj.banhanh = dmbaocao.banhanh;
            obj.ngay_sua = DateTime.Now;
            obj.trang_thai = dmbaocao.trang_thai == null ? 0 : dmbaocao.trang_thai;
            var result = _IDM_BAOCAOService.Update(obj);
            return result;
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public bool Delete(int id)
        {
            var obj = _IDM_BAOCAOService.GetAll().FirstOrDefault(t => t.id == id);
            var result = _IDM_BAOCAOService.Delete(obj);
            return result;
        }
    }
}
