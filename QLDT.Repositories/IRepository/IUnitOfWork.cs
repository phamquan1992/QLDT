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
        IDM_BAOCAORepository dM_BAOCAORepository { get; }
        IUSERDATARepository uSERDATARepository { get; }
        INGUOIDUNGRepository nGUOIDUNGRepository { get; }
        INHOMCHUCNANGRepository nHOMCHUCNANGRepository { get; }
        INHOMCHUCNANG_OBJECTRepository nHOMCHUCNANG_OBJECTRepository { get; }
        IOBJECT_VIEWRepository oBJECT_VIEWRepository { get; }
        void Commit();
        void Rollback();
    }
}
