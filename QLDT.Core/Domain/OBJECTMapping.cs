using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class OBJECTMapping:ClassMap<OBJECT_VIEW>
    {
        public OBJECTMapping()
        {
            Table("OBJECT");
            Id(x => x.OBJECTID).GeneratedBy.SequenceIdentity("OBJECT_SEQ");
            Map(x => x.APPID).Not.Nullable();
            Map(x => x.LOCKED).Nullable();
            Map(x => x.NAME).Nullable();
        }
    }
}
