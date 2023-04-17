using Microsoft.AspNetCore.Mvc;
using POS.Application.Interface;
using POS.Infrastructure.Commons.Base.Request;

namespace src.POS.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LodgingController : Controller
{
    private readonly ILodgingApplication _app;

    public LodgingController(ILodgingApplication app)
    {
        _app = app;
    }

    [HttpPost]
    public async Task<IActionResult> ListCategories([FromBody] BaseFiltersRequest filters)
    {
        var response = await _app.ListLodgings(filters);
        return Ok(response);
    }

    // numPage=1&numRecordPage=10&numFilters=1&textLodgingType=hotel&textFilter=Madrid&startData=2022-01-01&endData=2022-01-10
    [HttpGet]
    [Route(
        "filter/numPage={numPage}&numRecordPage={numRecordPage}&numFilters={numFilters}&textLodgingType={textLodgingType}&textFilter={textFilter}&startData={startData}&endData={endData}"
    )]
    public async Task<IActionResult> ListLodgings(
        [FromRoute] int numPage,
        [FromRoute] int numRecordPage,
        [FromRoute] int numFilters,
        [FromRoute] string textLodgingType,
        [FromRoute] string textFilter,
        [FromRoute] string startData,
        [FromRoute] string endData
    )
    {
        var data = new BaseFiltersRequest()
        {
            NumPage = numPage,
            NumRecordPage = numRecordPage,
            NumFilters = numFilters,
            TextLodgingType = textLodgingType,
            TextFilter = textFilter,
            StartData = startData,
            EndData = endData
        };
        var response = await _app.ListLodgings(data);
        return Ok(response);
    }

    // TODO: Called all lodgings
    [HttpGet]
    [Route("select")]
    public async Task<IActionResult> GetLodgings()
    {
        var response = await _app.GetLodgings();
        return Ok(response);
    }
}
