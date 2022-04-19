using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class NGUOIDUNGMapping:ClassMap<NGUOIDUNG>
    {
        public NGUOIDUNGMapping()
        {
            Table("NGUOIDUNG");
            Id(x => x.id).Column("ID").GeneratedBy.SequenceIdentity("NGUOIDUNG_SEQ");
            Map(x => x.ten).Not.Nullable();
            Map(x => x.tendangnhap).Not.Nullable();
            Map(x => x.ma_dvql).Nullable();
        }
    }
}
