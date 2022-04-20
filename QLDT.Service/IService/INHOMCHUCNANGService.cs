using QLDT.Core.Domain;
using System.Linq;

namespace QLDT.Service.IService
{
    public  interface INHOMCHUCNANGService
    {
        IQueryable<NHOMCHUCNANG> GetAll();
    }
}
