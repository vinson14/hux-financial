(this["webpackJsonphux-financial"]=this["webpackJsonphux-financial"]||[]).push([[0],{130:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),i=n(24),r=n.n(i),o=(n(79),n(17)),l=n(6),h=n(7),j=n(8),d=n(10),b=n(9),u=n(137),p=n(138),m=n(136),f=n(70),x=n(141),O=n(134),g=n(140),y=n.p+"static/media/light-cropped.4dd147dd.png",v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.links.map((function(e){return Object(a.jsx)(o.c,{to:e.path,className:"pri-font text-white mx-3 p-1",exact:!0,children:e.text},e.id)}));return Object(a.jsxs)(x.a,{className:"pri-bg justify-content-between ".concat(this.props.pos,"-top"),children:[Object(a.jsx)(x.a.Brand,{href:"/",children:Object(a.jsx)(O.a,{src:y,width:"195",height:"60"})}),Object(a.jsx)(g.a,{children:e})]})}}]),n}(c.a.Component),w=n(135),N=n.p+"static/media/dark.aaaba1ec.png",k=n.p+"static/media/light.3b787594.png",A=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).toggleNavBar=function(){a.state.navbarActive?a.setState({navbarActive:"",toggleIcon:"fa-bars",toggleIconColor:"text-dark",logo:N}):a.setState({navbarActive:"active",toggleIconColor:"text-white",toggleIcon:"fa-times",logo:k})},a.state={logo:N,toggleIcon:"fa-bars",toggleIconColor:"text-dark",navbarActive:""},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.links.map((function(e){return Object(a.jsx)(o.c,{to:e.path,className:"pri-font text-white my-3 py-3 h3",exact:!0,children:e.text},e.id)}));return Object(a.jsxs)("div",{className:"navbar-mobile d-flex justify-content-between ".concat(this.props.pos,"-top"),children:[Object(a.jsx)(o.b,{to:"/",id:"logo",children:Object(a.jsx)(O.a,{src:this.state.logo,width:"250"})}),Object(a.jsx)(w.a,{variant:"outline-dark",className:"p-5",onClick:this.toggleNavBar,children:Object(a.jsx)("i",{className:"fas ".concat(this.state.toggleIcon," fa-2x ").concat(this.state.toggleIconColor)})}),Object(a.jsx)(g.a,{id:"navbar-mobile",className:this.state.navbarActive,children:e})]})}}]),n}(c.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleWindowResize=function(){a.setState({isMobile:window.innerWidth<992})},a.state={isMobile:!1,links:[{id:1,text:"Home",path:"/"},{id:2,text:"Our Team",path:"/about"},{id:3,text:"Contact Us",path:"/contact"}]},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.setState({isMobile:window.innerWidth<992}),window.addEventListener("resize",this.handleWindowResize)}},{key:"render",value:function(){return this.state.isMobile?Object(a.jsx)(A,{links:this.state.links,pos:this.props.pos}):Object(a.jsx)(v,{links:this.state.links,pos:this.props.pos})}}]),n}(c.a.Component),I=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("footer",{className:"w-100 pri-bg ".concat(this.props.pos,"-bottom"),children:Object(a.jsxs)(m.a,{className:"justify-content-center",children:[Object(a.jsx)(f.a,{xs:12,children:Object(a.jsx)("p",{className:"pri-font text-light text-center mt-3",children:"Copyright \xa9 2020 Hux Financial - All Rights Reserved."})}),Object(a.jsx)(f.a,{xs:10,children:Object(a.jsx)("p",{className:"t-and-c mb-0",children:"Information is correct as at 30/10/2020"})}),Object(a.jsx)(f.a,{xs:10,children:Object(a.jsx)("p",{className:"t-and-c mb-0 mt-1",children:"This is not the official website of AIA Singapore Private Limited (Company Registration No. 201106386R) (AIA). AIA disclaims all warranties of merchantability and fitness for purpose of the materials on this website. AIA makes no warranties or representations as to the results of the use of the materials on this website in terms of their correctness, accuracy and reliability. Nothing on this website should be regarded as an offer or solicitation to sell insurance products in any country to any person to whom it is unlawful to make such an invitation or solicitation in such a country.\u201d"})}),Object(a.jsx)(f.a,{xs:10,children:Object(a.jsx)("p",{className:"t-and-c",children:"Terms of Use. (1) All trademarks, service marks, trade names, product names, icons and logos of AIA are owned by AIA and may not be used without prior written permission from AIA. (2) All AIA products and services referred to in this website (or linked thereto to the website) known as www.huxfinancial.sg (the \u201cAgency Website\u201d) are offered only in countries where such products and services may lawfully be offered by AIA Singapore and the materials on the said Agency Website are not intended for use by persons located in or resident in, countries that restrict the distribution of such materials. (3) Neither the Agency Website nor the link to the products or services on AIA\u2019s corporate website should be regarded as an offer to sell or a solicitation to buy any insurance product or other products or services of AIA in any country to any person to whom it is unlawful to make such invitation or solicitation in such country. (4) No warranties regarding non-infringement of third party rights, security, accuracy, fitness for purpose, merchantability or freedom from computer viruses in the Agency Website or the AIA corporate website (linked thereto) are given by AIA.\u201d"})})]})})}}]),n}(c.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(u.a,{in:!0,appear:!0,children:Object(a.jsxs)("div",{className:"Home",children:[Object(a.jsx)(C,{pos:"fixed"}),Object(a.jsx)(p.a,{className:"h-100 d-flex flex-column align-items-center justify-content-center",children:Object(a.jsx)(m.a,{className:"justify-content-center w-100",children:Object(a.jsxs)(f.a,{xs:12,md:6,className:"p-5 translucent-black d-flex flex-column justify-content-center align-items-center",children:[Object(a.jsx)("h1",{className:"text-center text-white pri-font font-weight-bold",children:"Life is an uphill battle"}),Object(a.jsxs)("h3",{className:"text-center text-white sec-font my-3",children:["Start your climb with us today"," "]}),Object(a.jsx)(o.b,{type:"button",className:"btn btn-outline-light sec-font my-3",to:"/contact",children:"Find out more"})]})})}),Object(a.jsx)(I,{})]})})}}]),n}(c.a.Component),M=n(25),T=n.n(M),L=n(32),z=n(33),E=n.n(z),F=n(142),P=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(F.a,{className:"border-0 my-3",children:[Object(a.jsx)(F.a.Img,{src:"".concat("/hux-financial","/img/profiles/").concat(this.props.profile.img)}),Object(a.jsxs)(F.a.Body,{children:[Object(a.jsx)(F.a.Title,{className:"pri-font font-weight-bold",children:this.props.profile.name}),Object(a.jsx)(F.a.Text,{className:"sec-font",children:this.props.profile.title}),Object(a.jsx)(o.b,{type:"button",className:"btn btn-outline-dark sec-font",to:"/about/".concat(this.props.profile.link),children:"Learn more"})]})]})}}]),n}(c.a.Component),R=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).getProfiles=Object(L.a)(T.a.mark((function t(){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.init({key:"https://docs.google.com/spreadsheets/d/1pz8JCy_ZvHgik3fNElwTSFybFvX-Iw1iR2-2-Nz-uXE/edit?usp=sharing",simpleSheet:!1});case 2:n=t.sent,e.setState({profiles:n.Agents.elements,isLoaded:!0});case 4:case"end":return t.stop()}}),t)}))),e.state={profiles:[],isLoaded:!1},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getProfiles()}},{key:"render",value:function(){return this.state.isLoaded?Object(a.jsx)(u.a,{in:!0,appear:!0,children:Object(a.jsxs)("div",{className:"about",children:[Object(a.jsx)(C,{pos:"sticky"}),Object(a.jsxs)(p.a,{children:[Object(a.jsx)(m.a,{className:"my-5",children:Object(a.jsx)(f.a,{children:Object(a.jsx)("h1",{className:"pri-font text-center",children:"Our Team"})})}),Object(a.jsx)(m.a,{children:this.state.profiles.map((function(e){return Object(a.jsx)(f.a,{xs:12,md:6,lg:4,children:Object(a.jsx)(P,{profile:e})},e.row)}))})]}),Object(a.jsx)(I,{pos:""})]})}):Object(a.jsx)("div",{})}}]),n}(c.a.Component),W=n(71),B=n(139),D=n(72),H=n.n(D),Z=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).validateEmail=function(e){return!!e.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)},e.handleInputChange=function(t){var n=t.target,a="checkbox"===n.type?n.checked:n.value,s=n.name;"email"===s&&(""===a||e.validateEmail(a)||console.log("please enter a valid email")),e.setState(Object(W.a)({},s,a))},e.handleOnSubmit=function(t){t.preventDefault();var n={name:e.state.name,email:e.state.email,contact:e.state.contact,message:e.state.message};H()({method:"POST",url:"https://formspree.io/f/mpzodvbr",data:n}).then((function(t){e.setState({submitted:!0})})).catch((function(t){console.log(t.response),e.setState({submitted:!0,error:!0,displayMsg:"Something went wrong, please ensure your email is entered correctly"})}))},e.state={name:"",email:"",contact:"",message:"",submitted:!1,displayMsg:"Thank you for contacting us, we will be in touch soon",error:!1},e}return Object(j.a)(n,[{key:"render",value:function(){return this.state.submitted?Object(a.jsx)(m.a,{children:Object(a.jsx)(f.a,{children:Object(a.jsx)("h1",{className:"pri-font text-center",children:this.state.displayMsg})})}):Object(a.jsxs)(B.a,{children:[Object(a.jsxs)(m.a,{className:"justify-content-center",children:[Object(a.jsx)(f.a,{xs:10,md:8,lg:7,children:Object(a.jsx)(B.a.Group,{children:Object(a.jsx)(B.a.Control,{type:"text",name:"name",placeholder:"Name",onChange:this.handleInputChange,value:this.state.name,required:!0})})}),Object(a.jsx)(f.a,{xs:10,md:8,lg:7,children:Object(a.jsx)(B.a.Group,{children:Object(a.jsx)(B.a.Control,{type:"text",name:"email",placeholder:"Email",onChange:this.handleInputChange,value:this.state.email})})}),Object(a.jsx)(f.a,{xs:10,md:8,lg:7,children:Object(a.jsx)(B.a.Group,{children:Object(a.jsx)(B.a.Control,{type:"text",name:"contact",placeholder:"Contact No.",onChange:this.handleInputChange,value:this.state.contact})})})]}),Object(a.jsx)(m.a,{className:"justify-content-center",children:Object(a.jsx)(f.a,{xs:10,md:8,lg:8,children:Object(a.jsx)(B.a.Group,{children:Object(a.jsx)(B.a.Control,{as:"textarea",rows:"8",name:"message",placeholder:"Message",onChange:this.handleInputChange,value:this.state.message})})})}),Object(a.jsx)(m.a,{children:Object(a.jsx)(f.a,{className:"d-flex justify-content-center my-3 sec-font",children:Object(a.jsx)(w.a,{variant:"outline-dark",onClick:this.handleOnSubmit,children:"Send message"})})})]})}}]),n}(c.a.Component),G=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(u.a,{in:!0,appear:!0,children:Object(a.jsxs)("div",{className:"Contact",children:[Object(a.jsx)(C,{pos:"sticky"}),Object(a.jsxs)(p.a,{className:"my-5",children:[Object(a.jsx)(m.a,{className:"my-5",children:Object(a.jsx)(f.a,{xs:12,children:Object(a.jsx)("h1",{className:"text-center pri-font",children:"Send us a message"})})}),Object(a.jsx)(m.a,{className:"justify-content-center",children:Object(a.jsx)(f.a,{children:Object(a.jsx)(Z,{})})})]}),Object(a.jsx)(I,{})]})})}}]),n}(c.a.Component),J=n(73),X=n.n(J),_=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getProfile=Object(L.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.init({key:"https://docs.google.com/spreadsheets/d/1pz8JCy_ZvHgik3fNElwTSFybFvX-Iw1iR2-2-Nz-uXE/edit?usp=sharing",simpleSheet:!1});case 2:t=e.sent,a.setState({profile:t.Agents.elements.find((function(e){return e.link===a.props.match.params.name})),isLoaded:!0});case 4:case"end":return e.stop()}}),e)}))),a.state={profile:{},isLoaded:!1},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getProfile()}},{key:"render",value:function(){return this.state.isLoaded?Object(a.jsxs)("div",{className:"Profile",children:[Object(a.jsx)(C,{}),Object(a.jsx)(p.a,{className:"my-5 p-5",children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(f.a,{md:6,children:Object(a.jsx)(O.a,{src:"".concat("/hux-financial","/img/profiles/").concat(this.state.profile.img),fluid:!0})}),Object(a.jsxs)(f.a,{md:6,className:"d-flex flex-column justify-content-center align-items-center",children:[Object(a.jsx)("h2",{className:"pri-font",children:this.state.profile.name}),Object(a.jsx)("h5",{className:"sec-font mb-5",children:Object(a.jsx)("em",{children:this.state.profile.title})}),Object(a.jsx)("p",{className:"pri-font",children:X()(this.state.profile.profile)}),Object(a.jsxs)("p",{className:"mt-5 w-100 pri-font",children:["Mobile no. : ",this.state.profile.mobile]}),Object(a.jsxs)("p",{className:"w-100 pri-font",children:["Email : ",this.state.profile.email]})]})]})}),Object(a.jsx)(I,{pos:""})]}):Object(a.jsx)("div",{})}}]),n}(c.a.Component);n(130),n(131);function U(){var e=Object(l.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var $=function(e){return Object(a.jsxs)(o.a,{basename:"/",children:[Object(a.jsx)(U,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:S}),Object(a.jsx)(l.a,{path:"/about",exact:!0,component:R}),Object(a.jsx)(l.a,{path:"/about/:name",component:_}),Object(a.jsx)(l.a,{path:"/contact",exact:!0,component:G})]})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)($,{})}),document.getElementById("root")),q()},79:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.02edcd4d.chunk.js.map