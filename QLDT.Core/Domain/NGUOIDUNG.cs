using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class NGUOIDUNG
    {
        public virtual long id { get; set; }
        public virtual string ten { get; set; }
        public virtual string tendangnhap { get; set; }
        public virtual string ma_dvql { get; set; }
    }
}
