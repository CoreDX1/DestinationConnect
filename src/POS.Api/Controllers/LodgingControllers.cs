using Microsoft.AspNetCore.Mvc;
using POS.Application.Interface;
using POS.Infrastructure.Commons.Base.Request;

namespace src.POS.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LodgingControllers : ControllerBase
    {
        private readonly ILodgingApplication _app;

        public LodgingControllers(ILodgingApplication app)
        {
            _app = app;
        }

        [HttpGet]
        [Route("Select")]
        public async Task<IActionResult> GetLodgings()
        {
            var response = await _app.GetLodgings();
            return Ok(response);
        }
    }
}
