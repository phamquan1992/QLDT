using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System.Linq;

namespace QLDT.Service.ServiceImp
{
    public class DmXaService : IDmXaService
    {
        private readonly IUnitOfWork _unitOfWork;
        public DmXaService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<DM_XA> GetAll()
        {
            return _unitOfWork.dmXaRepository.GetAll();
        }
    }
}
