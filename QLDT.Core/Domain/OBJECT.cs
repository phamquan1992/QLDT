using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class OBJECT_VIEW
    {
        public virtual int OBJECTID { get; set; }
        public virtual int APPID { get; set; }
        public virtual string NAME { get; set; }
        public virtual int LOCKED { get; set; }
    }
}
