(this["webpackJsonpnetwork-society"]=this["webpackJsonpnetwork-society"]||[]).push([[5],{100:function(e,s,a){"use strict";function t(e){return function(s){var a;return""===s?a="This field cannot be empty. Please, try better.":s.length>e&&(a="It's too much symbols. Max length is ".concat(e)),a}}a.d(s,"a",(function(){return t}))},121:function(e,s,a){e.exports={message:"Message_message__3f5n-",user:"Message_user__3pCMU",user__img:"Message_user__img__2QpAu",user__name:"Message_user__name__17HoM",message__text:"Message_message__text__7tVUF"}},122:function(e,s,a){e.exports={wrapper:"AddMessage_wrapper__34hJF",input__wrapper:"AddMessage_input__wrapper__1QRdJ",input:"AddMessage_input__181DQ",error:"AddMessage_error__1C_4r"}},123:function(e,s,a){e.exports={"dialogs-item":"DialogItem_dialogs-item__12kAf","nav-link":"DialogItem_nav-link__3BmfO",active_link:"DialogItem_active_link__2Lxp3"}},124:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3H5If",dialogs__wrapper:"Dialogs_dialogs__wrapper__YbpfM",dialog__messages:"Dialogs_dialog__messages__1CpoC",messages:"Dialogs_messages__37oFf",dialogs__title:"Dialogs_dialogs__title__1fHN7"}},131:function(e,s,a){"use strict";a.r(s);a(0);var t=a(121),n=a.n(t),i=a(1),r=function(e){var s=e.id,a=e.name,t=e.message;return Object(i.jsxs)("div",{className:n.a.message,children:[Object(i.jsxs)("div",{className:n.a.user,children:[Object(i.jsx)("div",{className:n.a.user__img}),Object(i.jsx)("p",{className:n.a.user__name,children:a})]}),Object(i.jsx)("div",{className:n.a.message__text,children:t})]},s)},d=a(42),c=a(104),o=a(100),l=a(122),_=a.n(l),g=Object(o.a)(50),m=function(e){var s=e.placeholder,a=e.addMessage;return Object(i.jsx)(c.d,{initialValues:{newMessageBody:""},onSubmit:function(e,s){var t=e.newMessageBody;a(t),s.resetForm()},children:function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,o=e.handleSubmit;return Object(i.jsxs)(c.c,{className:_.a.wrapper,onSubmit:o,children:[Object(i.jsxs)("div",{className:_.a.input__wrapper,style:t.newMessageBody&&n.newMessageBody?{border:"2px solid #ff0000"}:{},children:[Object(i.jsx)(c.b,{validate:g,className:_.a.input,type:"textarea",placeholder:s,id:"newMessageBody",name:"newMessageBody",onChange:r,value:a.newMessageBody}),Object(i.jsx)(c.a,{className:_.a.error,name:"newMessageBody",component:"div"})]}),Object(i.jsx)(d.a,{text:"Send"})]})}})},u=function(e){var s=e.dialogs,a=s.messagesData,t=s.placeholderText,n=s.newMessageBody,d=e.addMessage,c=a.map((function(e){return Object(i.jsx)(r,{name:e.name,message:e.message},e.id)}));return Object(i.jsxs)(i.Fragment,{children:[c,Object(i.jsx)(m,{placeholder:t,newMessageBody:n,addMessage:d})]})},p=a(19),j=a(123),b=a.n(j),h=function(e){var s=e.id,a=e.name;return Object(i.jsx)("li",{className:b.a["dialogs-item"],children:Object(i.jsx)(p.b,{to:"/dialogs/dialog/".concat(s),className:b.a["nav-link"],activeClassName:b.a.active_link,children:a})})},x=a(5),f=a(124),v=a.n(f),M=function(e){var s=e.dialogs,a=e.addMessage,t=s.dialogsData.map((function(e){return Object(i.jsx)(h,{name:e.name,id:e.id},e.id)}));return Object(i.jsxs)("div",{className:v.a.dialogs,children:[Object(i.jsx)("h3",{className:v.a.dialogs__title,children:"Dialogs"}),Object(i.jsx)("ul",{className:v.a.dialogs__wrapper,children:t}),Object(i.jsx)("div",{className:v.a.dialog__messages,children:Object(i.jsx)("div",{className:v.a.messages,children:Object(i.jsx)(x.b,{path:"/dialogs/dialog/0",render:function(){return Object(i.jsx)(u,{dialogs:s,addMessage:a})}})})})]})},O=a(56),w=a(11),N=a(20),y=a(15),D=Object(y.c)(Object(w.b)((function(e){var s=e.auth.isAuth;return{dialogs:e.dialogs,isAuth:s}}),{addMessage:O.a}),N.a.redirectAuthWrapperComponent.bind(N.a))(M);s.default=D}}]);
//# sourceMappingURL=5.801d8689.chunk.js.map