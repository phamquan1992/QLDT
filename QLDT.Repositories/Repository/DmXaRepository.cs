using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;

namespace QLDT.Repositories.Repository
{
    public class DmXaRepository : BaseRepository<DM_XA>, IDmXaRepository
    {
        private readonly ISession _session;
        public DmXaRepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
