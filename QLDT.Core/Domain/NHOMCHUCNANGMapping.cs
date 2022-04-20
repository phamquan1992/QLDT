using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class NHOMCHUCNANGMapping:ClassMap<NHOMCHUCNANG>
    {
        public NHOMCHUCNANGMapping()
        {
            Table("NHOMCHUCNANG");
            Id(x => x.nhomchucnangid).GeneratedBy.SequenceIdentity("NHOMCHUCNANG_SEQ");
            Map(x => x.description).Not.Nullable();
            Map(x => x.moduleid).Nullable();
        }
    }
}
