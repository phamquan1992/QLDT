using QLDT.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.IService
{
    public interface IDM_BAOCAOService
    {
        IQueryable<DM_BAOCAO> GetAll();
    }
}
