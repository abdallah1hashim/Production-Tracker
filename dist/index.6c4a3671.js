const e=async function(e){try{let t=await fetch(e);if(!t.ok)throw Error("faild to fetch data");return await t.json()}catch(e){throw e}};class t{_data;render(e){this._data=e,this._clear();let t=this._generateMarkup();this._parentEl.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentEl.innerHTML=""}}class r extends t{_parentEl=document.querySelector(".widget-con");renderError(){this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",'<p style="color:red">Faild to fetch your data :< Make sure you entered the right date!"</p>')}_generateMarkup(){return`
          <div class="wid">
            <h2 class="wid-heading">Labeler</h2>
            <div class="content">
              <ul class="tabs">
                <li><a class="active" title="SPL" href="#tab1"><i class="fa-solid fa-gauge"></i>SPL</a></li>
                <li><a title="Time" href="#tab2"><i class="fa-solid fa-clock"></i>Hours</i></a></li>
              </ul>
              <div class="tab-content-wrapper">

                <article class="tab-content" id="tab1-content">

                    ${this.generateOptions(this._data.curUserDetails)}
                  

                </article>

                <article class="tab-content" id="tab2-content">
                  <p>Your Hours</p>
                  <h3>0.00</h3>
                </article>
              </div>
            </div>  
          </div>
          <div class="wid">
            <h2 class="wid-heading">Team</h2>
            <div class="content">
              <ul class="tabs">
                <li><a class="active" title="SPL" href="#tab1"><i class="fa-solid fa-gauge"></i>SPL</a></li>
                <li><a title="Time" href="#tab2"><i class="fa-solid fa-clock"></i>Hours</i></a></li>
              </ul>
              <div class="tab-content-wrapper">

                <article class="tab-content" id="tab1-content">
                ${this.generateOptionsForTeam(this._data.curUserDetails)}
                </article>

                <article class="tab-content" id="tab2-content">
                  <p>Your Hours</p>
                  <h3>0.00</h3>
                </article>
              </div>
            </div>  
          </div>
    `}generateOptions(e){return e.spl.map((e,t)=>{if(!(t<7)&&e)return`
        <div class="lap-spl-text">
          <p>${this._data.queues[t]}</p>
          <h3>${(+e).toFixed(3)||"NONE"}</h3>
        </div>
        `}).join("")}generateOptionsForTeam(e){return e.teamspl.map((e,t)=>{if(!(t<3)&&e)return`
        <div class="lap-spl-text">
          <p>${this._data.queues[t+4]}</p>
          <h3>${(+e).toFixed(3)||"NONE"}</h3>
        </div>
        `}).join("")}addHolder(){this._parentEl.insertAdjacentHTML("afterbegin",'<div class="holder"></div>')}}var a=new r;const n={wantedLQ:"",wantedTQ:"",data:[],users:[],teams:"",teamsIndex:{},usersIndex:{},pins:{},names:[],queues:{},curUser:"",teamsData:"",curUserDetails:{name:"",shift:"",location:"",device:"",email:"",team:"",hours:""},day:"",month:""},o=async function(){try{return data=await e("https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Labeler%2015%2F12'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8"),n.data=data.values,data.values.forEach((e,t)=>{if(1===t||2===t)return;let r=e[3],a=e[1].slice(0,8);n.names.push(r),n.users.push(a),n.usersIndex[a]=t}),n.users.map(e=>{n.pins[e]=e.slice(2,6)}),data.values[1].forEach((e,t)=>{t<7||""===e||(n.queues[t]=e)}),console.log(data.values),console.log(n),data}catch(e){console.error(e)}},i=async function(t,r){try{n.day=t,n.month=r;let a=await e(`https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Labeler%20${t}%2F${r}'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`);n.curUserDetails.spl=a.values[n.usersIndex[n.curUser]],console.log(n)}catch(e){console.error(e),a.renderError()}},s=async function(){try{let t=await e("https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Team%2015%2F12'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8");teams=t.values,n.teams=t.values.map(e=>e[1]),n.teams.forEach((e,t)=>{n.teamsIndex[e]={fp:t,qa:t+1}}),console.log(teams),console.log(n)}catch(e){console.error(e)}},c=async function(t,r){try{n.day=t,n.month=r;let a=await e(`https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Team%20${t}%2F${r}'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`);n.teamsData=a.values;let o=n.teams.indexOf(n.curUserDetails.team);console.log(n.teamsData[o]),n.curUserDetails.teamspl=n.teamsData[o]}catch(e){console.error(e)}},l=function(){n.curUserDetails.name=n.data[n.usersIndex[n.curUser]][3],n.curUserDetails.device=n.data[n.usersIndex[n.curUser]][5],n.curUserDetails.location=n.data[n.usersIndex[n.curUser]][6],n.curUserDetails.shift=n.data[n.usersIndex[n.curUser]][4],n.curUserDetails.team=n.data[n.usersIndex[n.curUser]][2],n.curUserDetails.email=n.data[n.usersIndex[n.curUser]][1],console.log(n.curUser)};var u=function(e){var t,r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,a,o){var i,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return n(c,"_invoke",{value:(i=new T(o||[]),s=h,function(r,n){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===r)throw n;return{value:t,done:!0}}for(i.method=r,i.arg=n;;){var o=i.delegate;if(o){var c=function e(r,a){var n=a.method,o=r.iterator[n];if(t===o)return a.delegate=null,"throw"===n&&r.iterator.return&&(a.method="return",a.arg=t,e(r,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=TypeError("The iterator does not provide a '"+n+"' method")),v;var i=d(o,r.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,v;var s=i.arg;return s?s.done?(a[r.resultName]=s.value,a.next=r.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,v):s:(a.method="throw",a.arg=TypeError("iterator result is not an object"),a.delegate=null,v)}(o,i);if(c){if(c===v)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(s===h)throw s=f,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);s=p;var l=d(e,a,i);if("normal"===l.type){if(s=i.done?f:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(s=f,i.method="throw",i.arg=l.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",f="completed",v={};function g(){}function m(){}function y(){}var _={};l(_,i,function(){return this});var w=Object.getPrototypeOf,L=w&&w(w(S([])));L&&L!==r&&a.call(L,i)&&(_=L);var b=y.prototype=g.prototype=Object.create(_);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(r,i){!function r(n,o,i,s){var c=d(e[n],e,o);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,i,s)},function(e){r("throw",e,i,s)}):t.resolve(u).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,s)})}}(n,o,r,i)})}return r=r?r.then(i,i):i()}})}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(null!=e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,s,function(){return this}),e.AsyncIterator=x,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new x(u(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(b),l(b,c,"Generator"),l(b,i,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return s.type="throw",s.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else if(l){if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return(i.type=e,i.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),D(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;D(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:S(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=u}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}class d{_parentEl=document.querySelector(".login");_container=document.querySelector(".overlay");_data;formy;render(e){this._data=e;let t=this._generateMarkup();this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t),this._container.classList="overlay z-pop opacity-100"}_clear(){this._parentEl.innerHTML=""}_generateMarkup(){return`
          <h3>Login</h3>
          <div>
            <input class="log__user" type="text" placeholder="username" />
          </div>
          <div>
            <input class="log__pass" type="password" placeholder="pin" />
          </div>
          <button type="submit" class="log">
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
          <div class="close__login">\u{274C}</div>
          <div class="login__error"></div>
    `}addHandlerRender(e){document.querySelector("nav").addEventListener("click",function(t){t.target.closest(".login-btn")&&e()})}makeDisapear(){this._clear(),this._container.classList="overlay z-drop opacity-0"}renderError(){let e=document.querySelector(".login__error"),t=`
    <p>Icorrect username or password</p>
    `;e.innerHTML="",e.insertAdjacentHTML("beforeend",t)}addHandlerLogin(e){document.addEventListener("DOMContentLoaded",()=>{this._parentEl.addEventListener("submit",t=>{t.preventDefault(),e()})})}addHandlerCloseForm(e){this._container.addEventListener("click",e=>{let t=e.target.closest(".close__login");e.target.closest(".div-con"),t&&(this._clear(),this._container.classList="overlay z-drop opacity-0")})}}var h=new d;class p extends t{_parentEl=document.querySelector(".app .container .info");_generateMarkup(){return`
    <div class="h2-con w-100">
            <h2>User Details</h2>
          </div>
          <div class="details">
            <div class="user-icon">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="personal-info">
              <h3>${this._data.name}</h3>
              <div class="personal-info-text">
                <p>EMAIL: ${this._data.email}</p>
                <p>SHIFT: ${"ON"===this._data.shift?"Over Night":""}</p>
                <p>LOCATION: ${this._data.location}</p>
                <p>TEAM: ${this._data.team}</p>
                <p>DEVICE: ${this._data.device}</p>
              </div>
            </div>
          </div>
    `}makeDark(){document.body.style.backgroundColor="var(--widget-background)"}removeHide(){document.querySelector(".app").classList.remove("hide")}addHide(){document.querySelector(".app").classList.add("hide")}}var f=new p;class v extends t{_parentEl=document.querySelector("main");_generateMarkup(){return`
    <main class="d-flex align-items-center p-0">
      <div class="container">
        <div class="welcome">
          <h1>OverNight Poduction Tracker</h1>
          <div class="img__holder">
            <img src="/assets/pics/8-bTniNGuczY85cuG-removebg.webp" />
          </div>
        </div>
      </div>
    </main>
    `}hideMain(){this._parentEl.classList.add("d-none")}showMain(){this._parentEl.classList.remove("d-none")}}var g=new v;class m extends t{_parentEl=document.querySelector("nav");_generateMarkup(){return`
    <div class="container">
      <p class="greating">Welcome, ${this._data.name.split(" ")[0]}</p>
          <div class="logo">
            
          </div>
      <button class="logout-btn">Logout</button>
    </div>
    `}changeClass(){this._parentEl.classList="nav-app"}renderOriginal(){this._clear();let e=`
    <div class="container">
    <p class="greating">Log in to get started</p>
    <div class="logo">
      <img src="/assets/pics/logo-no-background.webp" alt="logo" />
    </div>
    <button class="login-btn">Login</button>
    <!-- <button class="logout-btn hidden">Logout</button> -->
  </div>
    `;this._parentEl.insertAdjacentHTML("afterbegin",e)}addHandlerLogout(e){this._parentEl.addEventListener("click",t=>{t.target.closest(".logout-btn")&&e()})}}var y=new m;class _ extends t{_parentEl=document.querySelector(".date");getDate(){return{month:+this._parentEl.querySelector("#month").value,day:+this._parentEl.querySelector("#day").value}}addHandlerdate(e){document.querySelector(".search").addEventListener("click",()=>{e()})}}var w=new _;class L{_parenEl=document.querySelector(".footer");makeDisapear(){this._parenEl.innerHTML=""}}var b=new L;const E=async function(){h.render(),n.users.includes(h.userName)&&console.log("user exists")},x=async function(){let e=document.querySelector(".log__user").value.trim(),t=document.querySelector(".log__pass").value;e&&(n.users.includes(e)?(console.log("user is right"),t?t===n.pins[e]?(await o(),await s(),n.curUser=e,l(),g.hideMain(),f.render(n.curUserDetails),f.makeDark(),y.changeClass(),y.render(n.curUserDetails),f.removeHide(),a.addHolder(),b.makeDisapear(),h.makeDisapear()):h.renderError():console.log("enter a valid pin")):h.renderError())},k=async function(){let{month:e,day:t}=w.getDate();await i(t,e),await c(t,e),a.render(n)};h.addHandlerCloseForm(function(){console.log("form closed")}),h.addHandlerRender(E),h.addHandlerLogin(x),w.addHandlerdate(k),y.addHandlerLogout(function(){f._clear(),w._clear(),a._clear(),window.location.reload()}),o();
//# sourceMappingURL=index.6c4a3671.js.map
