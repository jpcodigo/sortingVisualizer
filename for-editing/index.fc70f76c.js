// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6mXFT":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d1860b281e773ef683ae2c3ffc70f76c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4QWci":[function(require,module,exports) {
var _model = require("./model");
var _view = require("./view");
const genBtn = document.getElementById("generate");
const mergeBtn = document.getElementById("merge");
const quickBtn = document.getElementById("quick");
const heapBtn = document.getElementById("heap");
const bubbleBtn = document.getElementById("bubble");
genBtn.addEventListener("click", resetRender);
mergeBtn.addEventListener("click", () => {
  const {array} = _model.state.array;
  const animations = _model.getMergeSortAnimations(array);
  _view.mergeSort(animations);
});
quickBtn.addEventListener("click", () => {
  const {array} = _model.state.array;
  const animations = _model.getQuickSortAnimations(array);
  _view.quickSort(animations);
});
heapBtn.addEventListener("click", () => {
  const {array} = _model.state.array;
  const animations = _model.getHeapSortAnimations(array);
  _view.heapSort(animations);
});
bubbleBtn.addEventListener("click", () => {
  const {array} = _model.state.array;
  const animations = _model.getBubbleSortAnimations(array);
  _view.bubbleSort(animations);
});
function appLoaded() {
  _model.resetArray();
  const {array} = _model.state.array;
  _view.render(array);
}
function resetRender() {
  _model.resetArray();
  const {array} = _model.state.array;
  _view.render(array);
}
appLoaded();
window.onresize = resetRender;

},{"./model":"4fBCO","./view":"6bVbH"}],"4fBCO":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "state", function () {
  return state;
});
_parcelHelpers.export(exports, "resetArray", function () {
  return resetArray;
});
_parcelHelpers.export(exports, "getMergeSortAnimations", function () {
  return getMergeSortAnimations;
});
_parcelHelpers.export(exports, "getQuickSortAnimations", function () {
  return getQuickSortAnimations;
});
_parcelHelpers.export(exports, "getHeapSortAnimations", function () {
  return getHeapSortAnimations;
});
_parcelHelpers.export(exports, "heapSort", function () {
  return heapSort;
});
_parcelHelpers.export(exports, "getBubbleSortAnimations", function () {
  return getBubbleSortAnimations;
});
const state = {
  array: []
};
function resetArray() {
  const array = [];
  const viewportWidth = document.documentElement.clientWidth;
  const barCount = viewportWidth / 7.5;
  for (let i = 0; i < barCount; i++) {
    array.push(randomIntFromInterval(5, 750));
  }
  state.array = {
    array
  };
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}
function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}
function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
function getQuickSortAnimations(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;
  quickSort(arr, animations);
  return animations;
}
function quickSort(arr, animations, start = 0, end = arr.length - 1) {
  let idx;
  if (arr.length > 1) {
    idx = partition(arr, animations, start, end);
    if (start < idx - 1) {
      quickSort(arr, animations, start, idx - 1);
    }
    if (idx < end) {
      quickSort(arr, animations, idx, end);
    }
  }
}
function partition(arr, animations, start, end) {
  let pivotIdx = Math.floor((start + end) / 2);
  let pivot = arr[pivotIdx];
  let i = start;
  let j = end;
  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      animations.push([i, j, pivotIdx]);
      animations.push([i, j, pivotIdx]);
      animations.push([i, j, pivotIdx]);
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}
function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
function getHeapSortAnimations(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;
  heapSort(arr, animations);
  return animations;
}
function heapSort(arr, animations) {
  const len = arr.length;
  for (let i = len / 2 - 1; i >= 0; i--) heapify(animations, arr, len, i);
  for (let i = len - 1; i > 0; i--) {
    animations.push([0, i]);
    animations.push([0, i]);
    animations.push([0, i]);
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(animations, arr, i, 0);
  }
}
function heapify(animations, arr, len, i) {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;
  if (l < len && arr[l] > arr[largest]) largest = l;
  if (r < len && arr[r] > arr[largest]) largest = r;
  if (largest !== i) {
    animations.push([i, largest]);
    animations.push([i, largest]);
    animations.push([i, largest]);
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(animations, arr, len, largest);
  }
}
function getBubbleSortAnimations(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;
  bubbleSort(arr, animations);
  return animations;
}
function bubbleSort(arr, animations) {
  const len = arr.length;
  let i, j;
  let isSwapped = false;
  for (i = 0; i < len; i++) {
    isSwapped = false;
    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"6bVbH":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "render", function () {
  return render;
});
_parcelHelpers.export(exports, "mergeSort", function () {
  return mergeSort;
});
_parcelHelpers.export(exports, "quickSort", function () {
  return quickSort;
});
_parcelHelpers.export(exports, "heapSort", function () {
  return heapSort;
});
_parcelHelpers.export(exports, "bubbleSort", function () {
  return bubbleSort;
});
const container = document.getElementById("array-container");
const animationSpeed = 3;
function render(array) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  array.map(value => {
    let i = 1;
    container.insertAdjacentHTML("beforeend", `<div class="array-bar" style="height: ${value / 10}rem;"></div>`);
    i++;
  });
}
function mergeSort(animations) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const gradient = i % 3 === 0 ? "linear-gradient(black, lime)" : "linear-gradient(blue, black)";
      setTimeout(() => {
        barOneStyle.backgroundImage = gradient;
        barTwoStyle.backgroundImage = gradient;
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight / 10}rem`;
      }, i * animationSpeed);
    }
  }
}
function quickSort(animations) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    const [barOneIdx, barTwoIdx] = animations[i];
    if (isColorChange) {
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const gradient = i % 3 === 0 ? "linear-gradient(black, lime)" : "linear-gradient(blue, black)";
      setTimeout(() => {
        barOneStyle.backgroundImage = gradient;
        barTwoStyle.backgroundImage = gradient;
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        const barOne = arrayBars[barOneIdx];
        const barTwo = arrayBars[barTwoIdx];
        const temp = document.createElement("div");
        barOne.parentNode.insertBefore(temp, barOne);
        barTwo.parentNode.insertBefore(barOne, barTwo);
        temp.parentNode.insertBefore(barTwo, temp);
        temp.parentNode.removeChild(temp);
      }, i * animationSpeed);
    }
  }
}
function heapSort(animations) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    const [barOneIdx, barTwoIdx] = animations[i];
    if (isColorChange) {
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const gradient = i % 3 === 0 ? "linear-gradient(black, lime)" : "linear-gradient(blue, black)";
      setTimeout(() => {
        barOneStyle.backgroundImage = gradient;
        barTwoStyle.backgroundImage = gradient;
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        const barOne = arrayBars[barOneIdx];
        const barTwo = arrayBars[barTwoIdx];
        const temp = document.createElement("div");
        barOne.parentNode.insertBefore(temp, barOne);
        barTwo.parentNode.insertBefore(barOne, barTwo);
        temp.parentNode.insertBefore(barTwo, temp);
        temp.parentNode.removeChild(temp);
      }, i * animationSpeed);
    }
  }
}
function bubbleSort(animations) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    const [barOneIdx, barTwoIdx] = animations[i];
    if (isColorChange) {
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const gradient = i % 3 === 0 ? "linear-gradient(black, lime)" : "linear-gradient(blue, black)";
      setTimeout(() => {
        barOneStyle.backgroundImage = gradient;
        barTwoStyle.backgroundImage = gradient;
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        const barOne = arrayBars[barOneIdx];
        const barTwo = arrayBars[barTwoIdx];
        const temp = document.createElement("div");
        barOne.parentNode.insertBefore(temp, barOne);
        barTwo.parentNode.insertBefore(barOne, barTwo);
        temp.parentNode.insertBefore(barTwo, temp);
        temp.parentNode.removeChild(temp);
      }, i * animationSpeed);
    }
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["6mXFT","4QWci"], "4QWci", "parcelRequire10b2")

//# sourceMappingURL=index.fc70f76c.js.map
