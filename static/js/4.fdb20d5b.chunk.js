(this["webpackJsonpnetwork-society"]=this["webpackJsonpnetwork-society"]||[]).push([[4],{100:function(e,t,r){"use strict";function s(e){return function(t){var r;return""===t?r="This field cannot be empty. Please, try better.":t.length>e&&(r="It's too much symbols. Max length is ".concat(e)),r}}r.d(t,"a",(function(){return s}))},101:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s="NOT_FOUND";var n=function(e,t){return e===t};function a(e,t){var r="object"===typeof t?t:{equalityCheck:t},a=r.equalityCheck,o=void 0===a?n:a,i=r.maxSize,u=void 0===i?1:i,c=r.resultEqualityCheck,l=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var s=t.length,n=0;n<s;n++)if(!e(t[n],r[n]))return!1;return!0}}(o),p=1===u?function(e){var t;return{get:function(r){return t&&e(t.key,r)?t.value:s},put:function(e,r){t={key:e,value:r}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var r=[];function n(e){var n=r.findIndex((function(r){return t(e,r.key)}));if(n>-1){var a=r[n];return n>0&&(r.splice(n,1),r.unshift(a)),a.value}return s}return{get:n,put:function(t,a){n(t)===s&&(r.unshift({key:t,value:a}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,l);function _(){var t=p.get(arguments);if(t===s){if(t=e.apply(null,arguments),c){var r=p.getEntries(),n=r.find((function(e){return c(e.value,t)}));if(n)return n.value}p.put(arguments,t)}return t}return _.clearCache=function(){return p.clear()},_}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function i(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];var n=function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];var a,i=0,u={memoizeOptions:void 0},c=s.pop();if("object"===typeof c&&(u=c,c=s.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,p=l.memoizeOptions,_=void 0===p?r:p,d=Array.isArray(_)?_:[_],f=o(s),b=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),j=e((function(){for(var e=[],t=f.length,r=0;r<t;r++)e.push(f[r].apply(null,arguments));return a=b.apply(null,e)}));return Object.assign(j,{resultFunc:c,memoizedResultFunc:b,dependencies:f,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),j};return n}var u=i(a)},111:function(e,t,r){e.exports={post:"Post_post__8Wg0i","post__user-img":"Post_post__user-img__uLLGq",post__text:"Post_post__text__3YxtW",post__like:"Post_post__like__1fk0h"}},112:function(e,t,r){e.exports={posts:"Posts_posts__dMXX5"}},113:function(e,t,r){e.exports={"create-post":"CreatePost_create-post__kj4T3",title:"CreatePost_title__1Y5yS","create-post__input_wrap":"CreatePost_create-post__input_wrap___dcN5","create-post__input":"CreatePost_create-post__input__aGfHI",error:"CreatePost_error__2tUVS",btnStyle:"CreatePost_btnStyle__2bgXB",wrapperStyle:"CreatePost_wrapperStyle__2m_yS"}},114:function(e,t,r){e.exports={"my-posts":"MyPosts_my-posts__1dNTC"}},115:function(e,t,r){e.exports={wrapper:"Status_wrapper__1m7uK",statusField:"Status_statusField__1tTdA",statusInput:"Status_statusInput__2BP4U"}},116:function(e,t,r){e.exports={user__about:"UserAbout_user__about__KlnqS",userNameWithStatus:"UserAbout_userNameWithStatus__2yOT-",user__name:"UserAbout_user__name__2JZYx",user__description:"UserAbout_user__description__3mB3U","user__item-webSites":"UserAbout_user__item-webSites__2ple_","user__item-about":"UserAbout_user__item-about__2V8nM",webSite:"UserAbout_webSite__1UY95",user__title:"UserAbout_user__title__1od3l"}},117:function(e,t,r){e.exports={userImgWrapper:"UserImg_userImgWrapper__3ec1W"}},118:function(e,t,r){e.exports={user:"User_user__1H6KT"}},119:function(e,t,r){e.exports={wallpaperWrapper:"ProfileImg_wallpaperWrapper__nJWm5"}},120:function(e,t,r){e.exports={profile__wrapper:"Profile_profile__wrapper__1CWmD",preloader:"Profile_preloader__uvUpR"}},130:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(47),o=r(111),i=r.n(o),u=r(1),c=function(e){var t=e.text,r=e.counterLike;return Object(u.jsxs)("div",{className:i.a.post,children:[Object(u.jsx)("div",{className:i.a["post__user-img"],children:Object(u.jsx)("img",{src:a.a,alt:"user-icon"})}),Object(u.jsxs)("div",{className:i.a.post__text,children:[t," ",Object(u.jsxs)("span",{className:i.a.post__like,children:["like: ",r]})]})]})},l=r(112),p=r.n(l),_=n.a.memo((function(e){var t=e.postsData.map((function(e){return Object(u.jsx)(c,{text:e.message,counterLike:e.likesCount},e.id)}));return Object(u.jsx)("div",{className:p.a.posts,children:t})})),d=r(45),f=r(104),b=r(100),j=r(113),m=r.n(j),h=Object(b.a)(200),x=n.a.memo((function(e){var t=e.isAuth,r=e.isMyPage,s=e.placeholderText,n=e.addPost,a=!t;return Object(u.jsx)(f.d,{initialValues:{newPostBody:""},onSubmit:function(e,t){var r=e.newPostBody;n(r),t.resetForm()},children:function(e){var n=e.values,o=e.errors,i=e.touched,c=e.handleChange,l=e.handleSubmit;return Object(u.jsxs)(f.c,{className:m.a["create-post"],onSubmit:l,children:[Object(u.jsx)("h3",{className:m.a["create-post__title title"],children:r?"My post":"Send post"}),Object(u.jsxs)("div",{className:m.a["create-post__input_wrap"],style:o.newPostBody&&i.newPostBody?{border:"2px solid #ff0000"}:{},children:[Object(u.jsx)(f.b,{validate:h,className:m.a["create-post__input"],type:"text",placeholder:t?s:"You cannot post any comments if you are not logged in.",id:"newPostBody",name:"newPostBody",onChange:c,value:n.newPostBody,disabled:a}),Object(u.jsx)(f.a,{className:m.a.error,name:"newPostBody",component:"div"})]}),Object(u.jsx)(d.a,{isDisabled:a,btnClassName:m.a.btnStyle,wrapClassName:m.a.wrapperStyle,text:"Send"})]})}})})),g=r(114),v=r.n(g),y=function(e){var t=e.isAuth,r=e.isMyPage,s=e.postsData,n=e.newPostBody,a=e.placeholderText,o=e.addPost;return Object(u.jsxs)("div",{className:v.a["my-posts"],children:[Object(u.jsx)(x,{newPostBody:n,placeholderText:a,addPost:o,isAuth:t,isMyPage:r}),Object(u.jsx)("div",{className:v.a.posts,children:Object(u.jsx)(_,{postsData:s})})]})},O=r(29),w=r(11),P=r(15),N=r(101),S=r(99),k=Object(N.a)((function(e){return e.profile.isProfileLoaded}),(function(e){return e.profile.isStatusLoaded}),(function(e,t){return!(!e||!t)})),A=Object(N.a)(S.d,(function(e){return e.profile.userId}),(function(e,t){return e===t})),C=r(46),M=r(115),U=r.n(M),F=Object(b.a)(300),D=Object(P.c)(Object(w.b)((function(e){return{status:(t=e,t.profile.status),isMyPage:A(e)};var t}),{changeUserStatus:C.c,applyNewStatus:C.b}))((function(e){var t=e.status,r=e.isMyPage,n=e.applyNewStatus,a=Object(s.useState)(!1),o=Object(O.a)(a,2),i=o[0],c=o[1],l=Object(s.useState)(t),p=Object(O.a)(l,2),_=p[0],d=p[1];Object(s.useEffect)((function(){d(t)}),[t]);return Object(u.jsx)("div",{className:U.a.wrapper,children:Object(u.jsx)("form",{className:U.a.statusField,onSubmit:function(e){e.preventDefault();var r=F(_);r?alert(r):_!==t?(c(!1),n(_)):alert("Oops, some problem. New status cannot equal the old status")},children:i?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{className:U.a.statusInput,autoFocus:!0,name:"status",id:"status",value:_,onKeyDown:function(e){27===+e.keyCode&&i&&c(!1)},onBlur:function(){c(!1)},onChange:function(e){var t=e.target;d(t.value)}})}):Object(u.jsx)("div",{className:U.a.statusField,onDoubleClick:function(){r&&c(!0)},children:t||"User has no status"})})})})),W=r(116),B=r.n(W),I=function(e){var t=e.fullName,r=e.lookingForAJob,s=e.lookingForAJobDescription,n=e.aboutMe,a=e.webSites,o=0,i=a.filter((function(e){return e.length>0})).map((function(e){return Object(u.jsx)("li",{className:B.a.webSite,children:"".concat(e,"/")},o++)}));return Object(u.jsxs)("div",{className:B.a.user__about,children:[Object(u.jsxs)("div",{className:B.a.userNameWithStatus,children:[Object(u.jsx)("h3",{className:B.a.user__name,children:t}),Object(u.jsx)(D,{})]}),Object(u.jsx)("h3",{className:B.a.user__title,children:"User about:"}),Object(u.jsxs)("div",{className:B.a.user__description,children:[Object(u.jsxs)("p",{className:B.a["user__item-about"],children:["Working status:",r?" looking for":" not looking for"]}),Object(u.jsxs)("p",{className:B.a["user__item-about"],children:["Descriptions: ",s," "]}),Object(u.jsxs)("p",{className:B.a["user__item-about"],children:["About me: ",n]}),Object(u.jsxs)("ul",{className:B.a["user__item-about"],children:[Object(u.jsx)("p",{className:B.a["user__item-about"],children:"Contact me:"}),i]})]})]})},J=r(19),E=r.p+"static/media/user-default-photo.d92d7726.jpg",T=r(117),L=r.n(T),q=function(e){var t=e.isMyPage,r=e.src;return t?Object(u.jsx)(J.b,{to:"/settings",children:Object(u.jsx)("div",{className:L.a.userImgWrapper,children:Object(u.jsx)("img",{src:r||E,alt:"user-img"})})}):Object(u.jsx)("div",{className:L.a.userImgWrapper,children:Object(u.jsx)("img",{src:r||E,alt:"user-img"})})},Y=r(118),z=r.n(Y),K=function(e){var t,r=e.aboutMe,s=e.contacts,n=e.lookingForAJob,a=e.lookingForAJobDescription,o=e.fullName,i=e.photo,c=e.isMyPage;return Object(u.jsxs)("div",{className:z.a.user,children:[Object(u.jsx)(q,{src:i,isMyPage:c}),Object(u.jsx)(I,{fullName:o,lookingForAJob:n,lookingForAJobDescription:a,aboutMe:r,webSites:(t=s,Object.values(t).filter((function(e){return null!==e})))})]})},R=r.p+"static/media/profile-wallpaper.37f4aa5e.jpg",V=r(119),X=r.n(V),G=function(e){return Object(u.jsx)("div",{className:X.a.wallpaperWrapper,children:Object(u.jsx)("img",{src:R,alt:"profile-wallpaper"})})},H=r(5),Z=r(20),Q=r(120),$=r.n(Q),ee=r(16),te=Object(P.c)(Object(w.b)((function(e){return{profile:(r=e,r.profile),isAuth:Object(S.b)(e),id:Object(S.d)(e),isLoaded:k(e),isMyPage:A(e),loadingError:(t=e,t.profile.loadingError)};var t,r}),{addPost:C.a,showUserPage:C.f,setLoadingError:C.e}),H.f,Z.a.showPageErrorWrapperComponent)((function(e){var t=e.profile,r=t.postsData,n=t.newPostBody,a=t.placeholderText,o=t.aboutMe,i=t.contacts,c=t.lookingForAJob,l=t.lookingForAJobDescription,p=t.fullName,_=t.userId,d=t.photos.large,f=e.addPost,b=e.isAuth,j=e.isLoaded,m=e.isMyPage,h=e.showUserPage,x=e.id,g=e.match.params.userId,v=g||x;return Object(s.useEffect)((function(){v&&h(v)}),[v,h]),v?j?Object(u.jsxs)("div",{className:$.a.profile__wrapper,children:[Object(u.jsx)(G,{}),Object(u.jsx)(K,{aboutMe:o,contacts:i,lookingForAJob:c,lookingForAJobDescription:l,fullName:p,photo:d,userId:_,isMyPage:m}),Object(u.jsx)(y,{postsData:r,newPostBody:n,placeholderText:a,addPost:f,isAuth:b,isMyPage:m})]}):Object(u.jsx)(ee.a,{}):Object(u.jsx)(H.a,{to:"/login"})}));t.default=te},99:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var s=r(101),n=function(e){return e.auth.id},a=Object(s.a)((function(e){return e.auth.isAuth}),(function(e){return e})),o=function(e){return e.auth.isCaptcha},i=function(e){return e.auth.captcha}}}]);
//# sourceMappingURL=4.fdb20d5b.chunk.js.map