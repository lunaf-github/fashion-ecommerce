(window.webpackJsonp=window.webpackJsonp||[]).push([[19,6],{277:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("42ff6d7b",content,!0,{sourceMap:!1})},278:function(t,e,r){var n=r(2),o=r(291),c=r(82);n({target:"Array",proto:!0},{fill:o}),c("fill")},279:function(t,e,r){"use strict";r.r(e);r(49);var n={computed:{featuredProducts:function(){return this.$store.getters.featuredProducts}}},o=(r(285),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",[t._m(0),t._v(" "),e("div",{staticClass:"featureditems"},t._l(t.featuredProducts,(function(r,i){return e("div",{key:r.id,class:"item".concat(i)},[e("nuxt-link",{attrs:{to:"../product/".concat(r.id)}},[e("div",{staticClass:"image-container"},[e("img",{staticClass:"img",attrs:{src:"/products/".concat(r.img)}})])]),t._v(" "),e("h3",[t._v(t._s(r.name))]),t._v(" "),e("h4",[t._v(t._s(t._f("dollar")(r.price)))])],1)})),0)])}),[function(){var t=this._self._c;return t("h2",[t("span",[this._v("Featured Products")])])}],!1,null,"33a46c0c",null);e.default=component.exports},280:function(t,e,r){"use strict";var n=r(9),o=r(4),c=r(5),l=r(107),d=r(17),h=r(11),f=r(194),v=r(42),m=r(79),y=r(193),x=r(3),C=r(80).f,w=r(33).f,_=r(16).f,R=r(196),S=r(289).trim,A="Number",O=o.Number,P=O.prototype,I=o.TypeError,N=c("".slice),k=c("".charCodeAt),B=function(t){var e=y(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,r,n,o,c,l,d,code,h=y(t,"number");if(m(h))throw I("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=S(h),43===(e=k(h,0))||45===e){if(88===(r=k(h,2))||120===r)return NaN}else if(48===e){switch(k(h,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+h}for(l=(c=N(h,2)).length,d=0;d<l;d++)if((code=k(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+h};if(l(A,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var j,E=function(t){var e=arguments.length<1?0:O(B(t)),r=this;return v(P,r)&&x((function(){R(r)}))?f(Object(e),r,E):e},F=n?C(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;F.length>z;z++)h(O,j=F[z])&&!h(E,j)&&_(E,j,w(O,j));E.prototype=P,P.constructor=E,d(o,A,E,{constructor:!0})}},281:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("7df8fd2f",content,!0,{sourceMap:!1})},282:function(t,e,r){var content=r(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("353fe2f4",content,!0,{sourceMap:!1})},285:function(t,e,r){"use strict";r(277)},286:function(t,e,r){var n=r(29)(!1);n.push([t.i,'section[data-v-33a46c0c]{margin-top:60px}.featureditems[data-v-33a46c0c]{width:100%;margin:20px 0 70px}.featureditems .item0[data-v-33a46c0c],.featureditems .item1[data-v-33a46c0c],.featureditems .item2[data-v-33a46c0c]{border-radius:10%;padding:20px 20px 30px 20px;height:55vh;justify-self:center;align-self:center;text-align:center}.featureditems .item1[data-v-33a46c0c]{grid-area:1/1/2/2;border:1px solid #e62a2a;box-shadow:0 3px 10px 0px red}.featureditems .item2[data-v-33a46c0c]{grid-area:1/2/2/3;border:1px solid #2a33e6;box-shadow:0 3px 10px 0px #0004ff}.featureditems .item0[data-v-33a46c0c]{grid-area:1/3/2/4;border:1px solid #69e62a;box-shadow:0 3px 10px 0px #2fff00}h4[data-v-33a46c0c]{color:#d96528;margin:10px 0}h2[data-v-33a46c0c]{color:#d96528;text-align:center;overflow:hidden}h2 span[data-v-33a46c0c]{display:inline-block;position:relative}h2 span[data-v-33a46c0c]:after,h2 span[data-v-33a46c0c]:before{content:" ";display:block;height:1px;width:1000px;background:#e6baa4;position:absolute;top:50%}h2 span[data-v-33a46c0c]:before{left:-1010px}h2 span[data-v-33a46c0c]:after{right:-1010px}h3[data-v-33a46c0c]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;width:97%}@media screen and (max-width: 699px){.featureditems[data-v-33a46c0c]{width:83vw;margin-left:5vw}.featureditems img[data-v-33a46c0c]{max-width:75vw}.featureditems div[data-v-33a46c0c]{padding:10px 20px;margin-bottom:10px}img[data-v-33a46c0c]{width:initial}}@media screen and (min-width: 700px){.featureditems[data-v-33a46c0c]{display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr;grid-column-gap:20px;grid-row-gap:0px;text-align:center;width:80vw}img[data-v-33a46c0c]{width:90%}.image-container[data-v-33a46c0c]{display:flex;justify-content:center;align-items:center;margin-top:5px;height:40vh;border:4px solid gray;overflow:hidden;background-color:#fff;border-radius:10%;margin-bottom:5px}}',""]),t.exports=n},289:function(t,e,r){var n=r(5),o=r(24),c=r(13),l=r(290),d=n("".replace),h="["+l+"]",f=RegExp("^"+h+h+"*"),v=RegExp(h+h+"*$"),m=function(t){return function(e){var r=c(o(e));return 1&t&&(r=d(r,f,"")),2&t&&(r=d(r,v,"")),r}};t.exports={start:m(1),end:m(2),trim:m(3)}},290:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},291:function(t,e,r){"use strict";var n=r(25),o=r(81),c=r(34);t.exports=function(t){for(var e=n(this),r=c(e),l=arguments.length,d=o(l>1?arguments[1]:void 0,r),h=l>2?arguments[2]:void 0,f=void 0===h?r:o(h,r);f>d;)e[d++]=t;return e}},292:function(t,e){t.exports=class{constructor(t){this.color=t}parseAlphaColor(){return/^rgba\((\d{1,3}%?\s*,\s*){3}(\d*(?:\.\d+)?)\)$/.test(this.color)?this.parseRgba():/^hsla\(\d+\s*,\s*([\d.]+%\s*,\s*){2}(\d*(?:\.\d+)?)\)$/.test(this.color)?this.parseHsla():/^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/.test(this.color)?this.parseAlphaHex():/^transparent$/.test(this.color)?this.parseTransparent():{color:this.color,opacity:"1"}}parseRgba(){return{color:this.color.replace(/,(?!.*,).*(?=\))|a/g,""),opacity:this.color.match(/\.\d+|[01](?=\))/)[0]}}parseHsla(){return{color:this.color.replace(/,(?!.*,).*(?=\))|a/g,""),opacity:this.color.match(/\.\d+|[01](?=\))/)[0]}}parseAlphaHex(){return{color:5===this.color.length?this.color.substring(0,4):this.color.substring(0,7),opacity:5===this.color.length?(parseInt(this.color.substring(4,5)+this.color.substring(4,5),16)/255).toFixed(2):(parseInt(this.color.substring(7,9),16)/255).toFixed(2)}}parseTransparent(){return{color:"#fff",opacity:0}}}},293:function(t,e,r){"use strict";r(281)},294:function(t,e,r){var n=r(29)(!1);n.push([t.i,"\n.vue-star-rating-star[data-v-5d61ae9c] {\n    overflow: visible !important;\n}\n.vue-star-rating-star-rotate[data-v-5d61ae9c] {\n    transition: all .25s;\n}\n.vue-star-rating-star-rotate[data-v-5d61ae9c]:hover {\n    transition: transform 0.25s;\n    transform: rotate(-15deg) scale(1.3)\n}\n",""]),t.exports=n},295:function(t,e,r){"use strict";r(282)},296:function(t,e,r){var n=r(29)(!1);n.push([t.i,"\n.vue-star-rating-star[data-v-79b2ecfa] {\n    display: inline-block;\n}\n.vue-star-rating-pointer[data-v-79b2ecfa] {\n    cursor: pointer;\n}\n.vue-star-rating[data-v-79b2ecfa] {\n    display: flex;\n    align-items: center;\n}\n.vue-star-rating-inline[data-v-79b2ecfa] {\n    display: inline-flex;\n}\n.vue-star-rating-rating-text[data-v-79b2ecfa] {\n    margin-left: 7px;\n}\n.vue-star-rating-rtl[data-v-79b2ecfa] {\n    direction: rtl;\n}\n.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-79b2ecfa] {\n    margin-right: 10px;\n    direction: rtl;\n}\n.sr-only[data-v-79b2ecfa] {\n    position: absolute;\n    left: -10000px;\n    top: auto;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n",""]),t.exports=n},306:function(t,e,r){"use strict";r(280),r(195),r(50),r(278),r(133),r(14),r(108),r(51);var n=r(292),o=r.n(n),c={name:"Star",props:{fill:{type:Number,default:0},points:{type:Array,default:function(){return[]}},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},activeBorderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},glow:{type:Number,default:0},glowColor:{type:String,default:null,required:!1},animate:{type:Boolean,default:!1}},data:function(){return{starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:"",glowId:"",isStarActive:!0}},computed:{starPointsToString:function(){return this.starPoints.join(",")},gradId:function(){return"url(#"+this.grad+")"},starSize:function(){var t=this.roundedCorners&&this.borderWidth<=0?parseInt(this.size)-parseInt(this.border):this.size;return parseInt(t)+parseInt(this.border)},starFill:function(){return this.rtl?100-this.fill+"%":this.fill+"%"},border:function(){return this.roundedCorners&&this.borderWidth<=0?6:this.borderWidth},getBorderColor:function(){return this.roundedCorners&&this.borderWidth<=0?this.fill<=0?this.inactiveColor:this.activeColor:this.fill<=0?this.borderColor:this.activeBorderColor},maxSize:function(){return this.starPoints.reduce((function(a,b){return Math.max(a,b)}))},viewBox:function(){return"0 0 "+this.maxSize+" "+this.maxSize},shouldAnimate:function(){return this.animate&&this.isStarActive},strokeLinejoin:function(){return this.roundedCorners?"round":"miter"}},created:function(){this.starPoints=this.points.length?this.points:this.starPoints,this.calculatePoints(),this.grad=this.getRandomId(),this.glowId=this.getRandomId()},methods:{mouseMoving:function(t){"undefined"!==t.touchAction&&this.$emit("star-mouse-move",{event:t,position:this.getPosition(t),id:this.starId})},touchStart:function(){var t=this;this.$nextTick((function(){t.isStarActive=!0}))},touchEnd:function(){var t=this;this.$nextTick((function(){t.isStarActive=!1}))},getPosition:function(t){var e=.92*this.size,r=this.rtl?Math.min(t.offsetX,45):Math.max(t.offsetX,1),n=Math.round(100/e*r);return Math.min(n,100)},selected:function(t){this.$emit("star-selected",{id:this.starId,position:this.getPosition(t)})},getRandomId:function(){return Math.random().toString(36).substring(7)},calculatePoints:function(){var t=this;this.starPoints=this.starPoints.map((function(e,i){var r=i%2==0?1.5*t.border:0;return t.size/t.maxSize*e+r}))},getColor:function(t){return new o.a(t).parseAlphaColor().color},getOpacity:function(t){return new o.a(t).parseAlphaColor().opacity}}},l=(r(293),r(19)),d={components:{star:Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("svg",{class:["vue-star-rating-star",{"vue-star-rating-star-rotate":t.shouldAnimate}],attrs:{height:t.starSize,width:t.starSize,viewBox:t.viewBox},on:{mousemove:t.mouseMoving,click:t.selected,touchstart:t.touchStart,touchend:t.touchEnd}},[e("linearGradient",{attrs:{id:t.grad,x1:"0",x2:"100%",y1:"0",y2:"0"}},[e("stop",{attrs:{offset:t.starFill,"stop-color":t.rtl?t.getColor(t.inactiveColor):t.getColor(t.activeColor),"stop-opacity":t.rtl?t.getOpacity(t.inactiveColor):t.getOpacity(t.activeColor)}}),t._v(" "),e("stop",{attrs:{offset:t.starFill,"stop-color":t.rtl?t.getColor(t.activeColor):t.getColor(t.inactiveColor),"stop-opacity":t.rtl?t.getOpacity(t.activeColor):t.getOpacity(t.inactiveColor)}})],1),t._v(" "),e("filter",{attrs:{id:t.glowId,height:"130%",width:"130%",filterUnits:"userSpaceOnUse"}},[e("feGaussianBlur",{attrs:{stdDeviation:t.glow,result:"coloredBlur"}}),t._v(" "),e("feMerge",[e("feMergeNode",{attrs:{in:"coloredBlur"}}),t._v(" "),e("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),t._v(" "),t.glowColor&&t.glow>0?e("polygon",{directives:[{name:"show",rawName:"v-show",value:t.fill>1,expression:"fill > 1"}],attrs:{points:t.starPointsToString,fill:t.gradId,stroke:t.glowColor,filter:"url(#"+t.glowId+")","stroke-width":t.border}}):t._e(),t._v(" "),e("polygon",{attrs:{points:t.starPointsToString,fill:t.gradId,stroke:t.getBorderColor,"stroke-width":t.border,"stroke-linejoin":t.strokeLinejoin}}),t._v(" "),e("polygon",{attrs:{points:t.starPointsToString,fill:t.gradId}})],1)}),[],!1,null,"5d61ae9c",null).exports},model:{prop:"rating",event:"rating-selected"},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},roundStartRating:{type:Boolean,default:!0},activeColor:{type:[String,Array],default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starPoints:{type:Array,default:function(){return[]}},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},activeBorderColor:{type:[String,Array],default:null},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},padding:{type:Number,default:0},rtl:{type:Boolean,default:!1},fixedPoints:{type:Number,default:null},glow:{type:Number,default:0},glowColor:{type:String,default:"#fff"},clearable:{type:Boolean,default:!1},activeOnClick:{type:Boolean,default:!1},animate:{type:Boolean,default:!1}},data:function(){return{step:0,fillLevel:[],currentRating:0,selectedRating:0,ratingSelected:!1}},computed:{formattedRating:function(){return null===this.fixedPoints?this.currentRating:this.currentRating.toFixed(this.fixedPoints)},shouldRound:function(){return this.ratingSelected||this.roundStartRating},margin:function(){return this.padding+this.borderWidth},activeColors:function(){return Array.isArray(this.activeColor)?this.padColors(this.activeColor,this.maxRating,this.activeColor.slice(-1)[0]):new Array(this.maxRating).fill(this.activeColor)},currentActiveColor:function(){return this.activeOnClick?this.selectedRating>0?this.activeColors[Math.ceil(this.selectedRating)-1]:this.inactiveColor:this.currentRating>0?this.activeColors[Math.ceil(this.currentRating)-1]:this.inactiveColor},activeBorderColors:function(){if(Array.isArray(this.activeBorderColor))return this.padColors(this.activeBorderColor,this.maxRating,this.activeBorderColor.slice(-1)[0]);var t=this.activeBorderColor?this.activeBorderColor:this.borderColor;return new Array(this.maxRating).fill(t)},currentActiveBorderColor:function(){return this.activeOnClick?this.selectedRating>0?this.activeBorderColors[Math.ceil(this.selectedRating)-1]:this.borderColor:this.currentRating>0?this.activeBorderColors[Math.ceil(this.currentRating)-1]:this.borderColor}},watch:{rating:function(t){this.currentRating=t,this.selectedRating=t,this.createStars(this.shouldRound)}},created:function(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.currentRating,this.createStars(this.roundStartRating)},methods:{setRating:function(t,e){if(!this.readOnly){var r=this.rtl?(100-t.position)/100:t.position/100;this.currentRating=(t.id+r-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,e?(this.createStars(!0,!0),this.clearable&&this.currentRating===this.selectedRating?this.selectedRating=0:this.selectedRating=this.currentRating,this.$emit("rating-selected",this.selectedRating),this.ratingSelected=!0):(this.createStars(!0,!this.activeOnClick),this.$emit("current-rating",this.currentRating))}},resetRating:function(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars(this.shouldRound))},createStars:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.round();for(var i=0;i<this.maxRating;i++){var r=0;i<this.currentRating&&(r=this.currentRating-i>1?100:100*(this.currentRating-i)),e&&(this.fillLevel[i]=Math.round(r))}},round:function(){var t=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*t)/t)},padColors:function(t,e,r){return Object.assign(new Array(e).fill(r),t)}}},h=d,f=(r(295),Object(l.a)(h,(function(){var t=this,e=t._self._c;return e("div",{class:["vue-star-rating",{"vue-star-rating-rtl":t.rtl},{"vue-star-rating-inline":t.inline}]},[e("div",{staticClass:"sr-only"},[t._t("screen-reader",(function(){return[e("span",[t._v("Rated "+t._s(t.selectedRating)+" stars out of "+t._s(t.maxRating))])]}),{rating:t.selectedRating,stars:t.maxRating})],2),t._v(" "),e("div",{staticClass:"vue-star-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,(function(r){return e("span",{key:r,class:[{"vue-star-rating-pointer":!t.readOnly},"vue-star-rating-star"],style:{"margin-right":t.margin+"px"}},[e("star",{attrs:{fill:t.fillLevel[r-1],size:t.starSize,points:t.starPoints,"star-id":r,step:t.step,"active-color":t.currentActiveColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"active-border-color":t.currentActiveBorderColor,"border-width":t.borderWidth,"rounded-corners":t.roundedCorners,rtl:t.rtl,glow:t.glow,"glow-color":t.glowColor,animate:t.animate},on:{"star-selected":function(e){return t.setRating(e,!0)},"star-mouse-move":t.setRating}})],1)})),t._v(" "),t.showRating?e("span",{class:["vue-star-rating-rating-text",t.textClass]},[t._v(" "+t._s(t.formattedRating))]):t._e()],2)])}),[],!1,null,"79b2ecfa",null));e.a=f.exports},313:function(t,e,r){var content=r(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("3d95c694",content,!0,{sourceMap:!1})},320:function(t,e,r){"use strict";r(313)},321:function(t,e,r){var n=r(29)(!1);n.push([t.i,".item-contain[data-v-5520750a]{margin-left:8%;width:80%;display:grid;grid-template-columns:1fr 2fr}img[data-v-5520750a]{width:100%}",""]),t.exports=n},333:function(t,e,r){"use strict";r.r(e);r(49),r(31),r(65),r(40),r(26),r(14),r(63),r(32),r(64);var n=r(23),o=r(41),c=r(306),l=r(279);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{StarRating:c.a,AppFeatureProducts:l.default},data:function(){return{id:this.$route.params.id,quantity:1,tempcart:[]}},computed:h(h({},Object(o.c)(["storedata"])),{},{product:function(){for(var t,i=0;i<this.storedata.length;i++)this.storedata[i].id===this.id&&(t=this.storedata[i]);return t}}),methods:{cartAdd:function(){var t=this.product;t=h(h({},t),{},{quantity:this.quantity}),this.tempcart.push(t),this.$store.commit("addToCart",h({},t))}}},v=(r(320),r(19)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"item-contain"},[e("section",{staticClass:"img"},[e("img",{attrs:{src:"/products/".concat(t.product.img)}})]),t._v(" "),e("section",{staticClass:"product-info"},[e("h1",[t._v(t._s(t.product.name))]),t._v(" "),e("star-rating",{staticStyle:{margin:"5px 0"},attrs:{rating:t.product.starrating,"star-size":15,"active-color":"#000"}}),t._v(" "),e("h4",{staticClass:"price"},[t._v(t._s(t._f("dollar")(t.product.price)))]),t._v(" "),e("ul",t._l(t.product.description,(function(r){return e("li",{key:r,staticClass:"product-detail"},[t._v(t._s(r))])})),0),t._v(" "),e("div",{staticClass:"product-options"},[e("div",{staticClass:"quantity"},[e("button",{staticClass:"update-num",on:{click:function(e){t.quantity>0?t.quantity--:t.quanty=0}}},[t._v("-")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),t._v(" "),e("button",{staticClass:"update-num",on:{click:function(e){t.quantity++}}},[t._v("+")])])]),t._v(" "),e("p",[e("button",{staticClass:"button purchase",on:{click:t.cartAdd}},[t._v("Add to Cart")])])],1)]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"review"},[e("h2",[t._v("Reviews")]),t._v(" "),e("star-rating",{staticStyle:{},attrs:{rating:t.product.starrating,"active-color":"#000","star-size":15}}),t._v(" "),e("p",[t._v("Great Product!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.")])],1),t._v(" "),e("app-feature-products")],1)}),[],!1,null,"5520750a",null);e.default=component.exports;installComponents(component,{AppFeatureProducts:r(279).default})}}]);