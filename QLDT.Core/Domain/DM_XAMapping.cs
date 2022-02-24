using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_XAMapping : ClassMap<DM_XA>
    {
        public DM_XAMapping()
        {
            Table("DM_XA");
            CompositeId(x => x.dmxapk).KeyProperty(x => x.ma_tinh).KeyProperty(x => x.ma_huyen).KeyProperty(x => x.ma_xa);
            Map(x => x.ma_hc).Nullable();
            Map(x => x.ten_xa).Nullable();
            Map(x => x.khu_vuc).Nullable();
            Map(x => x.hskv).Nullable();
            Map(x => x.giam_xa).Nullable();
            Map(x => x.vung_cao).Nullable();
            Map(x => x.dien_giai).Nullable();
            Map(x => x.ngay_bd).Nullable();
            Map(x => x.ngay_kt).Nullable();
            Map(x => x.Readonly).Nullable();
        }
    }
}
