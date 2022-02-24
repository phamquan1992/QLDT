using QLDT.Core.Domain;
using System.Linq;

namespace QLDT.Service.IService
{
    public interface IDmHuyenService
    {
        IQueryable<DM_HUYEN> GetAll();
    }
}
