/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com\\n*/\\n\\n/*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: #e5e7eb; /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n5. Use the user's configured `sans` font-feature-settings by default.\\n6. Use the user's configured `sans` font-variation-settings by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  -o-tab-size: 4;\\n     tab-size: 4; /* 3 */\\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 4 */\\n  font-feature-settings: normal; /* 5 */\\n  font-variation-settings: normal; /* 6 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  text-decoration: underline;\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n/* Make elements with the HTML hidden attribute stay hidden by default */\\n\\n[hidden] {\\n  display: none;\\n}\\n\\n*, ::before, ::after{\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::backdrop{\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n.invisible{\\n  visibility: hidden;\\n}\\n.ml-auto{\\n  margin-left: auto;\\n}\\n.mr-3{\\n  margin-right: 0.75rem;\\n}\\n.mt-0{\\n  margin-top: 0px;\\n}\\n.flex{\\n  display: flex;\\n}\\n.grid{\\n  display: grid;\\n}\\n.h-10{\\n  height: 2.5rem;\\n}\\n.h-12{\\n  height: 3rem;\\n}\\n.h-full{\\n  height: 100%;\\n}\\n.h-screen{\\n  height: 100vh;\\n}\\n.w-0{\\n  width: 0px;\\n}\\n.w-20{\\n  width: 5rem;\\n}\\n.w-3\\\\/4{\\n  width: 75%;\\n}\\n.w-full{\\n  width: 100%;\\n}\\n.w-screen{\\n  width: 100vw;\\n}\\n.flex-grow{\\n  flex-grow: 1;\\n}\\n.grid-cols-2{\\n  grid-template-columns: repeat(2, minmax(0, 1fr));\\n}\\n.grid-cols-3{\\n  grid-template-columns: repeat(3, minmax(0, 1fr));\\n}\\n.grid-rows-1{\\n  grid-template-rows: repeat(1, minmax(0, 1fr));\\n}\\n.flex-col{\\n  flex-direction: column;\\n}\\n.flex-col-reverse{\\n  flex-direction: column-reverse;\\n}\\n.items-start{\\n  align-items: flex-start;\\n}\\n.items-center{\\n  align-items: center;\\n}\\n.justify-start{\\n  justify-content: flex-start;\\n}\\n.justify-center{\\n  justify-content: center;\\n}\\n.justify-between{\\n  justify-content: space-between;\\n}\\n.justify-around{\\n  justify-content: space-around;\\n}\\n.gap-10{\\n  gap: 2.5rem;\\n}\\n.gap-3{\\n  gap: 0.75rem;\\n}\\n.gap-5{\\n  gap: 1.25rem;\\n}\\n.self-center{\\n  align-self: center;\\n}\\n.justify-self-end{\\n  justify-self: end;\\n}\\n.justify-self-center{\\n  justify-self: center;\\n}\\n.rounded-2xl{\\n  border-radius: 1rem;\\n}\\n.rounded-3xl{\\n  border-radius: 1.5rem;\\n}\\n.rounded-xl{\\n  border-radius: 0.75rem;\\n}\\n.rounded-b-md{\\n  border-bottom-right-radius: 0.375rem;\\n  border-bottom-left-radius: 0.375rem;\\n}\\n.border-4{\\n  border-width: 4px;\\n}\\n.border-b-2{\\n  border-bottom-width: 2px;\\n}\\n.border-solid{\\n  border-style: solid;\\n}\\n.border-green-600{\\n  --tw-border-opacity: 1;\\n  border-color: rgba(22, 163, 74, 1);\\n  border-color: rgb(22 163 74 / var(--tw-border-opacity));\\n}\\n.border-b-black{\\n  --tw-border-opacity: 1;\\n  border-bottom-color: rgba(0, 0, 0, 1);\\n  border-bottom-color: rgb(0 0 0 / var(--tw-border-opacity));\\n}\\n.bg-gray-100{\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(243, 244, 246, 1);\\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\\n}\\n.bg-green-200{\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(187, 247, 208, 1);\\n  background-color: rgb(187 247 208 / var(--tw-bg-opacity));\\n}\\n.bg-green-300{\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(134, 239, 172, 1);\\n  background-color: rgb(134 239 172 / var(--tw-bg-opacity));\\n}\\n.bg-green-600{\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(22, 163, 74, 1);\\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\\n}\\n.p-2{\\n  padding: 0.5rem;\\n}\\n.p-3{\\n  padding: 0.75rem;\\n}\\n.pb-2{\\n  padding-bottom: 0.5rem;\\n}\\n.pb-5{\\n  padding-bottom: 1.25rem;\\n}\\n.pl-2{\\n  padding-left: 0.5rem;\\n}\\n.pr-2{\\n  padding-right: 0.5rem;\\n}\\n.pt-0{\\n  padding-top: 0px;\\n}\\n.text-center{\\n  text-align: center;\\n}\\n.font-body{\\n  font-family: Gaegu;\\n}\\n.text-2xl{\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n}\\n.text-3xl{\\n  font-size: 1.875rem;\\n  line-height: 2.25rem;\\n}\\n.text-sm{\\n  font-size: 0.875rem;\\n  line-height: 1.25rem;\\n}\\n.text-xl{\\n  font-size: 1.25rem;\\n  line-height: 1.75rem;\\n}\\n.font-bold{\\n  font-weight: 700;\\n}\\n.mix-blend-multiply{\\n  mix-blend-mode: multiply;\\n}\\n.shadow-xl{\\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\n\\n.bg-green-600 {\\n\\tbackground-color: #94af9f;\\n}\\n\\n.bg-green-200 {\\n\\tbackground-color: #dbe4c6;\\n}\\n\\n.bg-green-300 {\\n\\tbackground-color: #bbd6b8;\\n}\\n\\n.border-green-600 {\\n\\tborder-color: #94af9f;\\n}\\n#home:hover,\\n#home:focus,\\n#menu:hover,\\n#menu:focus,\\n#contact:hover,\\n#contact:focus {\\n\\tbackground-color: #bbd6b8;\\n}\\n\\n#home:active,\\n#menu:active,\\n#contact:active {\\n\\tbackground-color: #94af9f;\\n}\\n\\nhtml::-webkit-scrollbar {\\n\\tdisplay: none; /* Safari and Chrome */\\n}\\nhtml {\\n\\t-ms-overflow-style: none; /* Internet Explorer 10+ */\\n\\tscrollbar-width: none; /* Firefox */\\n}\\n.hover\\\\:bg-green-400:hover{\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(74, 222, 128, 1);\\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity));\\n}\\n.active\\\\:bg-green-600:active{\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(22, 163, 74, 1);\\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\\n}\\n.active\\\\:shadow-2xl:active{\\n  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 25px 50px -12px rgba(0, 0, 0, 0.25);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\n@media (min-width: 640px){\\n\\n  .sm\\\\:w-4\\\\/5{\\n    width: 80%;\\n  }\\n}\\n@media (min-width: 768px){\\n\\n  .md\\\\:grid{\\n    display: grid;\\n  }\\n\\n  .md\\\\:grid-cols-2{\\n    grid-template-columns: repeat(2, minmax(0, 1fr));\\n  }\\n\\n  .md\\\\:gap-10{\\n    gap: 2.5rem;\\n  }\\n\\n  .md\\\\:pb-10{\\n    padding-bottom: 2.5rem;\\n  }\\n\\n  .md\\\\:pl-20{\\n    padding-left: 5rem;\\n  }\\n\\n  .md\\\\:pr-20{\\n    padding-right: 5rem;\\n  }\\n\\n  .md\\\\:pt-10{\\n    padding-top: 2.5rem;\\n  }\\n\\n  .md\\\\:text-xl{\\n    font-size: 1.25rem;\\n    line-height: 1.75rem;\\n  }\\n}\\n@media (min-width: 1024px){\\n\\n  .lg\\\\:visible{\\n    visibility: visible;\\n  }\\n\\n  .lg\\\\:grid{\\n    display: grid;\\n  }\\n\\n  .lg\\\\:h-full{\\n    height: 100%;\\n  }\\n\\n  .lg\\\\:w-7\\\\/12{\\n    width: 58.333333%;\\n  }\\n\\n  .lg\\\\:w-full{\\n    width: 100%;\\n  }\\n\\n  .lg\\\\:grid-cols-2{\\n    grid-template-columns: repeat(2, minmax(0, 1fr));\\n  }\\n\\n  .lg\\\\:items-start{\\n    align-items: flex-start;\\n  }\\n\\n  .lg\\\\:text-2xl{\\n    font-size: 1.5rem;\\n    line-height: 2rem;\\n  }\\n\\n  .lg\\\\:text-5xl{\\n    font-size: 3rem;\\n    line-height: 1;\\n  }\\n}\\n@media (min-width: 1280px){\\n\\n  .xl\\\\:grid{\\n    display: grid;\\n  }\\n\\n  .xl\\\\:grid-cols-3{\\n    grid-template-columns: repeat(3, minmax(0, 1fr));\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mamzafin-homepage/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mamzafin-homepage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mamzafin-homepage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mamzafin-homepage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mamzafin-homepage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mamzafin-homepage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mamzafin-homepage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mamzafin-homepage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mamzafin-homepage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mamzafin-homepage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactLoad.js":
/*!****************************!*\
  !*** ./src/contactLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _img_maps_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/maps.png */ \"./src/img/maps.png\");\n/* harmony import */ var _img_logo_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.jpeg */ \"./src/img/logo.jpeg\");\n/* eslint-disable max-len */\n\n\n\n\nconst loadContentDiv = () => {\n  // create Heading\n  const heading = document.createElement('h2');\n  heading.innerHTML = 'You want to contact us?';\n  heading.classList = ['text-3xl lg:text-5xl'];\n  // create section\n  const section = document.createElement('section');\n  section.innerHTML = 'There are several ways how to contact us. We have Line, Instagram and Facebook. But the best idea would be to just come over and drink a delicious coffee in our cozy cafe! Click on the map to see where exactly you can find us. See you soon!';\n  section.classList = ['lg:text-2xl'];\n  const smallWrapper = document.createElement('div');\n  smallWrapper.appendChild(heading);\n  smallWrapper.appendChild(section);\n  const logo = document.createElement('img');\n  logo.src = _img_logo_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n  logo.classList = ['w-0 invisible mix-blend-multiply lg:visible lg:w-7/12 justif-self-end'];\n  // create Wrapper Div for heading and section\n  const wrapperDiv = document.createElement('div');\n  wrapperDiv.classList = ['flex flex-col items-center justify-around lg:h-full'];\n  wrapperDiv.appendChild(smallWrapper);\n  wrapperDiv.appendChild(logo);\n  return wrapperDiv;\n};\n\nconst loadMap = () => {\n  const a = document.createElement('a');\n  a.href =\n      'https://www.google.com/maps/place/Mamzafin/@18.797666,98.9621844,15z/data=!4m6!3m5!1s0x30da3b59bafcc735:0xf5302a0fff9ba43b!8m2!3d18.7974092!4d98.9731661!16s%2Fg%2F11s56mnsxy';\n  a.target = '_blank';\n  const map = document.createElement('img');\n  map.src = _img_maps_png__WEBPACK_IMPORTED_MODULE_0__;\n  map.classList = [' w-full sm:w-4/5 lg:w-full rounded-3xl border-4 border-green-600'];\n  a.appendChild(map);\n  return a;\n};\n\nconst loadContact = () => {\n  const contact = document.createElement('div');\n  contact.classList = [\n    'h-full bg-gray-100 w-screen p-3 md:pr-20 md:pl-20 md:pt-10 md:pb-10 flex flex-col items-center gap-10 lg:grid lg:grid-cols-2 lg:items-start',\n  ];\n  contact.id = 'actualContent';\n  contact.appendChild(loadContentDiv());\n  contact.appendChild(loadMap());\n  // home.appendChild(loadApproach());\n  // home.appendChild(loadIngredients());\n  return contact;\n};\n\n\n\n\n//# sourceURL=webpack://mamzafin-homepage/./src/contactLoad.js?");

/***/ }),

/***/ "./src/homeLoad.js":
/*!*************************!*\
  !*** ./src/homeLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _img_mamzafinInside_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/mamzafinInside.jpg */ \"./src/img/mamzafinInside.jpg\");\n/* harmony import */ var _img_mamzafinGood1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/mamzafinGood1.jpg */ \"./src/img/mamzafinGood1.jpg\");\n/* harmony import */ var _img_sirup_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/sirup.jpg */ \"./src/img/sirup.jpg\");\n/* eslint-disable max-len */\n\n\n\n\nconst loadwrapperDiv = () => {\n  // create div to wrap the content and the img\n  const wrapperDiv = document.createElement('div');\n  wrapperDiv.classList = [\n    'flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-10 bg-green-300 rounded-xl p-3',\n  ];\n  // create div for contentwrapping and an img element\n  const content = document.createElement('div');\n  const greetingImg = document.createElement('img');\n  greetingImg.src = _img_mamzafinGood1_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  greetingImg.classList = ['w-3/4 self-center justify-self-center rounded-3xl'];\n  // create content Text\n  const header = document.createElement('h2');\n  header.innerText = 'Welcome to Mamzafin Cafe!';\n  header.classList = ['text-3xl pt-0 pb-2'];\n  const text = document.createElement('p');\n  // eslint-disable-next-line max-len, quotes\n  text.innerText =\n    // eslint-disable-next-line max-len\n    'Welcome to Mamzafin, the coziest cafe in Chiang Mai\\'s Nimman district. Enjoy our handpicked coffees and freshly cooked snacks made with love. Join us in celebrating Chiang Mai\\'s famous coffee culture. Mamzafin Cafe: where good vibes and great flavors meet.';\n  text.classList = ['text-sm md:text-xl'];\n\n  // nest the Header and Text into the Content Text div\n  content.appendChild(header);\n  content.appendChild(text);\n  // nest the content and img in the wrapperDiv\n  wrapperDiv.appendChild(content);\n  wrapperDiv.appendChild(greetingImg);\n  return wrapperDiv;\n};\n\nconst loadApproach = () => {\n  // create div to wrap content and img\n  const wrapperDiv = document.createElement('div');\n  wrapperDiv.classList = [\n    'flex flex-col-reverse gap-3 md:grid grid-cols-2 md:gap-10 bg-green-300 rounded-xl p-3',\n  ];\n  // create img\n  const approachImage = document.createElement('img');\n  approachImage.src = _img_mamzafinInside_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  approachImage.classList = [\n    'w-3/4 self-center justify-self-center rounded-3xl'];\n  // create div to wrap content\n  const content = document.createElement('div');\n  const header = document.createElement('h2');\n  header.innerText = 'Our Approach';\n  header.classList = ['text-3xl pt-0 pb-2'];\n  // create paragraph for the text\n  const text = document.createElement('section');\n  text.innerText =\n    'At Mamzafin, we believe in creating a laid-back and cozy atmosphere that feels like home. Our approach is all about embracing the natural world around us. Step into our cafe and you\\'ll find yourself surrounded by lush greenery, bringing the beauty of nature indoors. We strive to make every visit an experience that\\'s relaxed, comfortable, and inviting. So come on over, kick back, and enjoy the perfect blend of casual charm and natural serenity at Mamzafin Cafe.';\n  text.classList = ['text-sm md:text-xl'];\n  // add text to content\n  content.appendChild(header);\n  content.appendChild(text);\n  // add content and img to wrapperDiv\n  wrapperDiv.appendChild(approachImage);\n  wrapperDiv.appendChild(content);\n  return wrapperDiv;\n};\n\nconst loadIngredients = () => {\n  const wrapperDiv = document.createElement('div');\n  wrapperDiv.classList = [\n    'flex flex-col gap-3 md:grid grid-cols-2 md:gap-10 bg-green-300 rounded-xl p-3',\n  ];\n  // create img\n  const ingredientImage = document.createElement('img');\n  ingredientImage.src = _img_sirup_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  ingredientImage.classList = [\n    'w-3/4 self-center justify-self-center rounded-3xl',\n  ];\n  // create div to wrap content\n  const content = document.createElement('div');\n  const header = document.createElement('h2');\n  header.classList = ['text-3xl pt-0 pb-2'];\n  header.innerText = 'Finest Ingredients';\n  const text = document.createElement('section');\n  text.classList = ['text-sm md:text-xl'];\n  text.innerText = 'At our cafe, we\\'re passionate about using the finest, high-quality ingredients in every cup of coffee, beverage, and snack we serve. From carefully sourced beans to the fresh, natural elements we infuse into our recipes, we believe in delivering exceptional flavors that tantalize your taste buds. Indulge in the rich aromas and delectable flavors that come from our commitment to using only the best ingredients. In our cafe, we take pride in offering you a truly remarkable culinary experience.';\n  content.appendChild(header);\n  content.appendChild(text);\n  // add content and img to wrapperDiv\n  wrapperDiv.appendChild(content);\n  wrapperDiv.appendChild(ingredientImage);\n  return wrapperDiv;\n};\n\nconst loadHome = () => {\n  const home = document.createElement('div');\n  home.classList = [\n    'h-full bg-gray-100 w-screen p-3 md:pr-20 md:pl-20 md:pt-10 md:pb-10 flex flex-col gap-10',\n  ];\n  home.id = 'actualContent';\n  home.appendChild(loadwrapperDiv());\n  home.appendChild(loadApproach());\n  home.appendChild(loadIngredients());\n  return home;\n};\n\n\n\n\n//# sourceURL=webpack://mamzafin-homepage/./src/homeLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _homeLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeLoad */ \"./src/homeLoad.js\");\n/* harmony import */ var _menuLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuLoad */ \"./src/menuLoad.js\");\n/* harmony import */ var _contactLoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactLoad */ \"./src/contactLoad.js\");\n\n\n\n\n\nconst content = document.getElementById('content');\nconst contentToAdd = (0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.loadPage)();\n\nfor (let i = 0; i < contentToAdd.length; i++) {\n  content.appendChild(contentToAdd[i]);\n}\n\nconst home = document.getElementById('home');\nconst menu = document.getElementById('menu');\nconst contact = document.getElementById('contact');\n\nconst deleteOldContent = () => {\n  const oldContent = document.getElementById('actualContent');\n  oldContent.remove();\n};\n\nhome.addEventListener('click', () => {\n  deleteOldContent();\n  const main = document.getElementById('main');\n  main.appendChild((0,_homeLoad__WEBPACK_IMPORTED_MODULE_2__.loadHome)());\n});\n\nmenu.addEventListener('click', () => {\n  deleteOldContent();\n  const main = document.getElementById('main');\n  main.appendChild((0,_menuLoad__WEBPACK_IMPORTED_MODULE_3__.loadMenu)());\n});\n\ncontact.addEventListener('click', () => {\n  deleteOldContent();\n  const main = document.getElementById('main');\n  main.appendChild((0,_contactLoad__WEBPACK_IMPORTED_MODULE_4__.loadContact)());\n});\n\n\n\n\n//# sourceURL=webpack://mamzafin-homepage/./src/index.js?");

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _img_americanoBlack_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/americanoBlack.jpg */ \"./src/img/americanoBlack.jpg\");\n/* harmony import */ var _img_machiato_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/machiato.jpg */ \"./src/img/machiato.jpg\");\n/* harmony import */ var _img_espresso_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/espresso.jpg */ \"./src/img/espresso.jpg\");\n/* harmony import */ var _img_cafeAuLait_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cafeAuLait.jpg */ \"./src/img/cafeAuLait.jpg\");\n/* harmony import */ var _img_orangeAmericano_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/orangeAmericano.jpg */ \"./src/img/orangeAmericano.jpg\");\n/* harmony import */ var _img_whiteMachiato_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/whiteMachiato.jpg */ \"./src/img/whiteMachiato.jpg\");\n/* harmony import */ var _img_thaiTea_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/thaiTea.jpg */ \"./src/img/thaiTea.jpg\");\n/* eslint-disable max-len */\n\n\n\n\n\n\n\n\nconst loadMenuItem = (productName, productPrice, productImage) => {\n  const wrapperDiv = document.createElement('div');\n  wrapperDiv.classList = [\n    'grid grid-cols-2 bg-green-300 p-2 rounded-2xl justify-center items-center',\n  ];\n  // create div to store product and price\n  const content = document.createElement('div');\n  content.classList = ['flex flex-col items-center gap-5'];\n  // create productName element\n  const product = document.createElement('h3');\n  product.innerHTML = productName;\n  product.classList = ['text-2xl'];\n  // create price element\n  const price = document.createElement('section');\n  price.classList = ['text-xl'];\n  price.innerHTML = productPrice;\n  content.appendChild(product);\n  content.appendChild(price);\n  // create image\n  const image = document.createElement('img');\n  image.src = productImage;\n  image.classList = ['h-100 rounded-2xl justify-self-end'];\n  wrapperDiv.appendChild(content);\n  wrapperDiv.appendChild(image);\n  return wrapperDiv;\n};\n\nconst loadMenu = () => {\n  const menu = document.createElement('div');\n  menu.classList = [\n    'h-full bg-gray-100 w-screen p-3 md:pr-20 md:pl-20 md:pt-10 md:pb-10 flex flex-col gap-3 justify-start items-center lg:grid lg:grid-cols-2 grid-rows-auto xl:grid xl:grid-cols-3',\n  ];\n  menu.id = 'actualContent';\n  menu.appendChild(loadMenuItem('Americano', '50 Baht', _img_americanoBlack_jpg__WEBPACK_IMPORTED_MODULE_0__));\n  menu.appendChild(loadMenuItem('Macchiato', '60 Baht', _img_machiato_jpg__WEBPACK_IMPORTED_MODULE_1__));\n  menu.appendChild(loadMenuItem('Espresso', '45 Baht', _img_espresso_jpg__WEBPACK_IMPORTED_MODULE_2__));\n  menu.appendChild(loadMenuItem('Cafe au Lait', '55 Baht', _img_cafeAuLait_jpg__WEBPACK_IMPORTED_MODULE_3__));\n  menu.appendChild(loadMenuItem('Orange Americano', '60 Baht', _img_orangeAmericano_jpg__WEBPACK_IMPORTED_MODULE_4__));\n  menu.appendChild(loadMenuItem('White Macchiato', '65 Baht', _img_whiteMachiato_jpg__WEBPACK_IMPORTED_MODULE_5__));\n  menu.appendChild(loadMenuItem('Thai Tea', '50 Baht', _img_thaiTea_jpg__WEBPACK_IMPORTED_MODULE_6__));\n  return menu;\n};\n\n\n\n\n//# sourceURL=webpack://mamzafin-homepage/./src/menuLoad.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _img_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.jpeg */ \"./src/img/logo.jpeg\");\n/* harmony import */ var _homeLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeLoad.js */ \"./src/homeLoad.js\");\n\n\n\nconst loadHeaderContent = () => {\n  const helperDiv = document.createElement('div');\n  const heading = document.createElement('h2');\n  heading.innerText = 'Mamzafin';\n  heading.classList = ['text-center self-center font-bold text-3xl'];\n  const image = new Image();\n  image.src = _img_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  image.classList = ['h-full mix-blend-multiply ml-auto mr-3'];\n  return {helperDiv, heading, image};\n};\n\nconst loadHeader = () => {\n  const header = document.createElement('header');\n  // eslint-disable-next-line max-len\n  header.classList = ['bg-green-600 h-12 w-screen grid grid-cols-3 grid-rows-1 justify-center pr-2 pl-2'];\n  const headerContent = loadHeaderContent();\n  // eslint-disable-next-line no-unused-vars\n  for (const [key, value] of Object.entries(headerContent)) {\n    header.appendChild(value);\n  }\n  return header;\n};\n\nconst loadMainTabContent = () => {\n  const home = document.createElement('div');\n  home.innerText = 'Home';\n  home.id = 'home';\n  const menu = document.createElement('div');\n  menu.innerText = 'Menu';\n  menu.id = 'menu';\n  const contact = document.createElement('div');\n  contact.innerText = 'Contact';\n  contact.id = 'contact';\n  return {home, menu, contact};\n};\n\nconst loadMainTab = () => {\n  const mainTab = document.createElement('nav');\n  // eslint-disable-next-line max-len\n  mainTab.classList = ['h-10 bg-green-200 flex flex-column justify-around items-start'];\n  const mainTabContent = loadMainTabContent();\n  // eslint-disable-next-line no-unused-vars\n  for (const [key, value] of Object.entries(mainTabContent)) {\n    // eslint-disable-next-line max-len\n    value.classList = ['text-xl w-20 text-center mt-0 rounded-b-md border-solid border-b-2 border-b-black hover:bg-green-400 active:bg-green-600 shadow-xl active:shadow-2xl'];\n    mainTab.appendChild(value);\n  }\n  return mainTab;\n};\n\nconst loadMain = () => {\n  const main = document.createElement('main');\n  main.classList = ['w-screen flex-grow pb-5'];\n  main.id = 'main';\n  main.appendChild(loadMainTab());\n  main.appendChild((0,_homeLoad_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)());\n  return main;\n};\n\nconst loadFooterContent = () => {\n  const text1 = document.createElement('p');\n  const text2 = document.createElement('p');\n  text1.innerText = 'A Project done by JanPomelo';\n  text2.innerText = 'All Rights Reserved';\n  return {text1, text2};\n};\n\nconst loadFooter = () => {\n  const footer = document.createElement('footer');\n  footer.classList = ['bg-green-600 h-12 w-screen text-center'];\n  const footerContent = loadFooterContent();\n  // eslint-disable-next-line no-unused-vars\n  for (const [key, value] of Object.entries(footerContent)) {\n    footer.appendChild(value);\n  }\n  return footer;\n};\n\nconst loadPage = () => {\n  return [loadHeader(), loadMain(), loadFooter()];\n};\n\n\n\n\n//# sourceURL=webpack://mamzafin-homepage/./src/pageLoad.js?");

/***/ }),

/***/ "./src/img/americanoBlack.jpg":
/*!************************************!*\
  !*** ./src/img/americanoBlack.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe16947e35bf7610efd7.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/americanoBlack.jpg?");

/***/ }),

/***/ "./src/img/cafeAuLait.jpg":
/*!********************************!*\
  !*** ./src/img/cafeAuLait.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39ddeadb6dd95b03df83.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/cafeAuLait.jpg?");

/***/ }),

/***/ "./src/img/espresso.jpg":
/*!******************************!*\
  !*** ./src/img/espresso.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"602540526d8687c8d466.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/espresso.jpg?");

/***/ }),

/***/ "./src/img/logo.jpeg":
/*!***************************!*\
  !*** ./src/img/logo.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1881ce91d6d00b1f0ca4.jpeg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/logo.jpeg?");

/***/ }),

/***/ "./src/img/machiato.jpg":
/*!******************************!*\
  !*** ./src/img/machiato.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ee06a54c55e6988ae71e.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/machiato.jpg?");

/***/ }),

/***/ "./src/img/mamzafinGood1.jpg":
/*!***********************************!*\
  !*** ./src/img/mamzafinGood1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a1c224f6c876030b240.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/mamzafinGood1.jpg?");

/***/ }),

/***/ "./src/img/mamzafinInside.jpg":
/*!************************************!*\
  !*** ./src/img/mamzafinInside.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e282453b3d13f926c44c.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/mamzafinInside.jpg?");

/***/ }),

/***/ "./src/img/maps.png":
/*!**************************!*\
  !*** ./src/img/maps.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c73d9b17856d69d882d4.png\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/maps.png?");

/***/ }),

/***/ "./src/img/orangeAmericano.jpg":
/*!*************************************!*\
  !*** ./src/img/orangeAmericano.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8bc9a1440de6e526e3b.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/orangeAmericano.jpg?");

/***/ }),

/***/ "./src/img/sirup.jpg":
/*!***************************!*\
  !*** ./src/img/sirup.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1590f41ea883183ca8ef.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/sirup.jpg?");

/***/ }),

/***/ "./src/img/thaiTea.jpg":
/*!*****************************!*\
  !*** ./src/img/thaiTea.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db0b549f037768275e9f.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/thaiTea.jpg?");

/***/ }),

/***/ "./src/img/whiteMachiato.jpg":
/*!***********************************!*\
  !*** ./src/img/whiteMachiato.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"69b7a8b8b22bd3d42d43.jpg\";\n\n//# sourceURL=webpack://mamzafin-homepage/./src/img/whiteMachiato.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;