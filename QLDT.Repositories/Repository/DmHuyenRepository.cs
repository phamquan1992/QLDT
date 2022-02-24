using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.Repository
{
    public class DmHuyenRepository : BaseRepository<DM_HUYEN>, IDmHuyenRepository
    {
        private readonly ISession _session;
        public DmHuyenRepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
