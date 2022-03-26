using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class USERDATA
    {
        public virtual long userid { get; set; }
        public virtual string username { get; set; }
        public virtual string password { get; set; }
        public virtual long passwordformat { get; set; }
        public virtual string passwordsalt { get; set; }
        public virtual string email { get; set; }

    }
}
