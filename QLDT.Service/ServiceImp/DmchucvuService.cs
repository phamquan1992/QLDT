using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System.Linq;

namespace QLDT.Service.ServiceImp
{
    public class DmchucvuService: IDmchucvuService
    {
        private readonly IUnitOfWork _unitOfWork;
        public DmchucvuService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<DM_CHUCVU> GetAll()
        {
            return _unitOfWork.danhmucRepository.GetAll();
        }
    }
}
