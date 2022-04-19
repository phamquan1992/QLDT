using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.Repository
{
    public class NGUOIDUNGRepository : BaseRepository<NGUOIDUNG>, INGUOIDUNGRepository
    {
        private readonly ISession _session;
        public NGUOIDUNGRepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
