using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.IRepository
{
    public interface IUnitOfWork
    {
        IDmchucvuRepository danhmucRepository { get; }
        void Commit();
        void Rollback();
    }
}
