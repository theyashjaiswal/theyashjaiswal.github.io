(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animation/animate.component.ts":
/*!************************************************!*\
  !*** ./src/app/animation/animate.component.ts ***!
  \************************************************/
/*! exports provided: AnimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateComponent", function() { return AnimateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _attention_seekers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attention-seekers */ "./src/app/animation/attention-seekers/index.ts");
/* harmony import */ var _entrances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entrances */ "./src/app/animation/entrances/index.ts");
/* harmony import */ var _exits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exits */ "./src/app/animation/exits/index.ts");
/* harmony import */ var _animate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animate.service */ "./src/app/animation/animate.service.ts");





// Animations





const _c0 = ["wmAnimate", ""];
const _c1 = ["*"];
class AnimateComponent {
    constructor(elm, scroll) {
        this.elm = elm;
        this.scroll = scroll;
        this.replay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Animating properties
        this.animating = false;
        this.animated = false;
        this.disabled = false;
        /** Emits at the end of the animation */
        this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits at the end of the animation */
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paused = false;
        this.threshold = 0;
        this.once = false;
    }
    get idle() { return { value: `idle-${this.animate}` }; }
    get play() {
        const params = {};
        // Builds the params object, so, leaving to the default values when undefined
        if (!!this.timing) {
            params['timing'] = this.timing;
        }
        if (!!this.delay) {
            params['delay'] = this.delay;
        }
        return { value: this.animate, params };
    }
    /** Speeds up or slows down the animation */
    set speed(speed) {
        // Turns the requested speed into a valid timing
        this.timing = {
            slower: '3s',
            slow: '2s',
            normal: '1s',
            fast: '500ms',
            faster: '300ms'
        }[speed || 'normal'];
    }
    /** Delays the animation */
    set postpone(delay) {
        // Coerces the input into a number first
        const value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(delay, 0);
        if (value) {
            // Turns a valid number into a ms delay
            this.delay = `${value}ms`;
        }
        else {
            // Test the string for a valid delay combination
            this.delay = /^\d+(?:ms|s)$/.test(delay) ? delay : '';
        }
    }
    /** Disables the animation */
    set disableAnimation(value) { this.disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); }
    animationStart() { this.animating = true; this.animated = false; this.start.emit(); }
    animationDone() { this.animating = false; this.animated = true; this.done.emit(); }
    /** When true, keeps the animation idle until the next replay triggers */
    set pauseAnimation(value) { this.paused = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); }
    /** When defined, triggers the animation on element scrolling in the viewport by the specified amount. Amount defaults to 50% when not specified */
    set enableAOS(value) { this.threshold = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value, 0.5); }
    /** When true, triggers the animation on element scrolling in the viewport */
    set aosOnce(value) { this.once = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); }
    /** Replays the animation */
    set replay(replay) {
        // Re-triggers the animation again on request (skipping the very fist value)
        if (!!this.trigger && Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(replay)) {
            this.trigger = this.idle;
            this.replay$.next(true);
        }
    }
    ngOnInit() {
        // Sets the idle state for the given animation
        this.trigger = this.idle;
        // Triggers the animation based on the input flags
        this.sub = this.replay$.pipe(
        // Waits the next round to re-trigger
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), 
        // Triggers immediately when not paused
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(!this.paused), 
        // Builds the AOS observable from the common service
        this.scroll.trigger(this.elm, this.threshold), 
        // Prevents false visibility blinks due to the animation transformations
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(trigger => !this.animating), 
        // Stops after the first on trigger when 'once' is set
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(trigger => !trigger || !this.once, true)).subscribe(trigger => {
            // Triggers the animation to play or to idle
            this.trigger = trigger ? this.play : this.idle;
        });
    }
    ngOnDestroy() { this.sub.unsubscribe(); }
}
AnimateComponent.ɵfac = function AnimateComponent_Factory(t) { return new (t || AnimateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_animate_service__WEBPACK_IMPORTED_MODULE_8__["AnimateService"])); };
AnimateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimateComponent, selectors: [["", "wmAnimate", ""]], hostVars: 2, hostBindings: function AnimateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcomponentHostSyntheticListener"]("@animate.start", function AnimateComponent_animation_animate_start_HostBindingHandler() { return ctx.animationStart(); })("@animate.done", function AnimateComponent_animation_animate_done_HostBindingHandler() { return ctx.animationDone(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"]("@animate", ctx.trigger)("@.disabled", ctx.disabled);
    } }, inputs: { animate: ["wmAnimate", "animate"], speed: "speed", postpone: ["delay", "postpone"], disableAnimation: ["disabled", "disableAnimation"], pauseAnimation: ["paused", "pauseAnimation"], enableAOS: ["aos", "enableAOS"], aosOnce: ["once", "aosOnce"], replay: "replay" }, outputs: { start: "start", done: "done" }, attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function AnimateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, data: { animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('animate', [
                // Attention seekers
                ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["beat"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["bounce"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["flip"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["headShake"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["heartBeat"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["jello"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["pulse"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["rubberBand"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["shake"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["swing"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["tada"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["wobble"],
                // Entrances
                ..._entrances__WEBPACK_IMPORTED_MODULE_6__["bumpIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["bounceIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["fadeIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["flipIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["jackInTheBox"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["landing"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["rollIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["zoomIn"],
                // Exits
                ..._exits__WEBPACK_IMPORTED_MODULE_7__["bounceOut"], ..._exits__WEBPACK_IMPORTED_MODULE_7__["fadeOut"], ..._exits__WEBPACK_IMPORTED_MODULE_7__["hinge"], ..._exits__WEBPACK_IMPORTED_MODULE_7__["rollOut"], ..._exits__WEBPACK_IMPORTED_MODULE_7__["zoomOut"]
            ])] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[wmAnimate]',
                template: '<ng-content></ng-content>',
                animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('animate', [
                        // Attention seekers
                        ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["beat"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["bounce"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["flip"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["headShake"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["heartBeat"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["jello"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["pulse"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["rubberBand"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["shake"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["swing"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["tada"], ..._attention_seekers__WEBPACK_IMPORTED_MODULE_5__["wobble"],
                        // Entrances
                        ..._entrances__WEBPACK_IMPORTED_MODULE_6__["bumpIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["bounceIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["fadeIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["flipIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["jackInTheBox"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["landing"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["rollIn"], ..._entrances__WEBPACK_IMPORTED_MODULE_6__["zoomIn"],
                        // Exits
                        ..._exits__WEBPACK_IMPORTED_MODULE_7__["bounceOut"], ..._exits__WEBPACK_IMPORTED_MODULE_7__["fadeOut"], ..._exits__WEBPACK_IMPORTED_MODULE_7__["hinge"], ..._exits__WEBPACK_IMPORTED_MODULE_7__["rollOut"], ..._exits__WEBPACK_IMPORTED_MODULE_7__["zoomOut"]
                    ])]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _animate_service__WEBPACK_IMPORTED_MODULE_8__["AnimateService"] }]; }, { trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['@animate']
        }], animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['wmAnimate']
        }], speed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], postpone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['delay']
        }], disableAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['@.disabled']
        }], start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], animationStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['@animate.start']
        }], done: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['@animate.done']
        }], pauseAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['paused']
        }], enableAOS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aos']
        }], aosOnce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['once']
        }], replay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/animation/animate.directive.ts":
/*!************************************************!*\
  !*** ./src/app/animation/animate.directive.ts ***!
  \************************************************/
/*! exports provided: AnimateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateDirective", function() { return AnimateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _animate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate.service */ "./src/app/animation/animate.service.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");





class AnimateDirective extends _animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"] {
    constructor(elref, viewPort, scroll, zone) {
        super(scroll, viewPort, zone);
        this.elref = elref;
        this.viewPort = viewPort;
        this.element = false;
    }
    /** When true instructs the directive to use the element's bounding rect as the animation view */
    set useElement(value) { this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); }
    // Overrides the viewport with the element's client rect on request
    get viewRect() {
        // Selects between the viewport and the element
        const rt = this.element ? this.elref.nativeElement.getBoundingClientRect()
            : this.viewPort.getViewportRect();
        // Applies optional offsets
        const top = rt.top + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.top, 0);
        const left = rt.left + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.left, 0);
        const bottom = rt.bottom + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.bottom, 0);
        const right = rt.right + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.right, 0);
        // Returns the resulting rect
        return { top, left, bottom, right, height: bottom - top, width: right - left };
    }
}
AnimateDirective.ɵfac = function AnimateDirective_Factory(t) { return new (t || AnimateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AnimateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AnimateDirective, selectors: [["", "wmAnimateView", ""]], inputs: { useElement: "useElement", top: "top", left: "left", bottom: "bottom", right: "right" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // Provides the AnimateDirective as the service, so, for the child component to trigger within a modified viewport
            { provide: _animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => AnimateDirective) },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[wmAnimateView]',
                providers: [
                    // Provides the AnimateDirective as the service, so, for the child component to trigger within a modified viewport
                    { provide: _animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => AnimateDirective) },
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { useElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], top: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], right: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/animation/animate.module.ts":
/*!*********************************************!*\
  !*** ./src/app/animation/animate.module.ts ***!
  \*********************************************/
/*! exports provided: AnimateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateModule", function() { return AnimateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _animate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animate.component */ "./src/app/animation/animate.component.ts");
/* harmony import */ var _animate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animate.directive */ "./src/app/animation/animate.directive.ts");






class AnimateModule {
}
AnimateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnimateModule });
AnimateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnimateModule_Factory(t) { return new (t || AnimateModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnimateModule, { declarations: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]], exports: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]
                ],
                declarations: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]],
                exports: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/animation/animate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/animation/animate.service.ts ***!
  \**********************************************/
/*! exports provided: runInZone, AnimateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInZone", function() { return runInZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateService", function() { return AnimateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");





/** Returns an observable mirroring the source while running within the given zone */
function runInZone(zone) {
    return source => {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            return source.subscribe((value) => zone.run(() => observer.next(value)), (e) => zone.run(() => observer.error(e)), () => zone.run(() => observer.complete()));
        });
    };
}
class AnimateService {
    constructor(scroll, viewPort, zone) {
        this.scroll = scroll;
        this.viewPort = viewPort;
        this.zone = zone;
        // Tracks for viewport changes giving it 100ms time to accurately update for orientation changes
        this.view$ = viewPort.change(100).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.viewRect), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(20), 
        // Makes all the component to share the same viewport values
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    // By default, use the viewport rectangle
    get viewRect() {
        return this.viewPort.getViewportRect();
    }
    // Triggers the animation
    trigger(elm, threshold) {
        // Waits until the zone is stable once, aka the render is complete so the element to measure is there
        return source => this.zone.onStable.pipe(
        // Waits just once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), 
        // Triggers the play and replay requests
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => source), 
        // Triggers the while scrolling
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(trigger => threshold > 0 ? this.aos(elm, threshold) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(trigger)));
    }
    // Triggers the animation on scroll
    aos(elm, threshold) {
        // A variation based on IntersectionObserver can be conditionally implemented here.
        // Returns an AOS observable
        return this.scroll.ancestorScrolled(elm, 0).pipe(
        // Makes sure triggering the start no matter there's no scroll event hits yet
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0), 
        // Maps the scrolling to the element visibility value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.visibility(elm)), 
        // Applies an hysteresys, so, to trigger the animation on based on the treshold while off on full invisibility
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((result, visiblility) => (visiblility >= threshold) || (result && visiblility > 0), false), 
        // Distincts the resulting triggers
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // Runs within the angular zone to trigger change detection back on
        runInZone(this.zone));
    }
    // Computes the element's visibility ratio against the viewport
    visibility(elm) {
        // Resolves from the latest viewport
        return this.view$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(view => {
            // Gets the element's bounding rect
            const rect = elm && elm.nativeElement && elm.nativeElement.getBoundingClientRect();
            if (!rect) {
                return 0;
            }
            // Return 1.0 when the element is fully within the viewport
            if (rect.left > view.left - 1 && rect.top > view.top - 1 && rect.right < view.right + 1 && rect.bottom < view.bottom + 1) {
                return 1;
            }
            // Computes the intersection area otherwise
            const a = Math.round(rect.width * rect.height);
            const b = Math.max(0, Math.min(rect.right, view.right) - Math.max(rect.left, view.left));
            const c = Math.max(0, Math.min(rect.bottom, view.bottom) - Math.max(rect.top, view.top));
            // Returns the amount of visible area
            return Math.round(b * c / a * 10) / 10;
        }));
    }
}
AnimateService.ɵfac = function AnimateService_Factory(t) { return new (t || AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AnimateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnimateService, factory: AnimateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/animation/attention-seekers/beat.ts":
/*!*****************************************************!*\
  !*** ./src/app/animation/attention-seekers/beat.ts ***!
  \*****************************************************/
/*! exports provided: beat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beat", function() { return beat; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const beat = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => beat', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.8)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.5)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })
        ]))
    ], { params: { timing: '500ms', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/bounce.ts":
/*!*******************************************************!*\
  !*** ./src/app/animation/attention-seekers/bounce.ts ***!
  \*******************************************************/
/*! exports provided: bounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounce", function() { return bounce; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const bounce = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounce', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transformOrigin: 'center bottom' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -30px, 0)', animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -30px, 0)', animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06', offset: 0.43 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.53 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -15px, 0)', animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.7 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.8 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/flip.ts":
/*!*****************************************************!*\
  !*** ./src/app/animation/attention-seekers/flip.ts ***!
  \*****************************************************/
/*! exports provided: flip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return flip; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const flip = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => flip', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backfaceVisibility: 'visible' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)', animationTimingFunction: 'ease-out', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: ' perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', animationTimingFunction: 'ease-out', offset: 0.4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', animationTimingFunction: 'ease-in', offset: 0.5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)', animationTimingFunction: 'ease-in', offset: 0.8 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)', animationTimingFunction: 'ease-in', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/head-shake.ts":
/*!***********************************************************!*\
  !*** ./src/app/animation/attention-seekers/head-shake.ts ***!
  \***********************************************************/
/*! exports provided: headShake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headShake", function() { return headShake; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const headShake = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => headShake', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', offset: 0.5 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/heart-beat.ts":
/*!***********************************************************!*\
  !*** ./src/app/animation/attention-seekers/heart-beat.ts ***!
  \***********************************************************/
/*! exports provided: heartBeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heartBeat", function() { return heartBeat; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const heartBeat = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => heartBeat', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.3)', offset: 0.14 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0.28 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.3)', offset: 0.42 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', offset: 0.70 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/index.ts":
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/index.ts ***!
  \******************************************************/
/*! exports provided: beat, bounce, headShake, heartBeat, pulse, rubberBand, shake, swing, wobble, jello, tada, flip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _beat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beat */ "./src/app/animation/attention-seekers/beat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beat", function() { return _beat__WEBPACK_IMPORTED_MODULE_0__["beat"]; });

/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounce */ "./src/app/animation/attention-seekers/bounce.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounce", function() { return _bounce__WEBPACK_IMPORTED_MODULE_1__["bounce"]; });

/* harmony import */ var _head_shake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head-shake */ "./src/app/animation/attention-seekers/head-shake.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "headShake", function() { return _head_shake__WEBPACK_IMPORTED_MODULE_2__["headShake"]; });

/* harmony import */ var _heart_beat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heart-beat */ "./src/app/animation/attention-seekers/heart-beat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heartBeat", function() { return _heart_beat__WEBPACK_IMPORTED_MODULE_3__["heartBeat"]; });

/* harmony import */ var _pulse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pulse */ "./src/app/animation/attention-seekers/pulse.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pulse", function() { return _pulse__WEBPACK_IMPORTED_MODULE_4__["pulse"]; });

/* harmony import */ var _rubber_band__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rubber-band */ "./src/app/animation/attention-seekers/rubber-band.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rubberBand", function() { return _rubber_band__WEBPACK_IMPORTED_MODULE_5__["rubberBand"]; });

/* harmony import */ var _shake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shake */ "./src/app/animation/attention-seekers/shake.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shake", function() { return _shake__WEBPACK_IMPORTED_MODULE_6__["shake"]; });

/* harmony import */ var _swing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./swing */ "./src/app/animation/attention-seekers/swing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swing", function() { return _swing__WEBPACK_IMPORTED_MODULE_7__["swing"]; });

/* harmony import */ var _wobble__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wobble */ "./src/app/animation/attention-seekers/wobble.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wobble", function() { return _wobble__WEBPACK_IMPORTED_MODULE_8__["wobble"]; });

/* harmony import */ var _jello__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jello */ "./src/app/animation/attention-seekers/jello.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jello", function() { return _jello__WEBPACK_IMPORTED_MODULE_9__["jello"]; });

/* harmony import */ var _tada__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tada */ "./src/app/animation/attention-seekers/tada.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tada", function() { return _tada__WEBPACK_IMPORTED_MODULE_10__["tada"]; });

/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flip */ "./src/app/animation/attention-seekers/flip.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _flip__WEBPACK_IMPORTED_MODULE_11__["flip"]; });















/***/ }),

/***/ "./src/app/animation/attention-seekers/jello.ts":
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/jello.ts ***!
  \******************************************************/
/*! exports provided: jello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jello", function() { return jello; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const jello = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => jello', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transformOrigin: 'center' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(0) skewY(0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(0) skewY(0)', offset: 0.111 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-12.5) skewY(-12.5)', offset: 0.222 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(0) skewY(0)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/pulse.ts":
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/pulse.ts ***!
  \******************************************************/
/*! exports provided: pulse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pulse", function() { return pulse; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const pulse = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => pulse', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.05)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })
        ]))
    ], { params: { timing: '500ms', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/rubber-band.ts":
/*!************************************************************!*\
  !*** ./src/app/animation/attention-seekers/rubber-band.ts ***!
  \************************************************************/
/*! exports provided: rubberBand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rubberBand", function() { return rubberBand; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const rubberBand = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rubberBand', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/shake.ts":
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/shake.ts ***!
  \******************************************************/
/*! exports provided: shake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shake", function() { return shake; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const shake = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => shake', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10px)', offset: 0.1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(10px)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10px)', offset: 0.3 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(10px)', offset: 0.4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10px)', offset: 0.5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(10px)', offset: 0.6 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10px)', offset: 0.7 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(10px)', offset: 0.8 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10px)', offset: 0.9 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/swing.ts":
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/swing.ts ***!
  \******************************************************/
/*! exports provided: swing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swing", function() { return swing; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const swing = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => swing', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transformOrigin: 'top center' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/tada.ts":
/*!*****************************************************!*\
  !*** ./src/app/animation/attention-seekers/tada.ts ***!
  \*****************************************************/
/*! exports provided: tada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tada", function() { return tada; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const tada = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => tada', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/attention-seekers/wobble.ts":
/*!*******************************************************!*\
  !*** ./src/app/animation/attention-seekers/wobble.ts ***!
  \*******************************************************/
/*! exports provided: wobble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wobble", function() { return wobble; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const wobble = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => wobble', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-25%) rotate3d(0, 0, 1, -5deg)', offset: 0.15 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(20%) rotate3d(0, 0, 1, 3deg)', offset: 0.3 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-15%) rotate3d(0, 0, 1, -3deg)', offset: 0.45 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(10%) rotate3d(0, 0, 1, 2deg)', offset: 0.6 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-5%) rotate3d(0, 0, 1, -1deg)', offset: 0.75 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/entrances/bounce-in.ts":
/*!**************************************************!*\
  !*** ./src/app/animation/entrances/bounce-in.ts ***!
  \**************************************************/
/*! exports provided: bounceIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const bounceIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.1)', offset: 0.2 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.9)', offset: 0.4 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1.03)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.97)', offset: 0.8 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)', offset: 1 })
    ])), { params: { timing: '750ms', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(25px)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-10px)', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(5px)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(25px)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10px)', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(5px)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(-25px)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(10px)', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-5px)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(-25px)', offset: 0.6 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(10px)', offset: 0.75 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-5px)', offset: 0.9 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/entrances/bump-in.ts":
/*!************************************************!*\
  !*** ./src/app/animation/entrances/bump-in.ts ***!
  \************************************************/
/*! exports provided: bumpIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bumpIn", function() { return bumpIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const bumpIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bumpIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bumpIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', opacity: 1 }))
    ], { params: { timing: '500ms', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/entrances/fade-in.ts":
/*!************************************************!*\
  !*** ./src/app/animation/entrances/fade-in.ts ***!
  \************************************************/
/*! exports provided: fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const fadeIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-20px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(20px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(20px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-20px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
    ], { params: { timing: '1s', delay: '' } }),
];


/***/ }),

/***/ "./src/app/animation/entrances/flip-in.ts":
/*!************************************************!*\
  !*** ./src/app/animation/entrances/flip-in.ts ***!
  \************************************************/
/*! exports provided: flipIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipIn", function() { return flipIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const flipIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-flipInX', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-flipInY', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => flipInX', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backfaceVisibility: 'visible' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
                opacity: 0,
                offset: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: ' perspective(400px) rotate3d(1, 0, 0, -20deg)',
                opacity: 1,
                offset: 0.4
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
                offset: 0.6
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
                offset: 0.8
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'perspective(400px) rotate3d(1, 0, 0, 0)',
                offset: 1
            })
        ]))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => flipInY', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backfaceVisibility: 'visible' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
                opacity: 0,
                offset: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: ' perspective(400px) rotate3d(0, 1, 0, -20deg)',
                opacity: 1,
                offset: 0.4
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
                offset: 0.6
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
                offset: 0.8
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'perspective(400px) rotate3d(0, 1, 0, 0)',
                offset: 1
            })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/entrances/index.ts":
/*!**********************************************!*\
  !*** ./src/app/animation/entrances/index.ts ***!
  \**********************************************/
/*! exports provided: bumpIn, bounceIn, fadeIn, flipIn, jackInTheBox, landing, rollIn, zoomIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bump_in__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bump-in */ "./src/app/animation/entrances/bump-in.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bumpIn", function() { return _bump_in__WEBPACK_IMPORTED_MODULE_0__["bumpIn"]; });

/* harmony import */ var _bounce_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounce-in */ "./src/app/animation/entrances/bounce-in.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return _bounce_in__WEBPACK_IMPORTED_MODULE_1__["bounceIn"]; });

/* harmony import */ var _fade_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fade-in */ "./src/app/animation/entrances/fade-in.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return _fade_in__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]; });

/* harmony import */ var _flip_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flip-in */ "./src/app/animation/entrances/flip-in.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flipIn", function() { return _flip_in__WEBPACK_IMPORTED_MODULE_3__["flipIn"]; });

/* harmony import */ var _jack_in_the_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jack-in-the-box */ "./src/app/animation/entrances/jack-in-the-box.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jackInTheBox", function() { return _jack_in_the_box__WEBPACK_IMPORTED_MODULE_4__["jackInTheBox"]; });

/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing */ "./src/app/animation/entrances/landing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "landing", function() { return _landing__WEBPACK_IMPORTED_MODULE_5__["landing"]; });

/* harmony import */ var _roll_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roll-in */ "./src/app/animation/entrances/roll-in.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollIn", function() { return _roll_in__WEBPACK_IMPORTED_MODULE_6__["rollIn"]; });

/* harmony import */ var _zoom_in__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom-in */ "./src/app/animation/entrances/zoom-in.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomIn", function() { return _zoom_in__WEBPACK_IMPORTED_MODULE_7__["zoomIn"]; });











/***/ }),

/***/ "./src/app/animation/entrances/jack-in-the-box.ts":
/*!********************************************************!*\
  !*** ./src/app/animation/entrances/jack-in-the-box.ts ***!
  \********************************************************/
/*! exports provided: jackInTheBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jackInTheBox", function() { return jackInTheBox; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const jackInTheBox = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-jackInTheBox', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => jackInTheBox', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(0.1) rotate(30deg)',
                transformOrigin: 'center bottom',
                opacity: 0,
                offset: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'rotate(-10deg)',
                opacity: 0.7,
                offset: 0.5
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(3deg)', offset: 0.7 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];
/*@keyframes jackInTheBox {
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.jackInTheBox {
  animation-name: jackInTheBox;
}*/ 


/***/ }),

/***/ "./src/app/animation/entrances/landing.ts":
/*!************************************************!*\
  !*** ./src/app/animation/entrances/landing.ts ***!
  \************************************************/
/*! exports provided: landing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landing", function() { return landing; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const landing = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-landing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => landing', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(1.2)',
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
    ], { params: { timing: '2s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/entrances/roll-in.ts":
/*!************************************************!*\
  !*** ./src/app/animation/entrances/roll-in.ts ***!
  \************************************************/
/*! exports provided: rollIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollIn", function() { return rollIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const rollIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-rollIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rollIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(-100%) rotate3d(0, 0, 1, -120deg)',
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 1 }))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/entrances/zoom-in.ts":
/*!************************************************!*\
  !*** ./src/app/animation/entrances/zoom-in.ts ***!
  \************************************************/
/*! exports provided: zoomIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomIn", function() { return zoomIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const zoomIn = [
    // Idle states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.3)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(0.65)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.1) translateY(-1000px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(0.475) translateY(60px)',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.1) translateX(-1000px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(0.475) translateX(60px)',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.1) translateY(1000px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(0.475) translateY(-60px)',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.1) translateX(1000px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(0.475) translateX(-60px)',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/exits/bounce-out.ts":
/*!***********************************************!*\
  !*** ./src/app/animation/exits/bounce-out.ts ***!
  \***********************************************/
/*! exports provided: bounceOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const bounceOut = [
    // Ending states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    // Transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.9)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.1)', offset: 0.5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.1)', offset: 0.55 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.3)', offset: 1 })
        ]))
    ], { params: { timing: '750ms', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(10px)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-20px)', offset: 0.4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-20px)', offset: 0.45 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(2000px)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-10px)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(20px)', offset: 0.4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(20px)', offset: 0.45 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-2000px)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-20px)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(2000px)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(20px)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-2000px)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/exits/fade-out.ts":
/*!*********************************************!*\
  !*** ./src/app/animation/exits/fade-out.ts ***!
  \*********************************************/
/*! exports provided: fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const fadeOut = [
    // Ending states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    // Transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(20px)' }))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-20px)' }))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(20px)' }))
    ], { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-20px)' }))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/exits/hinge.ts":
/*!******************************************!*\
  !*** ./src/app/animation/exits/hinge.ts ***!
  \******************************************/
/*! exports provided: hinge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hinge", function() { return hinge; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const hinge = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hinge', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => hinge', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transformOrigin: 'top left' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 0', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.6 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.8 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(700px)', offset: 1 })
        ]))
    ], { params: { timing: '2s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/exits/index.ts":
/*!******************************************!*\
  !*** ./src/app/animation/exits/index.ts ***!
  \******************************************/
/*! exports provided: bounceOut, fadeOut, hinge, rollOut, zoomOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bounce_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounce-out */ "./src/app/animation/exits/bounce-out.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return _bounce_out__WEBPACK_IMPORTED_MODULE_0__["bounceOut"]; });

/* harmony import */ var _fade_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fade-out */ "./src/app/animation/exits/fade-out.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return _fade_out__WEBPACK_IMPORTED_MODULE_1__["fadeOut"]; });

/* harmony import */ var _hinge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hinge */ "./src/app/animation/exits/hinge.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hinge", function() { return _hinge__WEBPACK_IMPORTED_MODULE_2__["hinge"]; });

/* harmony import */ var _roll_out__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roll-out */ "./src/app/animation/exits/roll-out.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollOut", function() { return _roll_out__WEBPACK_IMPORTED_MODULE_3__["rollOut"]; });

/* harmony import */ var _zoom_out__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom-out */ "./src/app/animation/exits/zoom-out.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOut", function() { return _zoom_out__WEBPACK_IMPORTED_MODULE_4__["zoomOut"]; });








/***/ }),

/***/ "./src/app/animation/exits/roll-out.ts":
/*!*********************************************!*\
  !*** ./src/app/animation/exits/roll-out.ts ***!
  \*********************************************/
/*! exports provided: rollOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollOut", function() { return rollOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const rollOut = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rollOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rollOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(0)',
            opacity: 1
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%) rotate3d(0, 0, 1, 120deg)', opacity: 0 }))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/animation/exits/zoom-out.ts":
/*!*********************************************!*\
  !*** ./src/app/animation/exits/zoom-out.ts ***!
  \*********************************************/
/*! exports provided: zoomOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOut", function() { return zoomOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const zoomOut = [
    // Ending states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.3)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.3)' })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.475) translateY(-60px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(0.1) translateY(2000px)',
            transformOrigin: 'center bottom',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.475) translateX(-42px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(0.1) translateX(2000px)',
            transformOrigin: 'center bottom',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.475) translateY(60px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(0.1) translateY(-2000px)',
            transformOrigin: 'center bottom',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.475) translateX(42px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(0.1) translateX(-2000px)',
            transformOrigin: 'center bottom',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greeting/greeting.component */ "./src/app/greeting/greeting.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-button/top-button.component */ "./src/app/top-button/top-button.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.0.8/css/all.css", "integrity", "sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S", "crossorigin", "anonymous"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-greeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-top-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_2__["GreetingComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_8__["TopButtonComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]], styles: ["app-projects[_ngcontent-%COMP%] {\n  animation: fade_up 2s;\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUNGO0VBRUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUFGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBRkY7RUFLQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFKRjtFQU9BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQU5GO0VBU0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcHJvamVjdHMge1xuICBhbmltYXRpb246IGZhZGVfdXAgMnM7XG59XG5cbi8qIEFuaW1hdGlvbnMgKi9cbkBrZXlmcmFtZXMgZmFkZV9kb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlX3VwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlX3JpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlX2xlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./greeting/greeting.component */ "./src/app/greeting/greeting.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./social-media/social-media.component */ "./src/app/social-media/social-media.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/software-skill/software-skill.component */ "./src/app/skills/software-skill/software-skill.component.ts");
/* harmony import */ var _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skill-progress/skill-progress.component */ "./src/app/skill-progress/skill-progress.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./top-button/top-button.component */ "./src/app/top-button/top-button.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _experience_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./experience/experience-card/experience-card.component */ "./src/app/experience/experience-card/experience-card.component.ts");
/* harmony import */ var _projects_github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projects/github-repo-card/github-repo-card.component */ "./src/app/projects/github-repo-card/github-repo-card.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./projects/graphql.module */ "./src/app/projects/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./github-calendar/github-calendar.component */ "./src/app/github-calendar/github-calendar.component.ts");
/* harmony import */ var _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./animation/animate.module */ "./src/app/animation/animate.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: Window, useValue: window }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
            _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__["AnimateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__["GreetingComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"],
        _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__["SocialMediaComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
        _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_10__["SoftwareSkillComponent"],
        _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_11__["SkillProgressComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_13__["TopButtonComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__["TimelineComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"],
        _experience_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceCardComponent"],
        _projects_github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_18__["GithubRepoCardComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"],
        _education_education_component__WEBPACK_IMPORTED_MODULE_20__["EducationComponent"],
        _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_23__["GithubCalendarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
        _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
        _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__["AnimateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__["GreetingComponent"],
                    _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"],
                    _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__["SocialMediaComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                    _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_10__["SoftwareSkillComponent"],
                    _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_11__["SkillProgressComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_13__["TopButtonComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__["TimelineComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"],
                    _experience_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceCardComponent"],
                    _projects_github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_18__["GithubRepoCardComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"],
                    _education_education_component__WEBPACK_IMPORTED_MODULE_20__["EducationComponent"],
                    _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_23__["GithubCalendarComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                    _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                    _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__["AnimateModule"]
                ],
                providers: [
                    { provide: Window, useValue: window }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/button.service.ts":
/*!***********************************!*\
  !*** ./src/app/button.service.ts ***!
  \***********************************/
/*! exports provided: ButtonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonService", function() { return ButtonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ButtonService {
    constructor() { }
    getClassName() {
        return this.className;
    }
    getHref() {
        return this.href;
    }
    getText() {
        return this.text;
    }
    setClassName(className) {
        this.className = className;
    }
    setHref(href) {
        this.href = href;
    }
    setText(text) {
        this.text = text;
    }
}
ButtonService.ɵfac = function ButtonService_Factory(t) { return new (t || ButtonService)(); };
ButtonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ButtonService, factory: ButtonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _button_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button.service */ "./src/app/button.service.ts");



class ButtonComponent {
    constructor(buttonService) {
        this.buttonService = buttonService;
    }
    ngOnInit() {
        this.className = this.buttonService.getClassName();
        this.text = this.buttonService.getText();
        this.href = this.buttonService.getHref();
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_button_service__WEBPACK_IMPORTED_MODULE_1__["ButtonService"])); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], decls: 2, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "button works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-button[_ngcontent-%COMP%] {\n  background-color: #1b5299;\n  border: solid 1px #1b5299;\n  color: white;\n  font-weight: 700;\n  width: -webkit-max-content;\n  width: max-content;\n  padding: 13px 22px;\n  margin-right: 50px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.main-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: black;\n  transition: all 0.3s ease 0s;\n  transform: translateY(-3px);\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n\n\n@media (max-width: 768px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 12px 18px;\n    margin-right: 0px;\n  }\n}\n\n@media (max-width: 320px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQSxnQkFBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFJRjtBQUNGOztBQUZBO0VBQ0U7SUFDRSxlQUFBO0VBSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI1Mjk5O1xuICBib3JkZXI6IHNvbGlkIDFweCAjMWI1Mjk5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMTNweCAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG59XG4ubWFpbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbn1cbi5wcm9qZWN0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLyogTWVkaWEgUXVlcnkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAubWFpbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return [{ type: _button_service__WEBPACK_IMPORTED_MODULE_1__["ButtonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation/animate.component */ "./src/app/animation/animate.component.ts");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-media/social-media.component */ "./src/app/social-media/social-media.component.ts");




class ContactComponent {
    constructor() {
        this.contactInfo = {
            title: 'Contact Me ☎️',
            subtitle: 'Discuss a project or just want to say hi?',
            number: '+1-782-8822-600',
            email_address: 'yashjaiswalofficial@gmail.com',
        };
    }
    ngOnInit() { }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 17, vars: 6, consts: [["id", "contact", "wmAnimate", "jackInTheBox", "aos", "", "speed", "normal", 1, "main", "contact-margin-top"], [1, "contact-div-main"], [1, "contact-header"], [1, "heading", "contact-title"], [1, "subTitle", "contact-subtitle"], [1, "contact-text-div"], [1, "contact-detail", 3, "href"], [1, "contact-detail-email", 3, "href"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-social-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "tel:" + ctx.contactInfo.number, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactInfo.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto:" + ctx.contactInfo.email_address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contactInfo.email_address, "");
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]], styles: [".contact-div-main[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 4rem;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.contact-div-main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.contact-title[_ngcontent-%COMP%] {\n  font-size: 65px;\n  font-weight: 400;\n  margin-bottom: 2rem;\n}\n\n.contact-detail[_ngcontent-%COMP%], .contact-detail-email[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 40px;\n  font-weight: 400;\n  color: #495057;\n  text-decoration: none;\n}\n\n.contact-detail[_ngcontent-%COMP%]:hover, .contact-detail-email[_ngcontent-%COMP%]:hover {\n  color: black;\n  text-shadow: 2px 1px 2px #b5b5b5;\n  transition: all 0.3s;\n}\n\n.contact-subtitle[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.contact-text-div[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.contact-margin-top[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n\n.contact-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  margin-left: 1.5rem;\n  margin-top: -4rem;\n}\n\n\n\n@media (max-width: 1380px), (max-width: 768px) {\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 56px;\n    font-weight: 400;\n    text-align: center;\n  }\n\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n    text-align: center;\n  }\n\n  .contact-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n    text-align: center;\n  }\n\n  .contact-text-div[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 1.5rem;\n  }\n\n  .contact-detail[_ngcontent-%COMP%], .contact-detail-email[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .contact-image-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUEsZ0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFDRjs7RUFFQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7O0lBRUUsZUFBQTtFQUNGOztFQUVBO0lBQ0UsYUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1kaXYtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cblxuLnN1YlRpdGxlIHtcbiAgY29sb3I6IHJnYigxMzQsIDE0MiwgMTUwKTtcbn1cblxuLmNvbnRhY3QtZGl2LW1haW4gPiAqIHtcbiAgZmxleDogMTtcbn1cblxuLmNvbnRhY3QtdGl0bGUge1xuICBmb250LXNpemU6IDY1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb250YWN0LWRldGFpbCxcbi5jb250YWN0LWRldGFpbC1lbWFpbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhY3QtZGV0YWlsOmhvdmVyLFxuLmNvbnRhY3QtZGV0YWlsLWVtYWlsOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LXNoYWRvdzogMnB4IDFweCAycHggI2I1YjViNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5jb250YWN0LXN1YnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRhY3QtdGV4dC1kaXYge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5jb250YWN0LW1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG4uY29udGFjdC1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAtNHJlbTtcbn1cblxuLyogTWVkaWEgUXVlcnkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpLCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiA1NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGFjdC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhY3QtdGV4dC1kaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cblxuICAuY29udGFjdC1kZXRhaWwsXG4gIC5jb250YWN0LWRldGFpbC1lbWFpbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmNvbnRhY3QtaW1hZ2UtZGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/animate.component */ "./src/app/animation/animate.component.ts");




function EducationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r1.className1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r1.className2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.content);
} }
class EducationComponent {
    constructor() {
        this.timeline = [
            // {
            //   heading: "Infosys",
            //   duration: "Present",
            //   subtitle: "",
            //   content: "Upcoming Full stack develover at Infosys!",
            //   className1: "mar-left",
            //   className2: "prt_about_learnbox_right"
            // },
            {
                heading: 'Master of Applied Computer Science',
                duration: '2022',
                subtitle: 'Dalhousie University, Halifax, Canada',
                content: '',
                className1: 'mar-right',
                className2: 'prt_about_learnbox_left',
            },
            {
                heading: 'B.Tech in Computer Science & Engineering',
                duration: '2018',
                subtitle: 'Karunya Institute of Technology & Sciences, Coimbatore, India',
                content: '',
                className1: 'mar-left',
                className2: 'prt_about_learnbox_right',
            },
        ];
    }
    ngOnInit() { }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 8, vars: 1, consts: [["id", "education", 1, "prt_about_edulearn_wrapper"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "prt_heading_wrapper"], [1, "prt_heading"], [1, "timeline-heading"], [1, "prt_about_learnsection"], ["wmAnimate", "landing", "aos", "", "speed", "normal", 4, "ngFor", "ngForOf"], ["wmAnimate", "landing", "aos", "", "speed", "normal"], [1, "prt_about_learnbox_year"], [1, "prt_about_learnbox_info"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Education \uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EducationComponent_div_7_Template, 13, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]], styles: [".prt_about_edulearn_wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin-top: 7rem;\n  margin-bottom: 7rem;\n}\n\n.timeline-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n}\n\n.prt_heading_wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.prt_about_learnsection[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.prt_heading[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_btn[_ngcontent-%COMP%], .prt_heading[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n}\n\n.prt_heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  position: relative;\n  width: auto;\n  padding-bottom: 15px;\n}\n\n.prt_heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .prt_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n}\n\n.h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 1.1;\n  color: #000000;\n}\n\n.prt_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  width: auto;\n  background-color: #010101;\n  padding-left: 10px;\n  position: absolute;\n  right: 0;\n  bottom: -10px;\n  color: #6c63ff;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: calc(100% - 200px);\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-transform: capitalize;\n  margin-top: 0;\n  font-weight: 500;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  text-transform: capitalize;\n  margin-bottom: 10px;\n  color: #495057;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #495057;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  text-align: right;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.mar-left[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  padding-left: 2rem;\n}\n\n@media (max-width: 768px) {\n  .mar-left[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.mar-right[_ngcontent-%COMP%] {\n  margin-right: 50%;\n  padding-right: 2rem;\n}\n\n@media (max-width: 768px) {\n  .mar-right[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]   .prt_about_learnbox_year[_ngcontent-%COMP%] {\n  float: right;\n  padding-top: 30px;\n}\n\n.prt_about_learnbox_year[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 200px;\n  vertical-align: middle;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]   .prt_about_learnbox_info[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: calc(100% - 200px);\n}\n\n.prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin: 0;\n  color: #a1bcd8;\n  font-weight: 500;\n}\n\n.prt_about_learnsection[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  background-color: #202020;\n  width: 2px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: -1;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnsection[_ngcontent-%COMP%]:after {\n    width: 0;\n    visibility: hidden;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after, .prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 15px;\n  top: 50%;\n  margin-top: -7px;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #000;\n  width: 15px;\n  border-radius: 100%;\n  border: 0px solid #fff;\n  left: -41px;\n  transition: all 0.3s;\n  z-index: 100;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n    visibility: hidden;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%]:hover:after {\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%]:hover:after {\n  background-color: #fff;\n  border: 3px solid #6c63ff;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  text-align: right;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after, .prt_about_learnbox_left[_ngcontent-%COMP%]:hover:after {\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #000;\n  width: 15px;\n  border-radius: 100%;\n  border: 0px solid #fff;\n  right: -39px;\n  transition: all 0.3s;\n  z-index: 100;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_left[_ngcontent-%COMP%]:after {\n    visibility: hidden;\n  }\n}\n\n.prt_about_experiencebox[_ngcontent-%COMP%]:after, .prt_contact_details_box[_ngcontent-%COMP%]:after, .prt_couter_wrapper[_ngcontent-%COMP%]:after {\n  right: 0;\n  bottom: 0;\n  content: \"\";\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:hover:after {\n  background-color: #fff;\n  border: 3px solid #6c63ff;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:hover   .prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%]:hover   .prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #6c63ff;\n  transition: all 0.3s;\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_left[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #202020;\n    padding-bottom: 30px;\n  }\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7O0FBdUJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBcEJGOztBQXNCQTs7RUFFRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBbkJGOztBQXFCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQWxCRjs7QUFvQkE7O0VBR0UsU0FBQTtFQUNBLGdCQUFBO0FBbEJGOztBQXFCQTs7Ozs7Ozs7Ozs7O0VBWUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFsQkY7O0FBb0JBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBakJGOztBQW9CQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFqQkY7O0FBbUJBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBaEJGOztBQWtCQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWZGOztBQWlCQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7QUFiRjs7QUFlQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7QUFaRjs7QUFrQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBL0JGOztBQWdDRTtFQUhGO0lBSUksU0FBQTtFQTdCRjtBQUNGOztBQStCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUE1QkY7O0FBNkJFO0VBSEY7SUFJSSxTQUFBO0VBMUJGO0FBQ0Y7O0FBNEJBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBekJGOztBQTJCQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBeEJGOztBQTBCQTtFQUNFLFdBQUE7QUF2QkY7O0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQXRCRjs7QUF3QkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFyQkY7O0FBdUJFO0VBWkY7SUFhSSxRQUFBO0lBQ0Esa0JBQUE7RUFwQkY7QUFDRjs7QUF1QkE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0VBQ0EsWUFBQTtBQXBCRjs7QUFxQkU7RUFWRjtJQVdJLGtCQUFBO0VBbEJGO0FBQ0Y7O0FBcUJBOztFQUVFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQkFBQTtBQWxCRjs7QUFxQkE7O0VBRUUsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtFQUNBLFlBQUE7QUFsQkY7O0FBbUJFO0VBVkY7SUFXSSxrQkFBQTtFQWhCRjtBQUNGOztBQW1CQTs7O0VBR0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBaEJGOztBQW1CQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFFQSxvQkFBQTtBQWhCRjs7QUFtQkE7O0VBRUUsY0FBQTtFQUtBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0FBaEJGOztBQW1CQTtFQUNFOztJQUVFLGdDQUFBO0lBQ0Esb0JBQUE7RUFoQkY7QUFDRjs7QUF1QkEsZUFBQTs7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDRCQUFBO0lBQ0Esb0hBQUE7RUFyQkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQXRCRjtBQUNGOztBQTBCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUF4QkY7RUEyQkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQXpCRjtBQUNGOztBQTRCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUExQkY7RUE2QkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQTNCRjtBQUNGOztBQThCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDZCQUFBO0lBQ0Esb0hBQUE7RUE1QkY7RUErQkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQTdCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcnRfYWJvdXRfZWR1bGVhcm5fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDdyZW07XG4gIG1hcmdpbi1ib3R0b206IDdyZW07XG4gIC8vYW5pbWF0aW9uOiBmYWRlX3VwIDJzIDRzO1xufVxuLnRpbWVsaW5lLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4vLyM2YzYzZmZcbi8vIzQ5NTA1N1xuLy8jMGE1MmQ2XG4ucHJ0X2hlYWRpbmdfd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcnRfYWJvdXRfbGVhcm5zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgLy9cbiAgLy8mOjpiZWZvcmV7XG4gIC8vICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vICBsZWZ0OiA1MCU7XG4gIC8vICB0b3A6IDA7XG4gIC8vICBjb250ZW50OiAnICc7XG4gIC8vICBkaXNwbGF5OiBibG9jaztcbiAgLy8gIHdpZHRoOiBweDtcbiAgLy8gIGhlaWdodDogMTAwJTtcbiAgLy8gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAvLyAgYmFja2dyb3VuZDogcmdiKDgwLDgwLDgwKTtcbiAgLy8gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg4MCw4MCw4MCwwKSAwJSwgcmdiKDgwLDgwLDgwKSA4JSwgcmdiKDgwLDgwLDgwKSA5MiUsIHJnYmEoODAsODAsODAsMCkgMTAwJSk7XG4gIC8vICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLHJnYmEoMzAsODcsMTUzLDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMTI1LDE4NSwyMzIsMSkpKTtcbiAgLy8gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg4MCw4MCw4MCwwKSAwJSwgcmdiKDgwLDgwLDgwKSA4JSwgcmdiKDgwLDgwLDgwKSA5MiUsIHJnYmEoODAsODAsODAsMCkgMTAwJSk7XG4gIC8vICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDgwLDgwLDgwLDApIDAlLCByZ2IoODAsODAsODApIDglLCByZ2IoODAsODAsODApIDkyJSwgcmdiYSg4MCw4MCw4MCwwKSAxMDAlKTtcbiAgLy8gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDgwLDgwLDgwLDApIDAlLCByZ2IoODAsODAsODApIDglLCByZ2IoODAsODAsODApIDkyJSwgcmdiYSg4MCw4MCw4MCwwKSAxMDAlKTtcbiAgLy8gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoODAsODAsODAsMCkgMCUsIHJnYig4MCw4MCw4MCkgOCUsIHJnYig4MCw4MCw4MCkgOTIlLCByZ2JhKDgwLDgwLDgwLDApIDEwMCUpO1xuICAvL1xuICAvLyAgei1pbmRleDogNTtcbiAgLy99XG59XG5cbi5wcnRfaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucHJ0X2J0bixcbi5wcnRfaGVhZGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5wcnRfaGVhZGluZyBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ucHJ0X2hlYWRpbmcgaDEsXG4ucHJ0X2hlYWRpbmcgcCB7XG4gIC8vdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaDEsXG4uaDIsXG4uaDMsXG4uaDQsXG4uaDUsXG4uaDYsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5wcnRfaGVhZGluZyBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTAxO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogLTEwcHg7XG4gIGNvbG9yOiAjNmM2M2ZmO1xufVxuXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2luZm8ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xufVxuLnBydF9hYm91dF9sZWFybmJveF9pbmZvIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wcnRfYWJvdXRfbGVhcm5ib3hfaW5mbyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cbi5wcnRfYWJvdXRfbGVhcm5ib3hfaW5mbyBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4vLy5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdDo6YWZ0ZXIge1xuLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuLy8gIHdpZHRoOiAxNXB4O1xuLy8gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgYm9yZGVyOiAzcHggc29saWQgb3JhbmdlcmVkO1xuLy8gIHJpZ2h0OiAtMjJweDtcbi8vICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xuLy8gIHRyYW5zaXRpb246IGFsbCAuM3M7XG4vL31cbi8vLnBydF9hYm91dF9sZWFybmJveF9yaWdodDo6YWZ0ZXIge1xuLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuLy8gIHdpZHRoOiAxNXB4O1xuLy8gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbi8vICBsZWZ0OiAtMjJweDtcbi8vICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xuLy8gIHRyYW5zaXRpb246IGFsbCAuM3M7XG4vL31cbi5tYXItbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4ubWFyLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiA1MCU7XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0IC5wcnRfYWJvdXRfbGVhcm5ib3hfeWVhciB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ucHJ0X2Fib3V0X2xlYXJuYm94X3llYXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogMjAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQgLnBydF9hYm91dF9sZWFybmJveF9pbmZvIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucHJ0X2Fib3V0X2xlYXJuYm94X2luZm8ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xufVxuLnBydF9hYm91dF9sZWFybmJveF95ZWFyIGgxIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjYTFiY2Q4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJ0X2Fib3V0X2xlYXJuc2VjdGlvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgd2lkdGg6IDJweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogLTE7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdDphZnRlcixcbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuXG4ucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnBydF9hYm91dF9sZWFybmJveF9yaWdodDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNmZmY7XG4gIGxlZnQ6IC00MXB4O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHotaW5kZXg6IDEwMDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdCxcbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6aG92ZXI6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDNweCBzb2xpZCAjNmM2M2ZmO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6YWZ0ZXIsXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6aG92ZXI6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNmZmY7XG4gIHJpZ2h0OiAtMzlweDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB6LWluZGV4OiAxMDA7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4ucHJ0X2Fib3V0X2V4cGVyaWVuY2Vib3g6YWZ0ZXIsXG4ucHJ0X2NvbnRhY3RfZGV0YWlsc19ib3g6YWZ0ZXIsXG4ucHJ0X2NvdXRlcl93cmFwcGVyOmFmdGVyIHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0OmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzZjNjNmZjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6aG92ZXIgLnBydF9hYm91dF9sZWFybmJveF95ZWFyIGgxLFxuLnBydF9hYm91dF9sZWFybmJveF9yaWdodDpob3ZlciAucHJ0X2Fib3V0X2xlYXJuYm94X3llYXIgaDEge1xuICBjb2xvcjogIzZjNjNmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC8qIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cbiAgLyogLW1vei1hbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xuICAvKiAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cbiAgLyogLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cbiAgLyogYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cbiAgLyogLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC4zczsgKi9cbiAgLyogLW1vei1hbmltYXRpb24tZGVsYXk6IC4zczsgKi9cbiAgLyogLW1zLWFuaW1hdGlvbi1kZWxheTogLjNzOyAqL1xuICAvKiAtby1hbmltYXRpb24tZGVsYXk6IC4zczsgKi9cbiAgLyogYW5pbWF0aW9uLWRlbGF5OiAuM3M7ICovXG4gIC8qIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyAqL1xuICAvKiBhbmltYXRpb24tbmFtZTogcHVsc2UgKi9cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdCxcbiAgLnBydF9hYm91dF9sZWFybmJveF9yaWdodCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMDIwMjA7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi8vQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4vLyAgLm1haW4tYnV0dG9uIHtcbi8vICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICB9XG4vL31cbi8qIEFuaW1hdGlvbnMgKi9cbkBrZXlmcmFtZXMgZmFkZV9kb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlX3VwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlX3JpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlX2xlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/experience/experience-card/experience-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/experience/experience-card/experience-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExperienceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceCardComponent", function() { return ExperienceCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/animate.component */ "./src/app/animation/animate.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ExperienceCardComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lis_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lis_r1);
} }
const _c0 = function (a0) { return { background: a0 }; };
class ExperienceCardComponent {
    constructor() { }
    // angular.module('yourApp', ['ngColorThief'])
    ngOnInit() {
    }
}
ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) { return new (t || ExperienceCardComponent)(); };
ExperienceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceCardComponent, selectors: [["app-experience-card"]], inputs: { experience: "experience" }, decls: 16, vars: 9, consts: [["wmAnimate", "bumpIn", "aos", "", "speed", "normal", 1, "experience-card"], [1, "experience-banner", 3, "ngStyle"], [1, "experience-blurred_div"], [1, "experience-div-company"], [1, "experience-text-company"], ["crossOrigin", "anonymous", 1, "experience-roundedimg", 3, "src"], [1, "experience-text-details"], [1, "experience-text-role"], [1, "experience-text-date"], [1, "subTitle", "experience-text-desc"], ["class", "subTitle", 4, "ngFor", "ngForOf"], [1, "subTitle"]], template: function ExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExperienceCardComponent_li_15_Template, 2, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.experience.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.experience.companylogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience.descBullets);
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".experience-card[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;\n  border-radius: 10px;\n  border: 1px solid rgba(211, 211, 211, 0.397);\n}\n\n.experience-card[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;\n}\n\n.experience-banner[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 150%;\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));\n  border-radius: 10px 10px 0px 0px;\n  -moz-filter: blur(0px);\n  -o-filter: blur(0px);\n  -ms-filter: blur(0px);\n  filter: blur(0px);\n  height: 11rem;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.experience-blurred_div[_ngcontent-%COMP%] {\n  position: absolute;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n  height: 11rem;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.experience-div-company[_ngcontent-%COMP%] {\n  position: absolute;\n  background: transparent;\n  height: 9rem;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.experience-text-company[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem;\n  margin: 0;\n  color: #fff;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.experience-roundedimg[_ngcontent-%COMP%] {\n  position: absolute;\n  object-fit: cover;\n  left: 0;\n  right: 0;\n  top: 7rem;\n  margin-left: auto;\n  margin-right: auto;\n  width: 8rem;\n  height: 8rem;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n}\n\n.experience-text-role[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-weight: 700;\n  font-size: 25px;\n  margin: 0px;\n  padding-top: 1.5rem;\n  line-height: normal;\n}\n\n.experience-text-date[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n  margin: 0px;\n  padding-top: 1rem;\n  font-weight: 600;\n}\n\n.experience-text-desc[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  line-height: normal;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #495057;\n}\n\n.experience-text-details[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  margin-top: 2rem;\n}\n\n\n\n@media (max-width: 1380px) {\n  .experience-text-role[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n    font-size: 22px;\n  }\n\n  .experience-text-company[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .experience-text-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .experience-roundedimg[_ngcontent-%COMP%] {\n    width: 6.5rem;\n    height: 6.5rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .experience-text-role[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .experience-text-company[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .experience-text-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .experience-text-desc[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0RBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1FQUFBO0VBQ0EsZ0NBQUE7RUFFQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtRUFBQTtFQUVBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQSxnQkFBQTs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBRUY7O0VBQUE7SUFDRSxlQUFBO0VBR0Y7O0VBREE7SUFDRSxlQUFBO0VBSUY7O0VBRkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLGVBQUE7RUFJRjs7RUFGQTtJQUNFLGVBQUE7RUFLRjs7RUFIQTtJQUNFLGVBQUE7RUFNRjs7RUFKQTtJQUNFLGVBQUE7RUFPRjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxVQUFBO0VBTUY7RUFKQTtJQUNFLFVBQUE7RUFNRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2UtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDEwcHggMzBweCAtMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjM5Nyk7XG59XG5cbi5leHBlcmllbmNlLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDIwcHggMzBweCAtMTBweDtcbn1cblxuLmV4cGVyaWVuY2UtYmFubmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAtbW96LWZpbHRlcjogYmx1cigwcHgpO1xuICAtby1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgLW1zLWZpbHRlcjogYmx1cigwcHgpO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgaGVpZ2h0OiAxMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4cGVyaWVuY2UtYmx1cnJlZF9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XG4gIC1vLWZpbHRlcjogYmx1cig1cHgpO1xuICAtbXMtZmlsdGVyOiBibHVyKDVweCk7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICBoZWlnaHQ6IDExcmVtO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLmV4cGVyaWVuY2UtZGl2LWNvbXBhbnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDlyZW07XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhwZXJpZW5jZS10ZXh0LWNvbXBhbnkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZXhwZXJpZW5jZS1yb3VuZGVkaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogN3JlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogOHJlbTtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmV4cGVyaWVuY2UtdGV4dC1yb2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5leHBlcmllbmNlLXRleHQtZGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmV4cGVyaWVuY2UtdGV4dC1kZXNjIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLnN1YlRpdGxlIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4uZXhwZXJpZW5jZS10ZXh0LWRldGFpbHMge1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi8qIE1lZGlhIFF1ZXJ5ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpIHtcbiAgLmV4cGVyaWVuY2UtdGV4dC1yb2xlIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWNvbXBhbnkge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuZXhwZXJpZW5jZS1yb3VuZGVkaW1nIHtcbiAgICB3aWR0aDogNi41cmVtO1xuICAgIGhlaWdodDogNi41cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZXhwZXJpZW5jZS10ZXh0LXJvbGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWNvbXBhbnkge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-card',
                templateUrl: './experience-card.component.html',
                styleUrls: ['./experience-card.component.scss']
            }]
    }], function () { return []; }, { experience: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience-card/experience-card.component */ "./src/app/experience/experience-card/experience-card.component.ts");




function ExperienceComponent_div_0_app_experience_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 6);
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", card_r2);
} }
function ExperienceComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experiences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceComponent_div_0_app_experience_card_7_Template, 1, 1, "app-experience-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.workExperiences.experience);
} }
class ExperienceComponent {
    constructor() {
        this.workExperiences = {
            viewExperiences: true,
            experience: [
                {
                    role: 'IT Developer - CS01',
                    company: 'Canada Revenue Agency',
                    color: '#3781c2',
                    companylogo: '../../../assets/images/CAN-Revenue-Agency.jpeg',
                    date: 'Current',
                    // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    desc: 'Working as a Fullstack developer using Angular & Java.',
                },
                {
                    role: 'IT Developer Intern',
                    company: 'Canada Revenue Agency',
                    color: '#3781c2',
                    companylogo: '../../../assets/images/infosys.png',
                    date: 'Sep. 2020 - Dec. 2020',
                    desc: 'Worked as a Front-end developer using Angular.',
                },
                {
                    role: 'Systems Engineer',
                    company: 'Infosys',
                    color: '#3781c2',
                    companylogo: '../../../assets/images/infosys.png',
                    date: 'Sep. 2018 – Feb. 2020',
                    desc: 'Worked as a Systems Engineer to Integrate complex data using MuleSoft.',
                },
            ],
        };
    }
    ngOnInit() { }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "experience"], ["id", "workExperience", 1, "experience-container"], [1, "experience-heading"], [1, "experience-cards-div"], [3, "experience", 4, "ngFor", "ngForOf"], [3, "experience"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExperienceComponent_div_0_Template, 8, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.workExperiences.viewExperiences);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceCardComponent"]], styles: [".experience-cards-div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\n  gap: 1rem 1rem;\n}\n\n.experience-heading[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 400;\n  margin-bottom: 2rem;\n}\n\n.experience-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.experience-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n\n\n@media (max-width: 1380px) {\n  .experience-heading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .experience-heading[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLDJEQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxPQUFBO0FBREY7O0FBSUEsZ0JBQUE7O0FBRUE7RUFDRTtJQUNFLGVBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2UtY2FyZHMtZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjkwcHgsIDFmcikpO1xuICBnYXA6IDFyZW0gMXJlbTtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5leHBlcmllbmNlLWhlYWRpbmcge1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5leHBlcmllbmNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmV4cGVyaWVuY2UtY29udGFpbmVyPioge1xuICBmbGV4OiAxO1xufVxuXG4vKiBNZWRpYSBRdWVyeSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSB7XG4gIC5leHBlcmllbmNlLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmV4cGVyaWVuY2UtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/animate.component */ "./src/app/animation/animate.component.ts");




class FooterComponent {
    constructor() {
        this.state = 'normal';
    }
    ngOnInit() {
    }
    onAnimate() {
        this.state = 'highlited';
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [["wmAnimate", "jackInTheBox", "speed", "normal", 1, "footer-div"], [1, "footer-text"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2021, Built with \u2764\uFE0F by Yash Jaiswal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]], styles: [".footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #495057;\n}\n\n.footer-div[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFHQSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUFGO0VBR0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQURGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBSEY7RUFNQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFMRjtFQVFBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQVBGO0VBVUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQVJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLmZvb3Rlci1kaXYge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICAvL2FuaW1hdGlvbjogZmFkZV9sZWZ0IDJzO1xufVxuXG4vKiBBbmltYXRpb25zICovXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZV91cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9yaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9sZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('divState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'background-color': 'red',
                    transform: 'translateX(0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'background-color': 'blue',
                    transform: 'translateX(100px)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal <=> highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('divState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'background-color': 'red',
                            transform: 'translateX(0)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'background-color': 'blue',
                            transform: 'translateX(100px)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal <=> highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)),
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/github-calendar/github-calendar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/github-calendar/github-calendar.component.ts ***!
  \**************************************************************/
/*! exports provided: GithubCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubCalendarComponent", function() { return GithubCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GithubCalendarComponent {
    constructor() { }
    ngOnInit() {
        GitHubCalendar('.calendar', 'theyashjaiswal', {
            responsive: true,
            tooltips: true,
        });
    }
}
GithubCalendarComponent.ɵfac = function GithubCalendarComponent_Factory(t) { return new (t || GithubCalendarComponent)(); };
GithubCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GithubCalendarComponent, selectors: [["app-github-calendar"]], decls: 3, vars: 0, consts: [["rel", "stylesheet", "href", "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"], [1, "calendar"]], template: function GithubCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading the data just for you.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi1jYWxlbmRhci9naXRodWItY2FsZW5kYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-github-calendar',
                templateUrl: './github-calendar.component.html',
                styleUrls: ['./github-calendar.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/greeting/greeting.component.ts":
/*!************************************************!*\
  !*** ./src/app/greeting/greeting.component.ts ***!
  \************************************************/
/*! exports provided: GreetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingComponent", function() { return GreetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation/animate.component */ "./src/app/animation/animate.component.ts");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-media/social-media.component */ "./src/app/social-media/social-media.component.ts");




class GreetingComponent {
    constructor() {
        this.greeting = {
            username: 'Yash Jaiswal',
            title: "Hello, I'm Yash",
            subTitle: 'A passionate Software Developer 🚀 experienced in building Web applications with Angular, Java, Reactjs, Nodejs and few other cool libraries and frameworks.',
            resumeLink: 'https://drive.google.com/file/d/19XWiVSGbhvHReMi0grrKbkuSmpFm8i3J/view?usp=sharing',
        };
    }
    ngOnInit() { }
}
GreetingComponent.ɵfac = function GreetingComponent_Factory(t) { return new (t || GreetingComponent)(); };
GreetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GreetingComponent, selectors: [["app-greeting"]], decls: 20, vars: 3, consts: [["id", "greeting", 1, "greet-main"], ["wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 1, "greeting-main"], [1, "greeting-text-div"], [1, "greeting-text"], [1, "wave-emoji"], [1, "greeting-text-p", "subTitle"], [1, "button-greeting-div"], ["href", "#contact", 1, "main-button"], ["target", "_blank", 1, "main-button", 3, "href"], [1, "greeting-image-div"], ["src", "../../assets/images/manOnTable.svg", "alt", "Yash table"]], template: function GreetingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\uD83D\uDC4B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-social-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Download resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.greeting.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.greeting.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.greeting.resumeLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 4rem;\n}\n\n.greet-main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.gretting-main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n}\n\n.greeting-main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.greeting-main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.button-greeting-div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n\n.greeting-text[_ngcontent-%COMP%] {\n  font-size: 70px;\n  line-height: 1.1;\n  margin-top: 1rem;\n}\n\n.greeting-text-p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 40px;\n}\n\n.greeting-image-div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.wave-emoji[_ngcontent-%COMP%] {\n  animation-duration: 1.8s;\n  animation-iteration-count: infinite;\n  animation-name: wave;\n  display: inline-block;\n  transform-origin: 70% 70%;\n}\n\np[_ngcontent-%COMP%] {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #495057;\n}\n\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(-10deg);\n  }\n  20% {\n    transform: rotate(12deg);\n  }\n  30% {\n    transform: rotate(-10deg);\n  }\n  40% {\n    transform: rotate(9deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n\n\n@media (max-width: 1380px) {\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 768px) {\n  .button-greeting-div[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n    text-align: center;\n  }\n\n  .greeting-main[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.main-button[_ngcontent-%COMP%] {\n  background-color: #1b5299;\n  border: solid 1px #1b5299;\n  color: white;\n  font-weight: 700;\n  width: -webkit-max-content;\n  width: max-content;\n  padding: 13px 22px;\n  margin-right: 50px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.main-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: black;\n  transition: all 0.3s ease 0s;\n  transform: translateY(-3px);\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.greeting-text-p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 40px;\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 12px 18px;\n    margin-right: 0px;\n  }\n\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 35px;\n    font-weight: 700;\n  }\n}\n\n@media (max-width: 320px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JlZXRpbmcvZ3JlZXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtBQUtGOztBQUhBO0VBQ0U7SUFDRSx1QkFBQTtFQU1GO0VBSkE7SUFDRSx5QkFBQTtFQU1GO0VBSkE7SUFDRSx3QkFBQTtFQU1GO0VBSkE7SUFDRSx5QkFBQTtFQU1GO0VBSkE7SUFDRSx1QkFBQTtFQU1GO0VBSkE7SUFDRSx1QkFBQTtFQU1GO0VBSkE7SUFDRSx1QkFBQTtFQU1GO0FBQ0Y7O0FBSEEsZ0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFLRjs7RUFIQTtJQUNFLGVBQUE7RUFNRjtBQUNGOztBQUpBO0VBQ0U7SUFDRSw2QkFBQTtFQU1GOztFQUpBO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBT0Y7O0VBTEE7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQVFGOztFQU5BO0lBQ0UsY0FBQTtFQVNGO0FBQ0Y7O0FBUEE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFTRjs7QUFQQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBV0Y7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVEEsZ0JBQUE7O0FBT0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBTUY7O0VBSkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFPRjtBQUNGOztBQUxBO0VBQ0U7SUFDRSxlQUFBO0VBT0Y7QUFDRjs7QUFKQSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQU1GO0VBSEE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUtGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBR0Y7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFDRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQURGO0VBSUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ncmVldGluZy9ncmVldGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuLmdyZWV0LW1haW4ge1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIC8vYW5pbWF0aW9uOiBmYWRlX3VwIDJzO1xufVxuXG4uZ3JldHRpbmctbWFpbiB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmdyZWV0aW5nLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZ3JlZXRpbmctbWFpbiA+ICoge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmJ1dHRvbi1ncmVldGluZy1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZ3JlZXRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmdyZWV0aW5nLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5ncmVldGluZy1pbWFnZS1kaXYgPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi53YXZlLWVtb2ppIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjhzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHdhdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTtcbn1cbnAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuLnN1YlRpdGxlIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5Aa2V5ZnJhbWVzIHdhdmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDlkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cblxuLyogTWVkaWEgUXVlcnkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpIHtcbiAgLmdyZWV0aW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAuZ3JlZXRpbmctdGV4dC1wIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnV0dG9uLWdyZWV0aW5nLWRpdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmdyZWV0aW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmdyZWV0aW5nLXRleHQtcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ncmVldGluZy1tYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLm1haW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiNTI5OTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzFiNTI5OTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDEzcHggMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xufVxuLm1haW4tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG59XG4ucHJvamVjdC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ncmVldGluZy10ZXh0LXAge1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4vKiBNZWRpYSBRdWVyeSAqL1xuLy9AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSB7XG4vLyAgLmdyZWV0aW5nLXRleHQtcCB7XG4vLyAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgfVxuLy99XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmdyZWV0aW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLm1haW4tYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuLyogQW5pbWF0aW9ucyAqL1xuQGtleWZyYW1lcyBmYWRlX2Rvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVfdXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVfcmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVfbGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreetingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-greeting',
                templateUrl: './greeting.component.html',
                styleUrls: ['./greeting.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/animate.component */ "./src/app/animation/animate.component.ts");




class HeaderComponent {
    constructor() {
        this.greeting = {
            username: 'Yash Jaiswal',
            title: "Hello, I'm Yash",
            subTitle: 'A passionate Software Developer 🚀 experienced in building Web applications with Angular, Java, Reactjs, Nodejs and few other cool libraries and frameworks.',
            resumeLink: 'https://drive.google.com/file/d/19XWiVSGbhvHReMi0grrKbkuSmpFm8i3J/view?usp=sharing',
        };
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 31, vars: 1, consts: [["wmAnimate", "landing", "aos", "", "speed", "normal", 1, "header"], ["href", "", 1, "logo"], [1, "grey-color"], [1, "logo-name"], ["type", "checkbox", "id", "menu-btn", 1, "menu-btn"], ["for", "menu-btn", 1, "menu-icon"], [1, "navicon"], [1, "menu"], ["href", "#skills"], ["href", "#education"], ["href", "#projects"], ["href", "#experience"], ["href", "#contact"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " <");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.greeting.username);
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.header[_ngcontent-%COMP%] {\n  max-width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n}\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden;\n  background-color: #fff;\n}\n.grey-color[_ngcontent-%COMP%] {\n  color: #495057;\n}\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px 20px;\n  font-weight: 400;\n  color: black;\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f4f4f4;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  font-size: 1.5em;\n  text-decoration: none;\n  margin-top: 10px;\n  line-height: normal;\n}\n.header[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n  font-family: \"Agustina Regular\";\n  font-weight: bold;\n  font-variant-ligatures: no-common-ligatures;\n  -webkit-font-variant-ligatures: no-common-ligatures;\n  padding: 0 10px;\n  color: #1b5299;\n}\n.header[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  clear: both;\n  max-height: 0;\n  transition: max-height 0.2s ease-out;\n}\n\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  float: right;\n  padding: 28px 20px;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: #333;\n  display: block;\n  height: 2px;\n  position: relative;\n  transition: background 0.2s ease-out;\n  width: 18px;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  background: #333;\n  content: \"\";\n  display: block;\n  height: 100%;\n  position: absolute;\n  transition: all 0.2s ease-out;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before {\n  top: 5px;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  top: -5px;\n}\n\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\n  max-height: 370px;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]::before {\n  transform: rotate(-45deg);\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]::after {\n  transform: rotate(45deg);\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:after {\n  top: 0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media (min-width: 48em) {\n  .header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 960px) and (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRUY7QUFDQTs7RUFFRSx5QkFBQTtBQUVGO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFHRjtBQURFO0VBQ0UsVUFBQTtBQUdKO0FBQ0EsU0FBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQUNGO0FBRUEsY0FBQTtBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTtFQUNFLFFBQUE7QUFBRjtBQUdBO0VBQ0UsU0FBQTtBQUFGO0FBR0EsYUFBQTtBQUVBO0VBQ0UsYUFBQTtBQURGO0FBSUE7RUFDRSxpQkFBQTtBQURGO0FBSUE7RUFDRSx1QkFBQTtBQURGO0FBSUE7RUFDRSx5QkFBQTtBQURGO0FBSUE7RUFDRSx3QkFBQTtBQURGO0FBSUE7O0VBRUUsTUFBQTtBQURGO0FBR0E7RUFDRSxVQUFBO0FBQUY7QUFFQSxpQkFBQTtBQUVBO0VBQ0U7SUFDRSxXQUFBO0VBQUY7O0VBRUE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtFQUNGOztFQUNBO0lBQ0UsZ0JBQUE7RUFFRjs7RUFBQTtJQUNFLGFBQUE7RUFHRjtBQUNGO0FBREE7RUFDRTtJQUNFLGVBQUE7RUFHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGhlYWRlciAqL1xucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5oZWFkZXIge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uaGVhZGVyIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmdyZXktY29sb3Ige1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLmhlYWRlciBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oZWFkZXIgbGkgYTpob3Zlcixcbi5oZWFkZXIgLm1lbnUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbn1cblxuLmhlYWRlciAubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLmhlYWRlciAubG9nby1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiQWd1c3RpbmEgUmVndWxhclwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC12YXJpYW50LWxpZ2F0dXJlczogbm8tY29tbW9uLWxpZ2F0dXJlcztcbiAgLXdlYmtpdC1mb250LXZhcmlhbnQtbGlnYXR1cmVzOiBuby1jb21tb24tbGlnYXR1cmVzO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGNvbG9yOiAjMWI1Mjk5O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cblxuLyogbWVudSAqL1xuXG4uaGVhZGVyIC5tZW51IHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cblxuLyogbWVudSBpY29uICovXG5cbi5oZWFkZXIgLm1lbnUtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDI4cHggMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLW91dDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5oZWFkZXIgLm1lbnUtaWNvbiAubmF2aWNvbjpiZWZvcmUsXG4uaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uOmJlZm9yZSB7XG4gIHRvcDogNXB4O1xufVxuXG4uaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YWZ0ZXIge1xuICB0b3A6IC01cHg7XG59XG5cbi8qIG1lbnUgYnRuICovXG5cbi5oZWFkZXIgLm1lbnUtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51IHtcbiAgbWF4LWhlaWdodDogMzcwcHg7XG59XG5cbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uIC5uYXZpY29uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uIC5uYXZpY29uOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uaGVhZGVyIC5tZW51LWJ0bjpjaGVja2VkIH4gLm1lbnUtaWNvbiAubmF2aWNvbjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uOm5vdCguc3RlcHMpIC5uYXZpY29uOmJlZm9yZSxcbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uOm5vdCguc3RlcHMpIC5uYXZpY29uOmFmdGVyIHtcbiAgdG9wOiAwO1xufVxuLnN1YnRpdGxlIHtcbiAgY29sb3I6IHJlZDtcbn1cbi8qIDQ4ZW0gPSA3NjhweCAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuaGVhZGVyIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5oZWFkZXIgLm1lbnUge1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cbiAgLmhlYWRlciAubWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
            // trigger('routerTransition', [
            //   transition('* <=> *', [
            //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
            //     group([
            //       query(':enter', [
            //         style({ opacity:0 }),
            //         animate('1000ms ease-in-out', style({ opacity:1 }))
            //       ]),
            //       query(':leave', [
            //         style({ opacity:1 }),
            //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
            //     ])
            //   ])
            // ])
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadein', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 1,
                    transform: 'translateX(0)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        transform: 'translateX(-100px)',
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(100px)',
                        opacity: 0,
                    })),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                animations: [
                    // trigger('routerTransition', [
                    //   transition('* <=> *', [
                    //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
                    //     group([
                    //       query(':enter', [
                    //         style({ opacity:0 }),
                    //         animate('1000ms ease-in-out', style({ opacity:1 }))
                    //       ]),
                    //       query(':leave', [
                    //         style({ opacity:1 }),
                    //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
                    //     ])
                    //   ])
                    // ])
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadein', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'translateX(0)',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 0,
                                transform: 'translateX(-100px)',
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(100px)',
                                opacity: 0,
                            })),
                        ]),
                    ]),
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/github-repo-card/github-repo-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/projects/github-repo-card/github-repo-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: GithubRepoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubRepoCardComponent", function() { return GithubRepoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/animate.component */ "./src/app/animation/animate.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { backgroundColor: a0 }; };
class GithubRepoCardComponent {
    constructor(window) {
        this.window = window;
    }
    ngOnInit() {
        console.log(this.github.node.url);
    }
    onCardClick() {
        let win = window.open(this.github.node.url, "_blank");
        win.focus();
    }
}
GithubRepoCardComponent.ɵfac = function GithubRepoCardComponent_Factory(t) { return new (t || GithubRepoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Window)); };
GithubRepoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GithubRepoCardComponent, selectors: [["app-github-repo-card"]], inputs: { github: "github", link: "link" }, decls: 28, vars: 9, consts: [["wmAnimate", "bumpIn", "aos", "", "speed", "normal"], [1, "repo-card-div", 3, "click"], [1, "repo-name-div"], ["aria-hidden", "true", "height", "20", "role", "img", "viewBox", "0 0 12 16", "width", "14", 1, "repo-svg"], ["fill-rule", "evenodd", "d", "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"], [1, "repo-name"], [1, "repo-description"], [1, "repo-stats"], [1, "repo-left-stat"], [1, "language-color", 3, "ngStyle"], ["aria-hidden", "true", "height", "20", "role", "img", "viewBox", "0 0 10 16", "width", "12", "fill", "rgb(106, 115, 125)", 1, "repo-star-svg"], ["fill-rule", "evenodd", "d", "M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"], ["aria-hidden", "true", "height", "20", "role", "img", "viewBox", "0 0 14 16", "width", "14", "fill", "rgb(106, 115, 125)", 1, "repo-star-svg"], ["fill-rule", "evenodd", "d", "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"], [1, "repo-right-stat"]], template: function GithubRepoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GithubRepoCardComponent_Template_div_click_1_listener() { return ctx.onCardClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.github.node.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.github.node.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.github.node.primaryLanguage.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.github.node.primaryLanguage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.github.node.forkCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.github.node.stargazers.totalCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.github.node.diskUsage, " KB");
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".repo-card-div[_ngcontent-%COMP%] {\n  color: #586069;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 30px -15px;\n  padding: 2rem;\n  cursor: pointer;\n}\n\n.repo-card-div[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;\n}\n\n.repo-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: #6a737d;\n}\n\n.repo-left-stat[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n}\n\n.language-color[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: blue;\n  margin-right: 0.25rem;\n  border-radius: 100%;\n}\n\n.JavaScript[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.CSS[_ngcontent-%COMP%] {\n  background-color: rebeccapurple;\n}\n\n.HTML[_ngcontent-%COMP%] {\n  background-color: orangered;\n}\n\n.repo-left-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 0.75rem;\n}\n\n.repo-left-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.repo-name-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.repo-svg[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  min-width: 16px;\n}\n\n.repo-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #24292e;\n  margin-bottom: 0.75rem;\n  font-size: 25px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n  overflow: hidden;\n  margin: 0px;\n}\n\n.repo-star-svg[_ngcontent-%COMP%] {\n  margin-right: 0.3rem;\n}\n\n.repo-description[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvZ2l0aHViLXJlcG8tY2FyZC9naXRodWItcmVwby1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0Usa0RBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFFQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLHdCQUFBO0FBR0Y7O0FBREE7RUFDRSwrQkFBQTtBQUlGOztBQUZBO0VBQ0UsMkJBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFFQSxtQkFBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBSEU7RUFDRSxTQUFBO0FBS0o7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxvQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvZ2l0aHViLXJlcG8tY2FyZC9naXRodWItcmVwby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG8tY2FyZC1kaXYge1xuICBjb2xvcjogcmdiKDg4LCA5NiwgMTA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDEwcHggMzBweCAtMTVweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlcG8tY2FyZC1kaXY6aG92ZXIge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDIwcHggMzBweCAtMTBweDtcbn1cblxuLnJlcG8tc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJnYigxMDYsIDExNSwgMTI1KTtcbn1cblxuLnJlcG8tbGVmdC1zdGF0IHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGFuZ3VhZ2UtY29sb3Ige1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uSmF2YVNjcmlwdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuLkNTU3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcbn1cbi5IVE1Me1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG59XG5cbi5yZXBvLWxlZnQtc3RhdCBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuXG4gICYgPiBwe1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ucmVwby1uYW1lLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZXBvLXN2ZyB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBtaW4td2lkdGg6IDE2cHg7XG59XG5cbi5yZXBvLW5hbWUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IHJnYigzNiwgNDEsIDQ2KTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJlcG8tc3Rhci1zdmcge1xuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcbn1cblxuLnJlcG8tZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubRepoCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-github-repo-card',
                templateUrl: './github-repo-card.component.html',
                styleUrls: ['./github-repo-card.component.scss']
            }]
    }], function () { return [{ type: Window }]; }, { github: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/projects/graphql.module.ts":
/*!********************************************!*\
  !*** ./src/app/projects/graphql.module.ts ***!
  \********************************************/
/*! exports provided: provideApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideApollo", function() { return provideApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








const uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here
function provideApollo(httpLink) {
    const basic = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])((operation, context) => ({
        headers: {
            Accept: 'charset=utf-8'
        }
    }));
    const token = ""; //Your github token here
    const auth = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])((operation, context) => ({
        headers: {
            Authorization: `Bearer ${token}`
        },
    }));
    const link = apollo_link__WEBPACK_IMPORTED_MODULE_5__["ApolloLink"].from([basic, auth, httpLink.create({ uri })]);
    const cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]();
    return {
        link,
        cache
    };
}
class GraphQLModule {
}
GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); }, providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: provideApollo,
            deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]],
        },
    ], imports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GraphQLModule, { exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
                providers: [
                    {
                        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
                        useFactory: provideApollo,
                        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]],
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/animate.component */ "./src/app/animation/animate.component.ts");
/* harmony import */ var _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github-calendar/github-calendar.component */ "./src/app/github-calendar/github-calendar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github-repo-card/github-repo-card.component */ "./src/app/projects/github-repo-card/github-repo-card.component.ts");







function ProjectsComponent_app_github_repo_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-github-repo-card", 7);
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("github", project_r1)("index", i_r2);
} }
class ProjectsComponent {
    constructor(apollo) {
        this.apollo = apollo;
        this.projects2 = [];
        this.projects3 = [
            {
                link: '',
            },
        ];
    }
    ngOnInit() { }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 10, vars: 1, consts: [["id", "projects", "wmAnimate", "landing", "aos", "", "speed", "faster", 1, "main"], [1, "project-title"], [1, "github__chart"], [1, "repo-cards-div-main"], [3, "github", "index", 4, "ngFor", "ngForOf"], [1, "project-button"], ["href", "https://github.com/theyashjaiswal", "target", "_blank", 1, "main-button"], [3, "github", "index"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-github-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_app_github_repo_card_6_Template, 1, 2, "app-github-repo-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "See Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects2);
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"], _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_3__["GithubCalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_5__["GithubRepoCardComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 4rem;\n}\n\n.github__chart[_ngcontent-%COMP%] {\n  margin: 3rem auto;\n  width: 80vw;\n}\n\n.project-title[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.startup-project-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.repo-cards-div-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1rem 1rem;\n}\n\n.main-button[_ngcontent-%COMP%] {\n  background-color: #1b5299;\n  border: 1px solid #1b5299;\n  color: #fff;\n  font-weight: 700;\n  width: -webkit-max-content;\n  width: max-content;\n  padding: 13px 22px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n\n\n@media (max-width: 1380px) {\n  .project-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .project-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .repo-cards-div-main[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFFQSxtQ0FBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQSxnQkFBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQUlGOztFQUZBO0lBQ0UsMkRBQUE7RUFLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cblxuLmdpdGh1Yl9fY2hhcnQge1xuICBtYXJnaW46IDNyZW0gYXV0bztcbiAgd2lkdGg6IDgwdnc7XG59XG4ucHJvamVjdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnN0YXJ0dXAtcHJvamVjdC10ZXh0IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVwby1jYXJkcy1kaXYtbWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xuICBnYXA6IDFyZW0gMXJlbTtcbn1cbi5tYWluLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjUyOTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYjUyOTk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudDtcbiAgd2lkdGg6IC1tb3otbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMTNweCAyMnB4O1xuICAvL21hcmdpbi1yaWdodDogNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbn1cbi5wcm9qZWN0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLyogTWVkaWEgUXVlcnkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpIHtcbiAgLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9qZWN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yZXBvLWNhcmRzLWRpdi1tYWluIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss'],
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"] }]; }, null); })();


/***/ }),

/***/ "./src/app/skill-progress/skill-progress.component.ts":
/*!************************************************************!*\
  !*** ./src/app/skill-progress/skill-progress.component.ts ***!
  \************************************************************/
/*! exports provided: SkillProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillProgressComponent", function() { return SkillProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/animate.component */ "./src/app/animation/animate.component.ts");




function SkillProgressComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r2.Stack);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.progressStyle(exp_r2.progressPercentage));
} }
function SkillProgressComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Proficiency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillProgressComponent_div_0_div_4_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.techStack.experience);
} }
class SkillProgressComponent {
    constructor() {
        this.techStack = {
            viewSkillBars: true,
            experience: [
                {
                    Stack: "Frontend/Design",
                    progressPercentage: "75%"
                },
                {
                    Stack: "Backend",
                    progressPercentage: "60%"
                },
                {
                    Stack: "Programming",
                    progressPercentage: "60%"
                },
                {
                    Stack: "MachineLearning/AI",
                    progressPercentage: "30%"
                }
            ]
        };
    }
    ngOnInit() {
    }
    progressStyle(percentage) {
        return { width: percentage };
    }
}
SkillProgressComponent.ɵfac = function SkillProgressComponent_Factory(t) { return new (t || SkillProgressComponent)(); };
SkillProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillProgressComponent, selectors: [["app-skill-progress"]], decls: 1, vars: 1, consts: [["class", "skills-container", "wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 4, "ngIf"], ["wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 1, "skills-container"], [1, "skills-bar"], [1, "skills-heading"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skills-image"], ["alt", "Skills", "src", "../../assets/images/skill.svg"], [1, "skill"], [1, "meter"]], template: function SkillProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillProgressComponent_div_0_Template, 7, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.techStack.viewSkillBars);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".meter[_ngcontent-%COMP%] {\n  height: 20px;\n  position: relative;\n  background: #f3efef;\n  border-radius: 25px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.meter[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background-color: #a1bcd8;\n  position: relative;\n  overflow: hidden;\n}\n\n.skill[_ngcontent-%COMP%] {\n  line-height: 3.5vw;\n}\n\n.skills-bar[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 40%;\n}\n\n.skills-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.skills-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.skills-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  max-width: 90%;\n  height: auto;\n}\n\n\n\n@media (max-width: 1456px) {\n  .skills-bar[_ngcontent-%COMP%] {\n    line-height: 4rem;\n    width: 100%;\n  }\n\n  .skills-image[_ngcontent-%COMP%] {\n    display: none;\n    order: 2;\n  }\n}\n\n@media (max-width: 768px) {\n  .skills-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .skills-bar[_ngcontent-%COMP%] {\n    line-height: 3rem;\n    margin: 20px;\n  }\n\n  .skills-image[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwtcHJvZ3Jlc3Mvc2tpbGwtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUdBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBREEsZ0JBQUE7O0FBRUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQUdGOztFQURBO0lBQ0UsYUFBQTtJQUNBLFFBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0U7SUFDRSxzQkFBQTtFQUdGOztFQURBO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0VBSUY7O0VBRkE7SUFFRSxRQUFBO0VBSUY7QUFDRjs7QUFBQSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUVGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUNGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBREY7RUFJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFIRjtFQU1BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUxGO0VBUUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9za2lsbC1wcm9ncmVzcy9za2lsbC1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXRlciB7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyMzksIDIzOSk7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuaDF7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubWV0ZXIgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYmNkODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNraWxse1xuICBsaW5lLWhlaWdodDogMy41dnc7XG59XG5cbi5za2lsbHMtYmFye1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA0MCU7XG4gIC8vYW5pbWF0aW9uOiBmYWRlX2xlZnQgMS41cyA2cztcbn1cbi5za2lsbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uc2tpbGxzLWNvbnRhaW5lciA+ICoge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNraWxscy1pbWFnZSA+IGltZyB7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICAvL2FuaW1hdGlvbjogZmFkZV9yaWdodCAxLjVzIDZzO1xufVxuXG4vKiBNZWRpYSBRdWVyeSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ1NnB4KSB7XG4gIC5za2lsbHMtYmFyIHtcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2tpbGxzLWltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG9yZGVyOiAyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2tpbGxzLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICB9XG4gIC5za2lsbHMtYmFyIHtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbiAgLnNraWxscy1pbWFnZSB7XG4gICAgLy9kaXNwbGF5OiBub25lO1xuICAgIG9yZGVyOiAyO1xuICB9XG59XG5cblxuLyogQW5pbWF0aW9ucyAqL1xuQGtleWZyYW1lcyBmYWRlX2Rvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZV91cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlX3JpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVfbGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skill-progress',
                templateUrl: './skill-progress.component.html',
                styleUrls: ['./skill-progress.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation/animate.component */ "./src/app/animation/animate.component.ts");
/* harmony import */ var _software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./software-skill/software-skill.component */ "./src/app/skills/software-skill/software-skill.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SkillsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
} }
class SkillsComponent {
    constructor() {
        this.skillsSection = {
            title: 'What I do💁‍♂️',
            subTitle: 'FULL STACK SOFTWARE DEVELOPER',
            skills: [
                '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications',
                '⚡ Creating application backend in Java, Node, Express & Flask',
                '⚡ Integration of third party services such as Firebase/ Heroku/ AWS',
                '⚡ Also, experienced in working with Integration tools such as MuleSoft and Tibco BW.',
            ],
        };
    }
    ngOnInit() { }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 11, vars: 3, consts: [["id", "skills", 1, "main"], [1, "skills-main-div"], ["wmAnimate", "fadeInRight", "aos", "", "speed", "normal", 1, "skills-image-div"], ["alt", "Yash Working", "src", "../../assets/images/developerActivity.svg", 1, "skills-image-div"], ["wmAnimate", "fadeInLeft", "aos", "", "speed", "normal", 1, "skills-text-div"], [1, "skills-heading"], [1, "subTitle", "skills-text-subtitle"], [4, "ngFor", "ngForOf"], [1, "subTitle", "skills-text"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-software-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SkillsComponent_div_10_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skillsSection.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.skillsSection.subTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsSection.skills);
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_2__["SoftwareSkillComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".subTitle[_ngcontent-%COMP%] {\n  color: #495057;\n}\n\n.skills-main-div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.skills-text-div[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n.skills-main-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.skills-image-div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.skills-heading[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 400;\n}\n\n\n\n@media (max-width: 1380px) {\n  .skills-heading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .skills-heading[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n  }\n\n  .skills-main-div[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .skills-text-div[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin: 20px;\n  }\n\n  .skills-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .skills-text-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    text-align: center;\n  }\n\n  .skills-image-div[_ngcontent-%COMP%] {\n    \n    order: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQSxnQkFBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQUdGOztFQURBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBSUY7O0VBRkE7SUFDRSxzQkFBQTtFQUtGOztFQUhBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0VBTUY7O0VBSkE7SUFDRSxlQUFBO0VBT0Y7O0VBTEE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFRRjs7RUFOQTtJQUNFLG1CQUFBO0lBQ0EsUUFBQTtFQVNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YlRpdGxlIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4uc2tpbGxzLW1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5za2lsbHMtdGV4dC1kaXYge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnNraWxscy1tYWluLWRpdiA+ICoge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc2tpbGxzLWltYWdlLWRpdiA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2tpbGxzLWhlYWRpbmcge1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi8qIE1lZGlhIFF1ZXJ5ICovXG5AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSB7XG4gIC5za2lsbHMtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNraWxscy1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ncmVldGluZy10ZXh0LXAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIC5za2lsbHMtbWFpbi1kaXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnNraWxscy10ZXh0LWRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbiAgLnNraWxscy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnNraWxscy10ZXh0LXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5za2lsbHMtaW1hZ2UtZGl2IHtcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgIG9yZGVyOiAyO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/skills/software-skill/software-skill.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/skills/software-skill/software-skill.component.ts ***!
  \*******************************************************************/
/*! exports provided: SoftwareSkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareSkillComponent", function() { return SoftwareSkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SoftwareSkillComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skills_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skills_r1.fontAwesomeClassname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skills_r1.skillName);
} }
class SoftwareSkillComponent {
    constructor() {
        this.skillsSection = {
            softwareSkills: [
                {
                    skillName: 'HTML5',
                    fontAwesomeClassname: 'fab fa-html5',
                },
                {
                    skillName: 'CSS3',
                    fontAwesomeClassname: 'fab fa-css3-alt',
                },
                {
                    skillName: 'SASS',
                    fontAwesomeClassname: 'fab fa-sass',
                },
                {
                    skillName: 'JavaScript',
                    fontAwesomeClassname: 'fab fa-js',
                },
                {
                    skillName: 'Angular',
                    fontAwesomeClassname: 'fab fa-angular',
                },
                {
                    skillName: 'React',
                    fontAwesomeClassname: 'fab fa-react',
                },
                {
                    skillName: 'Nodejs',
                    fontAwesomeClassname: 'fab fa-node',
                },
                {
                    skillName: 'NPM',
                    fontAwesomeClassname: 'fab fa-npm',
                },
                {
                    skillName: 'SQL',
                    fontAwesomeClassname: 'fas fa-database',
                },
                {
                    skillName: 'Python',
                    fontAwesomeClassname: 'fab fa-python',
                },
            ],
        };
    }
    ngOnInit() { }
}
SoftwareSkillComponent.ɵfac = function SoftwareSkillComponent_Factory(t) { return new (t || SoftwareSkillComponent)(); };
SoftwareSkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SoftwareSkillComponent, selectors: [["app-software-skill"]], decls: 4, vars: 1, consts: [[1, "software-skills-main-div"], [1, "dev-icons"], ["class", "software-skill-inline", 4, "ngFor", "ngForOf"], [1, "software-skill-inline"]], template: function SoftwareSkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SoftwareSkillComponent_li_3_Template, 4, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsSection.softwareSkills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".dev-icons[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n  font-size: 3rem;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  text-align: center;\n}\n\n.software-skill-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #495057;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  color: #645beb;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 10px;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover    ~ p[_ngcontent-%COMP%] {\n  color: #645beb;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #495057;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NvZnR3YXJlLXNraWxsL3NvZnR3YXJlLXNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc29mdHdhcmUtc2tpbGwvc29mdHdhcmUtc2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV2LWljb25zIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb2Z0d2FyZS1za2lsbC1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNvZnR3YXJlLXNraWxsLWlubGluZSA+IGkge1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnNvZnR3YXJlLXNraWxsLWlubGluZSA+IGk6aG92ZXIge1xuICBjb2xvcjogIzY0NWJlYjtcbn1cbi5zb2Z0d2FyZS1za2lsbC1pbmxpbmUgPiBwIHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5zb2Z0d2FyZS1za2lsbC1pbmxpbmUgPiBpOmhvdmVyIH4gcCB7XG4gIGNvbG9yOiAjNjQ1YmViO1xufVxuLnN1YlRpdGxlIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoftwareSkillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-software-skill',
                templateUrl: './software-skill.component.html',
                styleUrls: ['./software-skill.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/social-media/social-media.component.ts":
/*!********************************************************!*\
  !*** ./src/app/social-media/social-media.component.ts ***!
  \********************************************************/
/*! exports provided: SocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function() { return SocialMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SocialMediaComponent {
    constructor() {
        this.socialMediaLinks = {
            github: 'https://github.com/theyashjaiswal',
            linkedin: 'https://www.linkedin.com/in/theyashjaiswal/',
            gmail: 'yashjaiswalofficial@gmail.com',
            instagram: 'https://www.instagram.com/theyashjaiswal?hl=en',
            facebook: 'https://www.facebook.com/yashjaiswalmusic',
        };
    }
    ngOnInit() { }
}
SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) { return new (t || SocialMediaComponent)(); };
SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaComponent, selectors: [["app-social-media"]], decls: 16, vars: 5, consts: [[1, "social-media-div"], ["target", "_blank", 1, "icon-button", "github", 3, "href"], [1, "fab", "fa-github"], ["target", "_blank", 1, "icon-button", "linkedin", 3, "href"], [1, "fab", "fa-linkedin-in"], ["target", "_blank", 1, "icon-button", "google", 3, "href"], [1, "fab", "fa-google"], ["target", "_blank", 1, "icon-button", "instagram", 3, "href"], [1, "fab", "fa-instagram"], ["target", "_blank", 1, "icon-button", "facebook", 3, "href"], [1, "fab", "fa-facebook-f"]], template: function SocialMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto:" + ctx.socialMediaLinks.gmail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".social-media-div[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.icon-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 2.6rem;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.3rem;\n  height: 2.6rem;\n  line-height: 2.6rem;\n  margin: 0 5px;\n  position: relative;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  width: 2.6rem;\n  margin-bottom: 10px;\n}\n\n.facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #3b5998;\n}\n\n.linkedin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #0e76a8;\n}\n\n.github[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n.gitlab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #fca326;\n}\n\n.google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #ea4335;\n}\n\n.twitter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #1da1f2;\n}\n\n.instagram[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #c13584;\n}\n\n\n\n.twitter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .gitlab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .github[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .linkedin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .instagram[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: black;\n  transition: 0.3s ease-in;\n}\n\n\n\n@media (max-width: 768px) {\n  .social-media-div[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsLW1lZGlhL3NvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBLHFCQUFBOztBQUNBOzs7Ozs7O0VBT0UsdUJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBLGdCQUFBOztBQUNBO0VBQ0U7SUFDRSxrQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwtbWVkaWEvc29jaWFsLW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbC1tZWRpYS1kaXYge1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLmljb24tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmljb24tYnV0dG9uIGkge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDIuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcbiAgbWFyZ2luOiAwIDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdpZHRoOiAyLjZyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mYWNlYm9vayBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbn1cblxuLmxpbmtlZGluIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NmE4O1xufVxuXG4uZ2l0aHViIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4uZ2l0bGFiIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhMzI2O1xufVxuXG4uZ29vZ2xlIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0MzM1O1xufVxuXG4udHdpdHRlciBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkYTFmMjtcbn1cblxuLmluc3RhZ3JhbSBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxMzU4NDtcbn1cblxuLyogSG92ZXIgVHJhbnNpdGlvbiAqL1xuLnR3aXR0ZXIgaTpob3Zlcixcbi5nb29nbGUgaTpob3Zlcixcbi5naXRsYWIgaTpob3Zlcixcbi5naXRodWIgaTpob3Zlcixcbi5saW5rZWRpbiBpOmhvdmVyLFxuLmZhY2Vib29rIGk6aG92ZXIsXG4uaW5zdGFncmFtIGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xufVxuXG4vKiBNZWRpYSBRdWVyeSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zb2NpYWwtbWVkaWEtZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-media',
                templateUrl: './social-media.component.html',
                styleUrls: ['./social-media.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function TimelineComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.content);
} }
class TimelineComponent {
    constructor() {
        this.timeline = [
            {
                heading: "Infosys",
                duration: "current",
                content: "Upcoming Full stack develover at Infosys!",
                className: "direction-r"
            },
            {
                heading: "B.Tech",
                duration: "2016 - 2020",
                content: "Successfully completed my B.tech in Computer science from GLA University, Mathura.",
                className: "direction-l"
            },
            {
                heading: "Intermediate",
                duration: "2015-2016",
                content: "Successfully completed my intermediate studies in 2016 from Gyan Deep Sr. Secondary Public School, Shikohabad.\n" +
                    "Major: PCM.",
                className: "direction-r"
            },
            {
                heading: "High School",
                duration: "2013-2014",
                content: "Successfully completed my high school studies in 2014 from Georgions Academy, Shikohabad.",
                className: "direction-l"
            }
        ];
    }
    ngOnInit() {
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "timeline-heading"], [1, "timeline"], [4, "ngFor", "ngForOf"], [1, "flag-wrapper"], [1, "flag"], [1, "time-wrapper"], [1, "time"], [1, "desc"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimelineComponent_li_4_Template, 10, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  font-family: inherit;\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n}\n\n.timeline-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  width: 660px;\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 1em 0;\n  list-style-type: none;\n}\n\n.timeline[_ngcontent-%COMP%]:before {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  content: \" \";\n  display: block;\n  width: 6px;\n  height: 100%;\n  margin-left: -3px;\n  background: #505050;\n  background: linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, #505050 8%, #505050 92%, rgba(80, 80, 80, 0) 100%);\n  z-index: 5;\n}\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1em 0;\n}\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.direction-l[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  float: left;\n  text-align: right;\n}\n\n.direction-r[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  float: right;\n}\n\n.flag-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n\n.flag[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline;\n  background: #f8f8f8;\n  padding: 6px 10px;\n  border-radius: 5px;\n  font-size: 2rem;\n  font-weight: 600;\n  text-align: left;\n}\n\n.direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);\n}\n\n.direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);\n}\n\n.direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before, .direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  right: -40px;\n  content: \" \";\n  display: block;\n  width: 12px;\n  height: 12px;\n  margin-top: -10px;\n  background: #fff;\n  border-radius: 10px;\n  border: 4px solid #aaa5ff;\n  z-index: 10;\n}\n\n.direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before {\n  left: -40px;\n}\n\n.direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-left-color: #f8f8f8;\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-right-color: #f8f8f8;\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.time-wrapper[_ngcontent-%COMP%] {\n  display: inline;\n  line-height: 1em;\n  font-size: 0.66666em;\n  color: #1b5299;\n  vertical-align: middle;\n}\n\n.direction-l[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.direction-r[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.time[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 6px;\n  background: #f8f8f8;\n  font-size: 10px;\n  font-weight: 400;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin: 1em 0.75em 0 0;\n  font-size: 0.77777em;\n  font-style: italic;\n  line-height: 1.5em;\n}\n\n.direction-r[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 1em 0 0 0.75em;\n}\n\n\n\n@media screen and (max-width: 660px) {\n  .timeline[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 4em 0 1em 0;\n  }\n\n  .timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 2em 0;\n  }\n\n  .direction-l[_ngcontent-%COMP%], .direction-r[_ngcontent-%COMP%] {\n    float: none;\n    width: 100%;\n    text-align: center;\n  }\n\n  .flag-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .flag[_ngcontent-%COMP%] {\n    background: white;\n    z-index: 15;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before, .direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before {\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    content: \" \";\n    display: block;\n    width: 12px;\n    height: 12px;\n    margin-left: -9px;\n    background: #fff;\n    border-radius: 10px;\n    border: 4px solid #ff5050;\n    z-index: 10;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after, .direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: -8px;\n    height: 0;\n    width: 0;\n    margin-left: -8px;\n    border: solid transparent;\n    border-bottom-color: white;\n    border-width: 8px;\n    pointer-events: none;\n  }\n\n  .time-wrapper[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    margin: 4px 0 0 0;\n    z-index: 14;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n    float: none;\n  }\n\n  .direction-r[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n    float: none;\n  }\n\n  .desc[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 1em 0 0 0;\n    padding: 1em;\n    background: whitesmoke;\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n    z-index: 15;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%], .direction-r[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 1em 1em 0 1em;\n    padding: 1em;\n    z-index: 15;\n  }\n}\n\n@media screen and (min-width: 400px) {\n  .direction-l[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%], .direction-r[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    margin: 1em 4em 0 4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBb0NBLGlIQUFBO0VBUUEsVUFBQTtBQXBDRjs7QUF1Q0E7RUFDRSxjQUFBO0FBcENGOztBQXVDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXBDRjs7QUF1Q0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXBDRjs7QUF1Q0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF0Q0Y7O0FBeUNBO0VBSUUseUVBQUE7QUF2Q0Y7O0FBMENBO0VBSUUsd0VBQUE7QUF4Q0Y7O0FBMkNBOztFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBeENGOztBQTJDQTtFQUNFLFdBQUE7QUF4Q0Y7O0FBMkNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUF4Q0Y7O0FBMkNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUF4Q0Y7O0FBMkNBO0VBQ0UsZUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsV0FBQTtBQXpDRjs7QUE0Q0E7RUFDRSxZQUFBO0FBekNGOztBQTRDQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXpDRjs7QUE0Q0E7RUFDRSxzQkFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTFDRjs7QUE2Q0E7RUFDRSxzQkFBQTtBQTFDRjs7QUE2Q0EsNkRBQUE7O0FBRUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxvQkFBQTtFQTNDRjs7RUE4Q0E7SUFDRSxjQUFBO0VBM0NGOztFQThDQTs7SUFFRSxXQUFBO0lBQ0EsV0FBQTtJQUVBLGtCQUFBO0VBNUNGOztFQStDQTtJQUNFLGtCQUFBO0VBNUNGOztFQStDQTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQTVDRjs7RUErQ0E7O0lBRUUsa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7RUE1Q0Y7O0VBK0NBOztJQUVFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBNUNGOztFQStDQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQTVDRjs7RUErQ0E7SUFDRSxXQUFBO0VBNUNGOztFQStDQTtJQUNFLFdBQUE7RUE1Q0Y7O0VBK0NBO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUdBLHNDQUFBO0lBRUEsV0FBQTtFQTdDRjs7RUFnREE7O0lBRUUsa0JBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7SUFFQSxXQUFBO0VBOUNGO0FBQ0Y7O0FBaURBO0VBQ0U7O0lBRUUscUJBQUE7RUEvQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XG59XG5cbi50aW1lbGluZS1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi50aW1lbGluZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIGJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoODAsIDgwLCA4MCwgMCkgMCUsXG4gICAgcmdiKDgwLCA4MCwgODApIDglLFxuICAgIHJnYig4MCwgODAsIDgwKSA5MiUsXG4gICAgcmdiYSg4MCwgODAsIDgwLCAwKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgbGluZWFyLFxuICAgIGxlZnQgdG9wLFxuICAgIGxlZnQgYm90dG9tLFxuICAgIGNvbG9yLXN0b3AoMCUsIHJnYmEoMzAsIDg3LCAxNTMsIDEpKSxcbiAgICBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMTI1LCAxODUsIDIzMiwgMSkpXG4gICk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgIHRvcCxcbiAgICByZ2JhKDgwLCA4MCwgODAsIDApIDAlLFxuICAgIHJnYig4MCwgODAsIDgwKSA4JSxcbiAgICByZ2IoODAsIDgwLCA4MCkgOTIlLFxuICAgIHJnYmEoODAsIDgwLCA4MCwgMCkgMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoODAsIDgwLCA4MCwgMCkgMCUsXG4gICAgcmdiKDgwLCA4MCwgODApIDglLFxuICAgIHJnYig4MCwgODAsIDgwKSA5MiUsXG4gICAgcmdiYSg4MCwgODAsIDgwLCAwKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoODAsIDgwLCA4MCwgMCkgMCUsXG4gICAgcmdiKDgwLCA4MCwgODApIDglLFxuICAgIHJnYig4MCwgODAsIDgwKSA5MiUsXG4gICAgcmdiYSg4MCwgODAsIDgwLCAwKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgcmdiYSg4MCwgODAsIDgwLCAwKSAwJSxcbiAgICByZ2IoODAsIDgwLCA4MCkgOCUsXG4gICAgcmdiKDgwLCA4MCwgODApIDkyJSxcbiAgICByZ2JhKDgwLCA4MCwgODAsIDApIDEwMCVcbiAgKTtcblxuICB6LWluZGV4OiA1O1xufVxuXG4udGltZWxpbmUgbGkge1xuICBwYWRkaW5nOiAxZW0gMDtcbn1cblxuLnRpbWVsaW5lIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgY2xlYXI6IGJvdGg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmRpcmVjdGlvbi1sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRpcmVjdGlvbi1yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZsYWctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsYWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDJyZW07XG5cbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRpcmVjdGlvbi1sIC5mbGFnIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogLTFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmRpcmVjdGlvbi1yIC5mbGFnIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmRpcmVjdGlvbi1sIC5mbGFnOmJlZm9yZSxcbi5kaXJlY3Rpb24tciAuZmxhZzpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogLTQwcHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNhYWE1ZmY7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZGlyZWN0aW9uLXIgLmZsYWc6YmVmb3JlIHtcbiAgbGVmdDogLTQwcHg7XG59XG5cbi5kaXJlY3Rpb24tbCAuZmxhZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGJvcmRlci13aWR0aDogOHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmRpcmVjdGlvbi1yIC5mbGFnOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBib3JkZXItd2lkdGg6IDhweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50aW1lLXdyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG5cbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgZm9udC1zaXplOiAwLjY2NjY2ZW07XG4gIGNvbG9yOiAjMWI1Mjk5O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZGlyZWN0aW9uLWwgLnRpbWUtd3JhcHBlciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGlyZWN0aW9uLXIgLnRpbWUtd3JhcHBlciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRpbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZGVzYyB7XG4gIG1hcmdpbjogMWVtIDAuNzVlbSAwIDA7XG5cbiAgZm9udC1zaXplOiAwLjc3Nzc3ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG4uZGlyZWN0aW9uLXIgLmRlc2Mge1xuICBtYXJnaW46IDFlbSAwIDAgMC43NWVtO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09IFRpbWVsaW5lIE1lZGlhIFF1ZXJpZXMgPT09PT09PT09PT09PT09PSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xuICAudGltZWxpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDRlbSAwIDFlbSAwO1xuICB9XG5cbiAgLnRpbWVsaW5lIGxpIHtcbiAgICBwYWRkaW5nOiAyZW0gMDtcbiAgfVxuXG4gIC5kaXJlY3Rpb24tbCxcbiAgLmRpcmVjdGlvbi1yIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mbGFnLXdyYXBwZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mbGFnIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgei1pbmRleDogMTU7XG4gIH1cblxuICAuZGlyZWN0aW9uLWwgLmZsYWc6YmVmb3JlLFxuICAuZGlyZWN0aW9uLXIgLmZsYWc6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMjU1LCA4MCwgODApO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgLmRpcmVjdGlvbi1sIC5mbGFnOmFmdGVyLFxuICAuZGlyZWN0aW9uLXIgLmZsYWc6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IC04cHg7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlci13aWR0aDogOHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLnRpbWUtd3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogNHB4IDAgMCAwO1xuICAgIHotaW5kZXg6IDE0O1xuICB9XG5cbiAgLmRpcmVjdGlvbi1sIC50aW1lLXdyYXBwZXIge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG5cbiAgLmRpcmVjdGlvbi1yIC50aW1lLXdyYXBwZXIge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG5cbiAgLmRlc2Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAgIHotaW5kZXg6IDE1O1xuICB9XG5cbiAgLmRpcmVjdGlvbi1sIC5kZXNjLFxuICAuZGlyZWN0aW9uLXIgLmRlc2Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDFlbSAxZW0gMCAxZW07XG4gICAgcGFkZGluZzogMWVtO1xuXG4gICAgei1pbmRleDogMTU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLmRpcmVjdGlvbi1sIC5kZXNjLFxuICAuZGlyZWN0aW9uLXIgLmRlc2Mge1xuICAgIG1hcmdpbjogMWVtIDRlbSAwIDRlbTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/top-button/top-button.component.ts":
/*!****************************************************!*\
  !*** ./src/app/top-button/top-button.component.ts ***!
  \****************************************************/
/*! exports provided: TopButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopButtonComponent", function() { return TopButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "show-scrollTop": a0 }; };
class TopButtonComponent {
    constructor(document) {
        this.document = document;
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() { }
}
TopButtonComponent.ɵfac = function TopButtonComponent_Factory(t) { return new (t || TopButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
TopButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopButtonComponent, selectors: [["app-top-button"]], hostBindings: function TopButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TopButtonComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 3, consts: [[1, "scroll-to-top", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fas", "fa-hand-point-up"]], template: function TopButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopButtonComponent_Template_button_click_0_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.windowScrolled));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n  border: none;\n  outline: none;\n  background-color: #1b5299;\n  color: white;\n  cursor: pointer;\n  padding: 15px;\n  border-radius: 15px;\n  font-size: 25px;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n\n.scroll-to-top[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n  transition: all ease-in-out 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJ1dHRvbi90b3AtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvdG9wLWJ1dHRvbi90b3AtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC10by10b3Age1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjUyOTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnNob3ctc2Nyb2xsVG9wIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zY3JvbGwtdG8tdG9wOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-button',
                templateUrl: './top-button.component.html',
                styleUrls: ['./top-button.component.scss']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yashjaiswal/Desktop/Angularfolio-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map