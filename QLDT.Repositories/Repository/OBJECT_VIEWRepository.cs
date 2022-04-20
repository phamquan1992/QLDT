using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.Repository
{
  public  class OBJECT_VIEWRepository : BaseRepository<OBJECT_VIEW>, IOBJECT_VIEWRepository
    {
        private readonly ISession _session;
        public OBJECT_VIEWRepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
