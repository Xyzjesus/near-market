(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{159:function(e,t,n){},168:function(e,t){},178:function(e,t){},196:function(e,t){},227:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(148),s=n(19),o=n(37),i=n(7),l=n(238),j=n(242),u=(n(159),n(240)),d=n(235),b=n(245),x=n(1),O=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(u.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(x.jsxs)(x.Fragment,{children:[n," ",Object(x.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(x.jsx)(d.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(x.jsxs)(u.a.Menu,{className:"shadow-lg border-0",children:[Object(x.jsx)(u.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(x.jsxs)(b.a,{direction:"horizontal",gap:2,children:[Object(x.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(x.jsx)("span",{className:"font-monospace",children:t})]})}),Object(x.jsx)(u.a.Divider,{}),Object(x.jsxs)(u.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(x.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},h=n(60),p=(n(163),function(){return Object(x.jsx)(h.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),m=function(e){var t=e.text;return Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(x.jsx)("span",{className:"text-secondary mx-1",children:t})]})},f=function(e){var t=e.text;return Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(x.jsx)("span",{className:"text-secondary mx-1",children:t})]})},g={text:""};m.defaultProps=g,f.defaultProps=g;var w=n(2),v=n(149),y=n(239),N=n(241),C=n(151),k=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),j=l[0],u=l[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),O=b[0],h=b[1],p=Object(c.useState)(""),m=Object(i.a)(p,2),f=m[0],g=m[1],w=Object(c.useState)(0),k=Object(i.a)(w,2),S=k[0],I=k[1],P=Object(c.useState)(!1),F=Object(i.a)(P,2),T=F[0],E=F[1],U=function(){return E(!1)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v.a,{onClick:function(){return E(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(x.jsx)("i",{class:"bi bi-plus"})}),Object(x.jsxs)(y.a,{show:T,onHide:U,centered:!0,children:[Object(x.jsx)(y.a.Header,{closeButton:!0,children:Object(x.jsx)(y.a.Title,{children:"New Product"})}),Object(x.jsx)(N.a,{children:Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)(C.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(x.jsx)(N.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of product"})}),Object(x.jsx)(C.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(x.jsx)(N.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){u(e.target.value)}})}),Object(x.jsx)(C.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(x.jsx)(N.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){h(e.target.value)}})}),Object(x.jsx)(C.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(x.jsx)(N.a.Control,{type:"text",placeholder:"Location",onChange:function(e){g(e.target.value)}})}),Object(x.jsx)(C.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(x.jsx)(N.a.Control,{type:"text",placeholder:"Price",onChange:function(e){I(e.target.value)}})})]})}),Object(x.jsxs)(y.a.Footer,{children:[Object(x.jsx)(v.a,{variant:"outline-secondary",onClick:U,children:"Close"}),Object(x.jsx)(v.a,{variant:"dark",disabled:!(r&&j&&O&&f&&S),onClick:function(){t({name:r,image:j,description:O,location:f,price:S}),U()},children:"Save product"})]})]})]})},S=n(59),I=n(150),P=n(244),F=n(236),T=function(e){var t=e.product,n=e.buy,c=t.id,a=t.price,r=t.name,s=t.description,o=t.sold,i=t.location,l=t.image,j=t.owner;return Object(x.jsx)(I.a,{children:Object(x.jsxs)(P.a,{className:" h-100",children:[Object(x.jsx)(P.a.Header,{children:Object(x.jsxs)(b.a,{direction:"horizontal",gap:2,children:[Object(x.jsx)("span",{className:"font-monospace text-secondary",children:j}),Object(x.jsxs)(F.a,{bg:"secondary",className:"ms-auto",children:[o," Sold"]})]})}),Object(x.jsx)("div",{className:" ratio ratio-4x3",children:Object(x.jsx)("img",{src:l,alt:r,style:{objectFit:"cover"}})}),Object(x.jsxs)(P.a.Body,{className:"d-flex  flex-column text-center",children:[Object(x.jsx)(P.a.Title,{children:r}),Object(x.jsx)(P.a.Text,{className:"flex-grow-1 ",children:s}),Object(x.jsx)(P.a.Text,{className:"text-secondary",children:Object(x.jsx)("span",{children:i})}),Object(x.jsxs)(v.a,{variant:"outline-dark",onClick:function(){n(c,a)},className:"w-100 py-3",children:["Buy for ",S.utils.format.formatNearAmount(a)," NEAR"]})]})]})},c)},E=function(){return Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(d.a,{animation:"border",role:"status",className:"opacity-25",children:Object(x.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},U=n(237),A=n(243),B=n(75),L=1e14;function R(e){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(Object(s.a)().mark((function e(t){var n,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,c=t.price,e.next=3,window.contract.buyProduct({productId:n},L,c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),l=Object(i.a)(r,2),j=l[0],u=l[1],d=Object(c.useCallback)(Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.t0=a,e.next=5,window.contract.getStaff();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),b=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{u(!0),(n=t,n.id=Object(A.a)(),n.price=Object(B.parseNearAmount)(n.price+""),window.contract.setProduct({product:n})).then((function(e){d()})),Object(h.b)(Object(x.jsx)(m,{text:"Product added successfully."}))}catch(c){console.log({error:c}),Object(h.b)(Object(x.jsx)(f,{text:"Failed to create a product."}))}finally{u(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t,n){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R({id:t,price:n}).then((function(e){return d()}));case 3:Object(h.b)(Object(x.jsx)(m,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(h.b)(Object(x.jsx)(f,{text:"Failed to purchase product."}));case 9:return e.prev=9,u(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[]),Object(x.jsx)(x.Fragment,{children:j?Object(x.jsx)(E,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(x.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Beautiful Shroomessa"}),Object(x.jsx)(k,{save:b})]}),Object(x.jsx)(U.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(x.jsx)(T,{product:Object(w.a)({},e),buy:O})}))})]})})},H=Object({NODE_ENV:"production",PUBLIC_URL:"/near-market",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"just.gethigh.testnet";var W=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:H,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:H,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}}("testnet");function M(){return(M=Object(o.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.connect)(Object.assign({deps:{keyStore:new S.keyStores.BrowserLocalStorageKeyStore}},W));case 2:t=e.sent,window.walletConnection=new S.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new S.Contract(window.walletConnection.account(),W.contractName,{viewMethods:["getProduct","getStaff"],changeMethods:["buyProduct","setProduct"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return z.apply(this,arguments)}function z(){return(z=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=B.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){window.walletConnection.requestSignIn(W.contractName)}function q(){window.walletConnection.signOut(),window.location.reload()}var V=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(x.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(x.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(x.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(x.jsx)("img",{src:c,alt:""})}),Object(x.jsx)("h1",{children:t}),Object(x.jsx)("p",{children:"Please connect your wallet to continue."}),Object(x.jsx)(v.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(x.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};V.defaultProps={name:""};var G=V,Q=n.p+"static/media/shroomessa.8c77871e.png",X=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(i.a)(t,2),a=n[0],r=n[1],u=Object(c.useCallback)(Object(o.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,K();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){u()}),[u]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p,{}),e.accountId?Object(x.jsxs)(l.a,{fluid:"md",children:[Object(x.jsx)(j.a,{className:"justify-content-end pt-3 pb-5",children:Object(x.jsx)(j.a.Item,{children:Object(x.jsx)(O,{address:e.accountId,amount:a,symbol:"NEAR",destroy:q})})}),Object(x.jsx)("main",{children:Object(x.jsx)(D,{})})]}):Object(x.jsx)(G,{name:"Beautiful Shroomessa",login:J,coverImg:Q})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},Z=(n(228),n(225),n(226),document.getElementById("root")),$=Object(r.createRoot)(Z);window.nearInitPromise=function(){return M.apply(this,arguments)}().then((function(){$.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(X,{})}))})).catch(console.error),Y()}},[[227,1,2]]]);
//# sourceMappingURL=main.2723bde4.chunk.js.map