(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{25:function(e,t,i){},28:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var c=i(0),a=i(1),n=i.n(a),s=i(17),r=i.n(s),l=i(4),u=i(2);i(25),i(26),i(27),i(28);var j=function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("h1",{children:"COVID-19 Supplies"})}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)(l.c,{to:"/",activeClassName:"active-link",exact:!0,children:Object(c.jsx)("li",{children:"Home"})}),Object(c.jsx)(l.c,{to:"/supplies",activeClassName:"active-link",exact:!0,children:Object(c.jsx)("li",{children:"Supplies"})}),Object(c.jsx)(l.c,{to:"/cart",activeClassName:"active-link",exact:!0,children:Object(c.jsx)("li",{children:Object(c.jsx)("i",{className:"fas fa-shopping-cart"})})})]})})]})},o=i(10),m=i(11),p=i.p+"static/media/cloth-masks-large.c65e79e9.jpg",d=i.p+"static/media/cloth-masks-small.c67afcb9.jpg",h=i.p+"static/media/gloves-large.25938f89.jpg",b=i.p+"static/media/gloves-small.dba41c8f.jpg",f=i.p+"static/media/hand-sanitizer-large.7a2ca068.jpg",g=i.p+"static/media/hand-sanitizer-small.ceb419f3.jpg",O=i.p+"static/media/disinfecting-wipes-large.415c42f4.jpg",x=i.p+"static/media/disinfecting-wipes-small.2e25548a.jpg",v=i.p+"static/media/toilet-paper-large.51d14ee0.jpg",I=i.p+"static/media/toilet-paper-small.592f83f4.jpg",N=i.p+"static/media/n95-masks-large.0f482f7e.jpg",y=i.p+"static/media/n95-masks-small.1c19bfa8.jpg",C=i.p+"static/media/hand-wash-large.87b9f995.jpg",k=i.p+"static/media/hand-wash-small.20978dd9.jpg",S=i.p+"static/media/face-shield-large.3acf4256.jpg",U=i.p+"static/media/face-shield-small.7d809e6c.jpg",D=function e(t,i,c,a,n){Object(m.a)(this,e),this.id=t,this.title=i,this.price=c,this.smallImageUrl=a,this.largeImageUrl=n},E=[],q=0,w=function(e,t,i,c){E.push(new D(q,e,t,i,c)),q+=1};w("Cloth Masks",30,d,p),w("Gloves",10,b,h),w("Hand Sanitizer",15,g,f),w("Disinfectant Wipes",15,x,O),w("Toilet Paper",500,I,v),w("N95 Masks",200,y,N),w("Hand Wash",20,k,C),w("Face Shield",40,U,S);var Q={getItemDetails:function(e){var t=null;return E.forEach((function(i){i.id===e&&(t=Object(o.a)({},i))})),t},getAllItemDetails:function(){var e=[];return E.forEach((function(t){e.push(Object(o.a)({},t))})),e}},T=(i(37),i(19)),A={};var P={on:function(e,t){A[e]=A[e]||[],A[e].push(t)},off:function(e,t){if(A[e])for(var i=0;i<A[e].length;i+=1)if(A[e][i]===t){A[e].splice(i,1);break}},emit:function(e,t){A[e]&&A[e].forEach((function(e){e(t)}))}},H=[],G="SHOPPING_CART_UPDATED",$=function(){function e(t,i){Object(m.a)(this,e),this.quantity=i;var c=Q.getItemDetails(t),a=c.title,n=c.price,s=c.smallImageUrl,r=c.largeImageUrl;this.title=a,this.price=n,this.smallImageUrl=s,this.largeImageUrl=r,this.id=t}return Object(T.a)(e,[{key:"getSubtotal",value:function(){return this.price*this.quantity}}]),e}(),_=function(e){var t=null;return H.forEach((function(i){i.id===e&&(t=i)})),t},z=function(e){var t=!1;return H.forEach((function(i){i.id===e&&(t=!0)})),t},M={incrementItem:function(e){z(e)?_(e).quantity+=1:H.push(new $(e,1));P.emit(G,null)},decrementItem:function(e){var t=_(e);if(t.quantity-=1,0===t.quantity){var i=H.indexOf(t);H.splice(i,1)}P.emit(G,null)},changeItemQuantity:function(e,t){if(0===t&&z(e)){var i=_(e),c=H.indexOf(i);H.splice(c,1),P.emit(G,null)}if(t>0){if(z(e))_(e).quantity=t;else H.push(new $(e,t));P.emit(G,null)}},getTotalCost:function(){var e=0;return H.forEach((function(t){e+=t.getSubtotal()})),e},getShoppingCartItems:function(){var e=[];return H.forEach((function(t){e.push(Object(o.a)({},t))})),e}};var B=function(){var e=Object(u.f)().id,t=function(e){var t=Q.getItemDetails(e);return{id:e,title:t.title,price:t.price,largeImageUrl:t.largeImageUrl}}(Number(e)),i=t.title,a=t.price,n=t.largeImageUrl;return Object(c.jsxs)("div",{className:"item-page",children:[Object(c.jsx)("img",{src:n,alt:i}),Object(c.jsxs)("div",{className:"item-details",children:[Object(c.jsx)("h3",{children:i}),Object(c.jsx)("div",{className:"item-page-price",children:"$".concat(a)}),Object(c.jsx)("button",{type:"button",onClick:function(){M.incrementItem(Number(e))},className:"add-to-cart",children:"Add to Cart"}),Object(c.jsxs)(l.b,{to:"/supplies",children:[Object(c.jsx)("i",{className:"fas fa-chevron-left"}),Object(c.jsx)("span",{children:"Back to Supplies"})]})]})]})},J=i(16);var R=function(e){var t=e.title,i=e.price,a=e.quantity,n=e.image;return Object(c.jsxs)("div",{className:"cart-item",children:[Object(c.jsx)("img",{src:n,alt:""}),Object(c.jsxs)("div",{className:"item-details",children:[Object(c.jsxs)("div",{className:"row-1",children:[Object(c.jsx)("h4",{children:t}),Object(c.jsx)("div",{className:"price",children:"$".concat(i)})]}),Object(c.jsxs)("div",{className:"quantity-container",children:[Object(c.jsx)("button",{onClick:function(t){e.onQuantityDecrement()},type:"button",className:"decrement",children:"\u2212"}),Object(c.jsx)("input",{onChange:function(t){var i=t.target.value,c=Number(i);NaN!==c&&e.onQuantityChange(c)},className:"quantity",value:a,type:"tel"}),Object(c.jsx)("button",{onClick:function(t){e.onQuantityIncrement()},type:"button",className:"increment",children:"+"})]})]})]})};i(38);var V=function(){var e=function(){var e=Object(a.useState)([]),t=Object(J.a)(e,2),i=t[0],c=t[1],n=Object(a.useState)(0),s=Object(J.a)(n,2),r=s[0],l=s[1],u=function(){c(M.getShoppingCartItems()),l(M.getTotalCost())};Object(a.useEffect)((function(){u()}),[]);var j=M.incrementItem,o=M.decrementItem,m=M.changeItemQuantity;return P.on("SHOPPING_CART_UPDATED",(function(){u()})),{items:i,totalCost:r,incrementItem:j,decrementItem:o,changeItemQuantity:m}}(),t=e.items,i=e.totalCost,n=e.incrementItem,s=e.decrementItem,r=e.changeItemQuantity,l=t.map((function(e){var t=e.id,i=e.title,a=e.price,l=e.quantity,u=e.smallImageUrl;return Object(c.jsx)(R,{title:i,price:a,quantity:l,image:u,onQuantityChange:function(e){return function(e,t){r(e,t)}(t,e)},onQuantityIncrement:function(){return function(e){n(e)}(t)},onQuantityDecrement:function(){return function(e){s(e)}(t)}},t)}));return Object(c.jsxs)("div",{className:"cart-page",children:[Object(c.jsx)("h3",{children:"Your Shopping Cart"}),Object(c.jsxs)("div",{className:"page-items",children:[Object(c.jsx)("div",{className:"items-container",children:l}),Object(c.jsxs)("div",{className:"subtotal",children:[Object(c.jsx)("span",{children:"Subtotal: "}),Object(c.jsx)("span",{className:"subtotal-figure",children:"$".concat(i)})]}),Object(c.jsx)("button",{onClick:function(){alert("Thank you for shopping!")},type:"button",className:"checkout",children:"CHECKOUT"})]})]})};i(39);var W=function(){return Object(c.jsxs)("div",{className:"home-page",children:[Object(c.jsx)("h2",{children:"Essential COVID-19 Supplies"}),Object(c.jsx)(l.b,{to:"/supplies",children:"Get Your Supplies"})]})};var Y=function(e){var t=e.image,i=e.title,a=e.price,n=e.id;return Object(c.jsxs)("div",{className:"item-description",children:[Object(c.jsx)(l.b,{to:"/supplies/".concat(n),children:Object(c.jsx)("img",{src:t,alt:"".concat(i)})}),Object(c.jsx)(l.b,{to:"/supplies/".concat(n),children:Object(c.jsx)("h3",{children:i})}),Object(c.jsx)("div",{className:"item-description-price",children:"$".concat(a)})]})};i(40);var F=function(){var e=function(){var e=Q.getAllItemDetails(),t=[];return e.forEach((function(e){var i=e.id,c=e.title,a=e.price,n=e.smallImageUrl;t.push({id:i,title:c,price:a,smallImageUrl:n})})),t}().map((function(e){var t=e.id,i=e.title,a=e.price,n=e.smallImageUrl;return Object(c.jsx)(Y,{image:n,title:i,price:a,id:t},t)}));return Object(c.jsx)("div",{className:"supplies-page",children:Object(c.jsx)("div",{className:"items-container",children:e})})};var K=function(){return Object(c.jsxs)(l.a,{children:[Object(c.jsx)(j,{}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/",exact:!0,children:Object(c.jsx)(W,{})}),Object(c.jsx)(u.a,{path:"/supplies",exact:!0,children:Object(c.jsx)(F,{})}),Object(c.jsx)(u.a,{path:"/supplies/:id",exact:!0,children:Object(c.jsx)(B,{})}),Object(c.jsx)(u.a,{path:"/cart",exact:!0,children:Object(c.jsx)(V,{})})]})]})};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(K,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.58d1fe76.chunk.js.map