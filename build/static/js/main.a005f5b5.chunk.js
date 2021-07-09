(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{36:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(23),o=a(62),s=a(63),i=a(64),l=a(11),u=a(12),m=a(13),p=a(14),d=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).myInput=r.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name"}),r.a.createElement("button",{type:"submit"},"Visit Store \u2192"))}}]),a}(r.a.Component),h=a(18),f=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Cafe Puca!"))};function v(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}var b=a(20),E=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderOrder=function(t){var a=e.props.items[t],n=e.props.order[t],c=a&&"available"===a.status,o={classNames:"order",key:t,timeout:{enter:500,exit:500}};return a?c?r.a.createElement(b.CSSTransition,o,r.a.createElement("li",{key:t},r.a.createElement("span",null,r.a.createElement(b.TransitionGroup,{component:"span",className:"count"},r.a.createElement(b.CSSTransition,{classNames:"count",key:n,timeout:{enter:500,exit:500}},r.a.createElement("span",null,n))),"x ",a.name,v(n*a.price),r.a.createElement("button",{onClick:function(){return e.props.removeFromOrder(t)}},"\xd7")))):r.a.createElement(b.CSSTransition,o,r.a.createElement("li",{key:t},"Sorry ",a?a.name:"item"," is no longer available")):null},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var n=e.props.items[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t}),0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(b.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,v(a))),r.a.createElement("button",null))}}]),a}(r.a.Component),y=a(21),g=a.n(y),O=a(26),S=a(24),I=a(19),j=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).nameRef=r.a.createRef(),e.priceRef=r.a.createRef(),e.statusRef=r.a.createRef(),e.descRef=r.a.createRef(),e.imgRef=r.a.createRef(),e.createItem=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imgRef.current.value};e.props.addItem(a),t.currentTarget.reset()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"item-edit",onSubmit:this.createItem},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Available!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{name:"image",ref:this.imgRef,type:"text",placeholder:"image"}),r.a.createElement("button",{type:"submit"},"+ Add item"))}}]),a}(r.a.Component),k=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){console.log(t.currentTarget.value);var a=Object(h.a)({},e.props.item,{[t.currentTarget.name]:"price"===t.currentTarget.name?parseFloat(t.currentTarget.value):t.currentTarget.value});e.props.updateItem(e.props.index,a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"item-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.item.name}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.item.price}),r.a.createElement("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.item.status},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.item.desc}),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.item.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteItem(e.props.index)}},"Remove item"))}}]),a}(r.a.Component),C=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log In With GitHub"))},x=a(34),w=a.n(x),N=I.a.initializeApp({apiKey:"AIzaSyDRcK0s7_xMmE3aPiH92Pjg2FZSF44fsn4",authDomain:"cafereact-ff9e1.firebaseapp.com",databaseURL:"https://cafereact-ff9e1-default-rtdb.europe-west1.firebasedatabase.app",projectId:"cafereact-ff9e1",storageBucket:"cafereact-ff9e1.appspot.com",messagingSenderId:"946133042595",appId:"1:946133042595:web:c19e09ee434b371ed6c616"}),R=w.a.createClass(N.database()),T=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(O.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.fetch(e.props.storeId,{context:Object(S.a)(e)});case 2:if(n=t.sent,console.log(n),n.owner){t.next=7;break}return t.next=7,R.post("".concat(e.props.storeId,"/owner"),{data:a.user.uid});case 7:e.setState({uid:a.user.uid,owner:n.owner||a.user.uid});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(I.a.auth["".concat(t,"AuthProvider")]);N.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(O.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Logging out!"),t.next=3,I.a.auth().signOut();case 3:e.setState({uid:null});case 4:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;I.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Log Out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry you are not the owner!"),t):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),t,Object.keys(this.props.items).map((function(t){return r.a.createElement(k,{key:t,index:t,item:e.props.items[t],updateItem:e.props.updateItem,deleteItem:e.props.deleteItem})})),r.a.createElement(j,{addItem:this.props.addItem}),r.a.createElement("button",{onClick:this.props.loadSampleItems},"Load Sample items")):r.a.createElement(C,{authenticate:this.authenticate})}}]),a}(r.a.Component),A={fish1:{name:"Pacific Halibut",quantity:32,desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"}},D=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,n=t.name,c=t.price,o=t.desc,s="available"===t.status;return r.a.createElement("li",{className:"menu-item"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("h3",{className:"item-name"},n,r.a.createElement("span",{className:"price"},v(c))),r.a.createElement("p",null,o),r.a.createElement("button",{disabled:!s,onClick:function(){return e.props.addToOrder(e.props.index)}},s?"Add To Order":"Sold Out!"))}}]),a}(r.a.Component),F=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={items:{},order:{}},e.addItem=function(t){var a=Object(h.a)({},e.state.items);a["item".concat(Date.now())]=t,e.setState({items:a})},e.updateItem=function(t,a){var n=Object(h.a)({},e.state.items);n[t]=a,e.setState({items:n})},e.deleteItem=function(t){var a=Object(h.a)({},e.state.items);a[t]=null,e.setState({items:a})},e.loadSampleItems=function(){e.setState({items:A})},e.addToOrder=function(t){var a=Object(h.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromOrder=function(t){var a=Object(h.a)({},e.state.order);delete a[t],e.setState({order:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=R.syncState("".concat(e.storeId,"/items"),{context:this,state:"items"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){R.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(f,{tagline:"Menu"}),r.a.createElement("ul",{className:"items"},Object.keys(this.state.items).map((function(t){return r.a.createElement(D,{key:t,index:t,details:e.state.items[t],addToOrder:e.addToOrder})})))),r.a.createElement(E,{items:this.state.items,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(T,{addItem:this.addItem,updateItem:this.updateItem,deleteItem:this.deleteItem,loadSampleItems:this.loadSampleItems,items:this.state.items,storeId:this.props.match.params.storeId}))}}]),a}(r.a.Component),P=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found!?!!!!1111"))},H=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:d}),r.a.createElement(i.a,{path:"/store/:storeId",component:F}),r.a.createElement(i.a,{component:P})))};a(59);Object(c.render)(r.a.createElement(H,null),document.querySelector("#main"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a005f5b5.chunk.js.map