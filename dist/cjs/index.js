'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var reactTransitionState = require('react-transition-state');
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

var ACCORDION_BLOCK = 'szh-accordion';
var ACCORDION_PREFIX = 'szh-adn';
var ACCORDION_BTN_ATTR = "data-" + ACCORDION_BLOCK + "-btn";
var ACCORDION_ATTR = "data-" + ACCORDION_BLOCK;
var AccordionContext = /*#__PURE__*/react.createContext({});

var bem = function bem(block, element, modifiers, className, addModifier) {
  var blockElement = element ? block + "__" + element : block;
  var classString = blockElement;
  if (addModifier && modifiers) for (var _i2 = 0, _Object$keys2 = Object.keys(modifiers); _i2 < _Object$keys2.length; _i2++) {
    var name = _Object$keys2[_i2];
    var value = modifiers[name];
    if (value) classString += " " + blockElement + "--" + (value === true ? name : name + "-" + value);
  }
  var expandedClassName = typeof className === 'function' ? className(modifiers) : className;

  if (typeof expandedClassName === 'string') {
    expandedClassName = expandedClassName.trim();
    if (expandedClassName) classString += " " + expandedClassName;
  }

  return classString;
};

var _excluded$1 = ["transition", "children"];

var getTransition = function getTransition(transition, name) {
  return transition === true || !!(transition && transition[name]);
};

var AccordionProvider = function AccordionProvider(_ref) {
  var transition = _ref.transition,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

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

var getAccordion = function getAccordion(node) {
  do {
    node = node.parentElement;
  } while (node && !node.hasAttribute(ACCORDION_ATTR));

  return node;
};

var getNextIndex = function getNextIndex(moveUp, current, length) {
  return moveUp ? current > 0 ? current - 1 : length - 1 : (current + 1) % length;
};

var moveFocus = function moveFocus(moveUp, e) {
  var _document = document,
      activeElement = _document.activeElement;
  if (!activeElement || !activeElement.hasAttribute(ACCORDION_BTN_ATTR) || getAccordion(activeElement) !== e.currentTarget) return;
  var nodes = e.currentTarget.querySelectorAll("[" + ACCORDION_BTN_ATTR + "]");
  var length = nodes.length;

  for (var i = 0; i < length; i++) {
    if (nodes[i] === activeElement) {
      var next = getNextIndex(moveUp, i, length);

      while (getAccordion(nodes[i]) !== getAccordion(nodes[next])) {
        next = getNextIndex(moveUp, next, length);
      }

      if (i !== next) {
        e.preventDefault();
        nodes[next].focus();
      }

      break;
    }
  }
};

var useAccordion = function useAccordion() {
  var _accordionProps;

  var accordionProps = (_accordionProps = {}, _accordionProps[ACCORDION_ATTR] = '', _accordionProps.onKeyDown = function onKeyDown(e) {
    return e.key === 'ArrowUp' ? moveFocus(true, e) : e.key === 'ArrowDown' && moveFocus(false, e);
  }, _accordionProps);
  return {
    accordionProps: accordionProps
  };
};

var _excluded = ["className", "children"];

var Accordion = function Accordion(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useAccordion = useAccordion(),
      accordionProps = _useAccordion.accordionProps;

  return /*#__PURE__*/jsxRuntime.jsx(AccordionProvider, _extends({}, rest, {
    children: /*#__PURE__*/jsxRuntime.jsx("div", _extends({
      className: bem(ACCORDION_BLOCK, undefined, undefined, className)
    }, accordionProps, {
      children: children
    }))
  }));
};

var current = 0;

var useIdShim = function useIdShim() {
  var _useState = react.useState(),
      id = _useState[0],
      setId = _useState[1];

  react.useEffect(function () {
    return setId(++current);
  }, []);
  return id && ACCORDION_PREFIX + "-" + id;
};

var _useId = react.useId || useIdShim;

var useAccordionItem = function useAccordionItem(_temp) {
  var _buttonProps;

  var _ref = _temp === void 0 ? {} : _temp,
      itemKey = _ref.itemKey,
      itemInitialEntered = _ref.initialEntered;

  var itemRef = react.useRef(null);

  var _useContext = react.useContext(AccordionContext),
      stateMap = _useContext.stateMap,
      setItem = _useContext.setItem,
      deleteItem = _useContext.deleteItem,
      toggle = _useContext.toggle,
      _endTransition = _useContext.endTransition,
      mountOnEnter = _useContext.mountOnEnter,
      initialEntered = _useContext.initialEntered;

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
  var key = itemKey != null ? itemKey : itemRef.current;
  var state = stateMap.get(key) || initialState;

  var toggleItem = function toggleItem(toEnter) {
    return toggle(key, toEnter);
  };

  var buttonId = _useId();
  var panelId = _useId();
  var buttonProps = (_buttonProps = {
    id: buttonId
  }, _buttonProps[ACCORDION_BTN_ATTR] = '', _buttonProps['aria-controls'] = panelId, _buttonProps['aria-expanded'] = state.isEnter, _buttonProps.onClick = toggleItem, _buttonProps);
  var panelProps = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };
  return {
    itemRef: itemRef,
    buttonProps: buttonProps,
    panelProps: panelProps,
    state: state,
    toggle: toggleItem,
    endTransition: function endTransition() {
      return _endTransition(key);
    }
  };
};

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react.useLayoutEffect : react.useEffect;

var useHeightTransition = function useHeightTransition(state) {
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
  return [{
    height: height,
    overflow: state !== 'entered' ? 'hidden' : undefined
  }, cbRef, elementRef];
};

var AccordionItem = function AccordionItem(_ref) {
  var itemKey = _ref.itemKey,
      initialEntered = _ref.initialEntered,
      className = _ref.className,
      header = _ref.header,
      children = _ref.children;

  var _useAccordionItem = useAccordionItem({
    itemKey: itemKey,
    initialEntered: initialEntered
  }),
      itemRef = _useAccordionItem.itemRef,
      buttonProps = _useAccordionItem.buttonProps,
      panelProps = _useAccordionItem.panelProps,
      _useAccordionItem$sta = _useAccordionItem.state,
      state = _useAccordionItem$sta.state,
      isMounted = _useAccordionItem$sta.isMounted,
      isEnter = _useAccordionItem$sta.isEnter;

  var _useHeightTransition = useHeightTransition(state),
      transitionStyle = _useHeightTransition[0],
      panelRef = _useHeightTransition[1];

  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    ref: itemRef,
    className: bem(ACCORDION_BLOCK, 'item', {
      state: state,
      expanded: isEnter
    }, className, true),
    children: [/*#__PURE__*/jsxRuntime.jsx("h3", {
      style: {
        margin: 0
      },
      children: /*#__PURE__*/jsxRuntime.jsx("button", _extends({
        type: "button"
      }, buttonProps, {
        children: header
      }))
    }), isMounted && /*#__PURE__*/jsxRuntime.jsx("div", {
      style: _extends({
        display: state === 'exited' ? 'none' : undefined
      }, transitionStyle),
      children: /*#__PURE__*/jsxRuntime.jsx("div", _extends({
        ref: panelRef
      }, panelProps, {
        children: children
      }))
    })]
  });
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.useAccordionItem = useAccordionItem;
