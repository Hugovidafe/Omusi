(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{150:function(e,t,n){e.exports=n.p+"static/media/icon.608e4d9d.png"},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return en}));var r=n(0),a=n.n(r),o=n(189),c=n(8),l=n.n(c),i=Object(r.createContext)([{},function(){}]),u=function(e){var t=Object(r.useState)({uid:null,username:"",email:"",profilePhotoUrl:"default"}),n=l()(t,2),o=n[0],c=n[1];return a.a.createElement(i.Provider,{value:[o,c]},e.children)},s=n(3),p=n.n(s),m=n(7),f=n.n(m),d=n(62);n(237),n(238);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Object(r.createContext)();d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyChrwk82WxXs8ND9ASuoAoMzO6mNtsqpnQ",authDomain:"omusi-hugovidafe.firebaseapp.com",projectId:"omusi-hugovidafe",storageBucket:"omusi-hugovidafe.appspot.com",messagingSenderId:"375170351428",appId:"1:375170351428:web:2a0007599a6f0bc9549711"});var x,E,w,v,O,y,P,S,j,k,C,U,T,I,V,D,F,z,A,B,N,M,L=d.a.firestore(),H={getCurrentUser:function(){return d.a.auth().currentUser},createUser:function(e){var t,n;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.a.awrap(d.a.auth().createUserWithEmailAndPassword(e.email,e.password));case 3:return t=H.getCurrentUser().uid,n="default",r.next=7,p.a.awrap(L.collection("users").doc(t).set({username:e.username,email:e.email,profilePhotoUrl:n}));case 7:if(!e.profilePhoto){r.next=11;break}return r.next=10,p.a.awrap(H.uploadProfilePhoto(e.profilePhoto));case 10:n=r.sent;case 11:return delete e.password,r.abrupt("return",b(b({},e),{},{profilePhotoUrl:n,uid:t}));case 15:r.prev=15,r.t0=r.catch(0),console.log("Error @createUser: ",r.t0.message);case 18:case"end":return r.stop()}}),null,null,[[0,15]],Promise)},uploadProfilePhoto:function(e){var t,n,r,a;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=H.getCurrentUser().uid,o.prev=1,o.next=4,p.a.awrap(H.getBlob(e));case 4:return n=o.sent,r=d.a.storage().ref("profilePhotos").child(t),o.next=8,p.a.awrap(r.put(n));case 8:return o.next=10,p.a.awrap(r.getDownloadURL());case 10:return a=o.sent,o.next=13,p.a.awrap(L.collection("users").doc(t).update({profilePhotoUrl:a}));case 13:return o.abrupt("return",a);case 16:o.prev=16,o.t0=o.catch(1),console.log("Error @uploadProfilePhoto: ",o.t0);case 19:case"end":return o.stop()}}),null,null,[[1,16]],Promise)},getBlob:function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(new Promise((function(t,n){var r=new XMLHttpRequest;r.onload=function(){t(r.response)},r.onerror=function(){n(new TypeError("Network req failed."))},r.responseType="blob",r.open("GET",e,!0),r.send("null")})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,null,null,Promise)},getUserInfo:function(e){var t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.a.awrap(L.collection("users").doc(e).get());case 3:if(!(t=n.sent).exists){n.next=6;break}return n.abrupt("return",t.data());case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("Error @getUserInfo: ",n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]],Promise)},logOut:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.awrap(d.a.auth().signOut());case 3:return e.abrupt("return",!0);case 6:e.prev=6,e.t0=e.catch(0),console.log("Error @logOut: ",e.t0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),null,null,[[0,6]],Promise)},signIn:function(e,t){return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",d.a.auth().signInWithEmailAndPassword(e,t));case 1:case"end":return n.stop()}}),null,null,null,Promise)}},W=function(e){return a.a.createElement(h.Provider,{value:H},e.children)},q=n(295),R=n(11),J=n.n(R),X=n(296),G=n(12),K=n(293),Q=n(30),Y=n.n(Q),_=n(121),Z=TextStyle=function(e){var t=Y()({},e);return a.a.createElement($,t,t.children)},$=_.a.Text(x||(x=J()(["\n  color: ",";\n  margin: ",";\n  padding: ",";\n\n  ","\n\n  ","\n\n  ","\n"])),(function(e){var t;return null!=(t=e.color)?t:"#DBDBDB"}),(function(e){var t;return null!=(t=e.margin)?t:0}),(function(e){var t;return null!=(t=e.padding)?t:0}),(function(e){var t=e.title,n=e.large,r=e.medium,a=e.small,o=e.tiny;switch(!0){case t:return"font-size: 32px";case n:return"font-size: 24px";case r:return"font-size: 16px";case a:return"font-size: 13px";case o:return"font-size: 11px";default:return"font-size: 14px"}}),(function(e){var t=e.light,n=e.semi,r=e.bold,a=e.heavy;switch(!0){case t:return"font-weight: 200";case n:return"font-weight: 300";case r:return"font-weight: 600";case a:return"font-weight: 700";default:return"font-weight: 400"}}),(function(e){var t=e.center,n=e.right;switch(!0){case t:return"text-align: center";case n:return"text-align: right";default:return"text-align: left"}})),ee=HeaderStyle=function(e){var t=Y()({},e);return a.a.createElement(te,t,t.children)},te=_.a.View(E||(E=J()(["\n  flex-direction: row;\n  width: 100%;\n  height: 64px;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  padding: 0 8px;\n  margin-bottom: 16px;\n"]))),ne=HomeScreen=function(){var e=Object(r.useContext)(i),t=l()(e,2);t[0],t[1];return Object(r.useEffect)((function(){setTimeout((function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),null,null,null,Promise)}))}),[]),a.a.createElement(re,null,a.a.createElement(ee,null,a.a.createElement(Z,{large:!0,light:!0,center:!0},"Home")),a.a.createElement(ae,{barStyle:"dark-content"}))},re=G.a.View(w||(w=J()(["\n  flex: 1;\n"]))),ae=G.a.StatusBar(v||(v=J()([""]))),oe=SearchScreen=function(){return a.a.createElement(ce,null,a.a.createElement(ee,null,a.a.createElement(Z,{large:!0,light:!0,center:!0},"Search")),a.a.createElement(le,{barStyle:"dark-content"}))},ce=G.a.View(O||(O=J()(["\n  flex: 1;\n"]))),le=G.a.StatusBar(y||(y=J()([""]))),ie=NotificationScreen=function(){return a.a.createElement(ue,null,a.a.createElement(ee,null,a.a.createElement(Z,{large:!0,light:!0,center:!0},"Notifications")),a.a.createElement(se,{barStyle:"dark-content"}))},ue=G.a.View(P||(P=J()(["\n  flex: 1;\n"]))),se=G.a.StatusBar(S||(S=J()([""]))),pe=ProfileScreen=function(e){var t=e.navigation,o=Object(r.useContext)(i),c=l()(o,2),u=c[0];c[1],Object(r.useContext)(h);return a.a.createElement(me,null,a.a.createElement(ee,null,a.a.createElement(Z,{large:!0,light:!0,center:!0},"Profile")),a.a.createElement(fe,null,a.a.createElement(de,{source:"default"===u.ProfilePhotoUrl?n(150):{uri:u.profilePhotoUrl}})),a.a.createElement(Z,{large:!0,bold:!0,margin:"16px 0 32px 0"},u.username),a.a.createElement(ge,null,a.a.createElement(be,null,a.a.createElement(Z,{large:!0,light:!0},"21"),a.a.createElement(Z,{small:!0,bold:!0,color:"#c2c4cd"},"Playlists")),a.a.createElement(be,null,a.a.createElement(Z,{large:!0,light:!0},"981"),a.a.createElement(Z,{small:!0,bold:!0,color:"#c2c4cd"},"Followers")),a.a.createElement(be,null,a.a.createElement(Z,{large:!0,light:!0},"63"),a.a.createElement(Z,{small:!0,bold:!0,color:"#c2c4cd"},"Following"))),a.a.createElement(he,null,a.a.createElement(xe,{onPress:function(){return t.navigate("Settings")}},a.a.createElement(Z,{medium:!0,bold:!0,color:"#23a8d9"},"Settings"))))},me=G.a.View(j||(j=J()(["\n  flex: 1;\n  align-items: center;\n"]))),fe=G.a.View(k||(k=J()([""]))),de=G.a.Image(C||(C=J()(["\n  width: 128px;\n  height: 128px;\n  border-radius: 64px;\n"]))),ge=G.a.View(U||(U=J()(["\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 0 32px;\n  flex: 1;\n"]))),be=G.a.View(T||(T=J()(["\n  align-items: center;\n  flex: 1;\n"]))),he=G.a.View(I||(I=J()(["\n  margin-bottom: 32px;\n"]))),xe=G.a.TouchableOpacity(V||(V=J()([""])));function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve,Oe,ye,Pe,Se,je,ke,Ce,Ue,Te,Ie,Ve,De,Fe,ze,Ae,Be,Ne,Me,Le,He,We,qe,Re,Je,Xe,Ge,Ke,Qe,Ye,_e,Ze=SettingsScreen=function(){var e=Object(r.useContext)(i),t=l()(e,2),n=(t[0],t[1]),o=Object(r.useContext)(h);return a.a.createElement($e,null,a.a.createElement(ee,null,a.a.createElement(Z,{large:!0,light:!0,center:!0},"Settings")),a.a.createElement(et,null,a.a.createElement(tt,null,a.a.createElement(Z,null),a.a.createElement(nt,null),a.a.createElement(nt,null)),a.a.createElement(tt,null,a.a.createElement(nt,null),a.a.createElement(nt,null))),a.a.createElement(rt,null,a.a.createElement(at,{onPress:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(o.logOut());case 2:e.sent&&n((function(e){return we(we({},e),{},{uid:!1})}));case 4:case"end":return e.stop()}}),null,null,null,Promise)}},a.a.createElement(Z,{medium:!0,bold:!0,color:"#23a8d9"},"Log out"))),a.a.createElement(ot,{barStyle:"dark-content"}))},$e=G.a.View(D||(D=J()(["\n  flex: 1;\n  align-items: center;\n"]))),et=G.a.FlatList(F||(F=J()(["\n  flex: 1;\n"]))),tt=G.a.View(z||(z=J()([""]))),nt=G.a.TouchableOpacity(A||(A=J()([""]))),rt=G.a.View(B||(B=J()(["\n  margin-bottom: 32px;\n"]))),at=G.a.TouchableOpacity(N||(N=J()([""]))),ot=G.a.StatusBar(M||(M=J()([""]))),ct=SettingsStackScreens=function(){var e=Object(q.a)();return a.a.createElement(e.Navigator,{headerMode:"none"},a.a.createElement(e.Screen,{name:"Settings",component:Ze}))},lt=ProfileStackScreens=function(){var e=Object(q.a)();return a.a.createElement(e.Navigator,{headerMode:"none"},a.a.createElement(e.Screen,{name:"Profile",component:pe}),a.a.createElement(e.Screen,{name:"Settings",component:ct}))},it=MainStackScreens=function(){var e=Object(X.a)(),t=Object(r.useContext)(i),o=l()(t,2),c=o[0];o[1];return a.a.createElement(e.Navigator,{tabBarOptions:{showLabel:!1,showIcon:!0,style:{height:60}},screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){var r,o=e.focused;switch(t.name){case"Home":r=o?"home":"home-outline";break;case"Search":r=o?"search":"search-outline";break;case"Notification":r=o?"notifications":"notifications-outline";break;default:r=o?"home":"home-outline"}return"Profile"===t.name?o?a.a.createElement(ut,{focused:!0},a.a.createElement(st,{source:"default"===c.ProfilePhotoUrl?n(150):{uri:c.profilePhotoUrl}})):a.a.createElement(ut,null,a.a.createElement(st,{source:"default"===c.ProfilePhotoUrl?n(150):{uri:c.profilePhotoUrl}})):a.a.createElement(K.a,{name:r,size:24,color:"black"})}}}},a.a.createElement(e.Screen,{name:"Home",component:ne}),a.a.createElement(e.Screen,{name:"Search",component:oe}),a.a.createElement(e.Screen,{name:"Notification",component:ie}),a.a.createElement(e.Screen,{name:"Profile",component:lt,listeners:function(e){var t=e.navigation;return{tabPress:function(e){e.preventDefault(),t.navigate("Profile",{screen:"Profile"})},tabLongPress:function(e){e.preventDefault(),t.navigate("Profile",{screen:"Settings"})}}}}))},ut=G.a.View(ve||(ve=J()(["\n  width: 33px;\n  height: 33px;\n  border-radius: 16.5px;\n  border-width: 3px;\n  border-color: ",";\n  justify-content: center;\n  align-items: center;\n"])),(function(e){return e.focused?"#111111":"#00000000"})),st=G.a.Image(Oe||(Oe=J()(["\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n"]))),pt=SignInScreen=function(e){var t=e.navigation,n=Object(r.useState)(),o=l()(n,2),c=o[0],u=o[1],s=Object(r.useState)(),m=l()(s,2),f=m[0],d=m[1],g=Object(r.useState)(!1),b=l()(g,2),x=b[0],E=b[1],w=Object(r.useContext)(h),v=Object(r.useContext)(i),O=l()(v,2),y=(O[0],O[1]);return a.a.createElement(mt,null,a.a.createElement(ft,null,a.a.createElement(Z,{title:!0,semi:!0,center:!0},"\ud83e\udd17 Welcome back.")),a.a.createElement(dt,null,a.a.createElement(gt,null,a.a.createElement(bt,null,"Email Address"),a.a.createElement(ht,{autoCapitalize:"none",autoCompleteType:"email",autoCorrect:!1,autoFocus:!0,keyboardType:"email-address",onChangeText:function(e){return u(e.trim())},value:c})),a.a.createElement(gt,null,a.a.createElement(bt,null,"Password"),a.a.createElement(ht,{autoCapitalize:"none",autoCompleteType:"password",autoCorrect:!1,secureTextEntry:!0,onChangeText:function(e){return d(e.trim())},value:f}))),a.a.createElement(xt,{onPress:function(){var e,t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return E(!0),n.prev=1,n.next=4,p.a.awrap(w.signIn(c,f));case 4:return e=w.getCurrentUser().uid,n.next=7,p.a.awrap(w.getUserInfo(e));case 7:t=n.sent,y({uid:e,username:t.username,email:t.email,profilePhotoUrl:t.profilePhotoUrl}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),alert(n.t0.message);case 14:return n.prev=14,E(!1),n.finish(14);case 17:case"end":return n.stop()}}),null,null,[[1,11,14,17]],Promise)},disabled:x},x?a.a.createElement(Et,null):a.a.createElement(Z,{bold:!0,center:!0,color:"#FFFFFF"},"Sign In")),a.a.createElement(wt,{onPress:function(){return t.navigate("SignUp")}},a.a.createElement(Z,{small:!0,center:!0},"New to SocialApp?"," ",a.a.createElement(Z,{bold:!0,color:"#8022d9"},"Sign Up"))),a.a.createElement(vt,null,a.a.createElement(Ot,null),a.a.createElement(yt,null)),a.a.createElement(Pt,{barStyle:"light-content"}))},mt=G.a.View(ye||(ye=J()(["\n  flex: 1;\n"]))),ft=G.a.View(Pe||(Pe=J()(["\n  margin-top: 192px;\n"]))),dt=G.a.View(Se||(Se=J()(["\n  margin: 64px 32px 32px;\n"]))),gt=G.a.View(je||(je=J()(["\n  margin-bottom: 32px;\n"]))),bt=Object(G.a)(Z)(ke||(ke=J()(["\n  color: #8e93a1;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 300;\n"]))),ht=G.a.TextInput(Ce||(Ce=J()(["\n  border-bottom-color: #8e93a1;\n  border-bottom-width: 0.5px;\n  height: 48px;\n"]))),xt=G.a.TouchableOpacity(Ue||(Ue=J()(["\n  margin: 0 32px;\n  height: 48px;\n  align-items: center;\n  justify-content: center;\n  background-color: #8022d9;\n  border-radius: 6px;\n"]))),Et=G.a.ActivityIndicator.attrs((function(e){return{color:"#ffffff",size:"small"}}))(Te||(Te=J()([""]))),wt=G.a.TouchableOpacity(Ie||(Ie=J()(["\n  margin-top: 16px;\n"]))),vt=G.a.View(Ve||(Ve=J()(["\n  position: absolute;\n  width: 100%;\n  top: -50px;\n  z-index: -100;\n"]))),Ot=G.a.View(De||(De=J()(["\n  background-color: #8822d9;\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  border-radius: 200px;\n  right: -100px;\n  top: -200px;\n"]))),yt=G.a.View(Fe||(Fe=J()(["\n  background-color: #23a6d5;\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  border-radius: 100px;\n  left: -50px;\n  top: -50px;\n"]))),Pt=G.a.StatusBar(ze||(ze=J()([""]))),St=n(9),jt=n(294),kt=n(95),Ct=n(224),Ut=n(223),Tt=n(60);function It(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?It(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):It(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Dt=SignUpScreen=function(e){var t=e.navigation,n=Object(r.useState)(),o=l()(n,2),c=o[0],u=o[1],s=Object(r.useState)(),m=l()(s,2),f=m[0],d=m[1],g=Object(r.useState)(),b=l()(g,2),x=b[0],E=b[1],w=Object(r.useState)(!1),v=l()(w,2),O=v[0],y=v[1],P=Object(r.useState)(),S=l()(P,2),j=S[0],k=S[1],C=Object(r.useContext)(h),U=Object(r.useContext)(i),T=l()(U,2),I=(T[0],T[1]),V=function(e){var t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if("web"===St.a.OS){n.next=6;break}return n.next=3,p.a.awrap(kt.o(Ct[e]));case 3:return t=n.sent,status=t.status,n.abrupt("return",t);case 6:case"end":return n.stop()}}),null,null,null,Promise)},D=function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.awrap(Ut.a({mediaTypes:Tt.a.Images,allowsEditing:!0,aspect:[1,1],quality:.5}));case 3:(e=t.sent).cancelled||k(e.uri),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),null,null,[[0,7]],Promise)};return a.a.createElement(Ft,null,a.a.createElement(zt,null,a.a.createElement(Z,{title:!0,semi:!0,center:!0},"Sign up to get started.")),a.a.createElement(At,{onPress:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(V("MEDIA_LIBRARY"));case 2:e.sent.granted?D():alert("We need permission to access your media library.");case 4:case"end":return e.stop()}}),null,null,null,Promise)}},j?a.a.createElement(Nt,{source:{uri:j}}):a.a.createElement(Bt,null,a.a.createElement(jt.a,{name:"plus",size:24,color:"#FFFFFF"}))),a.a.createElement(Mt,null,a.a.createElement(Lt,null,a.a.createElement(Ht,null,"Username"),a.a.createElement(Wt,{autoCorrect:!1,autoFocus:!0,onChangeText:function(e){return u(e.trim())},value:c})),a.a.createElement(Lt,null,a.a.createElement(Ht,null,"Email Address"),a.a.createElement(Wt,{autoCapitalize:"none",autoCompleteType:"email",autoCorrect:!1,keyboardType:"email-address",onChangeText:function(e){return d(e.trim())},value:f})),a.a.createElement(Lt,null,a.a.createElement(Ht,null,"Password"),a.a.createElement(Wt,{autoCapitalize:"none",autoCompleteType:"password",autoCorrect:!1,secureTextEntry:!0,onChangeText:function(e){return E(e.trim())},value:x}))),a.a.createElement(qt,{onPress:function(){var e,t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),e={username:c,email:f,password:x,profilePhoto:j},n.prev=2,n.next=5,p.a.awrap(C.createUser(e));case 5:t=n.sent,I(Vt(Vt({},t),{},{uid:!0})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log("Error @signUp: ",n.t0);case 12:return n.prev=12,y(!1),n.finish(12);case 15:case"end":return n.stop()}}),null,null,[[2,9,12,15]],Promise)},disabled:O},O?a.a.createElement(Rt,null):a.a.createElement(Z,{bold:!0,center:!0,color:"#FFFFFF"},"Sign Up")),a.a.createElement(Jt,{onPress:function(){return t.navigate("SignIn")}},a.a.createElement(Z,{small:!0,center:!0},"Already have an account?"," ",a.a.createElement(Z,{bold:!0,color:"#8022d9"},"Sign In"))),a.a.createElement(Xt,null,a.a.createElement(Gt,null),a.a.createElement(Kt,null)),a.a.createElement(Qt,{barStyle:"light-content"}))},Ft=G.a.View(Ae||(Ae=J()(["\n  flex: 1;\n"]))),zt=G.a.View(Be||(Be=J()(["\n  margin-top: 190px;\n"]))),At=G.a.TouchableOpacity(Ne||(Ne=J()(["\n  background-color: #e1e2e6;\n  width: 80px;\n  height: 80px;\n  border-radius: 40px;\n  align-self: center;\n  margin-top: 16px;\n  overflow: hidden;\n"]))),Bt=G.a.View(Me||(Me=J()(["\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"]))),Nt=G.a.Image(Le||(Le=J()(["\n  flex: 1;\n"]))),Mt=G.a.View(He||(He=J()(["\n  margin: 16px 32px 32px;\n"]))),Lt=G.a.View(We||(We=J()(["\n  margin-bottom: 32px;\n"]))),Ht=Object(G.a)(Z)(qe||(qe=J()(["\n  color: #8e93a1;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 300;\n"]))),Wt=G.a.TextInput(Re||(Re=J()(["\n  border-bottom-color: #8e93a1;\n  border-bottom-width: 0.5px;\n  height: 48px;\n"]))),qt=G.a.TouchableOpacity(Je||(Je=J()(["\n  margin: 0 32px;\n  height: 48px;\n  align-items: center;\n  justify-content: center;\n  background-color: #8022d9;\n  border-radius: 6px;\n"]))),Rt=G.a.ActivityIndicator.attrs((function(e){return{color:"#ffffff",size:"small"}}))(Xe||(Xe=J()([""]))),Jt=G.a.TouchableOpacity(Ge||(Ge=J()(["\n  margin-top: 16px;\n"]))),Xt=G.a.View(Ke||(Ke=J()(["\n  position: absolute;\n  width: 100%;\n  top: -50px;\n  z-index: -100;\n"]))),Gt=G.a.View(Qe||(Qe=J()(["\n  background-color: #8822d9;\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  border-radius: 200px;\n  right: -100px;\n  top: -200px;\n"]))),Kt=G.a.View(Ye||(Ye=J()(["\n  background-color: #23a6d5;\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  border-radius: 100px;\n  left: -50px;\n  top: -50px;\n"]))),Qt=G.a.StatusBar(_e||(_e=J()([""]))),Yt=AuthStackScreens=function(){var e=Object(q.a)();return a.a.createElement(e.Navigator,{headerMode:"none"},a.a.createElement(e.Screen,{name:"SignIn",component:pt}),a.a.createElement(e.Screen,{name:"SignUp",component:Dt}))};function _t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Zt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_t(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $t=AppStackScreens=function(){var e=Object(q.a)(),t=Object(r.useContext)(i),n=l()(t,2),o=n[0],c=n[1],u=Object(r.useContext)(h);return Object(r.useEffect)((function(){setTimeout((function(){var e,t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=u.getCurrentUser())){n.next=8;break}return n.next=4,p.a.awrap(u.getUserInfo(e.uid));case 4:t=n.sent,c({uid:e.uid,email:t.email,username:t.username,profilePhotoUrl:t.profilePhotoUrl}),n.next=9;break;case 8:c((function(e){return Zt(Zt({},e),{},{uid:!1})}));case 9:case"end":return n.stop()}}),null,null,null,Promise)}))}),[]),a.a.createElement(e.Navigator,{headerMode:"none"},o.uid?a.a.createElement(e.Screen,{name:"Main",component:it}):a.a.createElement(e.Screen,{name:"Auth",component:Yt}))};function en(){return a.a.createElement(W,null,a.a.createElement(u,null,a.a.createElement(o.a,null,a.a.createElement($t,null))))}},229:function(e,t,n){e.exports=n(286)}},[[229,1,2]]]);
//# sourceMappingURL=app.05ba2e61.chunk.js.map