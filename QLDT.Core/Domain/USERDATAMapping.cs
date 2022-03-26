using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace QLDT.Core.Domain
{
    public class USERDATAMapping : ClassMap<USERDATA>
    {
        public USERDATAMapping()
        {
            Table("USERDATA");
            Id(x => x.userid).Column("USERID").GeneratedBy.SequenceIdentity("SEQ_USER");
            Map(x => x.email).Nullable();
            Map(x => x.password).Not.Nullable();
            Map(x => x.passwordformat).Nullable();
            Map(x => x.passwordsalt).Nullable();
            Map(x => x.username).Not.Nullable();
        }
    }
}
