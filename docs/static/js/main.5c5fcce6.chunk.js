(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),u=n(26),o=n.n(u),i=(n(55),n(6)),s=n(7),l=n(9),p=n(8),m=n(10),h=(n(56),n(24)),f=(n(57),n(58),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,n=(e.likes,e.link,e.description),a=e.className,r=e.height,u=e.id,o={height:"".concat(r,"px")};return c.a.createElement("article",{className:a},c.a.createElement("a",{className:"title",href:"#/image/".concat(u),style:o},n),c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:t,alt:""})))}}]),t}(c.a.Component)),d=n(1),b=n.n(d),v=n(2),E=n(4),O=n(20),I=n.n(O),g={baseURL:"https://api.unsplash.com",baseURLId:"https://source.unsplash.com/",baseURLId2:" http://unplash.com/",clientId:"995142b5e2f546f4eac828d832606dfba0beaef27d62d77a1ff8cce9ba2bacac",secretKey:"2ba48f233f891ebb88bc9ac2b9387c2162785b57dc9ffc741bb2d518ca59c948",oAuthToken:"https://unsplash.com/oauth/token",oAuth:"https://unsplash.com/oauth/authorize",localAuth:"http://localhost:3000/auth",redirectUri:"",oAuthAll:"https://unsplash.com/oauth/authorize?client_id=995142b5e2f546f4eac828d832606dfba0beaef27d62d77a1ff8cce9ba2bacac&redirect_uri=http://localhost:3000/auth&response_type=code&scope=public",proxy:"https://crossorigin.me/"},y=n(42),j=n.n(y),k=I.a.create({baseURL:g.baseURL,headers:{Authorization:"Client-ID ".concat(g.clientId)}}),_=(I.a.create({baseURL:g.baseURLId2,headers:{Authorization:"Client-ID ".concat(g.clientId)}}),function(){var e=Object(E.a)(b.a.mark(function e(t,n){var a,r,c,u,o,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={params:{query:t,page:n}},e.next=3,k.get("/search/photos",a);case 3:return r=e.sent,c=r.data,u=c.total,o=c.total_pages,i=c.results,e.abrupt("return",{total:u,totalPages:o,items:i});case 6:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),C=new j.a({applicationId:"".concat(g.clientId),secret:"".concat(g.secretKey)}),N=function(){var e=Object(E.a)(b.a.mark(function e(t){var n,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.photos.getPhoto(t,1920,1080,[0,0,1920,1080]);case 2:return n=e.sent,a=n.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(E.a)(b.a.mark(function e(t){var n,a,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{client_id:g.clientId,client_secret:g.secretKey,redirect_uri:g.localAuth,code:t,grant_type:"authorization_code"}},a=I.a.create(n),e.next=4,a.post(g.oAuthToken);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();!function(e){e.FETCH="@unsplash/fetch",e.FILTER="@unsplash/filter",e.SUBMIT="@unsplash/submit",e.IMAGE="@image/fetsh"}(a||(a={}));var T,A=n(15),x=n(44),S=(n(99),n(19)),P=n.n(S),U=function(e){var t=e.children,n=e.classNames,a=Object(x.a)(e,["children","classNames"]),r=P()("btn",n);return c.a.createElement("button",Object.assign({className:r},a),c.a.createElement("span",null,t))},R=n(22);n(100);!function(e){e.TEXT="text",e.RADIO="radio",e.NUMBER="number",e.PASSWORD="password",e.PHONE="phone"}(T||(T={}));var L,D=function(e){var t=e.name,n=e.label,a=e.type;return r.createElement("div",{className:"input__native-group"},r.createElement("input",{name:t,type:a,className:"input__native-input",autoComplete:"off",onFocus:function(e){return e.currentTarget.value=""}}),r.createElement("label",{className:"input__native-label"},n),r.createElement("span",{className:"input__native-highlight"},"\xa0"),r.createElement("span",{className:"input__native-bar"},"\xa0"))},F=(n(101),n(45)),M=n.n(F),B=n(46),K=n.n(B),z=n(47),X=n.n(z),H=(n(102),function(e){var t=e.name,n=e.label,a=e.type,c=e.id,u=e.defaultChecked,o=P()("input__native-group","input__native-radio","input__native-radio-inline");return r.createElement("div",{className:o},r.createElement("input",{id:c,type:a,name:t,defaultChecked:u}),r.createElement("label",{htmlFor:c},n))});!function(e){e.ASC="asc",e.DESC="desc"}(L||(L={}));var G,J=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchInput:"",filterInput:"",radioInput:""},n.onFormChange=function(e){var t=n.props.onChange,a=n.state.searchInput,r=e.currentTarget.searchInput.value,c=Array.from(e.currentTarget.elements).filter(function(e){return e&&e.name?e.name:null}).reduce(function(e,t){return t.name?"radioInput"===t.name?!0===t.checked?Object(v.a)({},e,Object(R.a)({},t.name,t.id)):e:Object(v.a)({},e,Object(R.a)({},t.name,t.value)):e},{});n.setState(function(e){return Object(v.a)({},e,c)},function(){r===a&&t(n.state.filterInput,n.state.radioInput)})},n.onSubmit=function(e){e.preventDefault();var t=n.state.searchInput;n.props.searchInput!==t&&n.props.onSubmit(t,1)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.searchInput,a=t.radioInput;this.props.onSubmit(n||"cars",1),this.setState(function(e){return Object(v.a)({},e,{radioInput:a})},function(){return console.log(e.state)})}},{key:"render",value:function(){var e=P()("search-form","native-form");return r.createElement("form",{onSubmit:this.onSubmit,className:e,onChange:this.onFormChange},r.createElement("div",{className:"search"},r.createElement(D,{name:"searchInput",type:T.TEXT,label:"Search"}),r.createElement(U,{type:Z.SUBMIT,classNames:"btn-search"}," ",r.createElement("img",{src:M.a,alt:"Search",className:"icon-search"}))),r.createElement(D,{name:"filterInput",type:T.TEXT,label:"Filter"}),r.createElement("div",{className:"search"},r.createElement(H,{id:"asc",name:"radioInput",defaultChecked:this.props.radioInput===L.ASC,type:T.RADIO,label:r.createElement("img",{src:K.a})}),r.createElement(H,{id:"desc",name:"radioInput",defaultChecked:this.props.radioInput===L.DESC,type:T.RADIO,label:r.createElement("img",{src:X.a})})))}}]),t}(r.Component),q=Object(A.b)(function(e){return{searchInput:e.unsplash.searchInput,radioInput:e.unsplash.radioInput}},function(e){return{onSubmit:function(t,n){var r;e((r={searchInput:t,currentPage:n},function(){var e=Object(E.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(r.searchInput,r.currentPage);case 2:n=e.sent,t({type:a.SUBMIT,payload:Object(v.a)({},n,{searchInput:r.searchInput,currentPage:r.currentPage})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))},onChange:function(t,n){var r;e((r={filterInput:t,radioInput:n},function(e){e({type:a.FILTER,payload:r})}))}}})(J),V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).loadImages=function(){var e=n.props.currentPage+1;n.props.onAddItems(n.props.searchInput,e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.total,a=e.filterInput,u=e.radioInput,o=[];Array.isArray(t)&&(o=Object(h.a)(t).filter(function(e){if(e.alt_description){var t=new RegExp(a,"gi");return e.alt_description.match(t)}return!0}));var i=u===L.DESC?o.sort(function(e,t){return t.alt_description-e.alt_description?-1:1}):o.sort(function(e,t){return t.alt_description-e.alt_description?1:-1});return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement("div",{className:"nav__container"},c.a.createElement(q,{className:"nav__search-form"})),c.a.createElement("div",{className:"grid"},i.map(function(e){var t=e.alt_description,n=e.urls,a=e.likes,r=e.id;return c.a.createElement(f,{className:"grid__item",key:r,id:r,url:n.small,description:t,likes:a})}))),t&&t.length>0&&n>t.length?c.a.createElement(U,{className:"native-button",type:Z.BUTTON,onClick:this.loadImages},"Show more ",n?"(".concat(t.length," of ").concat(n,")"):""):null)}}]),t}(c.a.PureComponent),W=Object(A.b)(function(e){return{items:e.unsplash.items,total:e.unsplash.total,searchInput:e.unsplash.searchInput,filterInput:e.unsplash.filterInput,currentPage:e.unsplash.currentPage,radioInput:e.unsplash.radioInput}},function(e){return{onAddItems:function(t,n){var r;e((r={searchInput:t,currentPage:n},function(){var e=Object(E.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(r.searchInput,r.currentPage);case 2:n=e.sent,t({type:a.FETCH,payload:Object(v.a)({},n,{searchInput:r.searchInput,currentPage:r.currentPage})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))}}})(V),Y=(n(103),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoad(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.item,t=e.alt_description,n=e.user,a=e.urls;return c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement("article",null,c.a.createElement("div",{className:"info"},c.a.createElement("h2",null,name),c.a.createElement("h4",null,t),c.a.createElement("i",null,n?n.name:null),c.a.createElement("img",{src:a?a.regular:null,alt:""}))))}}]),t}(c.a.Component)),Q=Object(A.b)(function(e){return{item:e.unsplash.item}},function(e){return{onLoad:function(t){var n;e((n={imageId:t},function(){var e=Object(E.a)(b.a.mark(function e(t){var r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(n.imageId);case 2:r=e.sent,t({type:a.IMAGE,payload:Object(v.a)({},r)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))}}})(Y);!function(e){e.TOKEN="@auth/token"}(G||(G={}));n(104);var Z,$=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClick=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href="".concat(g.oAuthAll);case 1:case"end":return e.stop()}},e)})),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.search,t=e.slice(e.indexOf("=")+1);t&&this.props.set_Token(t)}},{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.token;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("div",null,c.a.createElement("h2",{className:"textCenter"},"You are logged"),c.a.createElement("h3",null,"Token: ",n)):c.a.createElement(U,{className:"native-button",type:Z.BUTTON,onClick:this.handleClick},"LogIn"))}}]),t}(c.a.Component),ee=Object(A.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,token:e.auth.token}},function(e){return{set_Token:function(t){return e(function(e){return function(){var t=Object(E.a)(b.a.mark(function t(n){var a;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:a=t.sent,n((r=a,{type:G.TOKEN,payload:r}));case 4:case"end":return t.stop()}var r},t)}));return function(e){return t.apply(this,arguments)}}()}(t))}}})($),te=(n(105),function(e){var t=e.children;return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav-menu"},c.a.Children.map(t,function(e){return c.a.createElement("li",{key:e.props.children},c.a.cloneElement(e))})))}),ne=n(11),ae=n(28);!function(e){e.SUBMIT="submit",e.BUTTON="button"}(Z||(Z={}));var re=function(){return c.a.createElement("div",{className:"notfound"},c.a.createElement("h2",null,"Not Found"))},ce=[{title:"home",path:"/",exact:!0,props:{title:""},Component:W},{title:"about",exact:!1,path:"/about",Component:function(){return c.a.createElement("h1",null,"Some text")}},{title:"auth",exact:!1,path:"/auth",props:{title:"Auth"},Component:function(e){return c.a.createElement(ee,e)}},{path:"/image/:id",exact:!1,Component:function(e){return c.a.createElement(Q,e)}},{title:"Contacts",exact:!1,path:"/contacts",Component:function(){return c.a.createElement("h1",null,"Contacts component")}}],ue=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(te,null,ce.map(function(e,t){return c.a.createElement(ae.b,{exact:!0,key:t,to:e.path},e.title)})),c.a.createElement(ne.c,null,ce.map(function(e){var t=e.path,n=e.exact,a=e.Component,r=(e.title,e.props);return c.a.createElement(ne.a,{key:t,path:t,exact:n,render:function(e){return c.a.createElement(a,Object.assign({},r,e))}})}),c.a.createElement(ne.a,{component:re})))}}]),t}(r.Component),oe=n(17),ie={items:[],item:{},total:0,totalPages:0,currentPage:0,searchInput:"",filterInput:"",radioInput:L.ASC},se={isAuthenticated:!1,token:""},le=Object(oe.c)({unsplash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SUBMIT:return Object(v.a)({},e,t.payload);case a.FETCH:var n=[].concat(Object(h.a)(e.items),Object(h.a)(t.payload.items));return Object(v.a)({},e,t.payload,{items:n});case a.FILTER:return Object(v.a)({},e,t.payload);case a.IMAGE:return Object(v.a)({},e,{item:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.TOKEN:var n=t.payload.access_token;return Object(v.a)({},e,{token:n,isAuthenticated:!0});default:return e}}}),pe=n(49),me=window.__REDUX_DEVTOOLS_EXTENSION__,he=Object(oe.e)(le,Object(oe.d)(Object(oe.a)(pe.a),me()));o.a.render(c.a.createElement(A.a,{store:he},c.a.createElement(ae.a,null,c.a.createElement(ue,null))),document.getElementById("root"))},45:function(e,t,n){e.exports=n.p+"static/media/search-img.0e5b33d6.png"},46:function(e,t,n){e.exports=n.p+"static/media/sort-amount-asc.dc84847d.svg"},47:function(e,t,n){e.exports=n.p+"static/media/sort-amount-desc.66ea0c11.svg"},50:function(e,t,n){e.exports=n(111)},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},99:function(e,t,n){}},[[50,1,2]]]);
//# sourceMappingURL=main.5c5fcce6.chunk.js.map