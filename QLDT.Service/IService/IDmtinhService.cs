using QLDT.Core.Domain;
using System.Linq;

namespace QLDT.Service.IService
{
    public interface IDmtinhService
    {
        IQueryable<DM_TINH> GetAll();
    }
}
