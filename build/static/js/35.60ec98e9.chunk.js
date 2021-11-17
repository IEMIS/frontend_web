(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[35],{108:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"a",(function(){return s})),t.d(a,"e",(function(){return o})),t.d(a,"b",(function(){return u})),t.d(a,"d",(function(){return d}));var r=t(55),n=t.n(r),c=t(56),i="https://iemis.herokuapp.com/api/v1",l=function(){var e=Object(c.a)(n.a.mark((function e(a){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/schools/signin"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){console.log(e)}));case 3:return t=e.sent,r=t.json(),console.log(r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),s=function(e,a){"undefined"!==typeof window&&(localStorage.setItem("schools-Auth",JSON.stringify(e)),a())},o=function(e){"undefined"!==typeof window&&(localStorage.removeItem("schools-Auth"),e())},u=function(){var e=Object(c.a)(n.a.mark((function e(a){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/schools/forgetPassword"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8",accept:"application/json"}}).catch((function(e){return console.log(e)}));case 3:return t=e.sent,r=t.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(n.a.mark((function e(a){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/schools/resetPassword"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8",accept:"application/json"}}).catch((function(e){return console.log(e)}));case 3:return t=e.sent,r=t.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()},332:function(e,a,t){"use strict";t.r(a);var r=t(55),n=t.n(r),c=t(56),i=t(32),l=t(3),s=t(64),o=t(0),u=t.n(o),d=t(2),m=t(21),f=(t(77),t(30)),p=t(76),b=t(63),v=t.n(b),h=t(108),y=t(71);a.default=function(){var e=Object(o.useState)({loading:!1,password:"",email:"",redirectToPage:!1}),a=Object(s.a)(e,2),t=a[0],r=a[1],b=t.loading,g=t.password,O=t.email,j=t.redirectToPage,E=function(e){return function(a){r(Object(l.a)(Object(l.a)({},t),{},Object(i.a)({error:!1},e,a.target.value)))}},N=function(){var e=Object(c.a)(n.a.mark((function e(){var a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={email:O,password:g},e.next=3,Object(h.c)(a);case 3:if(c=e.sent){e.next=7;break}return v.a.fire("Oops...","internet server error, Please, check your network connection","error"),e.abrupt("return",r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})));case 7:if(!c.error){e.next=10;break}return v.a.fire("Oops...",c.error,"error"),e.abrupt("return",r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})));case 10:v.a.mixin({toast:!0,timerProgressBar:!0,position:"top-end",showConfirmButton:!1,timer:3e3}).fire({animation:!0,type:"success",title:"Signed in successfully"}),Object(h.a)(c,(function(){r(Object(l.a)(Object(l.a)({},t),{},{loading:!1,redirectToPage:!0}))})),console.log({data:c});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(f.a,null,function(){if(j)return u.a.createElement(d.a,{to:"/school"})}(),u.a.createElement(p.a,null),u.a.createElement(y.a,null),u.a.createElement("div",{className:"auth-wrapper"},u.a.createElement("div",{className:"auth-content"},u.a.createElement("div",{className:"auth-bg"},u.a.createElement("span",{className:"r"}),u.a.createElement("span",{className:"r s"}),u.a.createElement("span",{className:"r s"}),u.a.createElement("span",{className:"r"})),u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body text-center"},u.a.createElement("div",{className:"mb-4"},u.a.createElement("i",{className:"feather icon-unlock auth-icon"})),u.a.createElement("h3",{className:"mb-4"},"Student Login  "),u.a.createElement("div",{className:"input-group mb-3"},u.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:E("email"),value:O,placeholder:"Email"})),u.a.createElement("div",{className:"input-group mb-4"},u.a.createElement("input",{type:"password",className:"form-control",placeholder:"password",name:"password",onChange:E("password"),value:g})),u.a.createElement("div",{className:"form-group text-left"},u.a.createElement("div",{className:"checkbox checkbox-fill d-inline"},u.a.createElement("input",{type:"checkbox",name:"checkbox-fill-1",id:"checkbox-fill-a1"}),u.a.createElement("label",{htmlFor:"checkbox-fill-a1",className:"cr"}," Save credentials"))),b?"Loading ... ":u.a.createElement("button",{className:"btn btn-primary shadow-2 mb-4",onClick:function(e){return e.preventDefault(),r(Object(l.a)(Object(l.a)({},t),{},{loading:!0})),""===O?(v.a.fire("Oops...","A valid email address required!","error"),r(Object(l.a)(Object(l.a)({},t),{},{loading:!1}))):""===g?(v.a.fire("Oops...","password is required!","error"),r(Object(l.a)(Object(l.a)({},t),{},{loading:!1}))):void N()}},"Login"),u.a.createElement("p",{className:"mb-2 text-muted"},"Forgot password? ",u.a.createElement(m.c,{to:"/auth/school/forget"},"Reset")))))))}},57:function(e,a,t){"use strict";a.a={BLANK_LINK:"#!"}},62:function(e,a,t){"use strict";var r=t(51),n=t(52),c=t(53),i=t.n(c),l=t(0),s=t.n(l),o=t(79),u=t(66),d=(t(78),t(70)),m=t(60),f=s.a.forwardRef((function(e,a){var t=e.active,c=e.className,o=e.eventKey,f=e.onSelect,p=e.onClick,b=e.as,v=Object(n.a)(e,["active","className","eventKey","onSelect","onClick","as"]),h=Object(m.b)(o,v.href),y=Object(l.useContext)(m.a),g=Object(l.useContext)(d.a),O=t;if(g){v.role||"tablist"!==g.role||(v.role="tab");var j=g.getControllerId(h),E=g.getControlledId(h);v["data-rb-event-key"]=h,v.id=j||v.id,v["aria-controls"]=E||v["aria-controls"],O=null==t&&null!=h?g.activeKey===h:t}"tab"===v.role&&(v.disabled&&(v.tabIndex=-1,v["aria-disabled"]=!0),v["aria-selected"]=O);var N=Object(u.a)((function(e){p&&p(e),null!=h&&(f&&f(h,e),y&&y(h,e))}));return s.a.createElement(b,Object(r.a)({},v,{ref:a,onClick:N,className:i()(c,O&&"active")}))}));f.defaultProps={disabled:!1};var p=f,b=t(54),v={disabled:!1,as:o.a},h=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.disabled,l=e.className,o=e.href,u=e.eventKey,d=e.onSelect,m=e.as,f=Object(n.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return t=Object(b.a)(t,"nav-link"),s.a.createElement(p,Object(r.a)({},f,{href:o,ref:a,eventKey:u,as:m,disabled:c,onSelect:d,className:i()(l,t,c&&"disabled")}))}));h.displayName="NavLink",h.defaultProps=v;a.a=h},68:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=null;return a.forEach((function(e){if(null==n){var a=e.apply(void 0,t);null!=a&&(n=a)}})),n}return(0,c.default)(r)};var r,n=t(72),c=(r=n)&&r.__esModule?r:{default:r};e.exports=a.default},71:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r=t(0),n=t.n(r),c=t(91),i=t(88),l=t(89),s=t(86),o=t(90);function u(){return n.a.createElement(c.a,{collapseOnSelect:!0,sticky:"top",expand:"lg",bg:"light"},n.a.createElement(i.a,null,n.a.createElement(l.a,{xl:5,sm:5,lg:5},n.a.createElement(c.a.Brand,{href:"/"},"IEMIS")),n.a.createElement(l.a,{xl:7,sm:7,lg:7},n.a.createElement(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(s.a,{className:"mr-auto"},n.a.createElement(s.a.Link,{href:"/"},"Home"),n.a.createElement(s.a.Link,{href:"/about"},"About"),n.a.createElement(s.a.Link,{href:"/feature"},"Feature"),n.a.createElement(s.a.Link,{href:"/auth/student/signin"},"Students Portal"),n.a.createElement(o.a,{title:"Administrator",id:"basic-nav-dropdown"},n.a.createElement(o.a.Item,{href:"/auth/admin/signin"},"Admin"),n.a.createElement(o.a.Item,{href:"/auth/district/signin"},"District"),n.a.createElement(o.a.Item,{href:"/auth/school/signin"},"School"),n.a.createElement(o.a.Divider,null),n.a.createElement(o.a.Item,{href:"/auth/teacher/signin"},"Teacher"),n.a.createElement(o.a.Item,{href:"/auth/staff/signin"},"Staff")),n.a.createElement(s.a.Link,{href:"/auth/parent/signin"},"Parent Portal"))))))}},72:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,n,c,i){var l=n||"<<anonymous>>",s=i||r;if(null==t[r])return a?new Error("Required "+c+" `"+s+"` was not specified in `"+l+"`."):null;for(var o=arguments.length,u=Array(o>6?o-6:0),d=6;d<o;d++)u[d-6]=arguments[d];return e.apply(void 0,[t,r,l,c,s].concat(u))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},73:function(e,a,t){"use strict";var r=t(0),n=t.n(r).a.createContext(null);a.a=n},74:function(e,a,t){"use strict";var r=t(51),n=t(52),c=t(53),i=t.n(c),l=t(0),s=t.n(l),o=t(54),u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.children,u=e.as,d=void 0===u?"div":u,m=Object(n.a)(e,["bsPrefix","className","children","as"]);return t=Object(o.a)(t,"nav-item"),s.a.createElement(d,Object(r.a)({},m,{ref:a,className:i()(c,t)}),l)}));u.displayName="NavItem",a.a=u},75:function(e,a,t){"use strict";a.a={items:[{id:"navigation",title:"admin Menu",type:"group",icon:"icon-navigation",children:[{id:"dashboard",title:"Dashboard",type:"item",url:"/admin",icon:"feather icon-home"},{id:"m-district",title:"District Data",type:"item",url:"/admin/districts",icon:"feather icon-feather"},{id:"m-school",title:"Schools data",type:"item",url:"/admin/schools",icon:"feather icon-book"}]},{id:"district-list",title:"Data Management",type:"group",icon:"icon-ui",children:[{id:"admin-user",title:"Admin",type:"collapse",icon:"feather icon-user",children:[{id:"admin-Read",title:"Read ",type:"item",url:"/admin/users/read"},{id:"admin-Create",title:"Create ",type:"item",url:"/admin/users/create"}]},{id:"district",title:"District ",type:"collapse",icon:"feather icon-feather",children:[{id:"district-read",title:"Read",type:"item",url:"/admin/districts/read"},{id:"district-create",title:"Create",type:"item",url:"/admin/districts/create"}]},{id:"School",title:"School",type:"collapse",icon:"feather icon-book",children:[{id:"school-read",title:"Read",type:"item",url:"/admin/schools/read"},{id:"school-create",title:"Create",type:"item",url:"/admin/schools/create"}]},{id:"students",title:"Students",type:"collapse",icon:"feather icon-users",children:[{id:"students-read",title:"Read",type:"item",url:"/admin/students/read"},{id:"students-create",title:"Create",type:"item",url:"/admin/students/create"}]},{id:"staff",title:"Staff",type:"collapse",icon:"feather icon-users",children:[{id:"staffs-read",title:"Read",type:"item",url:"/admin/staffs/read"},{id:"staffs-create",title:"Create",type:"item",url:"/admin/staffs/create"}]},{id:"teachers",title:"Teachers",type:"collapse",icon:"feather icon-users",children:[{id:"teachers-read",title:"Read",type:"item",url:"/admin/teachers/read"},{id:"teachers-create",title:"Create",type:"item",url:"/admin/teachers/create"}]},{id:"extral",title:"Extral Data",type:"collapse",icon:"feather icon-book",children:[{id:"extral-read",title:"Population",type:"item",url:"/admin/extral/read"}]}]},{id:"pages",title:"Footer",type:"group",icon:"icon-pages",children:[{id:"disabled-menu",title:"Admin Signout",type:"item",url:"/admin/signout",classes:"nav-item ",icon:"feather icon-power"}]}]}},76:function(e,a,t){"use strict";var r=t(15),n=t(16),c=t(18),i=t(17),l=t(0),s=t.n(l),o=t(21),u=t(19),d=t(75),m=t(57),f=t(30),p=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={main:[],item:[]},e.componentWillReceiveProps=function(){d.a.items.map((function(a,t){return a.type&&"group"===a.type&&e.getCollapse(a),!1}))},e.getCollapse=function(a){a.children&&a.children.filter((function(t){return t.type&&"collapse"===t.type?e.getCollapse(t):t.type&&"item"===t.type&&document.location.pathname===u.a.basename+t.url&&e.setState({item:t,main:a}),!1}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.items.map((function(a,t){return a.type&&"group"===a.type&&e.getCollapse(a,t),!1}))}},{key:"render",value:function(){var e,a,t="",r="Welcome";return this.state.main&&"collapse"===this.state.main.type&&(e=s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:m.a.BLANK_LINK},this.state.main.title))),this.state.item&&"item"===this.state.item.type&&(r=this.state.item.title,a=s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:m.a.BLANK_LINK},r)),!1!==this.state.item.breadcrumbs&&(t=s.a.createElement("div",{className:"page-header"},s.a.createElement("div",{className:"page-block"},s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"page-header-title"},s.a.createElement("h5",{className:"m-b-10"},r)),s.a.createElement("ul",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(o.b,{to:"/"},s.a.createElement("i",{className:"feather icon-home"}))),e,a))))))),document.title=r+" | Datta Able Free React + Redux Admin Template",s.a.createElement(f.a,null,t)}}]),t}(l.Component);a.a=p},77:function(e,a,t){},86:function(e,a,t){"use strict";var r=t(51),n=t(52),c=t(53),i=t.n(c),l=(t(68),t(0)),s=t.n(l),o=t(67),u=t(54),d=t(59),m=t(61),f=t(84),p=t(85),b=t(80),v=t(70),h=t(60),y=t(73),g=function(){},O=s.a.forwardRef((function(e,a){var t,c,i=e.as,o=void 0===i?"ul":i,u=e.onSelect,d=e.activeKey,m=e.role,O=e.onKeyDown,j=Object(n.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(p.a)(),N=Object(l.useRef)(!1),x=Object(l.useContext)(h.a),w=Object(l.useContext)(y.a);w&&(m=m||"tablist",d=w.activeKey,t=w.getControlledId,c=w.getControllerId);var k=Object(l.useRef)(null),C=function(e){var a=k.current;if(!a)return null;var t=Object(f.a)(a,"[data-rb-event-key]:not(.disabled)"),r=a.querySelector(".active");if(!r)return null;var n=t.indexOf(r);if(-1===n)return null;var c=n+e;return c>=t.length&&(c=0),c<0&&(c=t.length-1),t[c]},P=function(e,a){null!=e&&(u&&u(e,a),x&&x(e,a))};Object(l.useEffect)((function(){if(k.current&&N.current){var e=k.current.querySelector("[data-rb-event-key].active");e&&e.focus()}N.current=!1}));var S=Object(b.a)(a,k);return s.a.createElement(h.a.Provider,{value:P},s.a.createElement(v.a.Provider,{value:{role:m,activeKey:Object(h.b)(d),getControlledId:t||g,getControllerId:c||g}},s.a.createElement(o,Object(r.a)({},j,{onKeyDown:function(e){var a;switch(O&&O(e),e.key){case"ArrowLeft":case"ArrowUp":a=C(-1);break;case"ArrowRight":case"ArrowDown":a=C(1);break;default:return}a&&(e.preventDefault(),P(a.dataset.rbEventKey,e),N.current=!0,E())},ref:S,role:m}))))})),j=t(74),E=t(62),N=s.a.forwardRef((function(e,a){var t,c,f,p=Object(o.a)(e,{activeKey:"onSelect"}),b=p.as,v=void 0===b?"div":b,h=p.bsPrefix,y=p.variant,g=p.fill,j=p.justify,E=p.navbar,N=p.className,x=p.children,w=p.activeKey,k=Object(n.a)(p,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),C=Object(u.a)(h,"nav"),P=!1,S=Object(l.useContext)(d.a),R=Object(l.useContext)(m.a);return S?(c=S.bsPrefix,P=null==E||E):R&&(f=R.cardHeaderBsPrefix),s.a.createElement(O,Object(r.a)({as:v,ref:a,activeKey:w,className:i()(N,(t={},t[C]=!P,t[c+"-nav"]=P,t[f+"-"+y]=!!f,t[C+"-"+y]=!!y,t[C+"-fill"]=g,t[C+"-justified"]=j,t))},k),x)}));N.displayName="Nav",N.defaultProps={justify:!1,fill:!1},N.Item=j.a,N.Link=E.a;a.a=N},88:function(e,a,t){"use strict";var r=t(51),n=t(52),c=t(53),i=t.n(c),l=t(0),s=t.n(l),o=t(54),u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.fluid,l=e.as,u=void 0===l?"div":l,d=e.className,m=Object(n.a)(e,["bsPrefix","fluid","as","className"]),f=Object(o.a)(t,"container"),p="string"===typeof c?"-"+c:"-fluid";return s.a.createElement(u,Object(r.a)({ref:a},m,{className:i()(d,c?""+f+p:f)}))}));u.displayName="Container",u.defaultProps={fluid:!1},a.a=u},90:function(e,a,t){"use strict";var r=t(51),n=t(52),c=t(53),i=t.n(c),l=t(0),s=t.n(l),o=t(54),u=t(83),d=t(62),m=s.a.forwardRef((function(e,a){var t=e.id,c=e.title,l=e.children,m=e.bsPrefix,f=e.className,p=e.rootCloseEvent,b=e.menuRole,v=e.disabled,h=e.active,y=e.renderMenuOnMount,g=Object(n.a)(e,["id","title","children","bsPrefix","className","rootCloseEvent","menuRole","disabled","active","renderMenuOnMount"]),O=Object(o.a)(void 0,"nav-item");return s.a.createElement(u.a,Object(r.a)({ref:a},g,{className:i()(f,O)}),s.a.createElement(u.a.Toggle,{id:t,eventKey:null,active:h,disabled:v,childBsPrefix:m,as:d.a},c),s.a.createElement(u.a.Menu,{role:b,renderOnMount:y,rootCloseEvent:p},l))}));m.displayName="NavDropdown",m.Item=u.a.Item,m.ItemText=u.a.ItemText,m.Divider=u.a.Divider,m.Header=u.a.Header,a.a=m},91:function(e,a,t){"use strict";var r=t(51),n=t(52),c=t(53),i=t.n(c),l=t(0),s=t.n(l),o=t(67),u=t(65),d=t(54),m=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.as,o=Object(n.a)(e,["bsPrefix","className","as"]);t=Object(d.a)(t,"navbar-brand");var u=l||(o.href?"a":"span");return s.a.createElement(u,Object(r.a)({},o,{ref:a,className:i()(c,t)}))}));m.displayName="NavbarBrand";var f=m,p=t(87),b=t(59),v=s.a.forwardRef((function(e,a){var t=e.children,c=e.bsPrefix,i=Object(n.a)(e,["children","bsPrefix"]);return c=Object(d.a)(c,"navbar-collapse"),s.a.createElement(b.a.Consumer,null,(function(e){return s.a.createElement(p.a,Object(r.a)({in:!(!e||!e.expanded)},i),s.a.createElement("div",{ref:a,className:c},t))}))}));v.displayName="NavbarCollapse";var h=v,y=t(66),g=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.children,u=e.label,m=e.as,f=void 0===m?"button":m,p=e.onClick,v=Object(n.a)(e,["bsPrefix","className","children","label","as","onClick"]);t=Object(d.a)(t,"navbar-toggler");var h=Object(l.useContext)(b.a)||{},g=h.onToggle,O=h.expanded,j=Object(y.a)((function(e){p&&p(e),g&&g()}));return"button"===f&&(v.type="button"),s.a.createElement(f,Object(r.a)({},v,{ref:a,onClick:j,"aria-label":u,className:i()(c,t,!O&&"collapsed")}),o||s.a.createElement("span",{className:t+"-icon"}))}));g.displayName="NavbarToggle",g.defaultProps={label:"Toggle navigation"};var O=g,j=t(60),E=Object(u.a)("navbar-text",{Component:"span"}),N=s.a.forwardRef((function(e,a){var t=Object(o.a)(e,{expanded:"onToggle"}),c=t.bsPrefix,u=t.expand,m=t.variant,f=t.bg,p=t.fixed,v=t.sticky,h=t.className,y=t.children,g=t.as,O=void 0===g?"nav":g,E=t.expanded,N=t.onToggle,x=t.onSelect,w=t.collapseOnSelect,k=Object(n.a)(t,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=Object(d.a)(c,"navbar"),P=Object(l.useCallback)((function(){x&&x.apply(void 0,arguments),w&&E&&N&&N(!1)}),[x,w,E,N]);void 0===k.role&&"nav"!==O&&(k.role="navigation");var S=C+"-expand";"string"===typeof u&&(S=S+"-"+u);var R=Object(l.useMemo)((function(){return{onToggle:function(){return N&&N(!E)},bsPrefix:C,expanded:!!E}}),[C,E,N]);return s.a.createElement(b.a.Provider,{value:R},s.a.createElement(j.a.Provider,{value:P},s.a.createElement(O,Object(r.a)({ref:a},k,{className:i()(h,C,u&&S,m&&C+"-"+m,f&&"bg-"+f,v&&"sticky-"+v,p&&"fixed-"+p)}),y)))}));N.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},N.displayName="Navbar",N.Brand=f,N.Toggle=O,N.Collapse=h,N.Text=E;a.a=N}}]);
//# sourceMappingURL=35.60ec98e9.chunk.js.map