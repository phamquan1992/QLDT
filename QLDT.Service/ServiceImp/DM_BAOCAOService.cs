using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.ServiceImp
{
    public class DM_BAOCAOService : IDM_BAOCAOService
    {
        private readonly IUnitOfWork _unitOfWork;
        public DM_BAOCAOService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<DM_BAOCAO> GetAll()
        {
            return _unitOfWork.dM_BAOCAORepository.GetAll().OrderBy(t=>t.ma_baocao);
        }
    }
}
