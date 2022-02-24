using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_HUYENMapping : ClassMap<DM_HUYEN>
    {
        public DM_HUYENMapping()
        {
            Table("DM_HUYEN");
            CompositeId(x => x.dmhuyenpk).KeyProperty(x => x.ma_tinh).KeyProperty(x => x.ma_huyen);
            Map(x => x.danh_dau).Nullable();
            Map(x => x.dien_giai).Nullable();
            Map(x => x.giam_huyen).Nullable();
            Map(x => x.ma_hc).Nullable();
            Map(x => x.ngay_bd).Nullable();
            Map(x => x.ngay_kt).Nullable();
            Map(x => x.Readonly).Nullable();
            Map(x => x.status).Nullable();
            Map(x => x.ten_huyen).Not.Nullable();
        }
    }
}
