(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[53],{124:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return l}));var r=a(55),n=a.n(r),c=a(56),o="https://iemis.herokuapp.com/api/v1",s=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/students"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,c=r.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/students"),{method:"GET",body:JSON.stringify(t),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,c=r.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/students/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,c=r.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/school"),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e)}));case 3:return a=e.sent,r=a.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},239:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var r=a(55),n=a.n(r),c=a(56),o=a(64),s=a(0),u=a.n(s),i=a(81),l=a(89),f=a(82),p=a(165),d=a(30),m=a(63),b=a.n(m),h=a(124),v=a(2);function j(e){var t=Object(v.g)().id,a=u.a.useState(!1),r=Object(o.a)(a,2),s=r[0],m=r[1],j=u.a.useState(!1),O=Object(o.a)(j,2),x=O[0],y=O[1],g=u.a.useState(!1),E=Object(o.a)(g,2),w=E[0],N=E[1],C=function(e){e.preventDefault(),y(!1),m(!s)};return u.a.useEffect((function(){(function(){var e=Object(c.a)(n.a.mark((function e(){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)(t);case 2:if(a=e.sent){e.next=7;break}return b.a.fire("Oops...","internet server error, Please, check your network connection","error"),y(!0),e.abrupt("return");case 7:if(!a.error){e.next=11;break}return b.a.fire("Oops...",a.error,"error"),y(!0),e.abrupt("return");case 11:if(!a.message){e.next=16;break}return b.a.fire("Successful",a.message,"success"),N(!0),r=b.a.mixin({toast:!0,timerProgressBar:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),e.abrupt("return",r.fire({showClass:!0,type:"success",title:a.message}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s,t]),u.a.createElement(d.a,null,function(){if(w)return u.a.createElement(v.a,{to:"/admin/schools/read"})}(),function(){if(x)return u.a.createElement(d.a,null,u.a.createElement(i.a,null,u.a.createElement(l.a,null,u.a.createElement(f.a,null,u.a.createElement(f.a.Header,null,u.a.createElement(f.a.Title,{as:"h3"},"Error in Deleting School .")),u.a.createElement(f.a.Body,null,u.a.createElement(i.a,null,u.a.createElement(l.a,null,u.a.createElement("h1",null,"School data failed to delete, Try again ",u.a.createElement(p.a,{variant:"primary",onClick:C},"Reload")," "))))))))}())}},61:function(e,t,a){"use strict";var r=a(0),n=a.n(r).a.createContext(null);n.displayName="CardContext",t.a=n},81:function(e,t,a){"use strict";var r=a(51),n=a(52),c=a(53),o=a.n(c),s=a(0),u=a.n(s),i=a(54),l=["xl","lg","md","sm","xs"],f=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.noGutters,f=e.as,p=void 0===f?"div":f,d=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(i.a)(a,"row"),b=m+"-cols",h=[];return l.forEach((function(e){var t,a=d[e];delete d[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&h.push(""+b+r+"-"+t)})),u.a.createElement(p,Object(r.a)({ref:t},d,{className:o.a.apply(void 0,[c,m,s&&"no-gutters"].concat(h))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},82:function(e,t,a){"use strict";var r=a(51),n=a(52),c=a(53),o=a.n(c),s=a(0),u=a.n(s),i=a(54),l=a(65),f=function(e){return u.a.forwardRef((function(t,a){return u.a.createElement("div",Object(r.a)({},t,{ref:a,className:o()(t.className,e)}))}))},p=a(61),d=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,l=e.as,f=void 0===l?"img":l,p=Object(n.a)(e,["bsPrefix","className","variant","as"]),d=Object(i.a)(a,"card-img");return u.a.createElement(f,Object(r.a)({ref:t,className:o()(s?d+"-"+s:d,c)},p))}));d.displayName="CardImg",d.defaultProps={variant:null};var m=d,b=f("h5"),h=f("h6"),v=Object(l.a)("card-body"),j=Object(l.a)("card-title",{Component:b}),O=Object(l.a)("card-subtitle",{Component:h}),x=Object(l.a)("card-link",{Component:"a"}),y=Object(l.a)("card-text",{Component:"p"}),g=Object(l.a)("card-header"),E=Object(l.a)("card-footer"),w=Object(l.a)("card-img-overlay"),N=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,l=e.bg,f=e.text,d=e.border,m=e.body,b=e.children,h=e.as,j=void 0===h?"div":h,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(i.a)(a,"card"),y=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return u.a.createElement(p.a.Provider,{value:y},u.a.createElement(j,Object(r.a)({ref:t},O,{className:o()(c,x,l&&"bg-"+l,f&&"text-"+f,d&&"border-"+d)}),m?u.a.createElement(v,null,b):b))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=m,N.Title=j,N.Subtitle=O,N.Body=v,N.Link=x,N.Text=y,N.Header=g,N.Footer=E,N.ImgOverlay=w;t.a=N},89:function(e,t,a){"use strict";var r=a(51),n=a(52),c=a(53),o=a.n(c),s=a(0),u=a.n(s),i=a(54),l=["xl","lg","md","sm","xs"],f=u.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.as,f=void 0===s?"div":s,p=Object(n.a)(e,["bsPrefix","className","as"]),d=Object(i.a)(a,"col"),m=[],b=[];return l.forEach((function(e){var t,a,r,n=p[e];if(delete p[e],"object"===typeof n&&null!=n){var c=n.span;t=void 0===c||c,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+d+o:""+d+o+"-"+t),null!=r&&b.push("order"+o+"-"+r),null!=a&&b.push("offset"+o+"-"+a)})),m.length||m.push(d),u.a.createElement(f,Object(r.a)({},p,{ref:t,className:o.a.apply(void 0,[c].concat(m,b))}))}));f.displayName="Col",t.a=f}}]);
//# sourceMappingURL=53.73335d7e.chunk.js.map