using QLDT.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.IService
{
    public interface IDmDVQLService
    {
        IQueryable<DM_DVQL> GetAll();
    }
}
