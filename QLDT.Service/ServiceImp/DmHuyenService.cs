using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.ServiceImp
{
    public class DmHuyenService : IDmHuyenService
    {
        private readonly IUnitOfWork _unitOfWork;
        public DmHuyenService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<DM_HUYEN> GetAll()
        {
            return _unitOfWork.dmHuyenRepository.GetAll();
        }
    }
}
