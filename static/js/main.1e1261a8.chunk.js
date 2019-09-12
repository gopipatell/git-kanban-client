(window["webpackJsonpgit-kanban-client"]=window["webpackJsonpgit-kanban-client"]||[]).push([[0],{112:function(e,t,a){e.exports=a(198)},121:function(e,t,a){},138:function(e,t,a){},193:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),o=a(0),c=a.n(o),l=a(41),s=a(29),i=(a(71),a(36)),d=a(40),m=a(101);d.b.add(m.a);var u="https://github.com/login/oauth/authorize",p="53b98d9a26167ec7ddb7",h="";var b=function(){return c.a.createElement("a",{className:"btn btn-dark all-buttons",href:"".concat(u,"?client_id=").concat(p,"&scope=").concat(h)},c.a.createElement(i.a,{className:"mr-2",icon:["fab","github"]}),"Login with Github")};a(121);var f=function(){return c.a.createElement("div",null,c.a.createElement("div",{class:"position-relative overflow-hidden p-3 p-md-5 text-center homepage"},c.a.createElement("div",{class:"col-md-5 p-lg-5 mx-auto my-5"},c.a.createElement("h1",{class:"display-4 font-weight-normal text-dark"},c.a.createElement(i.a,{className:"mr-3 text-dark",icon:["fab","trello"]}),"Git Kanban"),c.a.createElement("p",{class:"lead font-weight-normal"},"When Open Source Meets Kanban ",c.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83e\udde1")),c.a.createElement("p",{class:"text-capitalize"},"Manage your projects feature backlog efficiently. Sync repositories from Github and Start managing Kanban board with one click."),c.a.createElement(b,null)),c.a.createElement("div",{class:"product-device shadow-sm d-none d-md-block"}),c.a.createElement("div",{class:"product-device product-device-2 shadow-sm d-none d-md-block"}),c.a.createElement("div",{class:"product-device shadow-sm d-none d-md-block"}),c.a.createElement("div",{class:"product-device product-device-2 shadow-sm d-none d-md-block"})),c.a.createElement("div",{class:"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"},c.a.createElement("div",{class:"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"},c.a.createElement("div",{class:"my-3 py-3"},c.a.createElement("h2",{class:"display-5"},"Sync Github Projects")),c.a.createElement("div",{class:"bg-light p-3 box-shadow mx-auto"},c.a.createElement("img",{src:"https://i.pinimg.com/originals/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3.jpg",alt:"sync",width:"200",height:"200"}))),c.a.createElement("div",{class:"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"},c.a.createElement("div",{class:"my-3 p-3"},c.a.createElement("h2",{class:"display-5"},"Track your backlog")),c.a.createElement("div",{class:"bg-dark box-shadow mx-auto mb-4"},c.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/online-gaming/512/online_gaming_progress-512.png",height:"250",alt:"backlog"})))),c.a.createElement("div",{class:"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"},c.a.createElement("div",{class:"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"},c.a.createElement("div",{class:"my-3 p-3"},c.a.createElement("h2",{class:"display-5"},"Get things done")),c.a.createElement("div",{class:"bg-dark box-shadow mx-auto p-4"},c.a.createElement("img",{src:"https://www.androidpolice.com/wp-content/cache/wp-appbox/a32f0c784daf6ebdee8d1d2aa88cf1b5/ai-ad558b8d3a18effc498879622379f140",alt:"things done",width:"200"}))),c.a.createElement("div",{class:"bg-secondary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"},c.a.createElement("div",{class:"my-3 py-3"},c.a.createElement("h2",{class:"display-5"},"Collaborate with team")),c.a.createElement("div",{class:"bg-light box-shadow mx-auto p-4"},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBb1olXBUg3ALXOQWESZrNT3OWbMujCX_-EnEkvSLm1BoQdMJiQ",height:"180",alt:"team"})))))},g=a(17),E=a(18),v=a(20),k=a(19),y=a(21),O=a(15),w=a.n(O),j=a(201),x=a(202),_=a(203),S=(a(138),function(e){return"https://git-kanban-server.herokuapp.com/"+e}),N={resetTheme:function(){document.body.style="background-image: linear-gradient(to bottom right, #b5cbd4, #92b0bb)"},randomTheme:function(){var e=["background-image: linear-gradient(to bottom right, #b5cbd4, #92b0bb)","background-image: linear-gradient(to bottom right, #a6e4e4, #a25192)","background-image: linear-gradient(to bottom right, #cab5ae, #7b9c8b)","background-image: linear-gradient(to bottom right, #a8f79e, #596494)"];document.body.style=e[Math.floor(Math.random()*e.length)]}},D=S("repositories"),C=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(v.a)(this,Object(k.a)(t).call(this))).state={repositories:[]},e}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.resetTheme(),w.a.get(D).then(function(t){e.setState({repositories:t.data})})}},{key:"render",value:function(){return c.a.createElement(j.a,null,c.a.createElement("div",null,c.a.createElement("h3",{className:"mt-3 mb-4"},"Repositories"),c.a.createElement(x.a,{className:"justify-content-md-center "},this.state.repositories.map(function(e){return c.a.createElement(_.a,{lg:"3",key:e.id},c.a.createElement("div",{key:e.id},c.a.createElement("div",{className:"dashboard text-center p-3 shadow rounded"},c.a.createElement(l.b,{to:"/repositories/".concat(e.id)},c.a.createElement("h5",{className:"text-capitalize"}," ",e.name.replace(/[-]/g," "))),c.a.createElement("br",null),c.a.createElement("p",null,e.description),c.a.createElement(l.b,{to:"/repositories/".concat(e.id),className:"btn btn-light btn-sm repository-button "},"Kanban Board")),c.a.createElement("br",null)))}))))}}]),t}(o.Component),P=a(69),T=a(32),M=a(11),I=(a(81),a(205)),L=a(107),B=a(210),z=a(204),G=a(206),A=a(207);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach(function(t){Object(T.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var J=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(k.a)(t).call(this,e))).state={task:{}},a._handleInput=a._handleInput.bind(Object(M.a)(a)),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"_handleInput",value:function(e,t){this.setState({task:F({},this.state.task,Object(T.a)({},e,t.target.value))})}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(G.a,{show:this.props.show,onHide:this.props.handleClose,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},c.a.createElement(G.a.Header,{closeButton:!0},c.a.createElement(G.a.Title,null,"New task")),c.a.createElement(G.a.Body,null,c.a.createElement(A.a,null,c.a.createElement(A.a.Group,{controlId:"exampleForm.ControlTextarea1"},c.a.createElement(A.a.Label,null,"Title"),c.a.createElement(A.a.Control,{as:"input",placeholder:"title..",onChange:function(t){return e._handleInput("title",t)}})),c.a.createElement(A.a.Group,{controlId:"exampleForm.ControlTextarea1"},c.a.createElement(A.a.Label,null,"Description"),c.a.createElement(A.a.Control,{as:"textarea",rows:"5",placeholder:"description..",onChange:function(t){return e._handleInput("description",t)}})))),c.a.createElement(G.a.Footer,null,c.a.createElement(z.a,{variant:"light",size:"sm",onClick:this.props.handleClose},"Close"),c.a.createElement(z.a,{variant:"dark",size:"sm",onClick:function(){e.props.handleClose(),e.props.handleTaskSave(e.state.task)}},"Add New Task"))))}}]),t}(o.Component),K=a(44),W=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(k.a)(t).call(this,e)))._handleModalClose=function(){this.setState({addTaskModalVisible:!1})},a._handleShowModal=function(){this.setState({addTaskModalVisible:!0})},a.state={addTaskModalVisible:!1},a._handleModalClose=a._handleModalClose.bind(Object(M.a)(a)),a._handleShowModal=a._handleShowModal.bind(Object(M.a)(a)),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"list"},c.a.createElement("div",{className:"text-center"},this.props.title),c.a.createElement(K.c,{droppableId:this.props.status+""},function(t){return c.a.createElement("div",Object.assign({className:"droppableList",ref:t.innerRef},t.droppableProps),e.props.tasks.map(function(t){return c.a.createElement(K.b,{draggableId:t.id+"",index:t.task_index,key:t.id},function(a){return c.a.createElement(B.a,Object.assign({className:"mt-1 p-0 shadow-sm text-dark kanban-card",key:t.id,ref:a.innerRef},a.dragHandleProps,a.draggableProps),c.a.createElement(B.a.Body,null,c.a.createElement(B.a.Text,{className:"mb-0 text-capitalize",style:{color:"black"}},t.title),c.a.createElement(B.a.Text,{className:"small"},t.description),c.a.createElement(B.a.Link,{className:"small kanban-card-link text-secondary",href:"#",onClick:function(a){return e.props.handleDelete(t.id,a)}},"Delete")))})}),t.placeholder)}),c.a.createElement("br",null),c.a.createElement(z.a,{className:"addbutton",variant:"light text-muted",size:"sm",block:!0,onClick:this._handleShowModal},"+ Add new task"),c.a.createElement(J,{show:this.state.addTaskModalVisible,handleClose:this._handleModalClose,handleTaskSave:this.props.handleTaskSave}))}}]),t}(o.Component);a(193);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach(function(t){Object(T.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var H=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(v.a)(this,Object(k.a)(t).call(this))).state={repository:{name:"",tasks:[]}},e._handleTaskSave=e._handleTaskSave.bind(Object(M.a)(e)),e._handleDragEnd=e._handleDragEnd.bind(Object(M.a)(e)),e._handleDelete=e._handleDelete.bind(Object(M.a)(e)),e}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.randomTheme();var t=this.props.match.params.id;w.a.get(S("repositories/".concat(t))).then(function(t){e.setState({repository:t.data.repository})})}},{key:"_handleTaskSave",value:function(e){var t=this,a={task:q({},e,{repository_id:this.props.match.params.id})};w.a.post(S("tasks"),a).then(function(e){t.setState({repository:q({},t.state.repository,{tasks:[].concat(Object(P.a)(t.state.repository.tasks),[e.data])})})})}},{key:"_handleDelete",value:function(e,t){var a=this;t.preventDefault(),w.a.delete(S("tasks/".concat(e))).then(function(t){var n=a.state.repository.tasks.filter(function(t){return t.id!==e});a.setState({repository:q({},a.state.repository,{tasks:Object(P.a)(n)})})})}},{key:"_handleDragEnd",value:function(e){var t=this;if(console.log(e),e.destination){console.log("nexttttt");var a=this.props.match.params.id,n={task_id:e.draggableId,new_index:e.destination.index,new_status:e.destination.droppableId};w.a.post(S("repositories/".concat(a,"/update-task-index")),n).then(function(e){return w.a.get(S("repositories/".concat(a))).then(function(e){t.setState({repository:e.data.repository})})})}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid mt-2 kanban-board"},c.a.createElement(I.a,null,c.a.createElement(L.a,null,c.a.createElement("h4",{className:"text-capitalize"}," ",this.state.repository.name.replace(/[-]/g," "))),c.a.createElement(L.a,{className:"text-right"})),c.a.createElement("p",null,this.state.repository.description),c.a.createElement(I.a,null,c.a.createElement(K.a,{onDragEnd:this._handleDragEnd},["Backlog","Ready to start","In progress","Review","Done"].map(function(t,a){var n=""+(a+1);return c.a.createElement(L.a,{className:"p-0",key:n},c.a.createElement(W,{title:t,tasks:e.state.repository.tasks.filter(function(e){return e.status===n}).sort(function(e,t){return e.task_index-t.task_index}),handleDelete:e._handleDelete,handleTaskSave:function(t){return e._handleTaskSave(q({},t,{status:n}))},status:n}))}))))}}]),t}(o.Component),Q=a(208),X=a(209);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(T.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var $=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(k.a)(t).call(this,e))).state={user:{}},a._handleLogout=a._handleLogout.bind(Object(M.a)(a)),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("jwt");if(e){var t=function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return console.log("json",JSON.parse(a)),JSON.parse(a)}(e);t.exp<=Date.now()/1e3||(this.setState({user:Z({},t)}),console.log("setting default jwt bearer","Bearer ".concat(e)),w.a.defaults.headers.common.Authorization="Bearer ".concat(e))}}},{key:"_handleLogout",value:function(e){e.preventDefault(),localStorage.removeItem("jwt"),w.a.defaults.headers.common.Authorization=null,window.location.href="/"}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement(X.a,{className:"navbar-color",variant:"dark"},c.a.createElement(X.a.Brand,{href:"#"},c.a.createElement(i.a,{className:"mr-2",icon:["fab","trello"]}),"Git Kanban"),c.a.createElement(Q.a,{className:"mr-auto"},this.state.user.name?c.a.createElement(Q.a.Link,{href:"#/dashboard"},"Dashboard"):""),c.a.createElement(X.a.Collapse,{className:"justify-content-end"},this.state.user.name?c.a.createElement(Q.a,null,c.a.createElement(X.a.Text,{className:"mr-2"},c.a.createElement("img",{src:this.state.user.image,width:"30",height:"30",alt:"avatar",className:"rounded-circle mr-2"}),this.state.user.name),c.a.createElement(Q.a.Link,{href:"#",onClick:this._handleLogout},"Logout")):c.a.createElement(Q.a,null,c.a.createElement(X.a.Text,{className:"mr-2"},c.a.createElement(b,null))))))}}]),t}(c.a.Component),Y=c.a.createElement(l.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement($,null),c.a.createElement("main",{className:"main-content"},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:f}),c.a.createElement(s.a,{exact:!0,path:"/dashboard",component:C}),c.a.createElement(s.a,{path:"/repositories/:id",component:H})))));a(195),a(196),a(197),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,t,a){},81:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.1e1261a8.chunk.js.map