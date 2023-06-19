using Microsoft.AspNetCore.Mvc;
using POS.Application.DTO.Request.User;
using POS.Application.Interface;
using POS.Domain.Entities;

namespace POS.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserApplication _app;

        public UserController(IUserApplication app)
        {
            _app = app;
        }

        [HttpPost]
        [Route("Auth/Login")]
        public async Task<IActionResult> LoginUser([FromBody] UserRequestDto user)
        {
            var response = await _app.Login(user);
            return Ok(response);
        }

        [HttpPost]
        [Route("Auth/Register")]
        public async Task<IActionResult> RegisterUser([FromBody] User user)
        {
            var response = await _app.Register(user);
            return Ok(response);
        }
    }
}
