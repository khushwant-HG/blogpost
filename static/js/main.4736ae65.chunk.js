(this.webpackJsonpblogpost=this.webpackJsonpblogpost||[]).push([[0],{20:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),s=n.n(o),i=n(19),a=n.n(i),r=(n(30),n(8)),l=(n(31),function(t){return console.log(t.classes),Object(c.jsxs)("button",{className:"button"+t.classes,onClick:t.onClick,children:[" ",t.children]})}),j=n(20),d=n.n(j),b=function(){return Object(c.jsxs)("div",{class:"nav",children:[Object(c.jsxs)("div",{className:"nav__sub",children:[Object(c.jsx)(l,{classes:" button--underline",children:"img"}),Object(c.jsx)(r.b,{to:"/",exact:!0,activeClassName:d.a.active,children:Object(c.jsx)(l,{classes:" button--underline",children:"Home"})}),Object(c.jsx)(r.b,{to:"/feed",children:Object(c.jsx)(l,{classes:" button--underline",children:"Feed"})}),Object(c.jsx)(r.b,{to:"/create",children:Object(c.jsx)(l,{classes:" button--underline",children:"Create"})})]}),Object(c.jsxs)("div",{className:"nav__sub",children:[Object(c.jsx)(r.b,{to:"/login",children:Object(c.jsx)(l,{classes:" button--underline",children:"Sign In"})}),Object(c.jsx)(r.b,{to:"/register",children:Object(c.jsx)(l,{classes:" button--underline",children:"Sign UP"})})]})]})},u=(n(37),function(t){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{class:"post",children:[Object(c.jsx)(l,{classes:" button--flo button--margin",onClick:t.delete,children:"Delete"}),Object(c.jsx)(l,{classes:" button--flo button--margin",onClick:t.edit,children:"Edit"}),Object(c.jsx)("a",{href:t.data._id,children:Object(c.jsx)(l,{classes:" button--flo button--margin",children:"view"})}),Object(c.jsx)("span",{className:"post__author",children:t.data.author}),Object(c.jsx)("span",{className:"post__title",children:t.data.title}),Object(c.jsx)("p",{className:"post__content",children:t.data.content})]})})}),h=n(6),p=n(12),O=n(13),f=n(16),x=n(14),m=n(10),g=n(15),v=(n(38),function(t){var e=Object(o.useState)({author:"",title:"",content:""}),n=Object(g.a)(e,2),s=n[0],i=n[1];Object(o.useEffect)((function(){i({author:t.data.author,title:t.data.title,content:t.data.content})}),[]);var a=function(t){i(Object(h.a)(Object(h.a)({},s),{},Object(m.a)({},t.target.name,t.target.value)))};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{class:"post",children:[Object(c.jsxs)("span",{className:"post__author",children:[Object(c.jsx)("label",{for:"author",children:"Author"}),Object(c.jsx)("input",{type:"text",id:"author",name:"author",onChange:a,value:s.author})]}),Object(c.jsxs)("span",{className:"post__title",children:[Object(c.jsx)("label",{for:"title",children:"Title"}),Object(c.jsx)("input",{type:"text",id:"title",name:"title",onChange:a,value:s.title})]}),Object(c.jsxs)("p",{className:"post__content",children:[Object(c.jsx)("label",{for:"content",children:"Content"}),Object(c.jsx)("textarea",{id:"content",name:"content",onChange:a,value:s.content,rows:"10",cols:"70"})]}),Object(c.jsx)(l,{classes:" button--margin",onClick:t.cancel,children:"cancel"}),Object(c.jsx)(l,{classes:" button--margin",onClick:function(e){var n=t.data._id;console.log("clicked",n),e.preventDefault(),fetch("https://blogpos-t.herokuapp.com/feed/"+n,{method:"put",headers:{"Content-type":"application/json"},body:JSON.stringify({author:s.author,title:s.title,content:s.content})}).then((function(t){return t.json()})).then((function(e){console.log(e),t.finish()})).catch((function(e){console.log(e),t.finish()}))},children:"Finish"})]})})}),y=(n(39),function(t){Object(f.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(p.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={data:[],isEditing:!1,editPost:""},t.startEdit=function(e){console.log(e),t.setState((function(n,c){return Object(h.a)(Object(h.a)({},t.state),{},{isEditing:!0,editPost:n.data.find((function(t){return t._id===e}))})}))},t.cancelEdit=function(){t.setState((function(e,n){return Object(h.a)(Object(h.a)({},t.state),{},{isEditing:!1,editPost:{}})}))},t.finishEdit=function(){t.setState((function(e,n){return Object(h.a)(Object(h.a)({},t.state),{},{isEditing:!1,editPost:{}})})),fetch("https://blogpos-t.herokuapp.com/feed").then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({data:e})})).catch((function(t){console.log("Error")}))},t.deletePost=function(e){fetch("https://blogpos-t.herokuapp.com/feed"+e,{method:"delete",headers:{"Content-type":"application/json"}}).then((function(e){fetch("https://blogpos-t.herokuapp.com/feed").then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({data:e})})).catch((function(t){console.log("Error")}))})).catch((function(t){console.log("Error")}))},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log("componentDidMount"),fetch("https://blogpos-t.herokuapp.com/feed").then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({data:e})})).catch((function(t){console.log("Error")}))}},{key:"render",value:function(){var t,e=this,n=this.state.data;return n||(n=[]),this.state.isEditing?Object(c.jsx)(v,{data:this.state.editPost,cancel:this.cancelEdit,finish:this.finishEdit}):(t=Object(c.jsx)("div",{children:n.map((function(t){return Object(c.jsx)(u,{data:t,edit:e.startEdit.bind(e,t._id),delete:e.deletePost.bind(e,t._id)})}))}),Object(c.jsx)("div",{children:t}))}}]),n}(o.Component)),_=function(t){var e=Object(o.useState)({author:"",title:"",content:""}),n=Object(g.a)(e,2),s=n[0],i=n[1],a=function(t){i(Object(h.a)(Object(h.a)({},s),{},Object(m.a)({},t.target.name,t.target.value)))};return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://blogpos-t.herokuapp.com/feed",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({author:s.author,title:s.title,content:s.content})}).then((function(t){return t.json()})).then((function(e){console.log(e),t.history.push("/feed")})).catch((function(e){console.log(e),t.history.push("/feed")}))},children:[Object(c.jsx)("label",{for:"author",children:"Author"}),Object(c.jsx)("input",{type:"text",id:"author",name:"author",onChange:a}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"title",children:"Title"}),Object(c.jsx)("input",{type:"text",id:"title",name:"title",onChange:a}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"content",children:"Content"}),Object(c.jsx)("input",{type:"text",id:"content",name:"content",onChange:a}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",children:"Hello"})]})})},E=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{for:"Email",children:"Email"}),Object(c.jsx)("input",{type:"email",id:"Email"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"password",children:"Password"}),Object(c.jsx)("input",{type:"text",id:"password"}),Object(c.jsx)("button",{children:"Submmit"})]})})},C=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{for:"username",children:"UserName"}),Object(c.jsx)("input",{type:"text",id:"username"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",id:"email"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"password",children:"Password"}),Object(c.jsx)("input",{type:"text",id:"password"})]})})},k=(n(40),function(t){Object(f.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(p.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={data:"",error:!1},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;console.log(e),fetch("https://blogpos-t.herokuapp.com/feed/"+e).then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({data:e})})).catch((function(e){console.log("Error"),t.setState({data:"",error:!0})}))}},{key:"render",value:function(){return this.state.error?Object(c.jsx)("h1",{children:"Error Occured"}):Object(c.jsx)("div",{children:Object(c.jsxs)("div",{class:"post",children:[Object(c.jsx)(l,{classes:" button--flo button--margin",children:"Delete"}),Object(c.jsx)(l,{classes:" button--flo button--margin",children:"Edit"}),Object(c.jsx)("span",{className:"post__author",children:this.state.data.author}),Object(c.jsx)("span",{className:"post__title",children:this.state.data.title}),Object(c.jsx)("p",{className:"post__content",children:this.state.data.content})]})})}}]),n}(o.Component)),S=n(2),N=(n(41),function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{}),Object(c.jsxs)(S.d,{children:[Object(c.jsx)(S.b,{path:"/create",exact:!0,component:_}),Object(c.jsx)(S.b,{path:"/feed",component:y}),Object(c.jsx)(S.b,{path:"/Login",component:E}),Object(c.jsx)(S.b,{path:"/register",exact:!0,component:C}),Object(c.jsx)(S.b,{path:"/:id",exact:!0,component:k}),Object(c.jsx)(S.a,{to:"/"})]})]})}),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),s(t),i(t)}))};a.a.render(Object(c.jsx)(r.a,{children:Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(N,{})})}),document.getElementById("root")),w()}},[[42,1,2]]]);
//# sourceMappingURL=main.4736ae65.chunk.js.map