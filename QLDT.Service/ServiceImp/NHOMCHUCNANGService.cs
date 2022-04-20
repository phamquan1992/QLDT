using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System.Linq;

namespace QLDT.Service.ServiceImp
{
    public class NHOMCHUCNANGService : INHOMCHUCNANGService
    {
        private readonly IUnitOfWork _unitOfWork;
        public NHOMCHUCNANGService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<NHOMCHUCNANG> GetAll()
        {
            return _unitOfWork.nHOMCHUCNANGRepository.GetAll();
        }
    }
}
