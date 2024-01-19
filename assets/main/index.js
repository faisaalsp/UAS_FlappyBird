System.register("chunks:///_virtual/Audio.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var i,r,t,e,u,n,c,a;return{setters:[function(o){i=o.applyDecoratedDescriptor,r=o.inheritsLoose,t=o.initializerDefineProperty,e=o.assertThisInitialized},function(o){u=o.cclegacy,n=o._decorator,c=o.AudioSource,a=o.Component}],execute:function(){var s,l,p,d,f;u._RF.push({},"3bf8b0e6wVBjYTKP6UN3ybM","Audio",void 0);var y=n.ccclass,h=n.property;o("Audio",(s=y("Audio"),l=h(c),s((f=i((d=function(o){function i(){for(var i,r=arguments.length,u=new Array(r),n=0;n<r;n++)u[n]=arguments[n];return i=o.call.apply(o,[this].concat(u))||this,t(i,"audioSource",f,e(i)),i}r(i,o);var u=i.prototype;return u.start=function(){this.playBackgroundMusic()},u.playBackgroundMusic=function(){this.audioSource&&this.audioSource.play()},u.stopBackgroundMusic=function(){this.audioSource&&this.audioSource.stop()},i}(a)).prototype,"audioSource",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=d))||p));u._RF.pop()}}}));

System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObScript.ts"],(function(e){var t,i,n,s,r,a,o,h,p,l,u,d,c,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,o=e.Node,h=e.Label,p=e.Prefab,l=e.instantiate,u=e.Vec3,d=e.randomRangeInt,c=e.Component},function(e){g=e.ObScript}],execute:function(){var b,f,P,y,S,k,m,x,v;r._RF.push({},"ed1f8xFc6lFJoUgmf4xijik","Background",void 0);var B=a.ccclass,R=a.property;e("Background",(b=B("Background"),f=R({type:o}),P=R({type:h}),y=R({type:p}),b((m=t((k=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,n(t,"parentBackground",m,s(t)),n(t,"skorLabel",x,s(t)),t.hitungPipa=0,t.skorAkhir=0,t.cekStop=!1,n(t,"prefabPipa",v,s(t)),t.Green=void 0,t.Red=void 0,t.pipa=[],t.temp=300,t.increaseSpeed=1,t.temp2=0,t}i(t,e);var r=t.prototype;return r.hitung=function(e){this.hitungPipa=e,this.skorLabel.string=""+this.hitungPipa},r.tambah=function(){this.hitungPipa=Math.floor(this.hitungPipa+1),this.skorLabel.string=""+this.hitungPipa},r.berhenti=function(e){return e<0},r.start=function(){var e=l(this.prefabPipa);this.Green=e.getChildByName("Green"),this.Red=e.getChildByName("Red"),g.Bg?(this.Green.setSiblingIndex(1),this.Red.setSiblingIndex(0)):(this.Green.setSiblingIndex(0),this.Red.setSiblingIndex(1)),e.setParent(this.node.parent),e.setPosition(new u(200,0,0)),this.pipa.push(e),e.setParent(this.node.parent),e.setPosition(new u(300,0,0)),this.pipa.push(e);var t=new o;t.setParent(this.node.parent),this.skorLabel.node.setParent(t),t.addChild(this.skorLabel.node)},r.delay=function(e){return new Promise((function(t){return setTimeout(t,e)}))},r.update=function(e){this.tambah();var t=this.node.getPosition();if(t.x-=57.6*this.increaseSpeed*e,this.hitungPipa>this.temp&&(this.increaseSpeed+=.2,this.temp+=200),this.temp2=this.increaseSpeed,this.hitungPipa%500==0&&(this.increaseSpeed=.1,this.delay(3e3)),this.hitungPipa%700==0&&(this.increaseSpeed=1,this.delay(3e3)),this.hitungPipa>200&&(t.y=1e3),t.x<=-288){t.x+=288;var i=l(this.prefabPipa);this.Green=i.getChildByName("Green"),this.Green=i.getChildByName("Red"),g.Bg?(this.Green.setSiblingIndex(1),this.Red.setSiblingIndex(0)):(this.Green.setSiblingIndex(0),this.Red.setSiblingIndex(1)),i.setParent(this.node.parent),i.setPosition(new u(200,-60,0)),this.pipa.push(i)}this.node.setPosition(t);for(var n=0;n<this.pipa.length;n++){var s=this.pipa[n].getPosition();s.x-=60*this.increaseSpeed*e,this.berhenti(s.x)&&!this.cekStop&&(this.cekStop=!0),s.x<=-200&&(s.x+=400,s.y=d(-50,100),this.cekStop=!1),this.pipa[n].setPosition(s)}},t}(c)).prototype,"parentBackground",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=t(k.prototype,"skorLabel",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(k.prototype,"prefabPipa",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=k))||S));r._RF.pop()}}}));

System.register("chunks:///_virtual/BackgroundNight.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObScript.ts"],(function(e){var t,i,n,r,s,a,o,h,p,l,u,c,d,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){s=e.cclegacy,a=e._decorator,o=e.Node,h=e.Label,p=e.Prefab,l=e.instantiate,u=e.Vec3,c=e.randomRangeInt,d=e.Component},function(e){g=e.ObScript}],execute:function(){var b,P,f,S,k,y,x,m,v;s._RF.push({},"8a4beSbZQxDjKMnPzPcTmi2","BackgroundNight",void 0);var B=a.ccclass,G=a.property;e("Background",(b=B("BackgroundNight"),P=G({type:o}),f=G({type:h}),S=G({type:p}),b((x=t((y=function(e){function t(){for(var t,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return t=e.call.apply(e,[this].concat(s))||this,n(t,"parentBackground",x,r(t)),n(t,"skorLabel",m,r(t)),t.hitungPipa=0,t.skorAkhir=0,t.cekStop=!1,n(t,"prefabPipa",v,r(t)),t.Green=void 0,t.Red=void 0,t.pipa=[],t.temp=300,t.increaseSpeed=1,t}i(t,e);var s=t.prototype;return s.hitung=function(e){this.hitungPipa=e,this.skorLabel.string=""+this.hitungPipa},s.tambah=function(){this.hitungPipa=Math.floor(this.hitungPipa+1),this.skorLabel.string=""+this.hitungPipa},s.berhenti=function(e){return e<0},s.start=function(){var e=l(this.prefabPipa);this.Green=e.getChildByName("Green"),this.Green=e.getChildByName("Red"),g.Bg?(this.Green.setSiblingIndex(1),this.Red.setSiblingIndex(0)):(this.Green.setSiblingIndex(0),this.Red.setSiblingIndex(1)),e.setParent(this.node.parent),e.setPosition(new u(200,0,0)),this.pipa.push(e),e.setParent(this.node.parent),e.setPosition(new u(300,0,0)),this.pipa.push(e);var t=new o;t.setParent(this.node.parent),this.skorLabel.node.setParent(t),t.addChild(this.skorLabel.node)},s.update=function(e){this.tambah();var t=this.node.getPosition();if(t.x-=57.6*this.increaseSpeed*e,this.hitungPipa>this.temp&&(this.increaseSpeed+=.2,this.temp+=200),t.x<=-288){t.x+=288;var i=l(this.prefabPipa);this.Green=i.getChildByName("Green"),this.Green=i.getChildByName("Red"),g.Bg?(this.Green.setSiblingIndex(1),this.Red.setSiblingIndex(0)):(this.Green.setSiblingIndex(0),this.Red.setSiblingIndex(1)),i.setParent(this.node.parent),i.setPosition(new u(200,-60,0)),this.pipa.push(i)}this.node.setPosition(t);for(var n=0;n<this.pipa.length;n++){var r=this.pipa[n].getPosition();r.x-=60*this.increaseSpeed*e,this.berhenti(r.x)&&!this.cekStop&&(this.cekStop=!0),r.x<=-200&&(r.x+=400,r.y=c(-50,100),this.cekStop=!1),this.pipa[n].setPosition(r)}},t}(d)).prototype,"parentBackground",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=t(y.prototype,"skorLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(y.prototype,"prefabPipa",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=y))||k));s._RF.pop()}}}));

System.register("chunks:///_virtual/Bg.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,e,n,r,c,i,p;return{setters:[function(t){o=t.applyDecoratedDescriptor,e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,c=t.Button,i=t.director,p=t.Component}],execute:function(){var u,a,s,l;n._RF.push({},"537c20+VapPTIvrGdaEjM1B","Bg",void 0);var y=r.ccclass,d=r.property;t("Bg",(u=y("Bg"),a=d({type:c}),u((o((l=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var n=o.prototype;return n.onLoad=function(){this.node.on("click",this.onPlayButtonClick,this)},n.onPlayButtonClick=function(){i.loadScene("BgMenu")},o}(p)).prototype,"onLoad",[a],Object.getOwnPropertyDescriptor(l.prototype,"onLoad"),l.prototype),s=l))||s));n._RF.pop()}}}));

System.register("chunks:///_virtual/BgChoose.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,e,i,r,n,s,l,c,a,u;return{setters:[function(t){o=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.createClass,r=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,c=t.Button,a=t.Color,u=t.Component}],execute:function(){var h,p,f,y,g,C,B,d;s._RF.push({},"15951o/ZPBPVY/OwS59C5EE","BgChoose",void 0);var b=l.ccclass,m=l.property;t("BgChoose",(h=b("BgChoose"),p=m({type:c}),f=m({type:c}),h(((d=function(t){function o(){for(var o,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return o=t.call.apply(t,[this].concat(i))||this,r(o,"city",C,n(o)),r(o,"forest",B,n(o)),o}e(o,t);var s=o.prototype;return s.start=function(){this.city.node.on("click",this.isChoosed.bind(this,"City"),this),this.forest.node.on("click",this.isChoosed.bind(this,"Forrest"),this)},s.isChoosed=function(t){this.city.normalColor=a.WHITE,this.forest.normalColor=a.WHITE,"City"===t?(this.city.normalColor=a.GREEN,o.Bg=!0):"Forrest"===t&&(this.forest.normalColor=a.GREEN,o.Bg=!1)},i(o,null,[{key:"Bg",get:function(){return this._Bg},set:function(t){this._Bg=t}}]),o}(u))._Bg=!0,C=o((g=d).prototype,"city",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=o(g.prototype,"forest",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=g))||y));s._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BirdChoose.ts"],(function(e){var i,t,n,r,s,d,o,l,a,h,u,p,g,c;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){s=e.cclegacy,d=e._decorator,o=e.Animation,l=e.input,a=e.Input,h=e.Collider2D,u=e.Contact2DType,p=e.director,g=e.Component},function(e){c=e.BirdChoose}],execute:function(){var v,B,m,b,y;s._RF.push({},"988deD2vUZDNa41M/ghvh+5","Bird",void 0);var O=d.ccclass,I=d.property;e("Bird",(v=O("Bird"),B=I({type:o}),v((y=i((b=function(e){function i(){for(var i,t=arguments.length,s=new Array(t),d=0;d<t;d++)s[d]=arguments[d];return(i=e.call.apply(e,[this].concat(s))||this).gameOver=null,i.isGameOver=!1,i.speedTurun=100,i.redBird=null,i.blueBird=null,i.yellowBird=null,n(i,"shake",y,r(i)),i}t(i,e);var s=i.prototype;return s.start=function(){l.on(a.EventType.TOUCH_START,this.onInputReceived,this),this.node.getComponent(h).on(u.BEGIN_CONTACT,this.onCollide,this),this.gameOver=this.node.parent.getChildByName("gameover"),this.gameOver&&(this.gameOver.active=!1,this.gameOver.parent&&this.gameOver.setSiblingIndex(this.gameOver.parent.children.length-1)),this.redBird=this.node.getChildByName("bird1"),this.blueBird=this.node.getChildByName("bird2"),this.yellowBird=this.node.getChildByName("bird3"),"1"===c.Map?(this.blueBird.setSiblingIndex(0),this.redBird.setSiblingIndex(2),this.yellowBird.setSiblingIndex(0)):"2"===c.Map?(this.blueBird.setSiblingIndex(2),this.redBird.setSiblingIndex(0),this.yellowBird.setSiblingIndex(1)):"3"===c.Map&&(this.blueBird.setSiblingIndex(1),this.redBird.setSiblingIndex(0),this.yellowBird.setSiblingIndex(2))},s.onCollide=function(e,i){this.isGameOver||0!=i.tag||(this.gameOver&&(this.gameOver.active=!0,this.gameOver.parent&&this.gameOver.setSiblingIndex(this.gameOver.parent.children.length-1),p.pause()),this.isGameOver=!0,l.off(a.EventType.TOUCH_START,this.onInputReceived,this))},s.onInputReceived=function(e){this.speedTurun=250},s.update=function(e){var i=this.node.getPosition();this.speedTurun-=300*e,i.y+=this.speedTurun*e,this.node.setPosition(i)},i}(g)).prototype,"shake",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=b))||m));s._RF.pop()}}}));

System.register("chunks:///_virtual/BirdChoose.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,e,n,i,r,l,s,u,a,c;return{setters:[function(t){o=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.createClass,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){l=t.cclegacy,s=t._decorator,u=t.Button,a=t.Color,c=t.Component}],execute:function(){var h,p,d,B,y,f,b,C,M,g;l._RF.push({},"578f289zs1LwoW4WV+C94MZ","BirdChoose",void 0);var m=s.ccclass,w=s.property;t("BirdChoose",(h=m("BirdChoose"),p=w({type:u}),d=w({type:u}),B=w({type:u}),h(((g=function(t){function o(){for(var o,e=arguments.length,n=new Array(e),l=0;l<e;l++)n[l]=arguments[l];return o=t.call.apply(t,[this].concat(n))||this,i(o,"blueButton",b,r(o)),i(o,"redButton",C,r(o)),i(o,"yellowButton",M,r(o)),o}e(o,t);var l=o.prototype;return l.start=function(){this.blueButton.node.on("click",this.isChoosed.bind(this,"Bird1"),this),this.redButton.node.on("click",this.isChoosed.bind(this,"Bird2"),this),this.yellowButton.node.on("click",this.isChoosed.bind(this,"Bird3"),this)},l.isChoosed=function(t){this.blueButton.normalColor=a.WHITE,this.redButton.normalColor=a.WHITE,this.yellowButton.normalColor=a.WHITE,"Bird1"===t?(this.blueButton.normalColor=a.GREEN,o.Map="1",console.log(o.Map)):"Bird2"===t?(this.redButton.normalColor=a.GREEN,o.Map="2",console.log(o.Map)):"Bird3"===t&&(this.yellowButton.normalColor=a.GREEN,o.Map="3",console.log(o.Map))},n(o,null,[{key:"Map",get:function(){return this._Map},set:function(t){this._Map=t}}]),o}(c))._Map="1",b=o((f=g).prototype,"blueButton",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=o(f.prototype,"redButton",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=o(f.prototype,"yellowButton",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=f))||y));l._RF.pop()}}}));

System.register("chunks:///_virtual/ButtonBack.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,n,e,r,c,i,u;return{setters:[function(t){o=t.applyDecoratedDescriptor,n=t.inheritsLoose},function(t){e=t.cclegacy,r=t._decorator,c=t.Button,i=t.director,u=t.Component}],execute:function(){var a,p,s,l;e._RF.push({},"27aa34u7oNAEKg9lvUkYRMz","ButtonBack",void 0);var y=r.ccclass,B=r.property;t("ButtonBack",(a=y("ButtonBack"),p=B({type:c}),a((o((l=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var e=o.prototype;return e.onLoad=function(){this.node.on("click",this.onPlayButtonClick,this)},e.onPlayButtonClick=function(){i.loadScene("HomeScreen")},o}(u)).prototype,"onLoad",[p],Object.getOwnPropertyDescriptor(l.prototype,"onLoad"),l.prototype),s=l))||s));e._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,n,a,o,s,u,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Prefab,u=e.instantiate,c=e.Component}],execute:function(){var p,l,d,f,h;a._RF.push({},"bed5c5G6EJBT7KRvpY6yUAo","Ground",void 0);var b=o.ccclass,y=o.property;e("Ground",(p=b("Ground"),l=y({type:s}),p((h=t((f=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"prefabBase",h,n(t)),t.baseNode=void 0,t.currentTime=0,t}r(t,e);var a=t.prototype;return a.start=function(){this.baseNode=u(this.prefabBase),this.baseNode.setParent(this.node.parent),this.schedule(this.updateTime,1)},a.updateTime=function(){this.currentTime+=1},a.update=function(e){},t}(c)).prototype,"prefabBase",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=f))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Audio.ts","./Background.ts","./BackgroundNight.ts","./Bg.ts","./BgChoose.ts","./Bird.ts","./BirdChoose.ts","./ButtonBack.ts","./Ground.ts","./ObScript.ts","./Obstacle.ts","./OpBird.ts","./Pause.ts","./PlayButton.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ObScript.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,i,o,s,l,c,a,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.createClass,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){s=e.cclegacy,l=e._decorator,c=e.Button,a=e.Color,u=e.Component}],execute:function(){var p,h,d,f,b,g,y,R;s._RF.push({},"fe9bbXZka5Jl7r3bmKcoLEt","ObScript",void 0);var C=l.ccclass,m=l.property;e("ObScript",(p=C("ObScript"),h=m({type:c}),d=m({type:c}),p(((R=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t=e.call.apply(e,[this].concat(n))||this,i(t,"Green",g,o(t)),i(t,"Red",y,o(t)),t}r(t,e);var s=t.prototype;return s.start=function(){this.Green.node.on("click",this.isChoosed.bind(this,"Green"),this),this.Red.node.on("click",this.isChoosed.bind(this,"Red"),this)},s.isChoosed=function(e){this.Green.normalColor=a.WHITE,this.Red.normalColor=a.WHITE,"Green"===e?(this.Green.normalColor=a.GREEN,t.Bg=!0):"Red"===e&&(this.Red.normalColor=a.GREEN,t.Bg=!1)},n(t,null,[{key:"Bg",get:function(){return this._Bg},set:function(e){this._Bg=e}}]),t}(u))._Bg=!1,g=t((b=R).prototype,"Green",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=t(b.prototype,"Red",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=b))||f));s._RF.pop()}}}));

System.register("chunks:///_virtual/Obstacle.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,e,n,c,r,i,p;return{setters:[function(t){o=t.applyDecoratedDescriptor,e=t.inheritsLoose},function(t){n=t.cclegacy,c=t._decorator,r=t.Button,i=t.director,p=t.Component}],execute:function(){var s,a,u,l;n._RF.push({},"cc6b8Go4fNPaJMSYKegi9zQ","Obstacle",void 0);var y=c.ccclass,d=c.property;t("Bg",(s=y("Obstacle"),a=d({type:r}),s((o((l=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var n=o.prototype;return n.onLoad=function(){this.node.on("click",this.onPlayButtonClick,this)},n.onPlayButtonClick=function(){i.loadScene("ObMenu")},o}(p)).prototype,"onLoad",[a],Object.getOwnPropertyDescriptor(l.prototype,"onLoad"),l.prototype),u=l))||u));n._RF.pop()}}}));

System.register("chunks:///_virtual/OpBird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,r,n,e,i,c,p;return{setters:[function(t){o=t.applyDecoratedDescriptor,r=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,i=t.Button,c=t.director,p=t.Component}],execute:function(){var s,u,a,d;n._RF.push({},"87d5doy0kFNZ4BdZEzIFnsJ","OpBird",void 0);var l=e.ccclass,y=e.property;t("OpBird",(s=l("OpBird"),u=y({type:i}),s((o((d=function(t){function o(){return t.apply(this,arguments)||this}r(o,t);var n=o.prototype;return n.onLoad=function(){this.node.on("click",this.onPlayButtonClick,this)},n.onPlayButtonClick=function(){c.loadScene("BirdMenu")},o}(p)).prototype,"onLoad",[u],Object.getOwnPropertyDescriptor(d.prototype,"onLoad"),d.prototype),a=d))||a));n._RF.pop()}}}));

System.register("chunks:///_virtual/Pause.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,s,n,a,r,o,u,l,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,s=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,o=e.Button,u=e.Label,l=e.director,c=e.Component}],execute:function(){var p,h,d,f,P;a._RF.push({},"7ce0axWos9NMq2R6+aVr//Q","Pause",void 0);var b=r.ccclass,g=r.property;e("Pause",(p=b("Pause"),h=g({type:o}),p((P=t((f=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,s(t,"pauseLabel",P,n(t)),t.ifPaused=!1,t}i(t,e);var a=t.prototype;return a.start=function(){this.node.getChildByName("PauseButton").on("click",this.isPaused,this),this.pauseLabel=this.node.getComponentInChildren(u),this.node.setSiblingIndex(4)},a.isPaused=function(){this.ifPaused?(this.ifPaused=!1,l.resume(),this.pauseLabel.string="PAUSE"):(this.ifPaused=!0,this.pauseLabel.string="RESUME",l.pause()),console.log("masuk")},a.update=function(e){},t}(c)).prototype,"pauseLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/PlayButton.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BgChoose.ts"],(function(o){var t,n,e,c,r,i,a,u;return{setters:[function(o){t=o.applyDecoratedDescriptor,n=o.inheritsLoose},function(o){e=o.cclegacy,c=o._decorator,r=o.Button,i=o.director,a=o.Component},function(o){u=o.BgChoose}],execute:function(){var l,p,s,y;e._RF.push({},"08418cgB+pCSYzfh94NQmML","PlayButton",void 0);var B=c.ccclass,d=c.property;o("PlayButton",(l=B("PlayButton"),p=d({type:r}),l((t((y=function(o){function t(){return o.apply(this,arguments)||this}n(t,o);var e=t.prototype;return e.onLoad=function(){this.node.on("click",this.onPlayButtonClick,this)},e.onPlayButtonClick=function(){console.log("Play button clicked"),u.Bg?i.loadScene("Game"):i.loadScene("GameBg")},t}(a)).prototype,"onLoad",[p],Object.getOwnPropertyDescriptor(y.prototype,"onLoad"),y.prototype),s=y))||s));e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});