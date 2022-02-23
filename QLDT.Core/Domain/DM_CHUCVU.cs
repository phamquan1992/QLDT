using System;
using System.Text;

namespace QLDT.Core.Domain
{
    public class DM_CHUCVU
    {
        public virtual int id { get; set; }
        public virtual string ma_chuc_vu { get; set; }
        public virtual string ten_chuc_vu { get; set; }
        public virtual string mo_ta { get; set; }
        public virtual DateTime? creation_date { get; set; }
        public virtual DateTime? last_update_date { get; set; }
        public virtual string created_by { get; set; }
        public virtual string last_update_by { get; set; }
    }
}
