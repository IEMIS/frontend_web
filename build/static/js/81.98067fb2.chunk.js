(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[81],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return p}));var a=n(55),r=n.n(a),c=n(56),o="https://iemis.herokuapp.com/api/v1",i=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(n)}}).catch((function(e){console.log(e)}));case 3:return a=e.sent,c=a.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district"),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e)}));case 3:return n=e.sent,a=n.json(),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district/").concat(t),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(n)}}).catch((function(e){console.log(e)}));case 3:return a=e.sent,c=a.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){var c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district/").concat(t),{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return c=e.sent,i=c.json(),e.abrupt("return",i);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(n)}}).catch((function(e){console.log(e)}));case 3:return a=e.sent,c=a.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()},226:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a,r,c,o=n(55),i=n.n(o),u=n(56),l=n(96),s=n(64),p=n(0),d=n.n(p),f=n(81),m=n(89),h=n(82),E=n(165),b=n(30),v=n(63),j=n.n(v),g=n(110),y=n(21),x=n(97),k=n.n(x),O=n(98);function w(){var e=d.a.useState([]),t=Object(s.a)(e,2),n=t[0],o=t[1],p=d.a.useState(!1),v=Object(s.a)(p,2),x=v[0],w=v[1],D=d.a.useState(!1),T=Object(s.a)(D,2),B=T[0],C=T[1],S=d.a.useState(!1),z=Object(s.a)(S,2),A=z[0],L=z[1],P=function(e){e.preventDefault(),C(!1),w(!0),L(!A)},H=["code","names","email","phone","edit","detail","delete"],J=["District Code","District Name","Email","Phone","Edit","Details","Delete"],N=Object(O.a)(y.b)(a||(a=Object(l.a)(["\n        padding: 10px 20px;\n        cursor: pointer;\n        border-radius: 3px;\n        background-color: #f0ad4e;\n        color: #fff;\n    "]))),I=Object(O.a)(y.b)(r||(r=Object(l.a)(["\n        padding: 10px 20px;\n        cursor: pointer;\n        border-radius: 3px;\n        background-color: #3F4D67;\n        color: #fff;\n    "]))),_=Object(O.a)(y.b)(c||(c=Object(l.a)(["\n        padding: 10px 20px;\n        cursor: pointer;\n        border-radius: 3px;\n        background-color: #d43f3a;\n        color: #fff;\n    "]))),F=function(e){var t=e.rowData;return d.a.createElement("td",{variant:"primary"},d.a.createElement(I,{to:"/admin/districts/read/".concat(t._id)}," Details "))},G=function(e){var t=e.rowData;return d.a.createElement("td",{variant:"danger"},d.a.createElement(_,{to:"/admin/districts/delete/".concat(t._id)},"Delete"))},K=function(e){var t=e.rowData;return d.a.createElement("td",null,d.a.createElement(N,{to:"/admin/districts/edit/".concat(t._id)},"Edit"))},R=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,Object(g.d)("12233");case 3:if(t=e.sent){e.next=9;break}return j.a.fire("Oops...","internet server error, Please, check your network connection","error"),w(!1),C(!0),e.abrupt("return");case 9:if(!t.error){e.next=14;break}return j.a.fire("Oops...",t.error,"error"),w(!1),C(!0),e.abrupt("return");case 14:if(!t.message){e.next=19;break}return w(!1),C(!1),o(t.data),e.abrupt("return",j.a.fire("Successful....",t.message,"success"));case 19:return n=j.a.mixin({toast:!0,timerProgressBar:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),e.abrupt("return",n.fire({showClass:!0,type:"success",title:t.message}));case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d.a.useEffect((function(){R()}),[A]),d.a.createElement(b.a,null,function(){if(x)return d.a.createElement(b.a,null,d.a.createElement(f.a,null,d.a.createElement(m.a,null,d.a.createElement(h.a,null,d.a.createElement(h.a.Header,null,d.a.createElement(h.a.Title,{as:"h3"},"Wait loading data ...")),d.a.createElement(h.a.Body,null,d.a.createElement(f.a,null,d.a.createElement(m.a,null,d.a.createElement("h1",null,"District List is loading "))))))))}(),function(){if(B)return d.a.createElement(b.a,null,d.a.createElement(f.a,null,d.a.createElement(m.a,null,d.a.createElement(h.a,null,d.a.createElement(h.a.Header,null,d.a.createElement(h.a.Title,{as:"h3"},"Error in Loading Data.")),d.a.createElement(h.a.Body,null,d.a.createElement(f.a,null,d.a.createElement(m.a,null,d.a.createElement("h1",null,"Districts data Failed to Load, you can refresh ",d.a.createElement(E.a,{variant:"primary",onClick:P},"Reload")," "))))))))}(),function(){if(n&&n.length>0)return d.a.createElement(b.a,null,d.a.createElement(f.a,null,d.a.createElement(m.a,null,d.a.createElement(h.a,null,d.a.createElement(h.a.Header,null,d.a.createElement(h.a.Title,{as:"h5"},"District List"),d.a.createElement("span",{className:"d-block m-t-5"},"manage  ",d.a.createElement("code",null,"the ")," district data here")),d.a.createElement(h.a.Body,null,d.a.createElement(k.a,{tblData:n,tHead:J,customTd:[{custd:F,keyItem:"detail"},{custd:K,keyItem:"edit"},{custd:G,keyItem:"delete"}],dKey:H,search:!0}))))))}())}}}]);
//# sourceMappingURL=81.98067fb2.chunk.js.map