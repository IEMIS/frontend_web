(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[91],{123:function(e,a,t){"use strict";var l=t(51),n=t(52),r=t(53),c=t.n(r),m=t(0),s=t.n(m),E=t(54),u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,m=e.striped,u=e.bordered,o=e.borderless,d=e.hover,i=e.size,b=e.variant,h=e.responsive,v=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(E.a)(t,"table"),f=c()(r,p,b&&p+"-"+b,i&&p+"-"+i,m&&p+"-striped",u&&p+"-bordered",o&&p+"-borderless",d&&p+"-hover"),N=s.a.createElement("table",Object(l.a)({},v,{className:f,ref:a}));if(h){var x=p+"-responsive";return"string"===typeof h&&(x=x+"-"+h),s.a.createElement("div",{className:x},N)}return N}));a.a=u},273:function(e,a,t){"use strict";t.r(a);var l=t(15),n=t(16),r=t(18),c=t(17),m=t(0),s=t.n(m),E=t(81),u=t(89),o=t(82),d=t(348),i=t(123),b=t(95),h=t.n(b),v=t(30),p=t(21),f=[{key:"Male",color:"#FE8A7D",values:[{label:"Pre School",value:10},{label:"Year 1",value:20},{label:"Year 2",value:15},{label:"Year 3",value:21}]},{key:"Female",color:"#1de9b6",values:[{label:"Pre School",value:15},{label:"Year 1",value:20},{label:"Year 2",value:11},{label:"Year 3",value:14}]},{key:"Total",color:"#3ebfea",values:[{label:"Pre School",value:50},{label:"Year 1",value:100},{label:"Year 2",value:59},{label:"Year 3",value:69}]}],N=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(v.a,null,s.a.createElement(E.a,null,s.a.createElement(u.a,{md:4,xl:4},s.a.createElement(o.a,null,s.a.createElement(o.a.Header,null,s.a.createElement(o.a.Title,null,"Seleect District")),s.a.createElement(o.a.Body,null,s.a.createElement(d.a.Group,{controlId:"exampleForm.ControlSelect1"},s.a.createElement(d.a.Label,null,"District"),s.a.createElement(d.a.Control,{as:"select"},s.a.createElement("option",null,"Select district"),s.a.createElement("option",null,"Select district"),s.a.createElement("option",null,"Select district")))))),s.a.createElement(u.a,{md:4,xl:4},s.a.createElement(o.a,null,s.a.createElement(o.a.Header,null,s.a.createElement(o.a.Title,null,"Select School")),s.a.createElement(o.a.Body,null,s.a.createElement(d.a.Group,{controlId:"exampleForm.ControlSelect1"},s.a.createElement(d.a.Label,null,"Schools list"),s.a.createElement(d.a.Control,{as:"select"},s.a.createElement("option",null,"Select School"))))))),s.a.createElement(E.a,null,s.a.createElement(u.a,{md:5,xl:5},s.a.createElement(o.a,null,s.a.createElement(o.a.Body,null,s.a.createElement(p.b,{to:"/admin/students"},s.a.createElement("div",{className:"row d-flex align-items-center"},s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",null,"Male "),s.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},s.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," 1,600")),s.a.createElement("div",{className:"col-6"},s.a.createElement("h6",null,"Male "),s.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},s.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," 1,420"))),s.a.createElement("br",null),s.a.createElement("div",{className:"row d-flex align-items-center"},s.a.createElement("div",{className:"col-9"},s.a.createElement("h6",{className:"mb-4"},"Total number of Students"),s.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},s.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," 3,020"))),s.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},s.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}))))))),s.a.createElement(E.a,null,s.a.createElement(u.a,{md:12,xl:9},s.a.createElement(E.a,null,s.a.createElement(o.a,{className:"Recent-Users"},s.a.createElement(o.a.Header,null,s.a.createElement(o.a.Title,{as:"h5"},"Students per class Summary")),s.a.createElement(o.a.Body,{className:"px-0 py-2"},s.a.createElement(h.a,{id:"barChart",type:"multiBarChart",datum:f,x:"label",y:"value",height:380,showValues:!0,groupSpacing:.5}))),s.a.createElement(u.a,{md:6,xl:6},s.a.createElement(o.a,{className:"card-social"},s.a.createElement(o.a.Header,null,s.a.createElement(o.a.Title,{as:"h5"},"Teachering Staff ")),s.a.createElement(o.a.Body,{className:"border-bottom"},s.a.createElement(i.a,{responsive:!0,striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," "),s.a.createElement("th",null,"ECE"),s.a.createElement("th",null,"PRY"),s.a.createElement("th",null,"SEC"),s.a.createElement("th",null,"TVET"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Male"),s.a.createElement("td",null,"120"),s.a.createElement("td",null,"450"),s.a.createElement("td",null,"452"),s.a.createElement("td",null,"15")),s.a.createElement("tr",null,s.a.createElement("td",null,"Female"),s.a.createElement("td",null,"158"),s.a.createElement("td",null,"782"),s.a.createElement("td",null,"651"),s.a.createElement("td",null,"80")),s.a.createElement("tr",null,s.a.createElement("td",null,"Total"),s.a.createElement("td",null,"278"),s.a.createElement("td",null,"1232"),s.a.createElement("td",null,"1103"),s.a.createElement("td",null,"95"))))))),s.a.createElement(u.a,{md:6,xl:6},s.a.createElement(o.a,{className:"card-social"},s.a.createElement(o.a.Header,null,s.a.createElement(o.a.Title,{as:"h5"},"None Teachering Staff ")),s.a.createElement(o.a.Body,{className:"border-bottom"},s.a.createElement(i.a,{responsive:!0,striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," "),s.a.createElement("th",null,"ECE"),s.a.createElement("th",null,"PRY"),s.a.createElement("th",null,"SEC"),s.a.createElement("th",null,"TVET"),s.a.createElement("th",null,"Total"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Male"),s.a.createElement("td",null,"120"),s.a.createElement("td",null,"450"),s.a.createElement("td",null,"452"),s.a.createElement("td",null,"15"),s.a.createElement("td",null,"1037")),s.a.createElement("tr",null,s.a.createElement("td",null,"Female"),s.a.createElement("td",null,"158"),s.a.createElement("td",null,"782"),s.a.createElement("td",null,"651"),s.a.createElement("td",null,"80"),s.a.createElement("td",null,"16040")),s.a.createElement("tr",null,s.a.createElement("td",null,"Total"),s.a.createElement("td",null,"278"),s.a.createElement("td",null,"1232"),s.a.createElement("td",null,"1103"),s.a.createElement("td",null,"95"),s.a.createElement("td",null,"40398"))))))))),s.a.createElement(u.a,{md:12,xl:3},s.a.createElement(o.a,{className:"card-event"},s.a.createElement(o.a.Body,null,s.a.createElement("div",{className:"row align-items-center justify-content-center"},s.a.createElement("div",{className:"col"},s.a.createElement("h5",{className:"m-0"},"Upcoming Event")),s.a.createElement("div",{className:"col-auto"},s.a.createElement("label",{className:"label theme-bg2 text-white f-14 f-w-400 float-right"},"34%"))),s.a.createElement("h2",{className:"mt-2 f-w-300"},"Data",s.a.createElement("sub",{className:"text-muted f-14"},"Management")),s.a.createElement("h6",{className:"text-muted mt-3 mb-0"},"You can participate in event "),s.a.createElement("i",{className:"fa fa-angellist text-c-purple f-50"}))),s.a.createElement(o.a,null,s.a.createElement(o.a.Body,{className:"border-bottom"},s.a.createElement("div",{className:"row d-flex align-items-center"},s.a.createElement("div",{className:"col-auto"},s.a.createElement("i",{className:"feather icon-zap f-30 text-c-green"})),s.a.createElement("div",{className:"col"},s.a.createElement("h3",{className:"f-w-300"},"20"),s.a.createElement("span",{className:"d-block text-uppercase"},"Student transfer Request"))))))),s.a.createElement(E.a,null))}}]),t}(s.a.Component);a.default=N}}]);
//# sourceMappingURL=91.a4655659.chunk.js.map