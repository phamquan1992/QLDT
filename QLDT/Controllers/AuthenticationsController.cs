using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLDT.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QLDT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationsController : ControllerBase
    {
        private readonly IUSERDATAService _IUSERDATAService;
        public AuthenticationsController(IUSERDATAService _IUSERDATAService)
        {
            this._IUSERDATAService = _IUSERDATAService;
        }
        [HttpGet]
        [Route("Login")]
        public bool Login(string user, string pass)
        {
            return _IUSERDATAService.Login(user, pass);
        }
    }
}
