(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{25:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(0),r=n.n(c),a=n(14),i=n.n(a),d=(n(25),n(18)),s=n(19),l=n(5),u=n(6),h=n(10),b=n(9),j=n(7),p=function(t){var e=t.todos,n=t.deleteTodo,c=e.length?e.map((function(t){return Object(o.jsx)("div",{className:"collection-item",children:Object(o.jsx)("span",{onClick:function(){n(t.id)},children:t.content})},t.id)})):Object(o.jsx)("p",{className:"center",children:"You have no todos left yayy!"});return Object(o.jsx)("div",{className:"todos collection",children:c})},f=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={content:""},t.handleChange=function(e){t.setState({content:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodos(t.state),t.setState({content:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{children:"Add new todo: "}),Object(o.jsx)("input",{placeholder:"Hit Enter to add todo",type:"text",onChange:this.handleChange,value:this.state.content})]})})}}]),n}(c.Component),x=n(3);function O(){var t=Object(j.a)(["\n\n    body {\n        background-color: ",";\n    }\n\n"]);return O=function(){return t},t}var v={body:"#fff",fontColor:"black"},g={body:"#2b2d2f",fontColor:"#fff"},m=Object(x.b)(O(),(function(t){return t.theme.body}));function y(){var t=Object(j.a)(["\n\n  color: ","\n\n"]);return y=function(){return t},t}x.c.div(y(),(function(t){return t.theme.fontColor}));var C=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={todos:[{id:1,content:"create todo app"},{id:2,content:"play mario kart"}]},t.deleteTodo=function(e){var n=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:n})},t.addTodo=function(e){e.id=Math.random();var n=[].concat(Object(s.a)(t.state.todos),[e]);t.setState({todos:n})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"todo-app container",children:[Object(o.jsx)("h1",{className:"center blue-text",children:"Todo's"}),Object(o.jsx)(p,{todos:this.state.todos,deleteTodo:this.deleteTodo}),Object(o.jsx)(f,{addTodos:this.addTodo})]})}}]),n}(c.Component);var k=function(){var t=Object(c.useState)("light"),e=Object(d.a)(t,2),n=e[0],r=e[1];return Object(o.jsxs)(x.a,{theme:"light"===n?v:g,children:[Object(o.jsx)(m,{}),Object(o.jsxs)("styledApp",{children:[Object(o.jsx)(C,{}),Object(o.jsx)("button",{style:"light"===n?{textAlign:"center",position:"relative",top:"30px",color:"white",backgroundColor:"#2b2d2f",border:"2px solid white",borderRadius:"5px",margin:"0 auto",display:"block",height:"40px",width:"150px"}:{textAlign:"center",position:"relative",top:"30px",color:"#2b2d2f",backgroundColor:"white",border:"2px solid white",borderRadius:"5px",margin:"0 auto",display:"block",height:"40px",width:"150px"},onClick:function(){r("light"===n?"dark":"light")},children:"Change Theme"})]})]})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),r(t),a(t)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),T()}},[[28,1,2]]]);
//# sourceMappingURL=main.f858df29.chunk.js.map