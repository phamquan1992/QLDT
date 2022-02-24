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
    public class dmdvqlController : ControllerBase
    {
        private readonly IDmDVQLService _IDmDVQLService;
        public dmdvqlController(IDmDVQLService dmDVQLService)
        {
            _IDmDVQLService = dmDVQLService;
        }
        [HttpGet]
        public IEnumerable<DM_DVQL> Get()
        {
            return _IDmDVQLService.GetAll();
        }
    }
}
