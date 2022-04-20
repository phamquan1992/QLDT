using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.Repository
{
    public class NHOMCHUCNANGRepository : BaseRepository<NHOMCHUCNANG>, INHOMCHUCNANGRepository
    {
        private readonly ISession _session;
        public NHOMCHUCNANGRepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
