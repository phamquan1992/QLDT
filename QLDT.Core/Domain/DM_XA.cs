using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_XA
    {
        public virtual DmXaPk dmxapk { get; set; }
        public virtual string ma_hc { get; set; }
        public virtual string ten_xa { get; set; }
        public virtual string khu_vuc { get; set; }
        public virtual decimal? hskv { get; set; }
        public virtual string giam_xa { get; set; }
        public virtual int? vung_cao { get; set; }
        public virtual string dien_giai { get; set; }
        public virtual DateTime? ngay_bd { get; set; }
        public virtual DateTime? ngay_kt { get; set; }
        public virtual int? Readonly { get; set; }
    }
    public class DmXaPk
    {
        public virtual string ma_tinh { get; set; }
        public virtual string ma_huyen { get; set; }
        public virtual string ma_xa { get; set; }
        public override bool Equals(object obj)
        {
            if (obj == null || (string)obj == "") return false;
            var id = (DmXaPk)obj;
            if (ma_huyen == id.ma_huyen && ma_tinh == id.ma_tinh && ma_xa == id.ma_xa) return true;
            return false;
        }

        public override int GetHashCode()
        {
            return (ma_huyen + "|" + ma_tinh + "|" + ma_xa).GetHashCode();
        }
    }
}
