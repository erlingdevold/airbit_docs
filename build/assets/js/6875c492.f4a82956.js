"use strict";(self.webpackChunkdocs_airbit_2=self.webpackChunkdocs_airbit_2||[]).push([[610],{2827:function(e,t,a){var r=a(7294),l=a(3905),n=a(9750),m=a(6742),c=["January","February","March","April","May","June","July","August","September","October","November","December"],s=function(e){return Math.ceil(e)};t.Z=function(e){var t=e.children,a=e.frontMatter,i=e.metadata,o=e.truncated,d=e.isBlogPostPage,u=void 0!==d&&d,g=i.date,E=i.readingTime,h=i.tags,p=i.permalink,f=i.editUrl,v=a.author,b=a.title,N=a.author_url||a.authorURL,y=a.author_image_url||a.authorImageURL,k=g.substring(0,10).split("-"),w=k[0],x=c[parseInt(k[1],10)-1],M=parseInt(k[2],10);return r.createElement("article",{className:"card shadow"},r.createElement("div",{className:"row no-gutters rows-col-2 m-3"},r.createElement("div",{className:"col-xs mr-3"},y&&r.createElement("img",{style:{width:"50px"},src:y,alt:v})),r.createElement("div",{className:"col"},v&&r.createElement("h5",null,r.createElement("a",{href:N,rel:v},v)),r.createElement("time",{className:"card-subtitle mb-md-4 font-weight-light",dateTime:g},x," ",M,", ",w," ",u&&E&&r.createElement(r.Fragment,null," \xb7 ",s(E)," min read"))),r.createElement("div",{className:"col text-right"},u&&f&&r.createElement("span",null,r.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},r.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")))),r.createElement("div",{className:"card-body"},r.createElement("h3",{className:"card-title text-primary mr-2"},b),r.createElement("section",null,r.createElement(l.Zo,{components:n.Z},t))),r.createElement("footer",{className:"row no-gutters m-3 justify-content-between"},r.createElement("div",{className:"col col-xs"},h.length>0&&r.createElement(r.Fragment,null,h.map((function(e){var t=e.label,a=e.permalink;return r.createElement(m.Z,{key:a,className:"m-1",to:a},r.createElement("span",{className:"badge badge-primary"},t))})))),r.createElement("div",{className:"col align-self-center text-right"},!u&&E&&r.createElement("small",{className:o?"mr-2":""},s(E)," min read"),o&&r.createElement(m.Z,{to:p,"aria-label":"Read more about "+b},r.createElement("span",{className:"stretched-link"},"Read more")))))}},7723:function(e,t,a){a.r(t);var r=a(7294),l=a(2827),n=a(1444),m=a(6742);t.default=function(e){var t=e.metadata,a=e.items,c=t.allTagsPath,s=t.name,i=t.count;return r.createElement(n.Z,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"'},r.createElement("div",{className:"container-fluid my-4"},r.createElement("header",{className:"text-center"},r.createElement("h1",null,i," ",function(e,t){return e>1?t+"s":t}(i,"post"),' tagged with "',s,'"'),r.createElement(m.Z,{href:c},"View All Tags")),r.createElement("div",{className:"my-4"},a.map((function(e){var t=e.content;return r.createElement("div",{key:t.metadata.permalink,className:"col col-xl-4 offset-xl-4 col-xs-6 mb-5"},r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null)))})))))}}}]);