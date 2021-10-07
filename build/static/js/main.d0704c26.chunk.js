(this["webpackJsonpslack-app"]=this["webpackJsonpslack-app"]||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},174:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(46),r=n.n(c),i=(n(153),n(154),n(90)),l=n(18),o=n(289),d=n(296),h=n(275),j=n(283),u=n(297),b=n(290),m=n(294),p=n(295),O=n(293),x=n(125),g=n(287),v=n(8);var f,C,y=function(e,t){var n=Object(a.useState)((function(){try{var n=window.sessionStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),s=Object(v.a)(n,2),c=s[0],r=s[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;r(n),window.sessionStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},S=n(28),k=n.n(S),U=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],s=t[1];Object(a.useEffect)((function(){s(!0),setTimeout((function(){s(!1)}),3e3)}),[]);var c=y("headers",[]),r=Object(v.a)(c,2),i=(r[0],r[1]),l=y("userID",[]),o=Object(v.a)(l,2),d=(o[0],o[1]),h=Object(a.useState)(""),j=Object(v.a)(h,2),u=j[0],b=j[1],m=Object(a.useState)(""),p=Object(v.a)(m,2),O=p[0],x=p[1],g=Object(a.useState)(""),f=Object(v.a)(g,2),C=f[0],S=f[1],U=Object(a.useState)(!1),w=Object(v.a)(U,2),T=w[0],I=w[1],E=Object(a.useState)(!1),D=Object(v.a)(E,2),M=D[0],R=D[1],A=Object(a.useState)({passwordsDoNotMatch:!1,invalidEmailFormat:!1,emailIsEmpty:!1,passwordIsEmpty:!1,passwordTooShort:!1}),N=Object(v.a)(A,2),B=N[0],W=N[1],F=Object(a.useState)({successful:!1,failed:!1}),z=Object(v.a)(F,2),P=z[0],G=z[1],_=Object(a.useState)({successful:!1,failed:!1}),L=Object(v.a)(_,2),H=L[0],V=L[1],J=function(){k()({url:"https://slackapi.avionschool.com/api/v1/auth",data:{email:C,password:u,password_confirmation:O},headers:{},method:"POST"}).then((function(){G({successful:!0}),Y()})).catch((function(e){console.log(e),G({failed:!0})}))},Y=function(){S(""),b(""),x("")},q=function(){s(!0),setTimeout((function(){s(!1),R(!0)}),2e3)};return{password:u,setPassword:b,email:C,setEmail:S,logIn:function(e){e.preventDefault(),C?u?C.includes(".")?k()({url:"https://slackapi.avionschool.com/api/v1/auth/sign_in",data:{email:C,password:u},headers:{},method:"POST"}).then((function(e){d(e.data.data.id),i(e.headers),q(),Y()})).catch((function(e){console.log(e),V({failed:!0})})):W({invalidEmailFormat:!0}):W({passwordIsEmpty:!0}):W({emailIsEmpty:!0})},setIsLogin:V,isLogin:H,isRegistering:T,setIsRegistering:I,secondPassword:O,setSecondPassword:x,register:function(e){e.preventDefault(),C.includes(".")?u&&O?u!==O?W({passwordsDoNotMatch:!0}):u.length<6?W({passwordTooShort:!0}):J():W({passwordIsEmpty:!0}):W({invalidEmailFormat:!0})},registerUser:J,isRegister:P,setIsRegister:G,validInfo:B,setValidInfo:W,setLoading:s,loading:n,transition:q,route:M,setRoute:R}},w=(n(174),n(69)),T=n(92),I=n(126),E=n(1),D=Object(x.a)(),M=function(){var e=U(),t=e.password,n=e.setPassword,a=e.secondPassword,s=e.setSecondPassword,c=e.email,r=e.setEmail,i=e.logIn,x=e.isLogin,v=e.setIsLogin,f=e.isRegistering,C=e.setIsRegistering,y=e.register,S=e.isRegister,k=e.setIsRegister,M=e.setValidInfo,R=e.validInfo,A=e.loading,N=e.route;return Object(E.jsxs)(E.Fragment,{children:[N&&Object(E.jsx)(l.a,{to:"/chat"}),A?Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"loader",children:[Object(E.jsx)(w.HashLoader,{loading:A,color:"purple",size:80}),Object(E.jsx)("h3",{children:"Loading..."})]})}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"background"}),Object(E.jsxs)(T.Fade,{up:!0,children:[Object(E.jsxs)("div",{className:"heading-container",children:[Object(E.jsxs)("span",{className:"heading",children:[Object(E.jsx)(I.a,{}),"Avion Slack App"]}),Object(E.jsx)("span",{className:"website",children:"avionschool.slack.com"})]}),Object(E.jsx)(g.a,{theme:D,children:Object(E.jsxs)(O.a,{component:"main",maxWidth:"xs",children:[Object(E.jsx)(h.a,{}),Object(E.jsxs)(m.a,{sx:{marginTop:5,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(E.jsx)(o.a,{sx:{m:1,bgcolor:"purple"}}),Object(E.jsx)(p.a,{component:"h1",variant:"h5",children:f?"Register ":"Sign in"}),Object(E.jsxs)(m.a,{component:"form",onClick:function(){v(!1),k(!1),M(!1)},noValidate:!0,sx:{mt:1},children:[Object(E.jsx)(j.a,{onChange:function(e){return r(e.target.value)},value:c,margin:"normal",fullWidth:!0,label:"Email Address",type:"text",autoFocus:!0}),Object(E.jsx)(j.a,{onChange:function(e){return n(e.target.value)},value:t,margin:"normal",fullWidth:!0,label:"Password",type:"password"}),f&&Object(E.jsxs)(T.Fade,{up:!0,children:[" ",Object(E.jsx)(j.a,{onChange:function(e){return s(e.target.value)},value:a,margin:"normal",fullWidth:!0,label:"Re-type Password",type:"password"})," "]}),x.failed&&Object(E.jsx)("span",{className:"failed",children:"Invalid email or password"}),S.successful&&Object(E.jsx)("span",{className:"success",children:"Registration Success!"}),S.failed&&Object(E.jsx)("span",{className:"failed",children:"Email already taken"}),R.invalidEmailFormat&&Object(E.jsx)("span",{className:"failed",children:"Invalid email format"}),R.emailIsEmpty&&Object(E.jsx)("span",{className:"failed",children:"Email is required"}),R.passwordIsEmpty&&Object(E.jsx)("span",{className:"failed",children:"Password is required"}),R.passwordsDoNotMatch&&Object(E.jsx)("span",{className:"failed",children:"Passwords do not match"})]}),Object(E.jsx)(d.a,{onClick:function(e){f?y(e):i(e)},type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"purple"},children:f?"Sign up":"Sign In"}),Object(E.jsx)(b.a,{container:!0,children:Object(E.jsx)(b.a,{item:!0,children:Object(E.jsx)(u.a,{style:{cursor:"pointer"},onClick:function(){return C(!f)},variant:"body2",children:f?"Already have an account? Sign in":"Don't have an account? Sign Up"})})})]}),Object(E.jsxs)(p.a,{className:"copyright",variant:"body2",color:"text.secondary",align:"center",sx:{mt:3,mb:2},children:["Copyright \xa9 ",Object(E.jsx)("span",{color:"inherit",children:"Avion School Slack App"})," ",(new Date).getFullYear(),"."]})]})})]})]})]})},R=function(e){var t=e.loading;return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"loader",children:[Object(E.jsx)(w.HashLoader,{loading:t,color:"purple",size:80}),Object(E.jsx)("h3",{children:"Almost there..."})]})})},A=n(16),N=n(47),B=function(){var e=y("headers",[]),t=Object(v.a)(e,1)[0],n=y("userID",[]),s=Object(v.a)(n,1)[0],c=Object(a.useState)([]),r=Object(v.a)(c,2),i=r[0],l=r[1],o=Object(a.useState)([]),d=Object(v.a)(o,2),h=d[0],j=d[1],u=Object(a.useState)(!1),b=Object(v.a)(u,2),m=b[0],p=b[1],O=Object(a.useState)(""),x=Object(v.a)(O,2),g=x[0],S=x[1],U=Object(a.useState)([]),w=Object(v.a)(U,2),T=w[0],I=w[1],E=Object(a.useState)(!1),D=Object(v.a)(E,2),M=D[0],R=D[1],B=Object(a.useState)([]),W=Object(v.a)(B,2),F=W[0],z=W[1],P=Object(a.useState)([]),G=Object(v.a)(P,2),_=G[0],L=G[1],H=Object(a.useState)([]),V=Object(v.a)(H,2),J=V[0],Y=V[1],q=Object(a.useState)({home:!0,channel:!1}),X=Object(v.a)(q,2),K=X[0],Q=X[1],Z=i.filter((function(e){return!e.email.includes(t.uid)})),$=Object(a.useState)({success:!1,failed:!1}),ee=Object(v.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(""),se=Object(v.a)(ae,2),ce=se[0],re=se[1],ie=Object(a.useState)(!1),le=Object(v.a)(ie,2),oe=le[0],de=le[1],he=Object(a.useState)(!1),je=Object(v.a)(he,2),ue=je[0],be=je[1],me=Object(a.useState)([]),pe=Object(v.a)(me,2),Oe=pe[0],xe=pe[1],ge=Object(a.useState)({openSB:!1,vertical:"top",horizontal:"center"}),ve=Object(v.a)(ge,2),fe=ve[0],Ce=ve[1];Object(a.useEffect)((function(){p(!0),setTimeout((function(){p(!1)}),2e3)}),[]),Object(a.useEffect)((function(){k()({url:"https://slackapi.avionschool.com/api/v1/users",data:{},method:"GET",headers:{"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid}}).then((function(e){l(e.data.data),console.log(e.data.data)})).catch((function(e){console.log(e)}));k()({url:"https://slackapi.avionschool.com/api/v1/channels",data:{},method:"GET",headers:{"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid}}).then((function(e){return j(e.data.data)})).catch((function(e){console.log(e)})),Ie()}),[t]);var ye=function(e){k()({url:"https://slackapi.avionschool.com/api/v1/messages?receiver_id=".concat(e,"&receiver_class=Channel"),data:{},method:"GET",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then((function(e){I(e.data.data)})).catch((function(e){console.log(e)}))},Se=function(e){k()({url:"https://slackapi.avionschool.com/api/v1/messages?receiver_id=".concat(e.id,"&receiver_class=User"),method:"GET",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then((function(e){I(e.data.data)})).catch((function(e){console.log(e)}))},ke=Object(a.useState)({currentTime:"",currentDate:""}),Ue=Object(v.a)(ke,2),we=Ue[0],Te=Ue[1],Ie=function(){var e=new Date,t=new Array(7);t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday",setInterval((function(){var n=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),a=t[e.getDay()];Te({currentTime:n,currentDate:a})}),1e3)};return{loading:m,headers:t,users:i,channels:h,handleClickOpenChannel:function(){de(!oe)},openChannel:oe,inviteUserToAChannel:function(e,n,a){var s,c=i.filter((function(t){return t.email===e}));k()({url:"https://slackapi.avionschool.com/api/v1/channel/add_member",data:{id:"".concat(Oe.id),member_id:"".concat(null===(s=c[0])||void 0===s?void 0:s.id)},method:"POST",headers:{"access-token":t["access-token"],expiry:t.expiry,uid:t.uid,client:t.client}}).then((function(e){e.data.errors?re(e.data.errors):(Ce(Object(N.a)(Object(N.a)({},fe),{},{openSB:!0})),a(""),re(""),n()),console.log(e)})).catch((function(e){console.error(e)}))},createNewChannelWithUser:function(e,n,a){k()({url:"https://slackapi.avionschool.com/api/v1/channels",data:{name:"".concat(e),user_ids:[s]},method:"POST",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then((function(e){var s;if(k()({url:"https://slackapi.avionschool.com/api/v1/channels",data:{},method:"GET",headers:{"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid}}).then((function(e){return j(e.data.data)})).catch((function(e){console.log(e)})),null===(s=e.data.data)||void 0===s?void 0:s.id)Ce(Object(N.a)(Object(N.a)({},fe),{},{openSB:!0})),n(),a("");else{var c=e.data.errors;ne({failed:Object(A.a)(c).join(". ")})}})).catch((function(e){console.log(e)}))},handleClickOpenUsers:function(){be(!ue)},openUsers:ue,handleDrawerToggle:function(){R(!M)},mobileOpen:M,allMessagesRetrieved:T,message:g,setMessage:S,selectedChannel:Oe,setSelectedChannel:xe,createMessageInAChannel:function(e){k()({url:"https://slackapi.avionschool.com/api/v1/messages",data:{receiver_id:"".concat(Oe.id),receiver_class:"Channel",body:"".concat(e)},method:"POST",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then(ye(Oe.id)).catch((function(e){console.log(e)}))},intervalRetrieveMessages:function(e){clearTimeout(f),clearTimeout(C),L([]),ye(e),f=setInterval((function(){ye(e)}),1500)},userID:s,returnToHome:function(){Q({home:!0,channel:!1}),clearTimeout(f),clearTimeout(C),I([]),xe([]),L([])},sortByEmail:function(e){var t=Z.filter((function(t){return t.email.includes(e)}));z(t)},searchResults:F,selectedUser:_,createDirectMessageToAUser:function(e){k()({url:"https://slackapi.avionschool.com/api/v1/messages",data:{receiver_id:"".concat(_.id),receiver_class:"User",body:"".concat(e)},method:"POST",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).catch((function(e){console.log(e)}))},intervalRetrieveMessagesWithUser:function(e){clearTimeout(f),clearTimeout(C),xe([]),L(e),Se(e),z([]),C=setInterval((function(){Se(e)}),1500)},currentDateAndTime:we,isCreateChannel:te,setIsCreateChannel:ne,userInviteError:ce,setUserInviteError:re,stateSB:fe,setStateSB:Ce,retrieveChannelUsers:function(e){k()({url:"https://slackapi.avionschool.com/api/v1/channels/".concat(e),method:"GET",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then((function(e){var t=e.data.data.channel_members.map((function(e){return e.user_id})),n=i.filter((function(e){return t.includes(e.id)}));Y(n),Q({home:!1,channel:!0})})).catch((function(e){console.log(e)}))},channelMembers:J,usersDisplayed:K}},W=n(291),F=n(282),z=n(300),P=n(298),G=n(299),_=n(121),L=n.n(_),H=n(120),V=n.n(H),J=n(306),Y=n(309),q=n(308),X=n(307),K=function(e){var t=e.open,n=e.handleClose,s=e.dialogTitleText,c=e.inviteUserToAChannel,r=e.label,i=e.type,l=e.createNewChannelWithUser,o=e.intervalRetrieveMessagesWithUser,h=e.sortByEmail,u=e.searchResults,b=e.isCreateChannel,m=e.setIsCreateChannel,p=e.userInviteError,O=e.setUserInviteError,x=e.setGetChannel,g=e.setGetEmail,f=Object(a.useState)(""),C=Object(v.a)(f,2),y=C[0],S=C[1];return Object(E.jsx)("div",{children:Object(E.jsxs)(J.a,{open:t,onClose:n,children:[Object(E.jsx)(X.a,{sx:{pb:1},children:s}),Object(E.jsxs)(q.a,{children:[h&&Object(E.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"name",label:r,type:i,fullWidth:!0,variant:"standard",onChange:function(e){S(e.target.value),h(y)},value:y}),u&&Object(E.jsx)(P.a,{className:"list-results",children:u.map((function(e){return Object(E.jsx)(F.a,{sx:{pl:4},onClick:function(){o(e),n(),S("")},children:Object(E.jsx)(G.a,{primary:"".concat(e.uid)})},e.id)}))}),c&&Object(E.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"name",label:r,type:i,fullWidth:!0,variant:"standard",onChange:function(e){S(e.target.value)},value:y}),p&&Object(E.jsx)("span",{style:{color:"red"},children:p}),l&&Object(E.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"name",label:r,type:i,fullWidth:!0,variant:"standard",onChange:function(e){S(e.target.value)},value:y}),(null===b||void 0===b?void 0:b.failed)&&Object(E.jsx)("span",{style:{color:"red"},children:Object(A.a)(b.failed)})]}),Object(E.jsxs)(Y.a,{children:[Object(E.jsx)(d.a,{onClick:function(){n(),S(""),b&&m(!1),p&&O("")},children:"Cancel"}),c&&Object(E.jsx)(d.a,{onClick:function(){g(y),c(y,n,S),setTimeout((function(){g("")}),4e3)},children:"Invite"}),l&&Object(E.jsx)(d.a,{sx:{alignItems:"center"},onClick:function(){x(y),l(y,n,S),setTimeout((function(){x("")}),4e3)},children:"Create"})]})]})})},Q=n(119),Z=n.n(Q),$=n(122),ee=n.n($),te=function(e){e.handleClickOpenChannel,e.openChannel;var t=e.channels,n=e.createNewChannelWithUser,s=(e.handleClickOpenUsers,e.users),c=(e.openUsers,e.setSelectedChannel),r=e.intervalRetrieveMessages,i=e.returnToHome,l=e.sortByEmail,o=e.searchResults,d=e.intervalRetrieveMessagesWithUser,h=e.isCreateChannel,j=e.setIsCreateChannel,u=e.setGetChannel,b=e.retrieveChannelUsers,m=Object(a.useState)(!1),p=Object(v.a)(m,2),O=p[0],x=p[1],g=Object(a.useState)(!1),f=Object(v.a)(g,2),C=f[0],y=f[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(z.a,{sx:{bgcolor:"purple"}}),Object(E.jsxs)("div",{className:"sidebar-container channel-list",children:[Object(E.jsx)("div",{className:"side-navigation",style:{backgroundColor:"#b491c8"},children:Object(E.jsxs)(P.a,{children:[Object(E.jsxs)(F.a,{className:"side-navigation-item",onClick:function(){i()},children:[Object(E.jsx)(Z.a,{}),Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"Home"})]}),Object(E.jsxs)(F.a,{className:"side-navigation-item",onClick:function(){x(!0)},children:[Object(E.jsx)(V.a,{}),Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"Add"}),Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"Channel"})]}),Object(E.jsxs)(F.a,{className:"side-navigation-item",onClick:function(){y(!0)},children:[Object(E.jsx)(L.a,{}),Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"Direct"}),Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"Message"})]})]})}),Object(E.jsxs)("div",{className:"main-sidebar",children:[Object(E.jsxs)(P.a,{children:[Object(E.jsxs)("div",{style:{display:"flex"},children:[Object(E.jsx)(ee.a,{sx:{mt:.5,mr:1}}),Object(E.jsx)(G.a,{primary:"Channels (".concat(t?t.length:0,")")})]}),Object(E.jsx)(P.a,{component:"div",disablePadding:!0,children:t?t.map((function(e){return Object(E.jsx)("div",{children:Object(E.jsx)(F.a,{sx:{pl:4},onClick:function(){r(e.id),c(e),b(e.id)},children:Object(E.jsx)(G.a,{primary:"# ".concat(e.name)})})},e.id)})):Object(E.jsx)(F.a,{sx:{pl:4},children:Object(E.jsx)(G.a,{primary:"No users Available"})})})]}),Object(E.jsx)(P.a,{})]})]}),Object(E.jsx)(K,{open:O,handleClose:function(){x(!1)},dialogTitleText:"Enter New Channel Name You Want to Create",label:"Channel Name",type:"text",createNewChannelWithUser:n,isCreateChannel:h,setIsCreateChannel:j,setGetChannel:u}),Object(E.jsx)(K,{open:C,handleClose:function(){y(!1)},dialogTitleText:"Who do you want to send a message to?",label:"Email",type:"text",users:s,sortByEmail:l,searchResults:o,intervalRetrieveMessagesWithUser:d})]})},ne=n(124),ae=n.n(ne),se=n(302),ce=n(123),re=n.n(ce),ie=n(301),le=function(e){var t=e.drawerWidth,n=e.headers,s=e.handleDrawerToggle,c=e.channels,r=e.selectedChannel,i=e.inviteUserToAChannel,l=e.userID,o=e.selectedUser,d=e.currentDateAndTime,h=e.userInviteError,j=e.setUserInviteError,u=e.setGetEmail,b=Object(a.useState)(!1),p=Object(v.a)(b,2),O=p[0],x=p[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(ie.a,{className:"appbar",position:"fixed",sx:{width:{sm:"calc(100% - ".concat(t,"px)")},ml:{sm:"".concat(t,"px")}},children:Object(E.jsxs)(z.a,{style:{backgroundColor:"purple",justifyContent:"space-between",paddingRight:"250px"},children:[Object(E.jsx)(se.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:s,sx:{mr:2,display:{sm:"none"}},children:Object(E.jsx)(re.a,{})}),r.name?Object(E.jsx)(m.a,{onClick:function(){x(!0)},children:Object(E.jsxs)(F.a,{children:[Object(E.jsx)(ae.a,{style:{fontSize:"1.5rem",marginRight:"0.5rem"}}),Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"Invite"})]})}):Object(E.jsxs)(m.a,{style:{display:"flex",flexDirection:"column"},children:[Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"".concat(d.currentDate)}),Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"".concat(d.currentTime)})]}),r.name||o.email?Object(E.jsx)(m.a,{children:Object(E.jsx)(F.a,{children:Object(E.jsxs)("span",{style:{fontSize:"0.9rem"},children:[r.name&&"Channel: ".concat(r.name)," ",o.email&&"Chat with ".concat(o.email)]})})}):Object(E.jsx)(m.a,{children:Object(E.jsx)(F.a,{children:Object(E.jsx)("span",{style:{fontSize:"1rem"},children:"Avion Slack App"})})}),Object(E.jsxs)(m.a,{style:{textAlign:"center",display:"flex",flexDirection:"column"},children:[Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"".concat(n.uid)}),Object(E.jsx)("span",{style:{fontSize:"0.75rem"},children:"ID: ".concat(l)})]})]})}),Object(E.jsx)(K,{open:O,handleClose:function(){x(!1)},dialogTitleText:r&&"Enter email to invite to ".concat(r.name),channels:c,type:"text",label:"Email",inviteUserToAChannel:i,userInviteError:h,setUserInviteError:j,setGetEmail:u})]})},oe=n(285);function de(e){var t=e.stateSB,n=e.setStateSB,a=e.messageSB,s=t.vertical,c=t.horizontal,r=t.openSB;return Object(E.jsx)(oe.a,{open:r,autoHideDuration:3e3,anchorOrigin:{vertical:s,horizontal:c},onClose:function(){return n(Object(N.a)(Object(N.a)({},t),{},{openSB:!1}))},message:a},s+c)}var he=function(e){var t=e.allMessagesRetrieved,n=e.setMessage,a=e.message,s=e.createMessageInAChannel,c=e.selectedChannel,r=e.selectedUser,i=e.createDirectMessageToAUser,l=e.stateSB,d=e.setStateSB,h=e.getChannel,u=e.getEmail;return Object(E.jsxs)(E.Fragment,{children:[h&&Object(E.jsx)(de,{stateSB:l,messageSB:"Successfully Created Channel: ".concat(h,"!"),setStateSB:d}),u&&Object(E.jsx)(de,{stateSB:l,messageSB:"Successfully Added User: ".concat(u,"!"),setStateSB:d}),Object(E.jsxs)(m.a,{component:"main",sx:{flexGrow:1,p:3},style:{padding:"20px 20px 150px 360px"},children:[Object(E.jsx)(z.a,{}),Object(E.jsx)(m.a,{style:{display:"flex",flexDirection:"column",width:"600px"},children:(null===t||void 0===t?void 0:t.length)>=1?t.map((function(e){return Object(E.jsx)("div",{children:Object(E.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(E.jsx)("div",{style:{padding:"20px 0"},children:Object(E.jsx)(o.a,{style:{marginRight:"10px",backgroundColor:"purple"},children:e.sender.email.slice(0,1).toUpperCase()})}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("p",{style:{margin:"0"},children:[" ","".concat(e.sender.email.split("@")[0]," says: at ").concat(e.created_at,": ")]}),Object(E.jsx)("p",{style:{margin:"0"},children:e.body})]})]})},e.id)})):c.name&&Object(E.jsxs)("span",{className:"greetings",children:["Channel: ",c.name," has no messages."]})||r.email&&Object(E.jsxs)("span",{className:"greetings",children:["You have no chat history with ",r.email,". Send him/her a message!"]})||Object(E.jsx)("span",{className:"greetings",children:"Welcome to Avion Slack App! Hop on a channel or send a DM to get started!\ud83d\udc40"})}),c.name&&Object(E.jsx)(m.a,{className:"message-area-container",component:"form",noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),s(a),n("")},children:Object(E.jsx)(j.a,{className:"message-area",id:"outlined-basic",label:"Enter your message here",variant:"outlined",onChange:function(e){return n(e.target.value)},value:a})}),r.email&&Object(E.jsx)(m.a,{className:"message-area-container",component:"form",noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),i(a),n("")},children:Object(E.jsx)(j.a,{className:"message-area",id:"outlined-basic",label:"Enter your message here",variant:"outlined",onChange:function(e){return n(e.target.value)},value:a})})]})]})},je=n(303),ue=n(288),be=n(304),me=function(e){var t=e.users,n=e.channelMembers,a=e.usersDisplayed;return Object(E.jsxs)(W.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},variant:"permanent",anchor:"right",children:[Object(E.jsx)(z.a,{style:{opacity:"0"}}),Object(E.jsx)(je.a,{}),a.home&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(be.a,{children:"ALL USERS"}),Object(E.jsx)(P.a,{style:{overflowX:"hidden"},children:t.slice(0,100).map((function(e){return Object(E.jsxs)(ue.a,{children:[Object(E.jsx)(o.a,{style:{marginRight:"10px",backgroundColor:"purple"},children:e.email.slice(0,1).toUpperCase()}),Object(E.jsx)(G.a,{style:{margin:0,width:"100%"},primary:"".concat(e.uid.split("@")[0])})]},e.id)}))})]}),a.channel&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(be.a,{children:"Channel Members"}),Object(E.jsx)(P.a,{style:{overflowX:"hidden"},children:n.map((function(e){return Object(E.jsxs)(ue.a,{children:[Object(E.jsx)(o.a,{style:{marginRight:"10px",backgroundColor:"purple"},children:e.email.slice(0,1).toUpperCase()}),Object(E.jsx)(G.a,{style:{margin:0,width:"100%"},primary:"".concat(e.email.split("@")[0])})]},e.id)}))})]}),Object(E.jsx)(je.a,{})]})},pe=function(e){var t=e.headers,n=e.users,s=e.channels,c=e.handleClickOpenChannel,r=e.openChannel,i=e.inviteUserToAChannel,l=e.createNewChannelWithUser,o=e.handleClickOpenUsers,d=e.openUsers,j=e.handleDrawerToggle,u=e.mobileOpen,b=e.allMessagesRetrieved,p=e.message,O=e.setMessage,x=e.isAChannelSelected,g=e.selectedChannel,f=e.setSelectedChannel,C=e.createMessageInAChannel,y=e.intervalRetrieveMessages,S=e.userID,k=e.returnToHome,U=e.sortByEmail,w=e.searchResults,T=e.selectedUser,I=e.createDirectMessageToAUser,D=e.intervalRetrieveMessagesWithUser,M=e.currentDateAndTime,R=e.isCreateChannel,A=e.setIsCreateChannel,N=e.userInviteError,B=e.setUserInviteError,F=e.stateSB,z=e.setStateSB,P=e.retrieveChannelUsers,G=e.channelMembers,_=e.usersDisplayed,L=320,H=Object(a.useState)(""),V=Object(v.a)(H,2),J=V[0],Y=V[1],q=Object(a.useState)(""),X=Object(v.a)(q,2),K=X[0],Q=X[1];return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(m.a,{children:[Object(E.jsx)(h.a,{}),Object(E.jsx)(le,{drawerWidth:L,headers:t,handleDrawerToggle:j,isAChannelSelected:x,selectedChannel:g,inviteUserToAChannel:i,userID:S,selectedUser:T,currentDateAndTime:M,userInviteError:N,setUserInviteError:B,setGetEmail:Q}),Object(E.jsxs)(m.a,{component:"nav",sx:{width:{sm:L},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(E.jsx)(W.a,{variant:"temporary",open:u,onClose:j,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:L}},children:Object(E.jsx)(te,{handleClickOpenChannel:c,openChannel:r,createNewChannelWithUser:l,handleClickOpenUsers:o,users:n,openUsers:d,setSelectedChannel:f,intervalRetrieveMessages:y,returnToHome:k,sortByEmail:U,searchResults:w,intervalRetrieveMessagesWithUser:D,channels:s,isCreateChannel:R,setIsCreateChannel:A,setGetChannel:Y,retrieveChannelUsers:P})}),Object(E.jsx)(W.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:L}},open:!0,children:Object(E.jsx)(te,{handleClickOpenChannel:c,openChannel:r,createNewChannelWithUser:l,handleClickOpenUsers:o,users:n,openUsers:d,setSelectedChannel:f,intervalRetrieveMessages:y,returnToHome:k,sortByEmail:U,searchResults:w,intervalRetrieveMessagesWithUser:D,channels:s,isCreateChannel:R,setIsCreateChannel:A,setGetChannel:Y,retrieveChannelUsers:P})})]}),Object(E.jsx)(me,{users:n,channelMembers:G,usersDisplayed:_}),Object(E.jsx)(he,{allMessagesRetrieved:b,setMessage:O,message:p,createMessageInAChannel:C,selectedChannel:g,selectedUser:T,createDirectMessageToAUser:I,stateSB:F,setStateSB:z,getChannel:J,getEmail:K})]})})},Oe=(n(221),function(){var e=B(),t=e.headers,n=e.users,a=e.channels,s=e.handleClickOpenChannel,c=e.openChannel,r=e.inviteUserToAChannel,i=e.createNewChannelWithUser,l=e.handleClickOpenUsers,o=e.openUsers,d=e.handleDrawerToggle,h=e.mobileOpen,j=e.allMessagesRetrieved,u=e.message,b=e.setMessage,m=e.isAChannelSelected,p=e.selectedChannel,O=e.setSelectedChannel,x=e.createMessageInAChannel,g=e.intervalRetrieveMessages,v=e.userID,f=e.returnToHome,C=e.sortByEmail,y=e.searchResults,S=e.selectedUser,k=e.createDirectMessageToAUser,U=e.intervalRetrieveMessagesWithUser,w=e.loading,T=e.currentDateAndTime,I=e.isCreateChannel,D=e.setIsCreateChannel,M=e.userInviteError,A=e.setUserInviteError,N=e.stateSB,W=e.setStateSB,F=e.retrieveChannelUsers,z=e.channelMembers,P=e.usersDisplayed;return Object(E.jsx)(E.Fragment,{children:w?Object(E.jsx)(R,{loading:w}):Object(E.jsx)(pe,{headers:t,users:n,channels:a,handleClickOpenChannel:s,openChannel:c,inviteUserToAChannel:r,createNewChannelWithUser:i,handleClickOpenUsers:l,openUsers:o,handleDrawerToggle:d,mobileOpen:h,allMessagesRetrieved:j,message:u,setMessage:b,isAChannelSelected:m,selectedChannel:p,setSelectedChannel:O,createMessageInAChannel:x,intervalRetrieveMessages:g,userID:v,returnToHome:f,sortByEmail:C,searchResults:y,selectedUser:S,createDirectMessageToAUser:k,intervalRetrieveMessagesWithUser:U,currentDateAndTime:T,isCreateChannel:I,setIsCreateChannel:D,userInviteError:M,setUserInviteError:A,stateSB:N,setStateSB:W,retrieveChannelUsers:F,channelMembers:z,usersDisplayed:P})})}),xe=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(i.a,{children:Object(E.jsxs)(l.d,{children:[Object(E.jsx)(l.b,{exact:!0,path:"/",comp:M,children:Object(E.jsx)(M,{})}),Object(E.jsx)(l.b,{exact:!0,path:"/chat",comp:Oe,children:Object(E.jsx)(Oe,{})})]})})})},ge=function(){return Object(E.jsx)(xe,{})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,310)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(ge,{})}),document.getElementById("root")),ve()}},[[222,1,2]]]);
//# sourceMappingURL=main.d0704c26.chunk.js.map