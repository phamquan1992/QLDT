using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.Repository
{
    public class USERDATARepository : BaseRepository<USERDATA>, IUSERDATARepository
    {
        private readonly ISession _session;
        public USERDATARepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
