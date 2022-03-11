using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_BAOCAO
    {
        public virtual long id { get; set; }
        public virtual string ma_baocao { get; set; }
        public virtual string noidung { get; set; }
        public virtual decimal? trang_thai { get; set; }
        public virtual decimal? type { get; set; }
        public virtual string nguoi_tao { get; set; }
        public virtual DateTime? ngay_tao { get; set; }
        public virtual string nguoi_sua { get; set; }
        public virtual DateTime? ngay_sua { get; set; }
        public virtual string sohieu { get; set; }
        public virtual string banhanh { get; set; }
    }
}
