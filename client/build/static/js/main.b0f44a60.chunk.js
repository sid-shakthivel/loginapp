(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){e.exports=a(93)},45:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),s=(a(45),a(15)),c=a(4),i=a(18),u=a.n(i),p=a(22),m=a(16),d=a(19),g=a(17),h=a(13),E=(a(30),a(24),a(3));function w(e){var t=e.history,a=Object(n.useState)({username:"",password:""}),l=Object(g.a)(a,2),o=l[0],c=l[1];function i(e){var t=e.target,a=t.className,n=t.value;c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},a.split(" ")[1],n))}))}function w(){return(w=Object(p.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("http://localhost:5000/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({username:o.username,password:o.password})});case 3:return n=e.sent,e.next=6,n.json();case 6:n=e.sent,console.log(n),n.error?h.b.warn("".concat(n.error),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}):n.url?window.location.href=n.url:t.push("/dashboard");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"App valign-wrapper",style:{backgroundColor:"#4ECDC4",height:"100vh"}},r.a.createElement(E.Row,{style:{width:"55%"}},r.a.createElement(E.Col,{s:12},r.a.createElement(E.CardPanel,null,r.a.createElement("form",{onSubmit:function(e){return w.apply(this,arguments)}},r.a.createElement(E.Row,null),r.a.createElement(E.Row,null,r.a.createElement(E.TextInput,{id:"login_username",icon:r.a.createElement("div",{style:{verticalAlign:"middle"}},r.a.createElement(E.Icon,null,"account_circle")),label:"Username",inputClassName:"username",validate:!0,type:"text",s:12,onChange:i})),r.a.createElement(E.Row,null,r.a.createElement(E.TextInput,{id:"login_password",icon:r.a.createElement("div",{style:{verticalAlign:"middle"}},r.a.createElement(E.Icon,null,"lock_outline")),label:"Password",inputClassName:"password",validate:!0,type:"password",password:!0,s:12,onChange:i})),r.a.createElement(E.Row,null,r.a.createElement(E.Col,{s:12},r.a.createElement(E.Button,{waves:"light",type:"submit",large:!0},"Login")))),r.a.createElement(s.b,{to:"/signup"},"Sign Up")))),r.a.createElement(h.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!1}))}function v(){var e=Object(n.useState)({username:"",password:"",email:"",verifyPassword:""}),t=Object(g.a)(e,2),a=t[0],l=t[1];function o(e){var t=e.target,a=t.className,n=t.value;l((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},a.split(" ")[1],n))}))}function c(){return(c=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.password===a.verifyPassword){e.next=4;break}return h.b.warn("Password must equal verified password",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),e.abrupt("return");case 4:return e.next=6,fetch("http://localhost:5000/signup",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({username:a.username,password:a.password,email:a.email})});case 6:return n=e.sent,e.next=9,n.json();case 9:n=e.sent,console.log(n.error.username.message),n.error.username.message&&h.b.warn("".concat(n.error.username.message),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),n.error.password.message&&h.b.warn("".concat(n.error.password.message),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),n.error.email.message&&h.b.warn("".concat(n.error.email.message),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),n.url&&(window.location.href=n.url);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"App valign-wrapper",style:{backgroundColor:"#4ECDC4",height:"100vh"}},r.a.createElement(E.Row,{style:{width:"55%"}},r.a.createElement(E.Col,{s:12},r.a.createElement(E.CardPanel,null,r.a.createElement("form",{onSubmit:function(e){return c.apply(this,arguments)}},r.a.createElement(E.Row,null),r.a.createElement(E.Row,null,r.a.createElement(E.TextInput,{id:"signup_username",icon:r.a.createElement("div",{style:{verticalAlign:"middle"}},r.a.createElement(E.Icon,null,"account_circle")),label:"Username",inputClassName:"username",validate:!0,type:"text",s:12,onChange:o})),r.a.createElement(E.Row,null,r.a.createElement(E.TextInput,{id:"signup_email",icon:r.a.createElement("div",{style:{verticalAlign:"middle"}},r.a.createElement(E.Icon,null,"email")),label:"Email",inputClassName:"email",validate:!0,type:"email",email:!0,s:12,onChange:o})),r.a.createElement(E.Row,null,r.a.createElement(E.TextInput,{id:"signup_password",icon:r.a.createElement("div",{style:{verticalAlign:"middle"}},r.a.createElement(E.Icon,null,"lock_outline")),label:"Password",inputClassName:"password",validate:!0,type:"password",password:!0,s:12,onChange:o})),r.a.createElement(E.Row,null,r.a.createElement(E.TextInput,{id:"signup_verify_password",icon:r.a.createElement("div",{style:{verticalAlign:"middle"}},r.a.createElement(E.Icon,null,"lock_outline")),label:"Verify Password",inputClassName:"verifyPassword",validate:!0,type:"password",password:!0,s:12,onChange:o})),r.a.createElement(E.Row,null,r.a.createElement(E.Col,{s:12},r.a.createElement(E.Button,{waves:"light",type:"submit",large:!0},"Sign Up")))),r.a.createElement(s.b,{to:"/"},"Login")))),r.a.createElement(h.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!1}))}function b(){var e=Object(n.useState)({component:r.a.createElement("h1",null,"Verifying")}),t=Object(g.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:5000/dashboard",{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.error?l({component:r.a.createElement(c.a,{to:"/"})}):l({component:r.a.createElement("h1",null,"Hi ",e.username)})}))}),[]),r.a.createElement("div",{className:"App valign-wrapper",style:{backgroundColor:"#4ECDC4",height:"100vh"}},r.a.createElement(E.Row,{style:{width:"55%"}},r.a.createElement(E.Col,{s:12},r.a.createElement(E.CardPanel,null,a.component))))}a(92);function f(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:w}),r.a.createElement(c.b,{exact:!0,path:"/signUp",component:v}),r.a.createElement(c.b,{exact:!0,path:"/dashboard",component:b}),r.a.createElement(c.b,{exact:!0,path:"/callback",render:function(e){var t="".concat(window.location.href),a=t.indexOf("=")+1,n=a+22,l=t.substring(a,n),o=t.substring(n,t.length);a=o.indexOf("=")+1;var s=o.substring(a,o.length);return fetch("http://localhost:5000/login/getToken",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:l,state:s})}).then((function(){console.log("here"),e.history.push("/dashboard")})),r.a.createElement("h1",null,"Callback")}}))))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b0f44a60.chunk.js.map