(this.webpackJsonpmymoviedbapp=this.webpackJsonpmymoviedbapp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(5),s=a.n(r),i=(a(11),a(3)),o=a.n(i),u=a(6),j=a(4),b=(a(13),a(0));var l=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Movie Search APP"})})};var d=function(e){var t=e.movie;return Object(b.jsx)("div",{className:"cardMovieList",children:t.map((function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"poster"}),Object(b.jsxs)("div",{className:"cardTextFormat",children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsxs)("h4",{className:e.vote_average<=6?"avrgRating-red":"avrgRating-green",children:["Average Rating: ",e.vote_average," Voted: ",e.vote_count]}),Object(b.jsxs)("h4",{children:["Release: ",e.release_date]}),Object(b.jsx)("p",{children:e.overview})]})]},e.id)}))})};a(15),a(16);var h=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(j.a)(r,2),i=s[0],h=s[1],v=function(){var e=Object(u.a)(o.a.mark((function e(t){var c,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"da420b86771b9f3c36fb68be17477680",c="https://api.themoviedb.org/3/search/movie?api_key=".concat("da420b86771b9f3c36fb68be17477680","&query=").concat(a),e.next=5,fetch(c);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,h(r.results);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(l,{})}),Object(b.jsxs)("form",{className:"myForm",onSubmit:v,onKeyUp:function(e){13===e.charCode&&this.setState({inputValue:e.target.value})},children:[Object(b.jsxs)("label",{className:"myLabel",htmlFor:"query",children:["Movie Name:"," "]}),Object(b.jsx)("input",{className:"myInput",type:"text",name:"query",placeholder:"Search for movie, tv show... God?",value:a,onChange:function(e){return n(e.target.value)}}),Object(b.jsxs)("button",{className:"myBtn",type:"submit",children:[Object(b.jsx)("i",{className:"fas fa-search"}),"Search"]})]}),Object(b.jsx)(d,{movie:i})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),v()}],[[17,1,2]]]);
//# sourceMappingURL=main.a2b04762.chunk.js.map