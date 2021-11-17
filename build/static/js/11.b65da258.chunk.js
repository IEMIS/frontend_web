(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[11],{138:function(e,a,t){"use strict";t.r(a);var r=t(15),n=t(16),l=t(18),c=t(17),o=t(0),u=t.n(o),i=t(81),s=t(89),d=t(82),m=t(30),y=t(95),f=t.n(y);var b=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var e=function(){for(var e=[],a=[],t=[],r=0;r<100;r++)e.push({x:r,y:Math.sin(r/10)}),a.push({x:r,y:.25*Math.sin(r/10)+.5}),t.push({x:r,y:.5*Math.cos(r/10)});return[{values:e,key:"Sine Wave",color:"#A389D4"},{values:t,key:"Cosine Wave",color:"#04a9f5"},{values:a,key:"Another sine wave",color:"#1de9b6",area:!0}]}();return u.a.createElement("div",null,u.a.createElement(f.a,{xAxis:{tickFormat:function(e){return e},axisLabel:"Time (ms)"},yAxis:{axisLabel:"Voltage (v)",tickFormat:function(e){return parseFloat(e).toFixed(2)}},type:"lineChart",datum:e,x:"x",y:"y",height:300,renderEnd:function(){console.log("renderEnd")}}))}}]),t}(u.a.Component),v=[{key:"Cumulative Return",values:[{label:"A",value:-29.765957771107,color:"#3ebfea"},{label:"B",value:10,color:"#04a9f5"},{label:"C",value:32.807804682612,color:"#ff8a65"},{label:"D",value:196.45946739256,color:"#1de9b6"},{label:"E",value:.25434030906893,color:"#4C5667"},{label:"F",value:-98.079782601442,color:"#69CEC6"},{label:"G",value:-13.925743130903,color:"#a389d4"},{label:"H",value:-5.1387322875705,color:"#FE8A7D"}]}],h=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement(f.a,{tooltip:{enabled:!0},type:"discreteBarChart",datum:v,x:"label",y:"value",height:300,showValues:!0})}}]),t}(u.a.Component);function p(e,a){return Math.floor(Math.random()*(a-e+1)+e)}var E=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var e=function(){for(var e=[],a=[],t=[],r=35+35*Math.random(),n=0;n<r;n++)e.push({x:n,y:p(0,60)}),a.push({x:n,y:p(0,100)}),t.push({x:n,y:p(0,30)});return[{values:e,key:"Stream #0",color:"#A389D4"},{values:t,key:"Stream #1",color:"#04a9f5"},{values:a,key:"Stream #3",color:"#1de9b6",area:!0}]}();return u.a.createElement(f.a,{type:"multiBarChart",datum:e,x:"x",y:"y",height:300,showValues:!0,groupSpacing:.2})}}]),t}(u.a.Component),O=[{key:"One",y:29,color:"#ff8a65"},{key:"Two",y:0,color:"#f4c22b"},{key:"Three",y:32,color:"#04a9f5"},{key:"Four",y:196,color:"#3ebfea"},{key:"Five",y:2,color:"#4F5467"},{key:"Six",y:98,color:"#1de9b6"},{key:"Seven",y:13,color:"#a389d4"},{key:"Eight",y:5,color:"#FE8A7D"}],j=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement(f.a,{id:"chart",height:300,type:"pieChart",datum:O,x:"key",y:"y"})}}]),t}(u.a.Component),x=[{key:"One",y:29,color:"#ff8a65"},{key:"Two",y:0,color:"#f4c22b"},{key:"Three",y:32,color:"#04a9f5"},{key:"Four",y:196,color:"#3ebfea"},{key:"Five",y:2,color:"#4F5467"},{key:"Six",y:98,color:"#1de9b6"},{key:"Seven",y:13,color:"#a389d4"},{key:"Eight",y:5,color:"#FE8A7D"}],k=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement(f.a,{id:"chart",height:300,type:"pieChart",datum:x,x:"key",y:"y",donut:!0,labelType:"percent"})}}]),t}(u.a.Component),C=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement(m.a,null,u.a.createElement(i.a,null,u.a.createElement(s.a,{md:6},u.a.createElement(d.a,null,u.a.createElement(d.a.Header,null,u.a.createElement(d.a.Title,{as:"h5"},"Line Chart")),u.a.createElement(d.a.Body,null,u.a.createElement(b,null)))),u.a.createElement(s.a,{md:6},u.a.createElement(d.a,null,u.a.createElement(d.a.Header,null,u.a.createElement(d.a.Title,{as:"h5"},"Discrete Bar Chart")),u.a.createElement(d.a.Body,null,u.a.createElement(h,null)))),u.a.createElement(s.a,{sm:12},u.a.createElement(d.a,null,u.a.createElement(d.a.Header,null,u.a.createElement(d.a.Title,{as:"h5"},"Stacked/Grouped Multi-Bar Chart")),u.a.createElement(d.a.Body,null,u.a.createElement(E,null)))),u.a.createElement(s.a,{md:6},u.a.createElement(d.a,null,u.a.createElement(d.a.Header,null,u.a.createElement(d.a.Title,{as:"h5"},"Pie Basic Chart")),u.a.createElement(d.a.Body,{className:"text-center"},u.a.createElement(j,null)))),u.a.createElement(s.a,{md:6},u.a.createElement(d.a,null,u.a.createElement(d.a.Header,null,u.a.createElement(d.a.Title,{as:"h5"},"Donut Chart")),u.a.createElement(d.a.Body,{className:"text-center"},u.a.createElement(k,null))))))}}]),t}(u.a.Component);a.default=C},61:function(e,a,t){"use strict";var r=t(0),n=t.n(r).a.createContext(null);n.displayName="CardContext",a.a=n},81:function(e,a,t){"use strict";var r=t(51),n=t(52),l=t(53),c=t.n(l),o=t(0),u=t.n(o),i=t(54),s=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.noGutters,d=e.as,m=void 0===d?"div":d,y=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(i.a)(t,"row"),b=f+"-cols",v=[];return s.forEach((function(e){var a,t=y[e];delete y[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&v.push(""+b+r+"-"+a)})),u.a.createElement(m,Object(r.a)({ref:a},y,{className:c.a.apply(void 0,[l,f,o&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},82:function(e,a,t){"use strict";var r=t(51),n=t(52),l=t(53),c=t.n(l),o=t(0),u=t.n(o),i=t(54),s=t(65),d=function(e){return u.a.forwardRef((function(a,t){return u.a.createElement("div",Object(r.a)({},a,{ref:t,className:c()(a.className,e)}))}))},m=t(61),y=u.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.variant,s=e.as,d=void 0===s?"img":s,m=Object(n.a)(e,["bsPrefix","className","variant","as"]),y=Object(i.a)(t,"card-img");return u.a.createElement(d,Object(r.a)({ref:a,className:c()(o?y+"-"+o:y,l)},m))}));y.displayName="CardImg",y.defaultProps={variant:null};var f=y,b=d("h5"),v=d("h6"),h=Object(s.a)("card-body"),p=Object(s.a)("card-title",{Component:b}),E=Object(s.a)("card-subtitle",{Component:v}),O=Object(s.a)("card-link",{Component:"a"}),j=Object(s.a)("card-text",{Component:"p"}),x=Object(s.a)("card-header"),k=Object(s.a)("card-footer"),C=Object(s.a)("card-img-overlay"),g=u.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.bg,d=e.text,y=e.border,f=e.body,b=e.children,v=e.as,p=void 0===v?"div":v,E=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(i.a)(t,"card"),j=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return u.a.createElement(m.a.Provider,{value:j},u.a.createElement(p,Object(r.a)({ref:a},E,{className:c()(l,O,s&&"bg-"+s,d&&"text-"+d,y&&"border-"+y)}),f?u.a.createElement(h,null,b):b))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=f,g.Title=p,g.Subtitle=E,g.Body=h,g.Link=O,g.Text=j,g.Header=x,g.Footer=k,g.ImgOverlay=C;a.a=g},89:function(e,a,t){"use strict";var r=t(51),n=t(52),l=t(53),c=t.n(l),o=t(0),u=t.n(o),i=t(54),s=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.as,d=void 0===o?"div":o,m=Object(n.a)(e,["bsPrefix","className","as"]),y=Object(i.a)(t,"col"),f=[],b=[];return s.forEach((function(e){var a,t,r,n=m[e];if(delete m[e],"object"===typeof n&&null!=n){var l=n.span;a=void 0===l||l,t=n.offset,r=n.order}else a=n;var c="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+y+c:""+y+c+"-"+a),null!=r&&b.push("order"+c+"-"+r),null!=t&&b.push("offset"+c+"-"+t)})),f.length||f.push(y),u.a.createElement(d,Object(r.a)({},m,{ref:a,className:c.a.apply(void 0,[l].concat(f,b))}))}));d.displayName="Col",a.a=d}}]);
//# sourceMappingURL=11.b65da258.chunk.js.map