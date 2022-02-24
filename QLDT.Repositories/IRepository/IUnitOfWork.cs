using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Repositories.IRepository
{
    public interface IUnitOfWork
    {
        IDmchucvuRepository danhmucRepository { get; }
        IDmXaRepository dmXaRepository { get; }
        IDmHuyenRepository dmHuyenRepository { get; }
        IDmdvqlRepository dmdvqlRepository { get; }
        IDmtinhRepository dmtinhRepository { get; }
        void Commit();
        void Rollback();
    }
}
