using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_HUYEN
    {
        public virtual dmHuyenPK dmhuyenpk { get; set; }
        public virtual string ma_hc { get; set; }
        public virtual string ten_huyen { get; set; }
        public virtual string dien_giai { get; set; }
        public virtual string giam_huyen { get; set; }
        public virtual string danh_dau { get; set; }
        public virtual DateTime? ngay_bd { get; set; }
        public virtual DateTime? ngay_kt { get; set; }
        public virtual int? Readonly { get; set; }
        public virtual int? status { get; set; }
    }
    public class dmHuyenPK
    {
        public virtual string ma_huyen { get; set; }
        public virtual string ma_tinh { get; set; }

        public override bool Equals(object obj)
        {
            if (obj == null || (string)obj == "") return false;
            var id = (dmHuyenPK)obj;
            if (ma_huyen == id.ma_huyen && ma_tinh == id.ma_tinh) return true;
            return false;
        }

        public override int GetHashCode()
        {
            return (ma_huyen + "|" + ma_tinh).GetHashCode();
        }
    }
}
