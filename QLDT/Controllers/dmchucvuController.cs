using Microsoft.AspNetCore.Mvc;
using QLDT.Core.Domain;
using QLDT.Service.IService;
using System.Collections.Generic;

namespace QLDT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class dmchucvuController : ControllerBase
    {
        private readonly IDmchucvuService _IDanhmucService;
        public dmchucvuController(IDmchucvuService danhmucService)
        {
            _IDanhmucService = danhmucService;
        }
        [HttpGet]
        public IEnumerable<DM_CHUCVU> Get()
        {
            var data = _IDanhmucService.GetAll();
            return data;
        }
    }
}
