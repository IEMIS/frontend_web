(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[95],{113:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"c",(function(){return i})),t.d(a,"b",(function(){return s})),t.d(a,"e",(function(){return u})),t.d(a,"d",(function(){return p}));var r=t(55),n=t.n(r),o=t(56),c="https://iemis.herokuapp.com/api/v1",l=function(){var e=Object(o.a)(n.a.mark((function e(a,t){var r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools"),{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,o=r.json(),e.abrupt("return",o);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a,t){return e.apply(this,arguments)}}(),i=function(){var e=Object(o.a)(n.a.mark((function e(a,t){var r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools"),{method:"GET",body:JSON.stringify(a),headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,o=r.json(),e.abrupt("return",o);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a,t){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(n.a.mark((function e(a,t){var r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools/").concat(a),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,o=r.json(),e.abrupt("return",o);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a,t){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(n.a.mark((function e(a,t){var r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/schools/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}).catch((function(e){console.log(e)}));case 3:return r=e.sent,o=r.json(),e.abrupt("return",o);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a,t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(n.a.mark((function e(a){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(c,"/district"),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}).catch((function(e){console.log(e)}));case 3:return t=e.sent,r=t.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()},280:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var r=t(55),n=t.n(r),o=t(56),c=t(32),l=t(3),i=t(64),s=t(0),u=t.n(s),p=t(81),m=t(89),d=t(82),h=t(348),E=t(165),f=t(30),b=t(63),v=t.n(b),O=t(2),g=t(113);function j(){var e=u.a.useState({code:"",district:"",names:"",address:"",email:"",fax:"",mailBox:"",phone:"",province:"",eduLevel:"",ownership:"",estabYear:"",schoolCat:"",schoolType:"",headID:"",password:"",password2:"",loading:!1,redirectToPage:!1,districtList:[]}),a=Object(i.a)(e,2),t=a[0],r=a[1],s=t.code,b=t.names,j=t.district,C=t.phone,y=t.email,w=t.password,x=t.password2,S=t.address,L=t.fax,B=t.mailBox,T=t.province,G=t.eduLevel,I=t.ownership,P=t.estabYear,k=t.schoolCat,q=t.schoolType,D=t.headID,R=t.loading,F=t.redirectToPage,A=t.districtList,N=function(e){return function(a){r(Object(l.a)(Object(l.a)({},t),{},Object(c.a)({},e,a.target.value)))}},Y=function(){var e=Object(o.a)(n.a.mark((function e(){var a,o,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={code:s,names:b,district:j,email:y,contact:[{phone:C,fax:L,mailBox:B,province:T,address:S}],eduLevel:G,ownership:I,estabYear:P,schoolCat:k,schoolType:q,headID:D,password:w},e.next=3,Object(g.a)(a);case 3:if(o=e.sent,console.log(o),o){e.next=8;break}return v.a.fire("Oops...","internet server error, Please, check your network connection","error"),e.abrupt("return",r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})));case 8:if(!o.error){e.next=11;break}return v.a.fire("Oops...",o.error,"error"),e.abrupt("return",r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})));case 11:if(!o.message){e.next=16;break}return v.a.fire("Saved...",o.message,"success"),r(Object(l.a)(Object(l.a)({},t),{},{loading:!1,redirectToPage:!0})),c=v.a.mixin({toast:!0,timerProgressBar:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),e.abrupt("return",c.fire({animation:!0,type:"success",title:"Request is successful"}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.useEffect((function(){(function(){var e=Object(o.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)();case 2:a=e.sent,t="SCH".concat("0012"),r((function(e){return Object(l.a)(Object(l.a)({},e),{},{districtList:a.data,code:t})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),u.a.createElement(f.a,null,function(){if(F)return u.a.createElement(O.a,{to:"/admin/schools/create"})}(),u.a.createElement(p.a,null,u.a.createElement(m.a,null,u.a.createElement(d.a,null,u.a.createElement(d.a.Header,null,u.a.createElement(d.a.Title,{as:"h3"},"Add New School")),u.a.createElement(d.a.Body,null,u.a.createElement(p.a,null,u.a.createElement(m.a,{md:6},u.a.createElement(h.a,null,u.a.createElement(h.a.Group,{controlId:"formBasicEmail"},u.a.createElement(h.a.Label,null,"School Code"),u.a.createElement(h.a.Control,{type:"text",placeholder:"school code",onChange:N("code"),value:s,disabled:!0})),u.a.createElement(h.a.Group,{controlId:"formBasicEmail"},u.a.createElement(h.a.Label,null,"School Name"),u.a.createElement(h.a.Control,{type:"text",placeholder:"school name",onChange:N("names"),value:b})),u.a.createElement(h.a.Group,{controlId:"exampleForm.ControlSelect1"},u.a.createElement(h.a.Label,null,"District"),u.a.createElement(h.a.Control,{as:"select",onChange:N("district"),value:j},u.a.createElement("option",null,"Select district"),A&&A.length>0?A.map((function(e,a){return u.a.createElement("option",{value:e._id},e.names)})):u.a.createElement("option",{value:"0"},"Fails to fetch district"))),u.a.createElement(h.a.Group,{controlId:"formBasicEmail"},u.a.createElement(h.a.Label,null,"Address "),u.a.createElement(h.a.Control,{type:"text",placeholder:"location, province e.g Veisaru Road, Savusavu",onChange:N("address"),value:S})),u.a.createElement(h.a.Group,{controlId:"exampleForm.ControlSelect1"},u.a.createElement(h.a.Label,null,"Locality"),u.a.createElement(h.a.Control,{as:"select",onChange:N("province"),value:T},u.a.createElement("option",null,"Select locality"),u.a.createElement("option",{value:"Metropolian"},"City Metropolian"),u.a.createElement("option",{value:"Surburban"},"City Surburban"),u.a.createElement("option",{value:"Urban"},"Peri Urban"),u.a.createElement("option",{value:"Remote"},"Remote"),u.a.createElement("option",{value:"Rural"},"Rural"),u.a.createElement("option",{value:"Town"},"Town"),u.a.createElement("option",{value:"Very-Remote"},"Very Remote"))),u.a.createElement(h.a.Group,{controlId:"formBasicEmail"},u.a.createElement(h.a.Label,null,"Mailing Address "),u.a.createElement(h.a.Control,{type:"text",placeholder:"P.O BOX 123, Tavua",onChange:N("mailBox"),value:B})),u.a.createElement(h.a.Group,{controlId:"formBasicEmail"},u.a.createElement(h.a.Label,null,"Phone "),u.a.createElement(h.a.Control,{type:"text",placeholder:"official school phone number",onChange:N("phone"),value:C})),u.a.createElement(h.a.Group,{controlId:"formBasicEmail"},u.a.createElement(h.a.Label,null,"Fax"),u.a.createElement(h.a.Control,{type:"text",placeholder:"school fax",onChange:N("fax"),value:L})),u.a.createElement(h.a.Group,{controlId:"formBasicEmail"},u.a.createElement(h.a.Label,null,"School Head"),u.a.createElement(h.a.Control,{type:"text",placeholder:"staff ID",onChange:N("headID"),value:D})))),u.a.createElement(m.a,{md:6},u.a.createElement(h.a.Group,{controlId:"exampleForm.ControlSelect1"},u.a.createElement(h.a.Label,null,"Education Level"),u.a.createElement(h.a.Control,{as:"select",onChange:N("eduLevel"),value:G},u.a.createElement("option",null,"Select Education Level"),u.a.createElement("option",{value:"ECE"},"ECE"),u.a.createElement("option",{value:"Primary"},"Primary"),u.a.createElement("option",{value:"Secondary"},"Secondary"),u.a.createElement("option",{value:"TVET"},"TVET"))),u.a.createElement(h.a.Group,{controlId:"formBasicEmail"},u.a.createElement(h.a.Label,null,"Estab. Year "),u.a.createElement(h.a.Control,{type:"date",placeholder:"year founded",onChange:N("estabYear"),value:P})),u.a.createElement(h.a.Group,{controlId:"exampleForm.ControlSelect1"},u.a.createElement(h.a.Label,null,"Ownership"),u.a.createElement(h.a.Control,{as:"select",onChange:N("ownership"),value:I},u.a.createElement("option",null,"Select School Ownership"),u.a.createElement("option",{value:"Government"},"Government"),u.a.createElement("option",{value:"Non-Government"},"Non-Government"),u.a.createElement("option",{value:"Private"},"Private"))),u.a.createElement(h.a.Group,{controlId:"exampleForm.ControlSelect1"},u.a.createElement(h.a.Label,null,"School Category"),u.a.createElement(h.a.Control,{as:"select",onChange:N("schoolCat"),value:k},u.a.createElement("option",null,"Select School Category"),u.a.createElement("option",{value:"Regular"},"Regular"),u.a.createElement("option",{value:"Special"},"Special"))),u.a.createElement(h.a.Group,{controlId:"exampleForm.ControlSelect1"},u.a.createElement(h.a.Label,null,"School Type"),u.a.createElement(h.a.Control,{as:"select",onChange:N("schoolType"),value:q},u.a.createElement("option",null,"Select School Type"),u.a.createElement("option",{value:"Day"},"Day"),u.a.createElement("option",{value:"Boarding1"},"Registered Boarding"),u.a.createElement("option",{value:"Boarding2"},"Unregistered Boarding"))),u.a.createElement(h.a.Group,{controlId:"exampleForm.ControlInput1"},u.a.createElement(h.a.Label,null,"email "),u.a.createElement(h.a.Control,{type:"email",placeholder:"email",onChange:N("email"),value:y})),u.a.createElement(h.a.Group,{controlId:"formBasicPassword"},u.a.createElement(h.a.Label,null,"Password"),u.a.createElement(h.a.Control,{type:"password",placeholder:"Password",onChange:N("password"),value:w})),u.a.createElement(h.a.Group,{controlId:"formBasicPassword"},u.a.createElement(h.a.Label,null,"Password Confirmation"),u.a.createElement(h.a.Control,{type:"password",placeholder:"Password Confirmation",onChange:N("password2"),value:x})),R?"loading ...":u.a.createElement(E.a,{variant:"primary",onClick:function(e){return e.preventDefault(),r(Object(l.a)(Object(l.a)({},t),{},{loading:!0})),""===s?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","School code is required","error")):""===j?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","District is required","error")):""===b?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","School Name is required","error")):""===q?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","School Type is required","error")):""===k?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","School Category is required","error")):""===P?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","Establishment Year is required","error")):""===I?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","School ownership is required","error")):""===G?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","Education Level is required","error")):""===T?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","School locality is required","error")):""===B?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","School mailBox is required","error")):""===L?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","Fax is required","error")):""===C?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","Phone number is required","error")):""===S?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","District address is required","error")):""===y?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","District email is required","error")):""===w?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","Password must empty","error")):w!==x?(r(Object(l.a)(Object(l.a)({},t),{},{loading:!1})),v.a.fire("Oops...","Password must match each other","error")):void Y()}},"Create .."))))))))}}}]);
//# sourceMappingURL=95.6c6472ad.chunk.js.map