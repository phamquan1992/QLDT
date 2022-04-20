using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class NHOMCHUCNANG_OBJECT
    {
        public virtual nhomchucnang_object_pk nhomcn_object_pk { get; set; }
    }
    public class nhomchucnang_object_pk
    {
        public virtual int OBJECTID { get; set; }
        public virtual int NHOMCHUCNANGID { get; set; }

        public override bool Equals(object obj)
        {
            if (obj == null || (string)obj == "") return false;
            var id = (nhomchucnang_object_pk)obj;
            if (OBJECTID == id.OBJECTID && NHOMCHUCNANGID == id.NHOMCHUCNANGID) return true;
            return false;
        }

        public override int GetHashCode()
        {
            return (OBJECTID + "|" + NHOMCHUCNANGID).GetHashCode();
        }
    }
}
