using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
   public class DM_DVQL
    {
        public virtual string ma_dvql { get; set; }
        public virtual string ten_dvql { get; set; }
        public virtual string ma_captren { get; set; }
        public virtual string user_code { get; set; }
        public virtual DateTime? date_update { get; set; }
        public virtual int cap { get; set; }
        public virtual string diachi { get; set; }
        public virtual string masothue { get; set; }
        public virtual string taikhoan { get; set; }
        public virtual string nganhang { get; set; }
        public virtual string tinhtp { get; set; }
        public virtual string dienthoai { get; set; }
        public virtual string fax { get; set; }
        public virtual string email { get; set; }
        public virtual string website { get; set; }
        public virtual string daidien { get; set; }
        public virtual DateTime? ngay_bd { get; set; }
        public virtual DateTime? ngay_kt { get; set; }
        public virtual int? fontstyle { get; set; }
        public virtual int? Readonly { get; set; }
        public virtual int? status { get; set; }
        public virtual int? orderidx { get; set; }
        public virtual decimal? tyle { get; set; }
        public virtual string ma_huyen { get; set; }
        public virtual string chuc_danh { get; set; }
        public virtual string giam_doc { get; set; }
        public virtual string kt_truong { get; set; }
        public virtual string ma_dvns { get; set; }
        public virtual DateTime? ngay_qd { get; set; }
        public virtual string so_qd { get; set; }
        public virtual string thu_quy { get; set; }
        public virtual string mauin_thuchi { get; set; }
        public virtual string chucdanh_rep_ktt { get; set; }
        public virtual string nguoi_tao { get; set; }
        public virtual DateTime? ngay_tao { get; set; }
        public virtual string nguoi_sua { get; set; }
        public virtual DateTime? ngay_sua { get; set; }
        public virtual string nguoilap_thuchi { get; set; }
        public virtual int? isttsp { get; set; }
    }
}
