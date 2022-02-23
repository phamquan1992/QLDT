using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_CHUCVUMapping:ClassMap<DM_CHUCVU>
    {
        public DM_CHUCVUMapping()
        {
            Table("DM_CHUCVU");
            Id(x => x.id).GeneratedBy.Sequence("DM_CHUCVU_SEQ");
            Map(x => x.created_by).Nullable();
            Map(x => x.creation_date).Nullable();
            Map(x => x.last_update_by).Nullable();
            Map(x => x.last_update_date).Nullable();
            Map(x => x.ma_chuc_vu).Nullable();
            Map(x => x.mo_ta).Nullable();
            Map(x => x.ten_chuc_vu).Nullable();
        }
    }
}
