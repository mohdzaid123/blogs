(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{29:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),s=n.n(c),u=n(5),o=n(3),i=n(25),l=n(6),p=n(7),d=n(9),f=n(8),m=n(4),h=n.n(m),v=n(11),b=n(26),y=n.n(b),E=n(27),O=n.n(E).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),j=function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(v.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.user;return e?a.a.createElement("div",{className:"header"},e.name):null}}]),n}(a.a.Component),w=Object(u.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}))(k),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return a.a.createElement("div",{className:"item",key:e.id},a.a.createElement("i",{className:"large middle aligned icon user"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"description"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.body)),a.a.createElement(w,{userId:e.userId})))}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),n}(a.a.Component),N=Object(u.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(){var e=Object(v.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(j());case 2:y.a.chain(n().posts).map("userId").uniq().forEach((function(e){return t(g(e))})).value();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(x),S=function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(N,null))},C=n(28),T=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(C.a)(e),[t.payload]);default:return e}}}),U=Object(o.d)(T,Object(o.a)(i.a));s.a.render(a.a.createElement(u.a,{store:U},a.a.createElement(S,null)),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a8943e74.chunk.js.map