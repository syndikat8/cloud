(this.webpackJsonpcloud=this.webpackJsonpcloud||[]).push([[0],{21:function(e,t,a){e.exports={navBar:"NavBar_navBar__30UUQ",menuList:"NavBar_menuList__3Un7M",drop:"NavBar_drop__3RaE4"}},22:function(e,t,a){e.exports={environment:"Environment_environment__3Ug4R",environmentItem:"Environment_environmentItem__1YZtz"}},24:function(e,t,a){e.exports={message:"Message_message__1foUp",time:"Message_time__wkBcv"}},25:function(e,t,a){e.exports={qualities:"Qualities_qualities__3B8NI",pain:"Qualities_pain__3p71r"}},30:function(e,t,a){},32:function(e,t,a){e.exports={myName:"MyName_myName__3pLq3"}},33:function(e,t,a){e.exports={form:"Form_form__2-cwd"}},34:function(e,t,a){e.exports={input:"Input_input__3kWfr"}},36:function(e,t,a){e.exports={loader:"Loader_loader__36z9J",spin:"Loader_spin__178w0"}},38:function(e,t,a){e.exports=a(49)},43:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),o=a.n(i),c=(a(43),a(2)),s=a(6),l=a(4),u=a(3),p=a(5),d=(a(30),a(24)),m=a.n(d),h=function(){return r.a.createElement("div",{className:m.a.message},r.a.createElement("h6",null,"Dima Matusik"),r.a.createElement("span",null,"Impeditmolestiaequamquoundevoluptateuamquoquamquoundevoluptatequamquoundevoluptate quam quo unde voluptate quam quo unde voluptate unde voluptate quam quo unde voluptate quam quo unde voluptate! Autem consequatur deserunt ducimus eaque, libero minima natus? Deserunt, doloremque ea et exercitationem nesciunt numquam vitae?"),r.a.createElement("div",{className:m.a.time},"04:19 PM"))},f=a(32),v=a.n(f),k=function(){return r.a.createElement("div",{className:v.a.myName},r.a.createElement("h3",null,"Dima matusik"))},g=a(25),E=a.n(g),y=function(e){var t=e.nameQualities.map((function(e,t){return 1===t?r.a.createElement("li",{className:E.a.pain,key:e.id}," ",e.qualitie," "):r.a.createElement("li",{key:e.id}," ",e.qualitie," ")}));return r.a.createElement("div",{className:E.a.qualities},r.a.createElement("ul",null,t))},C=a(15),b=a(33),T=a.n(b),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.props.click},"send")}}]),t}(r.a.Component),j=a(34),S=a.n(j),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onKeyPress=function(e){"Enter"===e.key&&a.props.addClickHandler()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="paint"===this.props.colorInput?S.a.input:"";return r.a.createElement("input",{className:e,type:"text",onKeyPress:this.onKeyPress,onChange:this.props.onTitleChanged,value:this.props.title})}}]),t}(r.a.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,this.props.spanNumber)}}]),t}(r.a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,this.props.countValueInput)}}]),t}(r.a.Component),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={spanNumber:0,countValueInput:[],colorInput:"paint",title:""},a.addClickHandler=function(){var e=a.state.title;""===e?a.setState({colorInput:"paint",spanNumber:a.state.spanNumber+1}):(a.addNewMessag("\u041f\u0440\u0438\u0432\u0435\u0442 ".concat(e," ")),a.setState({colorInput:"noPaint",spanNumber:a.state.spanNumber+1,title:""}))},a.onTitleChanged=function(e){a.setState({title:e.currentTarget.value,colorInput:""})},a.addNewMessag=function(e){var t=[].concat(Object(C.a)(a.state.countValueInput),[e]);a.setState({countValueInput:t})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:T.a.form},r.a.createElement(_,{spanNumber:this.state.spanNumber}),r.a.createElement(N,{colorInput:this.state.colorInput,addClickHandler:this.addClickHandler,title:this.state.title,onTitleChanged:this.onTitleChanged}),r.a.createElement(O,{click:this.addClickHandler}),r.a.createElement(w,{countValueInput:this.state.countValueInput}))}}]),t}(r.a.Component),A=a(21),I=a.n(A),M=a(14),q=function(){return r.a.createElement("nav",{className:I.a.navBar},r.a.createElement(M.b,{className:I.a.menuList,to:"/all"},r.a.createElement("span",null,"MENU"),r.a.createElement("div",{className:I.a.drop},r.a.createElement("div",null,r.a.createElement(M.b,{to:"/environment"},"Environment")),r.a.createElement("div",null,r.a.createElement(M.b,{to:"/form"},"Monday")),r.a.createElement("div",null,r.a.createElement(M.b,{to:"/enumerator"},"Tuesday")))))},B=a(12),P=a(13),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={error:!1,title:""},a.onAddTaskClick=function(){var e=a.state.title;a.setState({title:""}),""===e?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(e))},a.onTitleChanged=function(e){a.setState({error:!1,title:e.currentTarget.value})},a.onKeyPress=function(e){a.setState({eror:!1}),"Enter"===e.key&&a.onAddTaskClick()},a.render=function(){var e=a.state.error?"error":"";return r.a.createElement("div",{className:"todoList-header"},r.a.createElement("h3",{className:"todoList-header__title"},"What to Learn"),r.a.createElement("div",{className:"todoList-newTaskForm"},r.a.createElement("input",{type:"text",placeholder:"New task name",className:e,onChange:a.onTitleChanged,onKeyPress:a.onKeyPress,value:a.state.title}),r.a.createElement("button",{onClick:a.onAddTaskClick},"Add")))},a}return Object(p.a)(t,e),t}(r.a.Component),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={options:[{option:"Low",id:1},{option:"Middle",id:2},{option:"Height",id:3}],value:"Height"},a.handlerChange=function(e){a.setState({value:e.target.value}),a.props.changeSelect(a.props.id,e.currentTarget.value)},a.render=function(){var e=a.state.options.map((function(e){return r.a.createElement("option",{key:e.id,value:e.option}," ",e.option)}));return r.a.createElement("select",{value:a.state.value,onChange:a.handlerChange},e)},a}return Object(p.a)(t,e),t}(r.a.Component),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={editeMode:!1},a.onPriorityModeL=function(){a.props.changePriority(a.props.task.id,"Middle")},a.onPriorityModeM=function(){a.props.changePriority(a.props.task.id,"Height")},a.onPriorityModeH=function(){a.props.changePriority(a.props.task.id,"Low")},a.activateEditMode=function(){a.setState({editeMode:!0,updated:a.props.nowTime})},a.deActivateEditMode=function(){a.setState({editeMode:!1})},a.onIsDoneChanged=function(e){a.props.changeStatus(a.props.task.id,e.currentTarget.checked)},a.onTitleChanged=function(e){a.props.changeTitle(a.props.task.id,e.currentTarget.value)},a.onDeliteTask=function(){a.props.deliteTask(a.props.task.id)},a.render=function(){var e;e="Low"===a.props.task.priority?r.a.createElement("span",{onClick:a.onPriorityModeL}," priority: ",a.props.task.priority):"Middle"===a.props.task.priority?r.a.createElement("span",{onClick:a.onPriorityModeM}," priority: ",a.props.task.priority):r.a.createElement("span",{onClick:a.onPriorityModeH}," priority: ",a.props.task.priority);var t=a.props.task.isDone?"todoList-task done":"todoList-task";return r.a.createElement("div",{className:t},r.a.createElement("input",{type:"checkbox",checked:a.props.task.isDone,onChange:a.onIsDoneChanged}),r.a.createElement("span",null,a.props.task.id,": "),a.state.editeMode?r.a.createElement("input",{value:a.props.task.title,autoFocus:!0,onBlur:a.deActivateEditMode,onChange:a.onTitleChanged}):r.a.createElement("span",{className:"backlight",onDoubleClick:a.activateEditMode},a.props.task.title,r.a.createElement("span",{className:"drop"},r.a.createElement("div",null,"Created: ",a.props.task.created),r.a.createElement("div",null,"Updated: ",a.props.task.updated),r.a.createElement("div",null,"Finished: ",a.props.task.finished))),e,r.a.createElement("button",{className:"delit",onClick:a.onDeliteTask},"Delete"),r.a.createElement(F,{id:a.props.task.id,changeSelect:a.props.changeSelect}))},a}return Object(p.a)(t,e),t}(r.a.Component),x=a(11),H=a.n(x),K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).render=function(){var e=a.props.tasks.map((function(e){return r.a.createElement(V,{nowTime:a.props.nowTime,key:e.id,changePriority:a.props.changePriority,deliteTask:a.props.deliteTask,changeTitle:a.props.changeTitle,changeStatus:a.props.changeStatus,changeSelect:a.props.changeSelect,task:e})}));return r.a.createElement("div",{className:"todoList-tasks"},e)},a}return Object(p.a)(t,e),t}(r.a.Component),Q=K;K.proTypes={tasks:H.a.object};var U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isHidden:!1},a.onAllFilterClick=function(){a.props.changeFilter("All")},a.onCompletedFilterClick=function(){a.props.changeFilter("Completed")},a.onActiveFilterClick=function(){a.props.changeFilter("Active")},a.onShowFiltersClick=function(){a.setState({isHidden:!1})},a.onHideFiltersClick=function(){a.setState({isHidden:!0})},a.render=function(){var e="All"===a.props.filterValue?"filter-active":"",t="Completed"===a.props.filterValue?"filter-active":"",n="Active"===a.props.filterValue?"filter-active":"";return r.a.createElement("div",{className:"todoList-footer"},!a.state.isHidden&&r.a.createElement("div",null,r.a.createElement("button",{className:e,onClick:a.onAllFilterClick},"All"),r.a.createElement("button",{className:t,onClick:a.onCompletedFilterClick},"Completed"),r.a.createElement("button",{className:n,onClick:a.onActiveFilterClick},"Active")),!a.state.isHidden&&r.a.createElement("span",{onClick:a.onHideFiltersClick},"hide"),a.state.isHidden&&r.a.createElement("span",{onClick:a.onShowFiltersClick},"show"))},a}return Object(p.a)(t,e),t}(r.a.Component),J=function(e){localStorage.setItem("our-state",JSON.stringify(e))},Y=function(){return localStorage.getItem("our-state")},W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).nextTaskId=0,a.state={tasks:[{created:"",updated:"",finished:""}],filterValue:"All",nowTime:(new Date).toLocaleTimeString()},a.saveState=function(){J(a.state)},a.restoreState=function(){var e=a.state,t=Y();t&&(e=JSON.parse(t)),a.setState(e,(function(){a.state.tasks.forEach((function(e){e.id>=a.nextTaskId&&(a.nextTaskId=e.id+1)}))}))},a.addTask=function(e){var t={id:a.nextTaskId,title:e,isDone:!1,priority:"Low",created:a.state.nowTime,updated:"",finished:""};a.nextTaskId++;var n=[].concat(Object(C.a)(a.state.tasks),[t]);a.setState({tasks:n},(function(){a.saveState()}))},a.changeFilter=function(e){a.setState({filterValue:e},(function(){a.saveState()}))},a.changeTask=function(e,t,n){var r=a.state.tasks.map((function(a){return a.id!==e?a:Object(P.a)({},a,{},t,{},n)}));a.setState({tasks:r},(function(){a.saveState()}))},a.changeStatus=function(e,t){var n=t?a.state.nowTime:"\u0427\u0435\u0433\u043e \u043e\u0442\u0436\u0430\u043b? \u041d\u0435 \u0441\u0434\u0435\u043b\u0430\u043b?!";a.changeTask(e,{isDone:t},{finished:n})},a.changeTitle=function(e,t){a.changeTask(e,{title:t},{updated:a.state.nowTime})},a.changePriority=function(e,t){a.changeTask(e,{priority:t},{updated:a.state.nowTime})},a.changeSelect=function(e,t){a.changeTask(e,{priority:t},{updated:a.state.nowTime})},a.deliteTask=function(e){a.setState((function(t){var a=t.tasks,n=a.findIndex((function(t){return t.id===e}));return{tasks:[].concat(Object(C.a)(a.slice(0,n)),Object(C.a)(a.slice(n+1)))}}),(function(){a.saveState()}))},a.render=function(){return r.a.createElement("div",{className:"enumerator"},r.a.createElement("div",{className:"todoList"},r.a.createElement(D,{addTask:a.addTask}),r.a.createElement(Q,{nowTime:a.state.nowTime,changeSelect:a.changeSelect,changePriority:a.changePriority,deliteTask:a.deliteTask,changeTitle:a.changeTitle,changeStatus:a.changeStatus,tasks:a.state.tasks.filter((function(e){switch(a.state.filterValue){case"All":return!0;case"Completed":return e.isDone;case"Active":return!e.isDone}}))}),r.a.createElement(U,{filterValue:a.state.filterValue,changeFilter:a.changeFilter})))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.restoreState(),setInterval((function(){e.setState({nowTime:(new Date).toLocaleTimeString()})}),1e3)}}]),t}(r.a.Component),z=a(36),G=a.n(z),R=function(){return r.a.createElement("div",{className:G.a.loader})},Z=a(20),$={loading:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(P.a)({},e,{loading:t.loading});default:return e}},ee=a(22),te=a.n(ee),ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={environmentValue:"",pressedClassic:!0,pressedBlack:""},a.onChangeStyle=function(e){a.setState({environmentValue:e.target.value})},a.changeStyleClassic=function(){a.props.onCLickThemeClssic(a.state.environmentValue),a.setState({pressedClassic:!0,pressedBlack:!1})},a.changeStyleBlack=function(){a.props.onCLickThemeBlack(a.state.environmentValue),a.setState({pressedBlack:!0,pressedClassic:!1})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:te.a.environment},r.a.createElement("h3",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u043c\u0443:"),r.a.createElement("div",null,r.a.createElement("span",{className:te.a.environmentItem},"Classic "),r.a.createElement("input",{checked:this.state.pressedClassic,name:"theme",onClick:this.changeStyleClassic,onChange:this.onChangeStyle,value:this.state.environmentValue,type:"radio"})),r.a.createElement("div",null,r.a.createElement("span",{className:te.a.environmentItem},"Black "),r.a.createElement("input",{checked:this.state.pressedBlack,name:"theme",onClick:this.changeStyleBlack,onChange:this.onChangeStyle,value:this.state.environmentValue,type:"radio"})))}}]),t}(r.a.Component),ne={style:"containerClassic"},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STYLE_CLASSIC":return Object(P.a)({},e,{style:"containerClassic"});case"STYLE_BlACK":return Object(P.a)({},e,{style:"containerBlack"});default:return e}},ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={nameQualities:[{qualitie:"Punctual",id:"1"},{qualitie:"Sportsman",id:"2"},{qualitie:"\u0421onfident",id:"3"}]},a.onCLickThemeClssic=function(){a.props.styleClassic()},a.onCLickThemeBlack=function(){a.props.styleBlack()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.props.setLoading(!1)}),3e3)}},{key:"render",value:function(){var e=this,t=this.props.loading?r.a.createElement(R,null):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:this.props.style},r.a.createElement(q,null),r.a.createElement(k,null),r.a.createElement(y,{nameQualities:this.state.nameQualities}),r.a.createElement(h,null),r.a.createElement(B.a,{path:"/environment",render:function(){return r.a.createElement(ae,{onCLickThemeClssic:e.onCLickThemeClssic,onCLickThemeBlack:e.onCLickThemeBlack})}}),r.a.createElement(B.a,{path:"/form",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(B.a,{path:"/enumerator",render:function(){return r.a.createElement(W,null)}})));return r.a.createElement(M.a,null,t)}}]),t}(r.a.Component),oe=Object(Z.b)((function(e){return{loading:e.loadingPage.loading,style:e.settingPage.style}}),{setLoading:function(e){return{type:"SET_LOADING",loading:e}},styleClassic:function(){return{type:"STYLE_CLASSIC"}},styleBlack:function(){return{type:"STYLE_BlACK"}}})(ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(17),se=Object(ce.b)({loadingPage:X,settingPage:re}),le=Object(ce.c)(se);o.a.render(r.a.createElement(Z.a,{store:le},r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.437139e5.chunk.js.map