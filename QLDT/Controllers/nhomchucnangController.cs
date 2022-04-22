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
    public class nhomchucnangController : ControllerBase
    {
        private readonly INHOMCHUCNANGService nHOMCHUCNANGService;
        public nhomchucnangController(INHOMCHUCNANGService nHOMCHUCNANGService)
        {
            this.nHOMCHUCNANGService = nHOMCHUCNANGService;
        }
        [HttpGet]
        public IEnumerable<NHOMCHUCNANG> Get()
        {
            return nHOMCHUCNANGService.GetAll().OrderBy(t => t.nhomchucnangid);
        }
    }
}
