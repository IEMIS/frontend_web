(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[25],{122:function(e,a,t){"use strict";t.d(a,"c",(function(){return s})),t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return o})),t.d(a,"d",(function(){return u}));var r=t(55),n=t.n(r),i=t(56),c="https://iemis.herokuapp.com/api/v1",s=function(){var e=Object(i.a)(n.a.mark((function e(a){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools/signin"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){console.log(e)}));case 3:return t=e.sent,r=t.json(),console.log(r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),l=function(e,a){"undefined"!==typeof window&&(localStorage.setItem("schools-Auth",JSON.stringify(e)),a())},o=function(){var e=Object(i.a)(n.a.mark((function e(a){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools/forgetPassword"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8",accept:"application/json"}}).catch((function(e){return console.log(e)}));case 3:return t=e.sent,r=t.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(n.a.mark((function e(a){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools/resetPassword"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8",accept:"application/json"}}).catch((function(e){return console.log(e)}));case 3:return t=e.sent,r=t.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()},337:function(e,a,t){"use strict";t.r(a);var r=t(55),n=t.n(r),i=t(56),c=t(32),s=t(3),l=t(64),o=t(0),u=t.n(o),d=t(2),m=t(21),f=(t(77),t(30)),p=t(76),b=t(63),v=t.n(b),h=t(122),y=t(71);a.default=function(){var e=Object(o.useState)({loading:!1,resetToken:"",password:"",passwordConfirmation:"",redirectToPage:!1}),a=Object(l.a)(e,2),t=a[0],r=a[1],b=t.loading,g=t.password,O=t.passwordConfirmation,j=t.resetToken,E=t.redirectToPage,N=function(e){return function(a){r(Object(s.a)(Object(s.a)({},t),{},Object(c.a)({error:!1},e,a.target.value)))}},x=function(){var e=Object(i.a)(n.a.mark((function e(){var a,i,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={resetToken:j,password:g,passwordConfirmation:O},e.next=3,Object(h.d)(a);case 3:if(i=e.sent){e.next=7;break}return v.a.fire("Oops...","Internal server error, Please, check your internet connection","error"),e.abrupt("return",r(Object(s.a)(Object(s.a)({},t),{},{loading:!1})));case 7:if(!i.error){e.next=10;break}return v.a.fire("Oops...",i.error,"error"),e.abrupt("return",r(Object(s.a)(Object(s.a)({},t),{},{loading:!1})));case 10:return c=v.a.mixin({toast:!0,timerProgressBar:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),v.a.fire(" :)",i.message,"success"),e.next=14,c.fire({animation:!0,type:"success",title:"password successfully reset"});case 14:r(Object(s.a)(Object(s.a)({},t),{},{loading:!1,redirectToPage:!0})),console.log({data:i});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(f.a,null,function(){if(E)return u.a.createElement(d.a,{to:"/auth/school/login"})}(),u.a.createElement(p.a,null),u.a.createElement(y.a,null),u.a.createElement("div",{className:"auth-wrapper"},u.a.createElement("div",{className:"auth-content"},u.a.createElement("div",{className:"auth-bg"},u.a.createElement("span",{className:"r"}),u.a.createElement("span",{className:"r s"}),u.a.createElement("span",{className:"r s"}),u.a.createElement("span",{className:"r"})),u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body text-center"},u.a.createElement("div",{className:"mb-4"},u.a.createElement("i",{className:"feather icon-unlock auth-icon"})),u.a.createElement("h3",{className:"mb-4"},"Parent | Reset Password "),u.a.createElement("div",{className:"input-group mb-3"},u.a.createElement("input",{type:"input",className:"form-control",onChange:N("resetToken"),value:j,placeholder:"Reset Token"})),u.a.createElement("div",{className:"input-group mb-3"},u.a.createElement("input",{type:"password",className:"form-control",onChange:N("password"),value:g,placeholder:"Password"})),u.a.createElement("div",{className:"input-group mb-4"},u.a.createElement("input",{type:"password",className:"form-control",onChange:N("passwordConfirmation"),value:O,placeholder:"password confirmation"})),b?"Loading ":u.a.createElement("button",{className:"btn btn-primary shadow-2 mb-4",onClick:function(e){return e.preventDefault(),r(Object(s.a)(Object(s.a)({},t),{},{loading:!0})),""===j?(v.a.fire("Oops...","reset token is required!","error"),r(Object(s.a)(Object(s.a)({},t),{},{loading:!1}))):""===g?(v.a.fire("Oops...","password is required!","error"),r(Object(s.a)(Object(s.a)({},t),{},{loading:!1}))):g!==O?(v.a.fire("Oops...","password must match each other!","error"),r(Object(s.a)(Object(s.a)({},t),{},{loading:!1}))):void x()}},"Reset Password"),u.a.createElement("p",{className:"mb-2 text-muted"},"I know password? ",u.a.createElement(m.c,{to:"/auth/school/signin"},"Login")))))))}},57:function(e,a,t){"use strict";a.a={BLANK_LINK:"#!"}},62:function(e,a,t){"use strict";var r=t(51),n=t(52),i=t(53),c=t.n(i),s=t(0),l=t.n(s),o=t(79),u=t(66),d=(t(78),t(70)),m=t(60),f=l.a.forwardRef((function(e,a){var t=e.active,i=e.className,o=e.eventKey,f=e.onSelect,p=e.onClick,b=e.as,v=Object(n.a)(e,["active","className","eventKey","onSelect","onClick","as"]),h=Object(m.b)(o,v.href),y=Object(s.useContext)(m.a),g=Object(s.useContext)(d.a),O=t;if(g){v.role||"tablist"!==g.role||(v.role="tab");var j=g.getControllerId(h),E=g.getControlledId(h);v["data-rb-event-key"]=h,v.id=j||v.id,v["aria-controls"]=E||v["aria-controls"],O=null==t&&null!=h?g.activeKey===h:t}"tab"===v.role&&(v.disabled&&(v.tabIndex=-1,v["aria-disabled"]=!0),v["aria-selected"]=O);var N=Object(u.a)((function(e){p&&p(e),null!=h&&(f&&f(h,e),y&&y(h,e))}));return l.a.createElement(b,Object(r.a)({},v,{ref:a,onClick:N,className:c()(i,O&&"active")}))}));f.defaultProps={disabled:!1};var p=f,b=t(54),v={disabled:!1,as:o.a},h=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.disabled,s=e.className,o=e.href,u=e.eventKey,d=e.onSelect,m=e.as,f=Object(n.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return t=Object(b.a)(t,"nav-link"),l.a.createElement(p,Object(r.a)({},f,{href:o,ref:a,eventKey:u,as:m,disabled:i,onSelect:d,className:c()(s,t,i&&"disabled")}))}));h.displayName="NavLink",h.defaultProps=v;a.a=h},68:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=null;return a.forEach((function(e){if(null==n){var a=e.apply(void 0,t);null!=a&&(n=a)}})),n}return(0,i.default)(r)};var r,n=t(72),i=(r=n)&&r.__esModule?r:{default:r};e.exports=a.default},71:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r=t(0),n=t.n(r),i=t(91),c=t(88),s=t(89),l=t(86),o=t(90);function u(){return n.a.createElement(i.a,{collapseOnSelect:!0,sticky:"top",expand:"lg",bg:"light"},n.a.createElement(c.a,null,n.a.createElement(s.a,{xl:5,sm:5,lg:5},n.a.createElement(i.a.Brand,{href:"/"},"IEMIS")),n.a.createElement(s.a,{xl:7,sm:7,lg:7},n.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(l.a,{className:"mr-auto"},n.a.createElement(l.a.Link,{href:"/"},"Home"),n.a.createElement(l.a.Link,{href:"/about"},"About"),n.a.createElement(l.a.Link,{href:"/feature"},"Feature"),n.a.createElement(l.a.Link,{href:"/auth/student/signin"},"Students Portal"),n.a.createElement(o.a,{title:"Administrator",id:"basic-nav-dropdown"},n.a.createElement(o.a.Item,{href:"/auth/admin/signin"},"Admin"),n.a.createElement(o.a.Item,{href:"/auth/district/signin"},"District"),n.a.createElement(o.a.Item,{href:"/auth/school/signin"},"School"),n.a.createElement(o.a.Divider,null),n.a.createElement(o.a.Item,{href:"/auth/teacher/signin"},"Teacher"),n.a.createElement(o.a.Item,{href:"/auth/staff/signin"},"Staff")),n.a.createElement(l.a.Link,{href:"/auth/parent/signin"},"Parent Portal"))))))}},72:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,n,i,c){var s=n||"<<anonymous>>",l=c||r;if(null==t[r])return a?new Error("Required "+i+" `"+l+"` was not specified in `"+s+"`."):null;for(var o=arguments.length,u=Array(o>6?o-6:0),d=6;d<o;d++)u[d-6]=arguments[d];return e.apply(void 0,[t,r,s,i,l].concat(u))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},73:function(e,a,t){"use strict";var r=t(0),n=t.n(r).a.createContext(null);a.a=n},74:function(e,a,t){"use strict";var r=t(51),n=t(52),i=t(53),c=t.n(i),s=t(0),l=t.n(s),o=t(54),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,s=e.children,u=e.as,d=void 0===u?"div":u,m=Object(n.a)(e,["bsPrefix","className","children","as"]);return t=Object(o.a)(t,"nav-item"),l.a.createElement(d,Object(r.a)({},m,{ref:a,className:c()(i,t)}),s)}));u.displayName="NavItem",a.a=u},75:function(e,a,t){"use strict";a.a={items:[{id:"navigation",title:"admin Menu",type:"group",icon:"icon-navigation",children:[{id:"dashboard",title:"Dashboard",type:"item",url:"/admin",icon:"feather icon-home"},{id:"m-district",title:"District Data",type:"item",url:"/admin/districts",icon:"feather icon-feather"},{id:"m-school",title:"Schools data",type:"item",url:"/admin/schools",icon:"feather icon-book"}]},{id:"district-list",title:"Data Management",type:"group",icon:"icon-ui",children:[{id:"admin-user",title:"Admin",type:"collapse",icon:"feather icon-user",children:[{id:"admin-Read",title:"Read ",type:"item",url:"/admin/users/read"},{id:"admin-Create",title:"Create ",type:"item",url:"/admin/users/create"}]},{id:"district",title:"District ",type:"collapse",icon:"feather icon-feather",children:[{id:"district-read",title:"Read",type:"item",url:"/admin/districts/read"},{id:"district-create",title:"Create",type:"item",url:"/admin/districts/create"}]},{id:"School",title:"School",type:"collapse",icon:"feather icon-book",children:[{id:"school-read",title:"Read",type:"item",url:"/admin/schools/read"},{id:"school-create",title:"Create",type:"item",url:"/admin/schools/create"}]},{id:"students",title:"Students",type:"collapse",icon:"feather icon-users",children:[{id:"students-read",title:"Read",type:"item",url:"/admin/students/read"},{id:"students-create",title:"Create",type:"item",url:"/admin/students/create"}]},{id:"staff",title:"Staff",type:"collapse",icon:"feather icon-users",children:[{id:"staffs-read",title:"Read",type:"item",url:"/admin/staffs/read"},{id:"staffs-create",title:"Create",type:"item",url:"/admin/staffs/create"}]},{id:"teachers",title:"Teachers",type:"collapse",icon:"feather icon-users",children:[{id:"teachers-read",title:"Read",type:"item",url:"/admin/teachers/read"},{id:"teachers-create",title:"Create",type:"item",url:"/admin/teachers/create"}]},{id:"extral",title:"Extral Data",type:"collapse",icon:"feather icon-book",children:[{id:"extral-read",title:"Population",type:"item",url:"/admin/extral/read"}]}]},{id:"pages",title:"Footer",type:"group",icon:"icon-pages",children:[{id:"disabled-menu",title:"Admin Signout",type:"item",url:"/admin/signout",classes:"nav-item ",icon:"feather icon-power"}]}]}},76:function(e,a,t){"use strict";var r=t(15),n=t(16),i=t(18),c=t(17),s=t(0),l=t.n(s),o=t(21),u=t(19),d=t(75),m=t(57),f=t(30),p=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={main:[],item:[]},e.componentWillReceiveProps=function(){d.a.items.map((function(a,t){return a.type&&"group"===a.type&&e.getCollapse(a),!1}))},e.getCollapse=function(a){a.children&&a.children.filter((function(t){return t.type&&"collapse"===t.type?e.getCollapse(t):t.type&&"item"===t.type&&document.location.pathname===u.a.basename+t.url&&e.setState({item:t,main:a}),!1}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.items.map((function(a,t){return a.type&&"group"===a.type&&e.getCollapse(a,t),!1}))}},{key:"render",value:function(){var e,a,t="",r="Welcome";return this.state.main&&"collapse"===this.state.main.type&&(e=l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:m.a.BLANK_LINK},this.state.main.title))),this.state.item&&"item"===this.state.item.type&&(r=this.state.item.title,a=l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:m.a.BLANK_LINK},r)),!1!==this.state.item.breadcrumbs&&(t=l.a.createElement("div",{className:"page-header"},l.a.createElement("div",{className:"page-block"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"page-header-title"},l.a.createElement("h5",{className:"m-b-10"},r)),l.a.createElement("ul",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(o.b,{to:"/"},l.a.createElement("i",{className:"feather icon-home"}))),e,a))))))),document.title=r+" | Datta Able Free React + Redux Admin Template",l.a.createElement(f.a,null,t)}}]),t}(s.Component);a.a=p},77:function(e,a,t){},86:function(e,a,t){"use strict";var r=t(51),n=t(52),i=t(53),c=t.n(i),s=(t(68),t(0)),l=t.n(s),o=t(67),u=t(54),d=t(59),m=t(61),f=t(84),p=t(85),b=t(80),v=t(70),h=t(60),y=t(73),g=function(){},O=l.a.forwardRef((function(e,a){var t,i,c=e.as,o=void 0===c?"ul":c,u=e.onSelect,d=e.activeKey,m=e.role,O=e.onKeyDown,j=Object(n.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(p.a)(),N=Object(s.useRef)(!1),x=Object(s.useContext)(h.a),w=Object(s.useContext)(y.a);w&&(m=m||"tablist",d=w.activeKey,t=w.getControlledId,i=w.getControllerId);var C=Object(s.useRef)(null),P=function(e){var a=C.current;if(!a)return null;var t=Object(f.a)(a,"[data-rb-event-key]:not(.disabled)"),r=a.querySelector(".active");if(!r)return null;var n=t.indexOf(r);if(-1===n)return null;var i=n+e;return i>=t.length&&(i=0),i<0&&(i=t.length-1),t[i]},k=function(e,a){null!=e&&(u&&u(e,a),x&&x(e,a))};Object(s.useEffect)((function(){if(C.current&&N.current){var e=C.current.querySelector("[data-rb-event-key].active");e&&e.focus()}N.current=!1}));var S=Object(b.a)(a,C);return l.a.createElement(h.a.Provider,{value:k},l.a.createElement(v.a.Provider,{value:{role:m,activeKey:Object(h.b)(d),getControlledId:t||g,getControllerId:i||g}},l.a.createElement(o,Object(r.a)({},j,{onKeyDown:function(e){var a;switch(O&&O(e),e.key){case"ArrowLeft":case"ArrowUp":a=P(-1);break;case"ArrowRight":case"ArrowDown":a=P(1);break;default:return}a&&(e.preventDefault(),k(a.dataset.rbEventKey,e),N.current=!0,E())},ref:S,role:m}))))})),j=t(74),E=t(62),N=l.a.forwardRef((function(e,a){var t,i,f,p=Object(o.a)(e,{activeKey:"onSelect"}),b=p.as,v=void 0===b?"div":b,h=p.bsPrefix,y=p.variant,g=p.fill,j=p.justify,E=p.navbar,N=p.className,x=p.children,w=p.activeKey,C=Object(n.a)(p,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),P=Object(u.a)(h,"nav"),k=!1,S=Object(s.useContext)(d.a),T=Object(s.useContext)(m.a);return S?(i=S.bsPrefix,k=null==E||E):T&&(f=T.cardHeaderBsPrefix),l.a.createElement(O,Object(r.a)({as:v,ref:a,activeKey:w,className:c()(N,(t={},t[P]=!k,t[i+"-nav"]=k,t[f+"-"+y]=!!f,t[P+"-"+y]=!!y,t[P+"-fill"]=g,t[P+"-justified"]=j,t))},C),x)}));N.displayName="Nav",N.defaultProps={justify:!1,fill:!1},N.Item=j.a,N.Link=E.a;a.a=N},88:function(e,a,t){"use strict";var r=t(51),n=t(52),i=t(53),c=t.n(i),s=t(0),l=t.n(s),o=t(54),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.fluid,s=e.as,u=void 0===s?"div":s,d=e.className,m=Object(n.a)(e,["bsPrefix","fluid","as","className"]),f=Object(o.a)(t,"container"),p="string"===typeof i?"-"+i:"-fluid";return l.a.createElement(u,Object(r.a)({ref:a},m,{className:c()(d,i?""+f+p:f)}))}));u.displayName="Container",u.defaultProps={fluid:!1},a.a=u},90:function(e,a,t){"use strict";var r=t(51),n=t(52),i=t(53),c=t.n(i),s=t(0),l=t.n(s),o=t(54),u=t(83),d=t(62),m=l.a.forwardRef((function(e,a){var t=e.id,i=e.title,s=e.children,m=e.bsPrefix,f=e.className,p=e.rootCloseEvent,b=e.menuRole,v=e.disabled,h=e.active,y=e.renderMenuOnMount,g=Object(n.a)(e,["id","title","children","bsPrefix","className","rootCloseEvent","menuRole","disabled","active","renderMenuOnMount"]),O=Object(o.a)(void 0,"nav-item");return l.a.createElement(u.a,Object(r.a)({ref:a},g,{className:c()(f,O)}),l.a.createElement(u.a.Toggle,{id:t,eventKey:null,active:h,disabled:v,childBsPrefix:m,as:d.a},i),l.a.createElement(u.a.Menu,{role:b,renderOnMount:y,rootCloseEvent:p},s))}));m.displayName="NavDropdown",m.Item=u.a.Item,m.ItemText=u.a.ItemText,m.Divider=u.a.Divider,m.Header=u.a.Header,a.a=m},91:function(e,a,t){"use strict";var r=t(51),n=t(52),i=t(53),c=t.n(i),s=t(0),l=t.n(s),o=t(67),u=t(65),d=t(54),m=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,s=e.as,o=Object(n.a)(e,["bsPrefix","className","as"]);t=Object(d.a)(t,"navbar-brand");var u=s||(o.href?"a":"span");return l.a.createElement(u,Object(r.a)({},o,{ref:a,className:c()(i,t)}))}));m.displayName="NavbarBrand";var f=m,p=t(87),b=t(59),v=l.a.forwardRef((function(e,a){var t=e.children,i=e.bsPrefix,c=Object(n.a)(e,["children","bsPrefix"]);return i=Object(d.a)(i,"navbar-collapse"),l.a.createElement(b.a.Consumer,null,(function(e){return l.a.createElement(p.a,Object(r.a)({in:!(!e||!e.expanded)},c),l.a.createElement("div",{ref:a,className:i},t))}))}));v.displayName="NavbarCollapse";var h=v,y=t(66),g=l.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.children,u=e.label,m=e.as,f=void 0===m?"button":m,p=e.onClick,v=Object(n.a)(e,["bsPrefix","className","children","label","as","onClick"]);t=Object(d.a)(t,"navbar-toggler");var h=Object(s.useContext)(b.a)||{},g=h.onToggle,O=h.expanded,j=Object(y.a)((function(e){p&&p(e),g&&g()}));return"button"===f&&(v.type="button"),l.a.createElement(f,Object(r.a)({},v,{ref:a,onClick:j,"aria-label":u,className:c()(i,t,!O&&"collapsed")}),o||l.a.createElement("span",{className:t+"-icon"}))}));g.displayName="NavbarToggle",g.defaultProps={label:"Toggle navigation"};var O=g,j=t(60),E=Object(u.a)("navbar-text",{Component:"span"}),N=l.a.forwardRef((function(e,a){var t=Object(o.a)(e,{expanded:"onToggle"}),i=t.bsPrefix,u=t.expand,m=t.variant,f=t.bg,p=t.fixed,v=t.sticky,h=t.className,y=t.children,g=t.as,O=void 0===g?"nav":g,E=t.expanded,N=t.onToggle,x=t.onSelect,w=t.collapseOnSelect,C=Object(n.a)(t,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),P=Object(d.a)(i,"navbar"),k=Object(s.useCallback)((function(){x&&x.apply(void 0,arguments),w&&E&&N&&N(!1)}),[x,w,E,N]);void 0===C.role&&"nav"!==O&&(C.role="navigation");var S=P+"-expand";"string"===typeof u&&(S=S+"-"+u);var T=Object(s.useMemo)((function(){return{onToggle:function(){return N&&N(!E)},bsPrefix:P,expanded:!!E}}),[P,E,N]);return l.a.createElement(b.a.Provider,{value:T},l.a.createElement(j.a.Provider,{value:k},l.a.createElement(O,Object(r.a)({ref:a},C,{className:c()(h,P,u&&S,m&&P+"-"+m,f&&"bg-"+f,v&&"sticky-"+v,p&&"fixed-"+p)}),y)))}));N.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},N.displayName="Navbar",N.Brand=f,N.Toggle=O,N.Collapse=h,N.Text=E;a.a=N}}]);
//# sourceMappingURL=25.c182f29e.chunk.js.map