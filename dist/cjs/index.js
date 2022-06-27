'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactTransitionState = require('react-transition-state');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var AccordionContext = /*#__PURE__*/react.createContext({});

var _excluded$2 = ["transition", "children"];

var getTransition = function getTransition(transition, name) {
  return transition === true || !!(transition && transition[name]);
};

var AccordionProvider = function AccordionProvider(_ref) {
  var transition = _ref.transition,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  var mountOnEnter = rest.mountOnEnter,
      initialEntered = rest.initialEntered;
  var transitionMap = reactTransitionState.useTransitionMap(_extends({
    enter: getTransition(transition, 'enter'),
    exit: getTransition(transition, 'exit'),
    preEnter: getTransition(transition, 'preEnter'),
    preExit: getTransition(transition, 'preExit')
  }, rest));
  return /*#__PURE__*/jsxRuntime.jsx(AccordionContext.Provider, {
    value: _extends({
      mountOnEnter: mountOnEnter,
      initialEntered: initialEntered
    }, transitionMap),
    children: children
  });
};

var _excluded$1 = ["children"];

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return /*#__PURE__*/jsxRuntime.jsx(AccordionProvider, _extends({}, rest, {
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      className: "szh-accordion",
      children: children
    })
  }));
};

var _excluded = ["stateMap", "setItem", "deleteItem", "mountOnEnter", "initialEntered"];

var useAccordionItem = function useAccordionItem(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      itemKey = _ref.itemKey,
      itemInitialEntered = _ref.initialEntered;

  var itemRef = react.useRef(null);

  var _useContext = react.useContext(AccordionContext),
      stateMap = _useContext.stateMap,
      setItem = _useContext.setItem,
      deleteItem = _useContext.deleteItem,
      mountOnEnter = _useContext.mountOnEnter,
      initialEntered = _useContext.initialEntered,
      rest = _objectWithoutPropertiesLoose(_useContext, _excluded);

  if (process.env.NODE_ENV !== 'production' && !stateMap) {
    throw new Error("[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.");
  }

  react.useEffect(function () {
    var key = itemKey != null ? itemKey : itemRef.current;
    setItem(key, {
      initialEntered: itemInitialEntered
    });
    return function () {
      return void deleteItem(key);
    };
  }, [setItem, deleteItem, itemKey, itemInitialEntered]);

  var _initialEntered = itemInitialEntered != null ? itemInitialEntered : initialEntered;

  var initialState = {
    state: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
    isMounted: !mountOnEnter,
    isEnter: !!_initialEntered
  };
  return _extends({
    itemRef: itemRef,
    state: stateMap.get(itemKey != null ? itemKey : itemRef.current) || initialState
  }, rest);
};

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react.useLayoutEffect : react.useEffect;

var useTransitionHeight = function useTransitionHeight(state) {
  var _useState = react.useState(),
      _height = _useState[0],
      setHeight = _useState[1];

  var elementRef = react.useRef(null);
  var resizeObserver = react.useRef();
  var cbRef = react.useCallback(function (element) {
    var _resizeObserver$curre;

    elementRef.current = element;
    if (typeof ResizeObserver !== 'function') return;
    (_resizeObserver$curre = resizeObserver.current) == null ? void 0 : _resizeObserver$curre.disconnect();
    resizeObserver.current = undefined;

    if (element) {
      var observer = new ResizeObserver(function () {
        var _element$getBoundingC = element.getBoundingClientRect(),
            height = _element$getBoundingC.height;

        height && setHeight(height);
      });
      observer.observe(element, {
        box: 'border-box'
      });
      resizeObserver.current = observer;
    }
  }, []);
  useIsomorphicLayoutEffect(function () {
    var _elementRef$current;

    state === 'preEnter' && setHeight((_elementRef$current = elementRef.current) == null ? void 0 : _elementRef$current.getBoundingClientRect().height);
  }, [state]);
  var height = state === 'preEnter' || state === 'exiting' ? 0 : state === 'entering' || state === 'preExit' ? _height : undefined;
  return [height, cbRef, elementRef];
};

var AccordionItem = function AccordionItem(_ref) {
  var itemKey = _ref.itemKey,
      initialEntered = _ref.initialEntered,
      header = _ref.header,
      children = _ref.children;

  var _useAccordionItem = useAccordionItem({
    itemKey: itemKey,
    initialEntered: initialEntered
  }),
      itemRef = _useAccordionItem.itemRef,
      toggle = _useAccordionItem.toggle,
      _useAccordionItem$sta = _useAccordionItem.state,
      state = _useAccordionItem$sta.state,
      isMounted = _useAccordionItem$sta.isMounted;

  var _useTransitionHeight = useTransitionHeight(state),
      height = _useTransitionHeight[0],
      panelRef = _useTransitionHeight[1];

  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    ref: itemRef,
    className: "szh-accordion__item",
    children: [/*#__PURE__*/jsxRuntime.jsx("h3", {
      style: {
        margin: 0
      },
      children: /*#__PURE__*/jsxRuntime.jsx("button", {
        onClick: function onClick() {
          return toggle(itemKey != null ? itemKey : itemRef.current);
        },
        children: header
      })
    }), isMounted && /*#__PURE__*/jsxRuntime.jsx("div", {
      role: "region",
      className: state,
      style: {
        display: state === 'exited' ? 'none' : undefined,
        height: height,
        transition: 'height .3s ease-in-out',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/jsxRuntime.jsx("div", {
        ref: panelRef,
        style: {
          padding: '1rem'
        },
        children: children
      })
    })]
  });
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.useAccordionItem = useAccordionItem;
