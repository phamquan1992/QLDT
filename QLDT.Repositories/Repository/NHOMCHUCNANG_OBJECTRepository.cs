using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.Repository
{
    public class NHOMCHUCNANG_OBJECTRepository : BaseRepository<NHOMCHUCNANG_OBJECT>, INHOMCHUCNANG_OBJECTRepository
    {
        private readonly ISession _session;
        public NHOMCHUCNANG_OBJECTRepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
