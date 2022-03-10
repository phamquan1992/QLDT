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
    }
}
