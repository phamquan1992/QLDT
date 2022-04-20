using QLDT.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QLDT.Service.IService
{
    public interface IOBJECT_VIEWService
    {
        IQueryable<OBJECT_VIEW> GetAll();
    }
}
