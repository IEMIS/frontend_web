(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[56],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return f}));var n=a(55),r=a.n(n),c=a(56),o="https://iemis.herokuapp.com/api/v1",s=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return n=e.sent,c=n.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district"),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e)}));case 3:return a=e.sent,n=a.json(),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district/").concat(t),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return n=e.sent,c=n.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district/").concat(t),{method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(n)}}).catch((function(e){console.log(e)}));case 3:return c=e.sent,s=c.json(),e.abrupt("return",s);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return n=e.sent,c=n.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}()},279:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(55),r=a.n(n),c=a(56),o=a(64),s=a(0),i=a.n(s),u=a(81),l=a(89),f=a(82),p=a(165),d=a(30),m=a(63),h=a.n(m),b=a(112),v=a(2);function j(e){var t=Object(v.g)().id,a=i.a.useState(!1),n=Object(o.a)(a,2),s=n[0],m=n[1],j=i.a.useState(!1),y=Object(o.a)(j,2),O=y[0],x=y[1],E=i.a.useState(!1),g=Object(o.a)(E,2),w=g[0],C=g[1],N=i.a.useState(!0),k=Object(o.a)(N,2),B=k[0],P=k[1],T=function(e){e.preventDefault(),x(!1),P(!0),m(!s)};return i.a.useEffect((function(){var e=function(){var e=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,Object(b.e)(t);case 3:if(a=e.sent){e.next=8;break}return h.a.fire("Oops...","internet server error, Please, check your network connection","error"),P(!1),e.abrupt("return",x(!0));case 8:if(!a.error){e.next=12;break}return h.a.fire("Oops...",a.error,"error"),P(!1),e.abrupt("return",x(!0));case 12:if(!a.message){e.next=18;break}return h.a.mixin({toast:!0,timerProgressBar:!0,position:"top-end",showConfirmButton:!1,timer:3e3}).fire({showClass:!0,type:"success",title:a.message}),P(!1),C(!0),e.abrupt("return",h.a.fire("Great",a.message,"success"));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();h.a.fire({title:"Do you sure to delete this user?",allowOutsideClick:!1,showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Yes",denyButtonText:"No",customClass:{cancelButton:"order-1 right-gap",confirmButton:"order-2",denyButton:"order-3"}}).then((function(t){t.isConfirmed?(h.a.fire("Delete confirm","","success"),e()):t.isDenied&&(h.a.fire("Action canceled","","info"),C(!0))}))}),[s,t]),i.a.createElement(d.a,null,function(){if(w)return i.a.createElement(v.a,{to:"/admin/districts/read"})}(),function(){if(B)return i.a.createElement(d.a,null,i.a.createElement(u.a,null,i.a.createElement(l.a,null,i.a.createElement(f.a,null,i.a.createElement(f.a.Header,null,i.a.createElement(f.a.Title,{as:"h5"},"Wait !!!.")),i.a.createElement(f.a.Body,null,i.a.createElement(u.a,null,i.a.createElement(l.a,null,i.a.createElement("h1",null,"Requesting to Delete District "))))))))}(),function(){if(O)return i.a.createElement(d.a,null,i.a.createElement(u.a,null,i.a.createElement(l.a,null,i.a.createElement(f.a,null,i.a.createElement(f.a.Header,null,i.a.createElement(f.a.Title,{as:"h3"},"Error in Deleting District .")),i.a.createElement(f.a.Body,null,i.a.createElement(u.a,null,i.a.createElement(l.a,null,i.a.createElement("h1",null,"District data failed to delete, Try again ",i.a.createElement(p.a,{variant:"primary",onClick:T},"Reload")," "))))))))}())}},61:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="CardContext",t.a=r},81:function(e,t,a){"use strict";var n=a(51),r=a(52),c=a(53),o=a.n(c),s=a(0),i=a.n(s),u=a(54),l=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.noGutters,f=e.as,p=void 0===f?"div":f,d=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(u.a)(a,"row"),h=m+"-cols",b=[];return l.forEach((function(e){var t,a=d[e];delete d[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&b.push(""+h+n+"-"+t)})),i.a.createElement(p,Object(n.a)({ref:t},d,{className:o.a.apply(void 0,[c,m,s&&"no-gutters"].concat(b))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},82:function(e,t,a){"use strict";var n=a(51),r=a(52),c=a(53),o=a.n(c),s=a(0),i=a.n(s),u=a(54),l=a(65),f=function(e){return i.a.forwardRef((function(t,a){return i.a.createElement("div",Object(n.a)({},t,{ref:a,className:o()(t.className,e)}))}))},p=a(61),d=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,l=e.as,f=void 0===l?"img":l,p=Object(r.a)(e,["bsPrefix","className","variant","as"]),d=Object(u.a)(a,"card-img");return i.a.createElement(f,Object(n.a)({ref:t,className:o()(s?d+"-"+s:d,c)},p))}));d.displayName="CardImg",d.defaultProps={variant:null};var m=d,h=f("h5"),b=f("h6"),v=Object(l.a)("card-body"),j=Object(l.a)("card-title",{Component:h}),y=Object(l.a)("card-subtitle",{Component:b}),O=Object(l.a)("card-link",{Component:"a"}),x=Object(l.a)("card-text",{Component:"p"}),E=Object(l.a)("card-header"),g=Object(l.a)("card-footer"),w=Object(l.a)("card-img-overlay"),C=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,l=e.bg,f=e.text,d=e.border,m=e.body,h=e.children,b=e.as,j=void 0===b?"div":b,y=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(u.a)(a,"card"),x=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return i.a.createElement(p.a.Provider,{value:x},i.a.createElement(j,Object(n.a)({ref:t},y,{className:o()(c,O,l&&"bg-"+l,f&&"text-"+f,d&&"border-"+d)}),m?i.a.createElement(v,null,h):h))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=m,C.Title=j,C.Subtitle=y,C.Body=v,C.Link=O,C.Text=x,C.Header=E,C.Footer=g,C.ImgOverlay=w;t.a=C},89:function(e,t,a){"use strict";var n=a(51),r=a(52),c=a(53),o=a.n(c),s=a(0),i=a.n(s),u=a(54),l=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.as,f=void 0===s?"div":s,p=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(u.a)(a,"col"),m=[],h=[];return l.forEach((function(e){var t,a,n,r=p[e];if(delete p[e],"object"===typeof r&&null!=r){var c=r.span;t=void 0===c||c,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+d+o:""+d+o+"-"+t),null!=n&&h.push("order"+o+"-"+n),null!=a&&h.push("offset"+o+"-"+a)})),m.length||m.push(d),i.a.createElement(f,Object(n.a)({},p,{ref:t,className:o.a.apply(void 0,[c].concat(m,h))}))}));f.displayName="Col",t.a=f}}]);
//# sourceMappingURL=56.3ad0c640.chunk.js.map