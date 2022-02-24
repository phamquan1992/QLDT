using QLDT.Core.Domain;
using System.Linq;

namespace QLDT.Service.IService
{
    public interface IDmXaService
    {
        IQueryable<DM_XA> GetAll();
    }
}
