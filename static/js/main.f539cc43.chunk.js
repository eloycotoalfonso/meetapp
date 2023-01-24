(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{292:function(e,t,n){e.exports=n(567)},298:function(e,t,n){},299:function(e,t,n){},565:function(e,t,n){},566:function(e,t,n){},567:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(268),i=n.n(a),c=(n(298),n(53)),s=n(21),u=n(29),l=n(23),h=n(22),f=n(24),p=(n(299),function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={collapsed:!0},n.toggleButton=function(){n.setState(function(e){return{collapsed:!e.collapsed}})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return o.a.createElement("div",{className:"event"},o.a.createElement("h1",{className:"title"},t.summary),o.a.createElement("p",{className:"start"},new Date(t.start.dateTime).toString()),o.a.createElement("p",{className:"location"},"@ ",t.summary," | ",t.location),!n&&o.a.createElement("div",null,o.a.createElement("h2",{className:"about"},"About event:"),o.a.createElement("a",{className:"externalDetails",href:t.htmlLink},"See details on Google Calendar"),o.a.createElement("p",{className:"information"},t.description)),o.a.createElement("button",{className:"expand",onClick:function(){return e.toggleButton()}},n?"Show":"Hide"," details"))}}]),t}(r.Component)),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.events;return o.a.createElement("ul",{className:"EventList"},e.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(p,{event:e}))}))}}]),t}(r.Component),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Alert"},o.a.createElement("p",{style:this.getStyle()}," ",this.props.text," "))}}]),t}(r.Component),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).color="blue",n}return Object(f.a)(t,e),t}(v),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).color="red",n}return Object(f.a)(t,e),t}(v),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).color="dark blue",n}return Object(f.a)(t,e),t}(v),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},n.handleInputChanged=function(e){var t=e.target.value,r=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});if(0!==r.length)return n.setState({query:t,suggestions:r,infoText:""});n.setState({query:t,infoText:"We can not find the city you are looking for. Please try another city"})},n.handleItemClicked=function(e){n.setState({query:e,showSuggestions:!1,infoText:""}),n.props.updateEvents(e)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"CitySearch"},o.a.createElement(m,{text:this.state.infoText}),o.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),o.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(t){return o.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),o.a.createElement("li",{key:"all",onClick:function(){return e.handleItemClicked("all")}},o.a.createElement("b",null,"See all cities"))))}}]),t}(r.Component),b=n(289),E=n(568),x=n(571),k=n(78),j=n(281),O=function(e){var t=e.events,n=Object(r.useState)([]),a=Object(b.a)(n,2),i=a[0],c=a[1];return Object(r.useEffect)(function(){var e=["React","JavaScript","Node","jQuery","AngularJS"];c(function(){return e.map(function(e){var n=t.filter(function(t){return t.summary.includes(e)}).length;return console.log("Hello world"),{name:e,value:n}})})},[t]),o.a.createElement(E.a,{className:"pieChart",height:400},o.a.createElement(x.a,{width:400,height:400},o.a.createElement(k.a,{verticalAlign:"top",height:36}),o.a.createElement(j.a,{data:i,cx:"50%",cy:"50%",labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})))},S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],L=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={number:32,errorText:""},n.handleInputChanged=function(e){var t=Math.floor(e.target.value);n.props.updateEvents(null,t),t<1||t>32?n.setState({number:t,errorText:"Select number from 1 to 32"}):n.setState({number:t,errorText:""})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.number;return o.a.createElement("div",{className:"NumberOfEvents"},o.a.createElement("input",{className:"eventsNumber",type:"number",value:e,onChange:this.handleInputChanged}),o.a.createElement(g,{text:this.state.errorText}))}}]),t}(r.Component),T=n(290),N=n(150),_=n.n(N),C=n(81),A=n.n(C);function W(){W=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(T){s=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new O(o||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};s(v,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==t&&n.call(g,a)&&(v=g);var y=d.prototype=f.prototype=Object.create(v);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var o;r(this,"_invoke",{value:function(r,a){function i(){return new t(function(o,i){!function r(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(s.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=l(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new b(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),s(y,c,"Generator"),s(y,a,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var I=function(e){var t=e.map(function(e){return e.location});return Object(T.a)(new Set(t))},Z=function(){var e=Object(c.a)(W().mark(function e(t){var n;return W().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),G=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},P=function(){var e=Object(c.a)(W().mark(function e(t){var n,r,o;return W().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://vo9340o271.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then(function(e){return e.json()}).catch(function(e){return e});case 3:return r=e.sent,(o=r.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(W().mark(function e(){var t,n,r,o,a;return W().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(A.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return A.a.done(),e.abrupt("return",S);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),A.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,M();case 10:if(!(n=e.sent)){e.next=20;break}return G(),r="https://vo9340o271.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,_.a.get(r);case 16:return(o=e.sent).data&&(a=I(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(a))),A.a.done(),e.abrupt("return",o.data.events);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(W().mark(function e(){var t,n,r,o,a,i;return W().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,_.a.get("https://vo9340o271.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return a=e.sent,i=a.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&P(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();n(565),n(566);var B=function(e){return e.showWelcomeScreen?o.a.createElement("div",{className:"WelcomeScreen"},o.a.createElement("h1",null," Welcome to MeetApp "),o.a.createElement("h4",null,"Log in to see full-stack upcoming events around the world"),o.a.createElement("div",{className:"button_cont",align:"center"},o.a.createElement("div",{class:"google-btn"},o.a.createElement("div",{class:"google-icon-wrapper"},o.a.createElement("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})),o.a.createElement("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text"},o.a.createElement("b",null,"Sign in with google")))),o.a.createElement("a",{href:"https://eloycotoalfonso.github.io/meet/privacy.html",rel:"nofollow noopener"},"Privacy policy")):null},D=n(569),J=n(570),R=n(286),q=n(287),U=n(82),Y=n(285);function H(){H=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(T){s=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new O(o||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};s(v,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==t&&n.call(g,a)&&(v=g);var y=d.prototype=f.prototype=Object.create(v);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var o;r(this,"_invoke",{value:function(r,a){function i(){return new t(function(o,i){!function r(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(s.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=l(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new b(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),s(y,c,"Generator"),s(y,a,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={events:[],locations:[],selectedLocation:"all",eventCount:32,showWelcomeScreen:void 0},n.updateEvents=function(e,t){var r=n.state,o=r.eventCount,a=r.selectedLocation;e||(e=a),F().then(function(r){var a="all"===e?r:r.filter(function(t){return t.location===e});t=t||o;var i=a.slice(0,t);n.setState({events:i,selectedLocation:e,eventCount:t})})},n.getData=function(){var e=n.state,t=e.locations,r=e.events;return t.map(function(e){var t=r.filter(function(t){return t.location===e}).length;return{city:e.split(", ").shift(),number:t}})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(H().mark(function e(){var t,n,r,o,a=this;return H().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,Z(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,r=new URLSearchParams(window.location.search),o=r.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&F().then(function(e){a.mounted&&(e=e.slice(0,a.state.eventCount),a.setState({events:e,locations:I(e)}))});case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?o.a.createElement("div",{className:"App"}):o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Apptitle"},o.a.createElement("h1",null," MeetApp")),o.a.createElement("div",{className:"OfflineAlert Alert"},!navigator.onLine&&o.a.createElement(y,{text:"You are currently offline. Events might not be up to date"})),o.a.createElement("div",{className:"SearchBox"},o.a.createElement("h3",null," Select your city "),o.a.createElement(w,{locations:this.state.locations,updateEvents:this.updateEvents}),o.a.createElement("h3",null," Events to display "),o.a.createElement(L,{updateEvents:this.updateEvents})),o.a.createElement("div",{className:"data-vis-wrapper"},o.a.createElement("h4",null," Events by topic "),o.a.createElement(O,{events:this.state.events}),o.a.createElement("h4",null," Events in each city "),o.a.createElement(E.a,{height:400},o.a.createElement(D.a,{margin:{top:20,right:20,bottom:20,left:20}},o.a.createElement(J.a,null),o.a.createElement(R.a,{type:"category",dataKey:"city",name:"city"}),o.a.createElement(q.a,{type:"number",dataKey:"number",name:"Number of events",allowDecimals:!1}),o.a.createElement(U.a,{cursor:{strokeDasharray:"3 3"}}),o.a.createElement(Y.a,{data:this.getData(),fill:"#8884d8"})))),o.a.createElement(d,{events:this.state.events,eventCount:this.state.eventCount}),o.a.createElement(B,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){M()}}))}}]),t}(r.Component),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,572)).then(function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),a(e),i(e)})};n(288).config("ac53fef3f01b452891078d791682afca").install(),i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null))),function(e){if("serviceWorker"in navigator){if(new URL("/meetapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/meetapp","/service-worker.js");K?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):V(t,e)})}}(),X()}},[[292,1,2]]]);
//# sourceMappingURL=main.f539cc43.chunk.js.map