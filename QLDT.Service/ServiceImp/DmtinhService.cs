using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System.Linq;

namespace QLDT.Service.ServiceImp
{
    public class DmtinhService : IDmtinhService
    {
        private readonly IUnitOfWork _unitOfWork;
        public DmtinhService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<DM_TINH> GetAll()
        {
            return _unitOfWork.dmtinhRepository.GetAll();
        }
    }
}
