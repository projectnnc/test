(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[967],{54268:(e,t,s)=>{Promise.resolve().then(s.bind(s,76463))},76463:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var a=s(95155),r=s(12115),l=s(52316),n=s(50286),i=s(48808);function c(e){let{isOpen:t,onClose:s}=e,[n,c]=(0,r.useState)(""),[d,o]=(0,r.useState)(""),[x,p]=(0,r.useState)(""),[m,u]=(0,r.useState)(!1),{walletInfo:h,createOrder:g}=(0,i.v)(),[b,f]=(0,r.useState)(null),[N,j]=(0,r.useState)(!1),[y,w]=(0,r.useState)(""),v=(0,r.useRef)(null),k=(e,t)=>{f({type:e,message:t}),setTimeout(()=>f(null),5e3)},S=async e=>{if(e.preventDefault(),!h){k("error","Please connect wallet");return}u(!0);try{await g(n,l.g5(d),l.g5(x)),s(),k("success","Order created successfully! \uD83C\uDF89")}catch(e){k("error",e.message.includes("user rejected")?"Transaction was rejected":e.message.includes("Insufficient balance")?"Insufficient balance":e.message.includes("Amount > 0")?"Amount must be greater than 0":e.message.includes("Price > 0")?"Price must be greater than 0":"Failed to create: "+e.message)}finally{u(!1)}};return((0,r.useEffect)(()=>{function e(e){v.current&&!v.current.contains(e.target)&&j(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,r.useEffect)(()=>{t&&(c(""),o(""),p(""))},[t]),t)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50 p-4 ".concat(t?"visible":"invisible"),children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ".concat(t?"opacity-100":"opacity-0"),onClick:s}),(0,a.jsxs)("div",{className:"\n        relative w-full max-w-md transform transition-all duration-300\n        bg-gradient-to-br from-white/90 via-purple-50/80 to-indigo-50/70 \n        backdrop-blur-sm rounded-xl shadow-lg border border-white/20\n        ".concat(t?"scale-100 opacity-100":"scale-95 opacity-0","\n      "),children:[(0,a.jsx)("button",{onClick:s,className:"absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors",children:(0,a.jsx)("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),(0,a.jsx)("div",{className:"p-6 pb-0",children:(0,a.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"List Token"})}),(0,a.jsxs)("form",{onSubmit:S,className:"p-6 pt-4 space-y-4",children:[(0,a.jsxs)("div",{className:"mb-4",ref:v,children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Tick"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{type:"text",value:y,onChange:e=>{w(e.target.value),j(!0)},onClick:()=>{j(!0)},className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Search tick..."})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Price (BNB)"}),(0,a.jsx)("input",{type:"number",step:"0.000000000000000001",value:d,onChange:e=>o(e.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Enter price in BNB",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Amount"}),(0,a.jsx)("input",{type:"number",step:"0.000000000000000001",value:x,onChange:e=>p(e.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Enter amount",required:!0})]}),(0,a.jsx)("button",{type:"submit",disabled:m,className:"w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all disabled:opacity-50",children:m?(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)("div",{className:"w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"}),"Creating..."]}):"Create Order"})]})]})]}),b&&(0,a.jsx)("div",{className:"fixed top-4 right-4 z-50",children:(0,a.jsxs)("div",{className:"\n            px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm\n            flex items-center gap-2 min-w-[200px]\n            ".concat("error"===b.type?"bg-red-500/80 text-white":"bg-green-500/80 text-white","\n          "),children:["error"===b.type?(0,a.jsx)("svg",{className:"w-4 h-4 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}):(0,a.jsx)("svg",{className:"w-4 h-4 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,a.jsx)("p",{className:"text-sm font-medium",children:b.message})]})})]}):null}s(62870);let{formatUnits:d,parseUnits:o,ethers:x}=s(51070),{formatUnits:p,parseUnit:m}=s(51070);function u(){let[e,t]=(0,r.useState)([]),[s,d]=(0,r.useState)(!1),[o,x]=(0,r.useState)(""),[p,m]=(0,r.useState)("trade"),[u,h]=(0,r.useState)(!1),[g,b]=(0,r.useState)(""),[f,N]=(0,r.useState)([]),{walletInfo:j,getTokenOrders:y,getUserOrders:w,getActiveTokenOrders:v,cancelOrder:k,fillOrder:S,getTokenOrdersCount:C}=(0,i.v)(),[L,T]=(0,r.useState)([]),[B,E]=(0,r.useState)([]),[M,z]=(0,r.useState)([]),[P,F]=(0,r.useState)(null),[I,D]=(0,r.useState)(null),[O,A]=(0,r.useState)(!1),[R,_]=(0,r.useState)(""),U=(0,r.useRef)(null),[V,Y]=(0,r.useState)(1),[$,q]=(0,r.useState)(!1),[H,J]=(0,r.useState)(!1),[K]=(0,r.useState)(new Map),W={LISTED:0,CANCELLED:1,SOLD:2},[X,Z]=(0,r.useState)(0),[G,Q]=(0,r.useState)([]),[ee,et]=(0,r.useState)(!0),[es,ea]=(0,r.useState)(""),er=async()=>{try{let e=await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"),t=await e.json();Z(parseFloat(t.price))}catch(e){ej("error","The region is not accessible")}},el=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(Number(e)){case W.LISTED:return{text:"Listed",className:"bg-blue-100 text-blue-700"};case W.CANCELLED:return{text:"Cancelled",className:"bg-gray-100 text-gray-700"};case W.SOLD:return{text:t?"Sold":"Bought",className:t?"bg-green-100 text-green-700":"bg-purple-100 text-purple-700"};default:return{text:"Unknown",className:"bg-gray-100 text-gray-700"}}},en=e=>{switch(Number(e)){case W.LISTED:return{text:"Listed",className:"bg-blue-100 text-blue-700"};case W.CANCELLED:return{text:"Cancelled",className:"bg-gray-100 text-gray-700"};case W.SOLD:return{text:"Sold",className:"bg-green-100 text-green-700"};default:return{text:"Unknown",className:"bg-gray-100 text-gray-700"}}},[ei,ec]=(0,r.useState)(1),[ed,eo]=(0,r.useState)(1),[ex,ep]=(0,r.useState)(1),[em,eu]=(0,r.useState)(1);(0,r.useEffect)(()=>{g&&"trade"===p&&eh()},[g,"trade"===p]),(0,r.useEffect)(()=>{g&&"activities"===p&&eg()},[g,"activities"===p,ei]),(0,r.useEffect)(()=>{"my"===p&&j&&ef()},[p,j]),(0,r.useEffect)(()=>{function e(e){U.current&&!U.current.contains(e.target)&&(A(!1),_(g))}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[g]);let eh=async()=>{try{if(d(!0),"trade"===p){let e=await C(g),s=["https://bnb-testnet.g.alchemy.com/v2/bzv6dBzoDK0FdfOwt2CO4yjJPuYKwMC2"],a=Math.ceil(e/40),r=Math.ceil(e/a),n=0,i=[];for(let e=0;e<r;e++){let t=s.length;i.push(v(g,e,a,s[n])),++n>=t&&(n=0)}let c=await Promise.all(i),d=[];c.forEach(e=>{d=[...d,...e[0]]}),d.length>0&&Number(d[0].price)>0&&await er(),K.clear(),d.forEach(e=>{if(Number(e.status)===W.LISTED){let t="".concat(e.timestamp,"-").concat(e.seller);K.set(t,e.tradeIndex)}});let o=[...d].filter(e=>""!==e.tick).sort((e,t)=>Number(l.ck(e.price))-Number(l.ck(t.price)));t(o)}}catch(e){}finally{d(!1)}},eg=async()=>{try{d(!0);let e=await y(g,ei,15);E(e.orders),eo(e.totalPages)}catch(e){E([])}finally{d(!1)}},eb=async()=>{"trade"===p?await eh():"activities"===p&&await eg()},ef=async()=>{try{let e=await w(j.address,g);z(e),eu(Math.ceil(e.length/15))}catch(e){}},eN=e=>{try{let t=e.toFixed(18),s=l.XS(t,18),a=Number(l.Js(s,18));if(a<1e-4)return"<0.0001 BNB";return a.toFixed(4).replace(/\.?0+$/,"")+" BNB"}catch(e){return"0 BNB"}},ej=(e,t)=>{D({type:e,message:t}),setTimeout(()=>D(null),5e3)},ey=async(t,s)=>{if(!j){ej("error","Please connect wallet first");return}try{let s="".concat(t.timestamp,"-").concat(t.seller),a=K.get(s);if(void 0===a)throw Error("Order index not found");F(a);let r=t.price,l=t.amount,n=BigInt(r)*(BigInt(l)/BigInt(1e18));await S(a,t.tick,{value:n.toString()}),await eb();let i=eB(e).filter(e=>Number(e.status)===W.LISTED);0===i.length&&V>1&&Y(e=>e-1),ej("success","Order filled successfully!")}catch(e){ej("error",e.message.includes("user rejected")?"Transaction was rejected":e.message.includes("Not list")?"The order has been closed. Please refresh the page":e.message.includes("IPA")?"Incorrect payment amount":"Failed to buy")}finally{F(null)}},ew=async(e,t)=>{if(!j){ej("Please connect wallet first","error");return}try{let s=(V-1)*20,a=M.length-1-(s+t);await k(e.tick,a),await eb(),await ef(),ej("success","Order cancelled successfully!")}catch(e){ej("error",e.message.includes("user rejected")?"Transaction was rejected":e.message.includes("Not list")?"The order has been closed. Please refresh the page":e.message.includes("Not owner")?"Not order owner":"Failed to cancel: "+e.message)}},ev=e=>{d(!0),m(e),Y(1),setTimeout(()=>{g||"my"===e?eb():d(!1)},50)},ek=e=>{let t;if("string"==typeof e&&e.includes("e")){let s=e.split("e");t=parseFloat(s[0])*Math.pow(10,parseInt(s[1]))}else t=Number(e);if(t>=1e24)return"".concat((t/1e24).toFixed(0),"Y");if(t>=1e21)return"".concat((t/1e21).toFixed(0),"Z");if(t>=1e18)return"".concat((t/1e18).toFixed(0),"E");if(t>=1e15)return"".concat((t/1e15).toFixed(0),"P");if(t>=1e12)return"".concat((t/1e12).toFixed(0),"T");if(t>=1e9)return"".concat((t/1e9).toFixed(0),"B");if(t>=1e6)return"".concat((t/1e6).toFixed(0),"M");else return t.toLocaleString()},eS=t=>{let s=G.find(e=>e.tick===t),a=e.filter(e=>e.tick===t&&Number(e.status)===W.LISTED);return{floorPrice:(a.length>0?Math.min(...a.map(e=>Number(l.ck(e.price)))):0).toString(),owners:(null==s?void 0:s.Holders)||0,sales:a.length,supply:ek((null==s?void 0:s.Supply)||0),totalVolume:(null==s?void 0:s.totalVolume)||0}},eC={total:"w-[150px]"};(0,r.useEffect)(()=>{let e=()=>{q(window.innerWidth<768)};e(),window.addEventListener("resize",e);let t=()=>{J(window.pageYOffset>300)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",t)}},[]);let eL=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{if(window.pageYOffset<=0)return;requestAnimationFrame(()=>{if(e)window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;else{window.scrollTo({top:0,behavior:"smooth"});let e=setInterval(()=>{let t=window.pageYOffset;0===t&&clearInterval(e)},100)}})}catch(e){document.documentElement.scrollTop=0,document.body.scrollTop=0}},eT=function(e,t){let s=!(arguments.length>2)||void 0===arguments[2]||arguments[2];s&&window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{1===t?(e(t),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},50)):e(t)},10)},eB=e=>{if("my"===p){let t=(ex-1)*15;return e.slice(t,t+15)}if($&&"my"!==p)return e;let t=(V-1)*20;return e.slice(t,t+20)},eE=()=>{switch(p){case"trade":return e;case"activities":return B;case"my":return M;default:return[]}};return(0,r.useEffect)(()=>{"activities"===p?ec(1):"my"===p?ep(1):Y(1)},[g,p]),(0,r.useMemo)(()=>G&&Array.isArray(G)?G.map(e=>({value:e.tick,label:e.tick})):[],[G]),(0,a.jsxs)("div",{className:"min-h-screen font-['Comic_Neue'] relative overflow-hidden",children:[(0,a.jsx)("div",{className:"fixed inset-0 bg-gradient-to-br from-slate-50/90 via-purple-50/90 to-blue-50/90"}),(0,a.jsx)("div",{className:"fixed inset-0 bg-[linear-gradient(rgba(120,119,198,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(120,119,198,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"}),(0,a.jsx)(n.default,{}),(0,a.jsxs)("main",{className:"container mx-auto px-4 py-8 relative",children:[(0,a.jsxs)("div",{className:"flex items-center gap-6 mb-6 md:flex-row flex-col",children:[(0,a.jsxs)("div",{className:"flex w-full md:w-auto items-center gap-4",children:[(0,a.jsxs)("div",{className:"w-48 relative",ref:U,children:[(0,a.jsx)("div",{className:"w-full bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-purple-100 cursor-pointer h-9",onClick:()=>{A(!0),_("")},children:(0,a.jsxs)("div",{className:"flex items-center h-full px-3",children:[O?(0,a.jsx)("input",{type:"text",value:R,onChange:e=>_(e.target.value),className:"flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm h-full",placeholder:"Search token...",autoFocus:!0}):(0,a.jsx)("div",{className:"flex items-center gap-2 flex-1",children:(0,a.jsx)("span",{className:"text-purple-600 font-medium text-sm truncate",children:g})}),(0,a.jsx)("svg",{className:"w-4 h-4 text-gray-400 flex-shrink-0",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})}),O&&(0,a.jsx)("div",{className:"absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-purple-100 max-h-60 overflow-auto",children:G.map(e=>"object"==typeof e?e.tick:e).filter(e=>e.toLowerCase().includes(R.toLowerCase())).map(e=>(0,a.jsx)("div",{className:"px-4 py-2 cursor-pointer hover:bg-purple-50 flex items-center gap-2 ".concat(g===e?"bg-purple-50":""),onClick:()=>{b(e),_(e),A(!1)},children:(0,a.jsx)("span",{className:"text-purple-600 font-medium text-sm",children:e})},e))})]}),(0,a.jsx)("button",{onClick:()=>h(!0),className:"ml-auto px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg transition-all text-sm font-medium shadow-lg hover:shadow-purple-500/25 hover:opacity-90 whitespace-nowrap",children:"List Token"})]}),g&&(0,a.jsxs)("div",{className:"md:flex hidden items-center gap-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Floor:"}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("svg",{className:"w-4 h-4 text-purple-600",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"})}),(0,a.jsxs)("span",{className:"font-medium text-purple-600",children:[eS(g).floorPrice," BNB"]})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Unit Price:"}),(0,a.jsxs)("span",{className:"font-medium text-purple-600",children:["$ ",Number(eS(g).floorPrice)>0?(Number(eS(g).floorPrice)*X).toFixed(4):"0"]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Total Volume:"}),(0,a.jsxs)("span",{className:"font-medium text-purple-600",children:[eS(g).totalVolume," BNB"]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Owners:"}),(0,a.jsx)("span",{className:"font-medium text-purple-600",children:eS(g).owners})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Sales:"}),(0,a.jsx)("span",{className:"font-medium text-purple-600",children:eS(g).sales})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Supply:"}),(0,a.jsx)("span",{className:"font-medium text-purple-600",children:eS(g).supply})]})]}),g&&(0,a.jsx)("div",{className:"md:hidden flex text-xs w-full",children:(0,a.jsxs)("div",{className:"flex flex-wrap gap-x-3 gap-y-1",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Floor:"}),(0,a.jsxs)("div",{className:"flex items-center gap-0.5",children:[(0,a.jsx)("svg",{className:"w-3 h-3 text-purple-600",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"})}),(0,a.jsxs)("span",{className:"font-medium text-purple-600",children:[eS(g).floorPrice," BNB"]})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Unit Price:"}),(0,a.jsxs)("span",{className:"font-medium text-purple-600",children:["$ ",Number(eS(g).floorPrice)>0?(Number(eS(g).floorPrice)*X).toFixed(2):"0"]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Total Volume:"}),(0,a.jsxs)("span",{className:"font-medium text-purple-600",children:[eS(g).totalVolume," BNB"]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Owners:"}),(0,a.jsx)("span",{className:"font-medium text-purple-600",children:eS(g).owners})]}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Sales:"}),(0,a.jsx)("span",{className:"font-medium text-purple-600",children:eS(g).sales})]}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"text-gray-500",children:"Supply:"}),(0,a.jsx)("span",{className:"font-medium text-purple-600",children:eS(g).supply})]})]})})]}),(0,a.jsx)("div",{className:"flex md:justify-start justify-center mb-6 overflow-x-auto pb-2 whitespace-nowrap",children:(0,a.jsxs)("div",{className:"flex gap-8",children:[(0,a.jsx)("button",{className:"px-4 py-2 rounded-lg transition-all ".concat("trade"===p?"bg-gradient-to-r from-purple-600 to-indigo-600 text-white":"text-gray-600 hover:bg-gray-100"),onClick:()=>ev("trade"),children:"Trade"}),(0,a.jsx)("button",{className:"px-4 py-2 rounded-lg transition-all ".concat("activities"===p?"bg-gradient-to-r from-purple-600 to-indigo-600 text-white":"text-gray-600 hover:bg-gray-100"),onClick:()=>ev("activities"),children:"Activities"}),(0,a.jsx)("button",{className:"px-4 py-2 rounded-lg transition-all ".concat("my"===p?"bg-gradient-to-r from-purple-600 to-indigo-600 text-white":"text-gray-600 hover:bg-gray-100"),onClick:()=>ev("my"),children:"My Orders"})]})}),s?(0,a.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,a.jsx)("div",{className:"flex justify-center items-center py-8",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"})}),(0,a.jsx)("p",{className:"text-center text-gray-500",children:"Loading..."}),"trade"===p&&(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",children:[...Array(15)].map((e,t)=>(0,a.jsxs)("div",{className:"bg-white/50 rounded-xl shadow-sm p-4 animate-pulse",children:[(0,a.jsx)("div",{className:"h-6 bg-gray-200 rounded w-1/2 mb-4"}),(0,a.jsx)("div",{className:"h-4 bg-gray-200 rounded w-3/4 mb-2"}),(0,a.jsx)("div",{className:"h-4 bg-gray-200 rounded w-full mb-2"}),(0,a.jsx)("div",{className:"h-4 bg-gray-200 rounded w-2/3 mb-4"}),(0,a.jsx)("div",{className:"h-8 bg-gray-200 rounded w-full"})]},"skeleton-".concat(t)))})]}):"trade"===p?(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",children:eB(e).filter(e=>Number(e.status)===W.LISTED).map((e,t)=>(0,a.jsxs)("div",{className:"bg-gradient-to-br from-white/90 via-purple-50/80 to-indigo-50/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center p-3 bg-gradient-to-r from-purple-100/50 to-indigo-100/50",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-base font-bold",children:e.tick}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("svg",{className:"w-3 h-3 text-purple-600",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"})}),(0,a.jsx)("span",{className:"bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-sm",children:"Sell"})]})]}),(0,a.jsxs)("div",{className:"p-3",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1 mb-3",children:[(0,a.jsxs)("div",{className:"text-lg text-gray-500",children:["Amount: ",(0,a.jsx)("span",{className:"bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent",children:l.ck(e.amount)})]}),(0,a.jsxs)("div",{className:"text-xs text-gray-500",children:["Price: ",(0,a.jsxs)("span",{className:"bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent",children:[l.ck(e.price)," BNB/token"]})]}),(0,a.jsxs)("div",{className:"text-xs text-gray-500",children:["Seller: ",(0,a.jsxs)("span",{className:"bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent",children:[e.seller.slice(0,6),"...",e.seller.slice(-4)]})]})]}),(0,a.jsxs)("div",{className:"flex justify-between mb-3",children:[(0,a.jsxs)("div",{className:"text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-2",children:[(0,a.jsx)("img",{src:"/bnb.png",alt:"ETH",className:"w-5 h-5"}),eN(Number(l.ck(e.price))*Number(l.ck(e.amount)))]}),(0,a.jsxs)("div",{className:"text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent",children:["$ ",(Number(l.ck(e.price))*Number(l.ck(e.amount))*X).toFixed(2)]})]}),(0,a.jsx)("button",{onClick:()=>ey(e,e.originalIndex),disabled:e.seller===(null==j?void 0:j.address)||P===e.originalIndex,className:"w-full py-1.5 px-3 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg text-sm ".concat(e.seller===(null==j?void 0:j.address)?"opacity-50 cursor-not-allowed":P===e.originalIndex?"opacity-80":"hover:opacity-90 hover:shadow-purple-500/25"),children:P===e.originalIndex?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),(0,a.jsx)("span",{children:"Buying..."})]}):e.seller===(null==j?void 0:j.address)?"Your Order":"Buy Now"})]})]},"trade-".concat(e.timestamp,"-").concat(e.seller,"-").concat(t)))}):"activities"===p?(0,a.jsx)("div",{className:"bg-gradient-to-br from-white/90 via-purple-50/80 to-indigo-50/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden",children:(0,a.jsx)("div",{className:"overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent",children:(0,a.jsx)("div",{className:"min-w-[800px]",children:(0,a.jsxs)("table",{className:"w-full",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-slate-200/50 h-12",children:[(0,a.jsx)("th",{className:"w-1/8 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Tick"}),(0,a.jsx)("th",{className:"w-1/8 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Price"}),(0,a.jsx)("th",{className:"w-1/8 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Amount"}),(0,a.jsx)("th",{className:"w-1/8 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Total"}),(0,a.jsx)("th",{className:"w-1/8 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Status"}),(0,a.jsx)("th",{className:"w-1/8 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Seller"}),(0,a.jsx)("th",{className:"w-1/8 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Buyer"}),(0,a.jsx)("th",{className:"w-1/8 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Create Time"}),(0,a.jsx)("th",{className:"w-1/8 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Trade Time"})]})}),(0,a.jsx)("tbody",{className:"divide-y divide-slate-200/50",children:eB(B).map((e,t)=>(0,a.jsxs)("tr",{className:"hover:bg-slate-50/50 transition-colors h-12",children:[(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(0,a.jsx)("span",{className:"text-purple-600 font-bold",children:e.tick})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsxs)("div",{className:"flex items-center justify-center gap-1",children:[(0,a.jsx)("svg",{className:"w-4 h-4 text-purple-600",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"})}),(0,a.jsxs)("span",{children:[l.ck(e.price)," BNB"]})]})})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:l.ck(e.amount)}),(0,a.jsx)("td",{className:"px-4 py-3 text-center ".concat(eC.total),children:(0,a.jsxs)("div",{className:"flex items-center justify-center gap-1 whitespace-nowrap",children:[(0,a.jsx)("svg",{className:"w-4 h-4 text-purple-600",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"})}),(0,a.jsx)("span",{children:eN(Number(l.ck(e.price))*Number(l.ck(e.amount)))})]})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(()=>{let t=en(e.status);return(0,a.jsx)("span",{className:"px-2.5 py-1 rounded-full text-xs font-medium ".concat(t.className),children:t.text})})()}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(0,a.jsxs)("span",{className:"text-sm text-gray-500",children:[e.seller.slice(0,6),"...",e.seller.slice(-4)]})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:"0x0000000000000000000000000000000000000000"!==e.buyer?(0,a.jsxs)("span",{className:"text-sm text-gray-500",children:[e.buyer.slice(0,6),"...",e.buyer.slice(-4)]}):(0,a.jsx)("span",{className:"text-sm text-gray-500",children:"-"})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(0,a.jsx)("span",{className:"text-xs text-gray-500",children:new Date(1e3*Number(e.timestamp)).toLocaleString()})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:e.tradeTime>0?(0,a.jsx)("span",{className:"text-xs text-gray-500",children:new Date(1e3*Number(e.tradeTime)).toLocaleString()}):(0,a.jsx)("span",{className:"text-xs text-gray-500",children:"-"})})]},"activity-".concat(t)))})]})})})}):(0,a.jsx)("div",{className:"bg-gradient-to-br from-white/90 via-purple-50/80 to-indigo-50/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden",children:(0,a.jsx)("div",{className:"overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent",children:(0,a.jsx)("div",{className:"min-w-[800px]",children:(0,a.jsxs)("table",{className:"w-full",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-slate-200/50 h-12",children:[(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Tick"}),(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Price"}),(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Amount"}),(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Total"}),(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Status"}),(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Seller"}),(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Buyer"}),(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Create Time"}),(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Trade Time"}),(0,a.jsx)("th",{className:"w-1/10 px-6 py-3 text-center text-sm font-semibold text-gray-600",children:"Action"})]})}),(0,a.jsx)("tbody",{className:"divide-y divide-slate-200/50",children:eB(M).map((e,t)=>(0,a.jsxs)("tr",{className:"hover:bg-slate-50/50",children:[(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(0,a.jsx)("span",{className:"text-purple-600 font-bold",children:e.tick})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsxs)("div",{className:"flex items-center justify-center gap-1",children:[(0,a.jsx)("svg",{className:"w-4 h-4 text-purple-600",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"})}),(0,a.jsxs)("span",{children:[l.ck(e.price)," BNB"]})]})})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:l.ck(e.amount)}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(0,a.jsxs)("div",{className:"flex items-center justify-center gap-1",children:[(0,a.jsx)("svg",{className:"w-4 h-4 text-purple-600",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"})}),(0,a.jsx)("span",{children:eN(Number(l.ck(e.price))*Number(l.ck(e.amount)))})]})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(()=>{let t=e.seller.toLowerCase()===(null==j?void 0:j.address.toLowerCase()),s=el(e.status,t);return(0,a.jsx)("span",{className:"px-2.5 py-1 rounded-full text-xs font-medium ".concat(s.className),children:s.text})})()}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(0,a.jsxs)("span",{className:"text-sm text-gray-500",children:[e.seller.slice(0,6),"...",e.seller.slice(-4)]})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:"0x0000000000000000000000000000000000000000"!==e.buyer?(0,a.jsxs)("span",{className:"text-sm text-gray-500",children:[e.buyer.slice(0,6),"...",e.buyer.slice(-4)]}):(0,a.jsx)("span",{className:"text-sm text-gray-500",children:"-"})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:(0,a.jsx)("span",{className:"text-xs text-gray-500",children:new Date(1e3*Number(e.timestamp)).toLocaleString()})}),(0,a.jsx)("td",{className:"px-6 py-3 whitespace-nowrap text-center",children:e.tradeTime>0?(0,a.jsx)("span",{className:"text-xs text-gray-500",children:new Date(1e3*Number(e.tradeTime)).toLocaleString()}):(0,a.jsx)("span",{className:"text-xs text-gray-500",children:"-"})}),(0,a.jsx)("td",{className:"px-6 py-3 text-center",children:Number(e.status)===W.LISTED&&e.seller.toLowerCase()===(null==j?void 0:j.address.toLowerCase())?(0,a.jsx)("button",{onClick:()=>ew(e,t),className:"px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium",disabled:s,children:s?"Cancelling...":"Cancel"}):(0,a.jsx)("span",{className:"text-sm text-gray-500",children:"-"})})]},"my-".concat(t)))})]})})})}),(0,a.jsx)(c,{isOpen:u,onClose:()=>h(!1)}),I&&(0,a.jsx)("div",{className:"fixed top-4 right-4 z-50",children:(0,a.jsxs)("div",{className:"\n              px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm\n              flex items-center gap-2 min-w-[200px]\n              ".concat("error"===I.type?"bg-red-500/80 text-white":"bg-green-500/80 text-white","\n            "),children:["error"===I.type?(0,a.jsx)("svg",{className:"w-4 h-4 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}):(0,a.jsx)("svg",{className:"w-4 h-4 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,a.jsx)("p",{className:"text-sm font-medium",children:I.message})]})}),!s&&"trade"===p&&eE().length>20&&(0,a.jsxs)("div",{className:"mt-4 flex justify-center gap-2 ",children:[(0,a.jsx)("button",{onClick:()=>eT(Y,1),disabled:1===V,className:"px-3 py-1 rounded-lg bg-purple-100 text-purple-600 disabled:opacity-50",children:"First"}),(0,a.jsx)("button",{onClick:()=>eT(Y,Math.max(V-1,1)),disabled:1===V,className:"px-3 py-1 rounded-lg bg-purple-100 text-purple-600 disabled:opacity-50",children:"Previous"}),(0,a.jsxs)("span",{className:"px-4 py-1 text-gray-600",children:["Page ",V," of ",Math.ceil(eE().length/20)]}),(0,a.jsx)("button",{onClick:()=>eT(Y,Math.min(V+1,Math.ceil(eE().length/20))),disabled:V===Math.ceil(eE().length/20),className:"px-3 py-1 rounded-lg bg-purple-100 text-purple-600 disabled:opacity-50",children:"Next"})]}),$&&!s&&H&&"trade"===p&&(0,a.jsx)("button",{onClick:()=>eL(!0),className:"fixed bottom-6 right-6 p-3 rounded-full bg-purple-600/90 text-white shadow-lg hover:bg-purple-700  transition-all z-50 backdrop-blur-sm border border-white/20 animate-bounce","aria-label":"Scroll to top",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})}),"activities"===p&&!s&&B.length>0&&(0,a.jsxs)("div",{className:"mt-4 flex justify-center gap-2 whitespace-nowrap",children:[(0,a.jsx)("button",{onClick:()=>eT(ec,1),disabled:1===ei,className:"px-3 py-1 rounded-lg bg-purple-100 text-purple-600 disabled:opacity-50",children:"First"}),(0,a.jsx)("button",{onClick:()=>eT(ec,Math.max(ei-1,1)),disabled:1===ei,className:"px-3 py-1 rounded-lg bg-purple-100 text-purple-600 disabled:opacity-50",children:"Previous"}),(0,a.jsxs)("span",{className:"px-4 py-1 text-gray-600",children:["Page ",ei," of ",ed]}),(0,a.jsx)("button",{onClick:()=>eT(ec,Math.min(ei+1,ed)),disabled:ei===ed,className:"px-3 py-1 rounded-lg bg-purple-100 text-purple-600 disabled:opacity-50",children:"Next"})]}),"my"===p&&!s&&M.length>15&&(0,a.jsxs)("div",{className:"mt-4 flex justify-center gap-2",children:[(0,a.jsx)("button",{onClick:()=>{1!==ex?eT(ep,1):eL()},disabled:1===ex,className:"px-3 py-1 rounded-lg bg-purple-100 text-purple-600 disabled:opacity-50",children:"First"}),(0,a.jsx)("button",{onClick:()=>{let e=Math.max(ex-1,1);1===e?(eL(),setTimeout(()=>ep(1),50)):eT(ep,e)},disabled:1===ex,className:"px-3 py-1 rounded-lg bg-purple-100 text-purple-600 disabled:opacity-50",children:"Previous"}),(0,a.jsxs)("span",{className:"px-4 py-1 text-gray-600",children:["Page ",ex," of ",em]}),(0,a.jsx)("button",{onClick:()=>eT(ep,Math.min(ex+1,em)),disabled:ex===em,className:"px-3 py-1 rounded-lg bg-purple-100 text-purple-600 disabled:opacity-50",children:"Next"})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[582,619,70,808,286,441,517,358],()=>t(54268)),_N_E=e.O()}]);