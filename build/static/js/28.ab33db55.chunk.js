(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[28],{107:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return d}));var r=a(55),n=a.n(r),i=a(56),c="https://iemis.herokuapp.com/api/v1",s=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools/signin"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){console.log(e)}));case 3:return a=e.sent,r=a.json(),console.log(r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(e,t){"undefined"!==typeof window&&(localStorage.setItem("schools-Auth",JSON.stringify(e)),t())},o=function(e){"undefined"!==typeof window&&(localStorage.removeItem("schools-Auth"),e())},u=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools/forgetPassword"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8",accept:"application/json"}}).catch((function(e){return console.log(e)}));case 3:return a=e.sent,r=a.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools/resetPassword"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8",accept:"application/json"}}).catch((function(e){return console.log(e)}));case 3:return a=e.sent,r=a.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},325:function(e,t,a){"use strict";a.r(t);var r=a(55),n=a.n(r),i=a(56),c=a(32),s=a(3),l=a(64),o=a(0),u=a.n(o),d=a(2),m=a(21),f=(a(77),a(30)),p=a(76),b=a(63),v=a.n(b),h=a(107),y=a(71);t.default=function(){var e=Object(o.useState)({loading:!1,resetToken:"",password:"",passwordConfirmation:"",redirectToPage:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],b=a.loading,g=a.password,O=a.passwordConfirmation,j=a.resetToken,E=a.redirectToPage,N=function(e){return function(t){r(Object(s.a)(Object(s.a)({},a),{},Object(c.a)({error:!1},e,t.target.value)))}},x=function(){var e=Object(i.a)(n.a.mark((function e(){var t,i,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={resetToken:j,password:g,passwordConfirmation:O},e.next=3,Object(h.d)(t);case 3:if(i=e.sent){e.next=7;break}return v.a.fire("Oops...","Internal server error, Please, check your internet connection","error"),e.abrupt("return",r(Object(s.a)(Object(s.a)({},a),{},{loading:!1})));case 7:if(!i.error){e.next=10;break}return v.a.fire("Oops...",i.error,"error"),e.abrupt("return",r(Object(s.a)(Object(s.a)({},a),{},{loading:!1})));case 10:return c=v.a.mixin({toast:!0,timerProgressBar:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),v.a.fire(" :)",i.message,"success"),e.next=14,c.fire({animation:!0,type:"success",title:"password successfully reset"});case 14:r(Object(s.a)(Object(s.a)({},a),{},{loading:!1,redirectToPage:!0})),console.log({data:i});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(f.a,null,function(){if(E)return u.a.createElement(d.a,{to:"/auth/school/login"})}(),u.a.createElement(p.a,null),u.a.createElement(y.a,null),u.a.createElement("div",{className:"auth-wrapper"},u.a.createElement("div",{className:"auth-content"},u.a.createElement("div",{className:"auth-bg"},u.a.createElement("span",{className:"r"}),u.a.createElement("span",{className:"r s"}),u.a.createElement("span",{className:"r s"}),u.a.createElement("span",{className:"r"})),u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body text-center"},u.a.createElement("div",{className:"mb-4"},u.a.createElement("i",{className:"feather icon-unlock auth-icon"})),u.a.createElement("h3",{className:"mb-4"},"schools | Reset Password "),u.a.createElement("div",{className:"input-group mb-3"},u.a.createElement("input",{type:"input",className:"form-control",onChange:N("resetToken"),value:j,placeholder:"Reset Token"})),u.a.createElement("div",{className:"input-group mb-3"},u.a.createElement("input",{type:"password",className:"form-control",onChange:N("password"),value:g,placeholder:"Password"})),u.a.createElement("div",{className:"input-group mb-4"},u.a.createElement("input",{type:"password",className:"form-control",onChange:N("passwordConfirmation"),value:O,placeholder:"password confirmation"})),b?"Loading ":u.a.createElement("button",{className:"btn btn-primary shadow-2 mb-4",onClick:function(e){return e.preventDefault(),r(Object(s.a)(Object(s.a)({},a),{},{loading:!0})),""===j?(v.a.fire("Oops...","reset token is required!","error"),r(Object(s.a)(Object(s.a)({},a),{},{loading:!1}))):""===g?(v.a.fire("Oops...","password is required!","error"),r(Object(s.a)(Object(s.a)({},a),{},{loading:!1}))):g!==O?(v.a.fire("Oops...","password must match each other!","error"),r(Object(s.a)(Object(s.a)({},a),{},{loading:!1}))):void x()}},"Reset Password"),u.a.createElement("p",{className:"mb-2 text-muted"},"I know password? ",u.a.createElement(m.c,{to:"/auth/school/signin"},"Login")))))))}},57:function(e,t,a){"use strict";t.a={BLANK_LINK:"#!"}},62:function(e,t,a){"use strict";var r=a(51),n=a(52),i=a(53),c=a.n(i),s=a(0),l=a.n(s),o=a(79),u=a(66),d=(a(78),a(70)),m=a(60),f=l.a.forwardRef((function(e,t){var a=e.active,i=e.className,o=e.eventKey,f=e.onSelect,p=e.onClick,b=e.as,v=Object(n.a)(e,["active","className","eventKey","onSelect","onClick","as"]),h=Object(m.b)(o,v.href),y=Object(s.useContext)(m.a),g=Object(s.useContext)(d.a),O=a;if(g){v.role||"tablist"!==g.role||(v.role="tab");var j=g.getControllerId(h),E=g.getControlledId(h);v["data-rb-event-key"]=h,v.id=j||v.id,v["aria-controls"]=E||v["aria-controls"],O=null==a&&null!=h?g.activeKey===h:a}"tab"===v.role&&(v.disabled&&(v.tabIndex=-1,v["aria-disabled"]=!0),v["aria-selected"]=O);var N=Object(u.a)((function(e){p&&p(e),null!=h&&(f&&f(h,e),y&&y(h,e))}));return l.a.createElement(b,Object(r.a)({},v,{ref:t,onClick:N,className:c()(i,O&&"active")}))}));f.defaultProps={disabled:!1};var p=f,b=a(54),v={disabled:!1,as:o.a},h=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.disabled,s=e.className,o=e.href,u=e.eventKey,d=e.onSelect,m=e.as,f=Object(n.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(b.a)(a,"nav-link"),l.a.createElement(p,Object(r.a)({},f,{href:o,ref:t,eventKey:u,as:m,disabled:i,onSelect:d,className:c()(s,a,i&&"disabled")}))}));h.displayName="NavLink",h.defaultProps=v;t.a=h},68:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function r(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];var n=null;return t.forEach((function(e){if(null==n){var t=e.apply(void 0,a);null!=t&&(n=t)}})),n}return(0,i.default)(r)};var r,n=a(72),i=(r=n)&&r.__esModule?r:{default:r};e.exports=t.default},71:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),i=a(91),c=a(88),s=a(89),l=a(86),o=a(90);function u(){return n.a.createElement(i.a,{collapseOnSelect:!0,sticky:"top",expand:"lg",bg:"light"},n.a.createElement(c.a,null,n.a.createElement(s.a,{xl:5,sm:5,lg:5},n.a.createElement(i.a.Brand,{href:"/"},"IEMIS")),n.a.createElement(s.a,{xl:7,sm:7,lg:7},n.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(l.a,{className:"mr-auto"},n.a.createElement(l.a.Link,{href:"/"},"Home"),n.a.createElement(l.a.Link,{href:"/about"},"About"),n.a.createElement(l.a.Link,{href:"/feature"},"Feature"),n.a.createElement(l.a.Link,{href:"/auth/student/signin"},"Students Portal"),n.a.createElement(o.a,{title:"Administrator",id:"basic-nav-dropdown"},n.a.createElement(o.a.Item,{href:"/auth/admin/signin"},"Admin"),n.a.createElement(o.a.Item,{href:"/auth/district/signin"},"District"),n.a.createElement(o.a.Item,{href:"/auth/school/signin"},"School"),n.a.createElement(o.a.Divider,null),n.a.createElement(o.a.Item,{href:"/auth/teacher/signin"},"Teacher"),n.a.createElement(o.a.Item,{href:"/auth/staff/signin"},"Staff")),n.a.createElement(l.a.Link,{href:"/auth/parent/signin"},"Parent Portal"))))))}},72:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,r,n,i,c){var s=n||"<<anonymous>>",l=c||r;if(null==a[r])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+s+"`."):null;for(var o=arguments.length,u=Array(o>6?o-6:0),d=6;d<o;d++)u[d-6]=arguments[d];return e.apply(void 0,[a,r,s,i,l].concat(u))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default},73:function(e,t,a){"use strict";var r=a(0),n=a.n(r).a.createContext(null);t.a=n},74:function(e,t,a){"use strict";var r=a(51),n=a(52),i=a(53),c=a.n(i),s=a(0),l=a.n(s),o=a(54),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.children,u=e.as,d=void 0===u?"div":u,m=Object(n.a)(e,["bsPrefix","className","children","as"]);return a=Object(o.a)(a,"nav-item"),l.a.createElement(d,Object(r.a)({},m,{ref:t,className:c()(i,a)}),s)}));u.displayName="NavItem",t.a=u},75:function(e,t,a){"use strict";t.a={items:[{id:"navigation",title:"admin Menu",type:"group",icon:"icon-navigation",children:[{id:"dashboard",title:"Dashboard",type:"item",url:"/admin",icon:"feather icon-home"},{id:"m-district",title:"District Data",type:"item",url:"/admin/districts",icon:"feather icon-feather"},{id:"m-school",title:"Schools data",type:"item",url:"/admin/schools",icon:"feather icon-book"}]},{id:"district-list",title:"Data Management",type:"group",icon:"icon-ui",children:[{id:"admin-user",title:"Admin",type:"collapse",icon:"feather icon-user",children:[{id:"admin-Read",title:"Read ",type:"item",url:"/admin/users/read"},{id:"admin-Create",title:"Create ",type:"item",url:"/admin/users/create"}]},{id:"district",title:"District ",type:"collapse",icon:"feather icon-feather",children:[{id:"district-read",title:"Read",type:"item",url:"/admin/districts/read"},{id:"district-create",title:"Create",type:"item",url:"/admin/districts/create"}]},{id:"School",title:"School",type:"collapse",icon:"feather icon-book",children:[{id:"school-read",title:"Read",type:"item",url:"/admin/schools/read"},{id:"school-create",title:"Create",type:"item",url:"/admin/schools/create"}]},{id:"students",title:"Students",type:"collapse",icon:"feather icon-users",children:[{id:"students-read",title:"Read",type:"item",url:"/admin/students/read"},{id:"students-create",title:"Create",type:"item",url:"/admin/students/create"}]},{id:"staff",title:"Staff",type:"collapse",icon:"feather icon-users",children:[{id:"staffs-read",title:"Read",type:"item",url:"/admin/staffs/read"},{id:"staffs-create",title:"Create",type:"item",url:"/admin/staffs/create"}]},{id:"teachers",title:"Teachers",type:"collapse",icon:"feather icon-users",children:[{id:"teachers-read",title:"Read",type:"item",url:"/admin/teachers/read"},{id:"teachers-create",title:"Create",type:"item",url:"/admin/teachers/create"}]},{id:"extral",title:"Extral Data",type:"collapse",icon:"feather icon-book",children:[{id:"extral-read",title:"Population",type:"item",url:"/admin/extral/read"}]}]},{id:"pages",title:"Footer",type:"group",icon:"icon-pages",children:[{id:"disabled-menu",title:"Admin Signout",type:"item",url:"/admin/signout",classes:"nav-item ",icon:"feather icon-power"}]}]}},76:function(e,t,a){"use strict";var r=a(15),n=a(16),i=a(18),c=a(17),s=a(0),l=a.n(s),o=a(21),u=a(19),d=a(75),m=a(57),f=a(30),p=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={main:[],item:[]},e.componentWillReceiveProps=function(){d.a.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t),!1}))},e.getCollapse=function(t){t.children&&t.children.filter((function(a){return a.type&&"collapse"===a.type?e.getCollapse(a):a.type&&"item"===a.type&&document.location.pathname===u.a.basename+a.url&&e.setState({item:a,main:t}),!1}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t,a),!1}))}},{key:"render",value:function(){var e,t,a="",r="Welcome";return this.state.main&&"collapse"===this.state.main.type&&(e=l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:m.a.BLANK_LINK},this.state.main.title))),this.state.item&&"item"===this.state.item.type&&(r=this.state.item.title,t=l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:m.a.BLANK_LINK},r)),!1!==this.state.item.breadcrumbs&&(a=l.a.createElement("div",{className:"page-header"},l.a.createElement("div",{className:"page-block"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"page-header-title"},l.a.createElement("h5",{className:"m-b-10"},r)),l.a.createElement("ul",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(o.b,{to:"/"},l.a.createElement("i",{className:"feather icon-home"}))),e,t))))))),document.title=r+" | Datta Able Free React + Redux Admin Template",l.a.createElement(f.a,null,a)}}]),a}(s.Component);t.a=p},77:function(e,t,a){},86:function(e,t,a){"use strict";var r=a(51),n=a(52),i=a(53),c=a.n(i),s=(a(68),a(0)),l=a.n(s),o=a(67),u=a(54),d=a(59),m=a(61),f=a(84),p=a(85),b=a(80),v=a(70),h=a(60),y=a(73),g=function(){},O=l.a.forwardRef((function(e,t){var a,i,c=e.as,o=void 0===c?"ul":c,u=e.onSelect,d=e.activeKey,m=e.role,O=e.onKeyDown,j=Object(n.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(p.a)(),N=Object(s.useRef)(!1),x=Object(s.useContext)(h.a),w=Object(s.useContext)(y.a);w&&(m=m||"tablist",d=w.activeKey,a=w.getControlledId,i=w.getControllerId);var C=Object(s.useRef)(null),P=function(e){var t=C.current;if(!t)return null;var a=Object(f.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var n=a.indexOf(r);if(-1===n)return null;var i=n+e;return i>=a.length&&(i=0),i<0&&(i=a.length-1),a[i]},k=function(e,t){null!=e&&(u&&u(e,t),x&&x(e,t))};Object(s.useEffect)((function(){if(C.current&&N.current){var e=C.current.querySelector("[data-rb-event-key].active");e&&e.focus()}N.current=!1}));var S=Object(b.a)(t,C);return l.a.createElement(h.a.Provider,{value:k},l.a.createElement(v.a.Provider,{value:{role:m,activeKey:Object(h.b)(d),getControlledId:a||g,getControllerId:i||g}},l.a.createElement(o,Object(r.a)({},j,{onKeyDown:function(e){var t;switch(O&&O(e),e.key){case"ArrowLeft":case"ArrowUp":t=P(-1);break;case"ArrowRight":case"ArrowDown":t=P(1);break;default:return}t&&(e.preventDefault(),k(t.dataset.rbEventKey,e),N.current=!0,E())},ref:S,role:m}))))})),j=a(74),E=a(62),N=l.a.forwardRef((function(e,t){var a,i,f,p=Object(o.a)(e,{activeKey:"onSelect"}),b=p.as,v=void 0===b?"div":b,h=p.bsPrefix,y=p.variant,g=p.fill,j=p.justify,E=p.navbar,N=p.className,x=p.children,w=p.activeKey,C=Object(n.a)(p,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),P=Object(u.a)(h,"nav"),k=!1,S=Object(s.useContext)(d.a),T=Object(s.useContext)(m.a);return S?(i=S.bsPrefix,k=null==E||E):T&&(f=T.cardHeaderBsPrefix),l.a.createElement(O,Object(r.a)({as:v,ref:t,activeKey:w,className:c()(N,(a={},a[P]=!k,a[i+"-nav"]=k,a[f+"-"+y]=!!f,a[P+"-"+y]=!!y,a[P+"-fill"]=g,a[P+"-justified"]=j,a))},C),x)}));N.displayName="Nav",N.defaultProps={justify:!1,fill:!1},N.Item=j.a,N.Link=E.a;t.a=N},88:function(e,t,a){"use strict";var r=a(51),n=a(52),i=a(53),c=a.n(i),s=a(0),l=a.n(s),o=a(54),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.fluid,s=e.as,u=void 0===s?"div":s,d=e.className,m=Object(n.a)(e,["bsPrefix","fluid","as","className"]),f=Object(o.a)(a,"container"),p="string"===typeof i?"-"+i:"-fluid";return l.a.createElement(u,Object(r.a)({ref:t},m,{className:c()(d,i?""+f+p:f)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},90:function(e,t,a){"use strict";var r=a(51),n=a(52),i=a(53),c=a.n(i),s=a(0),l=a.n(s),o=a(54),u=a(83),d=a(62),m=l.a.forwardRef((function(e,t){var a=e.id,i=e.title,s=e.children,m=e.bsPrefix,f=e.className,p=e.rootCloseEvent,b=e.menuRole,v=e.disabled,h=e.active,y=e.renderMenuOnMount,g=Object(n.a)(e,["id","title","children","bsPrefix","className","rootCloseEvent","menuRole","disabled","active","renderMenuOnMount"]),O=Object(o.a)(void 0,"nav-item");return l.a.createElement(u.a,Object(r.a)({ref:t},g,{className:c()(f,O)}),l.a.createElement(u.a.Toggle,{id:a,eventKey:null,active:h,disabled:v,childBsPrefix:m,as:d.a},i),l.a.createElement(u.a.Menu,{role:b,renderOnMount:y,rootCloseEvent:p},s))}));m.displayName="NavDropdown",m.Item=u.a.Item,m.ItemText=u.a.ItemText,m.Divider=u.a.Divider,m.Header=u.a.Header,t.a=m},91:function(e,t,a){"use strict";var r=a(51),n=a(52),i=a(53),c=a.n(i),s=a(0),l=a.n(s),o=a(67),u=a(65),d=a(54),m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.as,o=Object(n.a)(e,["bsPrefix","className","as"]);a=Object(d.a)(a,"navbar-brand");var u=s||(o.href?"a":"span");return l.a.createElement(u,Object(r.a)({},o,{ref:t,className:c()(i,a)}))}));m.displayName="NavbarBrand";var f=m,p=a(87),b=a(59),v=l.a.forwardRef((function(e,t){var a=e.children,i=e.bsPrefix,c=Object(n.a)(e,["children","bsPrefix"]);return i=Object(d.a)(i,"navbar-collapse"),l.a.createElement(b.a.Consumer,null,(function(e){return l.a.createElement(p.a,Object(r.a)({in:!(!e||!e.expanded)},c),l.a.createElement("div",{ref:t,className:i},a))}))}));v.displayName="NavbarCollapse";var h=v,y=a(66),g=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.children,u=e.label,m=e.as,f=void 0===m?"button":m,p=e.onClick,v=Object(n.a)(e,["bsPrefix","className","children","label","as","onClick"]);a=Object(d.a)(a,"navbar-toggler");var h=Object(s.useContext)(b.a)||{},g=h.onToggle,O=h.expanded,j=Object(y.a)((function(e){p&&p(e),g&&g()}));return"button"===f&&(v.type="button"),l.a.createElement(f,Object(r.a)({},v,{ref:t,onClick:j,"aria-label":u,className:c()(i,a,!O&&"collapsed")}),o||l.a.createElement("span",{className:a+"-icon"}))}));g.displayName="NavbarToggle",g.defaultProps={label:"Toggle navigation"};var O=g,j=a(60),E=Object(u.a)("navbar-text",{Component:"span"}),N=l.a.forwardRef((function(e,t){var a=Object(o.a)(e,{expanded:"onToggle"}),i=a.bsPrefix,u=a.expand,m=a.variant,f=a.bg,p=a.fixed,v=a.sticky,h=a.className,y=a.children,g=a.as,O=void 0===g?"nav":g,E=a.expanded,N=a.onToggle,x=a.onSelect,w=a.collapseOnSelect,C=Object(n.a)(a,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),P=Object(d.a)(i,"navbar"),k=Object(s.useCallback)((function(){x&&x.apply(void 0,arguments),w&&E&&N&&N(!1)}),[x,w,E,N]);void 0===C.role&&"nav"!==O&&(C.role="navigation");var S=P+"-expand";"string"===typeof u&&(S=S+"-"+u);var T=Object(s.useMemo)((function(){return{onToggle:function(){return N&&N(!E)},bsPrefix:P,expanded:!!E}}),[P,E,N]);return l.a.createElement(b.a.Provider,{value:T},l.a.createElement(j.a.Provider,{value:k},l.a.createElement(O,Object(r.a)({ref:t},C,{className:c()(h,P,u&&S,m&&P+"-"+m,f&&"bg-"+f,v&&"sticky-"+v,p&&"fixed-"+p)}),y)))}));N.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},N.displayName="Navbar",N.Brand=f,N.Toggle=O,N.Collapse=h,N.Text=E;t.a=N}}]);
//# sourceMappingURL=28.ab33db55.chunk.js.map