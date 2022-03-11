using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.Repository
{
    public class DM_BAOCAORepository : BaseRepository<DM_BAOCAO>, IDM_BAOCAORepository
    {
        private readonly ISession _session;
        public DM_BAOCAORepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
