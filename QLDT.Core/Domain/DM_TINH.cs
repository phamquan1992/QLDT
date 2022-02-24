using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_TINH
    {
        public virtual string ma_tinh { get; set; }
        public virtual string ten_tinh { get; set; }
        public virtual DateTime? ngay_bd { get; set; }
        public virtual DateTime? ngay_kt { get; set; }
        public virtual int? Readonly { get; set; }
        public virtual int? status { get; set; }
    }
}
