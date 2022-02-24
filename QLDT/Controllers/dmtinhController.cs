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
    public class dmtinhController : ControllerBase
    {
        private readonly IDmtinhService _IDmtinhService;
        public dmtinhController(IDmtinhService dmtinhService)
        {
            _IDmtinhService = dmtinhService;
        }
        [HttpGet]
        public IEnumerable<DM_TINH> Get()
        {
            return _IDmtinhService.GetAll();
        }
    }
}
