using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.ServiceImp
{
    public class DmDVQLService : IDmDVQLService
    {
        private readonly IUnitOfWork _unitOfWork;
        public DmDVQLService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<DM_DVQL> GetAll()
        {
            return _unitOfWork.dmdvqlRepository.GetAll();
        }
    }
}
