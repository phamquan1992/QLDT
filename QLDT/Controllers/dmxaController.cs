using Microsoft.AspNetCore.Mvc;
using QLDT.Service.IService;
using System.Collections;

namespace QLDT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class dmxaController : ControllerBase
    {
        private readonly IDmXaService _IDmXaService;
        public dmxaController(IDmXaService DmXaService)
        {
            _IDmXaService = DmXaService;
        }
        [HttpGet]
        public IEnumerable Get()
        {
            var data = _IDmXaService.GetAll();
            return data;
        }
    }
}
