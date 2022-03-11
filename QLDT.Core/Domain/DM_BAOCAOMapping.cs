using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_BAOCAOMapping : ClassMap<DM_BAOCAO>
    {
        public DM_BAOCAOMapping()
        {
            Table("DM_BAOCAO");
            Id(x => x.id).Column("ID").GeneratedBy.SequenceIdentity("DMBAOCAO_SEQ");
            Map(x => x.banhanh).Nullable();
            Map(x => x.ma_baocao).Not.Nullable();
            Map(x => x.ngay_sua).Nullable();
            Map(x => x.ngay_tao).Nullable();
            Map(x => x.nguoi_sua).Nullable();
            Map(x => x.nguoi_tao).Nullable();
            Map(x => x.noidung).Not.Nullable();
            Map(x => x.sohieu).Nullable();
            Map(x => x.trang_thai).Nullable();
            Map(x => x.type).Nullable();
        }
    }
}
