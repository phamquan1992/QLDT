using QLDT.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.IService
{
    public interface INGUOIDUNGService
    {
        IQueryable<NGUOIDUNG> GetAll();
        NGUOIDUNG GetUser(string ten_dn);
    }
}
