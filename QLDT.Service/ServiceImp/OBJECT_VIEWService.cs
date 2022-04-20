using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.ServiceImp
{
    public class OBJECT_VIEWService : IOBJECT_VIEWService
    {
        private readonly IUnitOfWork _unitOfWork;
        public OBJECT_VIEWService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<OBJECT_VIEW> GetAll()
        {
            return _unitOfWork.oBJECT_VIEWRepository.GetAll();
        }
    }
}
