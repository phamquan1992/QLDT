using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class NHOMCHUCNANG_OBJECTMapping:ClassMap<NHOMCHUCNANG_OBJECT>
    {
        public NHOMCHUCNANG_OBJECTMapping()
        {
            Table("NHOMCHUCNANG_OBJECT");
            CompositeId(x => x.nhomcn_object_pk).KeyProperty(x => x.OBJECTID).KeyProperty(x => x.NHOMCHUCNANGID);
        }
    }
}
