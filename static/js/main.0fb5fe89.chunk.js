(this.webpackJsonpcloud=this.webpackJsonpcloud||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports={navBar:"NavBar_navBar__30UUQ",menuList:"NavBar_menuList__3Un7M",drop:"NavBar_drop__3RaE4"}},,function(e,t,a){e.exports={message:"Message_message__1foUp",time:"Message_time__wkBcv"}},function(e,t,a){e.exports={qualities:"Qualities_qualities__3B8NI",pain:"Qualities_pain__3p71r"}},,,,function(e,t,a){},,,function(e,t,a){e.exports={myName:"MyName_myName__3pLq3"}},function(e,t,a){e.exports={container:"Container_container__Ni1xE"}},function(e,t,a){e.exports={form:"Form_form__2-cwd"}},function(e,t,a){e.exports={input:"Input_input__3kWfr"}},,,function(e,t,a){e.exports={loader:"Loader_loader__36z9J",spin:"Loader_spin__178w0"}},,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),o=a.n(i),c=(a(38),a(1)),s=a(6),l=a(3),u=a(2),p=a(4),d=(a(22),a(17)),m=a.n(d),f=function(){return r.a.createElement("div",{className:m.a.message},r.a.createElement("h6",null,"Dima Matusik"),r.a.createElement("span",null,"Impeditmolestiaequamquoundevoluptateuamquoquamquoundevoluptatequamquoundevoluptate quam quo unde voluptate quam quo unde voluptate unde voluptate quam quo unde voluptate quam quo unde voluptate! Autem consequatur deserunt ducimus eaque, libero minima natus? Deserunt, doloremque ea et exercitationem nesciunt numquam vitae?"),r.a.createElement("div",{className:m.a.time},"04:19 PM"))},h=a(25),k=a.n(h),v=function(){return r.a.createElement("div",{className:k.a.myName},r.a.createElement("h3",null,"Dima matusik"))},E=a(26),b=a.n(E),g=a(18),y=a.n(g),C=function(e){var t=e.nameQualities.map((function(e,t){return 1===t?r.a.createElement("li",{className:y.a.pain,key:e.id}," ",e.qualitie," "):r.a.createElement("li",{key:e.id}," ",e.qualitie," ")}));return r.a.createElement("div",{className:y.a.qualities},r.a.createElement("ul",null,t))},O=a(14),j=a(27),N=a.n(j),T=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.props.click},"send")}}]),t}(r.a.Component),_=a(28),S=a.n(_),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onKeyPress=function(e){"Enter"===e.key&&a.props.addClickHandler()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="paint"===this.props.colorInput?S.a.input:"";return r.a.createElement("input",{className:e,type:"text",onKeyPress:this.onKeyPress,onChange:this.props.onTitleChanged,value:this.props.title})}}]),t}(r.a.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,this.props.spanNumber)}}]),t}(r.a.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,this.props.countValueInput)}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={spanNumber:0,countValueInput:[],colorInput:"paint",title:""},a.addClickHandler=function(){var e=a.state.title;""===e?a.setState({colorInput:"paint",spanNumber:a.state.spanNumber+1}):(a.addNewMessag("\u041f\u0440\u0438\u0432\u0435\u0442 ".concat(e," ")),a.setState({colorInput:"noPaint",spanNumber:a.state.spanNumber+1,title:""}))},a.onTitleChanged=function(e){a.setState({title:e.currentTarget.value,colorInput:""})},a.addNewMessag=function(e){var t=[].concat(Object(O.a)(a.state.countValueInput),[e]);a.setState({countValueInput:t})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:N.a.form},r.a.createElement(A,{spanNumber:this.state.spanNumber}),r.a.createElement(w,{colorInput:this.state.colorInput,addClickHandler:this.addClickHandler,title:this.state.title,onTitleChanged:this.onTitleChanged}),r.a.createElement(T,{click:this.addClickHandler}),r.a.createElement(q,{countValueInput:this.state.countValueInput}))}}]),t}(r.a.Component),I=a(15),P=a.n(I),x=a(13),F=function(){return r.a.createElement("nav",{className:P.a.navBar},r.a.createElement(x.b,{className:P.a.menuList,to:"/all"},"MENU",r.a.createElement("div",{className:P.a.drop},r.a.createElement("div",null,r.a.createElement(x.b,{to:"/form"},"Monday")),r.a.createElement("div",null,r.a.createElement(x.b,{to:"/enumerator"},"Tuesday")))))},L=a(10),D=a(32),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={error:!1,title:""},a.onAddTaskClick=function(){var e=a.state.title;a.setState({title:""}),""===e?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(e))},a.onTitleChanged=function(e){a.setState({error:!1,title:e.currentTarget.value})},a.onKeyPress=function(e){a.setState({eror:!1}),"Enter"===e.key&&a.onAddTaskClick()},a.render=function(){var e=a.state.error?"error":"";return r.a.createElement("div",{className:"todoList-header"},r.a.createElement("h3",{className:"todoList-header__title"},"What to Learn"),r.a.createElement("div",{className:"todoList-newTaskForm"},r.a.createElement("input",{type:"text",placeholder:"New task name",className:e,onChange:a.onTitleChanged,onKeyPress:a.onKeyPress,value:a.state.title}),r.a.createElement("button",{onClick:a.onAddTaskClick},"Add")))},a}return Object(p.a)(t,e),t}(r.a.Component),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={editeMode:!1},a.onPriorityModeL=function(){a.props.changePriority(a.props.task.id,"middle")},a.onPriorityModeM=function(){a.props.changePriority(a.props.task.id,"Height")},a.onPriorityModeH=function(){a.props.changePriority(a.props.task.id,"low")},a.activateEditMode=function(){a.setState({editeMode:!0})},a.deActivateEditMode=function(){a.setState({editeMode:!1})},a.onIsDoneChanged=function(e){a.props.changeStatus(a.props.task.id,e.currentTarget.checked)},a.onTitleChanged=function(e){a.props.changeTitle(a.props.task.id,e.currentTarget.value)},a.onDeliteTask=function(){a.props.deliteTask(a.props.task.id)},a.render=function(){var e;e="low"===a.props.task.priority?r.a.createElement("span",{onClick:a.onPriorityModeL}," priority: ",a.props.task.priority):"middle"===a.props.task.priority?r.a.createElement("span",{onClick:a.onPriorityModeM}," priority: ",a.props.task.priority):r.a.createElement("span",{onClick:a.onPriorityModeH}," priority: ",a.props.task.priority);var t=a.props.task.isDone?"todoList-task done":"todoList-task";return r.a.createElement("div",{className:t},r.a.createElement("input",{type:"checkbox",checked:a.props.task.isDone,onChange:a.onIsDoneChanged}),r.a.createElement("span",null,a.props.task.id,": "),a.state.editeMode?r.a.createElement("input",{value:a.props.task.title,autoFocus:!0,onBlur:a.deActivateEditMode,onChange:a.onTitleChanged}):r.a.createElement("span",{onClick:a.activateEditMode}," ",a.props.task.title),e,r.a.createElement("button",{className:"delit",onClick:a.onDeliteTask},"Delete"))},a}return Object(p.a)(t,e),t}(r.a.Component),B=a(11),Q=a.n(B),K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).render=function(){var e=a.props.tasks.map((function(e){return r.a.createElement(V,{changePriority:a.props.changePriority,deliteTask:a.props.deliteTask,changeTitle:a.props.changeTitle,changeStatus:a.props.changeStatus,task:e})}));return r.a.createElement("div",{className:"todoList-tasks"},e)},a}return Object(p.a)(t,e),t}(r.a.Component),J=K;K.proTypes={tasks:Q.a.object};var U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isHidden:!1},a.onAllFilterClick=function(){a.props.changeFilter("All")},a.onCompletedFilterClick=function(){a.props.changeFilter("Completed")},a.onActiveFilterClick=function(){a.props.changeFilter("Active")},a.onShowFiltersClick=function(){a.setState({isHidden:!1})},a.onHideFiltersClick=function(){a.setState({isHidden:!0})},a.render=function(){var e="All"===a.props.filterValue?"filter-active":"",t="Completed"===a.props.filterValue?"filter-active":"",n="Active"===a.props.filterValue?"filter-active":"";return r.a.createElement("div",{className:"todoList-footer"},!a.state.isHidden&&r.a.createElement("div",null,r.a.createElement("button",{className:e,onClick:a.onAllFilterClick},"All"),r.a.createElement("button",{className:t,onClick:a.onCompletedFilterClick},"Completed"),r.a.createElement("button",{className:n,onClick:a.onActiveFilterClick},"Active")),!a.state.isHidden&&r.a.createElement("span",{onClick:a.onHideFiltersClick},"hide"),a.state.isHidden&&r.a.createElement("span",{onClick:a.onShowFiltersClick},"show"))},a}return Object(p.a)(t,e),t}(r.a.Component),W=function(e){localStorage.setItem("our-state",JSON.stringify(e))},z=function(){return localStorage.getItem("our-state")},R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).nextTaskId=0,a.state={tasks:[],filterValue:"All"},a.saveState=function(){W(a.state)},a.restoreState=function(){var e=a.state,t=z();t&&(e=JSON.parse(t)),a.setState(e,(function(){a.state.tasks.forEach((function(e){e.id>=a.nextTaskId&&(a.nextTaskId=e.id+1)}))}))},a.addTask=function(e){var t={id:a.nextTaskId,title:e,isDone:!0,priority:"low"};a.nextTaskId++;var n=[].concat(Object(O.a)(a.state.tasks),[t]);a.setState({tasks:n},(function(){a.saveState()}))},a.changeFilter=function(e){a.setState({filterValue:e},(function(){a.saveState()}))},a.changeTask=function(e,t){var n=a.state.tasks.map((function(a){return a.id!==e?a:Object(D.a)({},a,{},t)}));a.setState({tasks:n},(function(){a.saveState()}))},a.changeStatus=function(e,t){a.changeTask(e,{isDone:t})},a.changeTitle=function(e,t){a.changeTask(e,{title:t})},a.changePriority=function(e,t){a.changeTask(e,{priority:t})},a.deliteTask=function(e){a.setState((function(t){var a=t.tasks,n=a.findIndex((function(t){return t.id===e}));return{tasks:[].concat(Object(O.a)(a.slice(0,n)),Object(O.a)(a.slice(n+1)))}}),(function(){a.saveState()}))},a.render=function(){return r.a.createElement("div",{className:"enumerator"},r.a.createElement("div",{className:"todoList"},r.a.createElement(H,{addTask:a.addTask}),r.a.createElement(J,{changePriority:a.changePriority,deliteTask:a.deliteTask,changeTitle:a.changeTitle,changeStatus:a.changeStatus,tasks:a.state.tasks.filter((function(e){switch(a.state.filterValue){case"All":return!0;case"Completed":return e.isDone;case"Active":return!e.isDone}}))}),r.a.createElement(U,{filterValue:a.state.filterValue,changeFilter:a.changeFilter})))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.restoreState()}}]),t}(r.a.Component),$=a(31),G=a.n($),X=function(){return r.a.createElement("div",{className:G.a.loader})},Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={nameQualities:[{qualitie:"Punctual",id:"1"},{qualitie:"Sportsman",id:"2"},{qualitie:"\u0421onfident",id:"3"}],loading:!0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({loading:!1})}),3e3)}},{key:"render",value:function(){var e=this,t=this.state.loading?r.a.createElement(X,null):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:b.a.container},r.a.createElement(F,null),r.a.createElement(v,null),r.a.createElement(L.a,{path:"/all",render:function(){return r.a.createElement(C,{nameQualities:e.state.nameQualities})}}),r.a.createElement(f,null),r.a.createElement(L.a,{path:"/form",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(L.a,{path:"/enumerator",render:function(){return r.a.createElement(R,null)}})));return r.a.createElement(x.a,null,t)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.0fb5fe89.chunk.js.map