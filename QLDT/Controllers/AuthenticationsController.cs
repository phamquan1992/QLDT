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
    public class AuthenticationsController : ControllerBase
    {
        private readonly IUSERDATAService _IUSERDATAService;
        public AuthenticationsController(IUSERDATAService _IUSERDATAService)
        {
            this._IUSERDATAService = _IUSERDATAService;
        }
        [HttpGet]
        [Route("Login_v1")]
        public bool Login(string user, string pass)
        {
            return _IUSERDATAService.Login(user, pass);
        }
        [HttpGet]
        [Route("Login")]
        public NGUOIDUNG Login_v2(string user, string pass)
        {
            return _IUSERDATAService.GetUser(user, pass);
        }
    }
}
