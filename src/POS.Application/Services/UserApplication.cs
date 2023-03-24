using AutoMapper;
using POS.Application.Commons.Base;
using POS.Application.DTO.Request;
using POS.Application.Interface;
using POS.Domain.Entities;
using POS.Infrastructure.Persistences.Interfaces;
using POS.Utilities.Static;

namespace POS.Application.Services;

public class UserApplication : IUserApplication
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public UserApplication(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task<BaseResponse<User>> Login(UserRequestDto userRequest)
    {
        var response = new BaseResponse<User>();
        User userMapper = _mapper.Map<User>(userRequest);
        var account = await _unitOfWork.Users.GetUser(userMapper);
        if (account is null)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_QUERY_EMTY;
        }
        else
        {
            response.Success = true;
            response.Data = account;
            response.Message = ReplyMessage.MESSAGE_QUERY;
        }
        return response;
    }

    public async Task<BaseResponse<bool>> Register(User user)
    {
        var response = new BaseResponse<bool>();
        var account = await _unitOfWork.Users.AddUser(user);
        if (!account)
        {
            response.Success = false;
            response.Message = ReplyMessage.MESSAGE_FAILED;
        }
        else
        {
            response.Success = true;
            response.Message = ReplyMessage.MESSAGE_SAVE;
        }
        return response;
    }
}
