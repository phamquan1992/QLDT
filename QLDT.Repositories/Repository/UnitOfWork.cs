using NHibernate;
using QLDT.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace QLDT.Repositories.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        public IDmchucvuRepository danhmucRepository { get; }
        public IDmHuyenRepository dmHuyenRepository { get; }
        public IDmdvqlRepository dmdvqlRepository { get; }
        public IDmtinhRepository dmtinhRepository { get; }
        public IDmXaRepository dmXaRepository { get; }
        public IDM_BAOCAORepository dM_BAOCAORepository { get; }
        public IUSERDATARepository uSERDATARepository { get; }
        public INHOMCHUCNANGRepository nHOMCHUCNANGRepository { get; }
        public INGUOIDUNGRepository nGUOIDUNGRepository { get; }
        public INHOMCHUCNANG_OBJECTRepository nHOMCHUCNANG_OBJECTRepository { get; }
        public IOBJECT_VIEWRepository oBJECT_VIEWRepository { get; }
        private readonly ISessionFactory _sessionFactory;
        private readonly ITransaction _transaction;
        public ISession Session { get; private set; }
        public UnitOfWork(
            ISessionFactory sessionFactory,
            IDmchucvuRepository danhmucRepository,
            IDmXaRepository dmXaRepository,
            IDmHuyenRepository dmHuyenRepository,
            IDmdvqlRepository dmdvqlRepository,
            IDmtinhRepository dmtinhRepository,
            IDM_BAOCAORepository dM_BAOCAORepository,
            IUSERDATARepository uSERDATARepository,
            INGUOIDUNGRepository nGUOIDUNGRepository,
            INHOMCHUCNANGRepository nHOMCHUCNANGRepository,
            INHOMCHUCNANG_OBJECTRepository nHOMCHUCNANG_OBJECTRepository,
            IOBJECT_VIEWRepository oBJECT_VIEWRepository
            )
        {
            this._sessionFactory = sessionFactory;
            this.Session = _sessionFactory.OpenSession();
            this.Session.FlushMode = FlushMode.Auto;
            if (!Session.IsOpen && Session.Connection.State != ConnectionState.Open)
                this.Session = _sessionFactory.OpenSession();
            this._transaction = Session.BeginTransaction(IsolationLevel.ReadCommitted);

            this.danhmucRepository = danhmucRepository;
            this.dmXaRepository = dmXaRepository;
            this.dmHuyenRepository = dmHuyenRepository;
            this.dmdvqlRepository = dmdvqlRepository;
            this.dmtinhRepository = dmtinhRepository;
            this.dM_BAOCAORepository = dM_BAOCAORepository;
            this.uSERDATARepository = uSERDATARepository;
            this.nGUOIDUNGRepository = nGUOIDUNGRepository;
            this.nHOMCHUCNANGRepository = nHOMCHUCNANGRepository;
            this.nHOMCHUCNANG_OBJECTRepository = nHOMCHUCNANG_OBJECTRepository;
            this.oBJECT_VIEWRepository = oBJECT_VIEWRepository;
        }
        public void Dispose()
        {
            if (Session.IsOpen)
            {
                Session.Close();
            }
        }

        public void Commit()
        {
            if (!_transaction.IsActive)
            {
                throw new InvalidOperationException("No active transation");
            }

            _transaction.Commit();
        }

        public void Rollback()
        {
            if (_transaction.IsActive)
            {
                _transaction.Rollback();
            }
        }
    }
}
