(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,a){e.exports=a(71)},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(20),l=a.n(s),i=a(22),c=a(1),o=a(2),m=a(4),u=a(3),d=a(16),h=a(8),p=Object(h.a)(),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("img",{src:"https://cdnimg.webstaurantstore.com/uploads/blog/2019/4/coffee-drinks-infographic.png",alt:""})}}]),a}(r.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{display:"flex",justifyContent:"center",padding:30}},n.a.createElement("div",null,n.a.createElement("h2",null,"About Page"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",null,"This project uses MERN - MongoDB, Express, React and Node - stack to implement a coffee shop.",n.a.createElement("br",null),"It offers the following functionlaity:"),n.a.createElement("ul",null,n.a.createElement("li",null,"User Register - Check the new username or email address if it\u2019s already registered to the system using AJAX"),n.a.createElement("li",null,"Form validation: Check if all mandatory fields are filled out. (JQuery)"),n.a.createElement("li",null,"Form validation: Password need to be more than 6 character and need to have alphanumeric and special characters. (JQuery)"))),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",null,"Lists the available cofee products in the system"),n.a.createElement("ul",null,n.a.createElement("li",null,"The user can search on the basis of category and item name."),n.a.createElement("li",null,"Search and Filtering are integrated togehter."))),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",null,"Paging functionlaity is provided for listing the products."),n.a.createElement("ul",null,n.a.createElement("li",null,"Paging is provided with Search and filtering as well."))),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",null,"Users can add items to the cart."),n.a.createElement("ul",null,n.a.createElement("li",null,"Users can add / subtract the items in the cart until the order is placed."),n.a.createElement("li",null,"Users can place orders by clicking on Checkout button."),n.a.createElement("li",null,"Payment platforms are not included."))),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",null,"Users can view their individual orders.")),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",null,"Admin users have the same interface as Normal users."),n.a.createElement("ul",null,n.a.createElement("li",null,"Admin users can Add, Delete or Update a Item."),n.a.createElement("li",null,"Add and Update feature are supported with form validation."),n.a.createElement("li",null,"Images can be added or Updated by using URLs. This way we just store the URL and can use another server for image storage."))),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",null,"Admin user can do 2 type of delte"),n.a.createElement("ul",null,n.a.createElement("li",null,"Hard Delete - Permanently remove item from database."),n.a.createElement("li",null,"Soft Delete - Remove the item from showing in listing and search."),n.a.createElement("li",null,"Soft Delete - Can be accessed by checking the check box in UpdateItem."))),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",null,"Website Content is taken from https://www.webstaurantstore.com/article/397/types-of-coffee-drinks.html"))))}}]),a}(r.Component),b=a(14),E=a.n(b),v=a(18),N=a(11),y=a(15),S=a(12),C=a(6),A=a.n(C),k=function(e){var t=e.id,a=e.name,r=e.description,s=e.img,l=e.category,i=e.price,c=e.softDelete,o=e.addProd,m=e.isAuthUser;return n.a.createElement(n.a.Fragment,null,!c&&n.a.createElement("div",{className:"card col-xl-3 col-lg-3 col-sm-6 col-6"},n.a.createElement("img",{src:s,className:"img-thumbnail mx-2 img-fluid item-img",alt:a}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h3",{className:"card-title"},a),n.a.createElement("h5",{className:"card-title"},l),n.a.createElement("p",{className:"card-text item-desc"},r),n.a.createElement("p",{className:"card-text"},"$",i),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"btn btn-success mx-2",onClick:function(){return o({id:t,name:a,description:r,img:s,category:l,price:i,units:1})}},"Add to Cart"),m&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"button",className:"btn btn-danger mx-2",onClick:function(){return function(e){var t={headers:{"Content-Type":"application/json","x-auth-token":JSON.parse(localStorage.getItem("userAuthDetails")).user.token}},a="/api/items/"+e;console.log(a),A.a.delete(a,t).then((function(e){console.log(e.data,e.status),window.location.reload(!0)}),(function(e){return console.log(e)}))}(t)}},"(Hard)Delete"),n.a.createElement("button",{type:"button",className:"btn btn-info mx-2",onClick:function(){return p.push("/UpdateProduct/?id="+t)}},"Update Item"))))))},O=function(e){for(var t=e.itemsPerPage,a=e.totalItems,r=e.currentPage,s=e.paginate,l=[],i=Math.ceil(a/t),c=1;c<=i;c++)l.push(c);return 1===r?n.a.createElement("nav",{className:"my-1"},n.a.createElement("ul",{className:"pagination ml-5 pl-5"},l.map((function(e){return n.a.createElement("li",{key:e,className:"page-item"},n.a.createElement("button",{onClick:function(){return s(e)},className:"page-link"},e))})),n.a.createElement("li",{className:"page-item"},n.a.createElement("button",{onClick:function(){return s(r+1)},className:"page-link",href:"#",title:"Next"},"Next \u2192")))):r===i?n.a.createElement("nav",{className:"my-1"},n.a.createElement("ul",{className:"pagination"},n.a.createElement("li",{className:"page-item"},n.a.createElement("button",{onClick:function(){return s(r-1)},className:"page-link",href:"#",title:"Previous"},"\u2190 Previous")),l.map((function(e){return n.a.createElement("li",{key:e,className:"page-item"},n.a.createElement("button",{onClick:function(){return s(e)},className:"page-link"},e))})))):n.a.createElement("nav",{className:"my-1"},n.a.createElement("ul",{className:"pagination"},n.a.createElement("li",{className:"page-item"},n.a.createElement("button",{onClick:function(){return s(r-1)},className:"page-link",href:"#",title:"Previous"},"\u2190 Previous")),l.map((function(e){return n.a.createElement("li",{key:e,className:"page-item"},n.a.createElement("button",{onClick:function(){return s(e)},className:"page-link"},e))})),n.a.createElement("li",{className:"page-item"},n.a.createElement("button",{onClick:function(){return s(r+1)},className:"page-link",href:"#",title:"Next"},"Next \u2192"))))};function w(e){var t=e.id,a=e.name,r=e.description,n=e.img;return{type:"ADD_TO_CART",payload:{id:t,name:a,description:r,category:e.category,img:n,price:e.price,units:e.units}}}var P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(N.a)({},t.target.name,t.target.value))},e.Search=function(t){t.preventDefault();var a=e.state.search;if(""===a)e.setState({category:"All"}),e.fetchPosts("api/items");else if("All"===e.state.category){var r="api/items/name/"+a;e.fetchPosts(r)}else{var n="api/items/category/"+e.state.category+"/name/"+a;e.fetchPosts(n)}},e.Category=function(t){var a=t.target.value;e.setState({category:a});var r="api/items/category/"+a;"All"===a?e.fetchPosts("api/items"):e.fetchPosts(r)},e.handleAddProduct=function(t){e.props.addToCartAction(t)},e.paginate=function(t){return e.setState({currentPage:t})},e.fetchPosts=function(){var t=Object(v.a)(E.a.mark((function t(a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,A.a.get(a);case 3:r=t.sent,e.setState({products:r.data}),e.setState({loading:!1});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={currentPage:1,itemsPerPage:4,products:[],search:"",category:"All"},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchPosts("api/items")}},{key:"render",value:function(){var e=this,t=this.state.currentPage*this.state.itemsPerPage,a=t-this.state.itemsPerPage,r=this.state.products.slice(a,t);return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light col-12"},n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("select",{className:"form-control col-3",name:"category",value:this.state.category,onChange:this.Category.bind(this)},n.a.createElement("option",{className:"nav-item dropdown",value:"All"},"All"),n.a.createElement("option",{className:"nav-item dropdown",value:"Espresso"},"Espresso"),n.a.createElement("option",{className:"nav-item dropdown",value:"Ristretto"},"Ristretto"),n.a.createElement("option",{className:"nav-item dropdown",value:"Drip Brew"},"Drip Brew")),n.a.createElement("ul",{className:"navbar-nav mr-auto justify-center"}),n.a.createElement("form",{className:"form-inline my-2 my-lg-0"},n.a.createElement("input",{className:"form-control mr-sm-2",type:"search",onChange:this.onChange.bind(this),name:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",onClick:this.Search.bind(this)},"Search")),n.a.createElement("div",null,this.props.isAuthUser&&n.a.createElement("button",{type:"button",className:"btn btn-info mx-2",onClick:function(){return p.push("/AddProduct")}},"Add new Item")))),n.a.createElement("div",{className:"d-flex flex-wrap mt-1 single-product"},r.map((function(t){return n.a.createElement(k,Object.assign({key:t._id},t,{id:t._id,addProd:e.handleAddProduct,isAuthUser:e.props.isAuthUser}))}))),n.a.createElement(O,{itemsPerPage:this.state.itemsPerPage,totalItems:this.state.products.length,currentPage:this.state.currentPage,paginate:this.paginate}))}}]),a}(r.PureComponent),j=Object(y.b)((function(e){return{cart:e.cart}}),(function(e){return Object(S.a)({addToCartAction:w},e)}))(P),D=a(39),x=a(27),U=localStorage.getItem("localCart"),I=[];U&&(I=JSON.parse(U));var T=function(e,t){return e.findIndex((function(e){return e.id===t}))},F=function(e,t){var a=T(e,t.id),r=Object(x.a)(e),n=r[a];if(n.units+t.units>0){var s=Object(D.a)({},n,{units:n.units+t.units});r[a]=s}else n.units+t.units===0&&r.splice(a,1);return r},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_TO_CART":var a=t.payload,r=e,n=T(r,a.id),s=n>=0?F(r,a):[].concat(Object(x.a)(r),[a]);return s}return e},L=Object(S.c)(Object(S.b)({cart:R})),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).paginate=function(t){return e.setState({currentPage:t})},e.state={isAuthUser:!1,loading:!1,currentPage:1,itemsPerPage:10},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("userAuthDetails"));e&&e.isAuthorised&&e.user.user.isAdmin&&this.setState({isAuthUser:!0})}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("userAuthDetails")),t=!1;return e&&e.isAuthorised&&e.user.user.isAdmin!==this.props.isAuthorised?t=e.user.user.isAdmin:e&&e.isAuthorised&&e.user.user.isAdmin===this.props.isAuthorised&&(t=this.props.isAuthUser),n.a.createElement("div",{className:"container clearfix d-flex flex-column mt-1"},n.a.createElement("div",{className:"row clearfix"},n.a.createElement(y.a,{store:L},n.a.createElement(j,{isAuthUser:t}))))}}]),a}(n.a.Component),Q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).onChange=function(e){var t=e.target.value;switch(e.target.name){case"name":t.length>5?r.setState({error:""}):r.setState({error:"Enter name more than 5 characters."});break;case"description":t.length<6?r.setState({error:"Description should be more than 5 characters"}):r.setState({error:""});break;case"category":t.length<3?r.setState({error:"Category name needs to be given and greater than 3 characters."}):r.setState({error:""});break;case"price":Number.isInteger(parseInt(t))?r.setState({error:""}):r.setState({error:"Price should be a number."});break;case"units":Number.isInteger(parseInt(t))?r.setState({error:""}):r.setState({error:"Unit should be a number."})}r.setState(Object(N.a)({},e.target.name,e.target.value))},r.AddToDatabase=function(e){if(e.preventDefault(),0===r.state.error.length){var t=r.state.name,a=r.state.description,n=r.state.img,s=r.state.category,l=r.state.price,i=r.state.units,c=JSON.stringify({name:t,description:a,img:n,category:s,price:l,units:i}),o={headers:{"Content-Type":"application/json","x-auth-token":JSON.parse(localStorage.getItem("userAuthDetails")).user.token}};A.a.post("/api/items/",c,o).then((function(e){console.log(e.data,e.status),p.push("../Shop")}),(function(e){r.setState({error:"Item could not be inserted. Check again."}),console.log(e)}))}},r.state={name:"",description:"",img:"",category:"Espresso",price:1,units:1,error:""},r}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,"Enter item details:"),this.state.error.length>0&&n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item list-group-item-danger"},this.state.error)),n.a.createElement("form",{className:"col-sm-9"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Item Name"),n.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name",placeholder:"Enter Item name",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"description"},"Description"),n.a.createElement("input",{type:"text",className:"form-control",id:"description",name:"description",placeholder:"Enter description",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"img"},"Image URL"),n.a.createElement("input",{type:"text",className:"form-control",id:"img",name:"img",placeholder:"Enter Image URL",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"category"},"Category"),n.a.createElement("input",{type:"text",className:"form-control",id:"category",name:"category",value:this.state.category,placeholder:"Enter Category",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"img"},"Price"),n.a.createElement("input",{type:"number",className:"form-control",id:"price",name:"price",min:"1",value:this.state.price,placeholder:"in numbers",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"img"},"Units"),n.a.createElement("input",{type:"number",className:"form-control",id:"units",name:"units",min:"1",value:this.state.units,placeholder:"in numbers",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"col-lg-6 col-sm-6 col-6 checkout"},n.a.createElement("button",{onClick:this.AddToDatabase.bind(this),type:"submit",className:"btn btn-primary btn-block"},"Add to Database"))))}}]),a}(n.a.PureComponent),z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).onChange=function(e){var t=e.target.value;switch(e.target.name){case"name":t.length>5?r.setState({error:""}):r.setState({error:"Enter name more than 5 characters."});break;case"description":console.log("less than 6"),t.length<6?r.setState({error:"Description should be more than 5 characters"}):r.setState({error:""});break;case"category":t.length<3?r.setState({error:"Category name needs to be given and greater than 3 characters."}):r.setState({error:""});break;case"price":Number.isInteger(parseInt(t))?r.setState({error:""}):r.setState({error:"Price should be a number."});break;case"units":Number.isInteger(parseInt(t))?r.setState({error:""}):r.setState({error:"Unit should be a number."});break;case"softDelete":r.setState({softDelete:e.target.checked})}"softDelete"!==e.target.name&&r.setState(Object(N.a)({},e.target.name,e.target.value))},r.updateDatabase=function(e){if(e.preventDefault(),0===r.state.error.length){var t=r.state.id,a=r.state.name,n=r.state.description,s=r.state.img,l=r.state.category,i=r.state.price,c=r.state.units,o=r.state.softDelete;console.log(o);var m=JSON.stringify({name:a,description:n,img:s,category:l,price:i,units:c,softDelete:o}),u={headers:{"Content-Type":"application/json","x-auth-token":JSON.parse(localStorage.getItem("userAuthDetails")).user.token}},d="/api/items/"+t;console.log(d),A.a.put(d,m,u).then((function(e){console.log(e.data,e.status),p.push("../Shop")}),(function(e){r.setState({error:"Item could not be updated. Check again."}),console.log(e)}))}},r.state={id:"",name:"",description:"",img:"",category:"",price:1,units:1,softDelete:!1,error:""},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(window.location.search).get("id");(function(){var a=Object(v.a)(E.a.mark((function a(){var r,n;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,A.a.get("/api/items/"+t);case 2:200===(r=a.sent).status?(n=r.data,e.setState({id:t,name:n.name,description:n.description,img:n.img,category:n.category,price:n.price,units:n.units,softDelete:n.softDelete}),console.log("Item found in database",n)):console.log("Item not found in database");case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,"Enter item details:"),this.state.error.length>0&&n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item list-group-item-danger"},this.state.error)),n.a.createElement("form",{className:"col-sm-9"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Item Name"),n.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,name:"name",placeholder:"Enter Item name",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"description"},"Description"),n.a.createElement("textarea",{className:"form-control",name:"description",defaultValue:this.state.description,id:"description",rows:"3",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"img"},"Image URL"),n.a.createElement("input",{type:"text",className:"form-control",id:"img",value:this.state.img,name:"img",placeholder:"Enter Image URL",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"img"},"Category"),n.a.createElement("input",{type:"text",className:"form-control",id:"category",value:this.state.category,name:"category",placeholder:"Enter Category",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"img"},"Price"),n.a.createElement("input",{type:"number",className:"form-control",id:"price",value:this.state.price,name:"price",min:"0",placeholder:"in numbers",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"img"},"Units"),n.a.createElement("input",{type:"number",className:"form-control",id:"units",value:this.state.units,name:"units",min:"0",placeholder:"in numbers",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"softDelete",name:"softDelete",checked:this.state.softDelete,onChange:this.onChange.bind(this)}),n.a.createElement("label",{className:"form-check-label",htmlFor:"softDelete"},"Soft Delete")),n.a.createElement("div",{className:"col-lg-6 col-sm-6 col-6 checkout"},n.a.createElement("button",{onClick:this.updateDatabase.bind(this),type:"submit",className:"btn btn-primary btn-block"},"Update Item"))))}}]),a}(n.a.PureComponent),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).paginate=function(t){return e.setState({currentPage:t})},e.fetchPosts=function(){var t=Object(v.a)(E.a.mark((function t(a,r){var n,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),n={headers:{"Content-Type":"application/json","x-auth-token":r}},t.next=4,A.a.get(a,n);case 4:s=t.sent,e.setState({orders:s.data}),e.setState({loading:!1});case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={currentPage:1,itemsPerPage:4,orders:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("userAuthDetails")),t=e.user.token,a=e.user.user.id;this.fetchPosts("api/orders/"+a,t)}},{key:"render",value:function(){var e=this.state.currentPage*this.state.itemsPerPage,t=e-this.state.itemsPerPage,a=this.state.orders.slice(t,e);return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Order Details:"),n.a.createElement("div",{className:"mt-1 col-12"},n.a.createElement("ul",{className:"list-group  my-3"},a.map((function(e){return n.a.createElement("ul",{className:"list-group my-3",key:e._id},n.a.createElement("li",{className:"list-group-item list-group-item-success"},"Customer Name : ",e.user.name),n.a.createElement("li",{className:"list-group-item list-group-item-success"},"Email : ",e.user.email),n.a.createElement("ul",{className:"list-group my-3"},e.order.map((function(e){return n.a.createElement("li",{key:e.id,className:"list-group-item list-group-item-info"},"Item name:",e.name,", Price:$",e.price,", Units Bought:",e.units)}))),n.a.createElement("ul",{className:"list-group my-1"},n.a.createElement("li",{className:"list-group-item list-group-item-primary"},"Total Quantity: ",e.orderTotalQuantity,", Total Amount: $",e.orderTotalAmount)))})))),n.a.createElement(O,{itemsPerPage:this.state.itemsPerPage,totalItems:this.state.orders.length,currentPage:this.state.currentPage,paginate:this.paginate}))}}]),a}(r.PureComponent),Z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(d.b,{history:p},n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/Home",component:g}),n.a.createElement(d.a,{path:"/About",component:f}),n.a.createElement(d.a,{path:"/AddProduct",component:Q}),n.a.createElement(d.a,{path:"/Shop",render:function(t){return n.a.createElement(J,Object.assign({},t,{isAuthUser:e.props.isAuthUser}))}}),n.a.createElement(d.a,{path:"/UpdateProduct",render:function(e){return n.a.createElement(z,e)}}),n.a.createElement(d.a,{path:"/ShowOrders",component:M}),n.a.createElement(d.a,{path:"/",component:g})))}}]),a}(r.Component),$=function(e){var t=e.id,a=e.name,r=e.description,s=e.img,l=e.category,i=e.price,c=e.units,o=e.addProd;return n.a.createElement("div",{className:"row cart-detail"},n.a.createElement("div",{className:"col-lg-3 col-sm-3 col-3 p-1"},n.a.createElement("img",{className:"img-thumbnail",src:s,alt:a})),n.a.createElement("div",{className:"col-lg-9 col-sm-9 col-9 cart-detail-product d-flex justify-content-between"},n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("p",null,a),n.a.createElement("span",{className:"count"},"Price : $",i),n.a.createElement("span",{className:"price text-info"}," Quantity:",c)),n.a.createElement("div",{className:"d-flex justify-content-end"},n.a.createElement("button",{type:"button",className:"btn btn-primary mx-1",onClick:function(){return o({id:t,name:a,description:r,img:s,category:l,price:i,units:1})}},"+"),n.a.createElement("button",{type:"button",className:"btn btn-warning mx-1",onClick:function(){return o({id:t,name:a,description:r,img:s,category:l,price:i,units:-1})}},"-"))))},H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;Object(c.a)(this,a),(r=t.call(this,e)).handleAddProduct=function(e){r.props.addToCartAction(e),r.setState({orderPlaced:!1})},r.updateStates=function(e){for(var t=0,a=0,n=0;n<e.length;n++)t+=e[n].price*e[n].units,a+=e[n].units;r.setState({cart:e,cartTotalAmount:t,cartTotalQuantity:a})},r.CreateOrder=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("userAuthDetails")),a={headers:{"Content-Type":"application/json","x-auth-token":t.user.token}},n={order:r.state.cart,user:t.user.user,orderTotalQuantity:r.state.cartTotalQuantity,orderTotalAmount:r.state.cartTotalAmount};A.a.post("/api/orders/",n,a).then((function(e){console.log(e.data,e.status),r.setState({orderPlaced:!0}),localStorage.removeItem("localCart"),r.updateStates([]),window.location.reload(!0)}),(function(e){return console.log(e)}))};var n=localStorage.getItem("localCart"),s=[];n&&(s=JSON.parse(n));for(var l=0,i=0,o=0;o<s.length;o++)l+=s[o].price*s[o].units,i+=s[o].units;return r.state={cart:s,cartTotalAmount:l,cartTotalQuantity:i,orderPlaced:!1},r}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){if(!this.state.orderPlaced){var e=this.props.cart;this.updateStates(e),localStorage.setItem("localCart",JSON.stringify(e))}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"dropdown"},n.a.createElement("button",{type:"button",className:"btn btn-info","data-toggle":"dropdown"},n.a.createElement("i",{className:"fa fa-shopping-cart mr-1","aria-hidden":"true"}),"Shopping Cart"," ",n.a.createElement("span",{className:"badge badge-pill badge-danger"},this.state.cartTotalQuantity)),n.a.createElement("form",{className:"dropdown-menu"},n.a.createElement("div",{className:"row total-header-section"},n.a.createElement("div",{className:"col-lg-6 col-sm-6 col-6"},n.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"})," ",n.a.createElement("span",{className:"badge badge-pill badge-danger"},this.state.cartTotalQuantity)),n.a.createElement("div",{className:"col-lg-6 col-sm-6 col-6 total-section text-right"},n.a.createElement("p",null,"Total Amount:"," ",n.a.createElement("span",{className:"text-info"},"$",this.state.cartTotalAmount)))),this.state.cart.map((function(t){return n.a.createElement($,Object.assign({},t,{key:t.id,addProd:e.handleAddProduct}))})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-sm-12 col-12 text-center checkout"},n.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.CreateOrder},"Place Order")))))}}]),a}(n.a.PureComponent),_=Object(y.b)((function(e){return{cart:e.cart}}),(function(e){return Object(S.a)({addToCartAction:w},e)}))(H),B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).onChange=function(e){var t=e.target.value;switch(e.target.name){case"email":/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(t)?r.setState({error:""}):r.setState({error:"Email form: abc@xyz.com"});break;case"password":t.length<6?r.setState({error:"Password should be more than 5 characters"}):/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{6,})/.test(t)?r.setState({error:""}):r.setState({error:"Password should have alphanumeric and special characters."})}r.setState(Object(N.a)({},e.target.name,e.target.value))},r.Login=function(e){if(e.preventDefault(),0===r.state.error.length){var t=r.state.email,a=r.state.password,n=JSON.stringify({email:t,password:a});r.props.userDetails(n)}},r.state={email:"",password:"",error:""},r}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row col-12 mt-3"},this.state.error.length>0&&n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item list-group-item-danger"},this.state.error)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Enter email",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"col-lg-12 col-sm-12 col-12 text-center checkout"},n.a.createElement("button",{onClick:this.Login.bind(this),type:"submit",className:"btn btn-primary btn-block"},"Login")))}}]),a}(n.a.PureComponent),W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).onChange=function(e){var t=e.target.value;switch(e.target.name){case"fullname":t.length<3?r.setState({error:"Enter more characters in name."}):r.setState({error:""});break;case"email":/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(t)?r.setState({error:""}):r.setState({error:"Email form: abc@xyz.com"});break;case"password":t.length<6?r.setState({error:"Password should be more than 5 characters"}):/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{6,})/.test(t)?r.setState({error:""}):r.setState({error:"Password should have alphanumeric and special characters."})}r.setState(Object(N.a)({},e.target.name,e.target.value))},r.Register=function(e){if(e.preventDefault(),0===r.state.error.length){var t=r.state.fullname,a=r.state.email,n=r.state.password,s=JSON.stringify({name:t,email:a,password:n});r.props.userDetails(s)}},r.state={fullname:"",email:"",password:"",error:""},r}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row col-12 mt-3"},this.state.error.length>0&&n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item list-group-item-danger"},this.state.error)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"fullname"},"Name"),n.a.createElement("input",{type:"text",className:"form-control",id:"fullname",name:"fullname",placeholder:"Enter your name",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:this.onChange.bind(this)}),n.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",onChange:this.onChange.bind(this)})),n.a.createElement("div",{className:"col-lg-12 col-sm-12 col-12 text-center checkout"},n.a.createElement("button",{onClick:this.Register.bind(this),type:"submit",className:"btn btn-primary btn-block"},"Register")))}}]),a}(n.a.PureComponent),V=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).authenticateUser=function(e){A.a.post("/api/auth/",e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data,e.status);var t={user:e.data,isAuthorised:!0};r.props.authUser(t),r.setState({isAuthenticated:!0})}),(function(e){r.setState({error:"Invalid Credentials"}),console.log(e)}))},r.saveNewUser=function(e){A.a.post("/api/users/",e,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data,e.status);var t={user:e.data,isAuthorised:!0};r.props.authUser(t),r.setState({isAuthenticated:!0})}),(function(e){r.setState({error:"Email already exists"}),console.log(e)}))},r.logOut=function(e){e.preventDefault(),r.setState({isAuthenticated:!1});r.props.authUser({user:"",isAuthorised:!1})},r.switchType=function(e){e.preventDefault(),r.state.isLogin?r.setState({isLogin:!1,isRegister:!0}):r.setState({isLogin:!0,isRegister:!1})},r.state={isLogin:!1,isRegister:!0,isAuthenticated:!1,error:""},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("userAuthDetails"));e&&e.isAuthorised&&this.setState({isAuthenticated:!0})}},{key:"componentDidUpdate",value:function(){var e=JSON.parse(localStorage.getItem("userAuthDetails"));e&&e.isAuthorised&&this.setState({isAuthenticated:!0})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.state.isAuthenticated&&n.a.createElement("button",{onClick:this.logOut.bind(this),className:"btn btn-info mr-2"},n.a.createElement("i",{className:"fa fa-sign-out mr-1","aria-hidden":"true"}),"Logout"),!this.state.isAuthenticated&&n.a.createElement("div",{className:"dropdown"},n.a.createElement("button",{type:"button",className:"btn btn-info","data-toggle":"dropdown"},!this.state.isAuthenticated&&this.state.isLogin&&n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fa fa-sign-in mr-1","aria-hidden":"true"}),"Login"),!this.state.isAuthenticated&&this.state.isRegister&&n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fa fa-registered mr-1","aria-hidden":"true"}),"Register")),n.a.createElement("form",{className:"dropdown-menu",method:"post"},n.a.createElement("div",{className:"row total-header-section"},n.a.createElement("div",{className:"col-lg-3 col-sm-3 col-3"},this.state.isLogin&&n.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"}),this.state.isRegister&&n.a.createElement("i",{className:"fa fa-registered","aria-hidden":"true"})),n.a.createElement("div",{className:"col-lg-9 col-sm-9 col-9 total-section text-right signin"},n.a.createElement("button",{onClick:this.switchType.bind(this),className:"btn btn-primary"},this.state.isLogin&&"Want to Register",this.state.isRegister&&"Want to Login"))),this.state.error.length>0&&n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item list-group-item-danger"},this.state.error)),this.state.isLogin&&n.a.createElement(B,{userDetails:this.authenticateUser}),this.state.isRegister&&n.a.createElement(W,{userDetails:this.saveNewUser}))))}}]),a}(n.a.PureComponent),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).getUserAuthentication=function(t){t.isAuthorised?localStorage.setItem("userAuthDetails",JSON.stringify(t)):localStorage.removeItem("userAuthDetails"),e.props.isAuthUser(t.isAuthorised)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cart,a=e.addToCartAction;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{className:"navbar-brand",href:"/Shop"},"Caffeine Era"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"/Home"},"Home ",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/About"},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/Shop"},"Shop")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/ShowOrders"},"Show Orders"))),n.a.createElement(V,{authUser:this.getUserAuthentication}),n.a.createElement(_,{cart:t,addToCartAction:a})))}}]),a}(r.Component),q=Object(d.f)(X),G=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).setAuthLevel=function(t){console.log("Setting auth level in app.js to ",t),e.setState({isAuthUser:t}),e.props.isAuthUser(t)},e.state={isAuthUser:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("userAuthDetails"));e&&e.isAuthorised&&e.user.user.isAdmin&&this.setState({isAuthUser:!0})}},{key:"render",value:function(){return n.a.createElement(y.a,{store:L},n.a.createElement(q,{isAuthUser:this.setAuthLevel}))}}]),a}(n.a.PureComponent),K=(a(70),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).setAuth=function(t){e.setState({isAuthUser:t})},e.state={isAuthUser:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(G,{isAuthUser:this.setAuth}),n.a.createElement(Z,{isAuthUser:this.state.isAuthUser}))}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,null,n.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.58bb97b1.chunk.js.map