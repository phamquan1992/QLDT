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
        public USERDATAService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public bool Login(string user_name, string pass_word)
        {
            Common common = new Common();
            string pass_md5 = common.GetMd5Hash(pass_word).ToUpper();
            var obj_lst = _unitOfWork.uSERDATARepository.GetAll().ToList();
            var obj = obj_lst.FirstOrDefault(t => t.username == user_name && t.password == pass_md5);
            if (obj != null)
                return true;
            return false;
        }

    }
}
