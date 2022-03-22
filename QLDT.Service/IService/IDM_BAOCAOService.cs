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
        bool CreateNew(DM_BAOCAO obj);
        bool Update(DM_BAOCAO obj);
        bool Delete(DM_BAOCAO obj);
        IQueryable<DM_BAOCAO> GetFilter(int take, int skip);
    }
}
