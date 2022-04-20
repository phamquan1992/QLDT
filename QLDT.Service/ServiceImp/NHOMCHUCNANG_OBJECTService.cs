using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.ServiceImp
{
    public class NHOMCHUCNANG_OBJECTService : INHOMCHUCNANG_OBJECTService
    {
        private readonly IUnitOfWork _unitOfWork;
        public NHOMCHUCNANG_OBJECTService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<NHOMCHUCNANG_OBJECT> GetAll()
        {
            return _unitOfWork.nHOMCHUCNANG_OBJECTRepository.GetAll();
        }
    }
}
