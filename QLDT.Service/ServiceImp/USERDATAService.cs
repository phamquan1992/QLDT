using QLDT.Core.Domain;
using QLDT.Core.Helper;
using QLDT.Repositories.IRepository;
using QLDT.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QLDT.Service.ServiceImp
{
    public class USERDATAService : IUSERDATAService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly INGUOIDUNGService ndservice;
        public USERDATAService(IUnitOfWork unitOfWork, INGUOIDUNGService ndservice)
        {
            _unitOfWork = unitOfWork;
            this.ndservice = ndservice;
        }
        public bool Login(string user_name, string pass_word)
        {
            Common common = new Common();
            string pass_md5 = common.GetMd5Hash(pass_word).ToUpper();
            var obj_lst = _unitOfWork.uSERDATARepository.GetAll().ToList();
            var obj = obj_lst.FirstOrDefault(t => t.username == user_name && t.password == pass_md5);
            if (obj != null)
            {
                var nguoidung = ndservice.GetUser(user_name);
                return true;
            }
            return false;
        }
        public NGUOIDUNG GetUser(string user_name, string pass_word)
        {
            Common common = new Common();
            string pass_md5 = common.GetMd5Hash(pass_word).ToUpper();
            var obj_lst = _unitOfWork.uSERDATARepository.GetAll().ToList();
            var obj = obj_lst.FirstOrDefault(t => t.username == user_name && t.password == pass_md5);
            if (obj != null)
            {

                return ndservice.GetUser(user_name);
            }
            return new NGUOIDUNG();
        }
    }
}
