(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[678],{4316:function(e,t,a){var l=a(2767),n=a(9056),r=n;r.v1=l,r.v4=n,e.exports=r},2353:function(e){for(var t=[],a=0;a<256;++a)t[a]=(a+256).toString(16).substr(1);e.exports=function(e,a){var l=a||0,n=t;return[n[e[l++]],n[e[l++]],n[e[l++]],n[e[l++]],"-",n[e[l++]],n[e[l++]],"-",n[e[l++]],n[e[l++]],"-",n[e[l++]],n[e[l++]],"-",n[e[l++]],n[e[l++]],n[e[l++]],n[e[l++]],n[e[l++]],n[e[l++]]].join("")}},237:function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var a=new Uint8Array(16);e.exports=function(){return t(a),a}}else{var l=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),l[t]=e>>>((3&t)<<3)&255;return l}}},2767:function(e,t,a){var l,n,r=a(237),i=a(2353),o=0,c=0;e.exports=function(e,t,a){var s=t&&a||0,m=t||[],u=(e=e||{}).node||l,p=void 0!==e.clockseq?e.clockseq:n;if(null==u||null==p){var d=r();null==u&&(u=l=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==p&&(p=n=16383&(d[6]<<8|d[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:c+1,y=f-o+(h-c)/1e4;if(y<0&&void 0===e.clockseq&&(p=p+1&16383),(y<0||f>o)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");o=f,c=h,n=p;var g=(1e4*(268435455&(f+=122192928e5))+h)%4294967296;m[s++]=g>>>24&255,m[s++]=g>>>16&255,m[s++]=g>>>8&255,m[s++]=255&g;var E=f/4294967296*1e4&268435455;m[s++]=E>>>8&255,m[s++]=255&E,m[s++]=E>>>24&15|16,m[s++]=E>>>16&255,m[s++]=p>>>8|128,m[s++]=255&p;for(var v=0;v<6;++v)m[s+v]=u[v];return t||i(m)}},9056:function(e,t,a){var l=a(237),n=a(2353);e.exports=function(e,t,a){var r=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||l)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[r+o]=i[o];return t||n(i)}},1174:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var l=a(7294),n=a(5444),r=l.createContext(null),i=a(4316),o=function(e){var t=e.children,a=(0,l.useState)((0,i.v4)())[0],n=(0,l.useRef)(null),o=(0,l.useContext)(r),c=o.onToggle,s=o.activeEventKey;return l.createElement("div",{className:"container",ref:n},l.createElement("div",{className:"title",onClick:function(){var e=a===s?null:a;c(e),e&&setTimeout((function(){return n.current.scrollIntoView({behavior:"smooth"})}),100)},id:a},t.title),s===a&&l.createElement("div",{className:"aufklappbar"},t.body))},c=a.p+"static/me-6ad5a76b2dd4793625a5164e7af2b27a.jpg",s=a.p+"static/climate2-3ebad3015cc9b6dff1349425af21e420.png",m=a.p+"static/speculative1-91cad99382c9f5043c3eea8bd0e0d4d1.png",u=a.p+"static/tohil1-2f3ba320778097a3731c6a7f5ed94a5f.png",p=a.p+"static/tohil2-06079f8d21d034193fb18b75d4a089ee.png",d=a.p+"static/tohil3-1345cc2ab5d89d9f03b77d23c531534b.png",f=a.p+"static/tippingpoints1-3fa5dd33ebdeefbeaf2a69845695c1f7.jpg",h=function(){var e,t=(0,l.useState)(null),a=t[0],i=t[1],h=(0,l.useMemo)((function(){return{activeEventKey:a,onToggle:function(e){return i(e)}}}),[a,i]);return l.createElement(r.Provider,{value:h},l.createElement("script",{src:"https://player.vimeo.com/api/player.js"}),l.createElement("main",null,l.createElement("title",null,"Lele"),l.createElement(o,null,{title:l.createElement(l.Fragment,null,l.createElement("h1",null,"Lele",l.createElement("br",null),"here :)"),l.createElement("p",null,"interface design",l.createElement("br",null),"digital arts",l.createElement("br",null),"multimedia")),body:l.createElement(l.Fragment,null,l.createElement("img",{className:"profile-picture",src:c}),l.createElement("p",{className:"mt-0"},"I am Lele Schlaich and I study Interface Design at the University of Applied Sciences Potsdam. I am passionate about creating and designing sustainable and intuitive experiences with mixed media."),l.createElement("p",null,"I raise awareness on climate justice and human rights with empathy and love for experimenting with design. Therefore I particularly enjoy exploring the latest advances in media, speculative thinking, and clarifying complex interaction systems. I like to do interactive experiences whether they are digital f.i. in augmented reality, or analogue installations, mostly documented in film. My newest field is 3D animation."))}),l.createElement(o,null,{title:l.createElement("h1",null,"Augmented",l.createElement("br",null),"Reality"),body:l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement("p",null,"Augmented Reality with SparkAR.",l.createElement("br",null)," See more in my"," ",l.createElement("a",{href:"https://www.facebook.com/sparkarhub/portfolios/ig/leleschl/",target:"_blank"},"AR-Filter-Portfolio"))),l.createElement("div",{className:"vertical-video-wrapper"},l.createElement("div",{className:"spark-video-wrapper"},l.createElement("div",{style:{padding:"177.78% 0 0 0",position:"relative"}},l.createElement("iframe",{src:"https://player.vimeo.com/video/551549680?controls=0&muted=1&autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"spark3"})),l.createElement("p",null,"Sustainability Challenge with Nina Zeisler. Video about the project"," ",l.createElement("a",{href:"https://vimeo.com/435892256",target:"_blank"},"here"))),l.createElement("div",{className:"spark-video-wrapper"},l.createElement("div",{style:{padding:"177.78% 0 0 0",position:"relative"}},l.createElement("iframe",{src:"https://player.vimeo.com/video/551549444?controls=0&muted=1&autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"spark1"})),l.createElement("p",null,"Face-Embroidery for music video to TACHY´s “Signify” with Mariana Reinhardt")),l.createElement("div",{className:"spark-video-wrapper"},l.createElement("div",{style:{padding:"177.78% 0 0 0",position:"relative"}},l.createElement("iframe",{src:"https://player.vimeo.com/video/551553475?controls=0&muted=1&autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"spark4.webm"})),l.createElement("p",null,"Random generator “What Riso-Colour are you” for @drucken3000")),l.createElement("div",{className:"spark-video-wrapper"},l.createElement("div",{style:{padding:"177.78% 0 0 0",position:"relative"}},l.createElement("iframe",{src:"https://player.vimeo.com/video/553921813?controls=0&muted=1&autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"nipple.mov"})),l.createElement("p",null,"Breaking Instagram-Boundaries: Nipple “Sticker”."))))}),l.createElement(o,{coral:!0},{title:l.createElement("h1",null,"Scrolly",l.createElement("br",null),"telling"),body:l.createElement(l.Fragment,null,l.createElement("p",null,"Meat = Heat? Website to raise awareness on climate change in connection to meat consumption, written in Html and Css.",l.createElement("br",null),"Teamwork with Aline Sawalsky."),l.createElement("div",{style:{padding:"55.07% 0 0 0",position:"relative"}},l.createElement("iframe",{src:"https://player.vimeo.com/video/553925379?controls=0&muted=1&autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"climate3.webm"})),l.createElement("p",null,"See the full website here:",l.createElement("a",{href:"https://interface.fh-potsdam.de/klimagrafik/meat-eq-heat/",target:"_blank"}," Meat=Heat?")),l.createElement("img",{className:"images mt-2",src:s}))}),l.createElement(o,{coral:!0},{title:l.createElement("h1",null,"Specula",l.createElement("wbr",null),"tive",l.createElement("br",null)," Design"),body:l.createElement(l.Fragment,null,l.createElement("p",null,"The future in a bag: What are everyday objects of crisis-ridden futures? ",l.createElement("br",null),"A scenario space navigating between climate crisis, ageing and cyber attacks, which designs resilient artefacts between smartness, dumbness, convenience and inconvenience.",l.createElement("br",null),"Group project with Fidel Thomet, Thomas Haas, Felix Harle",l.createElement("br",null)),l.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},l.createElement("iframe",{src:"https://www.youtube-nocookie.com/embed/WK2JKF_QzZU?controls=0",title:"YouTube video player",frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),l.createElement("p",null,"See the full website here:",l.createElement("a",{href:"https://future-in-a-bag.vercel.app/#/",target:"_blank"}," Scenario-Website")),l.createElement("img",{className:"images",src:m}))}),l.createElement(o,null,{title:l.createElement("h1",null,"Scenario",l.createElement("br",null),"Instal",l.createElement("wbr",null),"lation"),body:l.createElement(l.Fragment,null,l.createElement("p",null,"Visual experiments on disruptive climate system changes due to global warming. We only have only 8 more years to reach the tipping points of our earth. The dieback of the amazon rainforest is just one of them. ",l.createElement("br",null)," Group project with Memo Yapici, Kenny Löffler, Mariana Reinhardt"),l.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},l.createElement("iframe",(e={src:"https://player.vimeo.com/video/363540500?autoplay=1&muted=1&color=ffffff&portrait=0#t=9m17s&dnt=1",style:"position:absolute;top:0;left:0;width:100%;height:100%;",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0},e.style={position:"absolute",top:0,left:0,width:"100%",height:"100%"},e))),l.createElement("img",{className:"images mt-1",src:f}))}),l.createElement(o,null,{title:l.createElement("h1",null,"data",l.createElement("br",null),"graphic"),body:l.createElement(l.Fragment,null,l.createElement("p",null,"The holy Tohil. The Fireplace of the Maya in data. ",l.createElement("br",null)," 1000 words with no words needed"),l.createElement("img",{className:"images mt-1",src:u}),l.createElement("img",{className:"images mt-1",src:p}),l.createElement("img",{className:"images mt-1",src:d}),l.createElement("p",null,"Photos by Renee Klaßen"))}),l.createElement(o,null,{title:l.createElement("h1",null,"3D",l.createElement("br",null),"Animation"),body:l.createElement(l.Fragment,null,l.createElement("p",null,"Exploring 3D and Animation in Maya. Muted due to copyright: Original with Zoom Zoom by Polo and Pan."),l.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},l.createElement("iframe",{src:"https://player.vimeo.com/video/557309123?&muted=0&autoplay=0&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"ZoomZoom_by Lele Schlaich"})))}),l.createElement("div",{className:"container footer"},l.createElement("h1",null,l.createElement("a",{href:"mailto:lele@czyk.de"},"Mail me!")),l.createElement("div",null,l.createElement(n.Link,{to:"impressum"},"Impressum"),l.createElement(n.Link,{className:"ml-1",to:"datenschutz"},"Datenschutz")))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5fb14e304509cf59609e.js.map