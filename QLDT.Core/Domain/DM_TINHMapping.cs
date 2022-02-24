using FluentNHibernate.Mapping;

namespace QLDT.Core.Domain
{
    public class DM_TINHMapping:ClassMap<DM_TINH>
    {
        public DM_TINHMapping()
        {
            Table("DM_TINH");
            Id(x => x.ma_tinh);
            Map(x => x.ngay_bd).Nullable();
            Map(x => x.ngay_kt).Nullable();
            Map(x => x.Readonly).Nullable();
            Map(x => x.status).Nullable();
            Map(x => x.ten_tinh).Not.Nullable();
        }
    }
}
