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
    public class dmhuyenController : ControllerBase
    {
        private readonly IDmHuyenService _IDmHuyenService;
        public dmhuyenController(IDmHuyenService dmHuyenService)
        {
            _IDmHuyenService = dmHuyenService;
        }
        [HttpGet]
        public IEnumerable<DM_HUYEN> Get()
        {
            return _IDmHuyenService.GetAll();
        }
    }
}
