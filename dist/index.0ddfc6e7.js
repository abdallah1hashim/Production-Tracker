// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bWQjm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "056819570ddfc6e7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"CE27q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _moduleJs = require("./module.js");
var _runtime = require("regenerator-runtime/runtime");
var _formViewJs = require("./views/FormView.js");
var _formViewJsDefault = parcelHelpers.interopDefault(_formViewJs);
var _appViewJs = require("./views/appView.js");
var _appViewJsDefault = parcelHelpers.interopDefault(_appViewJs);
var _widgetViewJs = require("./views/WidgetView.js");
var _widgetViewJsDefault = parcelHelpers.interopDefault(_widgetViewJs);
var _mainViewJs = require("./views/MainView.js");
var _mainViewJsDefault = parcelHelpers.interopDefault(_mainViewJs);
var _navViewJs = require("./views/NavView.js");
var _navViewJsDefault = parcelHelpers.interopDefault(_navViewJs);
var _dateViewJs = require("./views/DateView.js");
var _dateViewJsDefault = parcelHelpers.interopDefault(_dateViewJs);
var _footerViewJs = require("./views/FooterView.js");
var _footerViewJsDefault = parcelHelpers.interopDefault(_footerViewJs);
const controlForm = async function() {
    // 1) render Login
    (0, _formViewJsDefault.default).render();
    // check if user and pin are right
    if (_moduleJs.state.users.includes((0, _formViewJsDefault.default).userName)) console.log("user exists");
};
const controlLoginPass = async function() {
    const user = document.querySelector(".log__user").value.trim();
    const pass = document.querySelector(".log__pass").value;
    if (!user) return;
    if (_moduleJs.state.users.includes(user)) {
        console.log("user is right");
        if (!pass) console.log("enter a valid pin");
        else if (pass === _moduleJs.state.pins[user]) {
            await _moduleJs.getData();
            await _moduleJs.getTeamData();
            _moduleJs.state.curUser = user;
            _moduleJs.setUserData();
            (0, _mainViewJsDefault.default).hideMain();
            (0, _appViewJsDefault.default).render(_moduleJs.state.curUserDetails);
            (0, _appViewJsDefault.default).makeDark();
            (0, _navViewJsDefault.default).changeClass();
            (0, _navViewJsDefault.default).render(_moduleJs.state.curUserDetails);
            (0, _appViewJsDefault.default).removeHide();
            // DateView.render();
            (0, _widgetViewJsDefault.default).addHolder();
            (0, _footerViewJsDefault.default).makeDisapear();
            (0, _formViewJsDefault.default).makeDisapear();
        } else (0, _formViewJsDefault.default).renderError();
    } else (0, _formViewJsDefault.default).renderError();
};
const controlFormClose = function() {
    console.log("form closed");
};
const controlSpl = async function() {
    const { month, day } = (0, _dateViewJsDefault.default).getDate();
    await _moduleJs.getSplByDay(day, month);
    await _moduleJs.getTeamSplByDay(day, month);
    (0, _widgetViewJsDefault.default)._renderSpinner();
    (0, _widgetViewJsDefault.default).render(_moduleJs.state);
};
// const controlSPLQ = function (o) {
//   console.log("yes");
//   console.log(module.state);
//   // LabelerSPLView.render(module.state);
// };
const controlLogout = function() {
    (0, _appViewJsDefault.default)._clear();
    (0, _dateViewJsDefault.default)._clear();
    (0, _widgetViewJsDefault.default)._clear();
    window.location.reload();
};
const init = function() {
    // NavView.addHandlerLogin(controlLogin);
    (0, _formViewJsDefault.default).addHandlerCloseForm(controlFormClose);
    (0, _formViewJsDefault.default).addHandlerRender(controlForm);
    (0, _formViewJsDefault.default).addHandlerLogin(controlLoginPass);
    (0, _dateViewJsDefault.default).addHandlerdate(controlSpl);
    (0, _navViewJsDefault.default).addHandlerLogout(controlLogout);
// WidgetView.addHandlerPickLQ(controlSPLQ);
};
// module.getData();
init();
_moduleJs.getData();

},{"./module.js":"562dW","regenerator-runtime/runtime":"dXNgZ","./views/FormView.js":"3DrWp","./views/appView.js":"dWixd","./views/WidgetView.js":"fWZ9C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/MainView.js":"3EEaO","./views/NavView.js":"9JFs1","./views/DateView.js":"lN6Bd","./views/FooterView.js":"djcSW"}],"562dW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJson", ()=>(0, _helpersJs.getJson));
parcelHelpers.export(exports, "months", ()=>months);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getData", ()=>getData);
parcelHelpers.export(exports, "getSplByDay", ()=>getSplByDay);
parcelHelpers.export(exports, "getTeamData", ()=>getTeamData);
parcelHelpers.export(exports, "getTeamSplByDay", ()=>getTeamSplByDay);
parcelHelpers.export(exports, "setUserData", ()=>setUserData);
var _helpersJs = require("./helpers.js");
var _widgetViewJs = require("./views/WidgetView.js");
var _widgetViewJsDefault = parcelHelpers.interopDefault(_widgetViewJs);
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const state = {
    wantedLQ: "",
    wantedTQ: "",
    data: [],
    users: [],
    teams: "",
    teamsIndex: {},
    usersIndex: {},
    pins: {},
    names: [],
    queues: {},
    curUser: "",
    teamsData: "",
    curUserDetails: {
        name: "",
        shift: "",
        location: "",
        device: "",
        email: "",
        team: "",
        hours: ""
    },
    day: "",
    month: ""
};
const getData = async function() {
    try {
        const data = await (0, _helpersJs.getJson)(`https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Labeler%2015%2F12'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`);
        state.data = data.values;
        // get all users
        data.values.forEach((value, i)=>{
            if (i === 1 || i === 2) return;
            const name = value[3];
            const user = value[1].slice(0, 8);
            state.names.push(name);
            state.users.push(user);
            state.usersIndex[user] = i;
        });
        // make pins
        state.users.map((u)=>{
            state.pins[u] = u.slice(2, 6);
        });
        // get queue index and list
        data.values[1].forEach((value, i)=>{
            if (i < 7 || value === "") return;
            state.queues[i] = value;
        });
        console.log(data.values);
        console.log(state);
        return data;
    } catch (err) {
        console.error(err);
    }
};
const getSplByDay = async function(d, m) {
    try {
        state.day = d;
        state.month = m;
        const data = await (0, _helpersJs.getJson)(`https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Labeler%20${d}%2F${m}'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`);
        state.curUserDetails.spl = data.values[state.usersIndex[state.curUser]];
        console.log(state);
    } catch (err) {
        console.error(err);
        (0, _widgetViewJsDefault.default).renderError();
    }
};
const getTeamData = async function() {
    try {
        const data = await (0, _helpersJs.getJson)(`https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Team%2015%2F12'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`);
        const teams = data.values;
        state.teams = data.values.map((t)=>t[1]);
        state.teams.forEach((t, i)=>{
            state.teamsIndex[t] = {
                fp: i,
                qa: i + 1
            };
        });
        console.log(teams);
        console.log(state);
    } catch (err) {
        console.error(err);
    }
};
const getTeamSplByDay = async function(d, m) {
    try {
        state.day = d;
        state.month = m;
        const data = await (0, _helpersJs.getJson)(`https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Team%20${d}%2F${m}'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`);
        state.teamsData = data.values;
        const index = state.teams.indexOf(state.curUserDetails.team);
        console.log(state.teamsData[index]);
        state.curUserDetails.teamspl = state.teamsData[index];
    } catch (err) {
        console.error(err);
    }
};
const setUserData = function() {
    state.curUserDetails.name = state.data[state.usersIndex[state.curUser]][3];
    state.curUserDetails.device = state.data[state.usersIndex[state.curUser]][5];
    state.curUserDetails.location = state.data[state.usersIndex[state.curUser]][6];
    state.curUserDetails.shift = state.data[state.usersIndex[state.curUser]][4];
    state.curUserDetails.team = state.data[state.usersIndex[state.curUser]][2];
    state.curUserDetails.email = state.data[state.usersIndex[state.curUser]][1];
    console.log(state.curUser);
}; //      `https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Labeler%2026%2F11'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`

},{"./helpers.js":"lsDLd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/WidgetView.js":"fWZ9C"}],"lsDLd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJson", ()=>getJson);
const getJson = async function(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("faild to fetch data");
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fWZ9C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class widget extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".widget-con");
    renderError() {
        this._clear();
        const message = `<p style="color:red">Faild to fetch your data :< Make sure you entered the right date!"</p>`;
        this._parentEl.insertAdjacentHTML("afterbegin", message);
    }
    _generateMarkup() {
        return `
          <div class="wid">
            <h2 class="wid-heading">Labeler</h2>
            <div class="content">
              <ul class="tabs">
                <li><a class="active" title="SPL" href="#tab1"><i class="fa-solid fa-gauge"></i>SPL</a></li>
                <li><a title="Time" href="#tab2"><i class="fa-solid fa-clock"></i>Hours</i></a></li>
              </ul>
              <div class="tab-content-wrapper">

                <article class="tab-content" id="tab1-content">

                    ${this.generateOptions(this._data.curUserDetails)}
                  

                </article>

                <article class="tab-content" id="tab2-content">
                  <p>Your Hours</p>
                  <h3>0.00</h3>
                </article>
              </div>
            </div>  
          </div>
          <div class="wid">
            <h2 class="wid-heading">Team</h2>
            <div class="content">
              <ul class="tabs">
                <li><a class="active" title="SPL" href="#tab1"><i class="fa-solid fa-gauge"></i>SPL</a></li>
                <li><a title="Time" href="#tab2"><i class="fa-solid fa-clock"></i>Hours</i></a></li>
              </ul>
              <div class="tab-content-wrapper">

                <article class="tab-content" id="tab1-content">
                ${this.generateOptionsForTeam(this._data.curUserDetails)}
                </article>

                <article class="tab-content" id="tab2-content">
                  <p>Your Hours</p>
                  <h3>0.00</h3>
                </article>
              </div>
            </div>  
          </div>
    `;
    }
    // ${this.generateOptionsForTeam(this._data.queues)};
    generateOptions(queues) {
        return queues.spl.map((li, i)=>{
            if (i < 7) return;
            if (!li) return;
            return `
        <div class="lap-spl-text">
          <p>${this._data.queues[i]}</p>
          <h3>${(+li).toFixed(3) || "NONE"}</h3>
        </div>
        `;
        }).join("");
    }
    generateOptionsForTeam(queues) {
        return queues.teamspl.map((li, i)=>{
            if (i < 3) return;
            if (!li) return;
            return `
        <div class="lap-spl-text">
          <p>${this._data.queues[i + 4]}</p>
          <h3>${(+li).toFixed(3) || "NONE"}</h3>
        </div>
        `;
        }).join("");
    }
    addHolder() {
        const child = `<div class="holder"></div>`;
        this._parentEl.insertAdjacentHTML("afterbegin", child);
    }
}
// getQueue() {
//   let lablersQ = document.querySelector(".Labeler-spl-options").value;
//   let teamQ = document.querySelector(".team-spl-options").value;
//   return { lablersQ, teamQ };
// }
// addHandlerPickLQ(handler) {
//   // this._parentEl.addEventListener("click", (e) => {
//   //   const optionQ = e.target.closest(".labelerBtn");
//   //   if (!optionQ) return;
//   const labelerDropdown = this._parentEl.querySelector(
//     ".Labeler-spl-options"
//   );
//   if (labelerDropdown) {
//     labelerDropdown.addEventListener("change", () => {
//       const labelersQ = labelerDropdown.value;
//       console.log(labelersQ);
//       handler();
//     });
//   } else {
//     console.error("Labeler dropdown element not found.");
//   }
//   // }
// }
exports.default = new widget();

},{"./View":"gQab5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQab5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data) {
        this._data = data;
        this._clear();
        const markup = this._generateMarkup();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentEl.innerHTML = "";
    }
    _renderSpinner() {
        this._clear();
        const mark = `
      <div class="spinner">
        <i class="fa-solid fa-spinner"></i>
      </div>
    `;
        this._parentEl.insertAdjacentHTML("afterbegin", mark);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"3DrWp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FormView {
    _parentEl = document.querySelector(".login");
    _container = document.querySelector(".overlay");
    _data;
    formy;
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
        this._container.classList = "overlay z-pop opacity-100";
    }
    _clear() {
        this._parentEl.innerHTML = "";
    }
    _generateMarkup() {
        return `
          <h3>Login</h3>
          <div>
            <input class="log__user" type="text" placeholder="username" />
          </div>
          <div>
            <input class="log__pass" type="password" placeholder="pin" />
          </div>
          <button type="submit" class="log">
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
          <div class="close__login">\u{274C}</div>
          <div class="login__error"></div>
    `;
    }
    addHandlerRender(handler) {
        const nav = document.querySelector("nav");
        nav.addEventListener("click", function(e) {
            const btn = e.target.closest(".login-btn");
            if (!btn) return;
            handler();
        });
    }
    makeDisapear() {
        this._clear();
        this._container.classList = "overlay z-drop opacity-0";
    }
    renderError() {
        // const parent = document.querySelector("login__error")
        const parent = document.querySelector(".login__error");
        const markup = `
    <p>Icorrect username or password</p>
    `;
        parent.innerHTML = "";
        parent.insertAdjacentHTML("beforeend", markup);
    }
    addHandlerLogin(handler) {
        document.addEventListener("DOMContentLoaded", ()=>{
            this._parentEl.addEventListener("submit", (e)=>{
                e.preventDefault();
                handler();
            });
        });
    }
    addHandlerCloseForm(handler) {
        this._container.addEventListener("click", (e)=>{
            const closeBtn = e.target.closest(".close__login");
            const divCon = e.target.closest(".div-con");
            if (closeBtn) {
                this._clear();
                this._container.classList = "overlay z-drop opacity-0";
            }
        // if (this._parentEl) {
        //   this._clear();
        //   this._parentEl.classList = "overlay z-drop opacity-0";
        // }
        });
    }
}
exports.default = new FormView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWixd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class appView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".app .container .info");
    _generateMarkup() {
        return `
    <div class="h2-con w-100">
            <h2>User Details</h2>
          </div>
          <div class="details">
            <div class="user-icon">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="personal-info">
              <h3>${this._data.name}</h3>
              <div class="personal-info-text">
                <p>EMAIL: ${this._data.email}</p>
                <p>SHIFT: ${this._data.shift === "ON" ? "Over Night" : ""}</p>
                <p>LOCATION: ${this._data.location}</p>
                <p>TEAM: ${this._data.team}</p>
                <p>DEVICE: ${this._data.device}</p>
              </div>
            </div>
          </div>
    `;
    }
    makeDark() {
        document.body.style.backgroundColor = "var(--widget-background)";
    }
    removeHide() {
        const app = document.querySelector(".app");
        app.classList.remove("hide");
    }
    addHide() {
        const app = document.querySelector(".app");
        app.classList.add("hide");
    }
}
exports.default = new appView();

},{"./View":"gQab5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3EEaO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class MainView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector("main");
    _generateMarkup() {
        return `
    <main class="d-flex align-items-center p-0">
      <div class="container">
        <div class="welcome">
          <h1>OverNight Poduction Tracker</h1>
          <div class="img__holder">
            <img src="/assets/pics/8-bTniNGuczY85cuG-removebg.webp" />
          </div>
        </div>
      </div>
    </main>
    `;
    }
    hideMain() {
        this._parentEl.classList.add("d-none");
    }
    showMain() {
        this._parentEl.classList.remove("d-none");
    }
}
exports.default = new MainView();

},{"./View":"gQab5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9JFs1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class NavView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector("nav");
    _generateMarkup() {
        return `
    <div class="container">
      <p class="greating">Welcome, ${this._data.name.split(" ")[0]}</p>
          <div class="logo">
            
          </div>
      <button class="logout-btn">Logout</button>
    </div>
    `;
    }
    changeClass() {
        this._parentEl.classList = "nav-app";
    }
    renderOriginal() {
        this._clear();
        const markup = `
    <div class="container">
    <p class="greating">Log in to get started</p>
    <div class="logo">
      <img src="/assets/pics/logo-no-background.webp" alt="logo" />
    </div>
    <button class="login-btn">Login</button>
    <!-- <button class="logout-btn hidden">Logout</button> -->
  </div>
    `;
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    addHandlerLogout(handler) {
        this._parentEl.addEventListener("click", (e)=>{
            const logout = e.target.closest(".logout-btn");
            if (!logout) return;
            handler();
        });
    }
}
exports.default = new NavView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./View":"gQab5"}],"lN6Bd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class DateView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".date");
    getDate() {
        const month = +this._parentEl.querySelector("#month").value;
        const day = +this._parentEl.querySelector("#day").value;
        return {
            month,
            day
        };
    }
    addHandlerdate(handler) {
        const btn = document.querySelector(".search");
        btn.addEventListener("click", ()=>{
            handler();
        });
    }
}
exports.default = new DateView();

},{"./View":"gQab5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djcSW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FooterView {
    _parenEl = document.querySelector(".footer");
    makeDisapear() {
        this._parenEl.innerHTML = "";
    }
}
exports.default = new FooterView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bWQjm","CE27q"], "CE27q", "parcelRequirea6eb")

//# sourceMappingURL=index.0ddfc6e7.js.map
