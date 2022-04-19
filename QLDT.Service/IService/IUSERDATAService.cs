using QLDT.Core.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Service.IService
{
    public interface IUSERDATAService
    {
        bool Login(string user_name, string pass_word);
        NGUOIDUNG GetUser(string user_name, string pass_word);
    }
}
