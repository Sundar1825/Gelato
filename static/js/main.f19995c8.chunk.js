(this["webpackJsonpreact-navbar-v3"]=this["webpackJsonpreact-navbar-v3"]||[]).push([[0],{46:function(e,n,t){e.exports=t(77)},51:function(e,n,t){},57:function(e,n,t){e.exports=t.p+"static/media/Gelato.52ed3dff.png"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"store",(function(){return K}));var a,r,o,l,s,i,c=t(0),d=t.n(c),u=t(12),m=t.n(u),h=(t(51),t(14)),p=t(45),v=t(18),f=t(15),b=f.a.nav(a||(a=Object(h.a)(["\n  background: #000;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),g=Object(f.a)(v.b)(r||(r=Object(h.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    color: #15cdfc;\n  }\n"]))),E=Object(f.a)(p.a)(o||(o=Object(h.a)(["\n  display: none;\n  color: #fff;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),x=f.a.div(l||(l=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n\n  /* Second Nav */\n  /* margin-right: 24px; */\n\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),A=f.a.nav(s||(s=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),y=Object(f.a)(v.b)(i||(i=Object(h.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n\n  /* Second Nav */\n  margin-left: 24px;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),w=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(b,null,d.a.createElement(g,{to:"/"},d.a.createElement("img",{"object-fit":"contain",width:"100",height:"80",src:t(57),alt:"logo",align:"left"}),d.a.createElement("h1",null,"Gelato Explorer")),d.a.createElement(E,null),d.a.createElement(x,null,d.a.createElement(g,{to:"/newtask",activeStyle:!0},"New Task"),d.a.createElement(g,{to:"/taskhistory",activeStyle:!0},"Task History"),d.a.createElement(g,{to:"/funds",activeStyle:!0},"Funds")),d.a.createElement(A,null,d.a.createElement(y,{to:"/signin"},"Connect"))))},j=t(2),O=function(){return d.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}},d.a.createElement("h1",null,"Automate your smart contracts with Gelato Network. Available on Ethereum and Polygon."))},C=t(20),N=t(21),k=t(22),F=t(19),S=t(25),T=t(23),D=function(e,n,t,a){return{type:"ADD-TASK",payload:{executionAddress:e,functionName:n,resolverAddress:t,resolverFunction:a}}},_=t(17),G=t(24),R=function(e){Object(S.a)(t,e);var n=Object(T.a)(t);function t(e){var a;return Object(N.a)(this,t),(a=n.call(this,e)).styles=function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}},a.state={executionAddress:"",functionName:"",resolverAddress:null,resolverFunction:""},a.handleChange=a.handleChange.bind(Object(F.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(F.a)(a)),a}return Object(k.a)(t,[{key:"handleChange",value:function(e){console.log("Printing event from handleChange",e),this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var n=this.state;n.executionAddress,n.functionName,n.resolverAddress,n.resolverFunction;e.preventDefault(),this.props.actions.addTask(this.state.executionAddress,this.state.functionName,this.state.resolverAddress,this.state.resolverFunction),alert("\n      ***** Your Task Got Saved, Please proceed to task history to check the status *****\n    ")}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"75vh"}},d.a.createElement("form",{onSubmit:this.handleSubmit},d.a.createElement("div",null,d.a.createElement("a",{href:"https://docs.gelato.network/tutorial",target:"_blank"},"First time using Gelato Network? Check out our docs here..."),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("label",{htmlFor:"executionAddress"},"Execution address"),d.a.createElement("input",{name:"executionAddress",placeholder:"executionAddress",value:this.state.executionAddress,onChange:this.handleChange}))," ",d.a.createElement("br",null),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"functionName"},"Function to be Automated"),d.a.createElement("input",{name:"functionName",placeholder:"functionName",value:this.state.functionName,onChange:this.handleChange})),d.a.createElement("br",null),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"resolverAddress"},"Resolver Address"),d.a.createElement("input",{name:"resolverAddress",placeholder:"resolverAddress",value:this.state.age,onChange:this.handleChange})),d.a.createElement("br",null),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"resolverFunction"},"Function to be called at the resolver"),d.a.createElement("input",{name:"resolverFunction",placeholder:"resolverFunction",value:this.state.address,onChange:this.handleChange})),d.a.createElement("br",null),d.a.createElement("div",null,d.a.createElement("button",null,"Yes, Automate my Smart Contract!")))))}}]),t}(d.a.Component),B=Object(_.b)(null,(function(e){return{actions:Object(G.a)({addTask:D},e)}}))(R),I=t(16),P=(t(41),t(75),function(e){Object(S.a)(t,e);var n=Object(T.a)(t);function t(e){var a;return Object(N.a)(this,t),a=n.call(this,e),console.log("Printing Props",a.props),a.state={executionAddress:a.props.executionAddress,functionName:a.props.functionName,resolverAddress:a.props.resolverAddress,resolverFunction:a.props.resolverFunction,rowData:[{ExecutionAddress:a.props.executionAddress,FunctionName:a.props.functionName,ResolverAddress:a.props.resolverAddress,ResolverFunction:a.props.resolverFunction,TaskCreationTime:Date().toLocaleString()},{ExecutionAddress:"0x60779b57bd5f575b4013619033b0d44862b4a808ef9b5135cd75363df1754efd",FunctionName:"Counter.sol",ResolverAddress:"0x63C51b1D80B209Cf336Bec5a3E17D3523B088cdb",ResolverFunction:"CounterResolver.sol",TaskCreationTime:"Wed Aug 18 2021 09:00:00"}]},a}return Object(k.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"ag-theme-balham",style:{height:"1000px",width:"1200px"}},d.a.createElement(I.AgGridReact,{rowData:this.state.rowData},d.a.createElement(I.AgGridColumn,{field:"ExecutionAddress",sortable:!0,filter:!0}),d.a.createElement(I.AgGridColumn,{field:"FunctionName",sortable:!0,filter:!0}),d.a.createElement(I.AgGridColumn,{field:"ResolverAddress",sortable:!0,filter:!0}),d.a.createElement(I.AgGridColumn,{field:"ResolverFunction",sortable:!0,filter:!0}),d.a.createElement(I.AgGridColumn,{field:"TaskCreationTime",sortable:!0,filter:!0})))}}]),t}(d.a.Component)),X=Object(_.b)((function(e){return{executionAddress:e.executionAddress,functionName:e.functionName,resolverAddress:e.resolverAddress,resolverFunction:e.resolverFunction}}))(P),L=(t(76),function(){return d.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}},d.a.createElement("h1",null,"Funds Section"))});var W=function(){return d.a.createElement(v.a,null,d.a.createElement(w,null),d.a.createElement(j.c,null,d.a.createElement(j.a,{path:"/",exact:!0,component:O}),d.a.createElement(j.a,{path:"/newtask",component:B}),d.a.createElement(j.a,{path:"/taskhistory",component:X}),d.a.createElement(j.a,{path:"/funds",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=t(26),J={executionAddress:null,functionName:null,resolverAddress:null,resolverFunction:null},K=Object(G.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD-TASK":return Object(z.a)(Object(z.a)({},e),{},{executionAddress:n.payload.executionAddress,functionName:n.payload.functionName,resolverAddress:n.payload.resolverAddress,resolverFunction:n.payload.resolverFunction});default:return Object(z.a)({},e)}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log("Printing store : ",K.getState()),m.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(_.a,{store:K},d.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.f19995c8.chunk.js.map