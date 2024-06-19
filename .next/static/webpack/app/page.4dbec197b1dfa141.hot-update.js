"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../AppData/Roaming/npm/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../AppData/Roaming/npm/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// Import required modules from Next.js and React\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Import required modules from Next.js and React\n\n\n// Export the Home component as default\nfunction Home() {\n    _s();\n    // State hooks for users list, page number, loading state\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const totalPages = 10; // Fixed number of pages\n    // Effect hook to fetch users when page changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchUsers(page);\n    }, [\n        page\n    ]);\n    // Function to fetch users from API\n    const fetchUsers = async (pageNum)=>{\n        setLoading(true);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`https://give-me-users-forever.vercel.app/api/users/${pageNum}/next`);\n            // Simulate delay for animation effect\n            setTimeout(()=>{\n                setUsers(response.data.users);\n                setLoading(false);\n            }, 1000); // Adjust delay time as needed\n        } catch (error) {\n            console.error(\"Error fetching users:\", error);\n            setLoading(false);\n        }\n    };\n    // Function to handle next page navigation\n    const handleNext = ()=>{\n        if (page < totalPages) setPage(page + 1);\n    };\n    // Function to handle previous page navigation\n    const handlePrev = ()=>{\n        if (page > 1) setPage(page - 1);\n    };\n    // Function to handle clicking on specific page number\n    const handlePageClick = (pageNum)=>{\n        setPage(pageNum);\n    };\n    // JSX rendering for the component\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black min-h-screen text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto py-12 text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-[50px] font-semibold\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 animate-pulse\",\n                        children: \"Users List\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    role: \"status\",\n                    className: \"flex justify-center items-center mt-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            \"aria-hidden\": \"true\",\n                            className: \"w-8 h-8 animate-spin fill-blue-600\",\n                            viewBox: \"0 0 100 101\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Loading...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8\",\n                            children: users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-[#333] p-4 rounded-lg shadow text-white transform transition-transform duration-300 hover:scale-105\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"opacity-0 group-hover:opacity-100 transition-opacity duration-300\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"ID:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 21\n                                                }, this),\n                                                \" \",\n                                                user.ID\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"opacity-0 group-hover:opacity-100 transition-opacity duration-300\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"Name:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 21\n                                                }, this),\n                                                \" \",\n                                                user.FirstNameLastName\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"opacity-0 group-hover:opacity-100 transition-opacity duration-300\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"Email:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 21\n                                                }, this),\n                                                \" \",\n                                                user.EmailAddress\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"opacity-0 group-hover:opacity-100 transition-opacity duration-300\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"Phone:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 21\n                                                }, this),\n                                                \" \",\n                                                user.Phone\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, user.ID, true, {\n                                    fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            \"aria-label\": \"Page navigation example\",\n                            className: \"flex justify-center mt-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"inline-flex -space-x-px text-sm mt-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handlePrev,\n                                            className: \"flex items-center justify-center px-4 h-10 leading-tight text-white bg-gray-600 border border-gray-300 rounded-l-lg hover:bg-gray-700 hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white\",\n                                            disabled: page === 1,\n                                            children: \"Previous\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 112,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 17\n                                    }, this),\n                                    Array.from({\n                                        length: totalPages\n                                    }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handlePageClick(index + 1),\n                                                className: `flex items-center justify-center px-4 h-10 leading-tight ${page === index + 1 ? \"text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white\" : \"text-white bg-gray-600 border border-gray-300 hover:bg-gray-700 hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white\"}`,\n                                                children: index + 1\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 122,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 19\n                                        }, this)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleNext,\n                                            className: \"flex items-center justify-center px-4 h-10 leading-tight text-white bg-gray-600 border border-gray-300 rounded-r-lg hover:bg-gray-700 hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white\",\n                                            disabled: page === totalPages,\n                                            children: \"Next\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 135,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shubh\\\\Downloads\\\\my-next-tailwind-project-master\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"YAKFgSdJ1EfHh3ppP/qfF0IQm5Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7b0NBSUYwQyxNQUFNQyxJQUFJLENBQUM7d0NBQUVDLFFBQVF4QztvQ0FBVyxHQUFHLENBQUN5QyxHQUFHaEIsc0JBQ3RDLDhEQUFDQztzREFDQyw0RUFBQ1M7Z0RBQ0NDLFNBQVMsSUFBTXpCLGdCQUFnQmMsUUFBUTtnREFDdkNaLFdBQVcsQ0FBQyx5REFBeUQsRUFDbkVqQixTQUFTNkIsUUFBUSxJQUNiLGdKQUNBLDRMQUNMLENBQUM7MERBRURBLFFBQVE7Ozs7OzsyQ0FUSkE7Ozs7O2tEQWFYLDhEQUFDQztrREFDQyw0RUFBQ1M7NENBQ0NDLFNBQVMzQjs0Q0FDVEksV0FBVTs0Q0FDVndCLFVBQVV6QyxTQUFTSTtzREFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVduQjtHQW5Jd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgcmVxdWlyZWQgbW9kdWxlcyBmcm9tIE5leHQuanMgYW5kIFJlYWN0XG5cInVzZSBjbGllbnRcIlxuLy8gSW1wb3J0IHJlcXVpcmVkIG1vZHVsZXMgZnJvbSBOZXh0LmpzIGFuZCBSZWFjdFxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIERlZmluZSB0aGUgVXNlciBpbnRlcmZhY2VcbmludGVyZmFjZSBVc2VyIHtcbiAgSUQ6IHN0cmluZztcbiAgSm9iVGl0bGU6IHN0cmluZztcbiAgRW1haWxBZGRyZXNzOiBzdHJpbmc7XG4gIEZpcnN0TmFtZUxhc3ROYW1lOiBzdHJpbmc7XG4gIEVtYWlsOiBzdHJpbmc7XG4gIFBob25lOiBzdHJpbmc7XG4gIENvbXBhbnk6IHN0cmluZztcbn1cblxuLy8gRXhwb3J0IHRoZSBIb21lIGNvbXBvbmVudCBhcyBkZWZhdWx0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBTdGF0ZSBob29rcyBmb3IgdXNlcnMgbGlzdCwgcGFnZSBudW1iZXIsIGxvYWRpbmcgc3RhdGVcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZTxVc2VyW10+KFtdKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCB0b3RhbFBhZ2VzID0gMTA7IC8vIEZpeGVkIG51bWJlciBvZiBwYWdlc1xuXG4gIC8vIEVmZmVjdCBob29rIHRvIGZldGNoIHVzZXJzIHdoZW4gcGFnZSBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VycyhwYWdlKTtcbiAgfSwgW3BhZ2VdKTtcblxuICAvLyBGdW5jdGlvbiB0byBmZXRjaCB1c2VycyBmcm9tIEFQSVxuICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKHBhZ2VOdW06IG51bWJlcikgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9naXZlLW1lLXVzZXJzLWZvcmV2ZXIudmVyY2VsLmFwcC9hcGkvdXNlcnMvJHtwYWdlTnVtfS9uZXh0YFxuICAgICAgKTtcbiAgICAgIC8vIFNpbXVsYXRlIGRlbGF5IGZvciBhbmltYXRpb24gZWZmZWN0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YS51c2Vycyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSwgMTAwMCk7IC8vIEFkanVzdCBkZWxheSB0aW1lIGFzIG5lZWRlZFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyczonLCBlcnJvcik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIG5leHQgcGFnZSBuYXZpZ2F0aW9uXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgaWYgKHBhZ2UgPCB0b3RhbFBhZ2VzKSBzZXRQYWdlKHBhZ2UgKyAxKTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgcHJldmlvdXMgcGFnZSBuYXZpZ2F0aW9uXG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgaWYgKHBhZ2UgPiAxKSBzZXRQYWdlKHBhZ2UgLSAxKTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2xpY2tpbmcgb24gc3BlY2lmaWMgcGFnZSBudW1iZXJcbiAgY29uc3QgaGFuZGxlUGFnZUNsaWNrID0gKHBhZ2VOdW06IG51bWJlcikgPT4ge1xuICAgIHNldFBhZ2UocGFnZU51bSk7XG4gIH07XG5cbiAgLy8gSlNYIHJlbmRlcmluZyBmb3IgdGhlIGNvbXBvbmVudFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgbWluLWgtc2NyZWVuIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWzUwcHhdIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTUwMCB0by1yZWQtNTAwIGFuaW1hdGUtcHVsc2VcIj5cbiAgICAgICAgICAgIFVzZXJzIExpc3RcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHtsb2FkaW5nID8gKCAvLyBDb25kaXRpb25hbGx5IHJlbmRlciBsb2FkaW5nIHNwaW5uZXJcbiAgICAgICAgICA8ZGl2IHJvbGU9XCJzdGF0dXNcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC04XCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggYW5pbWF0ZS1zcGluIGZpbGwtYmx1ZS02MDBcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogU1ZHIHBhdGggZm9yIGxvYWRpbmcgc3Bpbm5lciAqL31cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoIC8vIFJlbmRlciB1c2VyIGxpc3Qgd2hlbiBub3QgbG9hZGluZ1xuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtNiBtdC04XCI+XG4gICAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5JRH0gY2xhc3NOYW1lPVwiYmctWyMzMzNdIHAtNCByb3VuZGVkLWxnIHNoYWRvdyB0ZXh0LXdoaXRlIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPklEOjwvc3Ryb25nPiB7dXNlci5JRH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmFtZTo8L3N0cm9uZz4ge3VzZXIuRmlyc3ROYW1lTGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkVtYWlsOjwvc3Ryb25nPiB7dXNlci5FbWFpbEFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlBob25lOjwvc3Ryb25nPiB7dXNlci5QaG9uZX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8bmF2XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCAtc3BhY2UteC1weCB0ZXh0LXNtIG10LThcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgaC0xMCBsZWFkaW5nLXRpZ2h0IHRleHQtd2hpdGUgYmctZ3JheS02MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWwtbGcgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTEwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogdG90YWxQYWdlcyB9LCAoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDbGljayhpbmRleCArIDEpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgaC0xMCBsZWFkaW5nLXRpZ2h0ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlID09PSBpbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1ibHVlLTYwMCBiZy1ibHVlLTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctYmx1ZS0xMDAgaG92ZXI6dGV4dC1ibHVlLTcwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC13aGl0ZSBiZy1ncmF5LTYwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IGgtMTAgbGVhZGluZy10aWdodCB0ZXh0LXdoaXRlIGJnLWdyYXktNjAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1yLWxnIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gdG90YWxQYWdlc31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkhvbWUiLCJ1c2VycyIsInNldFVzZXJzIiwicGFnZSIsInNldFBhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvdGFsUGFnZXMiLCJmZXRjaFVzZXJzIiwicGFnZU51bSIsInJlc3BvbnNlIiwiZ2V0Iiwic2V0VGltZW91dCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldiIsImhhbmRsZVBhZ2VDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsInJvbGUiLCJzdmciLCJhcmlhLWhpZGRlbiIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJ1bCIsIm1hcCIsInVzZXIiLCJpbmRleCIsImxpIiwicCIsInN0cm9uZyIsIklEIiwiRmlyc3ROYW1lTGFzdE5hbWUiLCJFbWFpbEFkZHJlc3MiLCJQaG9uZSIsIm5hdiIsImFyaWEtbGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});