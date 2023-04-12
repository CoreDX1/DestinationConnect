using POS.Application.Interface;
using POS.Domain.Entities;
using POS.Infrastructure.Persistences.Interfaces;

namespace POS.Application.Services;

public class LodgingApplication : ILodgingApplication
{
    private readonly IUnitOfWork _unitOfWork;

    public LodgingApplication(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<Lodging>> GetLodgings()
    {
        IEnumerable<Lodging> reponse = await _unitOfWork.Lodgings.GetLodging();
        return reponse;
    }
}
