(this.webpackJsonpmymoviedbapp=this.webpackJsonpmymoviedbapp||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(5),s=c.n(r),i=(c(11),c(3)),o=c.n(i),u=c(6),l=c(4),j=(c(13),c(0));var b=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Movie Search APP"})})};var d=function(e){var t=e.movie;return Object(j.jsx)("div",{className:"cardMovieList",children:t.map((function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"poster"}),Object(j.jsxs)("div",{className:"cardTextFormat",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("h4",{className:e.vote_average<=6?"avrgRating-red":"avrgRating-green",children:["Average Rating: ",e.vote_average," Voted: ",e.vote_count]}),Object(j.jsxs)("h4",{children:["Release: ",e.release_date]}),Object(j.jsx)("p",{children:e.overview})]})]},e.id)}))})};c(15),c(16);var h=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(l.a)(r,2),i=s[0],h=s[1],m=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Processing... FROM APP"),"da420b86771b9f3c36fb68be17477680",a="https://api.themoviedb.org/3/search/movie?api_key=".concat("da420b86771b9f3c36fb68be17477680","&query=").concat(c),e.next=6,fetch(a);case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,h(r.results);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(i),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("form",{className:"myForm",onSubmit:m,onKeyUp:function(e){13===e.charCode&&this.setState({inputValue:e.target.value})},children:[Object(j.jsxs)("label",{className:"myLabel",htmlFor:"query",children:["Movie Name:"," "]}),Object(j.jsx)("input",{className:"myInput",type:"text",name:"query",placeholder:"Search for movies...",value:c,onChange:function(e){return n(e.target.value)}}),Object(j.jsxs)("button",{className:"myBtn",type:"submit",children:[Object(j.jsx)("i",{className:"fas fa-search"}),"Search"]})]}),Object(j.jsx)(d,{movie:i})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),m()}],[[17,1,2]]]);
//# sourceMappingURL=main.b6840172.chunk.js.map