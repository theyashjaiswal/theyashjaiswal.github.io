function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/animation/animate.component.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/animate.component.ts ***!
    \************************************************/

  /*! exports provided: AnimateComponent */

  /***/
  function srcAppAnimationAnimateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateComponent", function () {
      return AnimateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _attention_seekers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./attention-seekers */
    "./src/app/animation/attention-seekers/index.ts");
    /* harmony import */


    var _entrances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entrances */
    "./src/app/animation/entrances/index.ts");
    /* harmony import */


    var _exits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./exits */
    "./src/app/animation/exits/index.ts");
    /* harmony import */


    var _animate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./animate.service */
    "./src/app/animation/animate.service.ts"); // Animations


    var _c0 = ["wmAnimate", ""];
    var _c1 = ["*"];

    var AnimateComponent = /*#__PURE__*/function () {
      function AnimateComponent(elm, scroll) {
        _classCallCheck(this, AnimateComponent);

        this.elm = elm;
        this.scroll = scroll;
        this.replay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // Animating properties

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

      _createClass(AnimateComponent, [{
        key: "animationStart",
        value: function animationStart() {
          this.animating = true;
          this.animated = false;
          this.start.emit();
        }
      }, {
        key: "animationDone",
        value: function animationDone() {
          this.animating = false;
          this.animated = true;
          this.done.emit();
        }
        /** When true, keeps the animation idle until the next replay triggers */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Sets the idle state for the given animation
          this.trigger = this.idle; // Triggers the animation based on the input flags

          this.sub = this.replay$.pipe( // Waits the next round to re-trigger
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), // Triggers immediately when not paused
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(!this.paused), // Builds the AOS observable from the common service
          this.scroll.trigger(this.elm, this.threshold), // Prevents false visibility blinks due to the animation transformations
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (trigger) {
            return !_this.animating;
          }), // Stops after the first on trigger when 'once' is set
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function (trigger) {
            return !trigger || !_this.once;
          }, true)).subscribe(function (trigger) {
            // Triggers the animation to play or to idle
            _this.trigger = trigger ? _this.play : _this.idle;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "idle",
        get: function get() {
          return {
            value: "idle-".concat(this.animate)
          };
        }
      }, {
        key: "play",
        get: function get() {
          var params = {}; // Builds the params object, so, leaving to the default values when undefined

          if (!!this.timing) {
            params['timing'] = this.timing;
          }

          if (!!this.delay) {
            params['delay'] = this.delay;
          }

          return {
            value: this.animate,
            params: params
          };
        }
        /** Speeds up or slows down the animation */

      }, {
        key: "speed",
        set: function set(speed) {
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

      }, {
        key: "postpone",
        set: function set(delay) {
          // Coerces the input into a number first
          var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(delay, 0);

          if (value) {
            // Turns a valid number into a ms delay
            this.delay = "".concat(value, "ms");
          } else {
            // Test the string for a valid delay combination
            this.delay = /^\d+(?:ms|s)$/.test(delay) ? delay : '';
          }
        }
        /** Disables the animation */

      }, {
        key: "disableAnimation",
        set: function set(value) {
          this.disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "pauseAnimation",
        set: function set(value) {
          this.paused = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /** When defined, triggers the animation on element scrolling in the viewport by the specified amount. Amount defaults to 50% when not specified */

      }, {
        key: "enableAOS",
        set: function set(value) {
          this.threshold = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value, 0.5);
        }
        /** When true, triggers the animation on element scrolling in the viewport */

      }, {
        key: "aosOnce",
        set: function set(value) {
          this.once = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /** Replays the animation */

      }, {
        key: "replay",
        set: function set(replay) {
          // Re-triggers the animation again on request (skipping the very fist value)
          if (!!this.trigger && Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(replay)) {
            this.trigger = this.idle;
            this.replay$.next(true);
          }
        }
      }]);

      return AnimateComponent;
    }();

    AnimateComponent.ɵfac = function AnimateComponent_Factory(t) {
      return new (t || AnimateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_animate_service__WEBPACK_IMPORTED_MODULE_8__["AnimateService"]));
    };

    AnimateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnimateComponent,
      selectors: [["", "wmAnimate", ""]],
      hostVars: 2,
      hostBindings: function AnimateComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcomponentHostSyntheticListener"]("@animate.start", function AnimateComponent_animation_animate_start_HostBindingHandler() {
            return ctx.animationStart();
          })("@animate.done", function AnimateComponent_animation_animate_done_HostBindingHandler() {
            return ctx.animationDone();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"]("@animate", ctx.trigger)("@.disabled", ctx.disabled);
        }
      },
      inputs: {
        animate: ["wmAnimate", "animate"],
        speed: "speed",
        postpone: ["delay", "postpone"],
        disableAnimation: ["disabled", "disableAnimation"],
        pauseAnimation: ["paused", "pauseAnimation"],
        enableAOS: ["aos", "enableAOS"],
        aosOnce: ["once", "aosOnce"],
        replay: "replay"
      },
      outputs: {
        start: "start",
        done: "done"
      },
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function AnimateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('animate', [].concat(_toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["beat"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["bounce"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["flip"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["headShake"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["heartBeat"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["jello"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["pulse"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["rubberBand"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["shake"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["swing"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["tada"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["wobble"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["bumpIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["bounceIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["flipIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["jackInTheBox"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["landing"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["rollIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["zoomIn"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["fadeOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["hinge"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["rollOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["zoomOut"])))]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[wmAnimate]',
          template: '<ng-content></ng-content>',
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('animate', [].concat(_toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["beat"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["bounce"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["flip"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["headShake"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["heartBeat"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["jello"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["pulse"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["rubberBand"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["shake"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["swing"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["tada"]), _toConsumableArray(_attention_seekers__WEBPACK_IMPORTED_MODULE_5__["wobble"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["bumpIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["bounceIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["flipIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["jackInTheBox"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["landing"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["rollIn"]), _toConsumableArray(_entrances__WEBPACK_IMPORTED_MODULE_6__["zoomIn"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["fadeOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["hinge"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["rollOut"]), _toConsumableArray(_exits__WEBPACK_IMPORTED_MODULE_7__["zoomOut"])))]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _animate_service__WEBPACK_IMPORTED_MODULE_8__["AnimateService"]
        }];
      }, {
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['@animate']
        }],
        animate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['wmAnimate']
        }],
        speed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        postpone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['delay']
        }],
        disableAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['@.disabled']
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        animationStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['@animate.start']
        }],
        done: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['@animate.done']
        }],
        pauseAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['paused']
        }],
        enableAOS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aos']
        }],
        aosOnce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['once']
        }],
        replay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/animation/animate.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/animate.directive.ts ***!
    \************************************************/

  /*! exports provided: AnimateDirective */

  /***/
  function srcAppAnimationAnimateDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateDirective", function () {
      return AnimateDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _animate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./animate.service */
    "./src/app/animation/animate.service.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    var AnimateDirective = /*#__PURE__*/function (_animate_service__WEB) {
      _inherits(AnimateDirective, _animate_service__WEB);

      var _super = _createSuper(AnimateDirective);

      function AnimateDirective(elref, viewPort, scroll, zone) {
        var _this2;

        _classCallCheck(this, AnimateDirective);

        _this2 = _super.call(this, scroll, viewPort, zone);
        _this2.elref = elref;
        _this2.viewPort = viewPort;
        _this2.element = false;
        return _this2;
      }
      /** When true instructs the directive to use the element's bounding rect as the animation view */


      _createClass(AnimateDirective, [{
        key: "useElement",
        set: function set(value) {
          this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        } // Overrides the viewport with the element's client rect on request

      }, {
        key: "viewRect",
        get: function get() {
          // Selects between the viewport and the element
          var rt = this.element ? this.elref.nativeElement.getBoundingClientRect() : this.viewPort.getViewportRect(); // Applies optional offsets

          var top = rt.top + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.top, 0);
          var left = rt.left + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.left, 0);
          var bottom = rt.bottom + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.bottom, 0);
          var right = rt.right + Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.right, 0); // Returns the resulting rect

          return {
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            height: bottom - top,
            width: right - left
          };
        }
      }]);

      return AnimateDirective;
    }(_animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"]);

    AnimateDirective.ɵfac = function AnimateDirective_Factory(t) {
      return new (t || AnimateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    AnimateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AnimateDirective,
      selectors: [["", "wmAnimateView", ""]],
      inputs: {
        useElement: "useElement",
        top: "top",
        left: "left",
        bottom: "bottom",
        right: "right"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provides the AnimateDirective as the service, so, for the child component to trigger within a modified viewport
      {
        provide: _animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return AnimateDirective;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[wmAnimateView]',
          providers: [// Provides the AnimateDirective as the service, so, for the child component to trigger within a modified viewport
          {
            provide: _animate_service__WEBPACK_IMPORTED_MODULE_2__["AnimateService"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return AnimateDirective;
            })
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        useElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        top: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        left: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        right: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/animation/animate.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/animation/animate.module.ts ***!
    \*********************************************/

  /*! exports provided: AnimateModule */

  /***/
  function srcAppAnimationAnimateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateModule", function () {
      return AnimateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _animate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _animate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./animate.directive */
    "./src/app/animation/animate.directive.ts");

    var AnimateModule = function AnimateModule() {
      _classCallCheck(this, AnimateModule);
    };

    AnimateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AnimateModule
    });
    AnimateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AnimateModule_Factory(t) {
        return new (t || AnimateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnimateModule, {
        declarations: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]],
        exports: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]],
          declarations: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]],
          exports: [_animate_component__WEBPACK_IMPORTED_MODULE_3__["AnimateComponent"], _animate_directive__WEBPACK_IMPORTED_MODULE_4__["AnimateDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/animation/animate.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/animation/animate.service.ts ***!
    \**********************************************/

  /*! exports provided: runInZone, AnimateService */

  /***/
  function srcAppAnimationAnimateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "runInZone", function () {
      return runInZone;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimateService", function () {
      return AnimateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /** Returns an observable mirroring the source while running within the given zone */


    function runInZone(zone) {
      return function (source) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          return source.subscribe(function (value) {
            return zone.run(function () {
              return observer.next(value);
            });
          }, function (e) {
            return zone.run(function () {
              return observer.error(e);
            });
          }, function () {
            return zone.run(function () {
              return observer.complete();
            });
          });
        });
      };
    }

    var AnimateService = /*#__PURE__*/function () {
      function AnimateService(scroll, viewPort, zone) {
        var _this3 = this;

        _classCallCheck(this, AnimateService);

        this.scroll = scroll;
        this.viewPort = viewPort;
        this.zone = zone; // Tracks for viewport changes giving it 100ms time to accurately update for orientation changes

        this.view$ = viewPort.change(100).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
          return _this3.viewRect;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(20), // Makes all the component to share the same viewport values
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
      } // By default, use the viewport rectangle


      _createClass(AnimateService, [{
        key: "trigger",
        // Triggers the animation
        value: function trigger(elm, threshold) {
          var _this4 = this;

          // Waits until the zone is stable once, aka the render is complete so the element to measure is there
          return function (source) {
            return _this4.zone.onStable.pipe( // Waits just once
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), // Triggers the play and replay requests
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return source;
            }), // Triggers the while scrolling
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (trigger) {
              return threshold > 0 ? _this4.aos(elm, threshold) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(trigger);
            }));
          };
        } // Triggers the animation on scroll

      }, {
        key: "aos",
        value: function aos(elm, threshold) {
          var _this5 = this;

          // A variation based on IntersectionObserver can be conditionally implemented here.
          // Returns an AOS observable
          return this.scroll.ancestorScrolled(elm, 0).pipe( // Makes sure triggering the start no matter there's no scroll event hits yet
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0), // Maps the scrolling to the element visibility value
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this5.visibility(elm);
          }), // Applies an hysteresys, so, to trigger the animation on based on the treshold while off on full invisibility
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (result, visiblility) {
            return visiblility >= threshold || result && visiblility > 0;
          }, false), // Distincts the resulting triggers
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // Runs within the angular zone to trigger change detection back on
          runInZone(this.zone));
        } // Computes the element's visibility ratio against the viewport

      }, {
        key: "visibility",
        value: function visibility(elm) {
          // Resolves from the latest viewport
          return this.view$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (view) {
            // Gets the element's bounding rect
            var rect = elm && elm.nativeElement && elm.nativeElement.getBoundingClientRect();

            if (!rect) {
              return 0;
            } // Return 1.0 when the element is fully within the viewport


            if (rect.left > view.left - 1 && rect.top > view.top - 1 && rect.right < view.right + 1 && rect.bottom < view.bottom + 1) {
              return 1;
            } // Computes the intersection area otherwise


            var a = Math.round(rect.width * rect.height);
            var b = Math.max(0, Math.min(rect.right, view.right) - Math.max(rect.left, view.left));
            var c = Math.max(0, Math.min(rect.bottom, view.bottom) - Math.max(rect.top, view.top)); // Returns the amount of visible area

            return Math.round(b * c / a * 10) / 10;
          }));
        }
      }, {
        key: "viewRect",
        get: function get() {
          return this.viewPort.getViewportRect();
        }
      }]);

      return AnimateService;
    }();

    AnimateService.ɵfac = function AnimateService_Factory(t) {
      return new (t || AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    AnimateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnimateService,
      factory: AnimateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/animation/attention-seekers/beat.ts":
  /*!*****************************************************!*\
    !*** ./src/app/animation/attention-seekers/beat.ts ***!
    \*****************************************************/

  /*! exports provided: beat */

  /***/
  function srcAppAnimationAttentionSeekersBeatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "beat", function () {
      return beat;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var beat = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => beat', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.8)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.5)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)'
    })]))], {
      params: {
        timing: '500ms',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/bounce.ts":
  /*!*******************************************************!*\
    !*** ./src/app/animation/attention-seekers/bounce.ts ***!
    \*******************************************************/

  /*! exports provided: bounce */

  /***/
  function srcAppAnimationAttentionSeekersBounceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounce", function () {
      return bounce;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var bounce = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounce', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transformOrigin: 'center bottom'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, -30px, 0)',
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, -30px, 0)',
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06',
      offset: 0.43
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0.53
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, -15px, 0)',
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, -4px, 0)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/flip.ts":
  /*!*****************************************************!*\
    !*** ./src/app/animation/attention-seekers/flip.ts ***!
    \*****************************************************/

  /*! exports provided: flip */

  /***/
  function srcAppAnimationAttentionSeekersFlipTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flip", function () {
      return flip;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var flip = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => flip', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      backfaceVisibility: 'visible'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
      animationTimingFunction: 'ease-out',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: ' perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
      animationTimingFunction: 'ease-out',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
      animationTimingFunction: 'ease-in',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
      animationTimingFunction: 'ease-in',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
      animationTimingFunction: 'ease-in',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/head-shake.ts":
  /*!***********************************************************!*\
    !*** ./src/app/animation/attention-seekers/head-shake.ts ***!
    \***********************************************************/

  /*! exports provided: headShake */

  /***/
  function srcAppAnimationAttentionSeekersHeadShakeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "headShake", function () {
      return headShake;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var headShake = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => headShake', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-6px) rotateY(-9deg)',
      offset: 0.065
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(5px) rotateY(7deg)',
      offset: 0.185
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-3px) rotateY(-5deg)',
      offset: 0.315
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(2px) rotateY(3deg)',
      offset: 0.435
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 0.5
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/heart-beat.ts":
  /*!***********************************************************!*\
    !*** ./src/app/animation/attention-seekers/heart-beat.ts ***!
    \***********************************************************/

  /*! exports provided: heartBeat */

  /***/
  function srcAppAnimationAttentionSeekersHeartBeatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "heartBeat", function () {
      return heartBeat;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var heartBeat = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => heartBeat', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.3)',
      offset: 0.14
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      offset: 0.28
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.3)',
      offset: 0.42
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      offset: 0.70
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/index.ts ***!
    \******************************************************/

  /*! exports provided: beat, bounce, headShake, heartBeat, pulse, rubberBand, shake, swing, wobble, jello, tada, flip */

  /***/
  function srcAppAnimationAttentionSeekersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _beat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./beat */
    "./src/app/animation/attention-seekers/beat.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "beat", function () {
      return _beat__WEBPACK_IMPORTED_MODULE_0__["beat"];
    });
    /* harmony import */


    var _bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bounce */
    "./src/app/animation/attention-seekers/bounce.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bounce", function () {
      return _bounce__WEBPACK_IMPORTED_MODULE_1__["bounce"];
    });
    /* harmony import */


    var _head_shake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./head-shake */
    "./src/app/animation/attention-seekers/head-shake.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "headShake", function () {
      return _head_shake__WEBPACK_IMPORTED_MODULE_2__["headShake"];
    });
    /* harmony import */


    var _heart_beat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./heart-beat */
    "./src/app/animation/attention-seekers/heart-beat.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "heartBeat", function () {
      return _heart_beat__WEBPACK_IMPORTED_MODULE_3__["heartBeat"];
    });
    /* harmony import */


    var _pulse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pulse */
    "./src/app/animation/attention-seekers/pulse.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "pulse", function () {
      return _pulse__WEBPACK_IMPORTED_MODULE_4__["pulse"];
    });
    /* harmony import */


    var _rubber_band__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rubber-band */
    "./src/app/animation/attention-seekers/rubber-band.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "rubberBand", function () {
      return _rubber_band__WEBPACK_IMPORTED_MODULE_5__["rubberBand"];
    });
    /* harmony import */


    var _shake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shake */
    "./src/app/animation/attention-seekers/shake.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "shake", function () {
      return _shake__WEBPACK_IMPORTED_MODULE_6__["shake"];
    });
    /* harmony import */


    var _swing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./swing */
    "./src/app/animation/attention-seekers/swing.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "swing", function () {
      return _swing__WEBPACK_IMPORTED_MODULE_7__["swing"];
    });
    /* harmony import */


    var _wobble__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./wobble */
    "./src/app/animation/attention-seekers/wobble.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "wobble", function () {
      return _wobble__WEBPACK_IMPORTED_MODULE_8__["wobble"];
    });
    /* harmony import */


    var _jello__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./jello */
    "./src/app/animation/attention-seekers/jello.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "jello", function () {
      return _jello__WEBPACK_IMPORTED_MODULE_9__["jello"];
    });
    /* harmony import */


    var _tada__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tada */
    "./src/app/animation/attention-seekers/tada.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "tada", function () {
      return _tada__WEBPACK_IMPORTED_MODULE_10__["tada"];
    });
    /* harmony import */


    var _flip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./flip */
    "./src/app/animation/attention-seekers/flip.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "flip", function () {
      return _flip__WEBPACK_IMPORTED_MODULE_11__["flip"];
    });
    /***/

  },

  /***/
  "./src/app/animation/attention-seekers/jello.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/jello.ts ***!
    \******************************************************/

  /*! exports provided: jello */

  /***/
  function srcAppAnimationAttentionSeekersJelloTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jello", function () {
      return jello;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var jello = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => jello', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transformOrigin: 'center'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(0) skewY(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(0) skewY(0)',
      offset: 0.111
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(-12.5) skewY(-12.5)',
      offset: 0.222
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(6.25deg) skewY(6.25deg)',
      offset: 0.333
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(-3.125deg) skewY(-3.125deg)',
      offset: 0.444
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(1.5625deg) skewY(1.5625deg)',
      offset: 0.555
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
      offset: 0.666
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(0.390625deg) skewY(0.390625deg)',
      offset: 0.777
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
      offset: 0.888
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'skewX(0) skewY(0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/pulse.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/pulse.ts ***!
    \******************************************************/

  /*! exports provided: pulse */

  /***/
  function srcAppAnimationAttentionSeekersPulseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pulse", function () {
      return pulse;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var pulse = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => pulse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.05)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)'
    })]))], {
      params: {
        timing: '500ms',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/rubber-band.ts":
  /*!************************************************************!*\
    !*** ./src/app/animation/attention-seekers/rubber-band.ts ***!
    \************************************************************/

  /*! exports provided: rubberBand */

  /***/
  function srcAppAnimationAttentionSeekersRubberBandTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rubberBand", function () {
      return rubberBand;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var rubberBand = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rubberBand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1, 1, 1)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.25, 0.75, 1)',
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(0.75, 1.25, 1)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.15, 0.85, 1)',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(0.95, 1.05, 1)',
      offset: 0.65
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.05, 0.95, 1)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1, 1, 1)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/shake.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/shake.ts ***!
    \******************************************************/

  /*! exports provided: shake */

  /***/
  function srcAppAnimationAttentionSeekersShakeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shake", function () {
      return shake;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var shake = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => shake', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/swing.ts":
  /*!******************************************************!*\
    !*** ./src/app/animation/attention-seekers/swing.ts ***!
    \******************************************************/

  /*! exports provided: swing */

  /***/
  function srcAppAnimationAttentionSeekersSwingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "swing", function () {
      return swing;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var swing = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => swing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transformOrigin: 'top center'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 0deg)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 15deg)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, -10deg)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 5deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, -5deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 0deg)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/tada.ts":
  /*!*****************************************************!*\
    !*** ./src/app/animation/attention-seekers/tada.ts ***!
    \*****************************************************/

  /*! exports provided: tada */

  /***/
  function srcAppAnimationAttentionSeekersTadaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tada", function () {
      return tada;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var tada = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => tada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1, 1, 1)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      offset: 0.1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale3d(1, 1, 1)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/attention-seekers/wobble.ts":
  /*!*******************************************************!*\
    !*** ./src/app/animation/attention-seekers/wobble.ts ***!
    \*******************************************************/

  /*! exports provided: wobble */

  /***/
  function srcAppAnimationAttentionSeekersWobbleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "wobble", function () {
      return wobble;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var wobble = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => wobble', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-25%) rotate3d(0, 0, 1, -5deg)',
      offset: 0.15
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(20%) rotate3d(0, 0, 1, 3deg)',
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-15%) rotate3d(0, 0, 1, -3deg)',
      offset: 0.45
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10%) rotate3d(0, 0, 1, 2deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-5%) rotate3d(0, 0, 1, -1deg)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/bounce-in.ts":
  /*!**************************************************!*\
    !*** ./src/app/animation/entrances/bounce-in.ts ***!
    \**************************************************/

  /*! exports provided: bounceIn */

  /***/
  function srcAppAnimationEntrancesBounceInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounceIn", function () {
      return bounceIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var bounceIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bounceInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.1)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.9)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1.03)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.97)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1)',
      offset: 1
    })])), {
      params: {
        timing: '750ms',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-100%)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(25px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-10px)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(5px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(-100%)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(25px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-10px)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(5px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(100%)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(-25px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(10px)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-5px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(100%)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(-25px)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(10px)',
      offset: 0.75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-5px)',
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/bump-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/bump-in.ts ***!
    \************************************************/

  /*! exports provided: bumpIn */

  /***/
  function srcAppAnimationEntrancesBumpInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bumpIn", function () {
      return bumpIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var bumpIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-bumpIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bumpIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.5)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      opacity: 1
    }))], {
      params: {
        timing: '500ms',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/fade-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/fade-in.ts ***!
    \************************************************/

  /*! exports provided: fadeIn */

  /***/
  function srcAppAnimationEntrancesFadeInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
      return fadeIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var fadeIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-fadeInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(-20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeInDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/flip-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/flip-in.ts ***!
    \************************************************/

  /*! exports provided: flipIn */

  /***/
  function srcAppAnimationEntrancesFlipInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flipIn", function () {
      return flipIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var flipIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-flipInX', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-flipInY', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => flipInX', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      backfaceVisibility: 'visible'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
      opacity: 0,
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: ' perspective(400px) rotate3d(1, 0, 0, -20deg)',
      opacity: 1,
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => flipInY', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      backfaceVisibility: 'visible'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
      opacity: 0,
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: ' perspective(400px) rotate3d(0, 1, 0, -20deg)',
      opacity: 1,
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'perspective(400px) rotate3d(0, 1, 0, 0)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/animation/entrances/index.ts ***!
    \**********************************************/

  /*! exports provided: bumpIn, bounceIn, fadeIn, flipIn, jackInTheBox, landing, rollIn, zoomIn */

  /***/
  function srcAppAnimationEntrancesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _bump_in__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bump-in */
    "./src/app/animation/entrances/bump-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bumpIn", function () {
      return _bump_in__WEBPACK_IMPORTED_MODULE_0__["bumpIn"];
    });
    /* harmony import */


    var _bounce_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bounce-in */
    "./src/app/animation/entrances/bounce-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bounceIn", function () {
      return _bounce_in__WEBPACK_IMPORTED_MODULE_1__["bounceIn"];
    });
    /* harmony import */


    var _fade_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fade-in */
    "./src/app/animation/entrances/fade-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
      return _fade_in__WEBPACK_IMPORTED_MODULE_2__["fadeIn"];
    });
    /* harmony import */


    var _flip_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./flip-in */
    "./src/app/animation/entrances/flip-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "flipIn", function () {
      return _flip_in__WEBPACK_IMPORTED_MODULE_3__["flipIn"];
    });
    /* harmony import */


    var _jack_in_the_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./jack-in-the-box */
    "./src/app/animation/entrances/jack-in-the-box.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "jackInTheBox", function () {
      return _jack_in_the_box__WEBPACK_IMPORTED_MODULE_4__["jackInTheBox"];
    });
    /* harmony import */


    var _landing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./landing */
    "./src/app/animation/entrances/landing.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "landing", function () {
      return _landing__WEBPACK_IMPORTED_MODULE_5__["landing"];
    });
    /* harmony import */


    var _roll_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./roll-in */
    "./src/app/animation/entrances/roll-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "rollIn", function () {
      return _roll_in__WEBPACK_IMPORTED_MODULE_6__["rollIn"];
    });
    /* harmony import */


    var _zoom_in__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./zoom-in */
    "./src/app/animation/entrances/zoom-in.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "zoomIn", function () {
      return _zoom_in__WEBPACK_IMPORTED_MODULE_7__["zoomIn"];
    });
    /***/

  },

  /***/
  "./src/app/animation/entrances/jack-in-the-box.ts":
  /*!********************************************************!*\
    !*** ./src/app/animation/entrances/jack-in-the-box.ts ***!
    \********************************************************/

  /*! exports provided: jackInTheBox */

  /***/
  function srcAppAnimationEntrancesJackInTheBoxTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jackInTheBox", function () {
      return jackInTheBox;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var jackInTheBox = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-jackInTheBox', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => jackInTheBox', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.1) rotate(30deg)',
      transformOrigin: 'center bottom',
      opacity: 0,
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate(-10deg)',
      opacity: 0.7,
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate(3deg)',
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1)',
      opacity: 1,
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
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

    /***/
  },

  /***/
  "./src/app/animation/entrances/landing.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/landing.ts ***!
    \************************************************/

  /*! exports provided: landing */

  /***/
  function srcAppAnimationEntrancesLandingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "landing", function () {
      return landing;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var landing = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-landing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => landing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.2)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))], {
      params: {
        timing: '2s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/roll-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/roll-in.ts ***!
    \************************************************/

  /*! exports provided: rollIn */

  /***/
  function srcAppAnimationEntrancesRollInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rollIn", function () {
      return rollIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var rollIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-rollIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rollIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%) rotate3d(0, 0, 1, -120deg)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      opacity: 1
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/entrances/zoom-in.ts":
  /*!************************************************!*\
    !*** ./src/app/animation/entrances/zoom-in.ts ***!
    \************************************************/

  /*! exports provided: zoomIn */

  /***/
  function srcAppAnimationEntrancesZoomInTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zoomIn", function () {
      return zoomIn;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var zoomIn = [// Idle states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('idle-zoomInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.65)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1)'
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.1) translateY(-1000px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.475) translateY(60px)',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.1) translateX(-1000px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.475) translateX(60px)',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.1) translateY(1000px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.475) translateY(-60px)',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomInRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.1) translateX(1000px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.475) translateX(-60px)',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/bounce-out.ts":
  /*!***********************************************!*\
    !*** ./src/app/animation/exits/bounce-out.ts ***!
    \***********************************************/

  /*! exports provided: bounceOut */

  /***/
  function srcAppAnimationExitsBounceOutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounceOut", function () {
      return bounceOut;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var bounceOut = [// Ending states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), // Transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(0.9)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.1)',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'scale(1.1)',
      offset: 0.55
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)',
      offset: 1
    })]))], {
      params: {
        timing: '750ms',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(10px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-20px)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-20px)',
      offset: 0.45
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(2000px)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(-10px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(20px)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(20px)',
      offset: 0.45
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-2000px)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-20px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(2000px)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceOutLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(20px)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(-2000px)',
      offset: 1
    })]))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/fade-out.ts":
  /*!*********************************************!*\
    !*** ./src/app/animation/exits/fade-out.ts ***!
    \*********************************************/

  /*! exports provided: fadeOut */

  /***/
  function srcAppAnimationExitsFadeOutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeOut", function () {
      return fadeOut;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var fadeOut = [// Ending states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), // Transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(20px)'
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateX(-20px)'
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(20px)'
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOutUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'translateY(-20px)'
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/hinge.ts":
  /*!******************************************!*\
    !*** ./src/app/animation/exits/hinge.ts ***!
    \******************************************/

  /*! exports provided: hinge */

  /***/
  function srcAppAnimationExitsHingeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hinge", function () {
      return hinge;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var hinge = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hinge', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => hinge', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transformOrigin: 'top left'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 0',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 80deg)',
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 60deg)',
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 80deg)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'rotate3d(0, 0, 1, 60deg)',
      offset: 0.8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(700px)',
      offset: 1
    })]))], {
      params: {
        timing: '2s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/index.ts":
  /*!******************************************!*\
    !*** ./src/app/animation/exits/index.ts ***!
    \******************************************/

  /*! exports provided: bounceOut, fadeOut, hinge, rollOut, zoomOut */

  /***/
  function srcAppAnimationExitsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _bounce_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bounce-out */
    "./src/app/animation/exits/bounce-out.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bounceOut", function () {
      return _bounce_out__WEBPACK_IMPORTED_MODULE_0__["bounceOut"];
    });
    /* harmony import */


    var _fade_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fade-out */
    "./src/app/animation/exits/fade-out.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fadeOut", function () {
      return _fade_out__WEBPACK_IMPORTED_MODULE_1__["fadeOut"];
    });
    /* harmony import */


    var _hinge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hinge */
    "./src/app/animation/exits/hinge.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "hinge", function () {
      return _hinge__WEBPACK_IMPORTED_MODULE_2__["hinge"];
    });
    /* harmony import */


    var _roll_out__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./roll-out */
    "./src/app/animation/exits/roll-out.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "rollOut", function () {
      return _roll_out__WEBPACK_IMPORTED_MODULE_3__["rollOut"];
    });
    /* harmony import */


    var _zoom_out__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./zoom-out */
    "./src/app/animation/exits/zoom-out.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "zoomOut", function () {
      return _zoom_out__WEBPACK_IMPORTED_MODULE_4__["zoomOut"];
    });
    /***/

  },

  /***/
  "./src/app/animation/exits/roll-out.ts":
  /*!*********************************************!*\
    !*** ./src/app/animation/exits/roll-out.ts ***!
    \*********************************************/

  /*! exports provided: rollOut */

  /***/
  function srcAppAnimationExitsRollOutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rollOut", function () {
      return rollOut;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var rollOut = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rollOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => rollOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%) rotate3d(0, 0, 1, 120deg)',
      opacity: 0
    }))], {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/animation/exits/zoom-out.ts":
  /*!*********************************************!*\
    !*** ./src/app/animation/exits/zoom-out.ts ***!
    \*********************************************/

  /*! exports provided: zoomOut */

  /***/
  function srcAppAnimationExitsZoomOutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zoomOut", function () {
      return zoomOut;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var zoomOut = [// Ending states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zoomOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.3)'
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.475) translateY(-60px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.1) translateY(2000px)',
      transformOrigin: 'center bottom',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.475) translateX(-42px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.1) translateX(2000px)',
      transformOrigin: 'center bottom',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.475) translateY(60px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.1) translateY(-2000px)',
      transformOrigin: 'center bottom',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateY(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => zoomOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{timing}} {{delay}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.475) translateX(42px)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(0.1) translateX(-2000px)',
      transformOrigin: 'center bottom',
      animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1,
      transform: 'scale(1) translateX(0)',
      offset: 1
    })])), {
      params: {
        timing: '1s',
        delay: ''
      }
    })];
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./greeting/greeting.component */
    "./src/app/greeting/greeting.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/education/education.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./top-button/top-button.component */
    "./src/app/top-button/top-button.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.0.8/css/all.css", "integrity", "sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S", "crossorigin", "anonymous"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_2__["GreetingComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_8__["TopButtonComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]],
      styles: ["app-projects[_ngcontent-%COMP%] {\n  -webkit-animation: fade_up 2s;\n          animation: fade_up 2s;\n}\n\n\n\n@-webkit-keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQUNGOztBQUVBLGVBQUE7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBQ0Y7RUFFQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBQUY7QUFDRjs7QUFYQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDRCQUFBO0lBQ0Esb0hBQUE7RUFDRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFBRjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQUZGO0VBS0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUhGO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBRkY7RUFLQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFKRjtFQU9BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFMRjtBQUNGOztBQU5BO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQUpGO0VBT0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG9IQUFBO0VBTkY7RUFTQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBUEY7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDZCQUFBO0lBQ0Esb0hBQUE7RUFORjtFQVNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFQRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXByb2plY3RzIHtcbiAgYW5pbWF0aW9uOiBmYWRlX3VwIDJzO1xufVxuXG4vKiBBbmltYXRpb25zICovXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZV91cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9yaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9sZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./greeting/greeting.component */
    "./src/app/greeting/greeting.component.ts");
    /* harmony import */


    var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./button/button.component */
    "./src/app/button/button.component.ts");
    /* harmony import */


    var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./social-media/social-media.component */
    "./src/app/social-media/social-media.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./skills/software-skill/software-skill.component */
    "./src/app/skills/software-skill/software-skill.component.ts");
    /* harmony import */


    var _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./skill-progress/skill-progress.component */
    "./src/app/skill-progress/skill-progress.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./top-button/top-button.component */
    "./src/app/top-button/top-button.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/timeline/timeline.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/experience/experience.component.ts");
    /* harmony import */


    var _experience_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./experience/experience-card/experience-card.component */
    "./src/app/experience/experience-card/experience-card.component.ts");
    /* harmony import */


    var _projects_github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./projects/github-repo-card/github-repo-card.component */
    "./src/app/projects/github-repo-card/github-repo-card.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/education/education.component.ts");
    /* harmony import */


    var _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./projects/graphql.module */
    "./src/app/projects/graphql.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./github-calendar/github-calendar.component */
    "./src/app/github-calendar/github-calendar.component.ts");
    /* harmony import */


    var _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./animation/animate.module */
    "./src/app/animation/animate.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: Window,
        useValue: window
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__["AnimateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__["GreetingComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__["SocialMediaComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"], _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_10__["SoftwareSkillComponent"], _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_11__["SkillProgressComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_13__["TopButtonComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__["TimelineComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"], _experience_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceCardComponent"], _projects_github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_18__["GithubRepoCardComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_20__["EducationComponent"], _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_23__["GithubCalendarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__["AnimateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_5__["GreetingComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__["SocialMediaComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"], _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_10__["SoftwareSkillComponent"], _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_11__["SkillProgressComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _top_button_top_button_component__WEBPACK_IMPORTED_MODULE_13__["TopButtonComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__["TimelineComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"], _experience_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceCardComponent"], _projects_github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_18__["GithubRepoCardComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_20__["EducationComponent"], _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_23__["GithubCalendarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _projects_graphql_module__WEBPACK_IMPORTED_MODULE_21__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _animation_animate_module__WEBPACK_IMPORTED_MODULE_24__["AnimateModule"]],
          providers: [{
            provide: Window,
            useValue: window
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/button.service.ts":
  /*!***********************************!*\
    !*** ./src/app/button.service.ts ***!
    \***********************************/

  /*! exports provided: ButtonService */

  /***/
  function srcAppButtonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonService", function () {
      return ButtonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonService = /*#__PURE__*/function () {
      function ButtonService() {
        _classCallCheck(this, ButtonService);
      }

      _createClass(ButtonService, [{
        key: "getClassName",
        value: function getClassName() {
          return this.className;
        }
      }, {
        key: "getHref",
        value: function getHref() {
          return this.href;
        }
      }, {
        key: "getText",
        value: function getText() {
          return this.text;
        }
      }, {
        key: "setClassName",
        value: function setClassName(className) {
          this.className = className;
        }
      }, {
        key: "setHref",
        value: function setHref(href) {
          this.href = href;
        }
      }, {
        key: "setText",
        value: function setText(text) {
          this.text = text;
        }
      }]);

      return ButtonService;
    }();

    ButtonService.ɵfac = function ButtonService_Factory(t) {
      return new (t || ButtonService)();
    };

    ButtonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ButtonService,
      factory: ButtonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/button/button.component.ts":
  /*!********************************************!*\
    !*** ./src/app/button/button.component.ts ***!
    \********************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _button_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../button.service */
    "./src/app/button.service.ts");

    var ButtonComponent = /*#__PURE__*/function () {
      function ButtonComponent(buttonService) {
        _classCallCheck(this, ButtonComponent);

        this.buttonService = buttonService;
      }

      _createClass(ButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.className = this.buttonService.getClassName();
          this.text = this.buttonService.getText();
          this.href = this.buttonService.getHref();
        }
      }]);

      return ButtonComponent;
    }();

    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
      return new (t || ButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_button_service__WEBPACK_IMPORTED_MODULE_1__["ButtonService"]));
    };

    ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonComponent,
      selectors: [["app-button"]],
      decls: 2,
      vars: 0,
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "button works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main-button[_ngcontent-%COMP%] {\n  background-color: #1b5299;\n  border: solid 1px #1b5299;\n  color: white;\n  font-weight: 700;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 13px 22px;\n  margin-right: 50px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.main-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: black;\n  transition: all 0.3s ease 0s;\n  transform: translateY(-3px);\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n\n\n@media (max-width: 768px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 12px 18px;\n    margin-right: 0px;\n  }\n}\n\n@media (max-width: 320px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBLGdCQUFBOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLGVBQUE7RUFJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjUyOTk7XG4gIGJvcmRlcjogc29saWQgMXB4ICMxYjUyOTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiAxM3B4IDIycHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbn1cbi5tYWluLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xufVxuLnByb2plY3QtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4vKiBNZWRpYSBRdWVyeSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEycHggMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5tYWluLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-button',
          templateUrl: './button.component.html',
          styleUrls: ['./button.component.scss']
        }]
      }], function () {
        return [{
          type: _button_service__WEBPACK_IMPORTED_MODULE_1__["ButtonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../social-media/social-media.component */
    "./src/app/social-media/social-media.component.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.contactInfo = {
          title: 'Contact Me ☎️',
          subtitle: 'Discuss a project or just want to say hi?',
          number: '+1-782-8822-600',
          email_address: 'yashjaiswalofficial@gmail.com'
        };
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 17,
      vars: 6,
      consts: [["id", "contact", "wmAnimate", "jackInTheBox", "aos", "", "speed", "normal", 1, "main", "contact-margin-top"], [1, "contact-div-main"], [1, "contact-header"], [1, "heading", "contact-title"], [1, "subTitle", "contact-subtitle"], [1, "contact-text-div"], [1, "contact-detail", 3, "href"], [1, "contact-detail-email", 3, "href"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]],
      styles: [".contact-div-main[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 4rem;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.contact-div-main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.contact-title[_ngcontent-%COMP%] {\n  font-size: 65px;\n  font-weight: 400;\n  margin-bottom: 2rem;\n}\n\n.contact-detail[_ngcontent-%COMP%], .contact-detail-email[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 40px;\n  font-weight: 400;\n  color: #495057;\n  text-decoration: none;\n}\n\n.contact-detail[_ngcontent-%COMP%]:hover, .contact-detail-email[_ngcontent-%COMP%]:hover {\n  color: black;\n  text-shadow: 2px 1px 2px #b5b5b5;\n  transition: all 0.3s;\n}\n\n.contact-subtitle[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.contact-text-div[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.contact-margin-top[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n\n.contact-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  margin-left: 1.5rem;\n  margin-top: -4rem;\n}\n\n\n\n@media (max-width: 1380px), (max-width: 768px) {\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 56px;\n    font-weight: 400;\n    text-align: center;\n  }\n\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n    text-align: center;\n  }\n\n  .contact-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n    text-align: center;\n  }\n\n  .contact-text-div[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 1.5rem;\n  }\n\n  .contact-detail[_ngcontent-%COMP%], .contact-detail-email[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .contact-image-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUEsZ0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFDRjs7RUFFQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7O0lBRUUsZUFBQTtFQUNGOztFQUVBO0lBQ0UsYUFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1kaXYtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cblxuLnN1YlRpdGxlIHtcbiAgY29sb3I6IHJnYigxMzQsIDE0MiwgMTUwKTtcbn1cblxuLmNvbnRhY3QtZGl2LW1haW4gPiAqIHtcbiAgZmxleDogMTtcbn1cblxuLmNvbnRhY3QtdGl0bGUge1xuICBmb250LXNpemU6IDY1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb250YWN0LWRldGFpbCxcbi5jb250YWN0LWRldGFpbC1lbWFpbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhY3QtZGV0YWlsOmhvdmVyLFxuLmNvbnRhY3QtZGV0YWlsLWVtYWlsOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LXNoYWRvdzogMnB4IDFweCAycHggI2I1YjViNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5jb250YWN0LXN1YnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRhY3QtdGV4dC1kaXYge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5jb250YWN0LW1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG4uY29udGFjdC1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAtNHJlbTtcbn1cblxuLyogTWVkaWEgUXVlcnkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpLCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiA1NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGFjdC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhY3QtdGV4dC1kaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cblxuICAuY29udGFjdC1kZXRhaWwsXG4gIC5jb250YWN0LWRldGFpbC1lbWFpbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmNvbnRhY3QtaW1hZ2UtZGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/education/education.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/education/education.component.ts ***!
    \**************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");

    function EducationComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var i_r1 = ctx.$implicit;

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
      }
    }

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);

        this.timeline = [// {
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
          className2: 'prt_about_learnbox_left'
        }, {
          heading: 'B.Tech in Computer Science & Engineering',
          duration: '2018',
          subtitle: 'Karunya Institute of Technology & Sciences, Coimbatore, India',
          content: '',
          className1: 'mar-left',
          className2: 'prt_about_learnbox_right'
        }];
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)();
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["app-education"]],
      decls: 8,
      vars: 1,
      consts: [["id", "education", 1, "prt_about_edulearn_wrapper"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "prt_heading_wrapper"], [1, "prt_heading"], [1, "timeline-heading"], [1, "prt_about_learnsection"], ["wmAnimate", "landing", "aos", "", "speed", "normal", 4, "ngFor", "ngForOf"], ["wmAnimate", "landing", "aos", "", "speed", "normal"], [1, "prt_about_learnbox_year"], [1, "prt_about_learnbox_info"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]],
      styles: [".prt_about_edulearn_wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin-top: 7rem;\n  margin-bottom: 7rem;\n}\n\n.timeline-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n}\n\n.prt_heading_wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.prt_about_learnsection[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.prt_heading[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_btn[_ngcontent-%COMP%], .prt_heading[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n}\n\n.prt_heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  position: relative;\n  width: auto;\n  padding-bottom: 15px;\n}\n\n.prt_heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .prt_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n}\n\n.h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 1.1;\n  color: #000000;\n}\n\n.prt_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  width: auto;\n  background-color: #010101;\n  padding-left: 10px;\n  position: absolute;\n  right: 0;\n  bottom: -10px;\n  color: #6c63ff;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: calc(100% - 200px);\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-transform: capitalize;\n  margin-top: 0;\n  font-weight: 500;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  text-transform: capitalize;\n  margin-bottom: 10px;\n  color: #495057;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #495057;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  text-align: right;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.mar-left[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  padding-left: 2rem;\n}\n\n@media (max-width: 768px) {\n  .mar-left[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.mar-right[_ngcontent-%COMP%] {\n  margin-right: 50%;\n  padding-right: 2rem;\n}\n\n@media (max-width: 768px) {\n  .mar-right[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]   .prt_about_learnbox_year[_ngcontent-%COMP%] {\n  float: right;\n  padding-top: 30px;\n}\n\n.prt_about_learnbox_year[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 200px;\n  vertical-align: middle;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]   .prt_about_learnbox_info[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: calc(100% - 200px);\n}\n\n.prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin: 0;\n  color: #a1bcd8;\n  font-weight: 500;\n}\n\n.prt_about_learnsection[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  background-color: #202020;\n  width: 2px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: -1;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnsection[_ngcontent-%COMP%]:after {\n    width: 0;\n    visibility: hidden;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after, .prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 15px;\n  top: 50%;\n  margin-top: -7px;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #000;\n  width: 15px;\n  border-radius: 100%;\n  border: 0px solid #fff;\n  left: -41px;\n  transition: all 0.3s;\n  z-index: 100;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n    visibility: hidden;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%]:hover:after {\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%]:hover:after {\n  background-color: #fff;\n  border: 3px solid #6c63ff;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  text-align: right;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after, .prt_about_learnbox_left[_ngcontent-%COMP%]:hover:after {\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #000;\n  width: 15px;\n  border-radius: 100%;\n  border: 0px solid #fff;\n  right: -39px;\n  transition: all 0.3s;\n  z-index: 100;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_left[_ngcontent-%COMP%]:after {\n    visibility: hidden;\n  }\n}\n\n.prt_about_experiencebox[_ngcontent-%COMP%]:after, .prt_contact_details_box[_ngcontent-%COMP%]:after, .prt_couter_wrapper[_ngcontent-%COMP%]:after {\n  right: 0;\n  bottom: 0;\n  content: \"\";\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:hover:after {\n  background-color: #fff;\n  border: 3px solid #6c63ff;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:hover   .prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%]:hover   .prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #6c63ff;\n  transition: all 0.3s;\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_left[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #202020;\n    padding-bottom: 30px;\n  }\n}\n\n\n\n@-webkit-keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7O0FBdUJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBcEJGOztBQXNCQTs7RUFFRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBbkJGOztBQXFCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQWxCRjs7QUFvQkE7O0VBR0UsU0FBQTtFQUNBLGdCQUFBO0FBbEJGOztBQXFCQTs7Ozs7Ozs7Ozs7O0VBWUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFsQkY7O0FBb0JBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBakJGOztBQW9CQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFqQkY7O0FBbUJBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBaEJGOztBQWtCQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWZGOztBQWlCQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7QUFiRjs7QUFlQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7QUFaRjs7QUFrQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBL0JGOztBQWdDRTtFQUhGO0lBSUksU0FBQTtFQTdCRjtBQUNGOztBQStCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUE1QkY7O0FBNkJFO0VBSEY7SUFJSSxTQUFBO0VBMUJGO0FBQ0Y7O0FBNEJBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBekJGOztBQTJCQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBeEJGOztBQTBCQTtFQUNFLFdBQUE7QUF2QkY7O0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQXRCRjs7QUF3QkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFyQkY7O0FBdUJFO0VBWkY7SUFhSSxRQUFBO0lBQ0Esa0JBQUE7RUFwQkY7QUFDRjs7QUF1QkE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0VBQ0EsWUFBQTtBQXBCRjs7QUFxQkU7RUFWRjtJQVdJLGtCQUFBO0VBbEJGO0FBQ0Y7O0FBcUJBOztFQUVFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQkFBQTtBQWxCRjs7QUFxQkE7O0VBRUUsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtFQUNBLFlBQUE7QUFsQkY7O0FBbUJFO0VBVkY7SUFXSSxrQkFBQTtFQWhCRjtBQUNGOztBQW1CQTs7O0VBR0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBaEJGOztBQW1CQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFFQSxvQkFBQTtBQWhCRjs7QUFtQkE7O0VBRUUsY0FBQTtFQUtBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0FBaEJGOztBQW1CQTtFQUNFOztJQUVFLGdDQUFBO0lBQ0Esb0JBQUE7RUFoQkY7QUFDRjs7QUF1QkEsZUFBQTs7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDRCQUFBO0lBQ0Esb0hBQUE7RUFyQkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQXRCRjtBQUNGOztBQVdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQXJCRjtFQXdCQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBdEJGO0FBQ0Y7O0FBMEJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQXhCRjtFQTJCQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBekJGO0FBQ0Y7O0FBY0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBeEJGO0VBMkJBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUF6QkY7QUFDRjs7QUE0QkE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBMUJGO0VBNkJBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUEzQkY7QUFDRjs7QUFnQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBMUJGO0VBNkJBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUEzQkY7QUFDRjs7QUE4QkE7RUFDRTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG9IQUFBO0VBNUJGO0VBK0JBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUE3QkY7QUFDRjs7QUFrQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG9IQUFBO0VBNUJGO0VBK0JBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUE3QkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJ0X2Fib3V0X2VkdWxlYXJuX3dyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA3cmVtO1xuICBtYXJnaW4tYm90dG9tOiA3cmVtO1xuICAvL2FuaW1hdGlvbjogZmFkZV91cCAycyA0cztcbn1cbi50aW1lbGluZS1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLy8jNmM2M2ZmXG4vLyM0OTUwNTdcbi8vIzBhNTJkNlxuLnBydF9oZWFkaW5nX3dyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJ0X2Fib3V0X2xlYXJuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIC8vXG4gIC8vJjo6YmVmb3Jle1xuICAvLyAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyAgbGVmdDogNTAlO1xuICAvLyAgdG9wOiAwO1xuICAvLyAgY29udGVudDogJyAnO1xuICAvLyAgZGlzcGxheTogYmxvY2s7XG4gIC8vICB3aWR0aDogcHg7XG4gIC8vICBoZWlnaHQ6IDEwMCU7XG4gIC8vICBtYXJnaW4tbGVmdDogLTNweDtcbiAgLy8gIGJhY2tncm91bmQ6IHJnYig4MCw4MCw4MCk7XG4gIC8vICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoODAsODAsODAsMCkgMCUsIHJnYig4MCw4MCw4MCkgOCUsIHJnYig4MCw4MCw4MCkgOTIlLCByZ2JhKDgwLDgwLDgwLDApIDEwMCUpO1xuICAvLyAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxyZ2JhKDMwLDg3LDE1MywxKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDEyNSwxODUsMjMyLDEpKSk7XG4gIC8vICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoODAsODAsODAsMCkgMCUsIHJnYig4MCw4MCw4MCkgOCUsIHJnYig4MCw4MCw4MCkgOTIlLCByZ2JhKDgwLDgwLDgwLDApIDEwMCUpO1xuICAvLyAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg4MCw4MCw4MCwwKSAwJSwgcmdiKDgwLDgwLDgwKSA4JSwgcmdiKDgwLDgwLDgwKSA5MiUsIHJnYmEoODAsODAsODAsMCkgMTAwJSk7XG4gIC8vICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg4MCw4MCw4MCwwKSAwJSwgcmdiKDgwLDgwLDgwKSA4JSwgcmdiKDgwLDgwLDgwKSA5MiUsIHJnYmEoODAsODAsODAsMCkgMTAwJSk7XG4gIC8vICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDgwLDgwLDgwLDApIDAlLCByZ2IoODAsODAsODApIDglLCByZ2IoODAsODAsODApIDkyJSwgcmdiYSg4MCw4MCw4MCwwKSAxMDAlKTtcbiAgLy9cbiAgLy8gIHotaW5kZXg6IDU7XG4gIC8vfVxufVxuXG4ucHJ0X2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnBydF9idG4sXG4ucHJ0X2hlYWRpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucHJ0X2hlYWRpbmcgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnBydF9oZWFkaW5nIGgxLFxuLnBydF9oZWFkaW5nIHAge1xuICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmgxLFxuLmgyLFxuLmgzLFxuLmg0LFxuLmg1LFxuLmg2LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucHJ0X2hlYWRpbmcgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDEwMTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICBjb2xvcjogIzZjNjNmZjtcbn1cblxuLnBydF9hYm91dF9sZWFybmJveF9pbmZvIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbn1cbi5wcnRfYWJvdXRfbGVhcm5ib3hfaW5mbyBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJ0X2Fib3V0X2xlYXJuYm94X2luZm8gc3BhbiB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4ucHJ0X2Fib3V0X2xlYXJuYm94X2luZm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4ucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLy8ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6OmFmdGVyIHtcbi8vICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbi8vICB3aWR0aDogMTVweDtcbi8vICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZXJlZDtcbi8vICByaWdodDogLTIycHg7XG4vLyAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcbi8vICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuLy99XG4vLy5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6OmFmdGVyIHtcbi8vICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbi8vICB3aWR0aDogMTVweDtcbi8vICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4vLyAgbGVmdDogLTIycHg7XG4vLyAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcbi8vICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuLy99XG4ubWFyLWxlZnQge1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLm1hci1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogNTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdCAucHJ0X2Fib3V0X2xlYXJuYm94X3llYXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLnBydF9hYm91dF9sZWFybmJveF95ZWFyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDIwMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0IC5wcnRfYWJvdXRfbGVhcm5ib3hfaW5mbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnBydF9hYm91dF9sZWFybmJveF9pbmZvIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbn1cbi5wcnRfYWJvdXRfbGVhcm5ib3hfeWVhciBoMSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ExYmNkODtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBydF9hYm91dF9sZWFybnNlY3Rpb246YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gIHdpZHRoOiAycHg7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IC0xO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6YWZ0ZXIsXG4ucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cblxuLnBydF9hYm91dF9sZWFybmJveF9yaWdodCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDBweCBzb2xpZCAjZmZmO1xuICBsZWZ0OiAtNDFweDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB6LWluZGV4OiAxMDA7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQsXG4ucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0OmhvdmVyOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0OmhvdmVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzZjNjNmZjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0OmFmdGVyLFxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0OmhvdmVyOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDBweCBzb2xpZCAjZmZmO1xuICByaWdodDogLTM5cHg7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgei1pbmRleDogMTAwO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cblxuLnBydF9hYm91dF9leHBlcmllbmNlYm94OmFmdGVyLFxuLnBydF9jb250YWN0X2RldGFpbHNfYm94OmFmdGVyLFxuLnBydF9jb3V0ZXJfd3JhcHBlcjphZnRlciB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdDpob3ZlcjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM2YzYzZmY7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0OmhvdmVyIC5wcnRfYWJvdXRfbGVhcm5ib3hfeWVhciBoMSxcbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6aG92ZXIgLnBydF9hYm91dF9sZWFybmJveF95ZWFyIGgxIHtcbiAgY29sb3I6ICM2YzYzZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAvKiAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXG4gIC8qIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cbiAgLyogLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXG4gIC8qIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXG4gIC8qIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXG4gIC8qIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAuM3M7ICovXG4gIC8qIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAuM3M7ICovXG4gIC8qIC1tcy1hbmltYXRpb24tZGVsYXk6IC4zczsgKi9cbiAgLyogLW8tYW5pbWF0aW9uLWRlbGF5OiAuM3M7ICovXG4gIC8qIGFuaW1hdGlvbi1kZWxheTogLjNzOyAqL1xuICAvKiBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgKi9cbiAgLyogYW5pbWF0aW9uLW5hbWU6IHB1bHNlICovXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQsXG4gIC5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjAyMDIwO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG59XG4vL0BtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuLy8gIC5tYWluLWJ1dHRvbiB7XG4vLyAgICBmb250LXNpemU6IDEycHg7XG4vLyAgfVxuLy99XG4vKiBBbmltYXRpb25zICovXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZV91cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9yaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9sZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-education',
          templateUrl: './education.component.html',
          styleUrls: ['./education.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/experience/experience-card/experience-card.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/experience/experience-card/experience-card.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ExperienceCardComponent */

  /***/
  function srcAppExperienceExperienceCardExperienceCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceCardComponent", function () {
      return ExperienceCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExperienceCardComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lis_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lis_r1);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        background: a0
      };
    };

    var ExperienceCardComponent = /*#__PURE__*/function () {
      function ExperienceCardComponent() {
        _classCallCheck(this, ExperienceCardComponent);
      } // angular.module('yourApp', ['ngColorThief'])


      _createClass(ExperienceCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceCardComponent;
    }();

    ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) {
      return new (t || ExperienceCardComponent)();
    };

    ExperienceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceCardComponent,
      selectors: [["app-experience-card"]],
      inputs: {
        experience: "experience"
      },
      decls: 16,
      vars: 9,
      consts: [["wmAnimate", "bumpIn", "aos", "", "speed", "normal", 1, "experience-card"], [1, "experience-banner", 3, "ngStyle"], [1, "experience-blurred_div"], [1, "experience-div-company"], [1, "experience-text-company"], ["crossOrigin", "anonymous", 1, "experience-roundedimg", 3, "src"], [1, "experience-text-details"], [1, "experience-text-role"], [1, "experience-text-date"], [1, "subTitle", "experience-text-desc"], ["class", "subTitle", 4, "ngFor", "ngForOf"], [1, "subTitle"]],
      template: function ExperienceCardComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".experience-card[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;\n  border-radius: 10px;\n  border: 1px solid rgba(211, 211, 211, 0.397);\n}\n\n.experience-card[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;\n}\n\n.experience-banner[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 150%;\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));\n  border-radius: 10px 10px 0px 0px;\n  -webkit-filter: blur(0px);\n  -moz-filter: blur(0px);\n  -o-filter: blur(0px);\n  -ms-filter: blur(0px);\n  filter: blur(0px);\n  height: 11rem;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.experience-blurred_div[_ngcontent-%COMP%] {\n  position: absolute;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));\n  -webkit-filter: blur(5px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n  height: 11rem;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.experience-div-company[_ngcontent-%COMP%] {\n  position: absolute;\n  background: transparent;\n  height: 9rem;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.experience-text-company[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem;\n  margin: 0;\n  color: #fff;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.experience-roundedimg[_ngcontent-%COMP%] {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  left: 0;\n  right: 0;\n  top: 7rem;\n  margin-left: auto;\n  margin-right: auto;\n  width: 8rem;\n  height: 8rem;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n}\n\n.experience-text-role[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-weight: 700;\n  font-size: 25px;\n  margin: 0px;\n  padding-top: 1.5rem;\n  line-height: normal;\n}\n\n.experience-text-date[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n  margin: 0px;\n  padding-top: 1rem;\n  font-weight: 600;\n}\n\n.experience-text-desc[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  line-height: normal;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #495057;\n}\n\n.experience-text-details[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  margin-top: 2rem;\n}\n\n\n\n@media (max-width: 1380px) {\n  .experience-text-role[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n    font-size: 22px;\n  }\n\n  .experience-text-company[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .experience-text-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .experience-roundedimg[_ngcontent-%COMP%] {\n    width: 6.5rem;\n    height: 6.5rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .experience-text-role[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .experience-text-company[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .experience-text-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .experience-text-desc[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0RBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1FQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1FQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQSxnQkFBQTs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBRUY7O0VBQUE7SUFDRSxlQUFBO0VBR0Y7O0VBREE7SUFDRSxlQUFBO0VBSUY7O0VBRkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLGVBQUE7RUFJRjs7RUFGQTtJQUNFLGVBQUE7RUFLRjs7RUFIQTtJQUNFLGVBQUE7RUFNRjs7RUFKQTtJQUNFLGVBQUE7RUFPRjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxVQUFBO0VBTUY7RUFKQTtJQUNFLFVBQUE7RUFNRjtBQUNGOztBQVpBO0VBQ0U7SUFDRSxVQUFBO0VBTUY7RUFKQTtJQUNFLFVBQUE7RUFNRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2UtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDEwcHggMzBweCAtMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjM5Nyk7XG59XG5cbi5leHBlcmllbmNlLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDIwcHggMzBweCAtMTBweDtcbn1cblxuLmV4cGVyaWVuY2UtYmFubmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAtbW96LWZpbHRlcjogYmx1cigwcHgpO1xuICAtby1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgLW1zLWZpbHRlcjogYmx1cigwcHgpO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgaGVpZ2h0OiAxMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4cGVyaWVuY2UtYmx1cnJlZF9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XG4gIC1vLWZpbHRlcjogYmx1cig1cHgpO1xuICAtbXMtZmlsdGVyOiBibHVyKDVweCk7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICBoZWlnaHQ6IDExcmVtO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLmV4cGVyaWVuY2UtZGl2LWNvbXBhbnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDlyZW07XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhwZXJpZW5jZS10ZXh0LWNvbXBhbnkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZXhwZXJpZW5jZS1yb3VuZGVkaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogN3JlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogOHJlbTtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmV4cGVyaWVuY2UtdGV4dC1yb2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5leHBlcmllbmNlLXRleHQtZGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmV4cGVyaWVuY2UtdGV4dC1kZXNjIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLnN1YlRpdGxlIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4uZXhwZXJpZW5jZS10ZXh0LWRldGFpbHMge1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi8qIE1lZGlhIFF1ZXJ5ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpIHtcbiAgLmV4cGVyaWVuY2UtdGV4dC1yb2xlIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWNvbXBhbnkge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuZXhwZXJpZW5jZS1yb3VuZGVkaW1nIHtcbiAgICB3aWR0aDogNi41cmVtO1xuICAgIGhlaWdodDogNi41cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZXhwZXJpZW5jZS10ZXh0LXJvbGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWNvbXBhbnkge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuZXhwZXJpZW5jZS10ZXh0LWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experience-card',
          templateUrl: './experience-card.component.html',
          styleUrls: ['./experience-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        experience: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/experience/experience.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/experience/experience.component.ts ***!
    \****************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./experience-card/experience-card.component */
    "./src/app/experience/experience-card/experience-card.component.ts");

    function ExperienceComponent_div_0_app_experience_card_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 6);
      }

      if (rf & 2) {
        var card_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", card_r2);
      }
    }

    function ExperienceComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.workExperiences.experience);
      }
    }

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);

        this.workExperiences = {
          viewExperiences: true,
          experience: [{
            role: "IT Developer - CS01",
            company: "Canada Revenue Agency",
            color: "#015a95",
            companylogo: "../../../assets/images/CAN-Revenue-Agency.jpeg",
            date: "Dec. 2021 - Current",
            // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            desc: "Working as a Fullstack developer using Angular & Java."
          }, {
            role: "IT Developer Intern",
            company: "Canada Revenue Agency",
            color: "#015a95",
            companylogo: "../../../assets/images/CAN-Revenue-Agency.jpeg",
            date: "Sep. 2021 - Dec. 2021",
            desc: "Worked as a Front-end developer using Angular."
          }, {
            role: "Systems Engineer",
            company: "Infosys",
            color: "#3781c2",
            companylogo: "../../../assets/images/infosys.png",
            date: "Sep. 2018 – Feb. 2020",
            desc: "Worked as a Systems Engineer to Integrate complex data using MuleSoft."
          }]
        };
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)();
    };

    ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["id", "experience"], ["id", "workExperience", 1, "experience-container"], [1, "experience-heading"], [1, "experience-cards-div"], [3, "experience", 4, "ngFor", "ngForOf"], [3, "experience"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExperienceComponent_div_0_Template, 8, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.workExperiences.viewExperiences);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceCardComponent"]],
      styles: [".experience-cards-div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\n  gap: 1rem 1rem;\n}\n\n.experience-heading[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 400;\n  margin-bottom: 2rem;\n}\n\n.experience-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.experience-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n\n\n@media (max-width: 1380px) {\n  .experience-heading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .experience-heading[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLDJEQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxPQUFBO0FBREY7O0FBSUEsZ0JBQUE7O0FBRUE7RUFDRTtJQUNFLGVBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2UtY2FyZHMtZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjkwcHgsIDFmcikpO1xuICBnYXA6IDFyZW0gMXJlbTtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5leHBlcmllbmNlLWhlYWRpbmcge1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5leHBlcmllbmNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmV4cGVyaWVuY2UtY29udGFpbmVyPioge1xuICBmbGV4OiAxO1xufVxuXG4vKiBNZWRpYSBRdWVyeSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSB7XG4gIC5leHBlcmllbmNlLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmV4cGVyaWVuY2UtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-experience",
          templateUrl: "./experience.component.html",
          styleUrls: ["./experience.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.state = 'normal';
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAnimate",
        value: function onAnimate() {
          this.state = 'highlited';
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      consts: [["wmAnimate", "jackInTheBox", "speed", "normal", 1, "footer-div"], [1, "footer-text"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA9 2021, Built with \u2764\uFE0F by Yash Jaiswal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]],
      styles: [".footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #495057;\n}\n\n.footer-div[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n\n\n@-webkit-keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFHQSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUFGO0VBR0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQURGO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBQUY7RUFHQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBREY7QUFDRjs7QUFLQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFIRjtFQU1BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFKRjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQUhGO0VBTUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBTEY7RUFRQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBTkY7QUFDRjs7QUFMQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFMRjtFQVFBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQVBGO0VBVUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQVJGO0FBQ0Y7O0FBSEE7RUFDRTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG9IQUFBO0VBUEY7RUFVQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uZm9vdGVyLWRpdiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIC8vYW5pbWF0aW9uOiBmYWRlX2xlZnQgMnM7XG59XG5cbi8qIEFuaW1hdGlvbnMgKi9cbkBrZXlmcmFtZXMgZmFkZV9kb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlX3VwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlX3JpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlX2xlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbiJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('divState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          'background-color': 'red',
          transform: 'translateX(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          'background-color': 'blue',
          transform: 'translateX(100px)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal <=> highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('divState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            'background-color': 'red',
            transform: 'translateX(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            'background-color': 'blue',
            transform: 'translateX(100px)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal <=> highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300))])]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/github-calendar/github-calendar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/github-calendar/github-calendar.component.ts ***!
    \**************************************************************/

  /*! exports provided: GithubCalendarComponent */

  /***/
  function srcAppGithubCalendarGithubCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubCalendarComponent", function () {
      return GithubCalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GithubCalendarComponent = /*#__PURE__*/function () {
      function GithubCalendarComponent() {
        _classCallCheck(this, GithubCalendarComponent);
      }

      _createClass(GithubCalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          GitHubCalendar('.calendar', 'theyashjaiswal', {
            responsive: true,
            tooltips: true
          });
        }
      }]);

      return GithubCalendarComponent;
    }();

    GithubCalendarComponent.ɵfac = function GithubCalendarComponent_Factory(t) {
      return new (t || GithubCalendarComponent)();
    };

    GithubCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GithubCalendarComponent,
      selectors: [["app-github-calendar"]],
      decls: 3,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"], [1, "calendar"]],
      template: function GithubCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading the data just for you.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi1jYWxlbmRhci9naXRodWItY2FsZW5kYXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-github-calendar',
          templateUrl: './github-calendar.component.html',
          styleUrls: ['./github-calendar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/greeting/greeting.component.ts":
  /*!************************************************!*\
    !*** ./src/app/greeting/greeting.component.ts ***!
    \************************************************/

  /*! exports provided: GreetingComponent */

  /***/
  function srcAppGreetingGreetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GreetingComponent", function () {
      return GreetingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../social-media/social-media.component */
    "./src/app/social-media/social-media.component.ts");

    var GreetingComponent = /*#__PURE__*/function () {
      function GreetingComponent() {
        _classCallCheck(this, GreetingComponent);

        this.greeting = {
          username: 'Yash Jaiswal',
          title: "Hello, I'm Yash",
          subTitle: 'A passionate Software Developer 🚀 experienced in building Web applications with Angular, Java, Reactjs, Nodejs and few other cool libraries and frameworks.',
          resumeLink: 'https://drive.google.com/file/d/19XWiVSGbhvHReMi0grrKbkuSmpFm8i3J/view?usp=sharing'
        };
      }

      _createClass(GreetingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GreetingComponent;
    }();

    GreetingComponent.ɵfac = function GreetingComponent_Factory(t) {
      return new (t || GreetingComponent)();
    };

    GreetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GreetingComponent,
      selectors: [["app-greeting"]],
      decls: 20,
      vars: 3,
      consts: [["id", "greeting", 1, "greet-main"], ["wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 1, "greeting-main"], [1, "greeting-text-div"], [1, "greeting-text"], [1, "wave-emoji"], [1, "greeting-text-p", "subTitle"], [1, "button-greeting-div"], ["href", "#contact", 1, "main-button"], ["target", "_blank", 1, "main-button", 3, "href"], [1, "greeting-image-div"], ["src", "../../assets/images/manOnTable.svg", "alt", "Yash table"]],
      template: function GreetingComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Resume/CV");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.greeting.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.greeting.subTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.greeting.resumeLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_2__["SocialMediaComponent"]],
      styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 4rem;\n}\n\n.greet-main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.gretting-main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n}\n\n.greeting-main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.greeting-main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.button-greeting-div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n\n.greeting-text[_ngcontent-%COMP%] {\n  font-size: 70px;\n  line-height: 1.1;\n  margin-top: 1rem;\n}\n\n.greeting-text-p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 40px;\n}\n\n.greeting-image-div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.wave-emoji[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 1.8s;\n          animation-duration: 1.8s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: wave;\n          animation-name: wave;\n  display: inline-block;\n  transform-origin: 70% 70%;\n}\n\np[_ngcontent-%COMP%] {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #495057;\n}\n\n@-webkit-keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(-10deg);\n  }\n  20% {\n    transform: rotate(12deg);\n  }\n  30% {\n    transform: rotate(-10deg);\n  }\n  40% {\n    transform: rotate(9deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(-10deg);\n  }\n  20% {\n    transform: rotate(12deg);\n  }\n  30% {\n    transform: rotate(-10deg);\n  }\n  40% {\n    transform: rotate(9deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n\n\n@media (max-width: 1380px) {\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 768px) {\n  .button-greeting-div[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n    text-align: center;\n  }\n\n  .greeting-main[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.main-button[_ngcontent-%COMP%] {\n  background-color: #1b5299;\n  border: solid 1px #1b5299;\n  color: white;\n  font-weight: 700;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 13px 22px;\n  margin-right: 50px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.main-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: black;\n  transition: all 0.3s ease 0s;\n  transform: translateY(-3px);\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.greeting-text-p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 40px;\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 12px 18px;\n    margin-right: 0px;\n  }\n\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 35px;\n    font-weight: 700;\n  }\n}\n\n@media (max-width: 320px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n\n\n@-webkit-keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JlZXRpbmcvZ3JlZXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtBQUtGOztBQUhBO0VBQ0U7SUFDRSx1QkFBQTtFQU1GO0VBSkE7SUFDRSx5QkFBQTtFQU1GO0VBSkE7SUFDRSx3QkFBQTtFQU1GO0VBSkE7SUFDRSx5QkFBQTtFQU1GO0VBSkE7SUFDRSx1QkFBQTtFQU1GO0VBSkE7SUFDRSx1QkFBQTtFQU1GO0VBSkE7SUFDRSx1QkFBQTtFQU1GO0FBQ0Y7O0FBM0JBO0VBQ0U7SUFDRSx1QkFBQTtFQU1GO0VBSkE7SUFDRSx5QkFBQTtFQU1GO0VBSkE7SUFDRSx3QkFBQTtFQU1GO0VBSkE7SUFDRSx5QkFBQTtFQU1GO0VBSkE7SUFDRSx1QkFBQTtFQU1GO0VBSkE7SUFDRSx1QkFBQTtFQU1GO0VBSkE7SUFDRSx1QkFBQTtFQU1GO0FBQ0Y7O0FBSEEsZ0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFLRjs7RUFIQTtJQUNFLGVBQUE7RUFNRjtBQUNGOztBQUpBO0VBQ0U7SUFDRSw2QkFBQTtFQU1GOztFQUpBO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBT0Y7O0VBTEE7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQVFGOztFQU5BO0lBQ0UsY0FBQTtFQVNGO0FBQ0Y7O0FBUEE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQVNGOztBQVBBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQVVGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFXRjs7QUFUQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFZRjs7QUFUQSxnQkFBQTs7QUFPQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFNRjs7RUFKQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQU9GO0FBQ0Y7O0FBTEE7RUFDRTtJQUNFLGVBQUE7RUFPRjtBQUNGOztBQUpBLGVBQUE7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBTUY7RUFIQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBS0Y7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBTUY7RUFIQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBS0Y7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFHRjtFQUFBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFFRjtBQUNGOztBQWJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQUdGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBQ0Y7RUFFQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBQUY7QUFDRjs7QUFYQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFDRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQURGO0VBSUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUZGO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG9IQUFBO0VBREY7RUFJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dyZWV0aW5nL2dyZWV0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDRyZW07XG59XG4uZ3JlZXQtbWFpbiB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgLy9hbmltYXRpb246IGZhZGVfdXAgMnM7XG59XG5cbi5ncmV0dGluZy1tYWluIHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uZ3JlZXRpbmctbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ncmVldGluZy1tYWluID4gKiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uYnV0dG9uLWdyZWV0aW5nLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ncmVldGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uZ3JlZXRpbmctdGV4dC1wIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLmdyZWV0aW5nLWltYWdlLWRpdiA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLndhdmUtZW1vamkge1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuOHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tbmFtZTogd2F2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA3MCUgNzAlO1xufVxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4uc3ViVGl0bGUge1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cbkBrZXlmcmFtZXMgd2F2ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuXG4vKiBNZWRpYSBRdWVyeSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDEzODBweCkge1xuICAuZ3JlZXRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIC5ncmVldGluZy10ZXh0LXAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idXR0b24tZ3JlZXRpbmctZGl2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAuZ3JlZXRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZ3JlZXRpbmctdGV4dC1wIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmdyZWV0aW5nLW1haW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4ubWFpbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI1Mjk5O1xuICBib3JkZXI6IHNvbGlkIDFweCAjMWI1Mjk5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMTNweCAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG59XG4ubWFpbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbn1cbi5wcm9qZWN0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmdyZWV0aW5nLXRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi8qIE1lZGlhIFF1ZXJ5ICovXG4vL0BtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpIHtcbi8vICAuZ3JlZXRpbmctdGV4dC1wIHtcbi8vICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICB9XG4vL31cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEycHggMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAuZ3JlZXRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAubWFpbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuXG4vKiBBbmltYXRpb25zICovXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZV91cCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9yaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9sZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreetingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-greeting',
          templateUrl: './greeting.component.html',
          styleUrls: ['./greeting.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.greeting = {
          username: 'Yash Jaiswal',
          title: "Hello, I'm Yash",
          subTitle: 'A passionate Software Developer 🚀 experienced in building Web applications with Angular, Java, Reactjs, Nodejs and few other cool libraries and frameworks.',
          resumeLink: 'https://drive.google.com/file/d/19XWiVSGbhvHReMi0grrKbkuSmpFm8i3J/view?usp=sharing'
        };
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 31,
      vars: 1,
      consts: [["wmAnimate", "landing", "aos", "", "speed", "normal", 1, "header"], ["href", "", 1, "logo"], [1, "grey-color"], [1, "logo-name"], ["type", "checkbox", "id", "menu-btn", 1, "menu-btn"], ["for", "menu-btn", 1, "menu-icon"], [1, "navicon"], [1, "menu"], ["href", "#skills"], ["href", "#education"], ["href", "#projects"], ["href", "#experience"], ["href", "#contact"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.greeting.username);
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"]],
      styles: ["p[_ngcontent-%COMP%] {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.header[_ngcontent-%COMP%] {\n  max-width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n}\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden;\n  background-color: #fff;\n}\n.grey-color[_ngcontent-%COMP%] {\n  color: #495057;\n}\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px 20px;\n  font-weight: 400;\n  color: black;\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f4f4f4;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  font-size: 1.5em;\n  text-decoration: none;\n  margin-top: 10px;\n  line-height: normal;\n}\n.header[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n  font-family: \"Agustina Regular\";\n  font-weight: bold;\n  font-variant-ligatures: no-common-ligatures;\n  -webkit-font-variant-ligatures: no-common-ligatures;\n  padding: 0 10px;\n  color: #1b5299;\n}\n.header[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  clear: both;\n  max-height: 0;\n  transition: max-height 0.2s ease-out;\n}\n\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  float: right;\n  padding: 28px 20px;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: #333;\n  display: block;\n  height: 2px;\n  position: relative;\n  transition: background 0.2s ease-out;\n  width: 18px;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  background: #333;\n  content: \"\";\n  display: block;\n  height: 100%;\n  position: absolute;\n  transition: all 0.2s ease-out;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before {\n  top: 5px;\n}\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  top: -5px;\n}\n\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\n  max-height: 370px;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]::before {\n  transform: rotate(-45deg);\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]::after {\n  transform: rotate(45deg);\n}\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:after {\n  top: 0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media (min-width: 48em) {\n  .header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 960px) and (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRUY7QUFDQTs7RUFFRSx5QkFBQTtBQUVGO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFHRjtBQURFO0VBQ0UsVUFBQTtBQUdKO0FBQ0EsU0FBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQUNGO0FBRUEsY0FBQTtBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFBRjtBQUdBOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0UsUUFBQTtBQUFGO0FBR0E7RUFDRSxTQUFBO0FBQUY7QUFHQSxhQUFBO0FBRUE7RUFDRSxhQUFBO0FBREY7QUFJQTtFQUNFLGlCQUFBO0FBREY7QUFJQTtFQUNFLHVCQUFBO0FBREY7QUFJQTtFQUNFLHlCQUFBO0FBREY7QUFJQTtFQUNFLHdCQUFBO0FBREY7QUFJQTs7RUFFRSxNQUFBO0FBREY7QUFHQTtFQUNFLFVBQUE7QUFBRjtBQUVBLGlCQUFBO0FBRUE7RUFDRTtJQUNFLFdBQUE7RUFBRjs7RUFFQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxnQkFBQTtFQUVGOztFQUFBO0lBQ0UsYUFBQTtFQUdGO0FBQ0Y7QUFEQTtFQUNFO0lBQ0UsZUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGVhZGVyICovXG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLmhlYWRlciB7XG4gIG1heC13aWR0aDogOTAlO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5oZWFkZXIgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uZ3JleS1jb2xvciB7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uaGVhZGVyIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmhlYWRlciBsaSBhOmhvdmVyLFxuLmhlYWRlciAubWVudS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xufVxuXG4uaGVhZGVyIC5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4uaGVhZGVyIC5sb2dvLW5hbWUge1xuICBmb250LWZhbWlseTogXCJBZ3VzdGluYSBSZWd1bGFyXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXZhcmlhbnQtbGlnYXR1cmVzOiBuby1jb21tb24tbGlnYXR1cmVzO1xuICAtd2Via2l0LWZvbnQtdmFyaWFudC1saWdhdHVyZXM6IG5vLWNvbW1vbi1saWdhdHVyZXM7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgY29sb3I6ICMxYjUyOTk7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufVxuXG4vKiBtZW51ICovXG5cbi5oZWFkZXIgLm1lbnUge1xuICBjbGVhcjogYm90aDtcbiAgbWF4LWhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xufVxuXG4vKiBtZW51IGljb24gKi9cblxuLmhlYWRlciAubWVudS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMjhweCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uaGVhZGVyIC5tZW51LWljb24gLm5hdmljb24ge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2Utb3V0O1xuICB3aWR0aDogMThweDtcbn1cblxuLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uOmJlZm9yZSxcbi5oZWFkZXIgLm1lbnUtaWNvbiAubmF2aWNvbjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YmVmb3JlIHtcbiAgdG9wOiA1cHg7XG59XG5cbi5oZWFkZXIgLm1lbnUtaWNvbiAubmF2aWNvbjphZnRlciB7XG4gIHRvcDogLTVweDtcbn1cblxuLyogbWVudSBidG4gKi9cblxuLmhlYWRlciAubWVudS1idG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyIC5tZW51LWJ0bjpjaGVja2VkIH4gLm1lbnUge1xuICBtYXgtaGVpZ2h0OiAzNzBweDtcbn1cblxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb24gLm5hdmljb24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb24gLm5hdmljb246OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uIC5uYXZpY29uOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb246bm90KC5zdGVwcykgLm5hdmljb246YmVmb3JlLFxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb246bm90KC5zdGVwcykgLm5hdmljb246YWZ0ZXIge1xuICB0b3A6IDA7XG59XG4uc3VidGl0bGUge1xuICBjb2xvcjogcmVkO1xufVxuLyogNDhlbSA9IDc2OHB4ICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC5oZWFkZXIgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmhlYWRlciAubWVudSB7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbiAgfVxuICAuaGVhZGVyIC5tZW51LWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuIl19 */"],
      data: {
        animation: [// trigger('routerTransition', [
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
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadein', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: 'translateX(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'translateX(-100px)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100px)',
          opacity: 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss'],
          animations: [// trigger('routerTransition', [
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
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadein', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: 'translateX(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateX(-100px)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(5000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100px)',
            opacity: 0
          }))])])]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/github-repo-card/github-repo-card.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/projects/github-repo-card/github-repo-card.component.ts ***!
    \*************************************************************************/

  /*! exports provided: GithubRepoCardComponent */

  /***/
  function srcAppProjectsGithubRepoCardGithubRepoCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubRepoCardComponent", function () {
      return GithubRepoCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        backgroundColor: a0
      };
    };

    var GithubRepoCardComponent = /*#__PURE__*/function () {
      function GithubRepoCardComponent(window) {
        _classCallCheck(this, GithubRepoCardComponent);

        this.window = window;
      }

      _createClass(GithubRepoCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.github.node.url);
        }
      }, {
        key: "onCardClick",
        value: function onCardClick() {
          var win = window.open(this.github.node.url, "_blank");
          win.focus();
        }
      }]);

      return GithubRepoCardComponent;
    }();

    GithubRepoCardComponent.ɵfac = function GithubRepoCardComponent_Factory(t) {
      return new (t || GithubRepoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Window));
    };

    GithubRepoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GithubRepoCardComponent,
      selectors: [["app-github-repo-card"]],
      inputs: {
        github: "github",
        link: "link"
      },
      decls: 28,
      vars: 9,
      consts: [["wmAnimate", "bumpIn", "aos", "", "speed", "normal"], [1, "repo-card-div", 3, "click"], [1, "repo-name-div"], ["aria-hidden", "true", "height", "20", "role", "img", "viewBox", "0 0 12 16", "width", "14", 1, "repo-svg"], ["fill-rule", "evenodd", "d", "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"], [1, "repo-name"], [1, "repo-description"], [1, "repo-stats"], [1, "repo-left-stat"], [1, "language-color", 3, "ngStyle"], ["aria-hidden", "true", "height", "20", "role", "img", "viewBox", "0 0 10 16", "width", "12", "fill", "rgb(106, 115, 125)", 1, "repo-star-svg"], ["fill-rule", "evenodd", "d", "M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"], ["aria-hidden", "true", "height", "20", "role", "img", "viewBox", "0 0 14 16", "width", "14", "fill", "rgb(106, 115, 125)", 1, "repo-star-svg"], ["fill-rule", "evenodd", "d", "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"], [1, "repo-right-stat"]],
      template: function GithubRepoCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GithubRepoCardComponent_Template_div_click_1_listener() {
            return ctx.onCardClick();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: [".repo-card-div[_ngcontent-%COMP%] {\n  color: #586069;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 30px -15px;\n  padding: 2rem;\n  cursor: pointer;\n}\n\n.repo-card-div[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px;\n}\n\n.repo-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: #6a737d;\n}\n\n.repo-left-stat[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n}\n\n.language-color[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: blue;\n  margin-right: 0.25rem;\n  border-radius: 100%;\n}\n\n.JavaScript[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.CSS[_ngcontent-%COMP%] {\n  background-color: rebeccapurple;\n}\n\n.HTML[_ngcontent-%COMP%] {\n  background-color: orangered;\n}\n\n.repo-left-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 0.75rem;\n}\n\n.repo-left-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.repo-name-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.repo-svg[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  min-width: 16px;\n}\n\n.repo-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #24292e;\n  margin-bottom: 0.75rem;\n  font-size: 25px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n  overflow: hidden;\n  margin: 0px;\n}\n\n.repo-star-svg[_ngcontent-%COMP%] {\n  margin-right: 0.3rem;\n}\n\n.repo-description[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvZ2l0aHViLXJlcG8tY2FyZC9naXRodWItcmVwby1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0Usa0RBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFFQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLHdCQUFBO0FBR0Y7O0FBREE7RUFDRSwrQkFBQTtBQUlGOztBQUZBO0VBQ0UsMkJBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFFQSxtQkFBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBSEU7RUFDRSxTQUFBO0FBS0o7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxvQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvZ2l0aHViLXJlcG8tY2FyZC9naXRodWItcmVwby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG8tY2FyZC1kaXYge1xuICBjb2xvcjogcmdiKDg4LCA5NiwgMTA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDEwcHggMzBweCAtMTVweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlcG8tY2FyZC1kaXY6aG92ZXIge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDIwcHggMzBweCAtMTBweDtcbn1cblxuLnJlcG8tc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJnYigxMDYsIDExNSwgMTI1KTtcbn1cblxuLnJlcG8tbGVmdC1zdGF0IHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGFuZ3VhZ2UtY29sb3Ige1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uSmF2YVNjcmlwdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuLkNTU3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcbn1cbi5IVE1Me1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG59XG5cbi5yZXBvLWxlZnQtc3RhdCBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuXG4gICYgPiBwe1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ucmVwby1uYW1lLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZXBvLXN2ZyB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBtaW4td2lkdGg6IDE2cHg7XG59XG5cbi5yZXBvLW5hbWUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IHJnYigzNiwgNDEsIDQ2KTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJlcG8tc3Rhci1zdmcge1xuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcbn1cblxuLnJlcG8tZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubRepoCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-github-repo-card',
          templateUrl: './github-repo-card.component.html',
          styleUrls: ['./github-repo-card.component.scss']
        }]
      }], function () {
        return [{
          type: Window
        }];
      }, {
        github: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects/graphql.module.ts":
  /*!********************************************!*\
    !*** ./src/app/projects/graphql.module.ts ***!
    \********************************************/

  /*! exports provided: provideApollo, GraphQLModule */

  /***/
  function srcAppProjectsGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "provideApollo", function () {
      return provideApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! apollo-link-context */
    "./node_modules/apollo-link-context/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-link */
    "./node_modules/apollo-link/lib/bundle.esm.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here

    function provideApollo(httpLink) {
      var basic = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (operation, context) {
        return {
          headers: {
            Accept: 'charset=utf-8'
          }
        };
      });
      var token = ""; //Your github token here

      var auth = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (operation, context) {
        return {
          headers: {
            Authorization: "Bearer ".concat(token)
          }
        };
      });
      var link = apollo_link__WEBPACK_IMPORTED_MODULE_5__["ApolloLink"].from([basic, auth, httpLink.create({
        uri: uri
      })]);
      var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]();
      return {
        link: link,
        cache: cache
      };
    }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };

    GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GraphQLModule
    });
    GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GraphQLModule_Factory(t) {
        return new (t || GraphQLModule)();
      },
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
        useFactory: provideApollo,
        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
      }],
      imports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GraphQLModule, {
        exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          providers: [{
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: provideApollo,
            deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../github-calendar/github-calendar.component */
    "./src/app/github-calendar/github-calendar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./github-repo-card/github-repo-card.component */
    "./src/app/projects/github-repo-card/github-repo-card.component.ts");

    function ProjectsComponent_app_github_repo_card_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-github-repo-card", 7);
      }

      if (rf & 2) {
        var project_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("github", project_r1)("index", i_r2);
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(apollo) {
        _classCallCheck(this, ProjectsComponent);

        this.apollo = apollo;
        this.projects2 = [];
        this.projects3 = [{
          link: ''
        }];
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 10,
      vars: 1,
      consts: [["id", "projects", "wmAnimate", "landing", "aos", "", "speed", "faster", 1, "main"], [1, "project-title"], [1, "github__chart"], [1, "repo-cards-div-main"], [3, "github", "index", 4, "ngFor", "ngForOf"], [1, "project-button"], ["href", "https://github.com/theyashjaiswal", "target", "_blank", 1, "main-button"], [3, "github", "index"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects2);
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"], _github_calendar_github_calendar_component__WEBPACK_IMPORTED_MODULE_3__["GithubCalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _github_repo_card_github_repo_card_component__WEBPACK_IMPORTED_MODULE_5__["GithubRepoCardComponent"]],
      styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 4rem;\n}\n\n.github__chart[_ngcontent-%COMP%] {\n  margin: 3rem auto;\n  width: 80vw;\n}\n\n.project-title[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.startup-project-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.repo-cards-div-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1rem 1rem;\n}\n\n.main-button[_ngcontent-%COMP%] {\n  background-color: #1b5299;\n  border: 1px solid #1b5299;\n  color: #fff;\n  font-weight: 700;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 13px 22px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n\n\n@media (max-width: 1380px) {\n  .project-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .project-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .repo-cards-div-main[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLG1DQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBLGdCQUFBOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBSUY7QUFDRjs7QUFGQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBSUY7O0VBRkE7SUFDRSwyREFBQTtFQUtGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG4uZ2l0aHViX19jaGFydCB7XG4gIG1hcmdpbjogM3JlbSBhdXRvO1xuICB3aWR0aDogODB2dztcbn1cbi5wcm9qZWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uc3RhcnR1cC1wcm9qZWN0LXRleHQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5yZXBvLWNhcmRzLWRpdi1tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gIGdhcDogMXJlbSAxcmVtO1xufVxuLm1haW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiNTI5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFiNTI5OTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiAxM3B4IDIycHg7XG4gIC8vbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xufVxuLnByb2plY3QtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4vKiBNZWRpYSBRdWVyeSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDEzODBweCkge1xuICAucHJvamVjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnJlcG8tY2FyZHMtZGl2LW1haW4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.scss']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skill-progress/skill-progress.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/skill-progress/skill-progress.component.ts ***!
    \************************************************************/

  /*! exports provided: SkillProgressComponent */

  /***/
  function srcAppSkillProgressSkillProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillProgressComponent", function () {
      return SkillProgressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");

    function SkillProgressComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r2.Stack);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.progressStyle(exp_r2.progressPercentage));
      }
    }

    function SkillProgressComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.techStack.experience);
      }
    }

    var SkillProgressComponent = /*#__PURE__*/function () {
      function SkillProgressComponent() {
        _classCallCheck(this, SkillProgressComponent);

        this.techStack = {
          viewSkillBars: true,
          experience: [{
            Stack: "Frontend/Design",
            progressPercentage: "75%"
          }, {
            Stack: "Backend",
            progressPercentage: "60%"
          }, {
            Stack: "Programming",
            progressPercentage: "60%"
          }, {
            Stack: "MachineLearning/AI",
            progressPercentage: "30%"
          }]
        };
      }

      _createClass(SkillProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "progressStyle",
        value: function progressStyle(percentage) {
          return {
            width: percentage
          };
        }
      }]);

      return SkillProgressComponent;
    }();

    SkillProgressComponent.ɵfac = function SkillProgressComponent_Factory(t) {
      return new (t || SkillProgressComponent)();
    };

    SkillProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillProgressComponent,
      selectors: [["app-skill-progress"]],
      decls: 1,
      vars: 1,
      consts: [["class", "skills-container", "wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 4, "ngIf"], ["wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 1, "skills-container"], [1, "skills-bar"], [1, "skills-heading"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skills-image"], ["alt", "Skills", "src", "../../assets/images/skill.svg"], [1, "skill"], [1, "meter"]],
      template: function SkillProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillProgressComponent_div_0_Template, 7, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.techStack.viewSkillBars);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _animation_animate_component__WEBPACK_IMPORTED_MODULE_2__["AnimateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".meter[_ngcontent-%COMP%] {\n  height: 20px;\n  position: relative;\n  background: #f3efef;\n  border-radius: 25px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.meter[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background-color: #a1bcd8;\n  position: relative;\n  overflow: hidden;\n}\n\n.skill[_ngcontent-%COMP%] {\n  line-height: 3.5vw;\n}\n\n.skills-bar[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 40%;\n}\n\n.skills-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.skills-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.skills-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  max-width: 90%;\n  height: auto;\n}\n\n\n\n@media (max-width: 1456px) {\n  .skills-bar[_ngcontent-%COMP%] {\n    line-height: 4rem;\n    width: 100%;\n  }\n\n  .skills-image[_ngcontent-%COMP%] {\n    display: none;\n    order: 2;\n  }\n}\n\n@media (max-width: 768px) {\n  .skills-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .skills-bar[_ngcontent-%COMP%] {\n    line-height: 3rem;\n    margin: 20px;\n  }\n\n  .skills-image[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n\n\n\n@-webkit-keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@-webkit-keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwtcHJvZ3Jlc3Mvc2tpbGwtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUdBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBREEsZ0JBQUE7O0FBRUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQUdGOztFQURBO0lBQ0UsYUFBQTtJQUNBLFFBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0U7SUFDRSxzQkFBQTtFQUdGOztFQURBO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0VBSUY7O0VBRkE7SUFFRSxRQUFBO0VBSUY7QUFDRjs7QUFBQSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUVGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUNGO0FBQ0Y7O0FBWkE7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBRUY7RUFDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBQ0Y7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFERjtFQUlBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFGRjtBQUNGOztBQVRBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQURGO0VBSUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBSEY7RUFNQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBSkY7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFIRjtFQU1BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUxGO0VBUUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQU5GO0FBQ0Y7O0FBTEE7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBTEY7RUFRQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NraWxsLXByb2dyZXNzL3NraWxsLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1ldGVyIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDIzOSwgMjM5KTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5oMXtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5tZXRlciA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFiY2Q4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2tpbGx7XG4gIGxpbmUtaGVpZ2h0OiAzLjV2dztcbn1cblxuLnNraWxscy1iYXJ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDQwJTtcbiAgLy9hbmltYXRpb246IGZhZGVfbGVmdCAxLjVzIDZzO1xufVxuLnNraWxscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5za2lsbHMtY29udGFpbmVyID4gKiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2tpbGxzLWltYWdlID4gaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIC8vYW5pbWF0aW9uOiBmYWRlX3JpZ2h0IDEuNXMgNnM7XG59XG5cbi8qIE1lZGlhIFF1ZXJ5ICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDU2cHgpIHtcbiAgLnNraWxscy1iYXIge1xuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5za2lsbHMtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3JkZXI6IDI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5za2lsbHMtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIH1cbiAgLnNraWxscy1iYXIge1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAuc2tpbGxzLWltYWdlIHtcbiAgICAvL2Rpc3BsYXk6IG5vbmU7XG4gICAgb3JkZXI6IDI7XG4gIH1cbn1cblxuXG4vKiBBbmltYXRpb25zICovXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlX3VwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVfcmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9sZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skill-progress',
          templateUrl: './skill-progress.component.html',
          styleUrls: ['./skill-progress.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation_animate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animation/animate.component */
    "./src/app/animation/animate.component.ts");
    /* harmony import */


    var _software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./software-skill/software-skill.component */
    "./src/app/skills/software-skill/software-skill.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SkillsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
      }
    }

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);

        this.skillsSection = {
          title: 'What I do💁‍♂️',
          subTitle: 'FULL STACK SOFTWARE DEVELOPER',
          skills: ['⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications', '⚡ Creating application backend in Java, Node, Express & Flask', '⚡ Integration of third party services such as Firebase/ Heroku/ AWS', '⚡ Also, experienced in working with Integration tools such as MuleSoft and Tibco BW.']
        };
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 11,
      vars: 3,
      consts: [["id", "skills", 1, "main"], [1, "skills-main-div"], ["wmAnimate", "fadeInRight", "aos", "", "speed", "normal", 1, "skills-image-div"], ["alt", "Yash Working", "src", "../../assets/images/developerActivity.svg", 1, "skills-image-div"], ["wmAnimate", "fadeInLeft", "aos", "", "speed", "normal", 1, "skills-text-div"], [1, "skills-heading"], [1, "subTitle", "skills-text-subtitle"], [4, "ngFor", "ngForOf"], [1, "subTitle", "skills-text"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skillsSection.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.skillsSection.subTitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsSection.skills);
        }
      },
      directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_1__["AnimateComponent"], _software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_2__["SoftwareSkillComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".subTitle[_ngcontent-%COMP%] {\n  color: #495057;\n}\n\n.skills-main-div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.skills-text-div[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n.skills-main-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.skills-image-div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.skills-heading[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 400;\n}\n\n\n\n@media (max-width: 1380px) {\n  .skills-heading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .skills-heading[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n  }\n\n  .skills-main-div[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .skills-text-div[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin: 20px;\n  }\n\n  .skills-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .skills-text-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    text-align: center;\n  }\n\n  .skills-image-div[_ngcontent-%COMP%] {\n    \n    order: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQSxnQkFBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQUdGOztFQURBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBSUY7O0VBRkE7SUFDRSxzQkFBQTtFQUtGOztFQUhBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0VBTUY7O0VBSkE7SUFDRSxlQUFBO0VBT0Y7O0VBTEE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFRRjs7RUFOQTtJQUNFLG1CQUFBO0lBQ0EsUUFBQTtFQVNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YlRpdGxlIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4uc2tpbGxzLW1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5za2lsbHMtdGV4dC1kaXYge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnNraWxscy1tYWluLWRpdiA+ICoge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc2tpbGxzLWltYWdlLWRpdiA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2tpbGxzLWhlYWRpbmcge1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi8qIE1lZGlhIFF1ZXJ5ICovXG5AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSB7XG4gIC5za2lsbHMtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNraWxscy1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ncmVldGluZy10ZXh0LXAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIC5za2lsbHMtbWFpbi1kaXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnNraWxscy10ZXh0LWRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbiAgLnNraWxscy10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnNraWxscy10ZXh0LXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5za2lsbHMtaW1hZ2UtZGl2IHtcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgIG9yZGVyOiAyO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/skills/software-skill/software-skill.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/skills/software-skill/software-skill.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SoftwareSkillComponent */

  /***/
  function srcAppSkillsSoftwareSkillSoftwareSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoftwareSkillComponent", function () {
      return SoftwareSkillComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SoftwareSkillComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skills_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skills_r1.fontAwesomeClassname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skills_r1.skillName);
      }
    }

    var SoftwareSkillComponent = /*#__PURE__*/function () {
      function SoftwareSkillComponent() {
        _classCallCheck(this, SoftwareSkillComponent);

        this.skillsSection = {
          softwareSkills: [{
            skillName: 'HTML5',
            fontAwesomeClassname: 'fab fa-html5'
          }, {
            skillName: 'CSS3',
            fontAwesomeClassname: 'fab fa-css3-alt'
          }, {
            skillName: 'SASS',
            fontAwesomeClassname: 'fab fa-sass'
          }, {
            skillName: 'JavaScript',
            fontAwesomeClassname: 'fab fa-js'
          }, {
            skillName: 'Angular',
            fontAwesomeClassname: 'fab fa-angular'
          }, {
            skillName: 'React',
            fontAwesomeClassname: 'fab fa-react'
          }, {
            skillName: 'Nodejs',
            fontAwesomeClassname: 'fab fa-node'
          }, {
            skillName: 'NPM',
            fontAwesomeClassname: 'fab fa-npm'
          }, {
            skillName: 'SQL',
            fontAwesomeClassname: 'fas fa-database'
          }, {
            skillName: 'Python',
            fontAwesomeClassname: 'fab fa-python'
          }]
        };
      }

      _createClass(SoftwareSkillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SoftwareSkillComponent;
    }();

    SoftwareSkillComponent.ɵfac = function SoftwareSkillComponent_Factory(t) {
      return new (t || SoftwareSkillComponent)();
    };

    SoftwareSkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SoftwareSkillComponent,
      selectors: [["app-software-skill"]],
      decls: 4,
      vars: 1,
      consts: [[1, "software-skills-main-div"], [1, "dev-icons"], ["class", "software-skill-inline", 4, "ngFor", "ngForOf"], [1, "software-skill-inline"]],
      template: function SoftwareSkillComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SoftwareSkillComponent_li_3_Template, 4, 3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsSection.softwareSkills);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".dev-icons[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n  font-size: 3rem;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  text-align: center;\n}\n\n.software-skill-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #495057;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  color: #645beb;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 10px;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover    ~ p[_ngcontent-%COMP%] {\n  color: #645beb;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #495057;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NvZnR3YXJlLXNraWxsL3NvZnR3YXJlLXNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc29mdHdhcmUtc2tpbGwvc29mdHdhcmUtc2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV2LWljb25zIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb2Z0d2FyZS1za2lsbC1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNvZnR3YXJlLXNraWxsLWlubGluZSA+IGkge1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnNvZnR3YXJlLXNraWxsLWlubGluZSA+IGk6aG92ZXIge1xuICBjb2xvcjogIzY0NWJlYjtcbn1cbi5zb2Z0d2FyZS1za2lsbC1pbmxpbmUgPiBwIHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5zb2Z0d2FyZS1za2lsbC1pbmxpbmUgPiBpOmhvdmVyIH4gcCB7XG4gIGNvbG9yOiAjNjQ1YmViO1xufVxuLnN1YlRpdGxlIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoftwareSkillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-software-skill',
          templateUrl: './software-skill.component.html',
          styleUrls: ['./software-skill.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/social-media/social-media.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/social-media/social-media.component.ts ***!
    \********************************************************/

  /*! exports provided: SocialMediaComponent */

  /***/
  function srcAppSocialMediaSocialMediaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function () {
      return SocialMediaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SocialMediaComponent = /*#__PURE__*/function () {
      function SocialMediaComponent() {
        _classCallCheck(this, SocialMediaComponent);

        this.socialMediaLinks = {
          github: 'https://github.com/theyashjaiswal',
          linkedin: 'https://www.linkedin.com/in/theyashjaiswal/',
          gmail: 'yashjaiswalofficial@gmail.com',
          instagram: 'https://www.instagram.com/theyashjaiswal?hl=en',
          facebook: 'https://www.facebook.com/yashjaiswalmusic'
        };
      }

      _createClass(SocialMediaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialMediaComponent;
    }();

    SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) {
      return new (t || SocialMediaComponent)();
    };

    SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialMediaComponent,
      selectors: [["app-social-media"]],
      decls: 16,
      vars: 5,
      consts: [[1, "social-media-div"], ["target", "_blank", 1, "icon-button", "github", 3, "href"], [1, "fab", "fa-github"], ["target", "_blank", 1, "icon-button", "linkedin", 3, "href"], [1, "fab", "fa-linkedin-in"], ["target", "_blank", 1, "icon-button", "google", 3, "href"], [1, "fab", "fa-google"], ["target", "_blank", 1, "icon-button", "instagram", 3, "href"], [1, "fab", "fa-instagram"], ["target", "_blank", 1, "icon-button", "facebook", 3, "href"], [1, "fab", "fa-facebook-f"]],
      template: function SocialMediaComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      styles: [".social-media-div[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.icon-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 2.6rem;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.3rem;\n  height: 2.6rem;\n  line-height: 2.6rem;\n  margin: 0 5px;\n  position: relative;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 2.6rem;\n  margin-bottom: 10px;\n}\n\n.facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #3b5998;\n}\n\n.linkedin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #0e76a8;\n}\n\n.github[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n.gitlab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #fca326;\n}\n\n.google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #ea4335;\n}\n\n.twitter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #1da1f2;\n}\n\n.instagram[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #c13584;\n}\n\n\n\n.twitter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .gitlab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .github[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .linkedin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .instagram[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: black;\n  transition: 0.3s ease-in;\n}\n\n\n\n@media (max-width: 768px) {\n  .social-media-div[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsLW1lZGlhL3NvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUEscUJBQUE7O0FBQ0E7Ozs7Ozs7RUFPRSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUEsZ0JBQUE7O0FBQ0E7RUFDRTtJQUNFLGtCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC1tZWRpYS9zb2NpYWwtbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLW1lZGlhLWRpdiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uaWNvbi1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbi1idXR0b24gaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMi42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGhlaWdodDogMi42cmVtO1xuICBsaW5lLWhlaWdodDogMi42cmVtO1xuICBtYXJnaW46IDAgNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDIuNnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZhY2Vib29rIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4ubGlua2VkaW4gaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTc2YTg7XG59XG5cbi5naXRodWIgaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbi5naXRsYWIgaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2EzMjY7XG59XG5cbi5nb29nbGUgaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTQzMzU7XG59XG5cbi50d2l0dGVyIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhMWYyO1xufVxuXG4uaW5zdGFncmFtIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzEzNTg0O1xufVxuXG4vKiBIb3ZlciBUcmFuc2l0aW9uICovXG4udHdpdHRlciBpOmhvdmVyLFxuLmdvb2dsZSBpOmhvdmVyLFxuLmdpdGxhYiBpOmhvdmVyLFxuLmdpdGh1YiBpOmhvdmVyLFxuLmxpbmtlZGluIGk6aG92ZXIsXG4uZmFjZWJvb2sgaTpob3Zlcixcbi5pbnN0YWdyYW0gaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XG59XG5cbi8qIE1lZGlhIFF1ZXJ5ICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNvY2lhbC1tZWRpYS1kaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-social-media',
          templateUrl: './social-media.component.html',
          styleUrls: ['./social-media.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/timeline/timeline.component.ts":
  /*!************************************************!*\
    !*** ./src/app/timeline/timeline.component.ts ***!
    \************************************************/

  /*! exports provided: TimelineComponent */

  /***/
  function srcAppTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
      return TimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TimelineComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.className);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.heading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.content);
      }
    }

    var TimelineComponent = /*#__PURE__*/function () {
      function TimelineComponent() {
        _classCallCheck(this, TimelineComponent);

        this.timeline = [{
          heading: "Infosys",
          duration: "current",
          content: "Upcoming Full stack develover at Infosys!",
          className: "direction-r"
        }, {
          heading: "B.Tech",
          duration: "2016 - 2020",
          content: "Successfully completed my B.tech in Computer science from GLA University, Mathura.",
          className: "direction-l"
        }, {
          heading: "Intermediate",
          duration: "2015-2016",
          content: "Successfully completed my intermediate studies in 2016 from Gyan Deep Sr. Secondary Public School, Shikohabad.\n" + "Major: PCM.",
          className: "direction-r"
        }, {
          heading: "High School",
          duration: "2013-2014",
          content: "Successfully completed my high school studies in 2014 from Georgions Academy, Shikohabad.",
          className: "direction-l"
        }];
      }

      _createClass(TimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimelineComponent;
    }();

    TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
      return new (t || TimelineComponent)();
    };

    TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelineComponent,
      selectors: [["app-timeline"]],
      decls: 5,
      vars: 1,
      consts: [[1, "container"], [1, "timeline-heading"], [1, "timeline"], [4, "ngFor", "ngForOf"], [1, "flag-wrapper"], [1, "flag"], [1, "time-wrapper"], [1, "time"], [1, "desc"]],
      template: function TimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimelineComponent_li_4_Template, 10, 5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".container[_ngcontent-%COMP%] {\n  font-family: inherit;\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n}\n\n.timeline-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  width: 660px;\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 1em 0;\n  list-style-type: none;\n}\n\n.timeline[_ngcontent-%COMP%]:before {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  content: \" \";\n  display: block;\n  width: 6px;\n  height: 100%;\n  margin-left: -3px;\n  background: #505050;\n  background: linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, #505050 8%, #505050 92%, rgba(80, 80, 80, 0) 100%);\n  z-index: 5;\n}\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1em 0;\n}\n\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.direction-l[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  float: left;\n  text-align: right;\n}\n\n.direction-r[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  float: right;\n}\n\n.flag-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n\n.flag[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline;\n  background: #f8f8f8;\n  padding: 6px 10px;\n  border-radius: 5px;\n  font-size: 2rem;\n  font-weight: 600;\n  text-align: left;\n}\n\n.direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);\n}\n\n.direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);\n}\n\n.direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before, .direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  right: -40px;\n  content: \" \";\n  display: block;\n  width: 12px;\n  height: 12px;\n  margin-top: -10px;\n  background: #fff;\n  border-radius: 10px;\n  border: 4px solid #aaa5ff;\n  z-index: 10;\n}\n\n.direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before {\n  left: -40px;\n}\n\n.direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-left-color: #f8f8f8;\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  top: 50%;\n  height: 0;\n  width: 0;\n  margin-top: -8px;\n  border: solid transparent;\n  border-right-color: #f8f8f8;\n  border-width: 8px;\n  pointer-events: none;\n}\n\n.time-wrapper[_ngcontent-%COMP%] {\n  display: inline;\n  line-height: 1em;\n  font-size: 0.66666em;\n  color: #1b5299;\n  vertical-align: middle;\n}\n\n.direction-l[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.direction-r[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.time[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 6px;\n  background: #f8f8f8;\n  font-size: 10px;\n  font-weight: 400;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin: 1em 0.75em 0 0;\n  font-size: 0.77777em;\n  font-style: italic;\n  line-height: 1.5em;\n}\n\n.direction-r[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  margin: 1em 0 0 0.75em;\n}\n\n\n\n@media screen and (max-width: 660px) {\n  .timeline[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 4em 0 1em 0;\n  }\n\n  .timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 2em 0;\n  }\n\n  .direction-l[_ngcontent-%COMP%], .direction-r[_ngcontent-%COMP%] {\n    float: none;\n    width: 100%;\n    text-align: center;\n  }\n\n  .flag-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .flag[_ngcontent-%COMP%] {\n    background: white;\n    z-index: 15;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before, .direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:before {\n    position: absolute;\n    top: -30px;\n    left: 50%;\n    content: \" \";\n    display: block;\n    width: 12px;\n    height: 12px;\n    margin-left: -9px;\n    background: #fff;\n    border-radius: 10px;\n    border: 4px solid #ff5050;\n    z-index: 10;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after, .direction-r[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: -8px;\n    height: 0;\n    width: 0;\n    margin-left: -8px;\n    border: solid transparent;\n    border-bottom-color: white;\n    border-width: 8px;\n    pointer-events: none;\n  }\n\n  .time-wrapper[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    margin: 4px 0 0 0;\n    z-index: 14;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n    float: none;\n  }\n\n  .direction-r[_ngcontent-%COMP%]   .time-wrapper[_ngcontent-%COMP%] {\n    float: none;\n  }\n\n  .desc[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 1em 0 0 0;\n    padding: 1em;\n    background: whitesmoke;\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n    z-index: 15;\n  }\n\n  .direction-l[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%], .direction-r[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 1em 1em 0 1em;\n    padding: 1em;\n    z-index: 15;\n  }\n}\n\n@media screen and (min-width: 400px) {\n  .direction-l[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%], .direction-r[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    margin: 1em 4em 0 4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBb0NBLGlIQUFBO0VBUUEsVUFBQTtBQXBDRjs7QUF1Q0E7RUFDRSxjQUFBO0FBcENGOztBQXVDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXBDRjs7QUF1Q0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXBDRjs7QUF1Q0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF0Q0Y7O0FBeUNBO0VBSUUseUVBQUE7QUF2Q0Y7O0FBMENBO0VBSUUsd0VBQUE7QUF4Q0Y7O0FBMkNBOztFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBeENGOztBQTJDQTtFQUNFLFdBQUE7QUF4Q0Y7O0FBMkNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUF4Q0Y7O0FBMkNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUF4Q0Y7O0FBMkNBO0VBQ0UsZUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsV0FBQTtBQXpDRjs7QUE0Q0E7RUFDRSxZQUFBO0FBekNGOztBQTRDQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXpDRjs7QUE0Q0E7RUFDRSxzQkFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTFDRjs7QUE2Q0E7RUFDRSxzQkFBQTtBQTFDRjs7QUE2Q0EsNkRBQUE7O0FBRUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxvQkFBQTtFQTNDRjs7RUE4Q0E7SUFDRSxjQUFBO0VBM0NGOztFQThDQTs7SUFFRSxXQUFBO0lBQ0EsV0FBQTtJQUVBLGtCQUFBO0VBNUNGOztFQStDQTtJQUNFLGtCQUFBO0VBNUNGOztFQStDQTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQTVDRjs7RUErQ0E7O0lBRUUsa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7RUE1Q0Y7O0VBK0NBOztJQUVFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBNUNGOztFQStDQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQTVDRjs7RUErQ0E7SUFDRSxXQUFBO0VBNUNGOztFQStDQTtJQUNFLFdBQUE7RUE1Q0Y7O0VBK0NBO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUdBLHNDQUFBO0lBRUEsV0FBQTtFQTdDRjs7RUFnREE7O0lBRUUsa0JBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7SUFFQSxXQUFBO0VBOUNGO0FBQ0Y7O0FBaURBO0VBQ0U7O0lBRUUscUJBQUE7RUEvQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XG59XG5cbi50aW1lbGluZS1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi50aW1lbGluZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIGJhY2tncm91bmQ6IHJnYig4MCwgODAsIDgwKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoODAsIDgwLCA4MCwgMCkgMCUsXG4gICAgcmdiKDgwLCA4MCwgODApIDglLFxuICAgIHJnYig4MCwgODAsIDgwKSA5MiUsXG4gICAgcmdiYSg4MCwgODAsIDgwLCAwKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgbGluZWFyLFxuICAgIGxlZnQgdG9wLFxuICAgIGxlZnQgYm90dG9tLFxuICAgIGNvbG9yLXN0b3AoMCUsIHJnYmEoMzAsIDg3LCAxNTMsIDEpKSxcbiAgICBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMTI1LCAxODUsIDIzMiwgMSkpXG4gICk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgIHRvcCxcbiAgICByZ2JhKDgwLCA4MCwgODAsIDApIDAlLFxuICAgIHJnYig4MCwgODAsIDgwKSA4JSxcbiAgICByZ2IoODAsIDgwLCA4MCkgOTIlLFxuICAgIHJnYmEoODAsIDgwLCA4MCwgMCkgMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoODAsIDgwLCA4MCwgMCkgMCUsXG4gICAgcmdiKDgwLCA4MCwgODApIDglLFxuICAgIHJnYig4MCwgODAsIDgwKSA5MiUsXG4gICAgcmdiYSg4MCwgODAsIDgwLCAwKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoODAsIDgwLCA4MCwgMCkgMCUsXG4gICAgcmdiKDgwLCA4MCwgODApIDglLFxuICAgIHJnYig4MCwgODAsIDgwKSA5MiUsXG4gICAgcmdiYSg4MCwgODAsIDgwLCAwKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgcmdiYSg4MCwgODAsIDgwLCAwKSAwJSxcbiAgICByZ2IoODAsIDgwLCA4MCkgOCUsXG4gICAgcmdiKDgwLCA4MCwgODApIDkyJSxcbiAgICByZ2JhKDgwLCA4MCwgODAsIDApIDEwMCVcbiAgKTtcblxuICB6LWluZGV4OiA1O1xufVxuXG4udGltZWxpbmUgbGkge1xuICBwYWRkaW5nOiAxZW0gMDtcbn1cblxuLnRpbWVsaW5lIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgY2xlYXI6IGJvdGg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmRpcmVjdGlvbi1sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRpcmVjdGlvbi1yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZsYWctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsYWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDJyZW07XG5cbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRpcmVjdGlvbi1sIC5mbGFnIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogLTFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmRpcmVjdGlvbi1yIC5mbGFnIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxuICAgIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmRpcmVjdGlvbi1sIC5mbGFnOmJlZm9yZSxcbi5kaXJlY3Rpb24tciAuZmxhZzpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogLTQwcHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNhYWE1ZmY7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZGlyZWN0aW9uLXIgLmZsYWc6YmVmb3JlIHtcbiAgbGVmdDogLTQwcHg7XG59XG5cbi5kaXJlY3Rpb24tbCAuZmxhZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XG4gIGJvcmRlci13aWR0aDogOHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmRpcmVjdGlvbi1yIC5mbGFnOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xuICBib3JkZXItd2lkdGg6IDhweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50aW1lLXdyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG5cbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgZm9udC1zaXplOiAwLjY2NjY2ZW07XG4gIGNvbG9yOiAjMWI1Mjk5O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZGlyZWN0aW9uLWwgLnRpbWUtd3JhcHBlciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGlyZWN0aW9uLXIgLnRpbWUtd3JhcHBlciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRpbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZGVzYyB7XG4gIG1hcmdpbjogMWVtIDAuNzVlbSAwIDA7XG5cbiAgZm9udC1zaXplOiAwLjc3Nzc3ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG4uZGlyZWN0aW9uLXIgLmRlc2Mge1xuICBtYXJnaW46IDFlbSAwIDAgMC43NWVtO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09IFRpbWVsaW5lIE1lZGlhIFF1ZXJpZXMgPT09PT09PT09PT09PT09PSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xuICAudGltZWxpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDRlbSAwIDFlbSAwO1xuICB9XG5cbiAgLnRpbWVsaW5lIGxpIHtcbiAgICBwYWRkaW5nOiAyZW0gMDtcbiAgfVxuXG4gIC5kaXJlY3Rpb24tbCxcbiAgLmRpcmVjdGlvbi1yIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mbGFnLXdyYXBwZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5mbGFnIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgei1pbmRleDogMTU7XG4gIH1cblxuICAuZGlyZWN0aW9uLWwgLmZsYWc6YmVmb3JlLFxuICAuZGlyZWN0aW9uLXIgLmZsYWc6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMjU1LCA4MCwgODApO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgLmRpcmVjdGlvbi1sIC5mbGFnOmFmdGVyLFxuICAuZGlyZWN0aW9uLXIgLmZsYWc6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IC04cHg7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlci13aWR0aDogOHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLnRpbWUtd3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogNHB4IDAgMCAwO1xuICAgIHotaW5kZXg6IDE0O1xuICB9XG5cbiAgLmRpcmVjdGlvbi1sIC50aW1lLXdyYXBwZXIge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG5cbiAgLmRpcmVjdGlvbi1yIC50aW1lLXdyYXBwZXIge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG5cbiAgLmRlc2Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAgIHotaW5kZXg6IDE1O1xuICB9XG5cbiAgLmRpcmVjdGlvbi1sIC5kZXNjLFxuICAuZGlyZWN0aW9uLXIgLmRlc2Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDFlbSAxZW0gMCAxZW07XG4gICAgcGFkZGluZzogMWVtO1xuXG4gICAgei1pbmRleDogMTU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLmRpcmVjdGlvbi1sIC5kZXNjLFxuICAuZGlyZWN0aW9uLXIgLmRlc2Mge1xuICAgIG1hcmdpbjogMWVtIDRlbSAwIDRlbTtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timeline',
          templateUrl: './timeline.component.html',
          styleUrls: ['./timeline.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-button/top-button.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/top-button/top-button.component.ts ***!
    \****************************************************/

  /*! exports provided: TopButtonComponent */

  /***/
  function srcAppTopButtonTopButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopButtonComponent", function () {
      return TopButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "show-scrollTop": a0
      };
    };

    var TopButtonComponent = /*#__PURE__*/function () {
      function TopButtonComponent(document) {
        _classCallCheck(this, TopButtonComponent);

        this.document = document;
      }

      _createClass(TopButtonComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
          } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
          }
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - currentScroll / 8);
            }
          })();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopButtonComponent;
    }();

    TopButtonComponent.ɵfac = function TopButtonComponent_Factory(t) {
      return new (t || TopButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    TopButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopButtonComponent,
      selectors: [["app-top-button"]],
      hostBindings: function TopButtonComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TopButtonComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 2,
      vars: 3,
      consts: [[1, "scroll-to-top", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fas", "fa-hand-point-up"]],
      template: function TopButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopButtonComponent_Template_button_click_0_listener() {
            return ctx.scrollToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.windowScrolled));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n  border: none;\n  outline: none;\n  background-color: #1b5299;\n  color: white;\n  cursor: pointer;\n  padding: 15px;\n  border-radius: 15px;\n  font-size: 25px;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n\n.scroll-to-top[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n  transition: all ease-in-out 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJ1dHRvbi90b3AtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvdG9wLWJ1dHRvbi90b3AtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC10by10b3Age1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjUyOTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLnNob3ctc2Nyb2xsVG9wIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zY3JvbGwtdG8tdG9wOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-button',
          templateUrl: './top-button.component.html',
          styleUrls: ['./top-button.component.scss']
        }]
      }], function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:scroll", []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/yashjaiswal/Documents/GitHub/theyashjaiswal.github.io/AngularPortfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map