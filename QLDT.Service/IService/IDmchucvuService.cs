using QLDT.Core.Domain;
using System.Linq;

namespace QLDT.Service.IService
{
    public interface IDmchucvuService
    {
        IQueryable<DM_CHUCVU> GetAll();
    }
}
