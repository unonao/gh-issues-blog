(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{2015:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[issueNumber]",function(){return __webpack_require__(4442)}])},1030:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Time}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),date_fns__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8582);function Time(param){let{dateTime}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("time",{dateTime:dateTime,title:dateTime,className:"block text-[.8rem] text-gray-500 dark:text-gray-400",children:(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.Z)(new Date(dateTime),"yyyy-MM-dd")})}},4442:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),next_head__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9008),next_head__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__),_components_Time__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1030);let ShowArticle=param=>{let{issue,issueComments}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"divide-y divide-gray-300 dark:divide-gray-700",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_head__WEBPACK_IMPORTED_MODULE_1___default(),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:issue.title})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article",{className:"markdown",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Time__WEBPACK_IMPORTED_MODULE_3__.Z,{dateTime:issue.created_at}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:issue.title})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("aside",{className:"block text-[.8rem] text-gray-500 dark:text-gray-400",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Posted by\xa0",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{href:issue.user.html_url,children:issue.user.login}),"\xa0at\xa0",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{href:issue.html_url,children:"#".concat(issue.number)}),"."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{dangerouslySetInnerHTML:{__html:issue.bodyHTML}})]}),issueComments.map(issueComment=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("article",{className:"markdown",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{dangerouslySetInnerHTML:{__html:issueComment.bodyHTML}})},issueComment.id))]})};var __N_SSG=!0;__webpack_exports__.default=ShowArticle}},function(__webpack_require__){__webpack_require__.O(0,[582,774,888,179],function(){return __webpack_require__(__webpack_require__.s=2015)}),_N_E=__webpack_require__.O()}]);