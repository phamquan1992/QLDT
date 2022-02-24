using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_DVQLMapping:ClassMap<DM_DVQL>
    {
        public DM_DVQLMapping()
        {
            Table("DM_DVQL");
            Id(x => x.ma_dvql);
            Map(x => x.cap).Nullable();
            Map(x => x.chucdanh_rep_ktt).Nullable();
            Map(x => x.chuc_danh).Nullable();
            Map(x => x.daidien).Nullable();
            Map(x => x.date_update).Nullable();
            Map(x => x.diachi).Nullable();
            Map(x => x.dienthoai).Nullable();
            Map(x => x.email).Nullable();
            Map(x => x.fax).Nullable();
            Map(x => x.fontstyle).Nullable();
            Map(x => x.giam_doc).Nullable();
            Map(x => x.isttsp).Nullable();
            Map(x => x.kt_truong).Nullable();
            Map(x => x.masothue).Nullable();
            Map(x => x.mauin_thuchi).Nullable();
            Map(x => x.ma_captren).Nullable();
            Map(x => x.ma_dvns).Nullable();
            Map(x => x.ma_huyen).Nullable();
            Map(x => x.nganhang).Nullable();
            Map(x => x.ngay_bd).Nullable();
            Map(x => x.ngay_kt).Nullable();
            Map(x => x.ngay_qd).Nullable();
            Map(x => x.ngay_sua).Nullable();
            Map(x => x.ngay_tao).Nullable();
            Map(x => x.nguoilap_thuchi).Nullable();
            Map(x => x.nguoi_sua).Nullable();
            Map(x => x.nguoi_tao).Nullable();
            Map(x => x.orderidx).Nullable();
            Map(x => x.Readonly).Nullable();
            Map(x => x.so_qd).Nullable();
            Map(x => x.status).Nullable();
            Map(x => x.taikhoan).Nullable();
            Map(x => x.ten_dvql).Not.Nullable();
            Map(x => x.thu_quy).Nullable();
            Map(x => x.tinhtp).Nullable();
            Map(x => x.tyle).Nullable();
            Map(x => x.user_code).Nullable();
            Map(x => x.website).Nullable();
        }
    }
}
