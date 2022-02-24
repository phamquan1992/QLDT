using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.Repository
{
    public class DmdvqlRepository : BaseRepository<DM_DVQL>, IDmdvqlRepository
    {
        private readonly ISession _session;
        public DmdvqlRepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
