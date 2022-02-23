
using NHibernate;
using QLDT.Core.Domain;
using QLDT.Repositories.IRepository;

namespace QLDT.Repositories.Repository
{
    public class DmchucvuRepository : BaseRepository<DM_CHUCVU>, IDmchucvuRepository
    {
        private readonly ISession _session;
        public DmchucvuRepository(ISession session) : base(session)
        {
            _session = session;
        }
    }
}
