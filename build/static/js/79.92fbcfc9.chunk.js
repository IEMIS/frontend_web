(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[79],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return p}));var r=a(55),n=a.n(r),c=a(56),o="https://iemis.herokuapp.com/api/v1",i=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,c=r.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district"),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e)}));case 3:return a=e.sent,r=a.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district/").concat(t),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,c=r.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(n.a.mark((function e(t,a,r){var c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district/").concat(t),{method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(r)}}).catch((function(e){console.log(e)}));case 3:return c=e.sent,i=c.json(),e.abrupt("return",i);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/district/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,c=r.json(),e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}()},225:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var r=a(55),n=a.n(r),c=a(56),o=a(32),i=a(3),s=a(64),l=a(0),u=a.n(l),p=a(81),d=a(89),m=a(82),f=a(348),h=a(165),b=a(30),j=a(63),E=a.n(j),O=a(2),v=a(110);function g(){var e=u.a.useState({code:"",names:"",phone:"",address:"",email:"",status:!0,password:"",password2:"",loading:!1,redirectToPage:!1}),t=Object(s.a)(e,2),a=t[0],r=t[1],l=a.code,j=a.names,g=a.phone,w=a.email,y=a.password,C=a.password2,x=a.address,P=a.status,k=a.loading,B=a.redirectToPage,D=function(e){return function(t){r(Object(i.a)(Object(i.a)({},a),{},Object(o.a)({},e,t.target.value)))}},T=function(){var e=Object(c.a)(n.a.mark((function e(){var t,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={code:l,names:j,phone:g,email:w,password:y,password2:C,address:x,status:P},e.next=3,Object(v.a)(t);case 3:if(c=e.sent,console.log(c),c){e.next=8;break}return E.a.fire("Oops...","internet server error, Please, check your network connection","error"),e.abrupt("return",r(Object(i.a)(Object(i.a)({},a),{},{loading:!1})));case 8:if(!c.error){e.next=11;break}return E.a.fire("Oops...",c.error,"error"),e.abrupt("return",r(Object(i.a)(Object(i.a)({},a),{},{loading:!1})));case 11:if(!c.message){e.next=16;break}return E.a.fire("Saved...",c.message,"success"),r(Object(i.a)(Object(i.a)({},a),{},{loading:!1,redirectToPage:!0})),o=E.a.mixin({toast:!0,timerProgressBar:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),e.abrupt("return",o.fire({animation:!0,type:"success",title:"Request is successful"}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.useEffect((function(){(function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"DS001",r((function(e){return Object(i.a)(Object(i.a)({},e),{},{code:"DS001"})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),u.a.createElement(b.a,null,function(){if(B)return u.a.createElement(O.a,{to:"/admin/districts/create"})}(),u.a.createElement(p.a,null,u.a.createElement(d.a,null,u.a.createElement(m.a,null,u.a.createElement(m.a.Header,null,u.a.createElement(m.a.Title,{as:"h3"},"Add New District")),u.a.createElement(m.a.Body,null,u.a.createElement(p.a,null,u.a.createElement(d.a,{md:6},u.a.createElement(f.a,null,u.a.createElement(f.a.Group,{controlId:"formBasicEmail"},u.a.createElement(f.a.Label,null,"District Code"),u.a.createElement(f.a.Control,{type:"text",placeholder:"district code",onChange:D("code"),value:l})),u.a.createElement(f.a.Group,{controlId:"formBasicEmail"},u.a.createElement(f.a.Label,null,"District Name"),u.a.createElement(f.a.Control,{type:"text",placeholder:"district name",onChange:D("names"),value:j})),u.a.createElement(f.a.Group,{controlId:"formBasicEmail"},u.a.createElement(f.a.Label,null,"Phone "),u.a.createElement(f.a.Control,{type:"text",placeholder:"district phone",onChange:D("phone"),value:g})),u.a.createElement(f.a.Group,{controlId:"formBasicPassword"},u.a.createElement(f.a.Label,null,"Password"),u.a.createElement(f.a.Control,{type:"password",placeholder:"Password",onChange:D("password"),value:y})),k?"loading ...":u.a.createElement(h.a,{variant:"primary",onClick:function(e){return e.preventDefault(),r(Object(i.a)(Object(i.a)({},a),{},{loading:!0})),""===l?(r(Object(i.a)(Object(i.a)({},a),{},{loading:!1})),E.a.fire("Oops...","District code is required","error")):""===j?(r(Object(i.a)(Object(i.a)({},a),{},{loading:!1})),E.a.fire("Oops...","District name is required","error")):""===g?(r(Object(i.a)(Object(i.a)({},a),{},{loading:!1})),E.a.fire("Oops...","District Phone number is required","error")):""===x?(r(Object(i.a)(Object(i.a)({},a),{},{loading:!1})),E.a.fire("Oops...","District address is required","error")):""===w?(r(Object(i.a)(Object(i.a)({},a),{},{loading:!1})),E.a.fire("Oops...","District email is required","error")):""===y?(r(Object(i.a)(Object(i.a)({},a),{},{loading:!1})),E.a.fire("Oops...","Password can not be an empty value","error")):y!==C?(r(Object(i.a)(Object(i.a)({},a),{},{loading:!1})),E.a.fire("Oops...","Password must match each other","error")):void T()}},"Create .."))),u.a.createElement(d.a,{md:6},u.a.createElement(f.a.Group,{controlId:"formBasicEmail"},u.a.createElement(f.a.Label,null,"Address "),u.a.createElement(f.a.Control,{type:"text",placeholder:"building/house name, city",onChange:D("address"),value:x})),u.a.createElement(f.a.Group,{controlId:"formBasicEmail"},u.a.createElement(f.a.Label,null,"Officer-in- charge"),u.a.createElement(f.a.Control,{type:"text",placeholder:"Education District ID"})),u.a.createElement(f.a.Group,{controlId:"exampleForm.ControlInput1"},u.a.createElement(f.a.Label,null,"email "),u.a.createElement(f.a.Control,{type:"email",placeholder:"email",onChange:D("email"),value:w})),u.a.createElement(f.a.Group,{controlId:"formBasicPassword"},u.a.createElement(f.a.Label,null,"Password Confirmation"),u.a.createElement(f.a.Control,{type:"password",placeholder:"Password Confirmation",onChange:D("password2"),value:C})))))))))}}}]);
//# sourceMappingURL=79.92fbcfc9.chunk.js.map