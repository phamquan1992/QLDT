using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.Repository
{
    public class DmtinhRepository : BaseRepository<DM_TINH>, IDmtinhRepository
    {
        private readonly ISession _session;
        public DmtinhRepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
