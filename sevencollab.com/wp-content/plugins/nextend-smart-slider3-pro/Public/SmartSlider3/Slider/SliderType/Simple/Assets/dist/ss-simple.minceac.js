!function(t){var i=t;i._N2=i._N2||{_r:[],_d:[],r:function(){this._r.push(arguments)},d:function(){this._d.push(arguments)}};var s,h=t.document,n=(h.documentElement,t.setTimeout),a=t.clearTimeout,r=i._N2,o=(t.requestAnimationFrame,Object.assign),c=function(t,i){return t.dispatchEvent(i)},u=function(t,i){return c(t,new Event(i,{bubbles:!1,cancelable:!1}))},l=function(t,i,s){t.addEventListener(i,s,{once:!0})};navigator.userAgent.indexOf("+http://www.google.com/bot.html")>-1||i.requestIdleCallback,i.cancelIdleCallback;s=function(){h.body},"complete"===h.readyState||"interactive"===h.readyState?s():Document&&Document.prototype&&Document.prototype.addEventListener&&Document.prototype.addEventListener!==h.addEventListener?Document.prototype.addEventListener.call(h,"DOMContentLoaded",s):h.addEventListener("DOMContentLoaded",s),r.d("SmartSliderMainAnimationSimple",["SmartSliderMainAnimationAbstract"],(function(){function t(t,i){switch(this.postBackgroundAnimation=!1,this._currentBackgroundAnimation=!1,this.reverseSlideIndex=null,(i=o({delay:0,type:"horizontal",shiftedBackgroundAnimation:"auto"},i)).delay/=1e3,i.duration<300&&(i.type="no"),r.SmartSliderMainAnimationAbstract.prototype.constructor.call(this,t,i),t.isAdmin||t.disabled.postBackgroundAnimations||!this.slider.parameters.postBackgroundAnimations||(this.isReverseAllowed=!1,this.postBackgroundAnimation=new r.SmartSliderPostBackgroundAnimation(t,this)),this.parameters.type){case"no":this.animation=this._mainAnimationNo,this.isNoAnimation=!0;break;case"fade":this.animation=this._mainAnimationFade;break;case"crossfade":this.animation=this._mainAnimationCrossFade;break;case"vertical":t.backgrounds.hasFixed?this.animation=this._mainAnimationFade:this.animation=this._mainAnimationVertical;break;case"vertical-reversed":t.backgrounds.hasFixed?this.animation=this._mainAnimationFade:this.animation=this._mainAnimationVerticalReversed;break;case"horizontal-reversed":this.animation=this._mainAnimationHorizontalReversed;break;default:this.animation=this._mainAnimationHorizontal}}return t.prototype=Object.create(r.SmartSliderMainAnimationAbstract.prototype),t.prototype.constructor=t,t.prototype.changeTo=function(t,i,s,h){this.postBackgroundAnimation&&this.postBackgroundAnimation.prepareToSwitchSlide(t,i),r.SmartSliderMainAnimationAbstract.prototype.changeTo.apply(this,arguments)},t.prototype.setActiveSlide=function(t){for(var i=0;i<this.slider.slides.length;i++)this.slider.slides[i]!==t&&this.hideSlide(this.slider.slides[i])},t.prototype.hideSlide=function(t){r.MW.L(t.SMWs,{x:-1e5*n2const.rtl.modifier})},t.prototype.showSlide=function(t){r.MW.L(t.SMWs,{x:0,y:0})},t.prototype.cleanSlideIndex=function(t){this.hideSlide(this.slider.slides[t])},t.prototype.revertTo=function(t,i){r.MW.L(this.slider.slides[i].SMWs,{zIndex:""}),this.hideSlide(this.slider.slides[i]),r.SmartSliderMainAnimationAbstract.prototype.revertTo.apply(this,arguments)},t.prototype._initAnimation=function(t,i,s){this.animation(t,i,s)},t.prototype.onBackwardChangeToComplete=function(t,i,s){this.reverseSlideIndex=null,this.onChangeToComplete(t,i,s)},t.prototype.onChangeToComplete=function(t,i,s){null!==this.reverseSlideIndex&&(u(this.slider.slides[this.reverseSlideIndex].element,"mainAnimationStartInCancel"),this.reverseSlideIndex=null),this.hideSlide(t),r.SmartSliderMainAnimationAbstract.prototype.onChangeToComplete.apply(this,arguments)},t.prototype.onReverseChangeToComplete=function(t,i,s){this.hideSlide(t),r.SmartSliderMainAnimationAbstract.prototype.onReverseChangeToComplete.apply(this,arguments)},t.prototype._mainAnimationNo=function(t,i){this.parameters.delay=0,this.parameters.duration=.1,this._mainAnimationFade(t,i)},t.prototype._mainAnimationFade=function(t,i){r.MW.L(t.SMWs,{zIndex:23}),this.showSlide(i),t.unsetActive(),i.setActive();var s=this.adjustMainAnimation();if(0!==this.parameters.shiftedBackgroundAnimation){var h=!1,n=!1;if("auto"===this.parameters.shiftedBackgroundAnimation?t.hasLayers()?h=!0:n=!0:h=!0,this._currentBackgroundAnimation&&h){var a=s.outDuration-s.extraDelay;a>0&&this.timeline.shiftChildren(a),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else n&&(s.extraDelay>0&&this.timeline.shiftChildren(s.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}var o=[t.SMWs[0]];!this._currentBackgroundAnimation&&t.SMWs[1]&&o.push(t.SMWs[1]),this.timeline.fromTo(o,s.outDuration,{opacity:1},{opacity:0,ease:this.getEase()},s.outDelay);var c=r.MW.I(i.element);this.timeline.fromTo(c,s.inDuration,{opacity:0},{opacity:1,ease:this.getEase()},s.inDelay),!this._currentBackgroundAnimation&&i.background&&(r.MW.I(i.background.element).opacity=1),l(this.sliderElement,"mainAnimationComplete",function(e){var t=this.slider.slides[e.detail.previousSlideIndex];r.MW.L(t.SMWs,{zIndex:"",opacity:1})}.bind(this)),this.slider.updateInsideSlides([t,i])},t.prototype._mainAnimationCrossFade=function(t,i){r.MW.L(t.SMWs,{zIndex:23}),this.showSlide(i),t.unsetActive(),i.setActive();var s=this.adjustMainAnimation();if(0!=this.parameters.shiftedBackgroundAnimation){var h=!1,n=!1;if("auto"==this.parameters.shiftedBackgroundAnimation?t.hasLayers()?h=!0:n=!0:h=!0,this._currentBackgroundAnimation&&h){var a=s.outDuration-s.extraDelay;a>0&&this.timeline.shiftChildren(a),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else n&&(s.extraDelay>0&&this.timeline.shiftChildren(s.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}var o=[t.SMWs[0]];!this._currentBackgroundAnimation&&t.SMWs[1]&&o.push(t.SMWs[1]),this.timeline.fromTo(o,s.outDuration,{opacity:1},{opacity:0,ease:this.getEase()},s.outDelay);var c=[i.SMWs[0]];!this._currentBackgroundAnimation&&i.SMWs[1]&&c.push(i.SMWs[1]),this.timeline.fromTo(c,s.inDuration,{opacity:0},{opacity:1,ease:this.getEase()},s.inDelay),l(this.sliderElement,"mainAnimationComplete",function(e){var t=this.slider.slides[e.detail.previousSlideIndex],i=this.slider.slides[e.detail.currentSlideIndex];r.MW.L(t.SMWs,{zIndex:"",opacity:1}),r.MW.L(i.SMWs,{opacity:1})}.bind(this)),this.slider.updateInsideSlides([t,i])},t.prototype._mainAnimationHorizontal=function(t,i,s){this.__mainAnimationDirection(t,i,"horizontal",s)},t.prototype._mainAnimationVertical=function(t,i,s){this.showSlide(i),this.__mainAnimationDirection(t,i,"vertical",s)},t.prototype._mainAnimationHorizontalReversed=function(t,i,s){this.__mainAnimationDirection(t,i,"horizontal",!s)},t.prototype._mainAnimationVerticalReversed=function(t,i,s){this.showSlide(i),this.__mainAnimationDirection(t,i,"vertical",!s)},t.prototype.__mainAnimationDirection=function(t,i,s,h){var n=t.SMWs,a=i.SMWs,o=[t,i],c="",u=0;"horizontal"===s?(c="x",u=Math.floor(this.slider.responsive.resizeContext.slideOuterWidth),n2const.rtl.isRtl&&(h=!h)):"vertical"===s&&(c="y",u=Math.floor(this.slider.responsive.resizeContext.slideOuterHeight)),h&&(u*=-1);var f={},v={snap:"x,y",ease:this.getEase()},d={snap:"x,y",ease:this.getEase()};f[c]=u,d[c]=-u,r.MW.L(n,{zIndex:23});var m={zIndex:23};m[c]=u,r.MW.L(a,m),t.unsetActive(),i.setActive();var p,S=this.adjustMainAnimation();if(v[c]=0,this.timeline.fromTo(a,S.inDuration,f,v,S.inDelay),0!=this.parameters.shiftedBackgroundAnimation){var x=!1,y=!1;if("auto"===this.parameters.shiftedBackgroundAnimation?t.hasLayers()?x=!0:y=!0:x=!0,this._currentBackgroundAnimation&&x){var b=S.outDuration-S.extraDelay;b>0&&this.timeline.shiftChildren(b),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup()}else y&&(S.extraDelay>0&&this.timeline.shiftChildren(S.extraDelay),this._currentBackgroundAnimation.shiftedPreSetup&&this._currentBackgroundAnimation._preSetup())}if(this.timeline.to(n,S.outDuration,d,S.outDelay),this.isTouch&&this.isReverseAllowed)if(h?this.slider.blockCarousel&&this.slider.isChangeCarousel("next")||(p=t.getNext()):this.slider.blockCarousel&&this.slider.isChangeCarousel("previous")||(p=t.getPrevious()),p&&p!==i){this.reverseSlideIndex=p.index,this.enableReverseMode(),o.push(p),"vertical"===s&&this.showSlide(p);var D=p.SMWs,z={};z[c]=u,r.MW.L(D,z);var w={},A={snap:"x,y",ease:this.getEase()},I={},k={snap:"x,y",ease:this.getEase()};A[c]=0,w[c]=-u,k[c]=u,I[c]=0,p.p("mainAnimationStartIn",{mainAnimation:this,previousSlideIndex:t.index,currentSlideIndex:p.index,isSystem:!1}),this.reverseTimeline.paused(!0),this.reverseTimeline.eventCallback("onComplete",this.onBackwardChangeToComplete.bind(this),[t,p,!1]),this.reverseTimeline.fromTo(D,S.inDuration,w,A,S.inDelay),this.reverseTimeline.fromTo(n,S.inDuration,I,k,S.inDelay)}else this.reverseSlideIndex=null;l(this.sliderElement,"mainAnimationComplete",function(e){var t=this.slider.slides[e.detail.previousSlideIndex],i=this.slider.slides[e.detail.currentSlideIndex];r.MW.L(t.SMWs,{zIndex:""}),r.MW.L(i.SMWs,{zIndex:""})}.bind(this)),this.slider.updateInsideSlides(o)},t.prototype.getExtraDelay=function(){return 0},t.prototype.adjustMainAnimation=function(){var t=this.parameters.duration,i=this.parameters.delay,s=this.timeline.totalDuration(),h=this.getExtraDelay();if(s>0){var n=t+i;if(!(n>s))return{inDuration:t,outDuration:t,inDelay:s-t,outDelay:h,extraDelay:h};t=t*s/n,(i=i*s/n)<h&&(t-=h-i,i=h)}else i+=h;return{inDuration:t,outDuration:t,inDelay:i,outDelay:i,extraDelay:h}},t.prototype.hasBackgroundAnimation=function(){return!1},t})),r.d("SmartSliderResponsiveSimple",["SmartSliderResponsive"],(function(){function t(){this.round=1,r.SmartSliderResponsive.prototype.constructor.apply(this,arguments),this.Ss=this.sliderElement.classList.contains("n2-ss-full-page--constrain-ratio"),this.mainAnimation=this.slider.mainAnimation}return t.prototype=Object.create(r.SmartSliderResponsive.prototype),t.prototype.constructor=t,t.prototype.init=function(){r.SmartSliderResponsive.prototype.init.call(this),this._cacheEl={slider:this.sliderElement.querySelector(".n2-ss-slider-wrapper-inside")||this.sliderElement,"n2-ss-slider-2":this.sliderElement.querySelector(".n2-ss-slider-2"),"n2-ss-slider-3":this.sliderElement.querySelector(".n2-ss-slider-3")},this._cacheEl["n2-ss-slider-3"].addEventListener("scroll",(function(e){e.currentTarget.scrollTop=0,e.currentTarget.scrollLeft=0}),{capture:!0})},t.prototype.calculateResponsiveValues=function(){var t=this.slider.visibleRealSlides[0].element,i=t.getBoundingClientRect();this.resizeContext.slideSelfWidth=i.width,this.resizeContext.slideSelfHeight=i.height;var s=t.querySelector(".n2-ss-layers-container").getBoundingClientRect();this.resizeContext.slideWidth=s.width,this.resizeContext.slideHeight=s.height;var h=this._cacheEl.slider.getBoundingClientRect();this.resizeContext.sliderWidth=h.width,this.resizeContext.sliderHeight=h.height;var n=this._cacheEl["n2-ss-slider-3"].getBoundingClientRect();if(this.resizeContext.slideOuterWidth=n.width,this.resizeContext.slideOuterHeight=n.height,r.SmartSliderResponsive.prototype.calculateResponsiveValues.call(this),this.Ss){var a=(this.resizeContext.sliderWidth-this.resizeContext.slideWidth)/-2+"px",o=(this.resizeContext.sliderHeight-this.resizeContext.slideHeight)/-2+"px";r.MW.I(this._cacheEl.slider)["--ss-clip-path"]="inset("+o+" "+a+" "+o+" "+a+")"}},t.prototype.onStarterSlide=function(t){this.slider.slides.forEach((function(t){t.SMWs=[r.MW.I(t.element,{x:"-10000px"})],t.background&&t.SMWs.push(r.MW.I(t.background.element,{x:"-10000px"}))})),r.SmartSliderResponsive.prototype.onStarterSlide.apply(this,arguments),this.mainAnimation.setActiveSlide(this.slider.currentSlide)},t})),r.d("SmartSliderSimple",["SmartSliderAbstract"],(function(){function t(t,i){this.type="simple",r.SmartSliderAbstract.prototype.constructor.call(this,t,o({bgAnimations:0,carousel:1},i))}return t.prototype=Object.create(r.SmartSliderAbstract.prototype),t.prototype.constructor=t,t.prototype.initResponsiveMode=function(){this.responsive=new r.SmartSliderResponsiveSimple(this,this.parameters.responsive),this.responsive.start(),r.SmartSliderAbstract.prototype.initResponsiveMode.call(this)},t.prototype.initMainAnimation=function(){!this.disabled.backgroundAnimations&&this.parameters.bgAnimations?this.mainAnimation=new r.SmartSliderFrontendBackgroundAnimation(this,this.parameters.mainanimation,this.parameters.bgAnimations):this.mainAnimation=new r.SmartSliderMainAnimationSimple(this,this.parameters.mainanimation)},t.prototype.afterRawSlidesReady=function(){if(this.parameters.postBackgroundAnimations&&this.parameters.postBackgroundAnimations.slides){for(var t=0;t<this.slides.length;t++)this.slides[t].postBackgroundAnimation=this.parameters.postBackgroundAnimations.slides[t];delete this.parameters.postBackgroundAnimations.slides}if(this.parameters.bgAnimations&&this.parameters.bgAnimations.slides){for(var i=0;i<this.slides.length;i++)this.slides[i].backgroundAnimation=this.parameters.bgAnimations.slides[i];delete this.parameters.bgAnimations.slides}},t.prototype.forceSetActiveSlide=function(t){t.setActive(),this.mainAnimation.showSlide(t)},t.prototype.forceUnsetActiveSlide=function(t){t.unsetActive(),this.mainAnimation.hideSlide(t)},t.prototype.getSlideBackgroundContainer=function(){return this.sliderElement.querySelector(".n2-ss-slider-3")},t.prototype.getAnimationAxis=function(){switch(this.mainAnimation.parameters.type){case"vertical":case"vertical-reversed":return"vertical"}return"horizontal"},t})),r.d("ss-simple",["SmartSliderSimple","SmartSliderResponsiveSimple","SmartSliderMainAnimationSimple"])}(window);