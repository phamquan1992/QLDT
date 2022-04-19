using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.ServiceImp
{
    public class NGUOIDUNGService : INGUOIDUNGService
    {
        private readonly IUnitOfWork _unitOfWork;
        public NGUOIDUNGService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IQueryable<NGUOIDUNG> GetAll()
        {
            return _unitOfWork.nGUOIDUNGRepository.GetAll();
        }
        public NGUOIDUNG GetUser(string ten_dn)
        {
            var nd= _unitOfWork.nGUOIDUNGRepository.GetAll().FirstOrDefault(t => t.tendangnhap == ten_dn);
            return nd;
        }
    }
}
