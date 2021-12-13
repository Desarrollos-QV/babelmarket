(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-login-login-module"], {
  /***/
  "./node_modules/@firebase/firestore/dist/index.cjs.js":
  /*!************************************************************!*\
    !*** ./node_modules/@firebase/firestore/dist/index.cjs.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var t = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"),
        e = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js"),
        n = __webpack_require__(
    /*! @firebase/logger */
    "./node_modules/@firebase/logger/dist/index.esm.js"),
        r = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js"),
        i = __webpack_require__(
    /*! @firebase/webchannel-wrapper */
    "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js"),
        o = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");

    function s(t) {
      return t && "object" == typeof t && "default" in t ? t : {
        default: t
      };
    }

    var u = s(e),
        a = {
      // Causes are copied from:
      // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h

      /** Not an error; returned on success. */
      OK: "ok",

      /** The operation was cancelled (typically by the caller). */
      CANCELLED: "cancelled",

      /** Unknown error or an error from a different error domain. */
      UNKNOWN: "unknown",

      /**
       * Client specified an invalid argument. Note that this differs from
       * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
       * problematic regardless of the state of the system (e.g., a malformed file
       * name).
       */
      INVALID_ARGUMENT: "invalid-argument",

      /**
       * Deadline expired before operation could complete. For operations that
       * change the state of the system, this error may be returned even if the
       * operation has completed successfully. For example, a successful response
       * from a server could have been delayed long enough for the deadline to
       * expire.
       */
      DEADLINE_EXCEEDED: "deadline-exceeded",

      /** Some requested entity (e.g., file or directory) was not found. */
      NOT_FOUND: "not-found",

      /**
       * Some entity that we attempted to create (e.g., file or directory) already
       * exists.
       */
      ALREADY_EXISTS: "already-exists",

      /**
       * The caller does not have permission to execute the specified operation.
       * PERMISSION_DENIED must not be used for rejections caused by exhausting
       * some resource (use RESOURCE_EXHAUSTED instead for those errors).
       * PERMISSION_DENIED must not be used if the caller can not be identified
       * (use UNAUTHENTICATED instead for those errors).
       */
      PERMISSION_DENIED: "permission-denied",

      /**
       * The request does not have valid authentication credentials for the
       * operation.
       */
      UNAUTHENTICATED: "unauthenticated",

      /**
       * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
       * entire file system is out of space.
       */
      RESOURCE_EXHAUSTED: "resource-exhausted",

      /**
       * Operation was rejected because the system is not in a state required for
       * the operation's execution. For example, directory to be deleted may be
       * non-empty, an rmdir operation is applied to a non-directory, etc.
       *
       * A litmus test that may help a service implementor in deciding
       * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
       *  (a) Use UNAVAILABLE if the client can retry just the failing call.
       *  (b) Use ABORTED if the client should retry at a higher-level
       *      (e.g., restarting a read-modify-write sequence).
       *  (c) Use FAILED_PRECONDITION if the client should not retry until
       *      the system state has been explicitly fixed. E.g., if an "rmdir"
       *      fails because the directory is non-empty, FAILED_PRECONDITION
       *      should be returned since the client should not retry unless
       *      they have first fixed up the directory by deleting files from it.
       *  (d) Use FAILED_PRECONDITION if the client performs conditional
       *      REST Get/Update/Delete on a resource and the resource on the
       *      server does not match the condition. E.g., conflicting
       *      read-modify-write on the same resource.
       */
      FAILED_PRECONDITION: "failed-precondition",

      /**
       * The operation was aborted, typically due to a concurrency issue like
       * sequencer check failures, transaction aborts, etc.
       *
       * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
       * and UNAVAILABLE.
       */
      ABORTED: "aborted",

      /**
       * Operation was attempted past the valid range. E.g., seeking or reading
       * past end of file.
       *
       * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
       * if the system state changes. For example, a 32-bit file system will
       * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
       * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
       * an offset past the current file size.
       *
       * There is a fair bit of overlap between FAILED_PRECONDITION and
       * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
       * when it applies so that callers who are iterating through a space can
       * easily look for an OUT_OF_RANGE error to detect when they are done.
       */
      OUT_OF_RANGE: "out-of-range",

      /** Operation is not implemented or not supported/enabled in this service. */
      UNIMPLEMENTED: "unimplemented",

      /**
       * Internal errors. Means some invariants expected by underlying System has
       * been broken. If you see one of these errors, Something is very broken.
       */
      INTERNAL: "internal",

      /**
       * The service is currently unavailable. This is a most likely a transient
       * condition and may be corrected by retrying with a backoff.
       *
       * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
       * and UNAVAILABLE.
       */
      UNAVAILABLE: "unavailable",

      /** Unrecoverable data loss or corruption. */
      DATA_LOSS: "data-loss"
    },
        c =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function () {
          return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
      }

      return t.__extends(n, e), n;
    }(Error),
        h = new n.Logger("@firebase/firestore");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Converts a Base64 encoded string to a binary string. */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Helper methods are needed because variables can't be exported as read/write


    function f() {
      return h.logLevel;
    }
    /**
     * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
     *
     * @param logLevel
     *   The verbosity you set for activity and error logging. Can be any of
     *   the following values:
     *
     *   <ul>
     *     <li>`debug` for the most verbose logging level, primarily for
     *     debugging.</li>
     *     <li>`error` to log errors only.</li>
     *     <li><code>`silent` to turn off logging.</li>
     *   </ul>
     */


    function l(e) {
      for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];

      if (h.logLevel <= n.LogLevel.DEBUG) {
        var o = r.map(v);
        h.debug.apply(h, t.__spreadArrays(["Firestore (7.24.0): " + e], o));
      }
    }

    function p(e) {
      for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];

      if (h.logLevel <= n.LogLevel.ERROR) {
        var o = r.map(v);
        h.error.apply(h, t.__spreadArrays(["Firestore (7.24.0): " + e], o));
      }
    }

    function d(e) {
      for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];

      if (h.logLevel <= n.LogLevel.WARN) {
        var o = r.map(v);
        h.warn.apply(h, t.__spreadArrays(["Firestore (7.24.0): " + e], o));
      }
    }
    /**
     * Converts an additional log parameter to a string representation.
     */


    function v(t) {
      if ("string" == typeof t) return t;

      try {
        return e = t, JSON.stringify(e);
      } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
      }
      /**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

      /** Formats an object as a JSON string, suitable for logging. */


      var e;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Unconditionally fails, throwing an Error with the given message.
     * Messages are stripped in production builds.
     *
     * Returns `never` and can be used in expressions:
     * @example
     * let futureVar = fail('not implemented yet');
     */


    function y(t) {
      void 0 === t && (t = "Unexpected state"); // Log the failure in addition to throw an exception, just in case the
      // exception is swallowed.

      var e = "FIRESTORE (7.24.0) INTERNAL ASSERTION FAILED: " + t; // NOTE: We don't use FirestoreError here because these are internal failures
      // that cannot be handled by the user. (Also it would create a circular
      // dependency between the error and assert modules which doesn't work.)

      throw p(e), new Error(e)
      /**
      * Fails if the given assertion condition is false, throwing an Error with the
      * given message if it did.
      *
      * Messages are stripped in production builds.
      */
      ;
    }

    function g(t, e) {
      t || y();
    }
    /**
     * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
     * instance of `T` before casting.
     */


    function m(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
      return t;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function w(t) {
      var e = 0;

      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;

      return e;
    }

    function _(t, e) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
    }

    function b(t) {
      for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;

      return !0;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Path represents an ordered sequence of string segments.
     */


    var I =
    /** @class */
    function () {
      function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && y(), void 0 === n ? n = t.length - e : n > t.length - e && y(), this.segments = t, this.offset = e, this.t = n;
      }

      return Object.defineProperty(t.prototype, "length", {
        get: function () {
          return this.t;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (e) {
        return 0 === t.i(this, e);
      }, t.prototype.child = function (e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach(function (t) {
          n.push(t);
        }) : n.push(e), this.o(n);
      },
      /** The index of one past the last segment of the path. */
      t.prototype.limit = function () {
        return this.offset + this.length;
      }, t.prototype.u = function (t) {
        return t = void 0 === t ? 1 : t, this.o(this.segments, this.offset + t, this.length - t);
      }, t.prototype.h = function () {
        return this.o(this.segments, this.offset, this.length - 1);
      }, t.prototype.l = function () {
        return this.segments[this.offset];
      }, t.prototype._ = function () {
        return this.get(this.length - 1);
      }, t.prototype.get = function (t) {
        return this.segments[this.offset + t];
      }, t.prototype.m = function () {
        return 0 === this.length;
      }, t.prototype.T = function (t) {
        if (t.length < this.length) return !1;

        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;

        return !0;
      }, t.prototype.I = function (t) {
        if (this.length + 1 !== t.length) return !1;

        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;

        return !0;
      }, t.prototype.forEach = function (t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
      }, t.prototype.A = function () {
        return this.segments.slice(this.offset, this.limit());
      }, t.i = function (t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
          var i = t.get(r),
              o = e.get(r);
          if (i < o) return -1;
          if (i > o) return 1;
        }

        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
      }, t;
    }(),
        E =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n.prototype.o = function (t, e, r) {
        return new n(t, e, r);
      }, n.prototype.R = function () {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.A().join("/");
      }, n.prototype.toString = function () {
        return this.R();
      },
      /**
       * Creates a resource path from the given slash-delimited string. If multiple
       * arguments are provided, all components are combined. Leading and trailing
       * slashes from all components are ignored.
       */
      n.g = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).


        for (var r = [], i = 0, o = t; i < o.length; i++) {
          var s = o[i];
          if (s.indexOf("//") >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them."); // Strip leading and traling slashed.

          r.push.apply(r, s.split("/").filter(function (t) {
            return t.length > 0;
          }));
        }

        return new n(r);
      }, n.P = function () {
        return new n([]);
      }, n;
    }(I),
        T = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
        N =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n.prototype.o = function (t, e, r) {
        return new n(t, e, r);
      },
      /**
       * Returns true if the string could be used as a segment in a field path
       * without escaping.
       */
      n.V = function (t) {
        return T.test(t);
      }, n.prototype.R = function () {
        return this.A().map(function (t) {
          return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.V(t) || (t = "`" + t + "`"), t;
        }).join(".");
      }, n.prototype.toString = function () {
        return this.R();
      },
      /**
       * Returns true if this field references the key of a document.
       */
      n.prototype.p = function () {
        return 1 === this.length && "__name__" === this.get(0);
      },
      /**
       * The field designating the key of a document.
       */
      n.v = function () {
        return new n(["__name__"]);
      },
      /**
       * Parses a field string from the given server-formatted string.
       *
       * - Splitting the empty string is not allowed (for now at least).
       * - Empty segments within the string (e.g. if there are two consecutive
       *   separators) are not allowed.
       *
       * TODO(b/37244157): we should make this more strict. Right now, it allows
       * non-identifier path components, even if they aren't escaped.
       */
      n.S = function (t) {
        for (var e = [], r = "", i = 0, o = function () {
          if (0 === r.length) throw new c(a.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
          e.push(r), r = "";
        }, s = !1; i < t.length;) {
          var u = t[i];

          if ("\\" === u) {
            if (i + 1 === t.length) throw new c(a.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
            var h = t[i + 1];
            if ("\\" !== h && "." !== h && "`" !== h) throw new c(a.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
            r += h, i += 2;
          } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }

        if (o(), s) throw new c(a.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
      }, n.P = function () {
        return new n([]);
      }, n;
    }(I),
        A =
    /** @class */
    function () {
      function t(t) {
        this.path = t;
      }

      return t.D = function (e) {
        return new t(E.g(e));
      }, t.C = function (e) {
        return new t(E.g(e).u(5));
      },
      /** Returns true if the document is in the specified collectionId. */
      t.prototype.N = function (t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
      }, t.prototype.isEqual = function (t) {
        return null !== t && 0 === E.i(this.path, t.path);
      }, t.prototype.toString = function () {
        return this.path.toString();
      }, t.i = function (t, e) {
        return E.i(t.path, e.path);
      }, t.F = function (t) {
        return t.length % 2 == 0;
      },
      /**
       * Creates and returns a new document key with the given segments.
       *
       * @param segments The segments of the path to the document
       * @return A new instance of DocumentKey
       */
      t.$ = function (e) {
        return new t(new E(e.slice()));
      }, t;
    }();
    /**
     * A slash-separated path for navigating resources (documents and collections)
     * within Firestore.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Validates that no arguments were passed in the invocation of functionName.
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateNoArgs('myFunction', arguments);
     */


    function S(t, e) {
      if (0 !== e.length) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + W(e.length, "argument") + ".");
    }
    /**
     * Validates the invocation of functionName has the exact number of arguments.
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateExactNumberOfArgs('myFunction', arguments, 2);
     */


    function D(t, e, n) {
      if (e.length !== n) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires " + W(n, "argument") + ", but was called with " + W(e.length, "argument") + ".");
    }
    /**
     * Validates the invocation of functionName has at least the provided number of
     * arguments (but can have many more).
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
     */


    function x(t, e, n) {
      if (e.length < n) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires at least " + W(n, "argument") + ", but was called with " + W(e.length, "argument") + ".");
    }
    /**
     * Validates the invocation of functionName has number of arguments between
     * the values provided.
     *
     * Forward the magic "arguments" variable as second parameter on which the
     * parameter validation is performed:
     * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
     */


    function L(t, e, n, r) {
      if (e.length < n || e.length > r) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + W(e.length, "argument") + ".");
    }
    /**
     * Validates the provided argument is an array and has as least the expected
     * number of elements.
     */

    /**
     * Validates the provided positional argument has the native JavaScript type
     * using typeof checks.
     */


    function k(t, e, n, r) {
      C(t, e, B(n) + " argument", r);
    }
    /**
     * Validates the provided argument has the native JavaScript type using
     * typeof checks or is undefined.
     */


    function R(t, e, n, r) {
      void 0 !== r && k(t, e, n, r);
    }
    /**
     * Validates the provided named option has the native JavaScript type using
     * typeof checks.
     */


    function O(t, e, n, r) {
      C(t, e, n + " option", r);
    }
    /**
     * Validates the provided named option has the native JavaScript type using
     * typeof checks or is undefined.
     */


    function P(t, e, n, r) {
      void 0 !== r && O(t, e, n, r);
    }
    /**
     * Validates that two boolean options are not set at the same time.
     */

    /**
     * Validates that the provided named option equals one of the expected values.
     */

    /**
     * Validates that the provided named option equals one of the expected values or
     * is undefined.
     */


    function V(t, e, n, r, i) {
      void 0 !== r && function (t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
          var h = u[s];
          if (h === r) return;
          o.push(M(h));
        }

        var f = M(r);
        throw new c(a.INVALID_ARGUMENT, "Invalid value " + f + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
      }(t, 0, n, r, i);
    }
    /**
     * Validates that the provided argument is a valid enum.
     *
     * @param functionName Function making the validation call.
     * @param enums Array containing all possible values for the enum.
     * @param position Position of the argument in `functionName`.
     * @param argument Argument to validate.
     * @return The value as T if the argument can be converted.
     */


    function U(t, e, n, r) {
      if (!e.some(function (t) {
        return t === r;
      })) throw new c(a.INVALID_ARGUMENT, "Invalid value " + M(r) + " provided to function " + t + "() for its " + B(n) + " argument. Acceptable values: " + e.join(", "));
      return r;
    }
    /** Helper to validate the type of a provided input. */


    function C(t, e, n, r) {
      if (!("object" === e ? F(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = M(r);
        throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
      }
    }
    /**
     * Returns true if it's a non-null object without a custom prototype
     * (i.e. excludes Array, Date, etc.).
     */


    function F(t) {
      return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }
    /** Returns a string describing the type / value of the provided input. */


    function M(t) {
      if (void 0 === t) return "undefined";
      if (null === t) return "null";
      if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
      if ("number" == typeof t || "boolean" == typeof t) return "" + t;

      if ("object" == typeof t) {
        if (t instanceof Array) return "an array";

        var e =
        /** Hacky method to try to get the constructor name for an object. */
        function (t) {
          if (t.constructor) {
            var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
            if (e && e.length > 1) return e[1];
          }

          return null;
        }(t);

        return e ? "a custom " + e + " object" : "an object";
      }

      return "function" == typeof t ? "a function" : y();
    }

    function q(t, e, n) {
      if (void 0 === n) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + B(e) + " argument, but it was undefined.");
    }
    /**
     * Validates the provided positional argument is an object, and its keys and
     * values match the expected keys and types provided in optionTypes.
     */


    function j(t, e, n) {
      _(e, function (e, r) {
        if (n.indexOf(e) < 0) throw new c(a.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
      });
    }
    /**
     * Helper method to throw an error that the provided argument did not pass
     * an instanceof check.
     */


    function G(t, e, n, r) {
      var i = M(r);
      return new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + B(n) + " argument to be a " + e + ", but it was: " + i);
    }

    function z(t, e, n) {
      if (n <= 0) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + B(e) + " argument to be a positive number, but it was: " + n + ".");
    }
    /** Converts a number to its english word representation */


    function B(t) {
      switch (t) {
        case 1:
          return "first";

        case 2:
          return "second";

        case 3:
          return "third";

        default:
          return t + "th";
      }
    }
    /**
     * Formats the given word as plural conditionally given the preceding number.
     */


    function W(t, e) {
      return t + " " + e + (1 === t ? "" : "s");
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Generates `nBytes` of random bytes.
     *
     * If `nBytes < 0` , an error will be thrown.
     */


    function K(t) {
      // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
      var e = // eslint-disable-next-line @typescript-eslint/no-explicit-any
      "undefined" != typeof self && (self.crypto || self.msCrypto),
          n = new Uint8Array(t);
      if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);else // Falls back to Math.random
        for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
      return n;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Q =
    /** @class */
    function () {
      function t() {}

      return t.k = function () {
        for ( // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = "" // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20;) for (var r = K(40), i = 0; i < r.length; ++i) // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));

        return n;
      }, t;
    }();

    function H(t, e) {
      return t < e ? -1 : t > e ? 1 : 0;
    }
    /** Helper to compare arrays using isEqual(). */


    function Y(t, e, n) {
      return t.length === e.length && t.every(function (t, r) {
        return n(t, e[r]);
      });
    }
    /**
     * Returns the immediate lexicographically-following string. This is useful to
     * construct an inclusive range for indexeddb iterators.
     */


    function $(t) {
      // Return the input string, with an additional NUL byte appended.
      return t + "\0";
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Immutable class that represents a "proto" byte string.
     *
     * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
     * sent on the wire. This class abstracts away this differentiation by holding
     * the proto byte string in a common class that must be converted into a string
     * before being sent as a proto.
     */


    var X =
    /** @class */
    function () {
      function t(t) {
        this.M = t;
      }

      return t.fromBase64String = function (e) {
        return new t(atob(e));
      }, t.fromUint8Array = function (e) {
        return new t(
        /**
        * Helper function to convert an Uint8array to a binary string.
        */
        function (t) {
          for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);

          return e;
        }(e));
      }, t.prototype.toBase64 = function () {
        return t = this.M, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */

        var t;
        /** True if and only if the Base64 conversion functions are available. */
      }, t.prototype.toUint8Array = function () {
        return function (t) {
          for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);

          return e;
        }(this.M);
      }, t.prototype.O = function () {
        return 2 * this.M.length;
      }, t.prototype.L = function (t) {
        return H(this.M, t.M);
      }, t.prototype.isEqual = function (t) {
        return this.M === t.M;
      }, t;
    }();

    X.B = new X("");

    var J =
    /** @class */
    function () {
      function t(t) {
        this.q = t;
      }
      /**
       * Creates a new `Bytes` object from the given Base64 string, converting it to
       * bytes.
       *
       * @param base64 The Base64 string used to create the `Bytes` object.
       */


      return t.fromBase64String = function (e) {
        try {
          return new t(X.fromBase64String(e));
        } catch (e) {
          throw new c(a.INVALID_ARGUMENT, "Failed to construct Bytes from Base64 string: " + e);
        }
      },
      /**
       * Creates a new `Bytes` object from the given Uint8Array.
       *
       * @param array The Uint8Array used to create the `Bytes` object.
       */
      t.fromUint8Array = function (e) {
        return new t(X.fromUint8Array(e));
      },
      /**
       * Returns the underlying bytes as a Base64-encoded string.
       *
       * @return The Base64-encoded string created from the `Bytes` object.
       */
      t.prototype.toBase64 = function () {
        return this.q.toBase64();
      },
      /**
       * Returns the underlying bytes in a new `Uint8Array`.
       *
       * @return The Uint8Array created from the `Bytes` object.
       */
      t.prototype.toUint8Array = function () {
        return this.q.toUint8Array();
      },
      /**
       * Returns a string representation of the `Bytes` object.
       *
       * @return A string representation of the `Bytes` object.
       */
      t.prototype.toString = function () {
        return "Bytes(base64: " + this.toBase64() + ")";
      },
      /**
       * Returns true if this `Bytes` object is equal to the provided one.
       *
       * @param other The `Bytes` object to compare against.
       * @return true if this `Bytes` object is equal to the provided one.
       */
      t.prototype.isEqual = function (t) {
        return this.q.isEqual(t.q);
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Helper function to assert Uint8Array is available at runtime. */


    function Z() {
      if ("undefined" == typeof Uint8Array) throw new c(a.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
    }
    /** Helper function to assert Base64 functions are available at runtime. */


    function tt() {
      if ("undefined" == typeof atob) throw new c(a.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
    }
    /**
     * Immutable class holding a blob (binary data).
     *
     * This class is directly exposed in the public API. It extends the Bytes class
     * of the firestore-exp API to support `instanceof Bytes` checks during user
     * data conversion.
     *
     * Note that while you can't hide the constructor in JavaScript code, we are
     * using the hack above to make sure no-one outside this module can call it.
     */


    var et =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n.fromBase64String = function (t) {
        D("Blob.fromBase64String", arguments, 1), k("Blob.fromBase64String", "string", 1, t), tt();

        try {
          return new n(X.fromBase64String(t));
        } catch (t) {
          throw new c(a.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t);
        }
      }, n.fromUint8Array = function (t) {
        if (D("Blob.fromUint8Array", arguments, 1), Z(), !(t instanceof Uint8Array)) throw G("Blob.fromUint8Array", "Uint8Array", 1, t);
        return new n(X.fromUint8Array(t));
      }, n.prototype.toBase64 = function () {
        return D("Blob.toBase64", arguments, 0), tt(), e.prototype.toBase64.call(this);
      }, n.prototype.toUint8Array = function () {
        return D("Blob.toUint8Array", arguments, 0), Z(), e.prototype.toUint8Array.call(this);
      }, n.prototype.toString = function () {
        return "Blob(base64: " + this.toBase64() + ")";
      }, n;
    }(J),
        nt =
    /**
         * Constructs a DatabaseInfo using the provided host, databaseId and
         * persistenceKey.
         *
         * @param databaseId The database to use.
         * @param persistenceKey A unique identifier for this Firestore's local
         * storage (used in conjunction with the databaseId).
         * @param host The Firestore backend host to connect to.
         * @param ssl Whether to use SSL when connecting.
         * @param forceLongPolling Whether to use the forceLongPolling option
         * when using WebChannel as the network transport.
         * @param autoDetectLongPolling Whether to use the detectBufferingProxy
         * option when using WebChannel as the network transport.
         */
    function (t, e, n, r, i, o) {
      this.U = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i, this.W = o;
    },
        rt =
    /** @class */
    function () {
      function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
      }

      return Object.defineProperty(t.prototype, "j", {
        get: function () {
          return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
      }, t.prototype.L = function (t) {
        return H(this.projectId, t.projectId) || H(this.database, t.database);
      }, t;
    }(),
        it =
    /** @class */
    function () {
      function t(t, e) {
        this.K = t, this.G = e,
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.H = {}
        /** Get a value for this key, or undefined if it does not exist. */
        ;
      }

      return t.prototype.get = function (t) {
        var e = this.K(t),
            n = this.H[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r],
              s = o[0],
              u = o[1];
          if (this.G(s, t)) return u;
        }
      }, t.prototype.has = function (t) {
        return void 0 !== this.get(t);
      },
      /** Put this key and value in the map. */
      t.prototype.set = function (t, e) {
        var n = this.K(t),
            r = this.H[n];

        if (void 0 !== r) {
          for (var i = 0; i < r.length; i++) if (this.G(r[i][0], t)) return void (r[i] = [t, e]);

          r.push([t, e]);
        } else this.H[n] = [[t, e]];
      },
      /**
       * Remove this key from the map. Returns a boolean if anything was deleted.
       */
      t.prototype.delete = function (t) {
        var e = this.K(t),
            n = this.H[e];
        if (void 0 === n) return !1;

        for (var r = 0; r < n.length; r++) if (this.G(n[r][0], t)) return 1 === n.length ? delete this.H[e] : n.splice(r, 1), !0;

        return !1;
      }, t.prototype.forEach = function (t) {
        _(this.H, function (e, n) {
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
                s = o[0],
                u = o[1];
            t(s, u);
          }
        });
      }, t.prototype.m = function () {
        return b(this.H);
      }, t;
    }(),
        ot =
    /** @class */
    function () {
      /**
       * Creates a new timestamp.
       *
       * @param seconds The number of seconds of UTC time since Unix epoch
       *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
       *     9999-12-31T23:59:59Z inclusive.
       * @param nanoseconds The non-negative fractions of a second at nanosecond
       *     resolution. Negative second values with fractions must still have
       *     non-negative nanoseconds values that count forward in time. Must be
       *     from 0 to 999,999,999 inclusive.
       */
      function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new c(a.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new c(a.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new c(a.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); // This will break in the year 10,000.

        if (t >= 253402300800) throw new c(a.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
      }
      /**
       * Creates a new timestamp with the current date, with millisecond precision.
       *
       * @return a new timestamp representing the current date.
       */


      return t.now = function () {
        return t.fromMillis(Date.now());
      },
      /**
       * Creates a new timestamp from the given date.
       *
       * @param date The date to initialize the `Timestamp` from.
       * @return A new `Timestamp` representing the same point in time as the given
       *     date.
       */
      t.fromDate = function (e) {
        return t.fromMillis(e.getTime());
      },
      /**
       * Creates a new timestamp from the given number of milliseconds.
       *
       * @param milliseconds Number of milliseconds since Unix epoch
       *     1970-01-01T00:00:00Z.
       * @return A new `Timestamp` representing the same point in time as the given
       *     number of milliseconds.
       */
      t.fromMillis = function (e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
      },
      /**
       * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
       * a loss of precision since `Date` objects only support millisecond precision.
       *
       * @return JavaScript `Date` object representing the same point in time as
       *     this `Timestamp`, with millisecond precision.
       */
      t.prototype.toDate = function () {
        return new Date(this.toMillis());
      },
      /**
       * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
       * epoch). This operation causes a loss of precision.
       *
       * @return The point in time corresponding to this timestamp, represented as
       *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
       */
      t.prototype.toMillis = function () {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
      }, t.prototype.Y = function (t) {
        return this.seconds === t.seconds ? H(this.nanoseconds, t.nanoseconds) : H(this.seconds, t.seconds);
      },
      /**
       * Returns true if this `Timestamp` is equal to the provided one.
       *
       * @param other The `Timestamp` to compare against.
       * @return true if this `Timestamp` is equal to the provided one.
       */
      t.prototype.isEqual = function (t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
      }, t.prototype.toString = function () {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
      }, t.prototype.toJSON = function () {
        return {
          seconds: this.seconds,
          nanoseconds: this.nanoseconds
        };
      },
      /**
       * Converts this object to a primitive string, which allows Timestamp objects to be compared
       * using the `>`, `<=`, `>=` and `>` operators.
       */
      t.prototype.valueOf = function () {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800; // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.

        return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
      }, t;
    }(),
        st =
    /** @class */
    function () {
      function t(t) {
        this.timestamp = t;
      }

      return t.J = function (e) {
        return new t(e);
      }, t.min = function () {
        return new t(new ot(0, 0));
      }, t.prototype.L = function (t) {
        return this.timestamp.Y(t.timestamp);
      }, t.prototype.isEqual = function (t) {
        return this.timestamp.isEqual(t.timestamp);
      },
      /** Returns a number representation of the version for use in spec tests. */
      t.prototype.X = function () {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
      }, t.prototype.toString = function () {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
      }, t.prototype.Z = function () {
        return this.timestamp;
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Returns whether a variable is either undefined or null.
     */


    function ut(t) {
      return null == t;
    }
    /** Returns whether the value represents -0. */


    function at(t) {
      // Detect if the value is -0.0. Based on polyfill from
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
      return 0 === t && 1 / t == -1 / 0;
    }
    /**
     * Returns whether a value is an integer and in the safe integer range
     * @param value The value to test for being an integer and in the safe range
     */


    function ct(t) {
      return "number" == typeof t && Number.isInteger(t) && !at(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // Visible for testing


    var ht = function (t, e, n, r, i, o, s) {
      void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.tt = null;
    };
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this factory method, because `Query` provides an implicit `orderBy`
     * property.
     */


    function ft(t, e, n, r, i, o, s) {
      return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), new ht(t, e, n, r, i, o, s);
    }

    function lt(t) {
      var e = m(t);

      if (null === e.tt) {
        var n = e.path.R();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(function (t) {
          return function (t) {
            // TODO(b/29183165): Technically, this won't be unique if two values have
            // the same description, such as the int 3 and the string "3". So we should
            // add the types in here somehow, too.
            return t.field.R() + t.op.toString() + re(t.value);
          }(t);
        }).join(","), n += "|ob:", n += e.orderBy.map(function (t) {
          return (e = t).field.R() + e.dir;
          var e;
        }).join(","), ut(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += ar(e.startAt)), e.endAt && (n += "|ub:", n += ar(e.endAt)), e.tt = n;
      }

      return e.tt;
    }

    function pt(t, e) {
      if (t.limit !== e.limit) return !1;
      if (t.orderBy.length !== e.orderBy.length) return !1;

      for (var n = 0; n < t.orderBy.length; n++) if (!pr(t.orderBy[n], e.orderBy[n])) return !1;

      if (t.filters.length !== e.filters.length) return !1;

      for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], i.op !== o.op || !i.field.isEqual(o.field) || !Zt(i.value, o.value)) return !1;

      var i, o;
      return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!hr(t.startAt, e.startAt) && hr(t.endAt, e.endAt);
    }

    function dt(t) {
      return A.F(t.path) && null === t.collectionGroup && 0 === t.filters.length;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * An immutable set of metadata that the local store tracks for each target.
     */


    var vt,
        yt,
        gt =
    /** @class */
    function () {
      function t(
      /** The target being listened to. */
      t,
      /**
       * The target ID to which the target corresponds; Assigned by the
       * LocalStore for user listens and by the SyncEngine for limbo watches.
       */
      e,
      /** The purpose of the target. */
      n,
      /**
       * The sequence number of the last transaction during which this target data
       * was modified.
       */
      r,
      /** The latest snapshot version seen for this target. */
      i
      /**
       * The maximum snapshot version at which the associated view
       * contained no limbo documents.
       */
      , o
      /**
       * An opaque, server-assigned token that allows watching a target to be
       * resumed after disconnecting without retransmitting all the data that
       * matches the target. The resume token essentially identifies a point in
       * time from which the server should resume sending results.
       */
      , s) {
        void 0 === i && (i = st.min()), void 0 === o && (o = st.min()), void 0 === s && (s = X.B), this.target = t, this.targetId = e, this.et = n, this.sequenceNumber = r, this.nt = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
      }
      /** Creates a new target data instance with an updated sequence number. */


      return t.prototype.st = function (e) {
        return new t(this.target, this.targetId, this.et, e, this.nt, this.lastLimboFreeSnapshotVersion, this.resumeToken);
      },
      /**
       * Creates a new target data instance with an updated resume token and
       * snapshot version.
       */
      t.prototype.it = function (e, n) {
        return new t(this.target, this.targetId, this.et, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
      },
      /**
       * Creates a new target data instance with an updated last limbo free
       * snapshot version number.
       */
      t.prototype.rt = function (e) {
        return new t(this.target, this.targetId, this.et, this.sequenceNumber, this.nt, e, this.resumeToken);
      }, t;
    }(),
        mt = // TODO(b/33078163): just use simplest form of existence filter for now
    function (t) {
      this.count = t;
    };
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Determines whether an error code represents a permanent error when received
     * in response to a non-write operation.
     *
     * See isPermanentWriteError for classifying write errors.
     */


    function wt(t) {
      switch (t) {
        case a.OK:
          return y();

        case a.CANCELLED:
        case a.UNKNOWN:
        case a.DEADLINE_EXCEEDED:
        case a.RESOURCE_EXHAUSTED:
        case a.INTERNAL:
        case a.UNAVAILABLE: // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.

        case a.UNAUTHENTICATED:
          return !1;

        case a.INVALID_ARGUMENT:
        case a.NOT_FOUND:
        case a.ALREADY_EXISTS:
        case a.PERMISSION_DENIED:
        case a.FAILED_PRECONDITION: // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.

        case a.ABORTED:
        case a.OUT_OF_RANGE:
        case a.UNIMPLEMENTED:
        case a.DATA_LOSS:
          return !0;

        default:
          return y();
      }
    }
    /**
     * Determines whether an error code represents a permanent error when received
     * in response to a write operation.
     *
     * Write operations must be handled specially because as of b/119437764, ABORTED
     * errors on the write stream should be retried too (even though ABORTED errors
     * are not generally retryable).
     *
     * Note that during the initial handshake on the write stream an ABORTED error
     * signals that we should discard our stream token (i.e. it is permanent). This
     * means a handshake error should be classified with isPermanentError, above.
     */

    /**
     * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
     * are not the same as HTTP status codes.
     *
     * @returns The Code equivalent to the given GRPC status code. Fails if there
     *     is no match.
     */


    function _t(t) {
      if (void 0 === t) // This shouldn't normally happen, but in certain error cases (like trying
        // to send invalid proto messages) we may get an error with no GRPC code.
        return p("GRPC error has no .code"), a.UNKNOWN;

      switch (t) {
        case vt.OK:
          return a.OK;

        case vt.CANCELLED:
          return a.CANCELLED;

        case vt.UNKNOWN:
          return a.UNKNOWN;

        case vt.DEADLINE_EXCEEDED:
          return a.DEADLINE_EXCEEDED;

        case vt.RESOURCE_EXHAUSTED:
          return a.RESOURCE_EXHAUSTED;

        case vt.INTERNAL:
          return a.INTERNAL;

        case vt.UNAVAILABLE:
          return a.UNAVAILABLE;

        case vt.UNAUTHENTICATED:
          return a.UNAUTHENTICATED;

        case vt.INVALID_ARGUMENT:
          return a.INVALID_ARGUMENT;

        case vt.NOT_FOUND:
          return a.NOT_FOUND;

        case vt.ALREADY_EXISTS:
          return a.ALREADY_EXISTS;

        case vt.PERMISSION_DENIED:
          return a.PERMISSION_DENIED;

        case vt.FAILED_PRECONDITION:
          return a.FAILED_PRECONDITION;

        case vt.ABORTED:
          return a.ABORTED;

        case vt.OUT_OF_RANGE:
          return a.OUT_OF_RANGE;

        case vt.UNIMPLEMENTED:
          return a.UNIMPLEMENTED;

        case vt.DATA_LOSS:
          return a.DATA_LOSS;

        default:
          return y();
      }
    }
    /**
     * Converts an HTTP response's error status to the equivalent error code.
     *
     * @param status An HTTP error response status ("FAILED_PRECONDITION",
     * "UNKNOWN", etc.)
     * @returns The equivalent Code. Non-matching responses are mapped to
     *     Code.UNKNOWN.
     */


    (yt = vt || (vt = {}))[yt.OK = 0] = "OK", yt[yt.CANCELLED = 1] = "CANCELLED", yt[yt.UNKNOWN = 2] = "UNKNOWN", yt[yt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", yt[yt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", yt[yt.NOT_FOUND = 5] = "NOT_FOUND", yt[yt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", yt[yt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", yt[yt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", yt[yt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", yt[yt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", yt[yt.ABORTED = 10] = "ABORTED", yt[yt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", yt[yt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", yt[yt.INTERNAL = 13] = "INTERNAL", yt[yt.UNAVAILABLE = 14] = "UNAVAILABLE", yt[yt.DATA_LOSS = 15] = "DATA_LOSS";
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // An immutable sorted map implementation, based on a Left-leaning Red-Black
    // tree.

    var bt =
    /** @class */
    function () {
      function t(t, e) {
        this.i = t, this.root = e || Et.EMPTY;
      } // Returns a copy of the map, with the specified key/value added or replaced.


      return t.prototype.ot = function (e, n) {
        return new t(this.i, this.root.ot(e, n, this.i).copy(null, null, Et.at, null, null));
      }, // Returns a copy of the map, with the specified key removed.
      t.prototype.remove = function (e) {
        return new t(this.i, this.root.remove(e, this.i).copy(null, null, Et.at, null, null));
      }, // Returns the value of the node with the given key, or null.
      t.prototype.get = function (t) {
        for (var e = this.root; !e.m();) {
          var n = this.i(t, e.key);
          if (0 === n) return e.value;
          n < 0 ? e = e.left : n > 0 && (e = e.right);
        }

        return null;
      }, // Returns the index of the element in this sorted map, or -1 if it doesn't
      // exist.
      t.prototype.indexOf = function (t) {
        for ( // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.m();) {
          var r = this.i(t, n.key);
          if (0 === r) return e + n.left.size;
          r < 0 ? n = n.left : ( // Count all nodes left of the node plus the node itself
          e += n.left.size + 1, n = n.right);
        } // Node not found


        return -1;
      }, t.prototype.m = function () {
        return this.root.m();
      }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function () {
          return this.root.size;
        },
        enumerable: !1,
        configurable: !0
      }), // Returns the minimum key in the map.
      t.prototype.ct = function () {
        return this.root.ct();
      }, // Returns the maximum key in the map.
      t.prototype.ut = function () {
        return this.root.ut();
      }, // Traverses the map in key order and calls the specified action function
      // for each key/value pair. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.ht = function (t) {
        return this.root.ht(t);
      }, t.prototype.forEach = function (t) {
        this.ht(function (e, n) {
          return t(e, n), !1;
        });
      }, t.prototype.toString = function () {
        var t = [];
        return this.ht(function (e, n) {
          return t.push(e + ":" + n), !1;
        }), "{" + t.join(", ") + "}";
      }, // Traverses the map in reverse key order and calls the specified action
      // function for each key/value pair. If action returns true, traversal is
      // aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.lt = function (t) {
        return this.root.lt(t);
      }, // Returns an iterator over the SortedMap.
      t.prototype._t = function () {
        return new It(this.root, null, this.i, !1);
      }, t.prototype.ft = function (t) {
        return new It(this.root, t, this.i, !1);
      }, t.prototype.dt = function () {
        return new It(this.root, null, this.i, !0);
      }, t.prototype.wt = function (t) {
        return new It(this.root, t, this.i, !0);
      }, t;
    }(),
        It =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.Tt = r, this.Et = [];

        for (var i = 1; !t.m();) if (i = e ? n(t.key, e) : 1, // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) // This node is less than our start key. ignore it
          t = this.Tt ? t.left : t.right;else {
          if (0 === i) {
            // This node is exactly equal to our start key. Push it on the stack,
            // but stop iterating;
            this.Et.push(t);
            break;
          } // This node is greater than our start key, add it to the stack and move
          // to the next one


          this.Et.push(t), t = this.Tt ? t.right : t.left;
        }
      }

      return t.prototype.It = function () {
        var t = this.Et.pop(),
            e = {
          key: t.key,
          value: t.value
        };
        if (this.Tt) for (t = t.left; !t.m();) this.Et.push(t), t = t.right;else for (t = t.right; !t.m();) this.Et.push(t), t = t.left;
        return e;
      }, t.prototype.At = function () {
        return this.Et.length > 0;
      }, t.prototype.Rt = function () {
        if (0 === this.Et.length) return null;
        var t = this.Et[this.Et.length - 1];
        return {
          key: t.key,
          value: t.value
        };
      }, t;
    }(),
        Et =
    /** @class */
    function () {
      function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
      } // Returns a copy of the current node, optionally replacing pieces of it.


      return t.prototype.copy = function (e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
      }, t.prototype.m = function () {
        return !1;
      }, // Traverses the tree in key order and calls the specified action function
      // for each node. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.ht = function (t) {
        return this.left.ht(t) || t(this.key, this.value) || this.right.ht(t);
      }, // Traverses the tree in reverse key order and calls the specified action
      // function for each node. If action returns true, traversal is aborted.
      // Returns the first truthy value returned by action, or the last falsey
      // value returned by action.
      t.prototype.lt = function (t) {
        return this.right.lt(t) || t(this.key, this.value) || this.left.lt(t);
      }, // Returns the minimum node in the tree.
      t.prototype.min = function () {
        return this.left.m() ? this : this.left.min();
      }, // Returns the maximum key in the tree.
      t.prototype.ct = function () {
        return this.min().key;
      }, // Returns the maximum key in the tree.
      t.prototype.ut = function () {
        return this.right.m() ? this.key : this.right.ut();
      }, // Returns new tree, with the key/value added.
      t.prototype.ot = function (t, e, n) {
        var r = this,
            i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.ot(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.ot(t, e, n))).gt();
      }, t.prototype.Pt = function () {
        if (this.left.m()) return t.EMPTY;
        var e = this;
        return e.left.yt() || e.left.left.yt() || (e = e.Vt()), (e = e.copy(null, null, null, e.left.Pt(), null)).gt();
      }, // Returns new tree, with the specified item removed.
      t.prototype.remove = function (e, n) {
        var r,
            i = this;
        if (n(e, i.key) < 0) i.left.m() || i.left.yt() || i.left.left.yt() || (i = i.Vt()), i = i.copy(null, null, null, i.left.remove(e, n), null);else {
          if (i.left.yt() && (i = i.bt()), i.right.m() || i.right.yt() || i.right.left.yt() || (i = i.vt()), 0 === n(e, i.key)) {
            if (i.right.m()) return t.EMPTY;
            r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.Pt());
          }

          i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.gt();
      }, t.prototype.yt = function () {
        return this.color;
      }, // Returns new tree after performing any needed rotations.
      t.prototype.gt = function () {
        var t = this;
        return t.right.yt() && !t.left.yt() && (t = t.St()), t.left.yt() && t.left.left.yt() && (t = t.bt()), t.left.yt() && t.right.yt() && (t = t.Dt()), t;
      }, t.prototype.Vt = function () {
        var t = this.Dt();
        return t.right.left.yt() && (t = (t = (t = t.copy(null, null, null, null, t.right.bt())).St()).Dt()), t;
      }, t.prototype.vt = function () {
        var t = this.Dt();
        return t.left.left.yt() && (t = (t = t.bt()).Dt()), t;
      }, t.prototype.St = function () {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
      }, t.prototype.bt = function () {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
      }, t.prototype.Dt = function () {
        var t = this.left.copy(null, null, !this.left.color, null, null),
            e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
      }, // For testing.
      t.prototype.Ct = function () {
        var t = this.Nt();
        return Math.pow(2, t) <= this.size + 1;
      }, // In a balanced RB tree, the black-depth (number of black nodes) from root to
      // leaves is equal on both sides.  This function verifies that or asserts.
      t.prototype.Nt = function () {
        if (this.yt() && this.left.yt()) throw y();
        if (this.right.yt()) throw y();
        var t = this.left.Nt();
        if (t !== this.right.Nt()) throw y();
        return t + (this.yt() ? 0 : 1);
      }, t;
    }(); // end SortedMap
    // An iterator over an LLRBNode.
    // end LLRBNode
    // Empty node is shared between all LLRB trees.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any


    Et.EMPTY = null, Et.RED = !0, Et.at = !1, // end LLRBEmptyNode
    Et.EMPTY = new (
    /** @class */
    function () {
      function t() {
        this.size = 0;
      }

      return Object.defineProperty(t.prototype, "key", {
        get: function () {
          throw y();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "value", {
        get: function () {
          throw y();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "color", {
        get: function () {
          throw y();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "left", {
        get: function () {
          throw y();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "right", {
        get: function () {
          throw y();
        },
        enumerable: !1,
        configurable: !0
      }), // Returns a copy of the current node.
      t.prototype.copy = function (t, e, n, r, i) {
        return this;
      }, // Returns a copy of the tree, with the specified key/value added.
      t.prototype.ot = function (t, e, n) {
        return new Et(t, e);
      }, // Returns a copy of the tree, with the specified key removed.
      t.prototype.remove = function (t, e) {
        return this;
      }, t.prototype.m = function () {
        return !0;
      }, t.prototype.ht = function (t) {
        return !1;
      }, t.prototype.lt = function (t) {
        return !1;
      }, t.prototype.ct = function () {
        return null;
      }, t.prototype.ut = function () {
        return null;
      }, t.prototype.yt = function () {
        return !1;
      }, // For testing.
      t.prototype.Ct = function () {
        return !0;
      }, t.prototype.Nt = function () {
        return 0;
      }, t;
    }())();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * SortedSet is an immutable (copy-on-write) collection that holds elements
     * in order specified by the provided comparator.
     *
     * NOTE: if provided comparator returns 0 for two elements, we consider them to
     * be equal!
     */

    var Tt =
    /** @class */
    function () {
      function t(t) {
        this.i = t, this.data = new bt(this.i);
      }

      return t.prototype.has = function (t) {
        return null !== this.data.get(t);
      }, t.prototype.first = function () {
        return this.data.ct();
      }, t.prototype.last = function () {
        return this.data.ut();
      }, Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.data.size;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.indexOf = function (t) {
        return this.data.indexOf(t);
      },
      /** Iterates elements in order defined by "comparator" */
      t.prototype.forEach = function (t) {
        this.data.ht(function (e, n) {
          return t(e), !1;
        });
      },
      /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
      t.prototype.Ft = function (t, e) {
        for (var n = this.data.ft(t[0]); n.At();) {
          var r = n.It();
          if (this.i(r.key, t[1]) >= 0) return;
          e(r.key);
        }
      },
      /**
       * Iterates over `elem`s such that: start <= elem until false is returned.
       */
      t.prototype.xt = function (t, e) {
        var n;

        for (n = void 0 !== e ? this.data.ft(e) : this.data._t(); n.At();) if (!t(n.It().key)) return;
      },
      /** Finds the least element greater than or equal to `elem`. */
      t.prototype.$t = function (t) {
        var e = this.data.ft(t);
        return e.At() ? e.It().key : null;
      }, t.prototype._t = function () {
        return new Nt(this.data._t());
      }, t.prototype.ft = function (t) {
        return new Nt(this.data.ft(t));
      },
      /** Inserts or updates an element */
      t.prototype.add = function (t) {
        return this.copy(this.data.remove(t).ot(t, !0));
      },
      /** Deletes an element */
      t.prototype.delete = function (t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
      }, t.prototype.m = function () {
        return this.data.m();
      }, t.prototype.kt = function (t) {
        var e = this; // Make sure `result` always refers to the larger one of the two sets.

        return e.size < t.size && (e = t, t = this), t.forEach(function (t) {
          e = e.add(t);
        }), e;
      }, t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;

        for (var n = this.data._t(), r = e.data._t(); n.At();) {
          var i = n.It().key,
              o = r.It().key;
          if (0 !== this.i(i, o)) return !1;
        }

        return !0;
      }, t.prototype.A = function () {
        var t = [];
        return this.forEach(function (e) {
          t.push(e);
        }), t;
      }, t.prototype.toString = function () {
        var t = [];
        return this.forEach(function (e) {
          return t.push(e);
        }), "SortedSet(" + t.toString() + ")";
      }, t.prototype.copy = function (e) {
        var n = new t(this.i);
        return n.data = e, n;
      }, t;
    }(),
        Nt =
    /** @class */
    function () {
      function t(t) {
        this.Mt = t;
      }

      return t.prototype.It = function () {
        return this.Mt.It().key;
      }, t.prototype.At = function () {
        return this.Mt.At();
      }, t;
    }(),
        At = new bt(A.i);

    function St() {
      return At;
    }

    function Dt() {
      return St();
    }

    var xt = new bt(A.i);

    function Lt() {
      return xt;
    }

    var kt = new bt(A.i),
        Rt = new Tt(A.i);

    function Ot() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

      for (var n = Rt, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
      }

      return n;
    }

    var Pt = new Tt(H);

    function Vt() {
      return Pt;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * DocumentSet is an immutable (copy-on-write) collection that holds documents
     * in order specified by the provided comparator. We always add a document key
     * comparator on top of what is provided to guarantee document equality based on
     * the key.
     */


    var Ut =
    /** @class */
    function () {
      /** The default ordering is by key if the comparator is omitted */
      function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.i = t ? function (e, n) {
          return t(e, n) || A.i(e.key, n.key);
        } : function (t, e) {
          return A.i(t.key, e.key);
        }, this.Ot = Lt(), this.Lt = new bt(this.i)
        /**
        * Returns an empty copy of the existing DocumentSet, using the same
        * comparator.
        */
        ;
      }

      return t.Bt = function (e) {
        return new t(e.i);
      }, t.prototype.has = function (t) {
        return null != this.Ot.get(t);
      }, t.prototype.get = function (t) {
        return this.Ot.get(t);
      }, t.prototype.first = function () {
        return this.Lt.ct();
      }, t.prototype.last = function () {
        return this.Lt.ut();
      }, t.prototype.m = function () {
        return this.Lt.m();
      },
      /**
       * Returns the index of the provided key in the document set, or -1 if the
       * document key is not present in the set;
       */
      t.prototype.indexOf = function (t) {
        var e = this.Ot.get(t);
        return e ? this.Lt.indexOf(e) : -1;
      }, Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.Lt.size;
        },
        enumerable: !1,
        configurable: !0
      }),
      /** Iterates documents in order defined by "comparator" */
      t.prototype.forEach = function (t) {
        this.Lt.ht(function (e, n) {
          return t(e), !1;
        });
      },
      /** Inserts or updates a document with the same key */
      t.prototype.add = function (t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.Ot.ot(t.key, t), e.Lt.ot(t, null));
      },
      /** Deletes a document with a given key */
      t.prototype.delete = function (t) {
        var e = this.get(t);
        return e ? this.copy(this.Ot.remove(t), this.Lt.remove(e)) : this;
      }, t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;

        for (var n = this.Lt._t(), r = e.Lt._t(); n.At();) {
          var i = n.It().key,
              o = r.It().key;
          if (!i.isEqual(o)) return !1;
        }

        return !0;
      }, t.prototype.toString = function () {
        var t = [];
        return this.forEach(function (e) {
          t.push(e.toString());
        }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
      }, t.prototype.copy = function (e, n) {
        var r = new t();
        return r.i = this.i, r.Ot = e, r.Lt = n, r;
      }, t;
    }(),
        Ct =
    /** @class */
    function () {
      function t() {
        this.qt = new bt(A.i);
      }

      return t.prototype.track = function (t) {
        var e = t.doc.key,
            n = this.qt.get(e);
        n ? // Merge the new change with the existing change.
        0
        /* Added */
        !== t.type && 3
        /* Metadata */
        === n.type ? this.qt = this.qt.ot(e, t) : 3
        /* Metadata */
        === t.type && 1
        /* Removed */
        !== n.type ? this.qt = this.qt.ot(e, {
          type: n.type,
          doc: t.doc
        }) : 2
        /* Modified */
        === t.type && 2
        /* Modified */
        === n.type ? this.qt = this.qt.ot(e, {
          type: 2
          /* Modified */
          ,
          doc: t.doc
        }) : 2
        /* Modified */
        === t.type && 0
        /* Added */
        === n.type ? this.qt = this.qt.ot(e, {
          type: 0
          /* Added */
          ,
          doc: t.doc
        }) : 1
        /* Removed */
        === t.type && 0
        /* Added */
        === n.type ? this.qt = this.qt.remove(e) : 1
        /* Removed */
        === t.type && 2
        /* Modified */
        === n.type ? this.qt = this.qt.ot(e, {
          type: 1
          /* Removed */
          ,
          doc: n.doc
        }) : 0
        /* Added */
        === t.type && 1
        /* Removed */
        === n.type ? this.qt = this.qt.ot(e, {
          type: 2
          /* Modified */
          ,
          doc: t.doc
        }) : // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        y() : this.qt = this.qt.ot(e, t);
      }, t.prototype.Ut = function () {
        var t = [];
        return this.qt.ht(function (e, n) {
          t.push(n);
        }), t;
      }, t;
    }(),
        Ft =
    /** @class */
    function () {
      function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.Qt = n, this.docChanges = r, this.Wt = i, this.fromCache = o, this.jt = s, this.Kt = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */
        ;
      }

      return t.Gt = function (e, n, r, i) {
        var o = [];
        return n.forEach(function (t) {
          o.push({
            type: 0
            /* Added */
            ,
            doc: t
          });
        }), new t(e, n, Ut.Bt(n), o, r, i,
        /* syncStateChanged= */
        !0,
        /* excludesMetadataChanges= */
        !1);
      }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function () {
          return !this.Wt.m();
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (t) {
        if (!(this.fromCache === t.fromCache && this.jt === t.jt && this.Wt.isEqual(t.Wt) && Qn(this.query, t.query) && this.docs.isEqual(t.docs) && this.Qt.isEqual(t.Qt))) return !1;
        var e = this.docChanges,
            n = t.docChanges;
        if (e.length !== n.length) return !1;

        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;

        return !0;
      }, t;
    }(),
        Mt =
    /** @class */
    function () {
      function t(
      /**
       * The snapshot version this event brings us up to, or MIN if not set.
       */
      t,
      /**
       * A map from target to changes to the target. See TargetChange.
       */
      e,
      /**
       * A set of targets that is known to be inconsistent. Listens for these
       * targets should be re-established without resume tokens.
       */
      n,
      /**
       * A set of which documents have changed or been deleted, along with the
       * doc's new values (if not deleted).
       */
      r,
      /**
       * A set of which document updates are due only to limbo resolution targets.
       */
      i) {
        this.nt = t, this.zt = e, this.Ht = n, this.Yt = r, this.Jt = i;
      }
      /**
       * HACK: Views require RemoteEvents in order to determine whether the view is
       * CURRENT, but secondary tabs don't receive remote events. So this method is
       * used to create a synthesized RemoteEvent that can be used to apply a
       * CURRENT status change to a View, for queries executed in a different tab.
       */
      // PORTING NOTE: Multi-tab only


      return t.Xt = function (e, n) {
        var r = new Map();
        return r.set(e, qt.Zt(e, n)), new t(st.min(), r, Vt(), St(), Ot());
      }, t;
    }(),
        qt =
    /** @class */
    function () {
      function t(
      /**
       * An opaque, server-assigned token that allows watching a query to be resumed
       * after disconnecting without retransmitting all the data that matches the
       * query. The resume token essentially identifies a point in time from which
       * the server should resume sending results.
       */
      t,
      /**
       * The "current" (synced) status of this target. Note that "current"
       * has special meaning in the RPC protocol that implies that a target is
       * both up-to-date and consistent with the rest of the watch stream.
       */
      e,
      /**
       * The set of documents that were newly assigned to this target as part of
       * this remote event.
       */
      n,
      /**
       * The set of documents that were already assigned to this target but received
       * an update during this remote event.
       */
      r,
      /**
       * The set of documents that were removed from this target as part of this
       * remote event.
       */
      i) {
        this.resumeToken = t, this.te = e, this.ee = n, this.ne = r, this.se = i
        /**
        * This method is used to create a synthesized TargetChanges that can be used to
        * apply a CURRENT status change to a View (for queries executed in a different
        * tab) or for new queries (to raise snapshots with correct CURRENT status).
        */
        ;
      }

      return t.Zt = function (e, n) {
        return new t(X.B, n, Ot(), Ot(), Ot());
      }, t;
    }(),
        jt = function (
    /** The new document applies to all of these targets. */
    t,
    /** The new document is removed from all of these targets. */
    e,
    /** The key of the document for this change. */
    n,
    /**
         * The new document or NoDocument if it was deleted. Is null if the
         * document went out of view without the server sending a new document.
         */
    r) {
      this.ie = t, this.removedTargetIds = e, this.key = n, this.re = r;
    },
        Gt = function (t, e) {
      this.targetId = t, this.oe = e;
    },
        zt = function (
    /** What kind of change occurred to the watch target. */
    t,
    /** The target IDs that were added/removed/set. */
    e,
    /**
         * An opaque, server-assigned token that allows watching a target to be
         * resumed after disconnecting without retransmitting all the data that
         * matches the target. The resume token essentially identifies a point in
         * time from which the server should resume sending results.
         */
    n
    /** An RPC error indicating why the watch failed. */
    , r) {
      void 0 === n && (n = X.B), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r;
    },
        Bt =
    /** @class */
    function () {
      function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.ae = 0,
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.ce = Qt(),
        /** See public getters for explanations of these fields. */
        this.ue = X.B, this.he = !1,
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.le = !0;
      }

      return Object.defineProperty(t.prototype, "te", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function () {
          return this.he;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */
        get: function () {
          return this.ue;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "_e", {
        /** Whether this target has pending target adds or target removes. */
        get: function () {
          return 0 !== this.ae;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "fe", {
        /** Whether we have modified any state that should trigger a snapshot. */
        get: function () {
          return this.le;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Applies the resume token to the TargetChange, but only when it has a new
       * value. Empty resumeTokens are discarded.
       */
      t.prototype.de = function (t) {
        t.O() > 0 && (this.le = !0, this.ue = t);
      },
      /**
       * Creates a target change from the current set of changes.
       *
       * To reset the document changes after raising this snapshot, call
       * `clearPendingChanges()`.
       */
      t.prototype.we = function () {
        var t = Ot(),
            e = Ot(),
            n = Ot();
        return this.ce.forEach(function (r, i) {
          switch (i) {
            case 0
            /* Added */
            :
              t = t.add(r);
              break;

            case 2
            /* Modified */
            :
              e = e.add(r);
              break;

            case 1
            /* Removed */
            :
              n = n.add(r);
              break;

            default:
              y();
          }
        }), new qt(this.ue, this.he, t, e, n);
      },
      /**
       * Resets the document changes and sets `hasPendingChanges` to false.
       */
      t.prototype.me = function () {
        this.le = !1, this.ce = Qt();
      }, t.prototype.Te = function (t, e) {
        this.le = !0, this.ce = this.ce.ot(t, e);
      }, t.prototype.Ee = function (t) {
        this.le = !0, this.ce = this.ce.remove(t);
      }, t.prototype.Ie = function () {
        this.ae += 1;
      }, t.prototype.Ae = function () {
        this.ae -= 1;
      }, t.prototype.Re = function () {
        this.le = !0, this.he = !0;
      }, t;
    }(),
        Wt =
    /** @class */
    function () {
      function t(t) {
        this.ge = t,
        /** The internal state of all tracked targets. */
        this.Pe = new Map(),
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.ye = St(),
        /** A mapping of document keys to their set of target IDs. */
        this.Ve = Kt(),
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.pe = new Tt(H)
        /**
        * Processes and adds the DocumentWatchChange to the current set of changes.
        */
        ;
      }

      return t.prototype.be = function (t) {
        for (var e = 0, n = t.ie; e < n.length; e++) {
          var r = n[e];
          t.re instanceof kn ? this.ve(r, t.re) : t.re instanceof Rn && this.Se(r, t.key, t.re);
        }

        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
          var s = o[i];
          this.Se(s, t.key, t.re);
        }
      },
      /** Processes and adds the WatchTargetChange to the current set of changes. */
      t.prototype.De = function (t) {
        var e = this;
        this.Ce(t, function (n) {
          var r = e.Ne(n);

          switch (t.state) {
            case 0
            /* NoChange */
            :
              e.Fe(n) && r.de(t.resumeToken);
              break;

            case 1
            /* Added */
            :
              // We need to decrement the number of pending acks needed from watch
              // for this targetId.
              r.Ae(), r._e || // We have a freshly added target, so we need to reset any state
              // that we had previously. This can happen e.g. when remove and add
              // back a target for existence filter mismatches.
              r.me(), r.de(t.resumeToken);
              break;

            case 2
            /* Removed */
            :
              // We need to keep track of removed targets to we can post-filter and
              // remove any target changes.
              // We need to decrement the number of pending acks needed from watch
              // for this targetId.
              r.Ae(), r._e || e.removeTarget(n);
              break;

            case 3
            /* Current */
            :
              e.Fe(n) && (r.Re(), r.de(t.resumeToken));
              break;

            case 4
            /* Reset */
            :
              e.Fe(n) && ( // Reset the target and synthesizes removes for all existing
              // documents. The backend will re-add any documents that still
              // match the target before it sends the next global snapshot.
              e.xe(n), r.de(t.resumeToken));
              break;

            default:
              y();
          }
        });
      },
      /**
       * Iterates over all targetIds that the watch change applies to: either the
       * targetIds explicitly listed in the change or the targetIds of all currently
       * active targets.
       */
      t.prototype.Ce = function (t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Pe.forEach(function (t, r) {
          n.Fe(r) && e(r);
        });
      },
      /**
       * Handles existence filters and synthesizes deletes for filter mismatches.
       * Targets that are invalidated by filter mismatches are added to
       * `pendingTargetResets`.
       */
      t.prototype.$e = function (t) {
        var e = t.targetId,
            n = t.oe.count,
            r = this.ke(e);

        if (r) {
          var i = r.target;
          if (dt(i)) {
            if (0 === n) {
              // The existence filter told us the document does not exist. We deduce
              // that this document does not exist and apply a deleted document to
              // our updates. Without applying this deleted document there might be
              // another query that will raise this document as part of a snapshot
              // until it is resolved, essentially exposing inconsistency between
              // queries.
              var o = new A(i.path);
              this.Se(e, o, new Rn(o, st.min()));
            } else g(1 === n);
          } else this.Me(e) !== n && ( // Existence filter mismatch: We reset the mapping and raise a new
          // snapshot with `isFromCache:true`.
          this.xe(e), this.pe = this.pe.add(e));
        }
      },
      /**
       * Converts the currently accumulated state into a remote event at the
       * provided snapshot version. Resets the accumulated changes before returning.
       */
      t.prototype.Oe = function (t) {
        var e = this,
            n = new Map();
        this.Pe.forEach(function (r, i) {
          var o = e.ke(i);

          if (o) {
            if (r.te && dt(o.target)) {
              // Document queries for document that don't exist can produce an empty
              // result set. To update our local cache, we synthesize a document
              // delete if we have not previously received the document. This
              // resolves the limbo state of the document, removing it from
              // limboDocumentRefs.
              // TODO(dimond): Ideally we would have an explicit lookup target
              // instead resulting in an explicit delete message and we could
              // remove this special logic.
              var s = new A(o.target.path);
              null !== e.ye.get(s) || e.Le(i, s) || e.Se(i, s, new Rn(s, t));
            }

            r.fe && (n.set(i, r.we()), r.me());
          }
        });
        var r = Ot(); // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.

        this.Ve.forEach(function (t, n) {
          var i = !0;
          n.xt(function (t) {
            var n = e.ke(t);
            return !n || 2
            /* LimboResolution */
            === n.et || (i = !1, !1);
          }), i && (r = r.add(t));
        });
        var i = new Mt(t, n, this.pe, this.ye, r);
        return this.ye = St(), this.Ve = Kt(), this.pe = new Tt(H), i;
      },
      /**
       * Adds the provided document to the internal list of document updates and
       * its document key to the given target's mapping.
       */
      // Visible for testing.
      t.prototype.ve = function (t, e) {
        if (this.Fe(t)) {
          var n = this.Le(t, e.key) ? 2
          /* Modified */
          : 0
          /* Added */
          ;
          this.Ne(t).Te(e.key, n), this.ye = this.ye.ot(e.key, e), this.Ve = this.Ve.ot(e.key, this.Be(e.key).add(t));
        }
      },
      /**
       * Removes the provided document from the target mapping. If the
       * document no longer matches the target, but the document's state is still
       * known (e.g. we know that the document was deleted or we received the change
       * that caused the filter mismatch), the new document can be provided
       * to update the remote document cache.
       */
      // Visible for testing.
      t.prototype.Se = function (t, e, n) {
        if (this.Fe(t)) {
          var r = this.Ne(t);
          this.Le(t, e) ? r.Te(e, 1
          /* Removed */
          ) : // The document may have entered and left the target before we raised a
          // snapshot, so we can just ignore the change.
          r.Ee(e), this.Ve = this.Ve.ot(e, this.Be(e).delete(t)), n && (this.ye = this.ye.ot(e, n));
        }
      }, t.prototype.removeTarget = function (t) {
        this.Pe.delete(t);
      },
      /**
       * Returns the current count of documents in the target. This includes both
       * the number of documents that the LocalStore considers to be part of the
       * target as well as any accumulated changes.
       */
      t.prototype.Me = function (t) {
        var e = this.Ne(t).we();
        return this.ge.qe(t).size + e.ee.size - e.se.size;
      },
      /**
       * Increment the number of acks needed from watch before we can consider the
       * server to be 'in-sync' with the client's active targets.
       */
      t.prototype.Ie = function (t) {
        this.Ne(t).Ie();
      }, t.prototype.Ne = function (t) {
        var e = this.Pe.get(t);
        return e || (e = new Bt(), this.Pe.set(t, e)), e;
      }, t.prototype.Be = function (t) {
        var e = this.Ve.get(t);
        return e || (e = new Tt(H), this.Ve = this.Ve.ot(t, e)), e;
      },
      /**
       * Verifies that the user is still interested in this target (by calling
       * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
       * from watch.
       */
      t.prototype.Fe = function (t) {
        var e = null !== this.ke(t);
        return e || l("WatchChangeAggregator", "Detected inactive target", t), e;
      },
      /**
       * Returns the TargetData for an active target (i.e. a target that the user
       * is still interested in that has no outstanding target change requests).
       */
      t.prototype.ke = function (t) {
        var e = this.Pe.get(t);
        return e && e._e ? null : this.ge.Ue(t);
      },
      /**
       * Resets the state of a Watch target to its initial state (e.g. sets
       * 'current' to false, clears the resume token and removes its target mapping
       * from all documents).
       */
      t.prototype.xe = function (t) {
        var e = this;
        this.Pe.set(t, new Bt()), this.ge.qe(t).forEach(function (n) {
          e.Se(t, n,
          /*updatedDocument=*/
          null);
        });
      },
      /**
       * Returns whether the LocalStore considers the document to be part of the
       * specified target.
       */
      t.prototype.Le = function (t, e) {
        return this.ge.qe(t).has(e);
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
     * duplicate events for the same doc.
     */


    function Kt() {
      return new bt(A.i);
    }

    function Qt() {
      return new bt(A.i);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Represents a locally-applied ServerTimestamp.
     *
     * Server Timestamps are backed by MapValues that contain an internal field
     * `__type__` with a value of `server_timestamp`. The previous value and local
     * write time are stored in its `__previous_value__` and `__local_write_time__`
     * fields respectively.
     *
     * Notes:
     * - ServerTimestampValue instances are created as the result of applying a
     *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
     *   the local view of a document. Therefore they do not need to be parsed or
     *   serialized.
     * - When evaluated locally (e.g. for snapshot.data()), they by default
     *   evaluate to `null`. This behavior can be configured by passing custom
     *   FieldValueOptions to value().
     * - With respect to other ServerTimestampValues, they sort by their
     *   localWriteTime.
     */


    function Ht(t) {
      var e, n;
      return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
    }
    /**
     * Creates a new ServerTimestamp proto value (using the internal format).
     */

    /**
     * Returns the value of the field before this ServerTimestamp was set.
     *
     * Preserving the previous values allows the user to display the last resoled
     * value until the backend responds with the timestamp.
     */


    function Yt(t) {
      var e = t.mapValue.fields.__previous_value__;
      return Ht(e) ? Yt(e) : e;
    }
    /**
     * Returns the local time at which this timestamp was first set.
     */


    function $t(t) {
      var e = oe(t.mapValue.fields.__local_write_time__.timestampValue);
      return new ot(e.seconds, e.nanos);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // A RegExp matching ISO 8601 UTC timestamps with optional fraction.


    var Xt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
    /** Extracts the backend's type order for the provided value. */

    function Jt(t) {
      return "nullValue" in t ? 0
      /* NullValue */
      : "booleanValue" in t ? 1
      /* BooleanValue */
      : "integerValue" in t || "doubleValue" in t ? 2
      /* NumberValue */
      : "timestampValue" in t ? 3
      /* TimestampValue */
      : "stringValue" in t ? 5
      /* StringValue */
      : "bytesValue" in t ? 6
      /* BlobValue */
      : "referenceValue" in t ? 7
      /* RefValue */
      : "geoPointValue" in t ? 8
      /* GeoPointValue */
      : "arrayValue" in t ? 9
      /* ArrayValue */
      : "mapValue" in t ? Ht(t) ? 4
      /* ServerTimestampValue */
      : 10
      /* ObjectValue */
      : y();
    }
    /** Tests `left` and `right` for equality based on the backend semantics. */


    function Zt(t, e) {
      var n = Jt(t);
      if (n !== Jt(e)) return !1;

      switch (n) {
        case 0
        /* NullValue */
        :
          return !0;

        case 1
        /* BooleanValue */
        :
          return t.booleanValue === e.booleanValue;

        case 4
        /* ServerTimestampValue */
        :
          return $t(t).isEqual($t(e));

        case 3
        /* TimestampValue */
        :
          return function (t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) // Use string equality for ISO 8601 timestamps
              return t.timestampValue === e.timestampValue;
            var n = oe(t.timestampValue),
                r = oe(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
          }(t, e);

        case 5
        /* StringValue */
        :
          return t.stringValue === e.stringValue;

        case 6
        /* BlobValue */
        :
          return function (t, e) {
            return ue(t.bytesValue).isEqual(ue(e.bytesValue));
          }(t, e);

        case 7
        /* RefValue */
        :
          return t.referenceValue === e.referenceValue;

        case 8
        /* GeoPointValue */
        :
          return function (t, e) {
            return se(t.geoPointValue.latitude) === se(e.geoPointValue.latitude) && se(t.geoPointValue.longitude) === se(e.geoPointValue.longitude);
          }(t, e);

        case 2
        /* NumberValue */
        :
          return function (t, e) {
            if ("integerValue" in t && "integerValue" in e) return se(t.integerValue) === se(e.integerValue);

            if ("doubleValue" in t && "doubleValue" in e) {
              var n = se(t.doubleValue),
                  r = se(e.doubleValue);
              return n === r ? at(n) === at(r) : isNaN(n) && isNaN(r);
            }

            return !1;
          }(t, e);

        case 9
        /* ArrayValue */
        :
          return Y(t.arrayValue.values || [], e.arrayValue.values || [], Zt);

        case 10
        /* ObjectValue */
        :
          return function (t, e) {
            var n = t.mapValue.fields || {},
                r = e.mapValue.fields || {};
            if (w(n) !== w(r)) return !1;

            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Zt(n[i], r[i]))) return !1;

            return !0;
          }(t, e);

        default:
          return y();
      }
    }

    function te(t, e) {
      return void 0 !== (t.values || []).find(function (t) {
        return Zt(t, e);
      });
    }

    function ee(t, e) {
      var n = Jt(t),
          r = Jt(e);
      if (n !== r) return H(n, r);

      switch (n) {
        case 0
        /* NullValue */
        :
          return 0;

        case 1
        /* BooleanValue */
        :
          return H(t.booleanValue, e.booleanValue);

        case 2
        /* NumberValue */
        :
          return function (t, e) {
            var n = se(t.integerValue || t.doubleValue),
                r = se(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
          }(t, e);

        case 3
        /* TimestampValue */
        :
          return ne(t.timestampValue, e.timestampValue);

        case 4
        /* ServerTimestampValue */
        :
          return ne($t(t), $t(e));

        case 5
        /* StringValue */
        :
          return H(t.stringValue, e.stringValue);

        case 6
        /* BlobValue */
        :
          return function (t, e) {
            var n = ue(t),
                r = ue(e);
            return n.L(r);
          }(t.bytesValue, e.bytesValue);

        case 7
        /* RefValue */
        :
          return function (t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
              var o = H(n[i], r[i]);
              if (0 !== o) return o;
            }

            return H(n.length, r.length);
          }(t.referenceValue, e.referenceValue);

        case 8
        /* GeoPointValue */
        :
          return function (t, e) {
            var n = H(se(t.latitude), se(e.latitude));
            return 0 !== n ? n : H(se(t.longitude), se(e.longitude));
          }(t.geoPointValue, e.geoPointValue);

        case 9
        /* ArrayValue */
        :
          return function (t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
              var o = ee(n[i], r[i]);
              if (o) return o;
            }

            return H(n.length, r.length);
          }(t.arrayValue, e.arrayValue);

        case 10
        /* ObjectValue */
        :
          return function (t, e) {
            var n = t.fields || {},
                r = Object.keys(n),
                i = e.fields || {},
                o = Object.keys(i); // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.

            r.sort(), o.sort();

            for (var s = 0; s < r.length && s < o.length; ++s) {
              var u = H(r[s], o[s]);
              if (0 !== u) return u;
              var a = ee(n[r[s]], i[o[s]]);
              if (0 !== a) return a;
            }

            return H(r.length, o.length);
          }(t.mapValue, e.mapValue);

        default:
          throw y();
      }
    }

    function ne(t, e) {
      if ("string" == typeof t && "string" == typeof e && t.length === e.length) return H(t, e);
      var n = oe(t),
          r = oe(e),
          i = H(n.seconds, r.seconds);
      return 0 !== i ? i : H(n.nanos, r.nanos);
    }

    function re(t) {
      return ie(t);
    }

    function ie(t) {
      return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function (t) {
        var e = oe(t);
        return "time(" + e.seconds + "," + e.nanos + ")";
      }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? ue(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, A.C(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function (t) {
        for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) {
          n ? n = !1 : e += ",", e += ie(i[r]);
        }

        return e + "]";
      }(t.arrayValue) : "mapValue" in t ? function (t) {
        for ( // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
          var o = i[r];
          n ? n = !1 : e += ",", e += o + ":" + ie(t.fields[o]);
        }

        return e + "}";
      }(t.mapValue) : y();
      var e, n;
    }

    function oe(t) {
      // The json interface (for the browser) will return an iso timestamp string,
      // while the proto js library (for node) will return a
      // google.protobuf.Timestamp instance.
      if (g(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0,
            n = Xt.exec(t);

        if (g(!!n), n[1]) {
          // Pad the fraction out to 9 digits (nanos).
          var r = n[1];
          r = (r + "000000000").substr(0, 9), e = Number(r);
        } // Parse the date to get the seconds.


        var i = new Date(t);
        return {
          seconds: Math.floor(i.getTime() / 1e3),
          nanos: e
        };
      }

      return {
        seconds: se(t.seconds),
        nanos: se(t.nanos)
      };
    }
    /**
     * Converts the possible Proto types for numbers into a JavaScript number.
     * Returns 0 if the value is not numeric.
     */


    function se(t) {
      // TODO(bjornick): Handle int64 greater than 53 bits.
      return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
    }
    /** Converts the possible Proto types for Blobs into a ByteString. */


    function ue(t) {
      return "string" == typeof t ? X.fromBase64String(t) : X.fromUint8Array(t);
    }
    /** Returns a reference value for the provided database and key. */


    function ae(t, e) {
      return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.R()
      };
    }
    /** Returns true if `value` is an IntegerValue . */


    function ce(t) {
      return !!t && "integerValue" in t;
    }
    /** Returns true if `value` is a DoubleValue. */

    /** Returns true if `value` is an ArrayValue. */


    function he(t) {
      return !!t && "arrayValue" in t;
    }
    /** Returns true if `value` is a NullValue. */


    function fe(t) {
      return !!t && "nullValue" in t;
    }
    /** Returns true if `value` is NaN. */


    function le(t) {
      return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
    }
    /** Returns true if `value` is a MapValue. */


    function pe(t) {
      return !!t && "mapValue" in t;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var de = {
      asc: "ASCENDING",
      desc: "DESCENDING"
    },
        ve = {
      "<": "LESS_THAN",
      "<=": "LESS_THAN_OR_EQUAL",
      ">": "GREATER_THAN",
      ">=": "GREATER_THAN_OR_EQUAL",
      "==": "EQUAL",
      "!=": "NOT_EQUAL",
      "array-contains": "ARRAY_CONTAINS",
      in: "IN",
      "not-in": "NOT_IN",
      "array-contains-any": "ARRAY_CONTAINS_ANY"
    },
        ye = function (t, e) {
      this.U = t, this.Qe = e;
    };
    /**
     * This class generates JsonObject values for the Datastore API suitable for
     * sending to either GRPC stub methods or via the JSON/HTTP REST API.
     *
     * The serializer supports both Protobuf.js and Proto3 JSON formats. By
     * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
     * format.
     *
     * For a description of the Proto3 JSON format check
     * https://developers.google.com/protocol-buffers/docs/proto3#json
     *
     * TODO(klimt): We can remove the databaseId argument if we keep the full
     * resource name in documents.
     */

    /**
     * Returns an IntegerValue for `value`.
     */


    function ge(t) {
      return {
        integerValue: "" + t
      };
    }
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */


    function me(t, e) {
      if (t.Qe) {
        if (isNaN(e)) return {
          doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
          doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
          doubleValue: "-Infinity"
        };
      }

      return {
        doubleValue: at(e) ? "-0" : e
      };
    }
    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */


    function we(t, e) {
      return ct(e) ? ge(e) : me(t, e);
    }
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */


    function _e(t, e) {
      return t.Qe ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
      };
    }
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */


    function be(t, e) {
      return t.Qe ? e.toBase64() : e.toUint8Array();
    }
    /**
     * Returns a ByteString based on the proto string value.
     */


    function Ie(t, e) {
      return _e(t, e.Z());
    }

    function Ee(t) {
      return g(!!t), st.J(function (t) {
        var e = oe(t);
        return new ot(e.seconds, e.nanos);
      }(t));
    }

    function Te(t, e) {
      return function (t) {
        return new E(["projects", t.projectId, "databases", t.database]);
      }(t).child("documents").child(e).R();
    }

    function Ne(t) {
      var e = E.g(t);
      return g(He(e)), e;
    }

    function Ae(t, e) {
      return Te(t.U, e.path);
    }

    function Se(t, e) {
      var n = Ne(e);
      return g(n.get(1) === t.U.projectId), g(!n.get(3) && !t.U.database || n.get(3) === t.U.database), new A(ke(n));
    }

    function De(t, e) {
      return Te(t.U, e);
    }

    function xe(t) {
      var e = Ne(t); // In v1beta1 queries for collections at the root did not have a trailing
      // "/documents". In v1 all resource paths contain "/documents". Preserve the
      // ability to read the v1beta1 form for compatibility with queries persisted
      // in the local target cache.

      return 4 === e.length ? E.P() : ke(e);
    }

    function Le(t) {
      return new E(["projects", t.U.projectId, "databases", t.U.database]).R();
    }

    function ke(t) {
      return g(t.length > 4 && "documents" === t.get(4)), t.u(5)
      /** Creates a Document proto from key and fields (but no create/update time) */
      ;
    }

    function Re(t, e, n) {
      return {
        name: Ae(t, e),
        fields: n.proto.mapValue.fields
      };
    }

    function Oe(t, e) {
      var n;
      if (e instanceof wn) n = {
        update: Re(t, e.key, e.value)
      };else if (e instanceof Nn) n = {
        delete: Ae(t, e.key)
      };else if (e instanceof _n) n = {
        update: Re(t, e.key, e.data),
        updateMask: Qe(e.We)
      };else if (e instanceof In) n = {
        transform: {
          document: Ae(t, e.key),
          fieldTransforms: e.fieldTransforms.map(function (t) {
            return function (t, e) {
              var n = e.transform;
              if (n instanceof Ze) return {
                fieldPath: e.field.R(),
                setToServerValue: "REQUEST_TIME"
              };
              if (n instanceof tn) return {
                fieldPath: e.field.R(),
                appendMissingElements: {
                  values: n.elements
                }
              };
              if (n instanceof nn) return {
                fieldPath: e.field.R(),
                removeAllFromArray: {
                  values: n.elements
                }
              };
              if (n instanceof on) return {
                fieldPath: e.field.R(),
                increment: n.je
              };
              throw y();
            }(0, t);
          })
        }
      };else {
        if (!(e instanceof An)) return y();
        n = {
          verify: Ae(t, e.key)
        };
      }
      return e.Ge.Ke || (n.currentDocument = function (t, e) {
        return void 0 !== e.updateTime ? {
          updateTime: Ie(t, e.updateTime)
        } : void 0 !== e.exists ? {
          exists: e.exists
        } : y();
      }(t, e.Ge)), n;
    }

    function Pe(t, e) {
      var n = e.currentDocument ? function (t) {
        return void 0 !== t.updateTime ? fn.updateTime(Ee(t.updateTime)) : void 0 !== t.exists ? fn.exists(t.exists) : fn.ze();
      }(e.currentDocument) : fn.ze();

      if (e.update) {
        e.update.name;
        var r = Se(t, e.update.name),
            i = new Sn({
          mapValue: {
            fields: e.update.fields
          }
        });

        if (e.updateMask) {
          var o = function (t) {
            var e = t.fieldPaths || [];
            return new an(e.map(function (t) {
              return N.S(t);
            }));
          }(e.updateMask);

          return new _n(r, i, o, n);
        }

        return new wn(r, i, n);
      }

      if (e.delete) {
        var s = Se(t, e.delete);
        return new Nn(s, n);
      }

      if (e.transform) {
        var u = Se(t, e.transform.document),
            a = e.transform.fieldTransforms.map(function (e) {
          return function (t, e) {
            var n = null;
            if ("setToServerValue" in e) g("REQUEST_TIME" === e.setToServerValue), n = new Ze();else if ("appendMissingElements" in e) {
              var r = e.appendMissingElements.values || [];
              n = new tn(r);
            } else if ("removeAllFromArray" in e) {
              var i = e.removeAllFromArray.values || [];
              n = new nn(i);
            } else "increment" in e ? n = new on(t, e.increment) : y();
            var o = N.S(e.fieldPath);
            return new cn(o, n);
          }(t, e);
        });
        return g(!0 === n.exists), new In(u, a);
      }

      if (e.verify) {
        var c = Se(t, e.verify);
        return new An(c, n);
      }

      return y();
    }

    function Ve(t, e) {
      return {
        documents: [De(t, e.path)]
      };
    }

    function Ue(t, e) {
      // Dissect the path into parent, collectionId, and optional key filter.
      var n = {
        structuredQuery: {}
      },
          r = e.path;
      null !== e.collectionGroup ? (n.parent = De(t, r), n.structuredQuery.from = [{
        collectionId: e.collectionGroup,
        allDescendants: !0
      }]) : (n.parent = De(t, r.h()), n.structuredQuery.from = [{
        collectionId: r._()
      }]);

      var i = function (t) {
        if (0 !== t.length) {
          var e = t.map(function (t) {
            // visible for testing
            return function (t) {
              if ("=="
              /* EQUAL */
              === t.op) {
                if (le(t.value)) return {
                  unaryFilter: {
                    field: ze(t.field),
                    op: "IS_NAN"
                  }
                };
                if (fe(t.value)) return {
                  unaryFilter: {
                    field: ze(t.field),
                    op: "IS_NULL"
                  }
                };
              } else if ("!="
              /* NOT_EQUAL */
              === t.op) {
                if (le(t.value)) return {
                  unaryFilter: {
                    field: ze(t.field),
                    op: "IS_NOT_NAN"
                  }
                };
                if (fe(t.value)) return {
                  unaryFilter: {
                    field: ze(t.field),
                    op: "IS_NOT_NULL"
                  }
                };
              }

              return {
                fieldFilter: {
                  field: ze(t.field),
                  op: Ge(t.op),
                  value: t.value
                }
              };
            }(t);
          });
          return 1 === e.length ? e[0] : {
            compositeFilter: {
              op: "AND",
              filters: e
            }
          };
        }
      }(e.filters);

      i && (n.structuredQuery.where = i);

      var o = function (t) {
        if (0 !== t.length) return t.map(function (t) {
          // visible for testing
          return function (t) {
            return {
              field: ze(t.field),
              direction: je(t.dir)
            };
          }(t);
        });
      }(e.orderBy);

      o && (n.structuredQuery.orderBy = o);

      var s = function (t, e) {
        return t.Qe || ut(e) ? e : {
          value: e
        };
      }(t, e.limit);

      return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = Me(e.startAt)), e.endAt && (n.structuredQuery.endAt = Me(e.endAt)), n;
    }

    function Ce(t) {
      var e = xe(t.parent),
          n = t.structuredQuery,
          r = n.from ? n.from.length : 0,
          i = null;

      if (r > 0) {
        g(1 === r);
        var o = n.from[0];
        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
      }

      var s = [];
      n.where && (s = Fe(n.where));
      var u = [];
      n.orderBy && (u = n.orderBy.map(function (t) {
        return function (t) {
          return new fr(Be(t.field), // visible for testing
          function (t) {
            switch (t) {
              case "ASCENDING":
                return "asc"
                /* ASCENDING */
                ;

              case "DESCENDING":
                return "desc"
                /* DESCENDING */
                ;

              default:
                return;
            }
          }(t.direction));
        }(t);
      }));
      var a = null;
      n.limit && (a = function (t) {
        var e;
        return ut(e = "object" == typeof t ? t.value : t) ? null : e;
      }(n.limit));
      var c = null;
      n.startAt && (c = qe(n.startAt));
      var h = null;
      return n.endAt && (h = qe(n.endAt)), zn(Vn(e, i, u, s, a, "F"
      /* First */
      , c, h));
    }

    function Fe(t) {
      return t ? void 0 !== t.unaryFilter ? [Ke(t)] : void 0 !== t.fieldFilter ? [We(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function (t) {
        return Fe(t);
      }).reduce(function (t, e) {
        return t.concat(e);
      }) : y() : [];
    }

    function Me(t) {
      return {
        before: t.before,
        values: t.position
      };
    }

    function qe(t) {
      var e = !!t.before,
          n = t.values || [];
      return new ur(n, e);
    } // visible for testing


    function je(t) {
      return de[t];
    }

    function Ge(t) {
      return ve[t];
    }

    function ze(t) {
      return {
        fieldPath: t.R()
      };
    }

    function Be(t) {
      return N.S(t.fieldPath);
    }

    function We(t) {
      return Jn.create(Be(t.fieldFilter.field), function (t) {
        switch (t) {
          case "EQUAL":
            return "=="
            /* EQUAL */
            ;

          case "NOT_EQUAL":
            return "!="
            /* NOT_EQUAL */
            ;

          case "GREATER_THAN":
            return ">"
            /* GREATER_THAN */
            ;

          case "GREATER_THAN_OR_EQUAL":
            return ">="
            /* GREATER_THAN_OR_EQUAL */
            ;

          case "LESS_THAN":
            return "<"
            /* LESS_THAN */
            ;

          case "LESS_THAN_OR_EQUAL":
            return "<="
            /* LESS_THAN_OR_EQUAL */
            ;

          case "ARRAY_CONTAINS":
            return "array-contains"
            /* ARRAY_CONTAINS */
            ;

          case "IN":
            return "in"
            /* IN */
            ;

          case "NOT_IN":
            return "not-in"
            /* NOT_IN */
            ;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any"
            /* ARRAY_CONTAINS_ANY */
            ;

          case "OPERATOR_UNSPECIFIED":
          default:
            return y();
        }
      }(t.fieldFilter.op), t.fieldFilter.value);
    }

    function Ke(t) {
      switch (t.unaryFilter.op) {
        case "IS_NAN":
          var e = Be(t.unaryFilter.field);
          return Jn.create(e, "=="
          /* EQUAL */
          , {
            doubleValue: NaN
          });

        case "IS_NULL":
          var n = Be(t.unaryFilter.field);
          return Jn.create(n, "=="
          /* EQUAL */
          , {
            nullValue: "NULL_VALUE"
          });

        case "IS_NOT_NAN":
          var r = Be(t.unaryFilter.field);
          return Jn.create(r, "!="
          /* NOT_EQUAL */
          , {
            doubleValue: NaN
          });

        case "IS_NOT_NULL":
          var i = Be(t.unaryFilter.field);
          return Jn.create(i, "!="
          /* NOT_EQUAL */
          , {
            nullValue: "NULL_VALUE"
          });

        case "OPERATOR_UNSPECIFIED":
        default:
          return y();
      }
    }

    function Qe(t) {
      var e = [];
      return t.fields.forEach(function (t) {
        return e.push(t.R());
      }), {
        fieldPaths: e
      };
    }

    function He(t) {
      // Resource names have at least 4 components (project ID, database ID)
      return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
    }
    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Represents a transform within a TransformMutation. */


    var Ye = function () {
      // Make sure that the structural type of `TransformOperation` is unique.
      // See https://github.com/microsoft/TypeScript/issues/5451
      this.He = void 0;
    };
    /**
     * Computes the local transform result against the provided `previousValue`,
     * optionally using the provided localWriteTime.
     */


    function $e(t, e, n) {
      return t instanceof Ze ? function (t, e) {
        var n = {
          fields: {
            __type__: {
              stringValue: "server_timestamp"
            },
            __local_write_time__: {
              timestampValue: {
                seconds: t.seconds,
                nanos: t.nanoseconds
              }
            }
          }
        };
        return e && (n.fields.__previous_value__ = e), {
          mapValue: n
        };
      }(n, e) : t instanceof tn ? en(t, e) : t instanceof nn ? rn(t, e) : function (t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = Je(t, e),
            r = sn(n) + sn(t.je);
        return ce(n) && ce(t.je) ? ge(r) : me(t.serializer, r);
      }(t, e);
    }
    /**
     * Computes a final transform result after the transform has been acknowledged
     * by the server, potentially using the server-provided transformResult.
     */


    function Xe(t, e, n) {
      // The server just sends null as the transform result for array operations,
      // so we have to calculate a result the same as we do for local
      // applications.
      return t instanceof tn ? en(t, e) : t instanceof nn ? rn(t, e) : n;
    }
    /**
     * If this transform operation is not idempotent, returns the base value to
     * persist for this transform. If a base value is returned, the transform
     * operation is always applied to this base value, even if document has
     * already been updated.
     *
     * Base values provide consistent behavior for non-idempotent transforms and
     * allow us to return the same latency-compensated value even if the backend
     * has already applied the transform operation. The base value is null for
     * idempotent transforms, as they can be re-played even if the backend has
     * already applied them.
     *
     * @return a base value to store along with the mutation, or null for
     * idempotent transforms.
     */


    function Je(t, e) {
      return t instanceof on ? ce(n = e) || function (t) {
        return !!t && "doubleValue" in t;
      }(n) ? e : {
        integerValue: 0
      } : null;
      var n;
    }
    /** Transforms a value into a server-generated timestamp. */


    var Ze =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n;
    }(Ye),
        tn =
    /** @class */
    function (e) {
      function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
      }

      return t.__extends(n, e), n;
    }(Ye);
    /** Transforms an array value via a union operation. */


    function en(t, e) {
      for (var n = un(e), r = function (t) {
        n.some(function (e) {
          return Zt(e, t);
        }) || n.push(t);
      }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
      }

      return {
        arrayValue: {
          values: n
        }
      };
    }
    /** Transforms an array value via a remove operation. */


    var nn =
    /** @class */
    function (e) {
      function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
      }

      return t.__extends(n, e), n;
    }(Ye);

    function rn(t, e) {
      for (var n = un(e), r = function (t) {
        n = n.filter(function (e) {
          return !Zt(e, t);
        });
      }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
      }

      return {
        arrayValue: {
          values: n
        }
      };
    }
    /**
     * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
     * transforms. Converts all field values to integers or doubles, but unlike the
     * backend does not cap integer values at 2^63. Instead, JavaScript number
     * arithmetic is used and precision loss can occur for values greater than 2^53.
     */


    var on =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).serializer = t, r.je = n, r;
      }

      return t.__extends(n, e), n;
    }(Ye);

    function sn(t) {
      return se(t.integerValue || t.doubleValue);
    }

    function un(t) {
      return he(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Provides a set of fields that can be used to partially patch a document.
     * FieldMask is used in conjunction with ObjectValue.
     * Examples:
     *   foo - Overwrites foo entirely with the provided value. If foo is not
     *         present in the companion ObjectValue, the field is deleted.
     *   foo.bar - Overwrites only the field bar of the object foo.
     *             If foo is not an object, foo is replaced with an object
     *             containing foo
     */


    var an =
    /** @class */
    function () {
      function t(t) {
        this.fields = t, // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(N.i)
        /**
        * Verifies that `fieldPath` is included by at least one field in this field
        * mask.
        *
        * This is an O(n) operation, where `n` is the size of the field mask.
        */
        ;
      }

      return t.prototype.Ye = function (t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
          if (n[e].T(t)) return !0;
        }

        return !1;
      }, t.prototype.isEqual = function (t) {
        return Y(this.fields, t.fields, function (t, e) {
          return t.isEqual(e);
        });
      }, t;
    }(),
        cn = function (t, e) {
      this.field = t, this.transform = e;
    };
    /** A field path and the TransformOperation to perform upon it. */

    /** The result of successfully applying a mutation to the backend. */


    var hn = function (
    /**
         * The version at which the mutation was committed:
         *
         * - For most operations, this is the updateTime in the WriteResult.
         * - For deletes, the commitTime of the WriteResponse (because deletes are
         *   not stored and have no updateTime).
         *
         * Note that these versions can be different: No-op writes will not change
         * the updateTime even though the commitTime advances.
         */
    t,
    /**
         * The resulting fields returned from the backend after a
         * TransformMutation has been committed. Contains one FieldValue for each
         * FieldTransform that was in the mutation.
         *
         * Will be null if the mutation was not a TransformMutation.
         */
    e) {
      this.version = t, this.transformResults = e;
    },
        fn =
    /** @class */
    function () {
      function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */
        ;
      }

      return t.ze = function () {
        return new t();
      },
      /** Creates a new Precondition with an exists flag. */
      t.exists = function (e) {
        return new t(void 0, e);
      },
      /** Creates a new Precondition based on a version a document exists at. */
      t.updateTime = function (e) {
        return new t(e);
      }, Object.defineProperty(t.prototype, "Ke", {
        /** Returns whether this Precondition is empty. */
        get: function () {
          return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
      }, t;
    }();
    /**
     * Encodes a precondition for a mutation. This follows the model that the
     * backend accepts with the special case of an explicit "empty" precondition
     * (meaning no precondition).
     */

    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */


    function ln(t, e) {
      return void 0 !== t.updateTime ? e instanceof kn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof kn;
    }
    /**
     * A mutation describes a self-contained change to a document. Mutations can
     * create, replace, delete, and update subsets of documents.
     *
     * Mutations not only act on the value of the document but also its version.
     *
     * For local mutations (mutations that haven't been committed yet), we preserve
     * the existing version for Set, Patch, and Transform mutations. For Delete
     * mutations, we reset the version to 0.
     *
     * Here's the expected transition table.
     *
     * MUTATION           APPLIED TO            RESULTS IN
     *
     * SetMutation        Document(v3)          Document(v3)
     * SetMutation        NoDocument(v3)        Document(v0)
     * SetMutation        null                  Document(v0)
     * PatchMutation      Document(v3)          Document(v3)
     * PatchMutation      NoDocument(v3)        NoDocument(v3)
     * PatchMutation      null                  null
     * TransformMutation  Document(v3)          Document(v3)
     * TransformMutation  NoDocument(v3)        NoDocument(v3)
     * TransformMutation  null                  null
     * DeleteMutation     Document(v3)          NoDocument(v0)
     * DeleteMutation     NoDocument(v3)        NoDocument(v0)
     * DeleteMutation     null                  NoDocument(v0)
     *
     * For acknowledged mutations, we use the updateTime of the WriteResponse as
     * the resulting version for Set, Patch, and Transform mutations. As deletes
     * have no explicit update time, we use the commitTime of the WriteResponse for
     * Delete mutations.
     *
     * If a mutation is acknowledged by the backend but fails the precondition check
     * locally, we return an `UnknownDocument` and rely on Watch to send us the
     * updated version.
     *
     * Note that TransformMutations don't create Documents (in the case of being
     * applied to a NoDocument), even though they would on the backend. This is
     * because the client always combines the TransformMutation with a SetMutation
     * or PatchMutation and we only want to apply the transform if the prior
     * mutation resulted in a Document (always true for a SetMutation, but not
     * necessarily for a PatchMutation).
     *
     * ## Subclassing Notes
     *
     * Subclasses of Mutation need to implement applyToRemoteDocument() and
     * applyToLocalView() to implement the actual behavior of applying the mutation
     * to some source document.
     */


    var pn = function () {};
    /**
     * Applies this mutation to the given MaybeDocument or null for the purposes
     * of computing a new remote document. If the input document doesn't match the
     * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
     * returned.
     *
     * @param mutation The mutation to apply.
     * @param maybeDoc The document to mutate. The input document can be null if
     *     the client has no knowledge of the pre-mutation state of the document.
     * @param mutationResult The result of applying the mutation from the backend.
     * @return The mutated document. The returned document may be an
     *     UnknownDocument if the mutation could not be applied to the locally
     *     cached base document.
     */


    function dn(t, e, n) {
      return t instanceof wn ? function (t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new kn(t.key, n.version, t.value, {
          hasCommittedMutations: !0
        });
      }(t, 0, n) : t instanceof _n ? function (t, e, n) {
        if (!ln(t.Ge, e)) // Since the mutation was not rejected, we know that the  precondition
          // matched on the backend. We therefore must not have the expected version
          // of the document in our cache and return an UnknownDocument with the
          // known updateTime.
          return new On(t.key, n.version);
        var r = bn(t, e);
        return new kn(t.key, n.version, r, {
          hasCommittedMutations: !0
        });
      }(t, e, n) : t instanceof In ? function (t, e, n) {
        if (g(null != n.transformResults), !ln(t.Ge, e)) // Since the mutation was not rejected, we know that the  precondition
          // matched on the backend. We therefore must not have the expected version
          // of the document in our cache and return an UnknownDocument with the
          // known updateTime.
          return new On(t.key, n.version);

        var r = En(t, e),
            i =
        /**
        * Creates a list of "transform results" (a transform result is a field value
        * representing the result of applying a transform) for use after a
        * TransformMutation has been acknowledged by the server.
        *
        * @param fieldTransforms The field transforms to apply the result to.
        * @param baseDoc The document prior to applying this mutation batch.
        * @param serverTransformResults The transform results received by the server.
        * @return The transform results list.
        */
        function (t, e, n) {
          var r = [];
          g(t.length === n.length);

          for (var i = 0; i < n.length; i++) {
            var o = t[i],
                s = o.transform,
                u = null;
            e instanceof kn && (u = e.field(o.field)), r.push(Xe(s, u, n[i]));
          }

          return r;
        }(t.fieldTransforms, e, n.transformResults),
            o = n.version,
            s = Tn(t, r.data(), i);

        return new kn(t.key, o, s, {
          hasCommittedMutations: !0
        });
      }(t, e, n) : function (t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new Rn(t.key, n.version, {
          hasCommittedMutations: !0
        });
      }(t, 0, n);
    }
    /**
     * Applies this mutation to the given MaybeDocument or null for the purposes
     * of computing the new local view of a document. Both the input and returned
     * documents can be null.
     *
     * @param mutation The mutation to apply.
     * @param maybeDoc The document to mutate. The input document can be null if
     *     the client has no knowledge of the pre-mutation state of the document.
     * @param baseDoc The state of the document prior to this mutation batch. The
     *     input document can be null if the client has no knowledge of the
     *     pre-mutation state of the document.
     * @param localWriteTime A timestamp indicating the local write time of the
     *     batch this mutation is a part of.
     * @return The mutated document. The returned document may be null, but only
     *     if maybeDoc was null and the mutation would not create a new document.
     */


    function vn(t, e, n, r) {
      return t instanceof wn ? function (t, e) {
        if (!ln(t.Ge, e)) return e;
        var n = mn(e);
        return new kn(t.key, n, t.value, {
          Je: !0
        });
      }(t, e) : t instanceof _n ? function (t, e) {
        if (!ln(t.Ge, e)) return e;
        var n = mn(e),
            r = bn(t, e);
        return new kn(t.key, n, r, {
          Je: !0
        });
      }(t, e) : t instanceof In ? function (t, e, n, r) {
        if (!ln(t.Ge, e)) return e;

        var i = En(t, e),
            o = function (t, e, n, r) {
          for (var i = [], o = 0, s = t; o < s.length; o++) {
            var u = s[o],
                a = u.transform,
                c = null;
            n instanceof kn && (c = n.field(u.field)), null === c && r instanceof kn && ( // If the current document does not contain a value for the mutated
            // field, use the value that existed before applying this mutation
            // batch. This solves an edge case where a PatchMutation clears the
            // values in a nested map before the TransformMutation is applied.
            c = r.field(u.field)), i.push($e(a, c, e));
          }

          return i;
        }(t.fieldTransforms, n, e, r),
            s = Tn(t, i.data(), o);

        return new kn(t.key, i.version, s, {
          Je: !0
        });
      }(t, e, r, n) : function (t, e) {
        return ln(t.Ge, e) ? new Rn(t.key, st.min()) : e;
      }(t, e);
    }
    /**
     * If this mutation is not idempotent, returns the base value to persist with
     * this mutation. If a base value is returned, the mutation is always applied
     * to this base value, even if document has already been updated.
     *
     * The base value is a sparse object that consists of only the document
     * fields for which this mutation contains a non-idempotent transformation
     * (e.g. a numeric increment). The provided value guarantees consistent
     * behavior for non-idempotent transforms and allow us to return the same
     * latency-compensated value even if the backend has already applied the
     * mutation. The base value is null for idempotent mutations, as they can be
     * re-played even if the backend has already applied them.
     *
     * @return a base value to store along with the mutation, or null for
     * idempotent mutations.
     */


    function yn(t, e) {
      return t instanceof In ? function (t, e) {
        for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
          var o = i[r],
              s = e instanceof kn ? e.field(o.field) : void 0,
              u = Je(o.transform, s || null);
          null != u && (n = null == n ? new Dn().set(o.field, u) : n.set(o.field, u));
        }

        return n ? n.Xe() : null;
      }(t, e) : null;
    }

    function gn(t, e) {
      return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ge.isEqual(e.Ge) && (0
      /* Set */
      === t.type ? t.value.isEqual(e.value) : 1
      /* Patch */
      === t.type ? t.data.isEqual(e.data) && t.We.isEqual(e.We) : 2
      /* Transform */
      !== t.type || Y(t.fieldTransforms, t.fieldTransforms, function (t, e) {
        return function (t, e) {
          return t.field.isEqual(e.field) && function (t, e) {
            return t instanceof tn && e instanceof tn || t instanceof nn && e instanceof nn ? Y(t.elements, e.elements, Zt) : t instanceof on && e instanceof on ? Zt(t.je, e.je) : t instanceof Ze && e instanceof Ze;
          }(t.transform, e.transform);
        }(t, e);
      }));
    }
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.min().
     */


    function mn(t) {
      return t instanceof kn ? t.version : st.min();
    }
    /**
     * A mutation that creates or replaces the document at the given key with the
     * object value contents.
     */


    var wn =
    /** @class */
    function (e) {
      function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).key = t, i.value = n, i.Ge = r, i.type = 0
        /* Set */
        , i;
      }

      return t.__extends(n, e), n;
    }(pn),
        _n =
    /** @class */
    function (e) {
      function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).key = t, o.data = n, o.We = r, o.Ge = i, o.type = 1
        /* Patch */
        , o;
      }

      return t.__extends(n, e), n;
    }(pn);

    function bn(t, e) {
      return function (t, e) {
        var n = new Dn(e);
        return t.We.fields.forEach(function (e) {
          if (!e.m()) {
            var r = t.data.field(e);
            null !== r ? n.set(e, r) : n.delete(e);
          }
        }), n.Xe();
      }(t, e instanceof kn ? e.data() : Sn.empty());
    }

    var In =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2
        /* Transform */
        , // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Ge = fn.exists(!0), r;
      }

      return t.__extends(n, e), n;
    }(pn);

    function En(t, e) {
      return e;
    }

    function Tn(t, e, n) {
      for (var r = new Dn(e), i = 0; i < t.fieldTransforms.length; i++) {
        var o = t.fieldTransforms[i];
        r.set(o.field, n[i]);
      }

      return r.Xe();
    }
    /** A mutation that deletes the document at the given key. */


    var Nn =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Ge = n, r.type = 3
        /* Delete */
        , r;
      }

      return t.__extends(n, e), n;
    }(pn),
        An =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Ge = n, r.type = 4
        /* Verify */
        , r;
      }

      return t.__extends(n, e), n;
    }(pn),
        Sn =
    /** @class */
    function () {
      function t(t) {
        this.proto = t;
      }

      return t.empty = function () {
        return new t({
          mapValue: {}
        });
      },
      /**
       * Returns the value at the given path or null.
       *
       * @param path the path to search
       * @return The value at the path or if there it doesn't exist.
       */
      t.prototype.field = function (t) {
        if (t.m()) return this.proto;

        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
          if (!e.mapValue.fields) return null;
          if (!pe(e = e.mapValue.fields[t.get(n)])) return null;
        }

        return (e = (e.mapValue.fields || {})[t._()]) || null;
      }, t.prototype.isEqual = function (t) {
        return Zt(this.proto, t.proto);
      }, t;
    }(),
        Dn =
    /** @class */
    function () {
      /**
       * @param baseObject The object to mutate.
       */
      function t(t) {
        void 0 === t && (t = Sn.empty()), this.Ze = t,
        /** A map that contains the accumulated changes in this builder. */
        this.tn = new Map();
      }
      /**
       * Sets the field to the provided value.
       *
       * @param path The field path to set.
       * @param value The value to set.
       * @return The current Builder instance.
       */


      return t.prototype.set = function (t, e) {
        return this.en(t, e), this;
      },
      /**
       * Removes the field at the specified path. If there is no field at the
       * specified path, nothing is changed.
       *
       * @param path The field path to remove.
       * @return The current Builder instance.
       */
      t.prototype.delete = function (t) {
        return this.en(t, null), this;
      },
      /**
       * Adds `value` to the overlay map at `path`. Creates nested map entries if
       * needed.
       */
      t.prototype.en = function (t, e) {
        for (var n = this.tn, r = 0; r < t.length - 1; ++r) {
          var i = t.get(r),
              o = n.get(i);
          o instanceof Map ? // Re-use a previously created map
          n = o : o && 10
          /* ObjectValue */
          === Jt(o) ? ( // Convert the existing Protobuf MapValue into a map
          o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : ( // Create an empty map to represent the current nesting level
          o = new Map(), n.set(i, o), n = o);
        }

        n.set(t._(), e);
      },
      /** Returns an ObjectValue with all mutations applied. */
      t.prototype.Xe = function () {
        var t = this.nn(N.P(), this.tn);
        return null != t ? new Sn(t) : this.Ze;
      },
      /**
       * Applies any overlays from `currentOverlays` that exist at `currentPath`
       * and returns the merged data at `currentPath` (or null if there were no
       * changes).
       *
       * @param currentPath The path at the current nesting level. Can be set to
       * FieldValue.emptyPath() to represent the root.
       * @param currentOverlays The overlays at the current nesting level in the
       * same format as `overlayMap`.
       * @return The merged data at `currentPath` or null if no modifications
       * were applied.
       */
      t.prototype.nn = function (t, e) {
        var n = this,
            r = !1,
            i = this.Ze.field(t),
            o = pe(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach(function (e, i) {
          if (e instanceof Map) {
            var s = n.nn(t.child(i), e);
            null != s && (o[i] = s, r = !0);
          } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        }), r ? {
          mapValue: {
            fields: o
          }
        } : null;
      }, t;
    }();
    /**
     * Returns a FieldMask built from all fields in a MapValue.
     */


    function xn(t) {
      var e = [];
      return _(t.fields || {}, function (t, n) {
        var r = new N([t]);

        if (pe(n)) {
          var i = xn(n.mapValue).fields;
          if (0 === i.length) // Preserve the empty map by adding it to the FieldMask.
            e.push(r);else // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
              var u = s[o];
              e.push(r.child(u));
            }
        } else // For nested and non-empty ObjectValues, add the FieldPath of the leaf
          // nodes.
          e.push(r);
      }), new an(e)
      /**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

      /**
      * The result of a lookup for a given path may be an existing document or a
      * marker that this document does not exist at a given version.
      */
      ;
    }

    var Ln = function (t, e) {
      this.key = t, this.version = e;
    },
        kn =
    /** @class */
    function (e) {
      function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this, t, n) || this).sn = r, o.Je = !!i.Je, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
      }

      return t.__extends(n, e), n.prototype.field = function (t) {
        return this.sn.field(t);
      }, n.prototype.data = function () {
        return this.sn;
      }, n.prototype.rn = function () {
        return this.sn.proto;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Je === t.Je && this.hasCommittedMutations === t.hasCommittedMutations && this.sn.isEqual(t.sn);
      }, n.prototype.toString = function () {
        return "Document(" + this.key + ", " + this.version + ", " + this.sn.toString() + ", {hasLocalMutations: " + this.Je + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
      }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function () {
          return this.Je || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
      }), n;
    }(Ln),
        Rn =
    /** @class */
    function (e) {
      function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i;
      }

      return t.__extends(n, e), n.prototype.toString = function () {
        return "NoDocument(" + this.key + ", " + this.version + ")";
      }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function () {
          return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.isEqual = function (t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
      }, n;
    }(Ln),
        On =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n.prototype.toString = function () {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
      }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function () {
          return !0;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.isEqual = function (t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
      }, n;
    }(Ln),
        Pn =
    /**
         * Initializes a Query with a path and optional additional query constraints.
         * Path must currently be empty if this is a collection group query.
         */
    function (t, e, n, r, i, o
    /* First */
    , s, u) {
      void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.on = n, this.filters = r, this.limit = i, this.an = o, this.startAt = s, this.endAt = u, this.cn = null, // The corresponding `Target` of this `Query` instance.
      this.un = null, this.startAt, this.endAt;
    };
    /**
     * Represents a document in Firestore with a key, version, data and whether the
     * data has local mutations applied to it.
     */

    /** Creates a new Query instance with the options provided. */


    function Vn(t, e, n, r, i, o, s, u) {
      return new Pn(t, e, n, r, i, o, s, u);
    }
    /** Creates a new Query for a query that matches all documents at `path` */


    function Un(t) {
      return new Pn(t);
    }
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */


    function Cn(t) {
      return !ut(t.limit) && "F"
      /* First */
      === t.an;
    }

    function Fn(t) {
      return !ut(t.limit) && "L"
      /* Last */
      === t.an;
    }

    function Mn(t) {
      return t.on.length > 0 ? t.on[0].field : null;
    }

    function qn(t) {
      for (var e = 0, n = t.filters; e < n.length; e++) {
        var r = n[e];
        if (r.hn()) return r.field;
      }

      return null;
    }
    /**
     * Checks if any of the provided Operators are included in the query and
     * returns the first one that is, or null if none are.
     */

    /**
     * Returns whether the query matches a collection group rather than a specific
     * collection.
     */


    function jn(t) {
      return null !== t.collectionGroup;
    }
    /**
     * Returns the implicit order by constraint that is used to execute the Query,
     * which can be different from the order by constraints the user provided (e.g.
     * the SDK and backend always orders by `__name__`).
     */


    function Gn(t) {
      var e = m(t);

      if (null === e.cn) {
        e.cn = [];
        var n = qn(e),
            r = Mn(e);
        if (null !== n && null === r) // In order to implicitly add key ordering, we must also add the
          // inequality filter field for it to be a valid query.
          // Note that the default inequality field and key ordering is ascending.
          n.p() || e.cn.push(new fr(n)), e.cn.push(new fr(N.v(), "asc"
          /* ASCENDING */
          ));else {
          for (var i = !1, o = 0, s = e.on; o < s.length; o++) {
            var u = s[o];
            e.cn.push(u), u.field.p() && (i = !0);
          }

          if (!i) {
            // The order of the implicit key ordering always matches the last
            // explicit order by
            var a = e.on.length > 0 ? e.on[e.on.length - 1].dir : "asc"
            /* ASCENDING */
            ;
            e.cn.push(new fr(N.v(), a));
          }
        }
      }

      return e.cn;
    }
    /**
     * Converts this `Query` instance to it's corresponding `Target` representation.
     */


    function zn(t) {
      var e = m(t);
      if (!e.un) if ("F"
      /* First */
      === e.an) e.un = ft(e.path, e.collectionGroup, Gn(e), e.filters, e.limit, e.startAt, e.endAt);else {
        for ( // Flip the orderBy directions since we want the last results
        var n = [], r = 0, i = Gn(e); r < i.length; r++) {
          var o = i[r],
              s = "desc"
          /* DESCENDING */
          === o.dir ? "asc"
          /* ASCENDING */
          : "desc"
          /* DESCENDING */
          ;
          n.push(new fr(o.field, s));
        } // We need to swap the cursors to match the now-flipped query ordering.


        var u = e.endAt ? new ur(e.endAt.position, !e.endAt.before) : null,
            a = e.startAt ? new ur(e.startAt.position, !e.startAt.before) : null; // Now return as a LimitType.First query.

        e.un = ft(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
      }
      return e.un;
    }

    function Bn(t, e, n) {
      return new Pn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
    }

    function Wn(t, e) {
      return new Pn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, e, t.endAt);
    }

    function Kn(t, e) {
      return new Pn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, t.startAt, e);
    }

    function Qn(t, e) {
      return pt(zn(t), zn(e)) && t.an === e.an;
    } // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.


    function Hn(t) {
      return lt(zn(t)) + "|lt:" + t.an;
    }

    function Yn(t) {
      return "Query(target=" + function (t) {
        var e = t.path.R();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map(function (t) {
          return (e = t).field.R() + " " + e.op + " " + re(e.value);
          /** Returns a debug description for `filter`. */

          var e;
          /** Filter that matches on key fields (i.e. '__name__'). */
        }).join(", ") + "]"), ut(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map(function (t) {
          return (e = t).field.R() + " (" + e.dir + ")";
          var e;
        }).join(", ") + "]"), t.startAt && (e += ", startAt: " + ar(t.startAt)), t.endAt && (e += ", endAt: " + ar(t.endAt)), "Target(" + e + ")";
      }(zn(t)) + "; limitType=" + t.an + ")";
    }
    /** Returns whether `doc` matches the constraints of `query`. */


    function $n(t, e) {
      return function (t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.N(t.collectionGroup) && t.path.T(n) : A.F(t.path) ? t.path.isEqual(n) : t.path.I(n);
      }(t, e) && function (t, e) {
        for (var n = 0, r = t.on; n < r.length; n++) {
          var i = r[n]; // order by key always matches

          if (!i.field.p() && null === e.field(i.field)) return !1;
        }

        return !0;
      }(t, e) && function (t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
          if (!r[n].matches(e)) return !1;
        }

        return !0;
      }(t, e) && function (t, e) {
        return !(t.startAt && !cr(t.startAt, Gn(t), e)) && (!t.endAt || !cr(t.endAt, Gn(t), e));
      }(t, e);
    }

    function Xn(t) {
      return function (e, n) {
        for (var r = !1, i = 0, o = Gn(t); i < o.length; i++) {
          var s = o[i],
              u = lr(s, e, n);
          if (0 !== u) return u;
          r = r || s.field.p();
        }

        return 0;
      };
    }

    var Jn =
    /** @class */
    function (e) {
      function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
      }
      /**
       * Creates a filter based on the provided arguments.
       */


      return t.__extends(n, e), n.create = function (t, e, r) {
        if (t.p()) return "in"
        /* IN */
        === e || "not-in"
        /* NOT_IN */
        === e ? this.ln(t, e, r) : new Zn(t, e, r);

        if (fe(r)) {
          if ("=="
          /* EQUAL */
          !== e && "!="
          /* NOT_EQUAL */
          !== e) throw new c(a.INVALID_ARGUMENT, "Invalid query. Null only supports '==' and '!=' comparisons.");
          return new n(t, e, r);
        }

        if (le(r)) {
          if ("=="
          /* EQUAL */
          !== e && "!="
          /* NOT_EQUAL */
          !== e) throw new c(a.INVALID_ARGUMENT, "Invalid query. NaN only supports '==' and '!=' comparisons.");
          return new n(t, e, r);
        }

        return "array-contains"
        /* ARRAY_CONTAINS */
        === e ? new rr(t, r) : "in"
        /* IN */
        === e ? new ir(t, r) : "not-in"
        /* NOT_IN */
        === e ? new or(t, r) : "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        === e ? new sr(t, r) : new n(t, e, r);
      }, n.ln = function (t, e, n) {
        return "in"
        /* IN */
        === e ? new tr(t, n) : new er(t, n);
      }, n.prototype.matches = function (t) {
        var e = t.field(this.field); // Types do not have to match in NOT_EQUAL filters.

        return "!="
        /* NOT_EQUAL */
        === this.op ? null !== e && this._n(ee(e, this.value)) : null !== e && Jt(this.value) === Jt(e) && this._n(ee(e, this.value)); // Only compare types with matching backend order (such as double and int).
      }, n.prototype._n = function (t) {
        switch (this.op) {
          case "<"
          /* LESS_THAN */
          :
            return t < 0;

          case "<="
          /* LESS_THAN_OR_EQUAL */
          :
            return t <= 0;

          case "=="
          /* EQUAL */
          :
            return 0 === t;

          case "!="
          /* NOT_EQUAL */
          :
            return 0 !== t;

          case ">"
          /* GREATER_THAN */
          :
            return t > 0;

          case ">="
          /* GREATER_THAN_OR_EQUAL */
          :
            return t >= 0;

          default:
            return y();
        }
      }, n.prototype.hn = function () {
        return ["<"
        /* LESS_THAN */
        , "<="
        /* LESS_THAN_OR_EQUAL */
        , ">"
        /* GREATER_THAN */
        , ">="
        /* GREATER_THAN_OR_EQUAL */
        , "!="
        /* NOT_EQUAL */
        , "not-in"
        /* NOT_IN */
        ].indexOf(this.op) >= 0;
      }, n;
    }(function () {});

    var Zn =
    /** @class */
    function (e) {
      function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = A.C(r.referenceValue), i;
      }

      return t.__extends(n, e), n.prototype.matches = function (t) {
        var e = A.i(t.key, this.key);
        return this._n(e);
      }, n;
    }(Jn),
        tr =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "in"
        /* IN */
        , n) || this).keys = nr("in"
        /* IN */
        , n), r;
      }

      return t.__extends(n, e), n.prototype.matches = function (t) {
        return this.keys.some(function (e) {
          return e.isEqual(t.key);
        });
      }, n;
    }(Jn),
        er =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "not-in"
        /* NOT_IN */
        , n) || this).keys = nr("not-in"
        /* NOT_IN */
        , n), r;
      }

      return t.__extends(n, e), n.prototype.matches = function (t) {
        return !this.keys.some(function (e) {
          return e.isEqual(t.key);
        });
      }, n;
    }(Jn);
    /** Filter that matches on key fields within an array. */


    function nr(t, e) {
      var n;
      return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map(function (t) {
        return A.C(t.referenceValue);
      });
    }
    /** A Filter that implements the array-contains operator. */


    var rr =
    /** @class */
    function (e) {
      function n(t, n) {
        return e.call(this, t, "array-contains"
        /* ARRAY_CONTAINS */
        , n) || this;
      }

      return t.__extends(n, e), n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return he(e) && te(e.arrayValue, this.value);
      }, n;
    }(Jn),
        ir =
    /** @class */
    function (e) {
      function n(t, n) {
        return e.call(this, t, "in"
        /* IN */
        , n) || this;
      }

      return t.__extends(n, e), n.prototype.matches = function (t) {
        var e = t.field(this.field);
        return null !== e && te(this.value.arrayValue, e);
      }, n;
    }(Jn),
        or =
    /** @class */
    function (e) {
      function n(t, n) {
        return e.call(this, t, "not-in"
        /* NOT_IN */
        , n) || this;
      }

      return t.__extends(n, e), n.prototype.matches = function (t) {
        if (te(this.value.arrayValue, {
          nullValue: "NULL_VALUE"
        })) return !1;
        var e = t.field(this.field);
        return null !== e && !te(this.value.arrayValue, e);
      }, n;
    }(Jn),
        sr =
    /** @class */
    function (e) {
      function n(t, n) {
        return e.call(this, t, "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        , n) || this;
      }

      return t.__extends(n, e), n.prototype.matches = function (t) {
        var e = this,
            n = t.field(this.field);
        return !(!he(n) || !n.arrayValue.values) && n.arrayValue.values.some(function (t) {
          return te(e.value.arrayValue, t);
        });
      }, n;
    }(Jn),
        ur = function (t, e) {
      this.position = t, this.before = e;
    };
    /** A Filter that implements the IN operator. */


    function ar(t) {
      // TODO(b/29183165): Make this collision robust.
      return (t.before ? "b" : "a") + ":" + t.position.map(function (t) {
        return re(t);
      }).join(",");
    }
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */


    function cr(t, e, n) {
      for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i],
            s = t.position[i];
        if (r = o.field.p() ? A.i(A.C(s.referenceValue), n.key) : ee(s, n.field(o.field)), "desc"
        /* DESCENDING */
        === o.dir && (r *= -1), 0 !== r) break;
      }

      return t.before ? r <= 0 : r < 0;
    }

    function hr(t, e) {
      if (null === t) return null === e;
      if (null === e) return !1;
      if (t.before !== e.before || t.position.length !== e.position.length) return !1;

      for (var n = 0; n < t.position.length; n++) if (!Zt(t.position[n], e.position[n])) return !1;

      return !0;
    }
    /**
     * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
     */


    var fr = function (t, e
    /* ASCENDING */
    ) {
      void 0 === e && (e = "asc"), this.field = t, this.dir = e;
    };

    function lr(t, e, n) {
      var r = t.field.p() ? A.i(e.key, n.key) : function (t, e, n) {
        var r = e.field(t),
            i = n.field(t);
        return null !== r && null !== i ? ee(r, i) : y();
      }(t.field, e, n);

      switch (t.dir) {
        case "asc"
        /* ASCENDING */
        :
          return r;

        case "desc"
        /* DESCENDING */
        :
          return -1 * r;

        default:
          return y();
      }
    }

    function pr(t, e) {
      return t.dir === e.dir && t.field.isEqual(e.field);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var dr = function () {
      var t = this;
      this.promise = new Promise(function (e, n) {
        t.resolve = e, t.reject = n;
      });
    },
        vr =
    /** @class */
    function () {
      function t(
      /**
       * The AsyncQueue to run backoff operations on.
       */
      t,
      /**
       * The ID to use when scheduling backoff operations on the AsyncQueue.
       */
      e,
      /**
       * The initial delay (used as the base delay on the first retry attempt).
       * Note that jitter will still be applied, so the actual delay could be as
       * little as 0.5*initialDelayMs.
       */
      n
      /**
       * The multiplier to use to determine the extended base delay after each
       * attempt.
       */
      , r
      /**
       * The maximum base delay after which no further backoff is performed.
       * Note that jitter will still be applied, so the actual delay could be as
       * much as 1.5*maxDelayMs.
       */
      , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.fn = t, this.dn = e, this.wn = n, this.mn = r, this.Tn = i, this.En = 0, this.In = null,
        /** The last backoff attempt, as epoch milliseconds. */
        this.An = Date.now(), this.reset();
      }
      /**
       * Resets the backoff delay.
       *
       * The very next backoffAndWait() will have no delay. If it is called again
       * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
       * subsequent ones will increase according to the backoffFactor.
       */


      return t.prototype.reset = function () {
        this.En = 0;
      },
      /**
       * Resets the backoff delay to the maximum delay (e.g. for use after a
       * RESOURCE_EXHAUSTED error).
       */
      t.prototype.Rn = function () {
        this.En = this.Tn;
      },
      /**
       * Returns a promise that resolves after currentDelayMs, and increases the
       * delay for any subsequent attempts. If there was a pending backoff operation
       * already, it will be canceled.
       */
      t.prototype.gn = function (t) {
        var e = this; // Cancel any pending backoff operation.

        this.cancel(); // First schedule using the current base (which may be 0 and should be
        // honored as such).

        var n = Math.floor(this.En + this.Pn()),
            r = Math.max(0, Date.now() - this.An),
            i = Math.max(0, n - r); // Guard against lastAttemptTime being in the future due to a clock change.

        i > 0 && l("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.En + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.In = this.fn.yn(this.dn, i, function () {
          return e.An = Date.now(), t();
        }), // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.En *= this.mn, this.En < this.wn && (this.En = this.wn), this.En > this.Tn && (this.En = this.Tn);
      }, t.prototype.Vn = function () {
        null !== this.In && (this.In.pn(), this.In = null);
      }, t.prototype.cancel = function () {
        null !== this.In && (this.In.cancel(), this.In = null);
      },
      /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
      t.prototype.Pn = function () {
        return (Math.random() - .5) * this.En;
      }, t;
    }(),
        yr =
    /** @class */
    function () {
      function t(t) {
        var e = this; // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.

        this.bn = null, this.vn = null, // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Sn = !1, // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Dn = !1, t(function (t) {
          e.Sn = !0, e.result = t, e.bn && // value should be defined unless T is Void, but we can't express
          // that in the type system.
          e.bn(t);
        }, function (t) {
          e.Sn = !0, e.error = t, e.vn && e.vn(t);
        });
      }

      return t.prototype.catch = function (t) {
        return this.next(void 0, t);
      }, t.prototype.next = function (e, n) {
        var r = this;
        return this.Dn && y(), this.Dn = !0, this.Sn ? this.error ? this.Cn(n, this.error) : this.Nn(e, this.result) : new t(function (t, i) {
          r.bn = function (n) {
            r.Nn(e, n).next(t, i);
          }, r.vn = function (e) {
            r.Cn(n, e).next(t, i);
          };
        });
      }, t.prototype.Fn = function () {
        var t = this;
        return new Promise(function (e, n) {
          t.next(e, n);
        });
      }, t.prototype.xn = function (e) {
        try {
          var n = e();
          return n instanceof t ? n : t.resolve(n);
        } catch (e) {
          return t.reject(e);
        }
      }, t.prototype.Nn = function (e, n) {
        return e ? this.xn(function () {
          return e(n);
        }) : t.resolve(n);
      }, t.prototype.Cn = function (e, n) {
        return e ? this.xn(function () {
          return e(n);
        }) : t.reject(n);
      }, t.resolve = function (e) {
        return new t(function (t, n) {
          t(e);
        });
      }, t.reject = function (e) {
        return new t(function (t, n) {
          n(e);
        });
      }, t.$n = function ( // Accept all Promise types in waitFor().
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e) {
        return new t(function (t, n) {
          var r = 0,
              i = 0,
              o = !1;
          e.forEach(function (e) {
            ++r, e.next(function () {
              ++i, o && i === r && t();
            }, function (t) {
              return n(t);
            });
          }), o = !0, i === r && t();
        });
      },
      /**
       * Given an array of predicate functions that asynchronously evaluate to a
       * boolean, implements a short-circuiting `or` between the results. Predicates
       * will be evaluated until one of them returns `true`, then stop. The final
       * result will be whether any of them returned `true`.
       */
      t.kn = function (e) {
        for (var n = t.resolve(!1), r = function (e) {
          n = n.next(function (n) {
            return n ? t.resolve(n) : e();
          });
        }, i = 0, o = e; i < o.length; i++) {
          r(o[i]);
        }

        return n;
      }, t.forEach = function (t, e) {
        var n = this,
            r = [];
        return t.forEach(function (t, i) {
          r.push(e.call(n, t, i));
        }), this.$n(r);
      }, t;
    }(),
        gr =
    /** @class */
    function () {
      /*
       * Creates a new SimpleDb wrapper for IndexedDb database `name`.
       *
       * Note that `version` must not be a downgrade. IndexedDB does not support
       * downgrading the schema version. We currently do not support any way to do
       * versioning outside of IndexedDB's versioning mechanism, as only
       * version-upgrade transactions are allowed to do things like create
       * objectstores.
       */
      function e(t, n, i) {
        this.name = t, this.version = n, this.Mn = i, // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === e.On(r.getUA()) && p("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
      }
      /** Deletes the specified database. */


      return e.delete = function (t) {
        return l("SimpleDb", "Removing database:", t), Er(window.indexedDB.deleteDatabase(t)).Fn();
      },
      /** Returns true if IndexedDB is available in the current environment. */
      e.Ln = function () {
        if ("undefined" == typeof indexedDB) return !1;
        if (e.Bn()) return !0; // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.

        var t = r.getUA(),
            n = e.On(t),
            i = 0 < n && n < 10,
            o = e.qn(t),
            s = 0 < o && o < 4.5; // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.

        return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || i || s);
      },
      /**
       * Returns true if the backing IndexedDB store is the Node IndexedDBShim
       * (see https://github.com/axemclion/IndexedDBShim).
       */
      e.Bn = function () {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Un);
      },
      /** Helper to get a typed SimpleDbStore from a transaction. */
      e.Qn = function (t, e) {
        return t.store(e);
      }, // visible for testing

      /** Parse User Agent to determine iOS version. Returns -1 if not found. */
      e.On = function (t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
            n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
      }, // visible for testing

      /** Parse User Agent to determine Android version. Returns -1 if not found. */
      e.qn = function (t) {
        var e = t.match(/Android ([\d.]+)/i),
            n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
      },
      /**
       * Opens the specified database, creating or upgrading it if necessary.
       */
      e.prototype.Wn = function (e) {
        return t.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.db ? [3
                /*break*/
                , 2] : (l("SimpleDb", "Opening database:", this.name), n = this, [4
                /*yield*/
                , new Promise(function (t, n) {
                  // TODO(mikelehen): Investigate browser compatibility.
                  // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
                  // suggests IE9 and older WebKit browsers handle upgrade
                  // differently. They expect setVersion, as described here:
                  // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
                  var i = indexedDB.open(r.name, r.version);
                  i.onsuccess = function (e) {
                    var n = e.target.result;
                    t(n);
                  }, i.onblocked = function () {
                    n(new wr(e, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                  }, i.onerror = function (t) {
                    var r = t.target.error;
                    "VersionError" === r.name ? n(new c(a.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n(new wr(e, r));
                  }, i.onupgradeneeded = function (t) {
                    l("SimpleDb", 'Database "' + r.name + '" requires upgrade from version:', t.oldVersion);
                    var e = t.target.result;
                    r.Mn.createOrUpgrade(e, i.transaction, t.oldVersion, r.version).next(function () {
                      l("SimpleDb", "Database upgrade to version " + r.version + " complete");
                    });
                  };
                })]);

              case 1:
                n.db = t.sent(), t.label = 2;

              case 2:
                return [2
                /*return*/
                , (this.jn && (this.db.onversionchange = function (t) {
                  return r.jn(t);
                }), this.db)];
            }
          });
        });
      }, e.prototype.Kn = function (t) {
        this.jn = t, this.db && (this.db.onversionchange = function (e) {
          return t(e);
        });
      }, e.prototype.runTransaction = function (e, n, r, i) {
        return t.__awaiter(this, void 0, void 0, function () {
          var o, s, u, a, c;
          return t.__generator(this, function (h) {
            switch (h.label) {
              case 0:
                o = "readonly" === n, s = 0, u = function () {
                  var n, u, c, h, f;
                  return t.__generator(this, function (t) {
                    switch (t.label) {
                      case 0:
                        ++s, t.label = 1;

                      case 1:
                        return t.trys.push([1, 4,, 5]), [4
                        /*yield*/
                        , a.Wn(e)];

                      case 2:
                        // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                        // fire), but still return the original transactionFnResult back to the
                        // caller.
                        return a.db = t.sent(), n = br.open(a.db, e, o ? "readonly" : "readwrite", r), u = i(n).catch(function (t) {
                          // Abort the transaction if there was an error.
                          return n.abort(t), yr.reject(t);
                        }).Fn(), c = {}, u.catch(function () {}), [4
                        /*yield*/
                        , n.Gn];

                      case 3:
                        return [2
                        /*return*/
                        , (c.value = ( // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                        // fire), but still return the original transactionFnResult back to the
                        // caller.
                        t.sent(), u), c)];

                      case 4:
                        return h = t.sent(), f = "FirebaseError" !== h.name && s < 3, l("SimpleDb", "Transaction failed with error:", h.message, "Retrying:", f), a.close(), f ? [3
                        /*break*/
                        , 5] : [2
                        /*return*/
                        , {
                          value: Promise.reject(h)
                        }];

                      case 5:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                }, a = this, h.label = 1;

              case 1:
                return [5
                /*yield**/
                , u()];

              case 2:
                if ("object" == typeof (c = h.sent())) return [2
                /*return*/
                , c.value];
                h.label = 3;

              case 3:
                return [3
                /*break*/
                , 1];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, e.prototype.close = function () {
        this.db && this.db.close(), this.db = void 0;
      }, e;
    }(),
        mr =
    /** @class */
    function () {
      function t(t) {
        this.zn = t, this.Hn = !1, this.Yn = null;
      }

      return Object.defineProperty(t.prototype, "Sn", {
        get: function () {
          return this.Hn;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "Jn", {
        get: function () {
          return this.Yn;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "cursor", {
        set: function (t) {
          this.zn = t;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * This function can be called to stop iteration at any point.
       */
      t.prototype.done = function () {
        this.Hn = !0;
      },
      /**
       * This function can be called to skip to that next key, which could be
       * an index or a primary key.
       */
      t.prototype.Xn = function (t) {
        this.Yn = t;
      },
      /**
       * Delete the current cursor value from the object store.
       *
       * NOTE: You CANNOT do this with a keysOnly query.
       */
      t.prototype.delete = function () {
        return Er(this.zn.delete());
      }, t;
    }(),
        wr =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this, a.UNAVAILABLE, "IndexedDB transaction '" + t + "' failed: " + n) || this).name = "IndexedDbTransactionError", r;
      }

      return t.__extends(n, e), n;
    }(c);
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A helper for running delayed tasks following an exponential backoff curve
     * between attempts.
     *
     * Each delay is made up of a "base" delay which follows the exponential
     * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
     * base delay. This prevents clients from accidentally synchronizing their
     * delays causing spikes of load to the backend.
     */

    /** Verifies whether `e` is an IndexedDbTransactionError. */


    function _r(t) {
      // Use name equality, as instanceof checks on errors don't work with errors
      // that wrap other errors.
      return "IndexedDbTransactionError" === t.name;
    }
    /**
     * Wraps an IDBTransaction and exposes a store() method to get a handle to a
     * specific object store.
     */


    var br =
    /** @class */
    function () {
      function t(t, e) {
        var n = this;
        this.action = t, this.transaction = e, this.aborted = !1,
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.Zn = new dr(), this.transaction.oncomplete = function () {
          n.Zn.resolve();
        }, this.transaction.onabort = function () {
          e.error ? n.Zn.reject(new wr(t, e.error)) : n.Zn.resolve();
        }, this.transaction.onerror = function (e) {
          var r = Nr(e.target.error);
          n.Zn.reject(new wr(t, r));
        };
      }

      return t.open = function (e, n, r, i) {
        try {
          return new t(n, e.transaction(i, r));
        } catch (e) {
          throw new wr(n, e);
        }
      }, Object.defineProperty(t.prototype, "Gn", {
        get: function () {
          return this.Zn.promise;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.abort = function (t) {
        t && this.Zn.reject(t), this.aborted || (l("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort());
      },
      /**
       * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
       * operations performed on the SimpleDbStore happen within the context of this
       * transaction and it cannot be used anymore once the transaction is
       * completed.
       *
       * Note that we can't actually enforce that the KeyType and ValueType are
       * correct, but they allow type safety through the rest of the consuming code.
       */
      t.prototype.store = function (t) {
        var e = this.transaction.objectStore(t);
        return new Ir(e);
      }, t;
    }(),
        Ir =
    /** @class */
    function () {
      function t(t) {
        this.store = t;
      }

      return t.prototype.put = function (t, e) {
        var n;
        return void 0 !== e ? (l("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (l("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), Er(n);
      },
      /**
       * Adds a new value into an Object Store and returns the new key. Similar to
       * IndexedDb's `add()`, this method will fail on primary key collisions.
       *
       * @param value The object to write.
       * @return The key of the value to add.
       */
      t.prototype.add = function (t) {
        return l("SimpleDb", "ADD", this.store.name, t, t), Er(this.store.add(t));
      },
      /**
       * Gets the object with the specified key from the specified store, or null
       * if no object exists with the specified key.
       *
       * @key The key of the object to get.
       * @return The object with the specified key or null if no object exists.
       */
      t.prototype.get = function (t) {
        var e = this; // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        return Er(this.store.get(t)).next(function (n) {
          // Normalize nonexistence to null.
          return void 0 === n && (n = null), l("SimpleDb", "GET", e.store.name, t, n), n;
        });
      }, t.prototype.delete = function (t) {
        return l("SimpleDb", "DELETE", this.store.name, t), Er(this.store.delete(t));
      },
      /**
       * If we ever need more of the count variants, we can add overloads. For now,
       * all we need is to count everything in a store.
       *
       * Returns the number of rows in the store.
       */
      t.prototype.count = function () {
        return l("SimpleDb", "COUNT", this.store.name), Er(this.store.count());
      }, t.prototype.ts = function (t, e) {
        var n = this.cursor(this.options(t, e)),
            r = [];
        return this.es(n, function (t, e) {
          r.push(e);
        }).next(function () {
          return r;
        });
      }, t.prototype.ns = function (t, e) {
        l("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.ss = !1;
        var r = this.cursor(n);
        return this.es(r, function (t, e, n) {
          return n.delete();
        });
      }, t.prototype.rs = function (t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.es(r, e);
      },
      /**
       * Iterates over a store, but waits for the given callback to complete for
       * each entry before iterating the next entry. This allows the callback to do
       * asynchronous work to determine if this iteration should continue.
       *
       * The provided callback should return `true` to continue iteration, and
       * `false` otherwise.
       */
      t.prototype.os = function (t) {
        var e = this.cursor({});
        return new yr(function (n, r) {
          e.onerror = function (t) {
            var e = Nr(t.target.error);
            r(e);
          }, e.onsuccess = function (e) {
            var r = e.target.result;
            r ? t(r.primaryKey, r.value).next(function (t) {
              t ? r.continue() : n();
            }) : n();
          };
        });
      }, t.prototype.es = function (t, e) {
        var n = [];
        return new yr(function (r, i) {
          t.onerror = function (t) {
            i(t.target.error);
          }, t.onsuccess = function (t) {
            var i = t.target.result;

            if (i) {
              var o = new mr(i),
                  s = e(i.primaryKey, i.value, o);

              if (s instanceof yr) {
                var u = s.catch(function (t) {
                  return o.done(), yr.reject(t);
                });
                n.push(u);
              }

              o.Sn ? r() : null === o.Jn ? i.continue() : i.continue(o.Jn);
            } else r();
          };
        }).next(function () {
          return yr.$n(n);
        });
      }, t.prototype.options = function (t, e) {
        var n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
          index: n,
          range: e
        };
      }, t.prototype.cursor = function (t) {
        var e = "next";

        if (t.reverse && (e = "prev"), t.index) {
          var n = this.store.index(t.index);
          return t.ss ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }

        return this.store.openCursor(t.range, e);
      }, t;
    }();
    /**
     * A wrapper around an IDBObjectStore providing an API that:
     *
     * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
     * methods for acting against the object store.
     * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
     * method return a PersistencePromise instead.
     * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
     * intermediate IndexedDB types (IDBCursorWithValue, etc.)
     */

    /**
     * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
     * handlers to resolve / reject the PersistencePromise as appropriate.
     */


    function Er(t) {
      return new yr(function (e, n) {
        t.onsuccess = function (t) {
          var n = t.target.result;
          e(n);
        }, t.onerror = function (t) {
          var e = Nr(t.target.error);
          n(e);
        };
      });
    } // Guard so we only report the error once.


    var Tr = !1;

    function Nr(t) {
      var e = gr.On(r.getUA());

      if (e >= 12.2 && e < 13) {
        var n = "An internal error was encountered in the Indexed Database server";

        if (t.message.indexOf(n) >= 0) {
          // Wrap error in a more descriptive one.
          var i = new c("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
          return Tr || (Tr = !0, // Throw a global exception outside of this promise chain, for the user to
          // potentially catch.
          setTimeout(function () {
            throw i;
          }, 0)), i;
        }
      }

      return t;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** The Platform's 'window' implementation or null if not available. */


    function Ar() {
      // `window` is not always available, e.g. in ReactNative and WebWorkers.
      // eslint-disable-next-line no-restricted-globals
      return "undefined" != typeof window ? window : null;
    }
    /** The Platform's 'document' implementation or null if not available. */


    function Sr() {
      // `document` is not always available, e.g. in ReactNative and WebWorkers.
      // eslint-disable-next-line no-restricted-globals
      return "undefined" != typeof document ? document : null;
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Represents an operation scheduled to be run in the future on an AsyncQueue.
     *
     * It is created via DelayedOperation.createAndSchedule().
     *
     * Supports cancellation (via cancel()) and early execution (via skipDelay()).
     *
     * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
     * in newer versions of TypeScript defines `finally`, which is not available in
     * IE.
     */


    var Dr =
    /** @class */
    function () {
      function t(t, e, n, r, i) {
        this.cs = t, this.dn = e, this.us = n, this.op = r, this.hs = i, this.ls = new dr(), this.then = this.ls.promise.then.bind(this.ls.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.ls.promise.catch(function (t) {})
        /**
        * Creates and returns a DelayedOperation that has been scheduled to be
        * executed on the provided asyncQueue after the provided delayMs.
        *
        * @param asyncQueue The queue to schedule the operation on.
        * @param id A Timer ID identifying the type of operation this is.
        * @param delayMs The delay (ms) before the operation should be scheduled.
        * @param op The operation to run.
        * @param removalCallback A callback to be called synchronously once the
        *   operation is executed or canceled, notifying the AsyncQueue to remove it
        *   from its delayedOperations list.
        *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
        *   the DelayedOperation class public.
        */
        ;
      }

      return t._s = function (e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
      },
      /**
       * Starts the timer. This is called immediately after construction by
       * createAndSchedule().
       */
      t.prototype.start = function (t) {
        var e = this;
        this.fs = setTimeout(function () {
          return e.ds();
        }, t);
      },
      /**
       * Queues the operation to run immediately (if it hasn't already been run or
       * canceled).
       */
      t.prototype.pn = function () {
        return this.ds();
      },
      /**
       * Cancels the operation if it hasn't already been executed or canceled. The
       * promise will be rejected.
       *
       * As long as the operation has not yet been run, calling cancel() provides a
       * guarantee that the operation will not be run.
       */
      t.prototype.cancel = function (t) {
        null !== this.fs && (this.clearTimeout(), this.ls.reject(new c(a.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
      }, t.prototype.ds = function () {
        var t = this;
        this.cs.ws(function () {
          return null !== t.fs ? (t.clearTimeout(), t.op().then(function (e) {
            return t.ls.resolve(e);
          })) : Promise.resolve();
        });
      }, t.prototype.clearTimeout = function () {
        null !== this.fs && (this.hs(this), clearTimeout(this.fs), this.fs = null);
      }, t;
    }(),
        xr =
    /** @class */
    function () {
      function e() {
        var t = this; // The last promise in the queue.

        this.Ts = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Es = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Is = !1, // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.As = [], // visible for testing
        this.Rs = null, // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.gs = !1, // List of TimerIds to fast-forward delays for.
        this.Ps = [], // Backoff timer used to schedule retries for retryable operations
        this.ys = new vr(this, "async_queue_retry"
        /* AsyncQueueRetry */
        ), // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Vs = function () {
          var e = Sr();
          e && l("AsyncQueue", "Visibility state changed to  ", e.visibilityState), t.ys.Vn();
        };
        var e = Sr();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Vs);
      }

      return Object.defineProperty(e.prototype, "ps", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function () {
          return this.Is;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Adds a new operation to the queue without waiting for it to complete (i.e.
       * we ignore the Promise result).
       */
      e.prototype.ws = function (t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
      },
      /**
       * Regardless if the queue has initialized shutdown, adds a new operation to the
       * queue without waiting for it to complete (i.e. we ignore the Promise result).
       */
      e.prototype.bs = function (t) {
        this.vs(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Ss(t);
      },
      /**
       * Initialize the shutdown of this queue. Once this method is called, the
       * only possible way to request running an operation is through
       * `enqueueEvenWhileRestricted()`.
       */
      e.prototype.Ds = function () {
        if (!this.Is) {
          this.Is = !0;
          var t = Sr();
          t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Vs);
        }
      },
      /**
       * Adds a new operation to the queue. Returns a promise that will be resolved
       * when the promise returned by the new operation is (with its value).
       */
      e.prototype.enqueue = function (t) {
        return this.vs(), this.Is ? new Promise(function (t) {}) : this.Ss(t);
      },
      /**
       * Enqueue a retryable operation.
       *
       * A retryable operation is rescheduled with backoff if it fails with a
       * IndexedDbTransactionError (the error type used by SimpleDb). All
       * retryable operations are executed in order and only run if all prior
       * operations were retried successfully.
       */
      e.prototype.Cs = function (t) {
        var e = this;
        this.ws(function () {
          return e.Es.push(t), e.Ns();
        });
      },
      /**
       * Runs the next operation from the retryable queue. If the operation fails,
       * reschedules with backoff.
       */
      e.prototype.Ns = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e,
              n = this;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                if (0 === this.Es.length) return [3
                /*break*/
                , 5];
                t.label = 1;

              case 1:
                return t.trys.push([1, 3,, 4]), [4
                /*yield*/
                , this.Es[0]()];

              case 2:
                return t.sent(), this.Es.shift(), this.ys.reset(), [3
                /*break*/
                , 4];

              case 3:
                if (!_r(e = t.sent())) throw e; // Failure will be handled by AsyncQueue

                return l("AsyncQueue", "Operation failed with retryable error: " + e), [3
                /*break*/
                , 4];

              case 4:
                this.Es.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
                // This is necessary to run retryable operations that failed during
                // their initial attempt since we don't know whether they are already
                // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                // call scheduled here.
                // Since `backoffAndRun()` cancels an existing backoff and schedules a
                // new backoff on every call, there is only ever a single additional
                // operation in the queue.
                this.ys.gn(function () {
                  return n.Ns();
                }), t.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, e.prototype.Ss = function (t) {
        var e = this,
            n = this.Ts.then(function () {
          return e.gs = !0, t().catch(function (t) {
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw e.Rs = t, e.gs = !1, p("INTERNAL UNHANDLED ERROR: ",
            /**
            * Chrome includes Error.message in Error.stack. Other browsers do not.
            * This returns expected output of message + stack when available.
            * @param error Error or FirestoreError
            */
            function (t) {
              var e = t.message || "";
              return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e;
            }(t)), t;
          }).then(function (t) {
            return e.gs = !1, t;
          });
        });
        return this.Ts = n, n;
      },
      /**
       * Schedules an operation to be queued on the AsyncQueue once the specified
       * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
       * or fast-forward the operation prior to its running.
       */
      e.prototype.yn = function (t, e, n) {
        var r = this;
        this.vs(), // Fast-forward delays for timerIds that have been overriden.
        this.Ps.indexOf(t) > -1 && (e = 0);

        var i = Dr._s(this, t, e, n, function (t) {
          return r.Fs(t);
        });

        return this.As.push(i), i;
      }, e.prototype.vs = function () {
        this.Rs && y();
      },
      /**
       * Verifies there's an operation currently in-progress on the AsyncQueue.
       * Unfortunately we can't verify that the running code is in the promise chain
       * of that operation, so this isn't a foolproof check, but it should be enough
       * to catch some bugs.
       */
      e.prototype.xs = function () {},
      /**
       * Waits until all currently queued tasks are finished executing. Delayed
       * operations are not run.
       */
      e.prototype.$s = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return [4
                /*yield*/
                , e = this.Ts];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                if (e !== this.Ts) return [3
                /*break*/
                , 0];
                t.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * For Tests: Determine if a delayed operation with a particular TimerId
       * exists.
       */
      e.prototype.ks = function (t) {
        for (var e = 0, n = this.As; e < n.length; e++) {
          if (n[e].dn === t) return !0;
        }

        return !1;
      },
      /**
       * For Tests: Runs some or all delayed operations early.
       *
       * @param lastTimerId Delayed operations up to and including this TimerId will
       *  be drained. Pass TimerId.All to run all delayed operations.
       * @returns a Promise that resolves once all operations have been run.
       */
      e.prototype.Ms = function (t) {
        var e = this; // Note that draining may generate more delayed ops, so we do that first.

        return this.$s().then(function () {
          // Run ops in the same order they'd run if they ran naturally.
          e.As.sort(function (t, e) {
            return t.us - e.us;
          });

          for (var n = 0, r = e.As; n < r.length; n++) {
            var i = r[n];
            if (i.pn(), "all"
            /* All */
            !== t && i.dn === t) break;
          }

          return e.$s();
        });
      },
      /**
       * For Tests: Skip all subsequent delays for a timer id.
       */
      e.prototype.Os = function (t) {
        this.Ps.push(t);
      },
      /** Called once a DelayedOperation is run or canceled. */
      e.prototype.Fs = function (t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.As.indexOf(t);
        this.As.splice(e, 1);
      }, e;
    }();
    /**
     * Returns a FirestoreError that can be surfaced to the user if the provided
     * error is an IndexedDbTransactionError. Re-throws the error otherwise.
     */


    function Lr(t, e) {
      if (p("AsyncQueue", e + ": " + t), _r(t)) return new c(a.UNAVAILABLE, e + ": " + t);
      throw t;
    }

    var kr = function () {
      this.Ls = void 0, this.listeners = [];
    },
        Rr = function () {
      this.Bs = new it(function (t) {
        return Hn(t);
      }, Qn), this.onlineState = "Unknown"
      /* Unknown */
      , this.qs = new Set();
    };

    function Or(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i, o, s, u, a, c;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              if (r = m(e), i = n.query, o = !1, (s = r.Bs.get(i)) || (o = !0, s = new kr()), !o) return [3
              /*break*/
              , 4];
              t.label = 1;

            case 1:
              return t.trys.push([1, 3,, 4]), u = s, [4
              /*yield*/
              , r.Us(i)];

            case 2:
              return u.Ls = t.sent(), [3
              /*break*/
              , 4];

            case 3:
              return a = t.sent(), c = Lr(a, "Initialization of query '" + Yn(n.query) + "' failed"), [2
              /*return*/
              , void n.onError(c)];

            case 4:
              return r.Bs.set(i, s), s.listeners.push(n), // Run global snapshot listeners if a consistent snapshot has been emitted.
              n.Qs(r.onlineState), s.Ls && n.Ws(s.Ls) && Cr(r), [2
              /*return*/
              ];
          }
        });
      });
    }

    function Pr(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i, o, s, u;
        return t.__generator(this, function (t) {
          return r = m(e), i = n.query, o = !1, (s = r.Bs.get(i)) && (u = s.listeners.indexOf(n)) >= 0 && (s.listeners.splice(u, 1), o = 0 === s.listeners.length), o ? [2
          /*return*/
          , (r.Bs.delete(i), r.js(i))] : [2
          /*return*/
          ];
        });
      });
    }

    function Vr(t, e) {
      for (var n = m(t), r = !1, i = 0, o = e; i < o.length; i++) {
        var s = o[i],
            u = s.query,
            a = n.Bs.get(u);

        if (a) {
          for (var c = 0, h = a.listeners; c < h.length; c++) {
            h[c].Ws(s) && (r = !0);
          }

          a.Ls = s;
        }
      }

      r && Cr(n);
    }

    function Ur(t, e, n) {
      var r = m(t),
          i = r.Bs.get(e);
      if (i) for (var o = 0, s = i.listeners; o < s.length; o++) {
        s[o].onError(n);
      } // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
      // after an error.

      r.Bs.delete(e);
    } // Call all global snapshot listeners that have been set.


    function Cr(t) {
      t.qs.forEach(function (t) {
        t.next();
      });
    }
    /**
     * QueryListener takes a series of internal view snapshots and determines
     * when to raise the event.
     *
     * It uses an Observer to dispatch events.
     */


    var Fr =
    /** @class */
    function () {
      function t(t, e, n) {
        this.query = t, this.Ks = e,
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Gs = !1, this.zs = null, this.onlineState = "Unknown"
        /* Unknown */
        , this.options = n || {}
        /**
        * Applies the new ViewSnapshot to this listener, raising a user-facing event
        * if applicable (depending on what changed, whether the user has opted into
        * metadata-only changes, etc.). Returns true if a user-facing event was
        * indeed raised.
        */
        ;
      }

      return t.prototype.Ws = function (t) {
        if (!this.options.includeMetadataChanges) {
          for ( // Remove the metadata only changes.
          var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
            var i = r[n];
            3
            /* Metadata */
            !== i.type && e.push(i);
          }

          t = new Ft(t.query, t.docs, t.Qt, e, t.Wt, t.fromCache, t.jt,
          /* excludesMetadataChanges= */
          !0);
        }

        var o = !1;
        return this.Gs ? this.Hs(t) && (this.Ks.next(t), o = !0) : this.Ys(t, this.onlineState) && (this.Js(t), o = !0), this.zs = t, o;
      }, t.prototype.onError = function (t) {
        this.Ks.error(t);
      },
      /** Returns whether a snapshot was raised. */
      t.prototype.Qs = function (t) {
        this.onlineState = t;
        var e = !1;
        return this.zs && !this.Gs && this.Ys(this.zs, t) && (this.Js(this.zs), e = !0), e;
      }, t.prototype.Ys = function (t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0; // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).

        var n = "Offline"
        /* Offline */
        !== e; // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.

        return !(this.options.Xs && n || t.docs.m() && "Offline"
        /* Offline */
        !== e); // Raise data from cache if we have any documents or we are offline
      }, t.prototype.Hs = function (t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.zs && this.zs.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.jt && !e) && !0 === this.options.includeMetadataChanges; // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
      }, t.prototype.Js = function (t) {
        t = Ft.Gt(t.query, t.docs, t.Wt, t.fromCache), this.Gs = !0, this.Ks.next(t);
      }, t;
    }(),
        Mr =
    /** @class */
    function () {
      function t(t) {
        this.uid = t;
      }

      return t.prototype.Zs = function () {
        return null != this.uid;
      },
      /**
       * Returns a key representing this user, suitable for inclusion in a
       * dictionary.
       */
      t.prototype.ti = function () {
        return this.Zs() ? "uid:" + this.uid : "anonymous-user";
      }, t.prototype.isEqual = function (t) {
        return t.uid === this.uid;
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Simple wrapper around a nullable UID. Mostly exists to make code more
     * readable.
     */

    /** A user with a null UID. */


    Mr.UNAUTHENTICATED = new Mr(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
    // non-FirebaseAuth providers.
    Mr.ei = new Mr("google-credentials-uid"), Mr.ni = new Mr("first-party-uid");
    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
     * exceed. All subsequent calls to next will return increasing values. If provided with a
     * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
     * well as write out sequence numbers that it produces via `next()`.
     */

    var qr =
    /** @class */
    function () {
      function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.si = function (t) {
          return n.ii(t);
        }, this.ri = function (t) {
          return e.oi(t);
        });
      }

      return t.prototype.ii = function (t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
      }, t.prototype.next = function () {
        var t = ++this.previousValue;
        return this.ri && this.ri(t), t;
      }, t;
    }();
    /** Assembles the key for a client state in WebStorage */


    function jr(t, e) {
      return "firestore_clients_" + t + "_" + e;
    } // The format of the WebStorage key that stores the mutation state is:
    //     firestore_mutations_<persistence_prefix>_<batch_id>
    //     (for unauthenticated users)
    // or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
    // 'user_uid' is last to avoid needing to escape '_' characters that it might
    // contain.

    /** Assembles the key for a mutation batch in WebStorage */


    function Gr(t, e, n) {
      var r = "firestore_mutations_" + t + "_" + n;
      return e.Zs() && (r += "_" + e.uid), r;
    } // The format of the WebStorage key that stores a query target's metadata is:
    //     firestore_targets_<persistence_prefix>_<target_id>

    /** Assembles the key for a query state in WebStorage */


    function zr(t, e) {
      return "firestore_targets_" + t + "_" + e;
    } // The WebStorage prefix that stores the primary tab's online state. The
    // format of the key is:
    //     firestore_online_state_<persistence_prefix>

    /**
     * Holds the state of a mutation batch, including its user ID, batch ID and
     * whether the batch is 'pending', 'acknowledged' or 'rejected'.
     */
    // Visible for testing


    qr.ai = -1;

    var Br =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
        * Parses a MutationMetadata from its JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.ci = function (e, n, r) {
        var i = JSON.parse(r),
            o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error),
            s = void 0;
        return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new c(i.error.code, i.error.message)), o ? new t(e, n, i.state, s) : (p("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null);
      }, t.prototype.ui = function () {
        var t = {
          state: this.state,
          updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
          code: this.error.code,
          message: this.error.message
        }), JSON.stringify(t);
      }, t;
    }(),
        Wr =
    /** @class */
    function () {
      function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
        * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.ci = function (e, n) {
        var r = JSON.parse(n),
            i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
            o = void 0;
        return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new c(r.error.code, r.error.message)), i ? new t(e, r.state, o) : (p("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null);
      }, t.prototype.ui = function () {
        var t = {
          state: this.state,
          updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
          code: this.error.code,
          message: this.error.message
        }), JSON.stringify(t);
      }, t;
    }(),
        Kr =
    /** @class */
    function () {
      function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
        * Parses a RemoteClientState from the JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.ci = function (e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = Vt(), s = 0; i && s < r.activeTargetIds.length; ++s) i = ct(r.activeTargetIds[s]), o = o.add(r.activeTargetIds[s]);

        return i ? new t(e, o) : (p("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null);
      }, t;
    }(),
        Qr =
    /** @class */
    function () {
      function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
        * Parses a SharedOnlineState from its JSON representation in WebStorage.
        * Logs a warning and returns null if the format of the data is not valid.
        */
        ;
      }

      return t.ci = function (e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (p("SharedClientState", "Failed to parse online state: " + e), null);
      }, t;
    }(),
        Hr =
    /** @class */
    function () {
      function t() {
        this.activeTargetIds = Vt();
      }

      return t.prototype.hi = function (t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
      }, t.prototype.li = function (t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
      },
      /**
       * Converts this entry into a JSON-encoded format we can use for WebStorage.
       * Does not encode `clientId` as it is part of the key in WebStorage.
       */
      t.prototype.ui = function () {
        var t = {
          activeTargetIds: this.activeTargetIds.A(),
          updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
      }, t;
    }(),
        Yr =
    /** @class */
    function () {
      function e(t, e, n, r, i) {
        this.window = t, this.fn = e, this.persistenceKey = n, this._i = r, this.fi = null, this.di = null, this.si = null, this.wi = this.mi.bind(this), this.Ti = new bt(H), this.Ei = !1,
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Ii = []; // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.Ai = jr(this.persistenceKey, this._i), this.Ri =
        /** Assembles the key for the current sequence number. */
        function (t) {
          return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.Ti = this.Ti.ot(this._i, new Hr()), this.gi = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Pi = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.yi = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.Vi =
        /** Assembles the key for the online state of the primary tab. */
        function (t) {
          return "firestore_online_state_" + t;
        }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.wi);
      }
      /** Returns 'true' if WebStorage is available in the current environment. */


      return e.Ln = function (t) {
        return !(!t || !t.localStorage);
      }, e.prototype.start = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e,
              n,
              r,
              i,
              o,
              s,
              u,
              a,
              c,
              h,
              f,
              l = this;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return [4
                /*yield*/
                , this.fi.pi()];

              case 1:
                for (e = t.sent(), n = 0, r = e; n < r.length; n++) (i = r[n]) !== this._i && (o = this.getItem(jr(this.persistenceKey, i))) && (s = Kr.ci(i, o)) && (this.Ti = this.Ti.ot(s.clientId, s));

                for (this.bi(), (u = this.storage.getItem(this.Vi)) && (a = this.vi(u)) && this.Si(a), c = 0, h = this.Ii; c < h.length; c++) f = h[c], this.mi(f);

                return this.Ii = [], // Register a window unload hook to remove the client metadata entry from
                // WebStorage even if `shutdown()` was not called.
                this.window.addEventListener("unload", function () {
                  return l.Di();
                }), this.Ei = !0, [2
                /*return*/
                ];
            }
          });
        });
      }, e.prototype.oi = function (t) {
        this.setItem(this.Ri, JSON.stringify(t));
      }, e.prototype.Ci = function () {
        return this.Ni(this.Ti);
      }, e.prototype.Fi = function (t) {
        var e = !1;
        return this.Ti.forEach(function (n, r) {
          r.activeTargetIds.has(t) && (e = !0);
        }), e;
      }, e.prototype.xi = function (t) {
        this.$i(t, "pending");
      }, e.prototype.ki = function (t, e, n) {
        this.$i(t, e, n), // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.Mi(t);
      }, e.prototype.Oi = function (t) {
        var e = "not-current"; // Lookup an existing query state if the target ID was already registered
        // by another tab

        if (this.Fi(t)) {
          var n = this.storage.getItem(zr(this.persistenceKey, t));

          if (n) {
            var r = Wr.ci(t, n);
            r && (e = r.state);
          }
        }

        return this.Li.hi(t), this.bi(), e;
      }, e.prototype.Bi = function (t) {
        this.Li.li(t), this.bi();
      }, e.prototype.qi = function (t) {
        return this.Li.activeTargetIds.has(t);
      }, e.prototype.Ui = function (t) {
        this.removeItem(zr(this.persistenceKey, t));
      }, e.prototype.Qi = function (t, e, n) {
        this.Wi(t, e, n);
      }, e.prototype.ji = function (t, e, n) {
        var r = this;
        e.forEach(function (t) {
          r.Mi(t);
        }), this.currentUser = t, n.forEach(function (t) {
          r.xi(t);
        });
      }, e.prototype.Ki = function (t) {
        this.Gi(t);
      }, e.prototype.Di = function () {
        this.Ei && (this.window.removeEventListener("storage", this.wi), this.removeItem(this.Ai), this.Ei = !1);
      }, e.prototype.getItem = function (t) {
        var e = this.storage.getItem(t);
        return l("SharedClientState", "READ", t, e), e;
      }, e.prototype.setItem = function (t, e) {
        l("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
      }, e.prototype.removeItem = function (t) {
        l("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
      }, e.prototype.mi = function (e) {
        var n = this,
            r = e; // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.

        if (r.storageArea === this.storage) {
          if (l("SharedClientState", "EVENT", r.key, r.newValue), r.key === this.Ai) return void p("Received WebStorage notification for local change. Another client might have garbage-collected our state");
          this.fn.Cs(function () {
            return t.__awaiter(n, void 0, void 0, function () {
              var e, n, i, o, s, u;
              return t.__generator(this, function (t) {
                if (this.Ei) {
                  if (null !== r.key) if (this.gi.test(r.key)) {
                    if (null == r.newValue) return e = this.zi(r.key), [2
                    /*return*/
                    , this.Hi(e, null)];
                    if (n = this.Yi(r.key, r.newValue)) return [2
                    /*return*/
                    , this.Hi(n.clientId, n)];
                  } else if (this.Pi.test(r.key)) {
                    if (null !== r.newValue && (i = this.Ji(r.key, r.newValue))) return [2
                    /*return*/
                    , this.Xi(i)];
                  } else if (this.yi.test(r.key)) {
                    if (null !== r.newValue && (o = this.Zi(r.key, r.newValue))) return [2
                    /*return*/
                    , this.tr(o)];
                  } else if (r.key === this.Vi) {
                    if (null !== r.newValue && (s = this.vi(r.newValue))) return [2
                    /*return*/
                    , this.Si(s)];
                  } else r.key === this.Ri && (u = function (t) {
                    var e = qr.ai;
                    if (null != t) try {
                      var n = JSON.parse(t);
                      g("number" == typeof n), e = n;
                    } catch (t) {
                      p("SharedClientState", "Failed to read sequence number from WebStorage", t);
                    }
                    return e;
                  }(r.newValue)) !== qr.ai && this.si(u);
                } else this.Ii.push(r);

                return [2
                /*return*/
                ];
              });
            });
          });
        }
      }, Object.defineProperty(e.prototype, "Li", {
        get: function () {
          return this.Ti.get(this._i);
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.bi = function () {
        this.setItem(this.Ai, this.Li.ui());
      }, e.prototype.$i = function (t, e, n) {
        var r = new Br(this.currentUser, t, e, n),
            i = Gr(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.ui());
      }, e.prototype.Mi = function (t) {
        var e = Gr(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
      }, e.prototype.Gi = function (t) {
        var e = {
          clientId: this._i,
          onlineState: t
        };
        this.storage.setItem(this.Vi, JSON.stringify(e));
      }, e.prototype.Wi = function (t, e, n) {
        var r = zr(this.persistenceKey, t),
            i = new Wr(t, e, n);
        this.setItem(r, i.ui());
      },
      /**
       * Parses a client state key in WebStorage. Returns null if the key does not
       * match the expected key format.
       */
      e.prototype.zi = function (t) {
        var e = this.gi.exec(t);
        return e ? e[1] : null;
      },
      /**
       * Parses a client state in WebStorage. Returns 'null' if the value could not
       * be parsed.
       */
      e.prototype.Yi = function (t, e) {
        var n = this.zi(t);
        return Kr.ci(n, e);
      },
      /**
       * Parses a mutation batch state in WebStorage. Returns 'null' if the value
       * could not be parsed.
       */
      e.prototype.Ji = function (t, e) {
        var n = this.Pi.exec(t),
            r = Number(n[1]),
            i = void 0 !== n[2] ? n[2] : null;
        return Br.ci(new Mr(i), r, e);
      },
      /**
       * Parses a query target state from WebStorage. Returns 'null' if the value
       * could not be parsed.
       */
      e.prototype.Zi = function (t, e) {
        var n = this.yi.exec(t),
            r = Number(n[1]);
        return Wr.ci(r, e);
      },
      /**
       * Parses an online state from WebStorage. Returns 'null' if the value
       * could not be parsed.
       */
      e.prototype.vi = function (t) {
        return Qr.ci(t);
      }, e.prototype.Xi = function (e) {
        return t.__awaiter(this, void 0, void 0, function () {
          return t.__generator(this, function (t) {
            return e.user.uid === this.currentUser.uid ? [2
            /*return*/
            , this.fi.er(e.batchId, e.state, e.error)] : (l("SharedClientState", "Ignoring mutation for non-active user " + e.user.uid), [2
            /*return*/
            ]);
          });
        });
      }, e.prototype.tr = function (t) {
        return this.fi.nr(t.targetId, t.state, t.error);
      }, e.prototype.Hi = function (t, e) {
        var n = this,
            r = e ? this.Ti.ot(t, e) : this.Ti.remove(t),
            i = this.Ni(this.Ti),
            o = this.Ni(r),
            s = [],
            u = [];
        return o.forEach(function (t) {
          i.has(t) || s.push(t);
        }), i.forEach(function (t) {
          o.has(t) || u.push(t);
        }), this.fi.sr(s, u).then(function () {
          n.Ti = r;
        });
      }, e.prototype.Si = function (t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.Ti.get(t.clientId) && this.di(t.onlineState);
      }, e.prototype.Ni = function (t) {
        var e = Vt();
        return t.forEach(function (t, n) {
          e = e.kt(n.activeTargetIds);
        }), e;
      }, e;
    }(),
        $r =
    /** @class */
    function () {
      function t() {
        this.ir = new Hr(), this.rr = {}, this.di = null, this.si = null;
      }

      return t.prototype.xi = function (t) {// No op.
      }, t.prototype.ki = function (t, e, n) {// No op.
      }, t.prototype.Oi = function (t) {
        return this.ir.hi(t), this.rr[t] || "not-current";
      }, t.prototype.Qi = function (t, e, n) {
        this.rr[t] = e;
      }, t.prototype.Bi = function (t) {
        this.ir.li(t);
      }, t.prototype.qi = function (t) {
        return this.ir.activeTargetIds.has(t);
      }, t.prototype.Ui = function (t) {
        delete this.rr[t];
      }, t.prototype.Ci = function () {
        return this.ir.activeTargetIds;
      }, t.prototype.Fi = function (t) {
        return this.ir.activeTargetIds.has(t);
      }, t.prototype.start = function () {
        return this.ir = new Hr(), Promise.resolve();
      }, t.prototype.ji = function (t, e, n) {// No op.
      }, t.prototype.Ki = function (t) {// No op.
      }, t.prototype.Di = function () {}, t.prototype.oi = function (t) {}, t;
    }(),
        Xr =
    /** @class */
    function () {
      /**
       * @param batchId The unique ID of this mutation batch.
       * @param localWriteTime The original write time of this mutation.
       * @param baseMutations Mutations that are used to populate the base
       * values when this mutation is applied locally. This can be used to locally
       * overwrite values that are persisted in the remote document cache. Base
       * mutations are never sent to the backend.
       * @param mutations The user-provided mutations in this mutation batch.
       * User-provided mutations are applied both locally and remotely on the
       * backend.
       */
      function t(t, e, n, r) {
        this.batchId = t, this.ar = e, this.baseMutations = n, this.mutations = r
        /**
        * Applies all the mutations in this MutationBatch to the specified document
        * to create a new remote document
        *
        * @param docKey The key of the document to apply mutations to.
        * @param maybeDoc The document to apply mutations to.
        * @param batchResult The result of applying the MutationBatch to the
        * backend.
        */
        ;
      }

      return t.prototype.cr = function (t, e, n) {
        for (var r = n.ur, i = 0; i < this.mutations.length; i++) {
          var o = this.mutations[i];
          o.key.isEqual(t) && (e = dn(o, e, r[i]));
        }

        return e;
      },
      /**
       * Computes the local view of a document given all the mutations in this
       * batch.
       *
       * @param docKey The key of the document to apply mutations to.
       * @param maybeDoc The document to apply mutations to.
       */
      t.prototype.hr = function (t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
          var i = r[n];
          i.key.isEqual(t) && (e = vn(i, e, e, this.ar));
        } // Second, apply all user-provided mutations.


        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
          var a = u[s];
          a.key.isEqual(t) && (e = vn(a, e, o, this.ar));
        }

        return e;
      },
      /**
       * Computes the local view for all provided documents given the mutations in
       * this batch.
       */
      t.prototype.lr = function (t) {
        var e = this,
            n = t; // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).

        return this.mutations.forEach(function (r) {
          var i = e.hr(r.key, t.get(r.key));
          i && (n = n.ot(r.key, i));
        }), n;
      }, t.prototype.keys = function () {
        return this.mutations.reduce(function (t, e) {
          return t.add(e.key);
        }, Ot());
      }, t.prototype.isEqual = function (t) {
        return this.batchId === t.batchId && Y(this.mutations, t.mutations, function (t, e) {
          return gn(t, e);
        }) && Y(this.baseMutations, t.baseMutations, function (t, e) {
          return gn(t, e);
        });
      }, t;
    }(),
        Jr =
    /** @class */
    function () {
      function t(t, e, n,
      /**
       * A pre-computed mapping from each mutated document to the resulting
       * version.
       */
      r) {
        this.batch = t, this._r = e, this.ur = n, this.dr = r
        /**
        * Creates a new MutationBatchResult for the given batch and results. There
        * must be one result for each mutation in the batch. This static factory
        * caches a document=>version mapping (docVersions).
        */
        ;
      }

      return t.from = function (e, n, r) {
        g(e.mutations.length === r.length);

        for (var i = kt, o = e.mutations, s = 0; s < o.length; s++) i = i.ot(o[s].key, r[s].version);

        return new t(e, n, r, i);
      }, t;
    }(),
        Zr =
    /** @class */
    function () {
      function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.wr = new it(function (t) {
          return t.toString();
        }, function (t, e) {
          return t.isEqual(e);
        }), this.mr = !1;
      }

      return Object.defineProperty(t.prototype, "readTime", {
        get: function () {
          return this.Tr;
        },
        set: function (t) {
          this.Tr = t;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Buffers a `RemoteDocumentCache.addEntry()` call.
       *
       * You can only modify documents that have already been retrieved via
       * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
       */
      t.prototype.Er = function (t, e) {
        this.Ir(), this.readTime = e, this.wr.set(t.key, t);
      },
      /**
       * Buffers a `RemoteDocumentCache.removeEntry()` call.
       *
       * You can only remove documents that have already been retrieved via
       * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
       */
      t.prototype.Ar = function (t, e) {
        this.Ir(), e && (this.readTime = e), this.wr.set(t, null);
      },
      /**
       * Looks up an entry in the cache. The buffered changes will first be checked,
       * and if no buffered change applies, this will forward to
       * `RemoteDocumentCache.getEntry()`.
       *
       * @param transaction The transaction in which to perform any persistence
       *     operations.
       * @param documentKey The key of the entry to look up.
       * @return The cached Document or NoDocument entry, or null if we have nothing
       * cached.
       */
      t.prototype.Rr = function (t, e) {
        this.Ir();
        var n = this.wr.get(e);
        return void 0 !== n ? yr.resolve(n) : this.gr(t, e);
      },
      /**
       * Looks up several entries in the cache, forwarding to
       * `RemoteDocumentCache.getEntry()`.
       *
       * @param transaction The transaction in which to perform any persistence
       *     operations.
       * @param documentKeys The keys of the entries to look up.
       * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
       *     entry cannot be found, the corresponding key will be mapped to a null
       *     value.
       */
      t.prototype.getEntries = function (t, e) {
        return this.Pr(t, e);
      },
      /**
       * Applies buffered changes to the underlying RemoteDocumentCache, using
       * the provided transaction.
       */
      t.prototype.apply = function (t) {
        return this.Ir(), this.mr = !0, this.yr(t);
      },
      /** Helper to assert this.changes is not null  */
      t.prototype.Ir = function () {}, t;
    }(),
        ti = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
        ei =
    /** @class */
    function () {
      function t() {
        this.Vr = [];
      }

      return t.prototype.pr = function (t) {
        this.Vr.push(t);
      }, t.prototype.br = function () {
        this.Vr.forEach(function (t) {
          return t();
        });
      }, t;
    }(),
        ni =
    /** @class */
    function () {
      function t(t, e, n) {
        this.vr = t, this.Sr = e, this.Dr = n
        /**
        * Get the local view of the document identified by `key`.
        *
        * @return Local view of the document or null if we don't have any cached
        * state for it.
        */
        ;
      }

      return t.prototype.Cr = function (t, e) {
        var n = this;
        return this.Sr.Nr(t, e).next(function (r) {
          return n.Fr(t, e, r);
        });
      },
      /** Internal version of `getDocument` that allows reusing batches. */
      t.prototype.Fr = function (t, e, n) {
        return this.vr.Rr(t, e).next(function (t) {
          for (var r = 0, i = n; r < i.length; r++) {
            t = i[r].hr(e, t);
          }

          return t;
        });
      }, // Returns the view of the given `docs` as they would appear after applying
      // all mutations in the given `batches`.
      t.prototype.$r = function (t, e, n) {
        var r = Dt();
        return e.forEach(function (t, e) {
          for (var i = 0, o = n; i < o.length; i++) {
            e = o[i].hr(t, e);
          }

          r = r.ot(t, e);
        }), r;
      },
      /**
       * Gets the local view of the documents identified by `keys`.
       *
       * If we don't have cached state for a document in `keys`, a NoDocument will
       * be stored for that key in the resulting set.
       */
      t.prototype.kr = function (t, e) {
        var n = this;
        return this.vr.getEntries(t, e).next(function (e) {
          return n.Mr(t, e);
        });
      },
      /**
       * Similar to `getDocuments`, but creates the local view from the given
       * `baseDocs` without retrieving documents from the local store.
       */
      t.prototype.Mr = function (t, e) {
        var n = this;
        return this.Sr.Or(t, e).next(function (r) {
          var i = n.$r(t, e, r),
              o = St();
          return i.forEach(function (t, e) {
            // TODO(http://b/32275378): Don't conflate missing / deleted.
            e || (e = new Rn(t, st.min())), o = o.ot(t, e);
          }), o;
        });
      },
      /**
       * Performs a query against the local view of all documents.
       *
       * @param transaction The persistence transaction.
       * @param query The query to match documents against.
       * @param sinceReadTime If not set to SnapshotVersion.min(), return only
       *     documents that have been read since this snapshot version (exclusive).
       */
      t.prototype.Lr = function (t, e, n) {
        /**
        * Returns whether the query matches a single document by path (rather than a
        * collection).
        */
        return function (t) {
          return A.F(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.Br(t, e.path) : jn(e) ? this.qr(t, e, n) : this.Ur(t, e, n);
      }, t.prototype.Br = function (t, e) {
        // Just do a simple document lookup.
        return this.Cr(t, new A(e)).next(function (t) {
          var e = Lt();
          return t instanceof kn && (e = e.ot(t.key, t)), e;
        });
      }, t.prototype.qr = function (t, e, n) {
        var r = this,
            i = e.collectionGroup,
            o = Lt();
        return this.Dr.Qr(t, i).next(function (s) {
          return yr.forEach(s, function (s) {
            var u = function (t, e) {
              return new Pn(e,
              /*collectionGroup=*/
              null, t.on.slice(), t.filters.slice(), t.limit, t.an, t.startAt, t.endAt);
            }(e, s.child(i));

            return r.Ur(t, u, n).next(function (t) {
              t.forEach(function (t, e) {
                o = o.ot(t, e);
              });
            });
          }).next(function () {
            return o;
          });
        });
      }, t.prototype.Ur = function (t, e, n) {
        var r,
            i,
            o = this; // Query the remote documents and overlay mutations.

        return this.vr.Lr(t, e, n).next(function (n) {
          return r = n, o.Sr.Wr(t, e);
        }).next(function (e) {
          return i = e, o.jr(t, i, r).next(function (t) {
            r = t;

            for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
              var a = u[s],
                  c = a.key,
                  h = r.get(c),
                  f = vn(a, h, h, o.ar);
              r = f instanceof kn ? r.ot(c, f) : r.remove(c);
            }
          });
        }).next(function () {
          // Finally, filter out any documents that don't actually match
          // the query.
          return r.forEach(function (t, n) {
            $n(e, n) || (r = r.remove(t));
          }), r;
        });
      }, t.prototype.jr = function (t, e, n) {
        for (var r = Ot(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
          var a = u[s];
          a instanceof _n && null === n.get(a.key) && (r = r.add(a.key));
        }

        var c = n;
        return this.vr.getEntries(t, r).next(function (t) {
          return t.forEach(function (t, e) {
            null !== e && e instanceof kn && (c = c.ot(t, e));
          }), c;
        });
      }, t;
    }(),
        ri =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.Kr = n, this.Gr = r;
      }

      return t.zr = function (e, n) {
        for (var r = Ot(), i = Ot(), o = 0, s = n.docChanges; o < s.length; o++) {
          var u = s[o];

          switch (u.type) {
            case 0
            /* Added */
            :
              r = r.add(u.doc.key);
              break;

            case 1
            /* Removed */
            :
              i = i.add(u.doc.key);
            // do nothing
          }
        }

        return new t(e, n.fromCache, r, i);
      }, t;
    }();
    /**
     * Holds the state of a query target, including its target ID and whether the
     * target is 'not-current', 'current' or 'rejected'.
     */
    // Visible for testing

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function ii(t, e) {
      var n = t[0],
          r = t[1],
          i = e[0],
          o = e[1],
          s = H(n, i);
      return 0 === s ? H(r, o) : s;
    }
    /**
     * Used to calculate the nth sequence number. Keeps a rolling buffer of the
     * lowest n values passed to `addElement`, and finally reports the largest of
     * them in `maxValue`.
     */


    var oi =
    /** @class */
    function () {
      function t(t) {
        this.Hr = t, this.buffer = new Tt(ii), this.Yr = 0;
      }

      return t.prototype.Jr = function () {
        return ++this.Yr;
      }, t.prototype.Xr = function (t) {
        var e = [t, this.Jr()];
        if (this.buffer.size < this.Hr) this.buffer = this.buffer.add(e);else {
          var n = this.buffer.last();
          ii(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
      }, Object.defineProperty(t.prototype, "maxValue", {
        get: function () {
          // Guaranteed to be non-empty. If we decide we are not collecting any
          // sequence numbers, nthSequenceNumber below short-circuits. If we have
          // decided that we are collecting n sequence numbers, it's because n is some
          // percentage of the existing sequence numbers. That means we should never
          // be in a situation where we are collecting sequence numbers but don't
          // actually have any.
          return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }(),
        si = {
      Zr: !1,
      eo: 0,
      no: 0,
      so: 0
    },
        ui =
    /** @class */
    function () {
      function t( // When we attempt to collect, we will only do so if the cache size is greater than this
      // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
      t, // The percentage of sequence numbers that we will attempt to collect
      e, // A cap on the total number of sequence numbers that will be collected. This prevents
      // us from collecting a huge number of sequence numbers if the cache has grown very large.
      n) {
        this.io = t, this.ro = e, this.oo = n;
      }

      return t.ao = function (e) {
        return new t(e, t.co, t.uo);
      }, t;
    }();

    ui.ho = -1, ui.lo = 1048576, ui._o = 41943040, ui.co = 10, ui.uo = 1e3, ui.fo = new ui(ui._o, ui.co, ui.uo), ui.do = new ui(ui.ho, 0, 0);
    /**
     * This class is responsible for the scheduling of LRU garbage collection. It handles checking
     * whether or not GC is enabled, as well as which delay to use before the next run.
     */

    var ai =
    /** @class */
    function () {
      function e(t, e) {
        this.wo = t, this.cs = e, this.mo = !1, this.To = null;
      }

      return e.prototype.start = function (t) {
        this.wo.params.io !== ui.ho && this.Eo(t);
      }, e.prototype.stop = function () {
        this.To && (this.To.cancel(), this.To = null);
      }, Object.defineProperty(e.prototype, "Ei", {
        get: function () {
          return null !== this.To;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.Eo = function (e) {
        var n = this,
            r = this.mo ? 3e5 : 6e4;
        l("LruGarbageCollector", "Garbage collection scheduled in " + r + "ms"), this.To = this.cs.yn("lru_garbage_collection"
        /* LruGarbageCollection */
        , r, function () {
          return t.__awaiter(n, void 0, void 0, function () {
            var n;
            return t.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  this.To = null, this.mo = !0, t.label = 1;

                case 1:
                  return t.trys.push([1, 3,, 7]), [4
                  /*yield*/
                  , e.Io(this.wo)];

                case 2:
                  return t.sent(), [3
                  /*break*/
                  , 7];

                case 3:
                  return _r(n = t.sent()) ? (l("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", n), [3
                  /*break*/
                  , 6]) : [3
                  /*break*/
                  , 4];

                case 4:
                  return [4
                  /*yield*/
                  , Do(n)];

                case 5:
                  t.sent(), t.label = 6;

                case 6:
                  return [3
                  /*break*/
                  , 7];

                case 7:
                  return [4
                  /*yield*/
                  , this.Eo(e)];

                case 8:
                  return t.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        });
      }, e;
    }(),
        ci =
    /** @class */
    function () {
      function t(t, e) {
        this.Ao = t, this.params = e
        /** Given a percentile of target to collect, returns the number of targets to collect. */
        ;
      }

      return t.prototype.Ro = function (t, e) {
        return this.Ao.Po(t).next(function (t) {
          return Math.floor(e / 100 * t);
        });
      },
      /** Returns the nth sequence number, counting in order from the smallest. */
      t.prototype.yo = function (t, e) {
        var n = this;
        if (0 === e) return yr.resolve(qr.ai);
        var r = new oi(e);
        return this.Ao.Ce(t, function (t) {
          return r.Xr(t.sequenceNumber);
        }).next(function () {
          return n.Ao.Vo(t, function (t) {
            return r.Xr(t);
          });
        }).next(function () {
          return r.maxValue;
        });
      },
      /**
       * Removes targets with a sequence number equal to or less than the given upper bound, and removes
       * document associations with those targets.
       */
      t.prototype.po = function (t, e, n) {
        return this.Ao.po(t, e, n);
      },
      /**
       * Removes documents that have a sequence number equal to or less than the upper bound and are not
       * otherwise pinned.
       */
      t.prototype.bo = function (t, e) {
        return this.Ao.bo(t, e);
      }, t.prototype.vo = function (t, e) {
        var n = this;
        return this.params.io === ui.ho ? (l("LruGarbageCollector", "Garbage collection skipped; disabled"), yr.resolve(si)) : this.So(t).next(function (r) {
          return r < n.params.io ? (l("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.io), si) : n.Do(t, e);
        });
      }, t.prototype.So = function (t) {
        return this.Ao.So(t);
      }, t.prototype.Do = function (t, e) {
        var r,
            i,
            o,
            s,
            u,
            a,
            c,
            h = this,
            p = Date.now();
        return this.Ro(t, this.params.ro).next(function (e) {
          // Cap at the configured max
          return e > h.params.oo ? (l("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.oo + " from " + e), i = h.params.oo) : i = e, s = Date.now(), h.yo(t, i);
        }).next(function (n) {
          return r = n, u = Date.now(), h.po(t, r, e);
        }).next(function (e) {
          return o = e, a = Date.now(), h.bo(t, r);
        }).next(function (t) {
          return c = Date.now(), f() <= n.LogLevel.DEBUG && l("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - p) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - p) + "ms"), yr.resolve({
            Zr: !0,
            eo: i,
            no: o,
            so: t
          });
        });
      }, t;
    }();
    /** Implements the steps for LRU garbage collection. */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Encodes a resource path into a IndexedDb-compatible string form.
     */


    function hi(t) {
      for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = li(e)), e = fi(t.get(n), e);

      return li(e);
    }
    /** Encodes a single segment of a resource path into the given result */


    function fi(t, e) {
      for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);

        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
      }

      return n;
    }
    /** Encodes a path separator into the given result */


    function li(t) {
      return t + "";
    }
    /**
     * Decodes the given IndexedDb-compatible string form of a resource path into
     * a ResourcePath instance. Note that this method is not suitable for use with
     * decoding resource names from the server; those are One Platform format
     * strings.
     */


    function pi(t) {
      // Event the empty path must encode as a path of at least length 2. A path
      // with exactly 2 must be the empty path.
      var e = t.length;
      if (g(e >= 2), 2 === e) return g("" === t.charAt(0) && "" === t.charAt(1)), E.P(); // Escape characters cannot exist past the second-to-last position in the
      // source value.

      for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);

        switch ((s < 0 || s > n) && y(), t.charAt(s + 1)) {
          case "":
            var u = t.substring(o, s),
                a = void 0;
            0 === i.length ? // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = u : (a = i += u, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            y();
        }

        o = s + 2;
      }

      return new E(r);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Serializer for values stored in the LocalStore. */


    var di = function (t) {
      this.Co = t;
    };
    /** Decodes a remote document from storage locally to a Document. */


    function vi(t, e) {
      if (e.document) return function (t, e, n) {
        var r = Se(t, e.name),
            i = Ee(e.updateTime),
            o = new Sn({
          mapValue: {
            fields: e.fields
          }
        });
        return new kn(r, i, o, {
          hasCommittedMutations: !!n
        });
      }(t.Co, e.document, !!e.hasCommittedMutations);

      if (e.noDocument) {
        var n = A.$(e.noDocument.path),
            r = _i(e.noDocument.readTime);

        return new Rn(n, r, {
          hasCommittedMutations: !!e.hasCommittedMutations
        });
      }

      if (e.unknownDocument) {
        var i = A.$(e.unknownDocument.path),
            o = _i(e.unknownDocument.version);

        return new On(i, o);
      }

      return y();
    }
    /** Encodes a document for storage locally. */


    function yi(t, e, n) {
      var r = gi(n),
          i = e.key.path.h().A();

      if (e instanceof kn) {
        var o = function (t, e) {
          return {
            name: Ae(t, e.key),
            fields: e.rn().mapValue.fields,
            updateTime: _e(t, e.version.Z())
          };
        }(t.Co, e),
            s = e.hasCommittedMutations;

        return new Ki(
        /* unknownDocument= */
        null,
        /* noDocument= */
        null, o, s, r, i);
      }

      if (e instanceof Rn) {
        var u = e.key.path.A(),
            a = wi(e.version),
            c = e.hasCommittedMutations;
        return new Ki(
        /* unknownDocument= */
        null, new Bi(u, a),
        /* document= */
        null, c, r, i);
      }

      if (e instanceof On) {
        var h = e.key.path.A(),
            f = wi(e.version);
        return new Ki(new Wi(h, f),
        /* noDocument= */
        null,
        /* document= */
        null,
        /* hasCommittedMutations= */
        !0, r, i);
      }

      return y();
    }

    function gi(t) {
      var e = t.Z();
      return [e.seconds, e.nanoseconds];
    }

    function mi(t) {
      var e = new ot(t[0], t[1]);
      return st.J(e);
    }

    function wi(t) {
      var e = t.Z();
      return new Mi(e.seconds, e.nanoseconds);
    }

    function _i(t) {
      var e = new ot(t.seconds, t.nanoseconds);
      return st.J(e);
    }
    /** Encodes a batch of mutations into a DbMutationBatch for local storage. */

    /** Decodes a DbMutationBatch into a MutationBatch */


    function bi(t, e) {
      var n = (e.baseMutations || []).map(function (e) {
        return Pe(t.Co, e);
      }),
          r = e.mutations.map(function (e) {
        return Pe(t.Co, e);
      }),
          i = ot.fromMillis(e.localWriteTimeMs);
      return new Xr(e.batchId, i, n, r);
    }
    /** Decodes a DbTarget into TargetData */


    function Ii(t) {
      var e,
          n,
          r = _i(t.readTime),
          i = void 0 !== t.lastLimboFreeSnapshotVersion ? _i(t.lastLimboFreeSnapshotVersion) : st.min();

      return void 0 !== t.query.documents ? (g(1 === (n = t.query).documents.length), e = zn(Un(xe(n.documents[0])))) : e = Ce(t.query), new gt(e, t.targetId, 0
      /* Listen */
      , t.lastListenSequenceNumber, r, i, X.fromBase64String(t.resumeToken))
      /** Encodes TargetData into a DbTarget for storage locally. */
      ;
    }

    function Ei(t, e) {
      var n,
          r = wi(e.nt),
          i = wi(e.lastLimboFreeSnapshotVersion);
      n = dt(e.target) ? Ve(t.Co, e.target) : Ue(t.Co, e.target); // We can't store the resumeToken as a ByteString in IndexedDb, so we
      // convert it to a base64 string for storage.

      var o = e.resumeToken.toBase64(); // lastListenSequenceNumber is always 0 until we do real GC.

      return new Hi(e.targetId, lt(e.target), r, o, e.sequenceNumber, i, n);
    }
    /**
     * A helper function for figuring out what kind of query has been stored.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** A mutation queue for a specific user, backed by IndexedDB. */


    var Ti =
    /** @class */
    function () {
      function t(
      /**
       * The normalized userId (e.g. null UID => "" userId) used to store /
       * retrieve mutations.
       */
      t, e, n, r) {
        this.userId = t, this.serializer = e, this.Dr = n, this.No = r,
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.Fo = {}
        /**
        * Creates a new mutation queue for the given user.
        * @param user The user for which to create a mutation queue.
        * @param serializer The serializer to use when persisting to IndexedDb.
        */
        ;
      }

      return t.xo = function (e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return g("" !== e.uid), new t(e.Zs() ? e.uid : "", n, r, i);
      }, t.prototype.$o = function (t) {
        var e = !0,
            n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
        return Si(t).rs({
          index: Gi.userMutationsIndex,
          range: n
        }, function (t, n, r) {
          e = !1, r.done();
        }).next(function () {
          return e;
        });
      }, t.prototype.ko = function (t, e, n, r) {
        var i = this,
            o = Di(t),
            s = Si(t); // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        return s.add({}).next(function (u) {
          g("number" == typeof u);

          for (var a = new Xr(u, e, n, r), c = function (t, e, n) {
            var r = n.baseMutations.map(function (e) {
              return Oe(t.Co, e);
            }),
                i = n.mutations.map(function (e) {
              return Oe(t.Co, e);
            });
            return new Gi(e, n.batchId, n.ar.toMillis(), r, i);
          }(i.serializer, i.userId, a), h = [], f = new Tt(function (t, e) {
            return H(t.R(), e.R());
          }), l = 0, p = r; l < p.length; l++) {
            var d = p[l],
                v = zi.key(i.userId, d.key.path, u);
            f = f.add(d.key.path.h()), h.push(s.put(c)), h.push(o.put(v, zi.PLACEHOLDER));
          }

          return f.forEach(function (e) {
            h.push(i.Dr.Mo(t, e));
          }), t.pr(function () {
            i.Fo[u] = a.keys();
          }), yr.$n(h).next(function () {
            return a;
          });
        });
      }, t.prototype.Oo = function (t, e) {
        var n = this;
        return Si(t).get(e).next(function (t) {
          return t ? (g(t.userId === n.userId), bi(n.serializer, t)) : null;
        });
      },
      /**
       * Returns the document keys for the mutation batch with the given batchId.
       * For primary clients, this method returns `null` after
       * `removeMutationBatches()` has been called. Secondary clients return a
       * cached result until `removeCachedMutationKeys()` is invoked.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.Lo = function (t, e) {
        var n = this;
        return this.Fo[e] ? yr.resolve(this.Fo[e]) : this.Oo(t, e).next(function (t) {
          if (t) {
            var r = t.keys();
            return n.Fo[e] = r, r;
          }

          return null;
        });
      }, t.prototype.Bo = function (t, e) {
        var n = this,
            r = e + 1,
            i = IDBKeyRange.lowerBound([this.userId, r]),
            o = null;
        return Si(t).rs({
          index: Gi.userMutationsIndex,
          range: i
        }, function (t, e, i) {
          e.userId === n.userId && (g(e.batchId >= r), o = bi(n.serializer, e)), i.done();
        }).next(function () {
          return o;
        });
      }, t.prototype.qo = function (t) {
        var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
            n = -1;
        return Si(t).rs({
          index: Gi.userMutationsIndex,
          range: e,
          reverse: !0
        }, function (t, e, r) {
          n = e.batchId, r.done();
        }).next(function () {
          return n;
        });
      }, t.prototype.Uo = function (t) {
        var e = this,
            n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
        return Si(t).ts(Gi.userMutationsIndex, n).next(function (t) {
          return t.map(function (t) {
            return bi(e.serializer, t);
          });
        });
      }, t.prototype.Nr = function (t, e) {
        var n = this,
            r = zi.prefixForPath(this.userId, e.path),
            i = IDBKeyRange.lowerBound(r),
            o = []; // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.

        return Di(t).rs({
          range: i
        }, function (r, i, s) {
          var u = r[0],
              a = r[1],
              c = r[2],
              h = pi(a); // Only consider rows matching exactly the specific key of
          // interest. Note that because we order by path first, and we
          // order terminators before path separators, we'll encounter all
          // the index rows for documentKey contiguously. In particular, all
          // the rows for documentKey will occur before any rows for
          // documents nested in a subcollection beneath documentKey so we
          // can stop as soon as we hit any such row.

          if (u === n.userId && e.path.isEqual(h)) // Look up the mutation batch in the store.
            return Si(t).get(c).next(function (t) {
              if (!t) throw y();
              g(t.userId === n.userId), o.push(bi(n.serializer, t));
            });
          s.done();
        }).next(function () {
          return o;
        });
      }, t.prototype.Or = function (t, e) {
        var n = this,
            r = new Tt(H),
            i = [];
        return e.forEach(function (e) {
          var o = zi.prefixForPath(n.userId, e.path),
              s = IDBKeyRange.lowerBound(o),
              u = Di(t).rs({
            range: s
          }, function (t, i, o) {
            var s = t[0],
                u = t[1],
                a = t[2],
                c = pi(u); // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.

            s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
          });
          i.push(u);
        }), yr.$n(i).next(function () {
          return n.Qo(t, r);
        });
      }, t.prototype.Wr = function (t, e) {
        var n = this,
            r = e.path,
            i = r.length + 1,
            o = zi.prefixForPath(this.userId, r),
            s = IDBKeyRange.lowerBound(o),
            u = new Tt(H);
        return Di(t).rs({
          range: s
        }, function (t, e, o) {
          var s = t[0],
              a = t[1],
              c = t[2],
              h = pi(a);
          s === n.userId && r.T(h) ? // Rows with document keys more than one segment longer than the
          // query path can't be matches. For example, a query on 'rooms'
          // can't match the document /rooms/abc/messages/xyx.
          // TODO(mcg): we'll need a different scanner when we implement
          // ancestor queries.
          h.length === i && (u = u.add(c)) : o.done();
        }).next(function () {
          return n.Qo(t, u);
        });
      }, t.prototype.Qo = function (t, e) {
        var n = this,
            r = [],
            i = []; // TODO(rockwood): Implement this using iterate.

        return e.forEach(function (e) {
          i.push(Si(t).get(e).next(function (t) {
            if (null === t) throw y();
            g(t.userId === n.userId), r.push(bi(n.serializer, t));
          }));
        }), yr.$n(i).next(function () {
          return r;
        });
      }, t.prototype.Wo = function (t, e) {
        var n = this;
        return Ai(t.jo, this.userId, e).next(function (r) {
          return t.pr(function () {
            n.Ko(e.batchId);
          }), yr.forEach(r, function (e) {
            return n.No.Go(t, e);
          });
        });
      },
      /**
       * Clears the cached keys for a mutation batch. This method should be
       * called by secondary clients after they process mutation updates.
       *
       * Note that this method does not have to be called from primary clients as
       * the corresponding cache entries are cleared when an acknowledged or
       * rejected batch is removed from the mutation queue.
       */
      // PORTING NOTE: Multi-tab only
      t.prototype.Ko = function (t) {
        delete this.Fo[t];
      }, t.prototype.zo = function (t) {
        var e = this;
        return this.$o(t).next(function (n) {
          if (!n) return yr.resolve(); // Verify that there are no entries in the documentMutations index if
          // the queue is empty.

          var r = IDBKeyRange.lowerBound(zi.prefixForUser(e.userId)),
              i = [];
          return Di(t).rs({
            range: r
          }, function (t, n, r) {
            if (t[0] === e.userId) {
              var o = pi(t[1]);
              i.push(o);
            } else r.done();
          }).next(function () {
            g(0 === i.length);
          });
        });
      }, t.prototype.Ho = function (t, e) {
        return Ni(t, this.userId, e);
      }, // PORTING NOTE: Multi-tab only (state is held in memory in other clients).

      /** Returns the mutation queue's metadata from IndexedDb. */
      t.prototype.Yo = function (t) {
        var e = this;
        return xi(t).get(this.userId).next(function (t) {
          return t || new ji(e.userId, -1,
          /*lastStreamToken=*/
          "");
        });
      }, t;
    }();
    /**
     * @return true if the mutation queue for the given user contains a pending
     *         mutation for the given key.
     */


    function Ni(t, e, n) {
      var r = zi.prefixForPath(e, n.path),
          i = r[1],
          o = IDBKeyRange.lowerBound(r),
          s = !1;
      return Di(t).rs({
        range: o,
        ss: !0
      }, function (t, n, r) {
        var o = t[0],
            u = t[1];
        t[2];
        o === e && u === i && (s = !0), r.done();
      }).next(function () {
        return s;
      });
    }
    /** Returns true if any mutation queue contains the given document. */

    /**
     * Delete a mutation batch and the associated document mutations.
     * @return A PersistencePromise of the document mutations that were removed.
     */


    function Ai(t, e, n) {
      var r = t.store(Gi.store),
          i = t.store(zi.store),
          o = [],
          s = IDBKeyRange.only(n.batchId),
          u = 0,
          a = r.rs({
        range: s
      }, function (t, e, n) {
        return u++, n.delete();
      });
      o.push(a.next(function () {
        g(1 === u);
      }));

      for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
        var l = f[h],
            p = zi.key(e, l.key.path, n.batchId);
        o.push(i.delete(p)), c.push(l.key);
      }

      return yr.$n(o).next(function () {
        return c;
      });
    }
    /**
     * Helper to get a typed SimpleDbStore for the mutations object store.
     */


    function Si(t) {
      return ho.Qn(t, Gi.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the mutationQueues object store.
     */


    function Di(t) {
      return ho.Qn(t, zi.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the mutationQueues object store.
     */


    function xi(t) {
      return ho.Qn(t, ji.store);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * The RemoteDocumentCache for IndexedDb. To construct, invoke
     * `newIndexedDbRemoteDocumentCache()`.
     */


    var Li =
    /** @class */
    function () {
      /**
       * @param serializer The document serializer.
       * @param indexManager The query indexes that need to be maintained.
       */
      function t(t, e) {
        this.serializer = t, this.Dr = e
        /**
        * Adds the supplied entries to the cache.
        *
        * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
        * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
        */
        ;
      }

      return t.prototype.Er = function (t, e, n) {
        return Oi(t).put(Pi(e), n);
      },
      /**
       * Removes a document from the cache.
       *
       * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
       * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
       */
      t.prototype.Ar = function (t, e) {
        var n = Oi(t),
            r = Pi(e);
        return n.delete(r);
      },
      /**
       * Updates the current cache size.
       *
       * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
       * cache's metadata.
       */
      t.prototype.updateMetadata = function (t, e) {
        var n = this;
        return this.getMetadata(t).next(function (r) {
          return r.byteSize += e, n.Jo(t, r);
        });
      }, t.prototype.Rr = function (t, e) {
        var n = this;
        return Oi(t).get(Pi(e)).next(function (t) {
          return n.Xo(t);
        });
      },
      /**
       * Looks up an entry in the cache.
       *
       * @param documentKey The key of the entry to look up.
       * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
       */
      t.prototype.Zo = function (t, e) {
        var n = this;
        return Oi(t).get(Pi(e)).next(function (t) {
          var e = n.Xo(t);
          return e ? {
            ta: e,
            size: Vi(t)
          } : null;
        });
      }, t.prototype.getEntries = function (t, e) {
        var n = this,
            r = Dt();
        return this.ea(t, e, function (t, e) {
          var i = n.Xo(e);
          r = r.ot(t, i);
        }).next(function () {
          return r;
        });
      },
      /**
       * Looks up several entries in the cache.
       *
       * @param documentKeys The set of keys entries to look up.
       * @return A map of MaybeDocuments indexed by key (if a document cannot be
       *     found, the key will be mapped to null) and a map of sizes indexed by
       *     key (zero if the key cannot be found).
       */
      t.prototype.na = function (t, e) {
        var n = this,
            r = Dt(),
            i = new bt(A.i);
        return this.ea(t, e, function (t, e) {
          var o = n.Xo(e);
          o ? (r = r.ot(t, o), i = i.ot(t, Vi(e))) : (r = r.ot(t, null), i = i.ot(t, 0));
        }).next(function () {
          return {
            sa: r,
            ia: i
          };
        });
      }, t.prototype.ea = function (t, e, n) {
        if (e.m()) return yr.resolve();

        var r = IDBKeyRange.bound(e.first().path.A(), e.last().path.A()),
            i = e._t(),
            o = i.It();

        return Oi(t).rs({
          range: r
        }, function (t, e, r) {
          // Go through keys not found in cache.
          for (var s = A.$(t); o && A.i(o, s) < 0;) n(o, null), o = i.It();

          o && o.isEqual(s) && ( // Key found in cache.
          n(o, e), o = i.At() ? i.It() : null), // Skip to the next key (if there is one).
          o ? r.Xn(o.path.A()) : r.done();
        }).next(function () {
          // The rest of the keys are not in the cache. One case where `iterate`
          // above won't go through them is when the cache is empty.
          for (; o;) n(o, null), o = i.At() ? i.It() : null;
        });
      }, t.prototype.Lr = function (t, e, n) {
        var r = this,
            i = Lt(),
            o = e.path.length + 1,
            s = {};

        if (n.isEqual(st.min())) {
          // Documents are ordered by key, so we can use a prefix scan to narrow
          // down the documents we need to match the query against.
          var u = e.path.A();
          s.range = IDBKeyRange.lowerBound(u);
        } else {
          // Execute an index-free query and filter by read time. This is safe
          // since all document changes to queries that have a
          // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
          var a = e.path.A(),
              c = gi(n);
          s.range = IDBKeyRange.lowerBound([a, c],
          /* open= */
          !0), s.index = Ki.collectionReadTimeIndex;
        }

        return Oi(t).rs(s, function (t, n, s) {
          // The query is actually returning any path that starts with the query
          // path prefix which may include documents in subcollections. For
          // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
          // shouldn't match it. Fix this by discarding rows with document keys
          // more than one segment longer than the query path.
          if (t.length === o) {
            var u = vi(r.serializer, n);
            e.path.T(u.key.path) ? u instanceof kn && $n(e, u) && (i = i.ot(u.key, u)) : s.done();
          }
        }).next(function () {
          return i;
        });
      }, t.prototype.ra = function (t) {
        return new ki(this, !!t && t.oa);
      }, t.prototype.aa = function (t) {
        return this.getMetadata(t).next(function (t) {
          return t.byteSize;
        });
      }, t.prototype.getMetadata = function (t) {
        return Ri(t).get(Qi.key).next(function (t) {
          return g(!!t), t;
        });
      }, t.prototype.Jo = function (t, e) {
        return Ri(t).put(Qi.key, e);
      },
      /**
       * Decodes `remoteDoc` and returns the document (or null, if the document
       * corresponds to the format used for sentinel deletes).
       */
      t.prototype.Xo = function (t) {
        if (t) {
          var e = vi(this.serializer, t);
          return e instanceof Rn && e.version.isEqual(st.min()) ? null : e;
        }

        return null;
      }, t;
    }(),
        ki =
    /** @class */
    function (e) {
      /**
       * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
       * @param trackRemovals Whether to create sentinel deletes that can be tracked by
       * `getNewDocumentChanges()`.
       */
      function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).ca = t, r.oa = n, // A map of document sizes prior to applying the changes in this buffer.
        r.ua = new it(function (t) {
          return t.toString();
        }, function (t, e) {
          return t.isEqual(e);
        }), r;
      }

      return t.__extends(n, e), n.prototype.yr = function (t) {
        var e = this,
            n = [],
            r = 0,
            i = new Tt(function (t, e) {
          return H(t.R(), e.R());
        });
        return this.wr.forEach(function (o, s) {
          var u = e.ua.get(o);

          if (s) {
            var a = yi(e.ca.serializer, s, e.readTime);
            i = i.add(o.path.h());
            var c = Vi(a);
            r += c - u, n.push(e.ca.Er(t, o, a));
          } else if (r -= u, e.oa) {
            // In order to track removals, we store a "sentinel delete" in the
            // RemoteDocumentCache. This entry is represented by a NoDocument
            // with a version of 0 and ignored by `maybeDecodeDocument()` but
            // preserved in `getNewDocumentChanges()`.
            var h = yi(e.ca.serializer, new Rn(o, st.min()), e.readTime);
            n.push(e.ca.Er(t, o, h));
          } else n.push(e.ca.Ar(t, o));
        }), i.forEach(function (r) {
          n.push(e.ca.Dr.Mo(t, r));
        }), n.push(this.ca.updateMetadata(t, r)), yr.$n(n);
      }, n.prototype.gr = function (t, e) {
        var n = this; // Record the size of everything we load from the cache so we can compute a delta later.

        return this.ca.Zo(t, e).next(function (t) {
          return null === t ? (n.ua.set(e, 0), null) : (n.ua.set(e, t.size), t.ta);
        });
      }, n.prototype.Pr = function (t, e) {
        var n = this; // Record the size of everything we load from the cache so we can compute
        // a delta later.

        return this.ca.na(t, e).next(function (t) {
          var e = t.sa; // Note: `getAllFromCache` returns two maps instead of a single map from
          // keys to `DocumentSizeEntry`s. This is to allow returning the
          // `NullableMaybeDocumentMap` directly, without a conversion.

          return t.ia.forEach(function (t, e) {
            n.ua.set(t, e);
          }), e;
        });
      }, n;
    }(Zr);
    /**
     * Creates a new IndexedDbRemoteDocumentCache.
     *
     * @param serializer The document serializer.
     * @param indexManager The query indexes that need to be maintained.
     */

    /**
     * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
     *
     * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
     * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
     * when we apply the changes.
     */


    function Ri(t) {
      return ho.Qn(t, Qi.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
     */


    function Oi(t) {
      return ho.Qn(t, Ki.store);
    }

    function Pi(t) {
      return t.path.A();
    }
    /**
     * Retrusn an approximate size for the given document.
     */


    function Vi(t) {
      var e;
      if (t.document) e = t.document;else if (t.unknownDocument) e = t.unknownDocument;else {
        if (!t.noDocument) throw y();
        e = t.noDocument;
      }
      return JSON.stringify(e).length;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * An in-memory implementation of IndexManager.
     */


    var Ui =
    /** @class */
    function () {
      function t() {
        this.ha = new Ci();
      }

      return t.prototype.Mo = function (t, e) {
        return this.ha.add(e), yr.resolve();
      }, t.prototype.Qr = function (t, e) {
        return yr.resolve(this.ha.getEntries(e));
      }, t;
    }(),
        Ci =
    /** @class */
    function () {
      function t() {
        this.index = {};
      } // Returns false if the entry already existed.


      return t.prototype.add = function (t) {
        var e = t._(),
            n = t.h(),
            r = this.index[e] || new Tt(E.i),
            i = !r.has(n);

        return this.index[e] = r.add(n), i;
      }, t.prototype.has = function (t) {
        var e = t._(),
            n = t.h(),
            r = this.index[e];

        return r && r.has(n);
      }, t.prototype.getEntries = function (t) {
        return (this.index[t] || new Tt(E.i)).A();
      }, t;
    }(),
        Fi =
    /** @class */
    function () {
      function t(t) {
        this.serializer = t;
      }
      /**
       * Performs database creation and schema upgrades.
       *
       * Note that in production, this method is only ever used to upgrade the schema
       * to SCHEMA_VERSION. Different values of toVersion are only used for testing
       * and local feature development.
       */


      return t.prototype.createOrUpgrade = function (t, e, n, r) {
        var i = this;
        g(n < r && n >= 0 && r <= 10);
        var o = new br("createOrUpgrade", e);
        n < 1 && r >= 1 && (function (t) {
          t.createObjectStore(qi.store);
        }(t), function (t) {
          t.createObjectStore(ji.store, {
            keyPath: ji.keyPath
          }), t.createObjectStore(Gi.store, {
            keyPath: Gi.keyPath,
            autoIncrement: !0
          }).createIndex(Gi.userMutationsIndex, Gi.userMutationsKeyPath, {
            unique: !0
          }), t.createObjectStore(zi.store);
        }(t), Ji(t), function (t) {
          t.createObjectStore(Ki.store);
        }(t)); // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.

        var s = yr.resolve();
        return n < 3 && r >= 3 && ( // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function (t) {
          t.deleteObjectStore(Yi.store), t.deleteObjectStore(Hi.store), t.deleteObjectStore($i.store);
        }(t), Ji(t)), s = s.next(function () {
          /**
          * Creates the target global singleton row.
          *
          * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
          */
          return function (t) {
            var e = t.store($i.store),
                n = new $i(
            /*highestTargetId=*/
            0,
            /*lastListenSequenceNumber=*/
            0, st.min().Z(),
            /*targetCount=*/
            0);
            return e.put($i.key, n);
          }(o);
        })), n < 4 && r >= 4 && (0 !== n && ( // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next(function () {
          return function (t, e) {
            return e.store(Gi.store).ts().next(function (n) {
              t.deleteObjectStore(Gi.store), t.createObjectStore(Gi.store, {
                keyPath: Gi.keyPath,
                autoIncrement: !0
              }).createIndex(Gi.userMutationsIndex, Gi.userMutationsKeyPath, {
                unique: !0
              });
              var r = e.store(Gi.store),
                  i = n.map(function (t) {
                return r.put(t);
              });
              return yr.$n(i);
            });
          }(t, o);
        })), s = s.next(function () {
          !function (t) {
            t.createObjectStore(Zi.store, {
              keyPath: Zi.keyPath
            });
          }(t);
        })), n < 5 && r >= 5 && (s = s.next(function () {
          return i.removeAcknowledgedMutations(o);
        })), n < 6 && r >= 6 && (s = s.next(function () {
          return function (t) {
            t.createObjectStore(Qi.store);
          }(t), i.addDocumentGlobal(o);
        })), n < 7 && r >= 7 && (s = s.next(function () {
          return i.ensureSequenceNumbers(o);
        })), n < 8 && r >= 8 && (s = s.next(function () {
          return i.createCollectionParentIndex(t, o);
        })), n < 9 && r >= 9 && (s = s.next(function () {
          // Multi-Tab used to manage its own changelog, but this has been moved
          // to the DbRemoteDocument object store itself. Since the previous change
          // log only contained transient data, we can drop its object store.
          !function (t) {
            t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
          }(t), function (t) {
            var e = t.objectStore(Ki.store);
            e.createIndex(Ki.readTimeIndex, Ki.readTimeIndexPath, {
              unique: !1
            }), e.createIndex(Ki.collectionReadTimeIndex, Ki.collectionReadTimeIndexPath, {
              unique: !1
            });
          }(e);
        })), n < 10 && r >= 10 && (s = s.next(function () {
          return i.rewriteCanonicalIds(o);
        })), s;
      }, t.prototype.addDocumentGlobal = function (t) {
        var e = 0;
        return t.store(Ki.store).rs(function (t, n) {
          e += Vi(n);
        }).next(function () {
          var n = new Qi(e);
          return t.store(Qi.store).put(Qi.key, n);
        });
      }, t.prototype.removeAcknowledgedMutations = function (t) {
        var e = this,
            n = t.store(ji.store),
            r = t.store(Gi.store);
        return n.ts().next(function (n) {
          return yr.forEach(n, function (n) {
            var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
            return r.ts(Gi.userMutationsIndex, i).next(function (r) {
              return yr.forEach(r, function (r) {
                g(r.userId === n.userId);
                var i = bi(e.serializer, r);
                return Ai(t, n.userId, i).next(function () {});
              });
            });
          });
        });
      },
      /**
       * Ensures that every document in the remote document cache has a corresponding sentinel row
       * with a sequence number. Missing rows are given the most recently used sequence number.
       */
      t.prototype.ensureSequenceNumbers = function (t) {
        var e = t.store(Yi.store),
            n = t.store(Ki.store);
        return t.store($i.store).get($i.key).next(function (t) {
          var r = [];
          return n.rs(function (n, i) {
            var o = new E(n),
                s = function (t) {
              return [0, hi(t)];
            }(o);

            r.push(e.get(s).next(function (n) {
              return n ? yr.resolve() : function (n) {
                return e.put(new Yi(0, hi(n), t.highestListenSequenceNumber));
              }(o);
            }));
          }).next(function () {
            return yr.$n(r);
          });
        });
      }, t.prototype.createCollectionParentIndex = function (t, e) {
        // Create the index.
        t.createObjectStore(Xi.store, {
          keyPath: Xi.keyPath
        });

        var n = e.store(Xi.store),
            r = new Ci(),
            i = function (t) {
          if (r.add(t)) {
            var e = t._(),
                i = t.h();

            return n.put({
              collectionId: e,
              parent: hi(i)
            });
          }
        }; // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.


        return e.store(Ki.store).rs({
          ss: !0
        }, function (t, e) {
          var n = new E(t);
          return i(n.h());
        }).next(function () {
          return e.store(zi.store).rs({
            ss: !0
          }, function (t, e) {
            t[0];
            var n = t[1],
                r = (t[2], pi(n));
            return i(r.h());
          });
        });
      }, t.prototype.rewriteCanonicalIds = function (t) {
        var e = this,
            n = t.store(Hi.store);
        return n.rs(function (t, r) {
          var i = Ii(r),
              o = Ei(e.serializer, i);
          return n.put(o);
        });
      }, t;
    }(),
        Mi = function (t, e) {
      this.seconds = t, this.nanoseconds = e;
    },
        qi = function (t,
    /** Whether to allow shared access from multiple tabs. */
    e, n) {
      this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
    };
    /**
     * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
     * Also used for in-memory caching by IndexedDbIndexManager and initial index population
     * in indexeddb_schema.ts
     */

    /**
     * Name of the IndexedDb object store.
     *
     * Note that the name 'owner' is chosen to ensure backwards compatibility with
     * older clients that only supported single locked access to the persistence
     * layer.
     */


    qi.store = "owner",
    /**
         * The key string used for the single object that exists in the
         * DbPrimaryClient store.
         */
    qi.key = "owner";

    var ji = function (
    /**
         * The normalized user ID to which this queue belongs.
         */
    t,
    /**
         * An identifier for the highest numbered batch that has been acknowledged
         * by the server. All MutationBatches in this queue with batchIds less
         * than or equal to this value are considered to have been acknowledged by
         * the server.
         *
         * NOTE: this is deprecated and no longer used by the code.
         */
    e,
    /**
         * A stream token that was previously sent by the server.
         *
         * See StreamingWriteRequest in datastore.proto for more details about
         * usage.
         *
         * After sending this token, earlier tokens may not be used anymore so
         * only a single stream token is retained.
         *
         * NOTE: this is deprecated and no longer used by the code.
         */
    n) {
      this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
    };
    /** Name of the IndexedDb object store.  */


    ji.store = "mutationQueues",
    /** Keys are automatically assigned via the userId property. */
    ji.keyPath = "userId";
    /**
     * An object to be stored in the 'mutations' store in IndexedDb.
     *
     * Represents a batch of user-level mutations intended to be sent to the server
     * in a single write. Each user-level batch gets a separate DbMutationBatch
     * with a new batchId.
     */

    var Gi = function (
    /**
         * The normalized user ID to which this batch belongs.
         */
    t,
    /**
         * An identifier for this batch, allocated using an auto-generated key.
         */
    e,
    /**
         * The local write time of the batch, stored as milliseconds since the
         * epoch.
         */
    n,
    /**
         * A list of "mutations" that represent a partial base state from when this
         * write batch was initially created. During local application of the write
         * batch, these baseMutations are applied prior to the real writes in order
         * to override certain document fields from the remote document cache. This
         * is necessary in the case of non-idempotent writes (e.g. `increment()`
         * transforms) to make sure that the local view of the modified documents
         * doesn't flicker if the remote document cache receives the result of the
         * non-idempotent write before the write is removed from the queue.
         *
         * These mutations are never sent to the backend.
         */
    r,
    /**
         * A list of mutations to apply. All mutations will be applied atomically.
         *
         * Mutations are serialized via toMutation().
         */
    i) {
      this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i;
    };
    /** Name of the IndexedDb object store.  */


    Gi.store = "mutations",
    /** Keys are automatically assigned via the userId, batchId properties. */
    Gi.keyPath = "batchId",
    /** The index name for lookup of mutations by user. */
    Gi.userMutationsIndex = "userMutationsIndex",
    /** The user mutations index is keyed by [userId, batchId] pairs. */
    Gi.userMutationsKeyPath = ["userId", "batchId"];

    var zi =
    /** @class */
    function () {
      function t() {}
      /**
       * Creates a [userId] key for use in the DbDocumentMutations index to iterate
       * over all of a user's document mutations.
       */


      return t.prefixForUser = function (t) {
        return [t];
      },
      /**
       * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
       * index to iterate over all at document mutations for a given path or lower.
       */
      t.prefixForPath = function (t, e) {
        return [t, hi(e)];
      },
      /**
       * Creates a full index key of [userId, encodedPath, batchId] for inserting
       * and deleting into the DbDocumentMutations index.
       */
      t.key = function (t, e, n) {
        return [t, hi(e), n];
      }, t;
    }();

    zi.store = "documentMutations",
    /**
         * Because we store all the useful information for this store in the key,
         * there is no useful information to store as the value. The raw (unencoded)
         * path cannot be stored because IndexedDb doesn't store prototype
         * information.
         */
    zi.PLACEHOLDER = new zi();

    var Bi = function (t, e) {
      this.path = t, this.readTime = e;
    },
        Wi = function (t, e) {
      this.path = t, this.version = e;
    },
        Ki = // TODO: We are currently storing full document keys almost three times
    // (once as part of the primary key, once - partly - as `parentPath` and once
    // inside the encoded documents). During our next migration, we should
    // rewrite the primary key as parentPath + document ID which would allow us
    // to drop one value.
    function (
    /**
         * Set to an instance of DbUnknownDocument if the data for a document is
         * not known, but it is known that a document exists at the specified
         * version (e.g. it had a successful update applied to it)
         */
    t,
    /**
         * Set to an instance of a DbNoDocument if it is known that no document
         * exists.
         */
    e,
    /**
         * Set to an instance of a Document if there's a cached version of the
         * document.
         */
    n,
    /**
         * Documents that were written to the remote document store based on
         * a write acknowledgment are marked with `hasCommittedMutations`. These
         * documents are potentially inconsistent with the backend's copy and use
         * the write's commit version as their document version.
         */
    r,
    /**
         * When the document was read from the backend. Undefined for data written
         * prior to schema version 9.
         */
    i,
    /**
         * The path of the collection this document is part of. Undefined for data
         * written prior to schema version 9.
         */
    o) {
      this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o;
    };
    /**
     * Represents a document that is known to exist but whose data is unknown.
     * Stored in IndexedDb as part of a DbRemoteDocument object.
     */


    Ki.store = "remoteDocuments",
    /**
         * An index that provides access to all entries sorted by read time (which
         * corresponds to the last modification time of each row).
         *
         * This index is used to provide a changelog for Multi-Tab.
         */
    Ki.readTimeIndex = "readTimeIndex", Ki.readTimeIndexPath = "readTime",
    /**
         * An index that provides access to documents in a collection sorted by read
         * time.
         *
         * This index is used to allow the RemoteDocumentCache to fetch newly changed
         * documents in a collection.
         */
    Ki.collectionReadTimeIndex = "collectionReadTimeIndex", Ki.collectionReadTimeIndexPath = ["parentPath", "readTime"];
    /**
     * Contains a single entry that has metadata about the remote document cache.
     */

    var Qi =
    /**
         * @param byteSize Approximately the total size in bytes of all the documents in the document
         * cache.
         */
    function (t) {
      this.byteSize = t;
    };

    Qi.store = "remoteDocumentGlobal", Qi.key = "remoteDocumentGlobalKey";

    var Hi = function (
    /**
         * An auto-generated sequential numeric identifier for the query.
         *
         * Queries are stored using their canonicalId as the key, but these
         * canonicalIds can be quite long so we additionally assign a unique
         * queryId which can be used by referenced data structures (e.g.
         * indexes) to minimize the on-disk cost.
         */
    t,
    /**
         * The canonical string representing this query. This is not unique.
         */
    e,
    /**
         * The last readTime received from the Watch Service for this query.
         *
         * This is the same value as TargetChange.read_time in the protos.
         */
    n,
    /**
         * An opaque, server-assigned token that allows watching a query to be
         * resumed after disconnecting without retransmitting all the data
         * that matches the query. The resume token essentially identifies a
         * point in time from which the server should resume sending results.
         *
         * This is related to the snapshotVersion in that the resumeToken
         * effectively also encodes that value, but the resumeToken is opaque
         * and sometimes encodes additional information.
         *
         * A consequence of this is that the resumeToken should be used when
         * asking the server to reason about where this client is in the watch
         * stream, but the client should use the snapshotVersion for its own
         * purposes.
         *
         * This is the same value as TargetChange.resume_token in the protos.
         */
    r,
    /**
         * A sequence number representing the last time this query was
         * listened to, used for garbage collection purposes.
         *
         * Conventionally this would be a timestamp value, but device-local
         * clocks are unreliable and they must be able to create new listens
         * even while disconnected. Instead this should be a monotonically
         * increasing number that's incremented on each listen call.
         *
         * This is different from the queryId since the queryId is an
         * immutable identifier assigned to the Query on first use while
         * lastListenSequenceNumber is updated every time the query is
         * listened to.
         */
    i,
    /**
         * Denotes the maximum snapshot version at which the associated query view
         * contained no limbo documents.  Undefined for data written prior to
         * schema version 9.
         */
    o,
    /**
         * The query for this target.
         *
         * Because canonical ids are not unique we must store the actual query. We
         * use the proto to have an object we can persist without having to
         * duplicate translation logic to and from a `Query` object.
         */
    s) {
      this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
    };

    Hi.store = "targets",
    /** Keys are automatically assigned via the targetId property. */
    Hi.keyPath = "targetId",
    /** The name of the queryTargets index. */
    Hi.queryTargetsIndexName = "queryTargetsIndex",
    /**
         * The index of all canonicalIds to the targets that they match. This is not
         * a unique mapping because canonicalId does not promise a unique name for all
         * possible queries, so we append the targetId to make the mapping unique.
         */
    Hi.queryTargetsKeyPath = ["canonicalId", "targetId"];
    /**
     * An object representing an association between a target and a document, or a
     * sentinel row marking the last sequence number at which a document was used.
     * Each document cached must have a corresponding sentinel row before lru
     * garbage collection is enabled.
     *
     * The target associations and sentinel rows are co-located so that orphaned
     * documents and their sequence numbers can be identified efficiently via a scan
     * of this store.
     */

    var Yi = function (
    /**
         * The targetId identifying a target or 0 for a sentinel row.
         */
    t,
    /**
         * The path to the document, as encoded in the key.
         */
    e,
    /**
         * If this is a sentinel row, this should be the sequence number of the last
         * time the document specified by `path` was used. Otherwise, it should be
         * `undefined`.
         */
    n) {
      this.targetId = t, this.path = e, this.sequenceNumber = n;
    };
    /** Name of the IndexedDb object store.  */


    Yi.store = "targetDocuments",
    /** Keys are automatically assigned via the targetId, path properties. */
    Yi.keyPath = ["targetId", "path"],
    /** The index name for the reverse index. */
    Yi.documentTargetsIndex = "documentTargetsIndex",
    /** We also need to create the reverse index for these properties. */
    Yi.documentTargetsKeyPath = ["path", "targetId"];
    /**
     * A record of global state tracked across all Targets, tracked separately
     * to avoid the need for extra indexes.
     *
     * This should be kept in-sync with the proto used in the iOS client.
     */

    var $i = function (
    /**
         * The highest numbered target id across all targets.
         *
         * See DbTarget.targetId.
         */
    t,
    /**
         * The highest numbered lastListenSequenceNumber across all targets.
         *
         * See DbTarget.lastListenSequenceNumber.
         */
    e,
    /**
         * A global snapshot version representing the last consistent snapshot we
         * received from the backend. This is monotonically increasing and any
         * snapshots received from the backend prior to this version (e.g. for
         * targets resumed with a resumeToken) should be suppressed (buffered)
         * until the backend has caught up to this snapshot version again. This
         * prevents our cache from ever going backwards in time.
         */
    n,
    /**
         * The number of targets persisted.
         */
    r) {
      this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r;
    };
    /**
     * The key string used for the single object that exists in the
     * DbTargetGlobal store.
     */


    $i.key = "targetGlobalKey", $i.store = "targetGlobal";
    /**
     * An object representing an association between a Collection id (e.g. 'messages')
     * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
     * This is used to efficiently find all collections to query when performing
     * a Collection Group query.
     */

    var Xi = function (
    /**
         * The collectionId (e.g. 'messages')
         */
    t,
    /**
         * The path to the parent (either a document location or an empty path for
         * a root-level collection).
         */
    e) {
      this.collectionId = t, this.parent = e;
    };
    /** Name of the IndexedDb object store. */


    function Ji(t) {
      t.createObjectStore(Yi.store, {
        keyPath: Yi.keyPath
      }).createIndex(Yi.documentTargetsIndex, Yi.documentTargetsKeyPath, {
        unique: !0
      }), // NOTE: This is unique only because the TargetId is the suffix.
      t.createObjectStore(Hi.store, {
        keyPath: Hi.keyPath
      }).createIndex(Hi.queryTargetsIndexName, Hi.queryTargetsKeyPath, {
        unique: !0
      }), t.createObjectStore($i.store);
    }

    Xi.store = "collectionParents",
    /** Keys are automatically assigned via the collectionId, parent properties. */
    Xi.keyPath = ["collectionId", "parent"];

    var Zi = function ( // Note: Previous schema versions included a field
    // "lastProcessedDocumentChangeId". Don't use anymore.

    /** The auto-generated client id assigned at client startup. */
    t,
    /** The last time this state was updated. */
    e,
    /** Whether the client's network connection is enabled. */
    n,
    /** Whether this client is running in a foreground tab. */
    r) {
      this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
    };
    /** Name of the IndexedDb object store. */


    Zi.store = "clientMetadata",
    /** Keys are automatically assigned via the clientId properties. */
    Zi.keyPath = "clientId";

    var to = t.__spreadArrays(t.__spreadArrays(t.__spreadArrays([ji.store, Gi.store, zi.store, Ki.store, Hi.store, qi.store, $i.store, Yi.store], [Zi.store]), [Qi.store]), [Xi.store]),
        eo =
    /** @class */
    function () {
      function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.la = new Ci();
      }
      /**
       * Adds a new entry to the collection parent index.
       *
       * Repeated calls for the same collectionPath should be avoided within a
       * transaction as IndexedDbIndexManager only caches writes once a transaction
       * has been committed.
       */


      return t.prototype.Mo = function (t, e) {
        var n = this;

        if (!this.la.has(e)) {
          var r = e._(),
              i = e.h();

          t.pr(function () {
            // Add the collection to the in memory cache only if the transaction was
            // successfully committed.
            n.la.add(e);
          });
          var o = {
            collectionId: r,
            parent: hi(i)
          };
          return no(t).put(o);
        }

        return yr.resolve();
      }, t.prototype.Qr = function (t, e) {
        var n = [],
            r = IDBKeyRange.bound([e, ""], [$(e), ""],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0);
        return no(t).ts(r).next(function (t) {
          for (var r = 0, i = t; r < i.length; r++) {
            var o = i[r]; // This collectionId guard shouldn't be necessary (and isn't as long
            // as we're running in a real browser), but there's a bug in
            // indexeddbshim that breaks our range in our tests running in node:
            // https://github.com/axemclion/IndexedDBShim/issues/334

            if (o.collectionId !== e) break;
            n.push(pi(o.parent));
          }

          return n;
        });
      }, t;
    }(); // V2 is no longer usable (see comment at top of file)
    // Visible for testing

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A persisted implementation of IndexManager.
     */

    /**
     * Helper to get a typed SimpleDbStore for the collectionParents
     * document store.
     */


    function no(t) {
      return ho.Qn(t, Xi.store);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Offset to ensure non-overlapping target ids. */

    /**
     * Generates monotonically increasing target IDs for sending targets to the
     * watch stream.
     *
     * The client constructs two generators, one for the target cache, and one for
     * for the sync engine (to generate limbo documents targets). These
     * generators produce non-overlapping IDs (by using even and odd IDs
     * respectively).
     *
     * By separating the target ID space, the query cache can generate target IDs
     * that persist across client restarts, while sync engine can independently
     * generate in-memory target IDs that are transient and can be reused after a
     * restart.
     */


    var ro =
    /** @class */
    function () {
      function t(t) {
        this._a = t;
      }

      return t.prototype.next = function () {
        return this._a += 2, this._a;
      }, t.fa = function () {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
      }, t.da = function () {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
      }, t;
    }(),
        io =
    /** @class */
    function () {
      function t(t, e) {
        this.No = t, this.serializer = e;
      } // PORTING NOTE: We don't cache global metadata for the target cache, since
      // some of it (in particular `highestTargetId`) can be modified by secondary
      // tabs. We could perhaps be more granular (and e.g. still cache
      // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
      // to IndexedDb whenever we need to read metadata. We can revisit if it turns
      // out to have a meaningful performance impact.


      return t.prototype.wa = function (t) {
        var e = this;
        return this.ma(t).next(function (n) {
          var r = new ro(n.highestTargetId);
          return n.highestTargetId = r.next(), e.Ta(t, n).next(function () {
            return n.highestTargetId;
          });
        });
      }, t.prototype.Ea = function (t) {
        return this.ma(t).next(function (t) {
          return st.J(new ot(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        });
      }, t.prototype.Ia = function (t) {
        return this.ma(t).next(function (t) {
          return t.highestListenSequenceNumber;
        });
      }, t.prototype.Aa = function (t, e, n) {
        var r = this;
        return this.ma(t).next(function (i) {
          return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.Z()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Ta(t, i);
        });
      }, t.prototype.Ra = function (t, e) {
        var n = this;
        return this.ga(t, e).next(function () {
          return n.ma(t).next(function (r) {
            return r.targetCount += 1, n.Pa(e, r), n.Ta(t, r);
          });
        });
      }, t.prototype.ya = function (t, e) {
        return this.ga(t, e);
      }, t.prototype.Va = function (t, e) {
        var n = this;
        return this.pa(t, e.targetId).next(function () {
          return oo(t).delete(e.targetId);
        }).next(function () {
          return n.ma(t);
        }).next(function (e) {
          return g(e.targetCount > 0), e.targetCount -= 1, n.Ta(t, e);
        });
      },
      /**
       * Drops any targets with sequence number less than or equal to the upper bound, excepting those
       * present in `activeTargetIds`. Document associations for the removed targets are also removed.
       * Returns the number of targets removed.
       */
      t.prototype.po = function (t, e, n) {
        var r = this,
            i = 0,
            o = [];
        return oo(t).rs(function (s, u) {
          var a = Ii(u);
          a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.Va(t, a)));
        }).next(function () {
          return yr.$n(o);
        }).next(function () {
          return i;
        });
      },
      /**
       * Call provided function with each `TargetData` that we have cached.
       */
      t.prototype.Ce = function (t, e) {
        return oo(t).rs(function (t, n) {
          var r = Ii(n);
          e(r);
        });
      }, t.prototype.ma = function (t) {
        return so(t).get($i.key).next(function (t) {
          return g(null !== t), t;
        });
      }, t.prototype.Ta = function (t, e) {
        return so(t).put($i.key, e);
      }, t.prototype.ga = function (t, e) {
        return oo(t).put(Ei(this.serializer, e));
      },
      /**
       * In-place updates the provided metadata to account for values in the given
       * TargetData. Saving is done separately. Returns true if there were any
       * changes to the metadata.
       */
      t.prototype.Pa = function (t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n;
      }, t.prototype.ba = function (t) {
        return this.ma(t).next(function (t) {
          return t.targetCount;
        });
      }, t.prototype.va = function (t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        var n = lt(e),
            r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
            i = null;
        return oo(t).rs({
          range: r,
          index: Hi.queryTargetsIndexName
        }, function (t, n, r) {
          var o = Ii(n); // After finding a potential match, check that the target is
          // actually equal to the requested target.

          pt(e, o.target) && (i = o, r.done());
        }).next(function () {
          return i;
        });
      }, t.prototype.Sa = function (t, e, n) {
        var r = this,
            i = [],
            o = uo(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.

        return e.forEach(function (e) {
          var s = hi(e.path);
          i.push(o.put(new Yi(n, s))), i.push(r.No.Da(t, n, e));
        }), yr.$n(i);
      }, t.prototype.Ca = function (t, e, n) {
        var r = this,
            i = uo(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.

        return yr.forEach(e, function (e) {
          var o = hi(e.path);
          return yr.$n([i.delete([n, o]), r.No.Na(t, n, e)]);
        });
      }, t.prototype.pa = function (t, e) {
        var n = uo(t),
            r = IDBKeyRange.bound([e], [e + 1],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0);
        return n.delete(r);
      }, t.prototype.Fa = function (t, e) {
        var n = IDBKeyRange.bound([e], [e + 1],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0),
            r = uo(t),
            i = Ot();
        return r.rs({
          range: n,
          ss: !0
        }, function (t, e, n) {
          var r = pi(t[1]),
              o = new A(r);
          i = i.add(o);
        }).next(function () {
          return i;
        });
      }, t.prototype.Ho = function (t, e) {
        var n = hi(e.path),
            r = IDBKeyRange.bound([n], [$(n)],
        /*lowerOpen=*/
        !1,
        /*upperOpen=*/
        !0),
            i = 0;
        return uo(t).rs({
          index: Yi.documentTargetsIndex,
          ss: !0,
          range: r
        }, function (t, e, n) {
          var r = t[0]; // Having a sentinel row for a document does not count as containing that document;
          // For the target cache, containing the document means the document is part of some
          // target.

          t[1];
          0 !== r && (i++, n.done());
        }).next(function () {
          return i > 0;
        });
      },
      /**
       * Looks up a TargetData entry by target ID.
       *
       * @param targetId The target ID of the TargetData entry to look up.
       * @return The cached TargetData entry, or null if the cache has no entry for
       * the target.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.Ue = function (t, e) {
        return oo(t).get(e).next(function (t) {
          return t ? Ii(t) : null;
        });
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Helper to get a typed SimpleDbStore for the queries object store.
     */


    function oo(t) {
      return ho.Qn(t, Hi.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the target globals object store.
     */


    function so(t) {
      return ho.Qn(t, $i.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the document target object store.
     */


    function uo(t) {
      return ho.Qn(t, Yi.store);
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var ao = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
        co =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).jo = t, r.xa = n, r;
      }

      return t.__extends(n, e), n;
    }(ei),
        ho =
    /** @class */
    function () {
      function e(
      /**
       * Whether to synchronize the in-memory state of multiple tabs and share
       * access to local persistence.
       */
      t, n, r, i, o, s, u, h, f,
      /**
       * If set to true, forcefully obtains database access. Existing tabs will
       * no longer be able to access IndexedDB.
       */
      l) {
        if (this.allowTabSynchronization = t, this.persistenceKey = n, this.clientId = r, this.fn = o, this.window = s, this.document = u, this.$a = f, this.ka = l, this.Ma = null, this.Oa = !1, this.isPrimary = !1, this.networkEnabled = !0,
        /** Our window.unload handler, if registered. */
        this.La = null, this.inForeground = !1,
        /** Our 'visibilitychange' listener if registered. */
        this.Ba = null,
        /** The client metadata refresh task. */
        this.qa = null,
        /** The last time we garbage collected the client metadata object store. */
        this.Ua = Number.NEGATIVE_INFINITY,
        /** A listener to notify on primary state changes. */
        this.Qa = function (t) {
          return Promise.resolve();
        }, !e.Ln()) throw new c(a.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.No = new po(this, i), this.Wa = n + "main", this.serializer = new di(h), this.ja = new gr(this.Wa, 10, new Fi(this.serializer)), this.Ka = new io(this.No, this.serializer), this.Dr = new eo(), this.vr = function (t, e) {
          return new Li(t, e);
        }(this.serializer, this.Dr), this.window && this.window.localStorage ? this.Ga = this.window.localStorage : (this.Ga = null, !1 === l && p("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
      }

      return e.Qn = function (t, e) {
        if (t instanceof co) return gr.Qn(t.jo, e);
        throw y();
      },
      /**
       * Attempt to start IndexedDb persistence.
       *
       * @return {Promise<void>} Whether persistence was enabled.
       */
      e.prototype.start = function () {
        var t = this; // NOTE: This is expected to fail sometimes (in the case of another tab
        // already having the persistence lock), so it's the first thing we should
        // do.

        return this.za().then(function () {
          if (!t.isPrimary && !t.allowTabSynchronization) // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new c(a.FAILED_PRECONDITION, ao);
          return t.Ha(), t.Ya(), t.Ja(), t.runTransaction("getHighestListenSequenceNumber", "readonly", function (e) {
            return t.Ka.Ia(e);
          });
        }).then(function (e) {
          t.Ma = new qr(e, t.$a);
        }).then(function () {
          t.Oa = !0;
        }).catch(function (e) {
          return t.ja && t.ja.close(), Promise.reject(e);
        });
      },
      /**
       * Registers a listener that gets called when the primary state of the
       * instance changes. Upon registering, this listener is invoked immediately
       * with the current primary state.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      e.prototype.Xa = function (e) {
        var n = this;
        return this.Qa = function (r) {
          return t.__awaiter(n, void 0, void 0, function () {
            return t.__generator(this, function (t) {
              return this.Ei ? [2
              /*return*/
              , e(r)] : [2
              /*return*/
              ];
            });
          });
        }, e(this.isPrimary);
      },
      /**
       * Registers a listener that gets called when the database receives a
       * version change event indicating that it has deleted.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      e.prototype.Za = function (e) {
        var n = this;
        this.ja.Kn(function (r) {
          return t.__awaiter(n, void 0, void 0, function () {
            return t.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return null === r.newVersion ? [4
                  /*yield*/
                  , e()] : [3
                  /*break*/
                  , 2];

                case 1:
                  t.sent(), t.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        });
      },
      /**
       * Adjusts the current network state in the client's metadata, potentially
       * affecting the primary lease.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      e.prototype.tc = function (e) {
        var n = this;
        this.networkEnabled !== e && (this.networkEnabled = e, // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.fn.ws(function () {
          return t.__awaiter(n, void 0, void 0, function () {
            return t.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.Ei ? [4
                  /*yield*/
                  , this.za()] : [3
                  /*break*/
                  , 2];

                case 1:
                  t.sent(), t.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }));
      },
      /**
       * Updates the client metadata in IndexedDb and attempts to either obtain or
       * extend the primary lease for the local client. Asynchronously notifies the
       * primary state listener if the client either newly obtained or released its
       * primary lease.
       */
      e.prototype.za = function () {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function (e) {
          return lo(e).put(new Zi(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next(function () {
            if (t.isPrimary) return t.ec(e).next(function (e) {
              e || (t.isPrimary = !1, t.fn.Cs(function () {
                return t.Qa(!1);
              }));
            });
          }).next(function () {
            return t.nc(e);
          }).next(function (n) {
            return t.isPrimary && !n ? t.sc(e).next(function () {
              return !1;
            }) : !!n && t.ic(e).next(function () {
              return !0;
            });
          });
        }).catch(function (e) {
          if (_r(e)) // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return l("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
          if (!t.allowTabSynchronization) throw e;
          return l("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e),
          /* isPrimary= */
          !1;
        }).then(function (e) {
          t.isPrimary !== e && t.fn.Cs(function () {
            return t.Qa(e);
          }), t.isPrimary = e;
        });
      }, e.prototype.ec = function (t) {
        var e = this;
        return fo(t).get(qi.key).next(function (t) {
          return yr.resolve(e.rc(t));
        });
      }, e.prototype.oc = function (t) {
        return lo(t).delete(this.clientId);
      },
      /**
       * If the garbage collection threshold has passed, prunes the
       * RemoteDocumentChanges and the ClientMetadata store based on the last update
       * time of all clients.
       */
      e.prototype.ac = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var n,
              r,
              i,
              o,
              s = this;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return !this.isPrimary || this.cc(this.Ua, 18e5) ? [3
                /*break*/
                , 2] : (this.Ua = Date.now(), [4
                /*yield*/
                , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (t) {
                  var n = e.Qn(t, Zi.store);
                  return n.ts().next(function (t) {
                    var e = s.uc(t, 18e5),
                        r = t.filter(function (t) {
                      return -1 === e.indexOf(t);
                    }); // Delete metadata for clients that are no longer considered active.

                    return yr.forEach(r, function (t) {
                      return n.delete(t.clientId);
                    }).next(function () {
                      return r;
                    });
                  });
                }).catch(function () {
                  return [];
                })]);

              case 1:
                // Delete potential leftover entries that may continue to mark the
                // inactive clients as zombied in LocalStorage.
                // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                // the client atomically, but we can't. So we opt to delete the IndexedDb
                // entries first to avoid potentially reviving a zombied client.
                if (n = t.sent(), this.Ga) for (r = 0, i = n; r < i.length; r++) o = i[r], this.Ga.removeItem(this.hc(o.clientId));
                t.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Schedules a recurring timer to update the client metadata and to either
       * extend or acquire the primary lease if the client is eligible.
       */
      e.prototype.Ja = function () {
        var t = this;
        this.qa = this.fn.yn("client_metadata_refresh"
        /* ClientMetadataRefresh */
        , 4e3, function () {
          return t.za().then(function () {
            return t.ac();
          }).then(function () {
            return t.Ja();
          });
        });
      },
      /** Checks whether `client` is the local client. */
      e.prototype.rc = function (t) {
        return !!t && t.ownerId === this.clientId;
      },
      /**
       * Evaluate the state of all active clients and determine whether the local
       * client is or can act as the holder of the primary lease. Returns whether
       * the client is eligible for the lease, but does not actually acquire it.
       * May return 'false' even if there is no active leaseholder and another
       * (foreground) client should become leaseholder instead.
       */
      e.prototype.nc = function (t) {
        var e = this;
        return this.ka ? yr.resolve(!0) : fo(t).get(qi.key).next(function (n) {
          // A client is eligible for the primary lease if:
          // - its network is enabled and the client's tab is in the foreground.
          // - its network is enabled and no other client's tab is in the
          //   foreground.
          // - every clients network is disabled and the client's tab is in the
          //   foreground.
          // - every clients network is disabled and no other client's tab is in
          //   the foreground.
          // - the `forceOwningTab` setting was passed in.
          if (null !== n && e.cc(n.leaseTimestampMs, 5e3) && !e.lc(n.ownerId)) {
            if (e.rc(n) && e.networkEnabled) return !0;

            if (!e.rc(n)) {
              if (!n.allowTabSynchronization) // Fail the `canActAsPrimary` check if the current leaseholder has
                // not opted into multi-tab synchronization. If this happens at
                // client startup, we reject the Promise returned by
                // `enablePersistence()` and the user can continue to use Firestore
                // with in-memory persistence.
                // If this fails during a lease refresh, we will instead block the
                // AsyncQueue from executing further operations. Note that this is
                // acceptable since mixing & matching different `synchronizeTabs`
                // settings is not supported.
                // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                // no longer be turned off.
                throw new c(a.FAILED_PRECONDITION, ao);
              return !1;
            }
          }

          return !(!e.networkEnabled || !e.inForeground) || lo(t).ts().next(function (t) {
            return void 0 === e.uc(t, 5e3).find(function (t) {
              if (e.clientId !== t.clientId) {
                var n = !e.networkEnabled && t.networkEnabled,
                    r = !e.inForeground && t.inForeground,
                    i = e.networkEnabled === t.networkEnabled;
                if (n || r && i) return !0;
              }

              return !1;
            });
          });
        }).next(function (t) {
          return e.isPrimary !== t && l("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t;
        });
      }, e.prototype.Di = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e = this;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                // has obtained the primary lease.
                // The shutdown() operations are idempotent and can be called even when
                // start() aborted (e.g. because it couldn't acquire the persistence lease).
                return this.Oa = !1, this._c(), this.qa && (this.qa.cancel(), this.qa = null), this.fc(), this.dc(), [4
                /*yield*/
                , this.ja.runTransaction("shutdown", "readwrite", [qi.store, Zi.store], function (t) {
                  var n = new co(t, qr.ai);
                  return e.sc(n).next(function () {
                    return e.oc(n);
                  });
                })];

              case 1:
                // The shutdown() operations are idempotent and can be called even when
                // start() aborted (e.g. because it couldn't acquire the persistence lease).
                // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                // has obtained the primary lease.
                return t.sent(), this.ja.close(), // Remove the entry marking the client as zombied from LocalStorage since
                // we successfully deleted its metadata from IndexedDb.
                this.wc(), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Returns clients that are not zombied and have an updateTime within the
       * provided threshold.
       */
      e.prototype.uc = function (t, e) {
        var n = this;
        return t.filter(function (t) {
          return n.cc(t.updateTimeMs, e) && !n.lc(t.clientId);
        });
      },
      /**
       * Returns the IDs of the clients that are currently active. If multi-tab
       * is not supported, returns an array that only contains the local client's
       * ID.
       *
       * PORTING NOTE: This is only used for Web multi-tab.
       */
      e.prototype.pi = function () {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", function (e) {
          return lo(e).ts().next(function (e) {
            return t.uc(e, 18e5).map(function (t) {
              return t.clientId;
            });
          });
        });
      }, Object.defineProperty(e.prototype, "Ei", {
        get: function () {
          return this.Oa;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.mc = function (t) {
        return Ti.xo(t, this.serializer, this.Dr, this.No);
      }, e.prototype.Tc = function () {
        return this.Ka;
      }, e.prototype.Ec = function () {
        return this.vr;
      }, e.prototype.Ic = function () {
        return this.Dr;
      }, e.prototype.runTransaction = function (t, e, n) {
        var r = this;
        l("IndexedDbPersistence", "Starting transaction:", t);
        var i,
            o = "readonly" === e ? "readonly" : "readwrite"; // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.

        return this.ja.runTransaction(t, o, to, function (o) {
          return i = new co(o, r.Ma ? r.Ma.next() : qr.ai), "readwrite-primary" === e ? r.ec(i).next(function (t) {
            return !!t || r.nc(i);
          }).next(function (e) {
            if (!e) throw p("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.fn.Cs(function () {
              return r.Qa(!1);
            }), new c(a.FAILED_PRECONDITION, ti);
            return n(i);
          }).next(function (t) {
            return r.ic(i).next(function () {
              return t;
            });
          }) : r.Ac(i).next(function () {
            return n(i);
          });
        }).then(function (t) {
          return i.br(), t;
        });
      },
      /**
       * Verifies that the current tab is the primary leaseholder or alternatively
       * that the leaseholder has opted into multi-tab synchronization.
       */
      // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
      // be turned off.
      e.prototype.Ac = function (t) {
        var e = this;
        return fo(t).get(qi.key).next(function (t) {
          if (null !== t && e.cc(t.leaseTimestampMs, 5e3) && !e.lc(t.ownerId) && !e.rc(t) && !(e.ka || e.allowTabSynchronization && t.allowTabSynchronization)) throw new c(a.FAILED_PRECONDITION, ao);
        });
      },
      /**
       * Obtains or extends the new primary lease for the local client. This
       * method does not verify that the client is eligible for this lease.
       */
      e.prototype.ic = function (t) {
        var e = new qi(this.clientId, this.allowTabSynchronization, Date.now());
        return fo(t).put(qi.key, e);
      }, e.Ln = function () {
        return gr.Ln();
      },
      /** Checks the primary lease and removes it if we are the current primary. */
      e.prototype.sc = function (t) {
        var e = this,
            n = fo(t);
        return n.get(qi.key).next(function (t) {
          return e.rc(t) ? (l("IndexedDbPersistence", "Releasing primary lease."), n.delete(qi.key)) : yr.resolve();
        });
      },
      /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
      e.prototype.cc = function (t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (p("Detected an update time that is in the future: " + t + " > " + n), 1));
      }, e.prototype.Ha = function () {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.Ba = function () {
          t.fn.ws(function () {
            return t.inForeground = "visible" === t.document.visibilityState, t.za();
          });
        }, this.document.addEventListener("visibilitychange", this.Ba), this.inForeground = "visible" === this.document.visibilityState);
      }, e.prototype.fc = function () {
        this.Ba && (this.document.removeEventListener("visibilitychange", this.Ba), this.Ba = null);
      },
      /**
       * Attaches a window.unload handler that will synchronously write our
       * clientId to a "zombie client id" location in LocalStorage. This can be used
       * by tabs trying to acquire the primary lease to determine that the lease
       * is no longer valid even if the timestamp is recent. This is particularly
       * important for the refresh case (so the tab correctly re-acquires the
       * primary lease). LocalStorage is used for this rather than IndexedDb because
       * it is a synchronous API and so can be used reliably from  an unload
       * handler.
       */
      e.prototype.Ya = function () {
        var t,
            e = this;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.La = function () {
          // Note: In theory, this should be scheduled on the AsyncQueue since it
          // accesses internal state. We execute this code directly during shutdown
          // to make sure it gets a chance to run.
          e._c(), e.fn.ws(function () {
            return e.Di();
          });
        }, this.window.addEventListener("unload", this.La));
      }, e.prototype.dc = function () {
        this.La && (this.window.removeEventListener("unload", this.La), this.La = null);
      },
      /**
       * Returns whether a client is "zombied" based on its LocalStorage entry.
       * Clients become zombied when their tab closes without running all of the
       * cleanup logic in `shutdown()`.
       */
      e.prototype.lc = function (t) {
        var e;

        try {
          var n = null !== (null === (e = this.Ga) || void 0 === e ? void 0 : e.getItem(this.hc(t)));
          return l("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n;
        } catch (t) {
          // Gracefully handle if LocalStorage isn't working.
          return p("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
      },
      /**
       * Record client as zombied (a client that had its tab closed). Zombied
       * clients are ignored during primary tab selection.
       */
      e.prototype._c = function () {
        if (this.Ga) try {
          this.Ga.setItem(this.hc(this.clientId), String(Date.now()));
        } catch (t) {
          // Gracefully handle if LocalStorage isn't available / working.
          p("Failed to set zombie client id.", t);
        }
      },
      /** Removes the zombied client entry if it exists. */
      e.prototype.wc = function () {
        if (this.Ga) try {
          this.Ga.removeItem(this.hc(this.clientId));
        } catch (t) {// Ignore
        }
      }, e.prototype.hc = function (t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
      }, e;
    }();
    /**
     * Oldest acceptable age in milliseconds for client metadata before the client
     * is considered inactive and its associated data is garbage collected.
     */

    /**
     * Helper to get a typed SimpleDbStore for the primary client object store.
     */


    function fo(t) {
      return ho.Qn(t, qi.store);
    }
    /**
     * Helper to get a typed SimpleDbStore for the client metadata object store.
     */


    function lo(t) {
      return ho.Qn(t, Zi.store);
    }
    /** Provides LRU functionality for IndexedDB persistence. */


    var po =
    /** @class */
    function () {
      function t(t, e) {
        this.db = t, this.wo = new ci(this, e);
      }

      return t.prototype.Po = function (t) {
        var e = this.Rc(t);
        return this.db.Tc().ba(t).next(function (t) {
          return e.next(function (e) {
            return t + e;
          });
        });
      }, t.prototype.Rc = function (t) {
        var e = 0;
        return this.Vo(t, function (t) {
          e++;
        }).next(function () {
          return e;
        });
      }, t.prototype.Ce = function (t, e) {
        return this.db.Tc().Ce(t, e);
      }, t.prototype.Vo = function (t, e) {
        return this.gc(t, function (t, n) {
          return e(n);
        });
      }, t.prototype.Da = function (t, e, n) {
        return vo(t, n);
      }, t.prototype.Na = function (t, e, n) {
        return vo(t, n);
      }, t.prototype.po = function (t, e, n) {
        return this.db.Tc().po(t, e, n);
      }, t.prototype.Go = function (t, e) {
        return vo(t, e);
      },
      /**
       * Returns true if anything would prevent this document from being garbage
       * collected, given that the document in question is not present in any
       * targets and has a sequence number less than or equal to the upper bound for
       * the collection run.
       */
      t.prototype.Pc = function (t, e) {
        return function (t, e) {
          var n = !1;
          return xi(t).os(function (r) {
            return Ni(t, r, e).next(function (t) {
              return t && (n = !0), yr.resolve(!t);
            });
          }).next(function () {
            return n;
          });
        }(t, e);
      }, t.prototype.bo = function (t, e) {
        var n = this,
            r = this.db.Ec().ra(),
            i = [],
            o = 0;
        return this.gc(t, function (s, u) {
          if (u <= e) {
            var a = n.Pc(t, s).next(function (e) {
              if (!e) // Our size accounting requires us to read all documents before
                // removing them.
                return o++, r.Rr(t, s).next(function () {
                  return r.Ar(s), uo(t).delete([0, hi(s.path)]);
                });
            });
            i.push(a);
          }
        }).next(function () {
          return yr.$n(i);
        }).next(function () {
          return r.apply(t);
        }).next(function () {
          return o;
        });
      }, t.prototype.removeTarget = function (t, e) {
        var n = e.st(t.xa);
        return this.db.Tc().ya(t, n);
      }, t.prototype.yc = function (t, e) {
        return vo(t, e);
      },
      /**
       * Call provided function for each document in the cache that is 'orphaned'. Orphaned
       * means not a part of any target, so the only entry in the target-document index for
       * that document will be the sentinel row (targetId 0), which will also have the sequence
       * number for the last time the document was accessed.
       */
      t.prototype.gc = function (t, e) {
        var n,
            r = uo(t),
            i = qr.ai;
        return r.rs({
          index: Yi.documentTargetsIndex
        }, function (t, r) {
          var o = t[0],
              s = (t[1], r.path),
              u = r.sequenceNumber;
          0 === o ? ( // if nextToReport is valid, report it, this is a new key so the
          // last one must not be a member of any targets.
          i !== qr.ai && e(new A(pi(n)), i), // set nextToReport to be this sequence number. It's the next one we
          // might report, if we don't find any targets for this document.
          // Note that the sequence number must be defined when the targetId
          // is 0.
          i = u, n = s) : // set nextToReport to be invalid, we know we don't need to report
          // this one since we found a target for it.
          i = qr.ai;
        }).next(function () {
          // Since we report sequence numbers after getting to the next key, we
          // need to check if the last key we iterated over was an orphaned
          // document and report it.
          i !== qr.ai && e(new A(pi(n)), i);
        });
      }, t.prototype.So = function (t) {
        return this.db.Ec().aa(t);
      }, t;
    }();

    function vo(t, e) {
      return uo(t).put(
      /**
      * @return A value suitable for writing a sentinel row in the target-document
      * store.
      */
      function (t, e) {
        return new Yi(0, hi(t.path), e);
      }(e, t.xa));
    }
    /**
     * Generates a string used as a prefix when storing data in IndexedDB and
     * LocalStorage.
     */


    function yo(t, e) {
      // Use two different prefix formats:
      //   * firestore / persistenceKey / projectID . databaseID / ...
      //   * firestore / persistenceKey / projectID / ...
      // projectIDs are DNS-compatible names and cannot contain dots
      // so there's no danger of collisions.
      var n = t.projectId;
      return t.j || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
      /**
      * Implements `LocalStore` interface.
      *
      * Note: some field defined in this class might have public access level, but
      * the class is not exported so they are only accessible from this module.
      * This is useful to implement optional features (like bundles) in free
      * functions, such that they are tree-shakeable.
      */
      ;
    }

    var go =
    /** @class */
    function () {
      function t(
      /** Manages our in-memory or durable persistence. */
      t, e, n) {
        this.persistence = t, this.Vc = e,
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.bc = new bt(H),
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.vc = new it(function (t) {
          return lt(t);
        }, pt),
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.Sc = st.min(), this.Sr = t.mc(n), this.Dc = t.Ec(), this.Ka = t.Tc(), this.Cc = new ni(this.Dc, this.Sr, this.persistence.Ic()), this.Vc.Nc(this.Cc);
      }

      return t.prototype.Io = function (t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (n) {
          return t.vo(n, e.bc);
        });
      }, t;
    }();
    /**
     * Acknowledges the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */


    function mo(t, e) {
      var n = m(t);
      return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (t) {
        var r = e.batch.keys(),
            i = n.Dc.ra({
          oa: !0
        });
        return function (t, e, n, r) {
          var i = n.batch,
              o = i.keys(),
              s = yr.resolve();
          return o.forEach(function (t) {
            s = s.next(function () {
              return r.Rr(e, t);
            }).next(function (e) {
              var o = e,
                  s = n.dr.get(t);
              g(null !== s), (!o || o.version.L(s) < 0) && (o = i.cr(t, o, n)) && // We use the commitVersion as the readTime rather than the
              // document's updateTime since the updateTime is not advanced
              // for updates that do not modify the underlying document.
              r.Er(o, n._r);
            });
          }), s.next(function () {
            return t.Sr.Wo(e, i);
          });
        }(n, t, e, i).next(function () {
          return i.apply(t);
        }).next(function () {
          return n.Sr.zo(t);
        }).next(function () {
          return n.Cc.kr(t, r);
        });
      });
    }
    /**
     * Removes mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */

    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */


    function wo(t) {
      var e = m(t);
      return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function (t) {
        return e.Ka.Ea(t);
      });
    }
    /**
     * Updates the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */


    function _o(t, e) {
      var n = m(t),
          r = e.nt,
          i = n.bc;
      return n.persistence.runTransaction("Apply remote event", "readwrite-primary", function (t) {
        var o = n.Dc.ra({
          oa: !0
        }); // Reset newTargetDataByTargetMap in case this transaction gets re-run.

        i = n.bc;
        var s = [];
        e.zt.forEach(function (e, o) {
          var u = i.get(o);

          if (u) {
            // Only update the remote keys if the target is still active. This
            // ensures that we can persist the updated target data along with
            // the updated assignment.
            s.push(n.Ka.Ca(t, e.se, o).next(function () {
              return n.Ka.Sa(t, e.ee, o);
            }));
            var a = e.resumeToken; // Update the resume token if the change includes one.

            if (a.O() > 0) {
              var c = u.it(a, r).st(t.xa);
              i = i.ot(o, c), // Update the target data if there are target changes (or if
              // sufficient time has passed since the last update).

              /**
              * Returns true if the newTargetData should be persisted during an update of
              * an active target. TargetData should always be persisted when a target is
              * being released and should not call this function.
              *
              * While the target is active, TargetData updates can be omitted when nothing
              * about the target has changed except metadata like the resume token or
              * snapshot version. Occasionally it's worth the extra write to prevent these
              * values from getting too stale after a crash, but this doesn't have to be
              * too frequent.
              */
              function (t, e, n) {
                // Always persist target data if we don't already have a resume token.
                return g(e.resumeToken.O() > 0), 0 === t.resumeToken.O() || // Don't allow resume token changes to be buffered indefinitely. This
                // allows us to be reasonably up-to-date after a crash and avoids needing
                // to loop over all active queries on shutdown. Especially in the browser
                // we may not get time to do anything interesting while the current tab is
                // closing.
                e.nt.X() - t.nt.X() >= 3e8 || n.ee.size + n.ne.size + n.se.size > 0;
              }(u, c, e) && s.push(n.Ka.ya(t, c));
            }
          }
        });
        var u = St(),
            a = Ot(); // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.

        if (e.Yt.forEach(function (t, e) {
          a = a.add(t);
        }), // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        s.push(o.getEntries(t, a).next(function (i) {
          e.Yt.forEach(function (a, c) {
            var h = i.get(a); // Note: The order of the steps below is important, since we want
            // to ensure that rejected limbo resolutions (which fabricate
            // NoDocuments with SnapshotVersion.min()) never add documents to
            // cache.

            c instanceof Rn && c.version.isEqual(st.min()) ? ( // NoDocuments with SnapshotVersion.min() are used in manufactured
            // events. We remove these documents from cache since we lost
            // access.
            o.Ar(a, r), u = u.ot(a, c)) : null == h || c.version.L(h.version) > 0 || 0 === c.version.L(h.version) && h.hasPendingWrites ? (o.Er(c, r), u = u.ot(a, c)) : l("LocalStore", "Ignoring outdated watch update for ", a, ". Current version:", h.version, " Watch version:", c.version), e.Jt.has(a) && s.push(n.persistence.No.yc(t, a));
          });
        })), !r.isEqual(st.min())) {
          var c = n.Ka.Ea(t).next(function (e) {
            return n.Ka.Aa(t, t.xa, r);
          });
          s.push(c);
        }

        return yr.$n(s).next(function () {
          return o.apply(t);
        }).next(function () {
          return n.Cc.Mr(t, u);
        });
      }).then(function (t) {
        return n.bc = i, t;
      });
    }
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */


    function bo(t, e) {
      var n = m(t);
      return n.persistence.runTransaction("Get next mutation batch", "readonly", function (t) {
        return void 0 === e && (e = -1), n.Sr.Bo(t, e);
      });
    }
    /**
     * Reads the current value of a Document with a given key or null if not
     * found - used for testing.
     */

    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */


    function Io(t, e) {
      var n = m(t);
      return n.persistence.runTransaction("Allocate target", "readwrite", function (t) {
        var r;
        return n.Ka.va(t, e).next(function (i) {
          return i ? ( // This target has been listened to previously, so reuse the
          // previous targetID.
          // TODO(mcg): freshen last accessed date?
          r = i, yr.resolve(r)) : n.Ka.wa(t).next(function (i) {
            return r = new gt(e, i, 0
            /* Listen */
            , t.xa), n.Ka.Ra(t, r).next(function () {
              return r;
            });
          });
        });
      }).then(function (t) {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        var r = n.bc.get(t.targetId);
        return (null === r || t.nt.L(r.nt) > 0) && (n.bc = n.bc.ot(t.targetId, t), n.vc.set(e, t.targetId)), t;
      });
    }
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.

    /**
     * Unpins all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.


    function Eo(e, n, r) {
      return t.__awaiter(this, void 0, void 0, function () {
        var i, o, s, u;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              i = m(e), o = i.bc.get(n), s = r ? "readwrite" : "readwrite-primary", t.label = 1;

            case 1:
              return t.trys.push([1, 4,, 5]), r ? [3
              /*break*/
              , 3] : [4
              /*yield*/
              , i.persistence.runTransaction("Release target", s, function (t) {
                return i.persistence.No.removeTarget(t, o);
              })];

            case 2:
              t.sent(), t.label = 3;

            case 3:
              return [3
              /*break*/
              , 5];

            case 4:
              if (!_r(u = t.sent())) throw u; // All `releaseTarget` does is record the final metadata state for the
              // target, but we've been recording this periodically during target
              // activity. If we lose this write this could cause a very slight
              // difference in the order of target deletion during GC, but we
              // don't define exact LRU semantics so this is acceptable.

              return l("LocalStore", "Failed to update sequence numbers for target " + n + ": " + u), [3
              /*break*/
              , 5];

            case 5:
              return i.bc = i.bc.remove(n), i.vc.delete(o.target), [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */


    function To(t, e, n) {
      var r = m(t),
          i = st.min(),
          o = Ot();
      return r.persistence.runTransaction("Execute query", "readonly", function (t) {
        return function (t, e, n) {
          var r = m(t),
              i = r.vc.get(n);
          return void 0 !== i ? yr.resolve(r.bc.get(i)) : r.Ka.va(e, n);
        }(r, t, zn(e)).next(function (e) {
          if (e) return i = e.lastLimboFreeSnapshotVersion, r.Ka.Fa(t, e.targetId).next(function (t) {
            o = t;
          });
        }).next(function () {
          return r.Vc.Lr(t, e, n ? i : st.min(), n ? o : Ot());
        }).next(function (t) {
          return {
            documents: t,
            Fc: o
          };
        });
      });
    } // PORTING NOTE: Multi-Tab only.


    function No(t, e) {
      var n = m(t),
          r = m(n.Ka),
          i = n.bc.get(e);
      return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", function (t) {
        return r.Ue(t, e).next(function (t) {
          return t ? t.target : null;
        });
      });
    }
    /**
     * Returns the set of documents that have been updated since the last call.
     * If this is the first call, returns the set of changes since client
     * initialization. Further invocations will return document that have changed
     * since the prior call.
     */
    // PORTING NOTE: Multi-Tab only.


    function Ao(t) {
      var e = m(t);
      return e.persistence.runTransaction("Get new document changes", "readonly", function (t) {
        return function (t, e, n) {
          var r = m(t),
              i = St(),
              o = gi(n),
              s = Oi(e),
              u = IDBKeyRange.lowerBound(o, !0);
          return s.rs({
            index: Ki.readTimeIndex,
            range: u
          }, function (t, e) {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            var n = vi(r.serializer, e);
            i = i.ot(n.key, n), o = e.readTime;
          }).next(function () {
            return {
              xc: i,
              readTime: mi(o)
            };
          });
        }(e.Dc, t, e.Sc);
      }).then(function (t) {
        var n = t.xc,
            r = t.readTime;
        return e.Sc = r, n;
      });
    }
    /**
     * Reads the newest document change from persistence and moves the internal
     * synchronization marker forward so that calls to `getNewDocumentChanges()`
     * only return changes that happened after client initialization.
     */
    // PORTING NOTE: Multi-Tab only.


    function So(e) {
      return t.__awaiter(this, void 0, void 0, function () {
        var n;
        return t.__generator(this, function (t) {
          return [2
          /*return*/
          , (n = m(e)).persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) {
            return function (t) {
              var e = Oi(t),
                  n = st.min(); // If there are no existing entries, we return SnapshotVersion.min().

              return e.rs({
                index: Ki.readTimeIndex,
                reverse: !0
              }, function (t, e, r) {
                e.readTime && (n = mi(e.readTime)), r.done();
              }).next(function () {
                return n;
              });
            }(t);
          }).then(function (t) {
            n.Sc = t;
          })];
        });
      });
    }
    /**
     * Verifies the error thrown by a LocalStore operation. If a LocalStore
     * operation fails because the primary lease has been taken by another client,
     * we ignore the error (the persistence layer will immediately call
     * `applyPrimaryLease` to propagate the primary state change). All other errors
     * are re-thrown.
     *
     * @param err An error returned by a LocalStore operation.
     * @return A Promise that resolves after we recovered, or the original error.
     */


    function Do(e) {
      return t.__awaiter(this, void 0, void 0, function () {
        return t.__generator(this, function (t) {
          if (e.code !== a.FAILED_PRECONDITION || e.message !== ti) throw e;
          return l("LocalStore", "Unexpectedly lost primary lease"), [2
          /*return*/
          ];
        });
      });
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A collection of references to a document from some kind of numbered entity
     * (either a target ID or batch ID). As references are added to or removed from
     * the set corresponding events are emitted to a registered garbage collector.
     *
     * Each reference is represented by a DocumentReference object. Each of them
     * contains enough information to uniquely identify the reference. They are all
     * stored primarily in a set sorted by key. A document is considered garbage if
     * there's no references in that set (this can be efficiently checked thanks to
     * sorting by key).
     *
     * ReferenceSet also keeps a secondary set that contains references sorted by
     * IDs. This one is used to efficiently implement removal of all references by
     * some target ID.
     */


    var xo =
    /** @class */
    function () {
      function t() {
        // A set of outstanding references to a document sorted by key.
        this.$c = new Tt(Lo.kc), // A set of outstanding references to a document sorted by target id.
        this.Mc = new Tt(Lo.Oc)
        /** Returns true if the reference set contains no references. */
        ;
      }

      return t.prototype.m = function () {
        return this.$c.m();
      },
      /** Adds a reference to the given document key for the given ID. */
      t.prototype.Da = function (t, e) {
        var n = new Lo(t, e);
        this.$c = this.$c.add(n), this.Mc = this.Mc.add(n);
      },
      /** Add references to the given document keys for the given ID. */
      t.prototype.Lc = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.Da(t, e);
        });
      },
      /**
       * Removes a reference to the given document key for the given
       * ID.
       */
      t.prototype.Na = function (t, e) {
        this.Bc(new Lo(t, e));
      }, t.prototype.qc = function (t, e) {
        var n = this;
        t.forEach(function (t) {
          return n.Na(t, e);
        });
      },
      /**
       * Clears all references with a given ID. Calls removeRef() for each key
       * removed.
       */
      t.prototype.Uc = function (t) {
        var e = this,
            n = new A(new E([])),
            r = new Lo(n, t),
            i = new Lo(n, t + 1),
            o = [];
        return this.Mc.Ft([r, i], function (t) {
          e.Bc(t), o.push(t.key);
        }), o;
      }, t.prototype.Qc = function () {
        var t = this;
        this.$c.forEach(function (e) {
          return t.Bc(e);
        });
      }, t.prototype.Bc = function (t) {
        this.$c = this.$c.delete(t), this.Mc = this.Mc.delete(t);
      }, t.prototype.Wc = function (t) {
        var e = new A(new E([])),
            n = new Lo(e, t),
            r = new Lo(e, t + 1),
            i = Ot();
        return this.Mc.Ft([n, r], function (t) {
          i = i.add(t.key);
        }), i;
      }, t.prototype.Ho = function (t) {
        var e = new Lo(t, 0),
            n = this.$c.$t(e);
        return null !== n && t.isEqual(n.key);
      }, t;
    }(),
        Lo =
    /** @class */
    function () {
      function t(t, e) {
        this.key = t, this.jc = e
        /** Compare by key then by ID */
        ;
      }

      return t.kc = function (t, e) {
        return A.i(t.key, e.key) || H(t.jc, e.jc);
      },
      /** Compare by ID then by key */
      t.Oc = function (t, e) {
        return H(t.jc, e.jc) || A.i(t.key, e.key);
      }, t;
    }(),
        ko = function (t, e) {
      this.user = e, this.type = "OAuth", this.Kc = {}, // Set the headers using Object Literal notation to avoid minification
      this.Kc.Authorization = "Bearer " + t;
    },
        Ro =
    /** @class */
    function () {
      function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.Gc = null;
      }

      return t.prototype.getToken = function () {
        return Promise.resolve(null);
      }, t.prototype.zc = function () {}, t.prototype.Hc = function (t) {
        this.Gc = t, // Fire with initial user.
        t(Mr.UNAUTHENTICATED);
      }, t.prototype.Yc = function () {
        this.Gc = null;
      }, t;
    }(),
        Oo =
    /** @class */
    function () {
      function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */

        this.Jc = null,
        /** Tracks the current User. */
        this.currentUser = Mr.UNAUTHENTICATED, this.Xc = !1,
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.Zc = 0,
        /** The listener registered with setChangeListener(). */
        this.Gc = null, this.forceRefresh = !1, this.Jc = function () {
          e.Zc++, e.currentUser = e.tu(), e.Xc = !0, e.Gc && e.Gc(e.currentUser);
        }, this.Zc = 0, this.auth = t.getImmediate({
          optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.Jc) : ( // if auth is not available, invoke tokenListener once with null token
        this.Jc(null), t.get().then(function (t) {
          e.auth = t, e.Jc && // tokenListener can be removed by removeChangeListener()
          e.auth.addAuthTokenListener(e.Jc);
        }, function () {}));
      }

      return t.prototype.getToken = function () {
        var t = this,
            e = this.Zc,
            n = this.forceRefresh; // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.

        return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(function (n) {
          // Cancel the request since the token changed while the request was
          // outstanding so the response is potentially for a previous user (which
          // user, we can't be sure).
          return t.Zc !== e ? (l("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (g("string" == typeof n.accessToken), new ko(n.accessToken, t.currentUser)) : null;
        }) : Promise.resolve(null);
      }, t.prototype.zc = function () {
        this.forceRefresh = !0;
      }, t.prototype.Hc = function (t) {
        this.Gc = t, // Fire the initial event
        this.Xc && t(this.currentUser);
      }, t.prototype.Yc = function () {
        this.auth && this.auth.removeAuthTokenListener(this.Jc), this.Jc = null, this.Gc = null;
      }, // Auth.getUid() can return null even with a user logged in. It is because
      // getUid() is synchronous, but the auth code populating Uid is asynchronous.
      // This method should only be called in the AuthTokenListener callback
      // to guarantee to get the actual user.
      t.prototype.tu = function () {
        var t = this.auth && this.auth.getUid();
        return g(null === t || "string" == typeof t), new Mr(t);
      }, t;
    }(),
        Po =
    /** @class */
    function () {
      function t(t, e) {
        this.eu = t, this.nu = e, this.type = "FirstParty", this.user = Mr.ni;
      }

      return Object.defineProperty(t.prototype, "Kc", {
        get: function () {
          var t = {
            "X-Goog-AuthUser": this.nu
          },
              e = this.eu.auth.getAuthHeaderValueForFirstParty([]); // Use array notation to prevent minification

          return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }(),
        Vo =
    /** @class */
    function () {
      function t(t, e) {
        this.eu = t, this.nu = e;
      }

      return t.prototype.getToken = function () {
        return Promise.resolve(new Po(this.eu, this.nu));
      }, t.prototype.Hc = function (t) {
        // Fire with initial uid.
        t(Mr.ni);
      }, t.prototype.Yc = function () {}, t.prototype.zc = function () {}, t;
    }(),
        Uo =
    /** @class */
    function () {
      function e(t, e, n, r, i, o) {
        this.fn = t, this.su = n, this.iu = r, this.ru = i, this.listener = o, this.state = 0
        /* Initial */
        ,
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.ou = 0, this.au = null, this.stream = null, this.ys = new vr(t, e)
        /**
        * Returns true if start() has been called and no error has occurred. True
        * indicates the stream is open or in the process of opening (which
        * encompasses respecting backoff, getting auth tokens, and starting the
        * actual RPC). Use isOpen() to determine if the stream is open and ready for
        * outbound requests.
        */
        ;
      }

      return e.prototype.cu = function () {
        return 1
        /* Starting */
        === this.state || 2
        /* Open */
        === this.state || 4
        /* Backoff */
        === this.state;
      },
      /**
       * Returns true if the underlying RPC is open (the onOpen() listener has been
       * called) and the stream is ready for outbound requests.
       */
      e.prototype.uu = function () {
        return 2
        /* Open */
        === this.state;
      },
      /**
       * Starts the RPC. Only allowed if isStarted() returns false. The stream is
       * not immediately ready for use: onOpen() will be invoked when the RPC is
       * ready for outbound requests, at which point isOpen() will return true.
       *
       * When start returns, isStarted() will return true.
       */
      e.prototype.start = function () {
        3
        /* Error */
        !== this.state ? this.auth() : this.hu();
      },
      /**
       * Stops the RPC. This call is idempotent and allowed regardless of the
       * current isStarted() state.
       *
       * When stop returns, isStarted() and isOpen() will both return false.
       */
      e.prototype.stop = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.cu() ? [4
                /*yield*/
                , this.close(0
                /* Initial */
                )] : [3
                /*break*/
                , 2];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * After an error the stream will usually back off on the next attempt to
       * start it. If the error warrants an immediate restart of the stream, the
       * sender can use this to indicate that the receiver should not back off.
       *
       * Each error will call the onClose() listener. That function can decide to
       * inhibit backoff if required.
       */
      e.prototype.lu = function () {
        this.state = 0
        /* Initial */
        , this.ys.reset();
      },
      /**
       * Marks this stream as idle. If no further actions are performed on the
       * stream for one minute, the stream will automatically close itself and
       * notify the stream's onClose() handler with Status.OK. The stream will then
       * be in a !isStarted() state, requiring the caller to start the stream again
       * before further use.
       *
       * Only streams that are in state 'Open' can be marked idle, as all other
       * states imply pending network operations.
       */
      e.prototype._u = function () {
        var t = this; // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).

        this.uu() && null === this.au && (this.au = this.fn.yn(this.su, 6e4, function () {
          return t.fu();
        }));
      },
      /** Sends a message to the underlying stream. */
      e.prototype.du = function (t) {
        this.wu(), this.stream.send(t);
      },
      /** Called by the idle timer when the stream should close due to inactivity. */
      e.prototype.fu = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          return t.__generator(this, function (t) {
            return this.uu() ? [2
            /*return*/
            , this.close(0
            /* Initial */
            )] : [2
            /*return*/
            ];
          });
        });
      },
      /** Marks the stream as active again. */
      e.prototype.wu = function () {
        this.au && (this.au.cancel(), this.au = null);
      },
      /**
       * Closes the stream and cleans up as necessary:
       *
       * * closes the underlying GRPC stream;
       * * calls the onClose handler with the given 'error';
       * * sets internal stream state to 'finalState';
       * * adjusts the backoff timer based on the error
       *
       * A new stream can be opened by calling start().
       *
       * @param finalState the intended state of the stream after closing.
       * @param error the error the connection was closed with.
       */
      e.prototype.close = function (e, n) {
        return t.__awaiter(this, void 0, void 0, function () {
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                // Notify the listener that the stream closed.
                // Cancel any outstanding timers (they're guaranteed not to execute).
                return this.wu(), this.ys.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
                // underlying stream), guaranteeing they won't execute.
                this.ou++, 3
                /* Error */
                !== e ? // If this is an intentional close ensure we don't delay our next connection attempt.
                this.ys.reset() : n && n.code === a.RESOURCE_EXHAUSTED ? ( // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                p(n.toString()), p("Using maximum backoff delay to prevent overloading the backend."), this.ys.Rn()) : n && n.code === a.UNAUTHENTICATED && // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                // just expired.
                this.ru.zc(), // Clean up the underlying stream because we are no longer interested in events.
                null !== this.stream && (this.mu(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
                // inhibit backoff or otherwise manipulate the state in its non-started state.
                this.state = e, [4
                /*yield*/
                , this.listener.Tu(n)];

              case 1:
                // Cancel any outstanding timers (they're guaranteed not to execute).
                // Notify the listener that the stream closed.
                return t.sent(), [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Can be overridden to perform additional cleanup before the stream is closed.
       * Calling super.tearDown() is not required.
       */
      e.prototype.mu = function () {}, e.prototype.auth = function () {
        var t = this;
        this.state = 1
        /* Starting */
        ;
        var e = this.Eu(this.ou),
            n = this.ou; // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.

        this.ru.getToken().then(function (e) {
          // Stream can be stopped while waiting for authentication.
          // TODO(mikelehen): We really should just use dispatchIfNotClosed
          // and let this dispatch onto the queue, but that opened a spec test can
          // of worms that I don't want to deal with in this PR.
          t.ou === n && // Normally we'd have to schedule the callback on the AsyncQueue.
          // However, the following calls are safe to be called outside the
          // AsyncQueue since they don't chain asynchronous calls
          t.Iu(e);
        }, function (n) {
          e(function () {
            var e = new c(a.UNKNOWN, "Fetching auth token failed: " + n.message);
            return t.Au(e);
          });
        });
      }, e.prototype.Iu = function (t) {
        var e = this,
            n = this.Eu(this.ou);
        this.stream = this.Ru(t), this.stream.gu(function () {
          n(function () {
            return e.state = 2
            /* Open */
            , e.listener.gu();
          });
        }), this.stream.Tu(function (t) {
          n(function () {
            return e.Au(t);
          });
        }), this.stream.onMessage(function (t) {
          n(function () {
            return e.onMessage(t);
          });
        });
      }, e.prototype.hu = function () {
        var e = this;
        this.state = 4
        /* Backoff */
        , this.ys.gn(function () {
          return t.__awaiter(e, void 0, void 0, function () {
            return t.__generator(this, function (t) {
              return this.state = 0
              /* Initial */
              , this.start(), [2
              /*return*/
              ];
            });
          });
        });
      }, // Visible for tests
      e.prototype.Au = function (t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return l("PersistentStream", "close with error: " + t), this.stream = null, this.close(3
        /* Error */
        , t);
      },
      /**
       * Returns a "dispatcher" function that dispatches operations onto the
       * AsyncQueue but only runs them if closeCount remains unchanged. This allows
       * us to turn auth / stream callbacks into no-ops if the stream is closed /
       * re-opened, etc.
       */
      e.prototype.Eu = function (t) {
        var e = this;
        return function (n) {
          e.fn.ws(function () {
            return e.ou === t ? n() : (l("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
          });
        };
      }, e;
    }(),
        Co =
    /** @class */
    function (e) {
      function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "listen_stream_connection_backoff"
        /* ListenStreamConnectionBackoff */
        , "listen_stream_idle"
        /* ListenStreamIdle */
        , n, r, o) || this).serializer = i, s;
      }

      return t.__extends(n, e), n.prototype.Ru = function (t) {
        return this.iu.Pu("Listen", t);
      }, n.prototype.onMessage = function (t) {
        // A successful response means the stream is healthy
        this.ys.reset();

        var e = function (t, e) {
          var n;

          if ("targetChange" in e) {
            e.targetChange; // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset

            var r = function (t) {
              return "NO_CHANGE" === t ? 0
              /* NoChange */
              : "ADD" === t ? 1
              /* Added */
              : "REMOVE" === t ? 2
              /* Removed */
              : "CURRENT" === t ? 3
              /* Current */
              : "RESET" === t ? 4
              /* Reset */
              : y();
            }(e.targetChange.targetChangeType || "NO_CHANGE"),
                i = e.targetChange.targetIds || [],
                o = function (t, e) {
              return t.Qe ? (g(void 0 === e || "string" == typeof e), X.fromBase64String(e || "")) : (g(void 0 === e || e instanceof Uint8Array), X.fromUint8Array(e || new Uint8Array()));
            }(t, e.targetChange.resumeToken),
                s = e.targetChange.cause,
                u = s && function (t) {
              var e = void 0 === t.code ? a.UNKNOWN : _t(t.code);
              return new c(e, t.message || "");
            }(s);

            n = new zt(r, i, o, u || null);
          } else if ("documentChange" in e) {
            e.documentChange;
            var h = e.documentChange;
            h.document, h.document.name, h.document.updateTime;
            var f = Se(t, h.document.name),
                l = Ee(h.document.updateTime),
                p = new Sn({
              mapValue: {
                fields: h.document.fields
              }
            }),
                d = new kn(f, l, p, {}),
                v = h.targetIds || [],
                m = h.removedTargetIds || [];
            n = new jt(v, m, d.key, d);
          } else if ("documentDelete" in e) {
            e.documentDelete;
            var w = e.documentDelete;
            w.document;

            var _ = Se(t, w.document),
                b = w.readTime ? Ee(w.readTime) : st.min(),
                I = new Rn(_, b),
                E = w.removedTargetIds || [];

            n = new jt([], E, I.key, I);
          } else if ("documentRemove" in e) {
            e.documentRemove;
            var T = e.documentRemove;
            T.document;
            var N = Se(t, T.document),
                A = T.removedTargetIds || [];
            n = new jt([], A, N, null);
          } else {
            if (!("filter" in e)) return y();
            e.filter;
            var S = e.filter;
            S.targetId;
            var D = S.count || 0,
                x = new mt(D),
                L = S.targetId;
            n = new Gt(L, x);
          }

          return n;
        }(this.serializer, t),
            n = function (t) {
          // We have only reached a consistent snapshot for the entire stream if there
          // is a read_time set and it applies to all targets (i.e. the list of
          // targets is empty). The backend is guaranteed to send such responses.
          if (!("targetChange" in t)) return st.min();
          var e = t.targetChange;
          return e.targetIds && e.targetIds.length ? st.min() : e.readTime ? Ee(e.readTime) : st.min();
        }(t);

        return this.listener.yu(e, n);
      },
      /**
       * Registers interest in the results of the given target. If the target
       * includes a resumeToken it will be included in the request. Results that
       * affect the target will be streamed back as WatchChange messages that
       * reference the targetId.
       */
      n.prototype.Vu = function (t) {
        var e = {};
        e.database = Le(this.serializer), e.addTarget = function (t, e) {
          var n,
              r = e.target;
          return (n = dt(r) ? {
            documents: Ve(t, r)
          } : {
            query: Ue(t, r)
          }).targetId = e.targetId, e.resumeToken.O() > 0 && (n.resumeToken = be(t, e.resumeToken)), n;
        }(this.serializer, t);

        var n = function (t, e) {
          var n = function (t, e) {
            switch (e) {
              case 0
              /* Listen */
              :
                return null;

              case 1
              /* ExistenceFilterMismatch */
              :
                return "existence-filter-mismatch";

              case 2
              /* LimboResolution */
              :
                return "limbo-document";

              default:
                return y();
            }
          }(0, e.et);

          return null == n ? null : {
            "goog-listen-tags": n
          };
        }(this.serializer, t);

        n && (e.labels = n), this.du(e);
      },
      /**
       * Unregisters interest in the results of the target associated with the
       * given targetId.
       */
      n.prototype.pu = function (t) {
        var e = {};
        e.database = Le(this.serializer), e.removeTarget = t, this.du(e);
      }, n;
    }(Uo),
        Fo =
    /** @class */
    function (e) {
      function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "write_stream_connection_backoff"
        /* WriteStreamConnectionBackoff */
        , "write_stream_idle"
        /* WriteStreamIdle */
        , n, r, o) || this).serializer = i, s.bu = !1, s;
      }

      return t.__extends(n, e), Object.defineProperty(n.prototype, "vu", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function () {
          return this.bu;
        },
        enumerable: !1,
        configurable: !0
      }), // Override of PersistentStream.start
      n.prototype.start = function () {
        this.bu = !1, this.lastStreamToken = void 0, e.prototype.start.call(this);
      }, n.prototype.mu = function () {
        this.bu && this.Su([]);
      }, n.prototype.Ru = function (t) {
        return this.iu.Pu("Write", t);
      }, n.prototype.onMessage = function (t) {
        if ( // Always capture the last stream token.
        g(!!t.streamToken), this.lastStreamToken = t.streamToken, this.bu) {
          // A successful first write response means the stream is healthy,
          // Note, that we could consider a successful handshake healthy, however,
          // the write itself might be causing an error we want to back off from.
          this.ys.reset();

          var e = function (t, e) {
            return t && t.length > 0 ? (g(void 0 !== e), t.map(function (t) {
              return function (t, e) {
                // NOTE: Deletes don't have an updateTime.
                var n = t.updateTime ? Ee(t.updateTime) : Ee(e);
                n.isEqual(st.min()) && ( // The Firestore Emulator currently returns an update time of 0 for
                // deletes of non-existing documents (rather than null). This breaks the
                // test "get deleted doc while offline with source=cache" as NoDocuments
                // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                // TODO(#2149): Remove this when Emulator is fixed
                n = Ee(e));
                var r = null;
                return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), new hn(n, r);
              }(t, e);
            })) : [];
          }(t.writeResults, t.commitTime),
              n = Ee(t.commitTime);

          return this.listener.Du(n, e);
        } // The first response is always the handshake response


        return g(!t.writeResults || 0 === t.writeResults.length), this.bu = !0, this.listener.Cu();
      },
      /**
       * Sends an initial streamToken to the server, performing the handshake
       * required to make the StreamingWrite RPC work. Subsequent
       * calls should wait until onHandshakeComplete was called.
       */
      n.prototype.Nu = function () {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = Le(this.serializer), this.du(t);
      },
      /** Sends a group of mutations to the Firestore backend to apply. */
      n.prototype.Su = function (t) {
        var e = this,
            n = {
          streamToken: this.lastStreamToken,
          writes: t.map(function (t) {
            return Oe(e.serializer, t);
          })
        };
        this.du(n);
      }, n;
    }(Uo),
        Mo =
    /** @class */
    function (e) {
      function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).credentials = t, i.iu = n, i.serializer = r, i.Fu = !1, i;
      }

      return t.__extends(n, e), n.prototype.xu = function () {
        if (this.Fu) throw new c(a.FAILED_PRECONDITION, "The client has already been terminated.");
      },
      /** Gets an auth token and invokes the provided RPC. */
      n.prototype.$u = function (t, e, n) {
        var r = this;
        return this.xu(), this.credentials.getToken().then(function (i) {
          return r.iu.$u(t, e, n, i);
        }).catch(function (t) {
          throw t.code === a.UNAUTHENTICATED && r.credentials.zc(), t;
        });
      },
      /** Gets an auth token and invokes the provided RPC with streamed results. */
      n.prototype.ku = function (t, e, n) {
        var r = this;
        return this.xu(), this.credentials.getToken().then(function (i) {
          return r.iu.ku(t, e, n, i);
        }).catch(function (t) {
          throw t.code === a.UNAUTHENTICATED && r.credentials.zc(), t;
        });
      }, n.prototype.terminate = function () {
        this.Fu = !1;
      }, n;
    }(function () {}),
        qo =
    /** @class */
    function () {
      function t(t, e) {
        this.cs = t, this.di = e,
        /** The current OnlineState. */
        this.state = "Unknown"
        /* Unknown */
        ,
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Mu = 0,
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.Ou = null,
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Lu = !0
        /**
        * Called by RemoteStore when a watch stream is started (including on each
        * backoff attempt).
        *
        * If this is the first attempt, it sets the OnlineState to Unknown and starts
        * the onlineStateTimer.
        */
        ;
      }

      return t.prototype.Bu = function () {
        var t = this;
        0 === this.Mu && (this.qu("Unknown"
        /* Unknown */
        ), this.Ou = this.cs.yn("online_state_timeout"
        /* OnlineStateTimeout */
        , 1e4, function () {
          return t.Ou = null, t.Uu("Backend didn't respond within 10 seconds."), t.qu("Offline"
          /* Offline */
          ), Promise.resolve();
        }));
      },
      /**
       * Updates our OnlineState as appropriate after the watch stream reports a
       * failure. The first failure moves us to the 'Unknown' state. We then may
       * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
       * actually transition to the 'Offline' state.
       */
      t.prototype.Qu = function (t) {
        "Online"
        /* Online */
        === this.state ? this.qu("Unknown"
        /* Unknown */
        ) : (this.Mu++, this.Mu >= 1 && (this.Wu(), this.Uu("Connection failed 1 times. Most recent error: " + t.toString()), this.qu("Offline"
        /* Offline */
        )));
      },
      /**
       * Explicitly sets the OnlineState to the specified state.
       *
       * Note that this resets our timers / failure counters, etc. used by our
       * Offline heuristics, so must not be used in place of
       * handleWatchStreamStart() and handleWatchStreamFailure().
       */
      t.prototype.set = function (t) {
        this.Wu(), this.Mu = 0, "Online"
        /* Online */
        === t && ( // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Lu = !1), this.qu(t);
      }, t.prototype.qu = function (t) {
        t !== this.state && (this.state = t, this.di(t));
      }, t.prototype.Uu = function (t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Lu ? (p(e), this.Lu = !1) : l("OnlineStateTracker", e);
      }, t.prototype.Wu = function () {
        null !== this.Ou && (this.Ou.cancel(), this.Ou = null);
      }, t;
    }(),
        jo = function (
    /**
         * The local store, used to fill the write pipeline with outbound mutations.
         */
    e,
    /** The client-side proxy for interacting with the backend. */
    n, r, i, o) {
      var s = this;
      this.ju = e, this.Ku = n, this.cs = r, this.Gu = {},
      /**
               * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
               * LocalStore via fillWritePipeline() and have or will send to the write
               * stream.
               *
               * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
               * restart the write stream. When the stream is established the writes in the
               * pipeline will be sent in order.
               *
               * Writes remain in writePipeline until they are acknowledged by the backend
               * and thus will automatically be re-sent if the stream is interrupted /
               * restarted before they're acknowledged.
               *
               * Write responses from the backend are linked to their originating request
               * purely based on order, and so we can just shift() writes from the front of
               * the writePipeline as we receive responses.
               */
      this.zu = [],
      /**
               * A mapping of watched targets that the client cares about tracking and the
               * user has explicitly called a 'listen' for this target.
               *
               * These targets may or may not have been sent to or acknowledged by the
               * server. On re-establishing the listen stream, these targets should be sent
               * to the server. The targets removed with unlistens are removed eagerly
               * without waiting for confirmation from the listen stream.
               */
      this.Hu = new Map(),
      /**
               * A set of reasons for why the RemoteStore may be offline. If empty, the
               * RemoteStore may start its network connections.
               */
      this.Yu = new Set(),
      /**
               * Event handlers that get called when the network is disabled or enabled.
               *
               * PORTING NOTE: These functions are used on the Web client to create the
               * underlying streams (to support tree-shakeable streams). On Android and iOS,
               * the streams are created during construction of RemoteStore.
               */
      this.Ju = [], this.Xu = o, this.Xu.Zu(function (e) {
        r.ws(function () {
          return t.__awaiter(s, void 0, void 0, function () {
            return t.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return Xo(this) ? (l("RemoteStore", "Restarting streams for network reachability change."), [4
                  /*yield*/
                  , function (e) {
                    return t.__awaiter(this, void 0, void 0, function () {
                      var n;
                      return t.__generator(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (n = m(e)).Yu.add(4
                            /* ConnectivityChange */
                            ), [4
                            /*yield*/
                            , zo(n)];

                          case 1:
                            return t.sent(), n.th.set("Unknown"
                            /* Unknown */
                            ), n.Yu.delete(4
                            /* ConnectivityChange */
                            ), [4
                            /*yield*/
                            , Go(n)];

                          case 2:
                            return t.sent(), [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  }(this)]) : [3
                  /*break*/
                  , 2];

                case 1:
                  e.sent(), e.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        });
      }), this.th = new qo(r, i);
    };

    function Go(e) {
      return t.__awaiter(this, void 0, void 0, function () {
        var n, r;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              if (!Xo(e)) return [3
              /*break*/
              , 4];
              n = 0, r = e.Ju, t.label = 1;

            case 1:
              return n < r.length ? [4
              /*yield*/
              , (0, r[n])(
              /* enabled= */
              !0)] : [3
              /*break*/
              , 4];

            case 2:
              t.sent(), t.label = 3;

            case 3:
              return n++, [3
              /*break*/
              , 1];

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */


    function zo(e) {
      return t.__awaiter(this, void 0, void 0, function () {
        var n, r;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              n = 0, r = e.Ju, t.label = 1;

            case 1:
              return n < r.length ? [4
              /*yield*/
              , (0, r[n])(
              /* enabled= */
              !1)] : [3
              /*break*/
              , 4];

            case 2:
              t.sent(), t.label = 3;

            case 3:
              return n++, [3
              /*break*/
              , 1];

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function Bo(e) {
      return t.__awaiter(this, void 0, void 0, function () {
        var n;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return n = m(e), l("RemoteStore", "RemoteStore shutting down."), n.Yu.add(5
              /* Shutdown */
              ), [4
              /*yield*/
              , zo(n)];

            case 1:
              return t.sent(), n.Xu.Di(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
              // triggering spurious listener events with cached data, etc.
              n.th.set("Unknown"
              /* Unknown */
              ), [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */


    function Wo(t, e) {
      var n = m(t);
      n.Hu.has(e.targetId) || ( // Mark this as something the client is currently listening for.
      n.Hu.set(e.targetId, e), $o(n) ? // The listen will be sent in onWatchStreamOpen
      Yo(n) : ls(n).uu() && Qo(n, e));
    }
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */


    function Ko(t, e) {
      var n = m(t),
          r = ls(n);
      n.Hu.delete(e), r.uu() && Ho(n, e), 0 === n.Hu.size && (r.uu() ? r._u() : Xo(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
      // have no listeners, since without any listens to send we cannot
      // confirm if the stream is healthy and upgrade to OnlineState.Online.
      n.th.set("Unknown"
      /* Unknown */
      ));
    }
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */


    function Qo(t, e) {
      t.eh.Ie(e.targetId), ls(t).Vu(e)
      /**
      * We need to increment the expected number of pending responses we're due
      * from watch so we wait for the removal on the server before we process any
      * messages from this target.
      */
      ;
    }

    function Ho(t, e) {
      t.eh.Ie(e), ls(t).pu(e);
    }

    function Yo(t) {
      t.eh = new Wt({
        qe: function (e) {
          return t.Gu.qe(e);
        },
        Ue: function (e) {
          return t.Hu.get(e) || null;
        }
      }), ls(t).start(), t.th.Bu()
      /**
      * Returns whether the watch stream should be started because it's necessary
      * and has not yet been started.
      */
      ;
    }

    function $o(t) {
      return Xo(t) && !ls(t).cu() && t.Hu.size > 0;
    }

    function Xo(t) {
      return 0 === m(t).Yu.size;
    }

    function Jo(t) {
      t.eh = void 0;
    }

    function Zo(e) {
      return t.__awaiter(this, void 0, void 0, function () {
        return t.__generator(this, function (t) {
          return e.Hu.forEach(function (t, n) {
            Qo(e, t);
          }), [2
          /*return*/
          ];
        });
      });
    }

    function ts(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        return t.__generator(this, function (t) {
          return Jo(e), // If we still need the watch stream, retry the connection.
          $o(e) ? (e.th.Qu(n), Yo(e)) : // No need to restart watch stream because there are no active targets.
          // The online state is set to unknown because there is no active attempt
          // at establishing a connection
          e.th.set("Unknown"
          /* Unknown */
          ), [2
          /*return*/
          ];
        });
      });
    }

    function es(e, n, r) {
      return t.__awaiter(this, void 0, void 0, function () {
        var i, o, s;
        return t.__generator(this, function (u) {
          switch (u.label) {
            case 0:
              if (e.th.set("Online"
              /* Online */
              ), !(n instanceof zt && 2
              /* Removed */
              === n.state && n.cause)) // Mark the client as online since we got a message from the server
                return [3
                /*break*/
                , 6];
              u.label = 1;

            case 1:
              return u.trys.push([1, 3,, 5]), [4
              /*yield*/
              ,
              /** Handles an error on a target */
              function (e, n) {
                return t.__awaiter(this, void 0, void 0, function () {
                  var r, i, o, s;
                  return t.__generator(this, function (t) {
                    switch (t.label) {
                      case 0:
                        r = n.cause, i = 0, o = n.targetIds, t.label = 1;

                      case 1:
                        return i < o.length ? (s = o[i], e.Hu.has(s) ? [4
                        /*yield*/
                        , e.Gu.nh(s, r)] : [3
                        /*break*/
                        , 3]) : [3
                        /*break*/
                        , 5];

                      case 2:
                        t.sent(), e.Hu.delete(s), e.eh.removeTarget(s), t.label = 3;

                      case 3:
                        t.label = 4;

                      case 4:
                        return i++, [3
                        /*break*/
                        , 1];

                      case 5:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }(e, n)];

            case 2:
              return u.sent(), [3
              /*break*/
              , 5];

            case 3:
              return i = u.sent(), l("RemoteStore", "Failed to remove targets %s: %s ", n.targetIds.join(","), i), [4
              /*yield*/
              , ns(e, i)];

            case 4:
              return u.sent(), [3
              /*break*/
              , 5];

            case 5:
              return [3
              /*break*/
              , 13];

            case 6:
              if (n instanceof jt ? e.eh.be(n) : n instanceof Gt ? e.eh.$e(n) : e.eh.De(n), r.isEqual(st.min())) return [3
              /*break*/
              , 13];
              u.label = 7;

            case 7:
              return u.trys.push([7, 11,, 13]), [4
              /*yield*/
              , wo(e.ju)];

            case 8:
              return o = u.sent(), r.L(o) >= 0 ? [4
              /*yield*/
              ,
              /**
               * Takes a batch of changes from the Datastore, repackages them as a
               * RemoteEvent, and passes that on to the listener, which is typically the
               * SyncEngine.
               */
              function (t, e) {
                var n = t.eh.Oe(e); // Update in-memory resume tokens. LocalStore will update the
                // persistent view of these when applying the completed RemoteEvent.

                return n.zt.forEach(function (n, r) {
                  if (n.resumeToken.O() > 0) {
                    var i = t.Hu.get(r); // A watched target might have been removed already.

                    i && t.Hu.set(r, i.it(n.resumeToken, e));
                  }
                }), // Re-establish listens for the targets that have been invalidated by
                // existence filter mismatches.
                n.Ht.forEach(function (e) {
                  var n = t.Hu.get(e);

                  if (n) {
                    // Clear the resume token for the target, since we're in a known mismatch
                    // state.
                    t.Hu.set(e, n.it(X.B, n.nt)), // Cause a hard reset by unwatching and rewatching immediately, but
                    // deliberately don't send a resume token so that we get a full update.
                    Ho(t, e); // Mark the target we send as being on behalf of an existence filter
                    // mismatch, but don't actually retain that in listenTargets. This ensures
                    // that we flag the first re-listen this way without impacting future
                    // listens of this target (that might happen e.g. on reconnect).

                    var r = new gt(n.target, e, 1
                    /* ExistenceFilterMismatch */
                    , n.sequenceNumber);
                    Qo(t, r);
                  }
                }), t.Gu.sh(n);
              }(e, r)] : [3
              /*break*/
              , 10];
            // We have received a target change with a global snapshot if the snapshot
            // version is not equal to SnapshotVersion.min().

            case 9:
              // We have received a target change with a global snapshot if the snapshot
              // version is not equal to SnapshotVersion.min().
              u.sent(), u.label = 10;

            case 10:
              return [3
              /*break*/
              , 13];

            case 11:
              return l("RemoteStore", "Failed to raise snapshot:", s = u.sent()), [4
              /*yield*/
              , ns(e, s)];

            case 12:
              return u.sent(), [3
              /*break*/
              , 13];

            case 13:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Recovery logic for IndexedDB errors that takes the network offline until
     * `op` succeeds. Retries are scheduled with backoff using
     * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
     * validated via a generic operation.
     *
     * The returned Promise is resolved once the network is disabled and before
     * any retry attempt.
     */


    function ns(e, n, r) {
      return t.__awaiter(this, void 0, void 0, function () {
        var i = this;
        return t.__generator(this, function (o) {
          switch (o.label) {
            case 0:
              if (!_r(n)) throw n; // Disable network and raise offline snapshots

              return e.Yu.add(1
              /* IndexedDbFailed */
              ), [4
              /*yield*/
              , zo(e)];

            case 1:
              // Disable network and raise offline snapshots
              return o.sent(), e.th.set("Offline"
              /* Offline */
              ), r || ( // Use a simple read operation to determine if IndexedDB recovered.
              // Ideally, we would expose a health check directly on SimpleDb, but
              // RemoteStore only has access to persistence through LocalStore.
              r = function () {
                return wo(e.ju);
              }), // Probe IndexedDB periodically and re-enable network
              e.cs.Cs(function () {
                return t.__awaiter(i, void 0, void 0, function () {
                  return t.__generator(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return l("RemoteStore", "Retrying IndexedDB access"), [4
                        /*yield*/
                        , r()];

                      case 1:
                        return t.sent(), e.Yu.delete(1
                        /* IndexedDbFailed */
                        ), [4
                        /*yield*/
                        , Go(e)];

                      case 2:
                        return t.sent(), [2
                        /*return*/
                        ];
                    }
                  });
                });
              }), [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Executes `op`. If `op` fails, takes the network offline until `op`
     * succeeds. Returns after the first attempt.
     */


    function rs(t, e) {
      return e().catch(function (n) {
        return ns(t, n, e);
      });
    }

    function is(e) {
      return t.__awaiter(this, void 0, void 0, function () {
        var n, r, i, o, s;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              n = m(e), r = ps(n), i = n.zu.length > 0 ? n.zu[n.zu.length - 1].batchId : -1, t.label = 1;

            case 1:
              if (!
              /**
              * Returns true if we can add to the write pipeline (i.e. the network is
              * enabled and the write pipeline is not full).
              */
              function (t) {
                return Xo(t) && t.zu.length < 10;
              }
              /**
              * Queues additional writes to be sent to the write stream, sending them
              * immediately if the write stream is established.
              */
              (n)) return [3
              /*break*/
              , 7];
              t.label = 2;

            case 2:
              return t.trys.push([2, 4,, 6]), [4
              /*yield*/
              , bo(n.ju, i)];

            case 3:
              return null === (o = t.sent()) ? (0 === n.zu.length && r._u(), [3
              /*break*/
              , 7]) : (i = o.batchId, function (t, e) {
                t.zu.push(e);
                var n = ps(t);
                n.uu() && n.vu && n.Su(e.mutations);
              }(n, o), [3
              /*break*/
              , 6]);

            case 4:
              return s = t.sent(), [4
              /*yield*/
              , ns(n, s)];

            case 5:
              return t.sent(), [3
              /*break*/
              , 6];

            case 6:
              return [3
              /*break*/
              , 1];

            case 7:
              return os(n) && ss(n), [2
              /*return*/
              ];
          }
        });
      });
    }

    function os(t) {
      return Xo(t) && !ps(t).cu() && t.zu.length > 0;
    }

    function ss(t) {
      ps(t).start();
    }

    function us(e) {
      return t.__awaiter(this, void 0, void 0, function () {
        return t.__generator(this, function (t) {
          return ps(e).Nu(), [2
          /*return*/
          ];
        });
      });
    }

    function as(e) {
      return t.__awaiter(this, void 0, void 0, function () {
        var n, r, i, o;
        return t.__generator(this, function (t) {
          // Send the write pipeline now that the stream is established.
          for (n = ps(e), r = 0, i = e.zu; r < i.length; r++) o = i[r], n.Su(o.mutations);

          return [2
          /*return*/
          ];
        });
      });
    }

    function cs(e, n, r) {
      return t.__awaiter(this, void 0, void 0, function () {
        var i, o;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return i = e.zu.shift(), o = Jr.from(i, n, r), [4
              /*yield*/
              , rs(e, function () {
                return e.Gu.ih(o);
              })];

            case 1:
              // It's possible that with the completion of this mutation another
              // slot has freed up.
              return t.sent(), [4
              /*yield*/
              , is(e)];

            case 2:
              // It's possible that with the completion of this mutation another
              // slot has freed up.
              return t.sent(), [2
              /*return*/
              ];
          }
        });
      });
    }

    function hs(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        return t.__generator(this, function (r) {
          switch (r.label) {
            case 0:
              return n && ps(e).vu ? [4
              /*yield*/
              , function (e, n) {
                return t.__awaiter(this, void 0, void 0, function () {
                  var r, i;
                  return t.__generator(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return wt(i = n.code) && i !== a.ABORTED ? (r = e.zu.shift(), // In this case it's also unlikely that the server itself is melting
                        // down -- this was just a bad request so inhibit backoff on the next
                        // restart.
                        ps(e).lu(), [4
                        /*yield*/
                        , rs(e, function () {
                          return e.Gu.rh(r.batchId, n);
                        })]) : [3
                        /*break*/
                        , 3];

                      case 1:
                        // It's possible that with the completion of this mutation
                        // another slot has freed up.
                        return t.sent(), [4
                        /*yield*/
                        , is(e)];

                      case 2:
                        // In this case it's also unlikely that the server itself is melting
                        // down -- this was just a bad request so inhibit backoff on the next
                        // restart.
                        // It's possible that with the completion of this mutation
                        // another slot has freed up.
                        t.sent(), t.label = 3;

                      case 3:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }(e, n)] : [3
              /*break*/
              , 2];
            // This error affects the actual write.

            case 1:
              // This error affects the actual write.
              r.sent(), r.label = 2;

            case 2:
              // If the write stream closed after the write handshake completes, a write
              // operation failed and we fail the pending operation.
              // The write stream might have been started by refilling the write
              // pipeline for failed writes
              return os(e) && ss(e), [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */


    function fs(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return r = m(e), n ? (r.Yu.delete(2
              /* IsSecondary */
              ), [4
              /*yield*/
              , Go(r)]) : [3
              /*break*/
              , 2];

            case 1:
              return t.sent(), [3
              /*break*/
              , 5];

            case 2:
              return (i = n) ? [3
              /*break*/
              , 4] : (r.Yu.add(2
              /* IsSecondary */
              ), [4
              /*yield*/
              , zo(r)]);

            case 3:
              t.sent(), i = r.th.set("Unknown"
              /* Unknown */
              ), t.label = 4;

            case 4:
              i, t.label = 5;

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * If not yet initialized, registers the WatchStream and its network state
     * callback with `remoteStoreImpl`. Returns the existing stream if one is
     * already available.
     *
     * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
     * This is not done on Web to allow it to be tree-shaken.
     */


    function ls(e) {
      var n = this;
      return e.oh || ( // Create stream (but note that it is not started yet).
      e.oh = function (t, e, n) {
        var r = m(t);
        return r.xu(), new Co(e, r.iu, r.credentials, r.serializer, n);
      }(e.Ku, e.cs, {
        gu: Zo.bind(null, e),
        Tu: ts.bind(null, e),
        yu: es.bind(null, e)
      }), e.Ju.push(function (r) {
        return t.__awaiter(n, void 0, void 0, function () {
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return r ? (e.oh.lu(), $o(e) ? Yo(e) : e.th.set("Unknown"
                /* Unknown */
                ), [3
                /*break*/
                , 3]) : [3
                /*break*/
                , 1];

              case 1:
                return [4
                /*yield*/
                , e.oh.stop()];

              case 2:
                t.sent(), Jo(e), t.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      })), e.oh
      /**
      * If not yet initialized, registers the WriteStream and its network state
      * callback with `remoteStoreImpl`. Returns the existing stream if one is
      * already available.
      *
      * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
      * This is not done on Web to allow it to be tree-shaken.
      */
      ;
    }

    function ps(e) {
      var n = this;
      return e.ah || ( // Create stream (but note that it is not started yet).
      e.ah = function (t, e, n) {
        var r = m(t);
        return r.xu(), new Fo(e, r.iu, r.credentials, r.serializer, n);
      }(e.Ku, e.cs, {
        gu: us.bind(null, e),
        Tu: hs.bind(null, e),
        Cu: as.bind(null, e),
        Du: cs.bind(null, e)
      }), e.Ju.push(function (r) {
        return t.__awaiter(n, void 0, void 0, function () {
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return r ? (e.ah.lu(), [4
                /*yield*/
                , is(e)]) : [3
                /*break*/
                , 2];

              case 1:
                // This will start the write stream if necessary.
                return t.sent(), [3
                /*break*/
                , 4];

              case 2:
                return [4
                /*yield*/
                , e.ah.stop()];

              case 3:
                t.sent(), e.zu.length > 0 && (l("RemoteStore", "Stopping write stream with " + e.zu.length + " pending writes"), e.zu = []), t.label = 4;

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      })), e.ah
      /**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
      ;
    }

    var ds = function (t) {
      this.key = t;
    },
        vs = function (t) {
      this.key = t;
    },
        ys =
    /** @class */
    function () {
      function t(t,
      /** Documents included in the remote target */
      e) {
        this.query = t, this.uh = e, this.hh = null,
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.te = !1,
        /** Documents in the view but not in the remote target */
        this.lh = Ot(),
        /** Document Keys that have local changes */
        this.Wt = Ot(), this._h = Xn(t), this.fh = new Ut(this._h);
      }

      return Object.defineProperty(t.prototype, "dh", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function () {
          return this.uh;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Iterates over a set of doc changes, applies the query limit, and computes
       * what the new results should be, what the changes were, and whether we may
       * need to go back to the local cache for more results. Does not make any
       * changes to the view.
       * @param docChanges The doc changes to apply to this view.
       * @param previousChanges If this is being called with a refill, then start
       *        with this set of docs and changes instead of the current view.
       * @return a new set of docs, changes, and refill flag.
       */
      t.prototype.wh = function (t, e) {
        var n = this,
            r = e ? e.mh : new Ct(),
            i = e ? e.fh : this.fh,
            o = e ? e.Wt : this.Wt,
            s = i,
            u = !1,
            a = Cn(this.query) && i.size === this.query.limit ? i.last() : null,
            c = Fn(this.query) && i.size === this.query.limit ? i.first() : null; // Drop documents out to meet limit/limitToLast requirement.

        if (t.ht(function (t, e) {
          var h = i.get(t),
              f = e instanceof kn ? e : null;
          f && (f = $n(n.query, f) ? f : null);
          var l = !!h && n.Wt.has(h.key),
              p = !!f && (f.Je || // We only consider committed mutations for documents that were
          // mutated during the lifetime of the view.
          n.Wt.has(f.key) && f.hasCommittedMutations),
              d = !1; // Calculate change

          h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
            type: 3
            /* Metadata */
            ,
            doc: f
          }), d = !0) : n.Th(h, f) || (r.track({
            type: 2
            /* Modified */
            ,
            doc: f
          }), d = !0, (a && n._h(f, a) > 0 || c && n._h(f, c) < 0) && ( // This doc moved from inside the limit to outside the limit.
          // That means there may be some other doc in the local cache
          // that should be included instead.
          u = !0)) : !h && f ? (r.track({
            type: 0
            /* Added */
            ,
            doc: f
          }), d = !0) : h && !f && (r.track({
            type: 1
            /* Removed */
            ,
            doc: h
          }), d = !0, (a || c) && ( // A doc was removed from a full limit query. We'll need to
          // requery from the local cache to see if we know about some other
          // doc that should be in the results.
          u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), o = o.delete(t)));
        }), Cn(this.query) || Fn(this.query)) for (; s.size > this.query.limit;) {
          var h = Cn(this.query) ? s.last() : s.first();
          s = s.delete(h.key), o = o.delete(h.key), r.track({
            type: 1
            /* Removed */
            ,
            doc: h
          });
        }
        return {
          fh: s,
          mh: r,
          Eh: u,
          Wt: o
        };
      }, t.prototype.Th = function (t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.Je && e.hasCommittedMutations && !e.Je;
      },
      /**
       * Updates the view with the given ViewDocumentChanges and optionally updates
       * limbo docs and sync state from the provided target change.
       * @param docChanges The set of changes to make to the view's docs.
       * @param updateLimboDocuments Whether to update limbo documents based on this
       *        change.
       * @param targetChange A target change to apply for computing limbo docs and
       *        sync state.
       * @return A new ViewChange with the given docs, changes, and sync state.
       */
      // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
      t.prototype.yr = function (t, e, n) {
        var r = this,
            i = this.fh;
        this.fh = t.fh, this.Wt = t.Wt; // Sort changes based on type and query comparator

        var o = t.mh.Ut();
        o.sort(function (t, e) {
          return function (t, e) {
            var n = function (t) {
              switch (t) {
                case 0
                /* Added */
                :
                  return 1;

                case 2
                /* Modified */
                :
                case 3
                /* Metadata */
                :
                  // A metadata change is converted to a modified change at the public
                  // api layer.  Since we sort by document key and then change type,
                  // metadata and modified changes must be sorted equivalently.
                  return 2;

                case 1
                /* Removed */
                :
                  return 0;

                default:
                  return y();
              }
            };

            return n(t) - n(e);
          }(t.type, e.type) || r._h(t.doc, e.doc);
        }), this.Ih(n);
        var s = e ? this.Ah() : [],
            u = 0 === this.lh.size && this.te ? 1
        /* Synced */
        : 0
        /* Local */
        ,
            a = u !== this.hh;
        return this.hh = u, 0 !== o.length || a ? {
          snapshot: new Ft(this.query, t.fh, i, o, t.Wt, 0
          /* Local */
          === u, a,
          /* excludesMetadataChanges= */
          !1),
          Rh: s
        } : {
          Rh: s
        }; // no changes
      },
      /**
       * Applies an OnlineState change to the view, potentially generating a
       * ViewChange if the view's syncState changes as a result.
       */
      t.prototype.Qs = function (t) {
        return this.te && "Offline"
        /* Offline */
        === t ? ( // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.te = !1, this.yr({
          fh: this.fh,
          mh: new Ct(),
          Wt: this.Wt,
          Eh: !1
        },
        /* updateLimboDocuments= */
        !1)) : {
          Rh: []
        };
      },
      /**
       * Returns whether the doc for the given key should be in limbo.
       */
      t.prototype.gh = function (t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.uh.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.fh.has(t) && !this.fh.get(t).Je;
      },
      /**
       * Updates syncedDocuments, current, and limbo docs based on the given change.
       * Returns the list of changes to which docs are in limbo.
       */
      t.prototype.Ih = function (t) {
        var e = this;
        t && (t.ee.forEach(function (t) {
          return e.uh = e.uh.add(t);
        }), t.ne.forEach(function (t) {}), t.se.forEach(function (t) {
          return e.uh = e.uh.delete(t);
        }), this.te = t.te);
      }, t.prototype.Ah = function () {
        var t = this; // We can only determine limbo documents when we're in-sync with the server.

        if (!this.te) return []; // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.

        var e = this.lh;
        this.lh = Ot(), this.fh.forEach(function (e) {
          t.gh(e.key) && (t.lh = t.lh.add(e.key));
        }); // Diff the new limbo docs with the old limbo docs.

        var n = [];
        return e.forEach(function (e) {
          t.lh.has(e) || n.push(new vs(e));
        }), this.lh.forEach(function (t) {
          e.has(t) || n.push(new ds(t));
        }), n;
      },
      /**
       * Update the in-memory state of the current view with the state read from
       * persistence.
       *
       * We update the query view whenever a client's primary status changes:
       * - When a client transitions from primary to secondary, it can miss
       *   LocalStorage updates and its query views may temporarily not be
       *   synchronized with the state on disk.
       * - For secondary to primary transitions, the client needs to update the list
       *   of `syncedDocuments` since secondary clients update their query views
       *   based purely on synthesized RemoteEvents.
       *
       * @param queryResult.documents - The documents that match the query according
       * to the LocalStore.
       * @param queryResult.remoteKeys - The keys of the documents that match the
       * query according to the backend.
       *
       * @return The ViewChange that resulted from this synchronization.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.Ph = function (t) {
        this.uh = t.Fc, this.lh = Ot();
        var e = this.wh(t.documents);
        return this.yr(e,
        /*updateLimboDocuments=*/
        !0);
      },
      /**
       * Returns a view snapshot as if this query was just listened to. Contains
       * a document add for every existing document and the `fromCache` and
       * `hasPendingWrites` status of the already established view.
       */
      // PORTING NOTE: Multi-tab only.
      t.prototype.yh = function () {
        return Ft.Gt(this.query, this.fh, this.Wt, 0
        /* Local */
        === this.hh);
      }, t;
    }(),
        gs = function (
    /**
         * The query itself.
         */
    t,
    /**
         * The target number created by the client that is used in the watch
         * stream to identify this query.
         */
    e,
    /**
         * The view is responsible for computing the final merged truth of what
         * docs are in the query. It gets notified of local and remote changes,
         * and applies the query filters and limits to determine the most correct
         * possible results.
         */
    n) {
      this.query = t, this.targetId = e, this.view = n;
    },
        ms = function (t) {
      this.key = t,
      /**
               * Set to true once we've received a document. This is used in
               * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
               * decide whether it needs to manufacture a delete event for the target once
               * the target is CURRENT.
               */
      this.Vh = !1;
    },
        ws =
    /** @class */
    function () {
      function t(t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
      r, i, o) {
        this.ju = t, this.ph = e, this.bh = n, this.Sh = r, this.currentUser = i, this.Dh = o, this.Ch = {}, this.Nh = new it(function (t) {
          return Hn(t);
        }, Qn), this.Fh = new Map(),
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.xh = [],
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.$h = new bt(A.i),
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.kh = new Map(), this.Mh = new xo(),
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Oh = {},
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Lh = new Map(), this.Bh = ro.da(), this.onlineState = "Unknown"
        /* Unknown */
        , // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.qh = void 0;
      }

      return Object.defineProperty(t.prototype, "Uh", {
        get: function () {
          return !0 === this.qh;
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }();
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the initial snapshot.
     */


    function _s(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i, o, s, u, a;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return r = Ks(e), (s = r.Nh.get(n)) ? ( // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
              // already exists when EventManager calls us for the first time. This
              // happens when the primary tab is already listening to this query on
              // behalf of another tab and the user of the primary also starts listening
              // to the query. EventManager will not have an assigned target ID in this
              // case and calls `listen` to obtain this ID.
              i = s.targetId, r.Sh.Oi(i), o = s.view.yh(), [3
              /*break*/
              , 4]) : [3
              /*break*/
              , 1];

            case 1:
              return [4
              /*yield*/
              , Io(r.ju, zn(n))];

            case 2:
              return u = t.sent(), a = r.Sh.Oi(u.targetId), i = u.targetId, [4
              /*yield*/
              , bs(r, n, i, "current" === a)];

            case 3:
              o = t.sent(), r.Uh && Wo(r.ph, u), t.label = 4;

            case 4:
              return [2
              /*return*/
              , o];
          }
        });
      });
    }
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */


    function bs(e, n, r, i) {
      return t.__awaiter(this, void 0, void 0, function () {
        var o, s, u, a, c, h;
        return t.__generator(this, function (f) {
          switch (f.label) {
            case 0:
              // PORTING NOTE: On Web only, we inject the code that registers new Limbo
              // targets based on view changes. This allows us to only depend on Limbo
              // changes when user code includes queries.
              return e.Qh = function (n, r, i) {
                return function (e, n, r, i) {
                  return t.__awaiter(this, void 0, void 0, function () {
                    var o, s, u;
                    return t.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return o = n.view.wh(r), o.Eh ? [4
                          /*yield*/
                          , To(e.ju, n.query,
                          /* usePreviousResults= */
                          !1).then(function (t) {
                            var e = t.documents;
                            return n.view.wh(e, o);
                          })] : [3
                          /*break*/
                          , 2];

                        case 1:
                          // The query has a limit and some docs were removed, so we need
                          // to re-run the query against the local store to make sure we
                          // didn't lose any good docs that had been past the limit.
                          o = t.sent(), t.label = 2;

                        case 2:
                          return s = i && i.zt.get(n.targetId), u = n.view.yr(o,
                          /* updateLimboDocuments= */
                          e.Uh, s), [2
                          /*return*/
                          , (Rs(e, n.targetId, u.Rh), u.snapshot)];
                      }
                    });
                  });
                }(e, n, r, i);
              }, [4
              /*yield*/
              , To(e.ju, n,
              /* usePreviousResults= */
              !0)];

            case 1:
              return o = f.sent(), s = new ys(n, o.Fc), u = s.wh(o.documents), a = qt.Zt(r, i && "Offline"
              /* Offline */
              !== e.onlineState), c = s.yr(u,
              /* updateLimboDocuments= */
              e.Uh, a), Rs(e, r, c.Rh), h = new gs(n, r, s), [2
              /*return*/
              , (e.Nh.set(n, h), e.Fh.has(r) ? e.Fh.get(r).push(n) : e.Fh.set(r, [n]), c.snapshot)];
          }
        });
      });
    }
    /** Stops listening to the query. */


    function Is(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i, o;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return r = m(e), i = r.Nh.get(n), (o = r.Fh.get(i.targetId)).length > 1 ? [2
              /*return*/
              , (r.Fh.set(i.targetId, o.filter(function (t) {
                return !Qn(t, n);
              })), void r.Nh.delete(n))] : r.Uh ? ( // We need to remove the local query target first to allow us to verify
              // whether any other client is still interested in this target.
              r.Sh.Bi(i.targetId), r.Sh.Fi(i.targetId) ? [3
              /*break*/
              , 2] : [4
              /*yield*/
              , Eo(r.ju, i.targetId,
              /*keepPersistedTargetData=*/
              !1).then(function () {
                r.Sh.Ui(i.targetId), Ko(r.ph, i.targetId), Ls(r, i.targetId);
              }).catch(Do)]) : [3
              /*break*/
              , 3];

            case 1:
              t.sent(), t.label = 2;

            case 2:
              return [3
              /*break*/
              , 5];

            case 3:
              return Ls(r, i.targetId), [4
              /*yield*/
              , Eo(r.ju, i.targetId,
              /*keepPersistedTargetData=*/
              !0)];

            case 4:
              t.sent(), t.label = 5;

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */

    /**
     * Applies one remote event to the sync engine, notifying any views of the
     * changes, and releasing any pending mutation batches that would become
     * visible because of the snapshot version the remote event contains.
     */


    function Es(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              r = m(e), t.label = 1;

            case 1:
              return t.trys.push([1, 4,, 6]), [4
              /*yield*/
              , _o(r.ju, n)];

            case 2:
              return i = t.sent(), // Update `receivedDocument` as appropriate for any limbo targets.
              n.zt.forEach(function (t, e) {
                var n = r.kh.get(e);
                n && ( // Since this is a limbo resolution lookup, it's for a single document
                // and it could be added, modified, or removed, but not a combination.
                g(t.ee.size + t.ne.size + t.se.size <= 1), t.ee.size > 0 ? n.Vh = !0 : t.ne.size > 0 ? g(n.Vh) : t.se.size > 0 && (g(n.Vh), n.Vh = !1));
              }), [4
              /*yield*/
              , Vs(r, i, n)];

            case 3:
              // Update `receivedDocument` as appropriate for any limbo targets.
              return t.sent(), [3
              /*break*/
              , 6];

            case 4:
              return [4
              /*yield*/
              , Do(t.sent())];

            case 5:
              return t.sent(), [3
              /*break*/
              , 6];

            case 6:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */


    function Ts(t, e, n) {
      var r = m(t); // If we are the secondary client, we explicitly ignore the remote store's
      // online state (the local client may go offline, even though the primary
      // tab remains online) and only apply the primary tab's online state from
      // SharedClientState.

      if (r.Uh && 0
      /* RemoteStore */
      === n || !r.Uh && 1
      /* SharedClientState */
      === n) {
        var i = [];
        r.Nh.forEach(function (t, n) {
          var r = n.view.Qs(e);
          r.snapshot && i.push(r.snapshot);
        }), function (t, e) {
          var n = m(t);
          n.onlineState = e;
          var r = !1;
          n.Bs.forEach(function (t, n) {
            for (var i = 0, o = n.listeners; i < o.length; i++) {
              // Run global snapshot listeners if a consistent snapshot has been emitted.
              o[i].Qs(e) && (r = !0);
            }
          }), r && Cr(n);
        }(r.bh, e), i.length && r.Ch.yu(i), r.onlineState = e, r.Uh && r.Sh.Ki(e);
      }
    }
    /**
     * Rejects the listen for the given targetID. This can be triggered by the
     * backend for any active target.
     *
     * @param syncEngine The sync engine implementation.
     * @param targetId The targetID corresponds to one previously initiated by the
     * user as part of TargetData passed to listen() on RemoteStore.
     * @param err A description of the condition that has forced the rejection.
     * Nearly always this will be an indication that the user is no longer
     * authorized to see the data matching the target.
     */


    function Ns(e, n, r) {
      return t.__awaiter(this, void 0, void 0, function () {
        var i, o, s, u, a, c;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              // PORTING NOTE: Multi-tab only.
              return (i = m(e)).Sh.Qi(n, "rejected", r), o = i.kh.get(n), (s = o && o.key) ? (u = (u = new bt(A.i)).ot(s, new Rn(s, st.min())), a = Ot().add(s), c = new Mt(st.min(),
              /* targetChanges= */
              new Map(),
              /* targetMismatches= */
              new Tt(H), u, a), [4
              /*yield*/
              , Es(i, c)]) : [3
              /*break*/
              , 2];

            case 1:
              return t.sent(), // Since this query failed, we won't want to manually unlisten to it.
              // We only remove it from bookkeeping after we successfully applied the
              // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
              // this query when the RemoteStore restarts the Watch stream, which should
              // re-trigger the target failure.
              i.$h = i.$h.remove(s), i.kh.delete(n), Ps(i), [3
              /*break*/
              , 4];

            case 2:
              return [4
              /*yield*/
              , Eo(i.ju, n,
              /* keepPersistedTargetData */
              !1).then(function () {
                return Ls(i, n, r);
              }).catch(Do)];

            case 3:
              t.sent(), t.label = 4;

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function As(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i, o;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              r = m(e), i = n.batch.batchId, t.label = 1;

            case 1:
              return t.trys.push([1, 4,, 6]), [4
              /*yield*/
              , mo(r.ju, n)];

            case 2:
              return o = t.sent(), // The local store may or may not be able to apply the write result and
              // raise events immediately (depending on whether the watcher is caught
              // up), so we raise user callbacks first so that they consistently happen
              // before listen events.
              xs(r, i,
              /*error=*/
              null), Ds(r, i), r.Sh.ki(i, "acknowledged"), [4
              /*yield*/
              , Vs(r, o)];

            case 3:
              // The local store may or may not be able to apply the write result and
              // raise events immediately (depending on whether the watcher is caught
              // up), so we raise user callbacks first so that they consistently happen
              // before listen events.
              return t.sent(), [3
              /*break*/
              , 6];

            case 4:
              return [4
              /*yield*/
              , Do(t.sent())];

            case 5:
              return t.sent(), [3
              /*break*/
              , 6];

            case 6:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function Ss(e, n, r) {
      return t.__awaiter(this, void 0, void 0, function () {
        var i, o;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              i = m(e), t.label = 1;

            case 1:
              return t.trys.push([1, 4,, 6]), [4
              /*yield*/
              , function (t, e) {
                var n = m(t);
                return n.persistence.runTransaction("Reject batch", "readwrite-primary", function (t) {
                  var r;
                  return n.Sr.Oo(t, e).next(function (e) {
                    return g(null !== e), r = e.keys(), n.Sr.Wo(t, e);
                  }).next(function () {
                    return n.Sr.zo(t);
                  }).next(function () {
                    return n.Cc.kr(t, r);
                  });
                });
              }(i.ju, n)];

            case 2:
              return o = t.sent(), // The local store may or may not be able to apply the write result and
              // raise events immediately (depending on whether the watcher is caught up),
              // so we raise user callbacks first so that they consistently happen before
              // listen events.
              xs(i, n, r), Ds(i, n), i.Sh.ki(n, "rejected", r), [4
              /*yield*/
              , Vs(i, o)];

            case 3:
              // The local store may or may not be able to apply the write result and
              // raise events immediately (depending on whether the watcher is caught up),
              // so we raise user callbacks first so that they consistently happen before
              // listen events.
              return t.sent(), [3
              /*break*/
              , 6];

            case 4:
              return [4
              /*yield*/
              , Do(t.sent())];

            case 5:
              return t.sent(), [3
              /*break*/
              , 6];

            case 6:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */

    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */


    function Ds(t, e) {
      (t.Lh.get(e) || []).forEach(function (t) {
        t.resolve();
      }), t.Lh.delete(e)
      /** Reject all outstanding callbacks waiting for pending writes to complete. */
      ;
    }

    function xs(t, e, n) {
      var r = m(t),
          i = r.Oh[r.currentUser.ti()]; // NOTE: Mutations restored from persistence won't have callbacks, so it's
      // okay for there to be no callback for this ID.

      if (i) {
        var o = i.get(e);
        o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.Oh[r.currentUser.ti()] = i;
      }
    }

    function Ls(t, e, n) {
      void 0 === n && (n = null), t.Sh.Bi(e);

      for (var r = 0, i = t.Fh.get(e); r < i.length; r++) {
        var o = i[r];
        t.Nh.delete(o), n && t.Ch.Wh(o, n);
      }

      t.Fh.delete(e), t.Uh && t.Mh.Uc(e).forEach(function (e) {
        t.Mh.Ho(e) || // We removed the last reference for this key
        ks(t, e);
      });
    }

    function ks(t, e) {
      // It's possible that the target already got removed because the query failed. In that case,
      // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
      var n = t.$h.get(e);
      null !== n && (Ko(t.ph, n), t.$h = t.$h.remove(e), t.kh.delete(n), Ps(t));
    }

    function Rs(t, e, n) {
      for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r];
        o instanceof ds ? (t.Mh.Da(o.key, e), Os(t, o)) : o instanceof vs ? (l("SyncEngine", "Document no longer in limbo: " + o.key), t.Mh.Na(o.key, e), t.Mh.Ho(o.key) || // We removed the last reference for this key
        ks(t, o.key)) : y();
      }
    }

    function Os(t, e) {
      var n = e.key;
      t.$h.get(n) || (l("SyncEngine", "New document in limbo: " + n), t.xh.push(n), Ps(t));
    }
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */


    function Ps(t) {
      for (; t.xh.length > 0 && t.$h.size < t.Dh;) {
        var e = t.xh.shift(),
            n = t.Bh.next();
        t.kh.set(n, new ms(e)), t.$h = t.$h.ot(e, n), Wo(t.ph, new gt(zn(Un(e.path)), n, 2
        /* LimboResolution */
        , qr.ai));
      }
    }

    function Vs(e, n, r) {
      return t.__awaiter(this, void 0, void 0, function () {
        var i, o, s, u;
        return t.__generator(this, function (a) {
          switch (a.label) {
            case 0:
              return i = m(e), o = [], s = [], u = [], i.Nh.m() ? [3
              /*break*/
              , 3] : (i.Nh.forEach(function (t, e) {
                u.push(i.Qh(e, n, r).then(function (t) {
                  if (t) {
                    i.Uh && i.Sh.Qi(e.targetId, t.fromCache ? "not-current" : "current"), o.push(t);
                    var n = ri.zr(e.targetId, t);
                    s.push(n);
                  }
                }));
              }), [4
              /*yield*/
              , Promise.all(u)]);

            case 1:
              return a.sent(), i.Ch.yu(o), [4
              /*yield*/
              , function (e, n) {
                return t.__awaiter(this, void 0, void 0, function () {
                  var r, i, o, s, u, a, c, h, f;
                  return t.__generator(this, function (t) {
                    switch (t.label) {
                      case 0:
                        r = m(e), t.label = 1;

                      case 1:
                        return t.trys.push([1, 3,, 4]), [4
                        /*yield*/
                        , r.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (t) {
                          return yr.forEach(n, function (e) {
                            return yr.forEach(e.Kr, function (n) {
                              return r.persistence.No.Da(t, e.targetId, n);
                            }).next(function () {
                              return yr.forEach(e.Gr, function (n) {
                                return r.persistence.No.Na(t, e.targetId, n);
                              });
                            });
                          });
                        })];

                      case 2:
                        return t.sent(), [3
                        /*break*/
                        , 4];

                      case 3:
                        if (!_r(i = t.sent())) throw i; // If `notifyLocalViewChanges` fails, we did not advance the sequence
                        // number for the documents that were included in this transaction.
                        // This might trigger them to be deleted earlier than they otherwise
                        // would have, but it should not invalidate the integrity of the data.

                        return l("LocalStore", "Failed to update sequence numbers: " + i), [3
                        /*break*/
                        , 4];

                      case 4:
                        for (o = 0, s = n; o < s.length; o++) u = s[o], a = u.targetId, u.fromCache || (c = r.bc.get(a), h = c.nt, f = c.rt(h), // Advance the last limbo free snapshot version
                        r.bc = r.bc.ot(a, f));

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }(i.ju, s)];

            case 2:
              a.sent(), a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function Us(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i;
        return t.__generator(this, function (o) {
          switch (o.label) {
            case 0:
              return (r = m(e)).currentUser.isEqual(n) ? [3
              /*break*/
              , 3] : (l("SyncEngine", "User change. New user:", n.ti()), [4
              /*yield*/
              ,
              /**
               * Tells the LocalStore that the currently authenticated user has changed.
               *
               * In response the local store switches the mutation queue to the new user and
               * returns any resulting document changes.
               */
              // PORTING NOTE: Android and iOS only return the documents affected by the
              // change.
              function (e, n) {
                return t.__awaiter(this, void 0, void 0, function () {
                  var r, i, o, s;
                  return t.__generator(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return r = m(e), i = r.Sr, o = r.Cc, [4
                        /*yield*/
                        , r.persistence.runTransaction("Handle user change", "readonly", function (t) {
                          // Swap out the mutation queue, grabbing the pending mutation batches
                          // before and after.
                          var e;
                          return r.Sr.Uo(t).next(function (s) {
                            return e = s, i = r.persistence.mc(n), // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            o = new ni(r.Dc, i, r.persistence.Ic()), i.Uo(t);
                          }).next(function (n) {
                            for (var r = [], i = [], s = Ot(), u = 0, a = e // Union the old/new changed keys.
                            ; u < a.length; u++) {
                              var c = a[u];
                              r.push(c.batchId);

                              for (var h = 0, f = c.mutations; h < f.length; h++) {
                                var l = f[h];
                                s = s.add(l.key);
                              }
                            }

                            for (var p = 0, d = n; p < d.length; p++) {
                              var v = d[p];
                              i.push(v.batchId);

                              for (var y = 0, g = v.mutations; y < g.length; y++) {
                                var m = g[y];
                                s = s.add(m.key);
                              }
                            } // Return the set of all (potentially) changed documents and the list
                            // of mutation batch IDs that were affected by change.


                            return o.kr(t, s).next(function (t) {
                              return {
                                jh: t,
                                Kh: r,
                                Gh: i
                              };
                            });
                          });
                        })];

                      case 1:
                        return s = t.sent(), [2
                        /*return*/
                        , (r.Sr = i, r.Cc = o, r.Vc.Nc(r.Cc), s)];
                    }
                  });
                });
              }(r.ju, n)]);

            case 1:
              return i = o.sent(), r.currentUser = n, // Fails tasks waiting for pending writes requested by previous user.
              function (t, e) {
                t.Lh.forEach(function (t) {
                  t.forEach(function (t) {
                    t.reject(new c(a.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                  });
                }), t.Lh.clear();
              }(r), // TODO(b/114226417): Consider calling this only in the primary tab.
              r.Sh.ji(n, i.Kh, i.Gh), [4
              /*yield*/
              , Vs(r, i.jh)];

            case 2:
              o.sent(), o.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function Cs(t, e) {
      var n = m(t),
          r = n.kh.get(e);
      if (r && r.Vh) return Ot().add(r.key);
      var i = Ot(),
          o = n.Fh.get(e);
      if (!o) return i;

      for (var s = 0, u = o; s < u.length; s++) {
        var a = u[s],
            c = n.Nh.get(a);
        i = i.kt(c.view.dh);
      }

      return i;
    }
    /**
     * Reconcile the list of synced documents in an existing view with those
     * from persistence.
     */


    function Fs(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i, o;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return [4
              /*yield*/
              , To((r = m(e)).ju, n.query,
              /* usePreviousResults= */
              !0)];

            case 1:
              return i = t.sent(), o = n.view.Ph(i), [2
              /*return*/
              , (r.Uh && Rs(r, n.targetId, o.Rh), o)];
          }
        });
      });
    }
    /** Applies a mutation state to an existing batch.  */
    // PORTING NOTE: Multi-Tab only.


    function Ms(e, n, r, i) {
      return t.__awaiter(this, void 0, void 0, function () {
        var o, s;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return [4
              /*yield*/
              , function (t, e) {
                var n = m(t),
                    r = m(n.Sr);
                return n.persistence.runTransaction("Lookup mutation documents", "readonly", function (t) {
                  return r.Lo(t, e).next(function (e) {
                    return e ? n.Cc.kr(t, e) : yr.resolve(null);
                  });
                });
              }((o = m(e)).ju, n)];

            case 1:
              return null === (s = t.sent()) ? [3
              /*break*/
              , 6] : "pending" !== r ? [3
              /*break*/
              , 3] : [4
              /*yield*/
              , is(o.ph)];

            case 2:
              // If we are the primary client, we need to send this write to the
              // backend. Secondary clients will ignore these writes since their remote
              // connection is disabled.
              return t.sent(), [3
              /*break*/
              , 4];

            case 3:
              "acknowledged" === r || "rejected" === r ? ( // NOTE: Both these methods are no-ops for batches that originated from
              // other clients.
              xs(o, n, i || null), Ds(o, n), function (t, e) {
                m(m(t).Sr).Ko(e);
              }(o.ju, n)) : y(), t.label = 4;

            case 4:
              return [4
              /*yield*/
              , Vs(o, s)];

            case 5:
              return t.sent(), [3
              /*break*/
              , 7];

            case 6:
              // A throttled tab may not have seen the mutation before it was completed
              // and removed from the mutation queue, in which case we won't have cached
              // the affected documents. In this case we can safely ignore the update
              // since that means we didn't apply the mutation locally at all (if we
              // had, we would have cached the affected documents), and so we will just
              // see any resulting document changes via normal remote document updates
              // as applicable.
              l("SyncEngine", "Cannot apply mutation batch with id: " + n), t.label = 7;

            case 7:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /** Applies a query target change from a different tab. */
    // PORTING NOTE: Multi-Tab only.


    function qs(e, n) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i, o, s, u, a, c, h;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return Ks(r = m(e)), Qs(r), !0 !== n || !0 === r.qh ? [3
              /*break*/
              , 3] : (i = r.Sh.Ci(), [4
              /*yield*/
              , js(r, i.A())]);

            case 1:
              return o = t.sent(), r.qh = !0, [4
              /*yield*/
              , fs(r.ph, !0)];

            case 2:
              for (t.sent(), s = 0, u = o; s < u.length; s++) a = u[s], Wo(r.ph, a);

              return [3
              /*break*/
              , 7];

            case 3:
              return !1 !== n || !1 === r.qh ? [3
              /*break*/
              , 7] : (c = [], h = Promise.resolve(), r.Fh.forEach(function (t, e) {
                r.Sh.qi(e) ? c.push(e) : h = h.then(function () {
                  return Ls(r, e), Eo(r.ju, e,
                  /*keepPersistedTargetData=*/
                  !0);
                }), Ko(r.ph, e);
              }), [4
              /*yield*/
              , h]);

            case 4:
              return t.sent(), [4
              /*yield*/
              , js(r, c)];

            case 5:
              return t.sent(), // PORTING NOTE: Multi-Tab only.
              function (t) {
                var e = m(t);
                e.kh.forEach(function (t, n) {
                  Ko(e.ph, n);
                }), e.Mh.Qc(), e.kh = new Map(), e.$h = new bt(A.i);
              }(r), r.qh = !1, [4
              /*yield*/
              , fs(r.ph, !1)];

            case 6:
              t.sent(), t.label = 7;

            case 7:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function js(e, n, r) {
      return t.__awaiter(this, void 0, void 0, function () {
        var r, i, o, s, u, a, c, h, f, l, p, d, v, y;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              r = m(e), i = [], o = [], s = 0, u = n, t.label = 1;

            case 1:
              return s < u.length ? (a = u[s], c = void 0, (h = r.Fh.get(a)) && 0 !== h.length ? [4
              /*yield*/
              , Io(r.ju, zn(h[0]))] : [3
              /*break*/
              , 7]) : [3
              /*break*/
              , 13];

            case 2:
              // For queries that have a local View, we fetch their current state
              // from LocalStore (as the resume token and the snapshot version
              // might have changed) and reconcile their views with the persisted
              // state (the list of syncedDocuments may have gotten out of sync).
              c = t.sent(), f = 0, l = h, t.label = 3;

            case 3:
              return f < l.length ? (p = l[f], d = r.Nh.get(p), [4
              /*yield*/
              , Fs(r, d)]) : [3
              /*break*/
              , 6];

            case 4:
              (v = t.sent()).snapshot && o.push(v.snapshot), t.label = 5;

            case 5:
              return f++, [3
              /*break*/
              , 3];

            case 6:
              return [3
              /*break*/
              , 11];

            case 7:
              return [4
              /*yield*/
              , No(r.ju, a)];

            case 8:
              return y = t.sent(), [4
              /*yield*/
              , Io(r.ju, y)];

            case 9:
              return c = t.sent(), [4
              /*yield*/
              , bs(r, Gs(y), a,
              /*current=*/
              !1)];

            case 10:
              t.sent(), t.label = 11;

            case 11:
              i.push(c), t.label = 12;

            case 12:
              return s++, [3
              /*break*/
              , 1];

            case 13:
              return [2
              /*return*/
              , (r.Ch.yu(o), i)];
          }
        });
      });
    }
    /**
     * Creates a `Query` object from the specified `Target`. There is no way to
     * obtain the original `Query`, so we synthesize a `Query` from the `Target`
     * object.
     *
     * The synthesized result might be different from the original `Query`, but
     * since the synthesized `Query` should return the same results as the
     * original one (only the presentation of results might differ), the potential
     * difference will not cause issues.
     */
    // PORTING NOTE: Multi-Tab only.


    function Gs(t) {
      return Vn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F"
      /* First */
      , t.startAt, t.endAt);
    }
    /** Returns the IDs of the clients that are currently active. */
    // PORTING NOTE: Multi-Tab only.


    function zs(t) {
      var e = m(t);
      return m(m(e.ju).persistence).pi();
    }
    /** Applies a query target change from a different tab. */
    // PORTING NOTE: Multi-Tab only.


    function Bs(e, n, r, i) {
      return t.__awaiter(this, void 0, void 0, function () {
        var o, s, u;
        return t.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return (o = m(e)).qh ? ( // If we receive a target state notification via WebStorage, we are
              // either already secondary or another tab has taken the primary lease.
              l("SyncEngine", "Ignoring unexpected query state notification."), [3
              /*break*/
              , 8]) : [3
              /*break*/
              , 1];

            case 1:
              if (!o.Fh.has(n)) return [3
              /*break*/
              , 8];

              switch (r) {
                case "current":
                case "not-current":
                  return [3
                  /*break*/
                  , 2];

                case "rejected":
                  return [3
                  /*break*/
                  , 5];
              }

              return [3
              /*break*/
              , 7];

            case 2:
              return [4
              /*yield*/
              , Ao(o.ju)];

            case 3:
              return s = t.sent(), u = Mt.Xt(n, "current" === r), [4
              /*yield*/
              , Vs(o, s, u)];

            case 4:
              return t.sent(), [3
              /*break*/
              , 8];

            case 5:
              return [4
              /*yield*/
              , Eo(o.ju, n,
              /* keepPersistedTargetData */
              !0)];

            case 6:
              return t.sent(), Ls(o, n, i), [3
              /*break*/
              , 8];

            case 7:
              y(), t.label = 8;

            case 8:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /** Adds or removes Watch targets for queries from different tabs. */


    function Ws(e, n, r) {
      return t.__awaiter(this, void 0, void 0, function () {
        var i, o, s, u, a, c, h, f, p, d;
        return t.__generator(this, function (v) {
          switch (v.label) {
            case 0:
              if (!(i = Ks(e)).qh) return [3
              /*break*/
              , 10];
              o = 0, s = n, v.label = 1;

            case 1:
              return o < s.length ? (u = s[o], i.Fh.has(u) ? ( // A target might have been added in a previous attempt
              l("SyncEngine", "Adding an already active target " + u), [3
              /*break*/
              , 5]) : [4
              /*yield*/
              , No(i.ju, u)]) : [3
              /*break*/
              , 6];

            case 2:
              return a = v.sent(), [4
              /*yield*/
              , Io(i.ju, a)];

            case 3:
              return c = v.sent(), [4
              /*yield*/
              , bs(i, Gs(a), c.targetId,
              /*current=*/
              !1)];

            case 4:
              v.sent(), Wo(i.ph, c), v.label = 5;

            case 5:
              return o++, [3
              /*break*/
              , 1];

            case 6:
              h = function (e) {
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return i.Fh.has(e) ? [4
                      /*yield*/
                      , Eo(i.ju, e,
                      /* keepPersistedTargetData */
                      !1).then(function () {
                        Ko(i.ph, e), Ls(i, e);
                      }).catch(Do)] : [3
                      /*break*/
                      , 2];
                    // Release queries that are still active.

                    case 1:
                      // Release queries that are still active.
                      t.sent(), t.label = 2;

                    case 2:
                      return [2
                      /*return*/
                      ];
                  }
                });
              }, f = 0, p = r, v.label = 7;

            case 7:
              return f < p.length ? (d = p[f], [5
              /*yield**/
              , h(d)]) : [3
              /*break*/
              , 10];

            case 8:
              v.sent(), v.label = 9;

            case 9:
              return f++, [3
              /*break*/
              , 7];

            case 10:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function Ks(t) {
      var e = m(t);
      return e.ph.Gu.sh = Es.bind(null, e), e.ph.Gu.qe = Cs.bind(null, e), e.ph.Gu.nh = Ns.bind(null, e), e.Ch.yu = Vr.bind(null, e.bh), e.Ch.Wh = Ur.bind(null, e.bh), e;
    }

    function Qs(t) {
      var e = m(t);
      return e.ph.Gu.ih = As.bind(null, e), e.ph.Gu.rh = Ss.bind(null, e), e;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // TOOD(b/140938512): Drop SimpleQueryEngine and rename IndexFreeQueryEngine.

    /**
     * A query engine that takes advantage of the target document mapping in the
     * QueryCache. The IndexFreeQueryEngine optimizes query execution by only
     * reading the documents that previously matched a query plus any documents that were
     * edited after the query was last listened to.
     *
     * There are some cases where Index-Free queries are not guaranteed to produce
     * the same results as full collection scans. In these cases, the
     * IndexFreeQueryEngine falls back to full query processing. These cases are:
     *
     * - Limit queries where a document that matched the query previously no longer
     *   matches the query.
     *
     * - Limit queries where a document edit may cause the document to sort below
     *   another document that is in the local cache.
     *
     * - Queries that have never been CURRENT or free of Limbo documents.
     */


    var Hs =
    /** @class */
    function () {
      function t() {}

      return t.prototype.Nc = function (t) {
        this.zh = t;
      }, t.prototype.Lr = function (t, e, r, i) {
        var o = this; // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.

        return function (t) {
          return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.on.length || 1 === t.on.length && t.on[0].field.p());
        }(e) || r.isEqual(st.min()) ? this.Hh(t, e) : this.zh.kr(t, i).next(function (s) {
          var u = o.Yh(e, s);
          return (Cn(e) || Fn(e)) && o.Eh(e.an, u, i, r) ? o.Hh(t, e) : (f() <= n.LogLevel.DEBUG && l("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), Yn(e)), o.zh.Lr(t, e, r).next(function (t) {
            // We merge `previousResults` into `updateResults`, since
            // `updateResults` is already a DocumentMap. If a document is
            // contained in both lists, then its contents are the same.
            return u.forEach(function (e) {
              t = t.ot(e.key, e);
            }), t;
          }));
        }); // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
      },
      /** Applies the query filter and sorting to the provided documents.  */
      t.prototype.Yh = function (t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new Tt(Xn(t));
        return e.forEach(function (e, r) {
          r instanceof kn && $n(t, r) && (n = n.add(r));
        }), n;
      },
      /**
       * Determines if a limit query needs to be refilled from cache, making it
       * ineligible for index-free execution.
       *
       * @param sortedPreviousResults The documents that matched the query when it
       * was last synchronized, sorted by the query's comparator.
       * @param remoteKeys The document keys that matched the query at the last
       * snapshot.
       * @param limboFreeSnapshotVersion The version of the snapshot when the query
       * was last synchronized.
       */
      t.prototype.Eh = function (t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0; // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.

        var i = "F"
        /* First */
        === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.L(r) > 0);
      }, t.prototype.Hh = function (t, e) {
        return f() <= n.LogLevel.DEBUG && l("IndexFreeQueryEngine", "Using full collection scan to execute query:", Yn(e)), this.zh.Lr(t, e, st.min());
      }, t;
    }(),
        Ys =
    /** @class */
    function () {
      function t(t, e) {
        this.Dr = t, this.No = e,
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.Sr = [],
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Jh = 1,
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.Xh = new Tt(Lo.kc);
      }

      return t.prototype.$o = function (t) {
        return yr.resolve(0 === this.Sr.length);
      }, t.prototype.ko = function (t, e, n, r) {
        var i = this.Jh;
        this.Jh++, this.Sr.length > 0 && this.Sr[this.Sr.length - 1];
        var o = new Xr(i, e, n, r);
        this.Sr.push(o); // Track references by document key and index collection parents.

        for (var s = 0, u = r; s < u.length; s++) {
          var a = u[s];
          this.Xh = this.Xh.add(new Lo(a.key, i)), this.Dr.Mo(t, a.key.path.h());
        }

        return yr.resolve(o);
      }, t.prototype.Oo = function (t, e) {
        return yr.resolve(this.Zh(e));
      }, t.prototype.Bo = function (t, e) {
        var n = e + 1,
            r = this.tl(n),
            i = r < 0 ? 0 : r; // The requested batchId may still be out of range so normalize it to the
        // start of the queue.

        return yr.resolve(this.Sr.length > i ? this.Sr[i] : null);
      }, t.prototype.qo = function () {
        return yr.resolve(0 === this.Sr.length ? -1 : this.Jh - 1);
      }, t.prototype.Uo = function (t) {
        return yr.resolve(this.Sr.slice());
      }, t.prototype.Nr = function (t, e) {
        var n = this,
            r = new Lo(e, 0),
            i = new Lo(e, Number.POSITIVE_INFINITY),
            o = [];
        return this.Xh.Ft([r, i], function (t) {
          var e = n.Zh(t.jc);
          o.push(e);
        }), yr.resolve(o);
      }, t.prototype.Or = function (t, e) {
        var n = this,
            r = new Tt(H);
        return e.forEach(function (t) {
          var e = new Lo(t, 0),
              i = new Lo(t, Number.POSITIVE_INFINITY);
          n.Xh.Ft([e, i], function (t) {
            r = r.add(t.jc);
          });
        }), yr.resolve(this.el(r));
      }, t.prototype.Wr = function (t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path,
            r = n.length + 1,
            i = n; // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.

        A.F(i) || (i = i.child(""));
        var o = new Lo(new A(i), 0),
            s = new Tt(H); // Find unique batchIDs referenced by all documents potentially matching the
        // query.

        return this.Xh.xt(function (t) {
          var e = t.key.path;
          return !!n.T(e) && ( // Rows with document keys more than one segment longer than the query
          // path can't be matches. For example, a query on 'rooms' can't match
          // the document /rooms/abc/messages/xyx.
          // TODO(mcg): we'll need a different scanner when we implement
          // ancestor queries.
          e.length === r && (s = s.add(t.jc)), !0);
        }, o), yr.resolve(this.el(s));
      }, t.prototype.el = function (t) {
        var e = this,
            n = []; // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.

        return t.forEach(function (t) {
          var r = e.Zh(t);
          null !== r && n.push(r);
        }), n;
      }, t.prototype.Wo = function (t, e) {
        var n = this;
        g(0 === this.nl(e.batchId, "removed")), this.Sr.shift();
        var r = this.Xh;
        return yr.forEach(e.mutations, function (i) {
          var o = new Lo(i.key, e.batchId);
          return r = r.delete(o), n.No.Go(t, i.key);
        }).next(function () {
          n.Xh = r;
        });
      }, t.prototype.Ko = function (t) {// No-op since the memory mutation queue does not maintain a separate cache.
      }, t.prototype.Ho = function (t, e) {
        var n = new Lo(e, 0),
            r = this.Xh.$t(n);
        return yr.resolve(e.isEqual(r && r.key));
      }, t.prototype.zo = function (t) {
        return this.Sr.length, yr.resolve();
      },
      /**
       * Finds the index of the given batchId in the mutation queue and asserts that
       * the resulting index is within the bounds of the queue.
       *
       * @param batchId The batchId to search for
       * @param action A description of what the caller is doing, phrased in passive
       * form (e.g. "acknowledged" in a routine that acknowledges batches).
       */
      t.prototype.nl = function (t, e) {
        return this.tl(t);
      },
      /**
       * Finds the index of the given batchId in the mutation queue. This operation
       * is O(1).
       *
       * @return The computed index of the batch with the given batchId, based on
       * the state of the queue. Note this index can be negative if the requested
       * batchId has already been remvoed from the queue or past the end of the
       * queue if the batchId is larger than the last added batch.
       */
      t.prototype.tl = function (t) {
        return 0 === this.Sr.length ? 0 : t - this.Sr[0].batchId; // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
      },
      /**
       * A version of lookupMutationBatch that doesn't return a promise, this makes
       * other functions that uses this code easier to read and more efficent.
       */
      t.prototype.Zh = function (t) {
        var e = this.tl(t);
        return e < 0 || e >= this.Sr.length ? null : this.Sr[e];
      }, t;
    }(),
        $s =
    /** @class */
    function () {
      /**
       * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
       * return 0 to avoid unnecessarily doing the work of calculating the size.
       */
      function t(t, e) {
        this.Dr = t, this.sl = e,
        /** Underlying cache of documents and their read times. */
        this.docs = new bt(A.i),
        /** Size of all cached documents. */
        this.size = 0
        /**
        * Adds the supplied entry to the cache and updates the cache size as appropriate.
        *
        * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
        * returned by `newChangeBuffer()`.
        */
        ;
      }

      return t.prototype.Er = function (t, e, n) {
        var r = e.key,
            i = this.docs.get(r),
            o = i ? i.size : 0,
            s = this.sl(e);
        return this.docs = this.docs.ot(r, {
          ta: e,
          size: s,
          readTime: n
        }), this.size += s - o, this.Dr.Mo(t, r.path.h());
      },
      /**
       * Removes the specified entry from the cache and updates the cache size as appropriate.
       *
       * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
       * returned by `newChangeBuffer()`.
       */
      t.prototype.Ar = function (t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
      }, t.prototype.Rr = function (t, e) {
        var n = this.docs.get(e);
        return yr.resolve(n ? n.ta : null);
      }, t.prototype.getEntries = function (t, e) {
        var n = this,
            r = Dt();
        return e.forEach(function (t) {
          var e = n.docs.get(t);
          r = r.ot(t, e ? e.ta : null);
        }), yr.resolve(r);
      }, t.prototype.Lr = function (t, e, n) {
        for (var r = Lt(), i = new A(e.path.child("")), o = this.docs.ft(i) // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.At();) {
          var s = o.It(),
              u = s.key,
              a = s.value,
              c = a.ta,
              h = a.readTime;
          if (!e.path.T(u.path)) break;
          h.L(n) <= 0 || c instanceof kn && $n(e, c) && (r = r.ot(c.key, c));
        }

        return yr.resolve(r);
      }, t.prototype.il = function (t, e) {
        return yr.forEach(this.docs, function (t) {
          return e(t);
        });
      }, t.prototype.ra = function (t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new Xs(this);
      }, t.prototype.aa = function (t) {
        return yr.resolve(this.size);
      }, t;
    }(),
        Xs =
    /** @class */
    function (e) {
      function n(t) {
        var n = this;
        return (n = e.call(this) || this).ca = t, n;
      }

      return t.__extends(n, e), n.prototype.yr = function (t) {
        var e = this,
            n = [];
        return this.wr.forEach(function (r, i) {
          i ? n.push(e.ca.Er(t, i, e.readTime)) : e.ca.Ar(r);
        }), yr.$n(n);
      }, n.prototype.gr = function (t, e) {
        return this.ca.Rr(t, e);
      }, n.prototype.Pr = function (t, e) {
        return this.ca.getEntries(t, e);
      }, n;
    }(Zr),
        Js =
    /** @class */
    function () {
      function t(t) {
        this.persistence = t,
        /**
             * Maps a target to the data about that target
             */
        this.rl = new it(function (t) {
          return lt(t);
        }, pt),
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = st.min(),
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0,
        /** The highest sequence number encountered. */
        this.ol = 0,
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.al = new xo(), this.targetCount = 0, this.cl = ro.fa();
      }

      return t.prototype.Ce = function (t, e) {
        return this.rl.forEach(function (t, n) {
          return e(n);
        }), yr.resolve();
      }, t.prototype.Ea = function (t) {
        return yr.resolve(this.lastRemoteSnapshotVersion);
      }, t.prototype.Ia = function (t) {
        return yr.resolve(this.ol);
      }, t.prototype.wa = function (t) {
        return this.highestTargetId = this.cl.next(), yr.resolve(this.highestTargetId);
      }, t.prototype.Aa = function (t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.ol && (this.ol = e), yr.resolve();
      }, t.prototype.ga = function (t) {
        this.rl.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.cl = new ro(e), this.highestTargetId = e), t.sequenceNumber > this.ol && (this.ol = t.sequenceNumber);
      }, t.prototype.Ra = function (t, e) {
        return this.ga(e), this.targetCount += 1, yr.resolve();
      }, t.prototype.ya = function (t, e) {
        return this.ga(e), yr.resolve();
      }, t.prototype.Va = function (t, e) {
        return this.rl.delete(e.target), this.al.Uc(e.targetId), this.targetCount -= 1, yr.resolve();
      }, t.prototype.po = function (t, e, n) {
        var r = this,
            i = 0,
            o = [];
        return this.rl.forEach(function (s, u) {
          u.sequenceNumber <= e && null === n.get(u.targetId) && (r.rl.delete(s), o.push(r.pa(t, u.targetId)), i++);
        }), yr.$n(o).next(function () {
          return i;
        });
      }, t.prototype.ba = function (t) {
        return yr.resolve(this.targetCount);
      }, t.prototype.va = function (t, e) {
        var n = this.rl.get(e) || null;
        return yr.resolve(n);
      }, t.prototype.Sa = function (t, e, n) {
        return this.al.Lc(e, n), yr.resolve();
      }, t.prototype.Ca = function (t, e, n) {
        this.al.qc(e, n);
        var r = this.persistence.No,
            i = [];
        return r && e.forEach(function (e) {
          i.push(r.Go(t, e));
        }), yr.$n(i);
      }, t.prototype.pa = function (t, e) {
        return this.al.Uc(e), yr.resolve();
      }, t.prototype.Fa = function (t, e) {
        var n = this.al.Wc(e);
        return yr.resolve(n);
      }, t.prototype.Ho = function (t, e) {
        return yr.resolve(this.al.Ho(e));
      }, t;
    }(),
        Zs =
    /** @class */
    function () {
      /**
       * The constructor accepts a factory for creating a reference delegate. This
       * allows both the delegate and this instance to have strong references to
       * each other without having nullable fields that would then need to be
       * checked or asserted on every access.
       */
      function t(t) {
        var e = this;
        this.ul = {}, this.Ma = new qr(0), this.Oa = !1, this.Oa = !0, this.No = t(this), this.Ka = new Js(this), this.Dr = new Ui(), this.vr = function (t, n) {
          return new $s(t, function (t) {
            return e.No.hl(t);
          });
        }(this.Dr);
      }

      return t.prototype.start = function () {
        return Promise.resolve();
      }, t.prototype.Di = function () {
        // No durable state to ensure is closed on shutdown.
        return this.Oa = !1, Promise.resolve();
      }, Object.defineProperty(t.prototype, "Ei", {
        get: function () {
          return this.Oa;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.Za = function () {// No op.
      }, t.prototype.tc = function () {// No op.
      }, t.prototype.Ic = function () {
        return this.Dr;
      }, t.prototype.mc = function (t) {
        var e = this.ul[t.ti()];
        return e || (e = new Ys(this.Dr, this.No), this.ul[t.ti()] = e), e;
      }, t.prototype.Tc = function () {
        return this.Ka;
      }, t.prototype.Ec = function () {
        return this.vr;
      }, t.prototype.runTransaction = function (t, e, n) {
        var r = this;
        l("MemoryPersistence", "Starting transaction:", t);
        var i = new tu(this.Ma.next());
        return this.No.ll(), n(i).next(function (t) {
          return r.No._l(i).next(function () {
            return t;
          });
        }).Fn().then(function (t) {
          return i.br(), t;
        });
      }, t.prototype.fl = function (t, e) {
        return yr.kn(Object.values(this.ul).map(function (n) {
          return function () {
            return n.Ho(t, e);
          };
        }));
      }, t;
    }(),
        tu =
    /** @class */
    function (e) {
      function n(t) {
        var n = this;
        return (n = e.call(this) || this).xa = t, n;
      }

      return t.__extends(n, e), n;
    }(ei),
        eu =
    /** @class */
    function () {
      function t(t) {
        this.persistence = t,
        /** Tracks all documents that are active in Query views. */
        this.dl = new xo(),
        /** The list of documents that are potentially GCed after each transaction. */
        this.wl = null;
      }

      return t.ml = function (e) {
        return new t(e);
      }, Object.defineProperty(t.prototype, "Tl", {
        get: function () {
          if (this.wl) return this.wl;
          throw y();
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.Da = function (t, e, n) {
        return this.dl.Da(n, e), this.Tl.delete(n.toString()), yr.resolve();
      }, t.prototype.Na = function (t, e, n) {
        return this.dl.Na(n, e), this.Tl.add(n.toString()), yr.resolve();
      }, t.prototype.Go = function (t, e) {
        return this.Tl.add(e.toString()), yr.resolve();
      }, t.prototype.removeTarget = function (t, e) {
        var n = this;
        this.dl.Uc(e.targetId).forEach(function (t) {
          return n.Tl.add(t.toString());
        });
        var r = this.persistence.Tc();
        return r.Fa(t, e.targetId).next(function (t) {
          t.forEach(function (t) {
            return n.Tl.add(t.toString());
          });
        }).next(function () {
          return r.Va(t, e);
        });
      }, t.prototype.ll = function () {
        this.wl = new Set();
      }, t.prototype._l = function (t) {
        var e = this,
            n = this.persistence.Ec().ra(); // Remove newly orphaned documents.

        return yr.forEach(this.Tl, function (r) {
          var i = A.D(r);
          return e.El(t, i).next(function (t) {
            t || n.Ar(i);
          });
        }).next(function () {
          return e.wl = null, n.apply(t);
        });
      }, t.prototype.yc = function (t, e) {
        var n = this;
        return this.El(t, e).next(function (t) {
          t ? n.Tl.delete(e.toString()) : n.Tl.add(e.toString());
        });
      }, t.prototype.hl = function (t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
      }, t.prototype.El = function (t, e) {
        var n = this;
        return yr.kn([function () {
          return yr.resolve(n.dl.Ho(e));
        }, function () {
          return n.persistence.Tc().Ho(t, e);
        }, function () {
          return n.persistence.fl(t, e);
        }]);
      }, t;
    }(),
        nu =
    /** @class */
    function () {
      function t(t) {
        this.Il = t.Il, this.Al = t.Al;
      }

      return t.prototype.gu = function (t) {
        this.Rl = t;
      }, t.prototype.Tu = function (t) {
        this.gl = t;
      }, t.prototype.onMessage = function (t) {
        this.Pl = t;
      }, t.prototype.close = function () {
        this.Al();
      }, t.prototype.send = function (t) {
        this.Il(t);
      }, t.prototype.yl = function () {
        this.Rl();
      }, t.prototype.Vl = function (t) {
        this.gl(t);
      }, t.prototype.pl = function (t) {
        this.Pl(t);
      }, t;
    }(),
        ru = {
      BatchGetDocuments: "batchGet",
      Commit: "commit",
      RunQuery: "runQuery"
    },
        iu =
    /** @class */
    function (e) {
      function n(t) {
        var n = this;
        return (n = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n.W = t.W, n;
      }
      /**
       * Base class for all Rest-based connections to the backend (WebChannel and
       * HTTP).
       */


      return t.__extends(n, e), n.prototype.Nl = function (t, e, n, r) {
        return new Promise(function (o, s) {
          var u = new i.XhrIo();
          u.listenOnce(i.EventType.COMPLETE, function () {
            try {
              switch (u.getLastErrorCode()) {
                case i.ErrorCode.NO_ERROR:
                  var e = u.getResponseJson();
                  l("Connection", "XHR received:", JSON.stringify(e)), o(e);
                  break;

                case i.ErrorCode.TIMEOUT:
                  l("Connection", 'RPC "' + t + '" timed out'), s(new c(a.DEADLINE_EXCEEDED, "Request time out"));
                  break;

                case i.ErrorCode.HTTP_ERROR:
                  var n = u.getStatus();

                  if (l("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), n > 0) {
                    var r = u.getResponseJson().error;

                    if (r && r.status && r.message) {
                      var h = function (t) {
                        var e = t.toLowerCase().replace("_", "-");
                        return Object.values(a).indexOf(e) >= 0 ? e : a.UNKNOWN;
                      }(r.status);

                      s(new c(h, r.message));
                    } else s(new c(a.UNKNOWN, "Server responded with status " + u.getStatus()));
                  } else // If we received an HTTP_ERROR but there's no status code,
                    // it's most probably a connection issue
                    s(new c(a.UNAVAILABLE, "Connection failed."));

                  break;

                default:
                  y();
              }
            } finally {
              l("Connection", 'RPC "' + t + '" completed.');
            }
          });
          var h = JSON.stringify(r);
          u.send(e, "POST", h, n, 15);
        });
      }, n.prototype.Pu = function (t, e) {
        var n = [this.vl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
            o = i.createWebChannelTransport(),
            s = {
          // Required for backend stickiness, routing behavior is based on this
          // parameter.
          httpSessionIdParam: "gsessionid",
          initMessageHeaders: {},
          messageUrlParams: {
            // This param is used to improve routing and project isolation by the
            // backend and must be included in every request.
            database: "projects/" + this.U.projectId + "/databases/" + this.U.database
          },
          sendRawJson: !0,
          supportsCrossDomainXhr: !0,
          internalChannelParams: {
            // Override the default timeout (randomized between 10-20 seconds) since
            // a large write batch on a slow internet connection may take a long
            // time to send to the backend. Rather than have WebChannel impose a
            // tight timeout which could lead to infinite timeouts and retries, we
            // set it very large (5-10 minutes) and rely on the browser's builtin
            // timeouts to kick in if the request isn't working.
            forwardChannelRequestTimeoutMs: 6e5
          },
          forceLongPolling: this.forceLongPolling,
          detectBufferingProxy: this.W
        };
        this.Cl(s.initMessageHeaders, e), // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        r.isMobileCordova() || r.isReactNative() || r.isElectron() || r.isIE() || r.isUWP() || r.isBrowserExtension() || (s.httpHeadersOverwriteParam = "$httpHeaders");
        var u = n.join("");
        l("Connection", "Creating WebChannel: " + u, s);

        var h = o.createWebChannel(u, s),
            f = !1,
            p = !1,
            v = new nu({
          Il: function (t) {
            p ? l("Connection", "Not sending because WebChannel is closed:", t) : (f || (l("Connection", "Opening WebChannel transport."), h.open(), f = !0), l("Connection", "WebChannel sending:", t), h.send(t));
          },
          Al: function () {
            return h.close();
          }
        }),
            y = function (t, e) {
          // TODO(dimond): closure typing seems broken because WebChannel does
          // not implement goog.events.Listenable
          h.listen(t, function (t) {
            try {
              e(t);
            } catch (t) {
              setTimeout(function () {
                throw t;
              }, 0);
            }
          });
        }; // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
        // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.


        return y(i.WebChannel.EventType.OPEN, function () {
          p || l("Connection", "WebChannel transport opened.");
        }), y(i.WebChannel.EventType.CLOSE, function () {
          p || (p = !0, l("Connection", "WebChannel transport closed"), v.Vl());
        }), y(i.WebChannel.EventType.ERROR, function (t) {
          p || (p = !0, d("Connection", "WebChannel transport errored:", t), v.Vl(new c(a.UNAVAILABLE, "The operation could not be completed")));
        }), y(i.WebChannel.EventType.MESSAGE, function (t) {
          var e;

          if (!p) {
            var n = t.data[0];
            g(!!n); // TODO(b/35143891): There is a bug in One Platform that caused errors
            // (and only errors) to be wrapped in an extra array. To be forward
            // compatible with the bug we need to check either condition. The latter
            // can be removed once the fix has been rolled out.
            // Use any because msgData.error is not typed.

            var r = n,
                i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);

            if (i) {
              l("Connection", "WebChannel received error:", i); // error.status will be a string like 'OK' or 'NOT_FOUND'.

              var o = i.status,
                  s = function (t) {
                // lookup by string
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var e = vt[t];
                if (void 0 !== e) return _t(e);
              }(o),
                  u = i.message;

              void 0 === s && (s = a.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), // Mark closed so no further events are propagated
              p = !0, v.Vl(new c(s, u)), h.close();
            } else l("Connection", "WebChannel received:", n), v.pl(n);
          }
        }), setTimeout(function () {
          // Technically we could/should wait for the WebChannel opened event,
          // but because we want to send the first message with the WebChannel
          // handshake we pretend the channel opened here (asynchronously), and
          // then delay the actual open until the first message is sent.
          v.yl();
        }, 0), v;
      }, n;
    }(
    /** @class */
    function () {
      function t(t) {
        this.bl = t, this.U = t.U;
        var e = t.ssl ? "https" : "http";
        this.vl = e + "://" + t.host, this.Sl = "projects/" + this.U.projectId + "/databases/" + this.U.database + "/documents";
      }

      return t.prototype.$u = function (t, e, n, r) {
        var i = this.Dl(t, e);
        l("RestConnection", "Sending: ", i, n);
        var o = {};
        return this.Cl(o, r), this.Nl(t, i, o, n).then(function (t) {
          return l("RestConnection", "Received: ", t), t;
        }, function (e) {
          throw d("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), e;
        });
      }, t.prototype.ku = function (t, e, n, r) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.$u(t, e, n, r);
      },
      /**
       * Modifies the headers for a request, adding any authorization token if
       * present and any additional headers for the request.
       */
      t.prototype.Cl = function (t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/7.24.0", // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (var n in e.Kc) e.Kc.hasOwnProperty(n) && (t[n] = e.Kc[n]);
      }, t.prototype.Dl = function (t, e) {
        var n = ru[t];
        return this.vl + "/v1/" + e + ":" + n;
      }, t;
    }()),
        ou =
    /** @class */
    function () {
      function t() {
        var t = this;
        this.Fl = function () {
          return t.xl();
        }, this.$l = function () {
          return t.kl();
        }, this.Ml = [], this.Ol();
      }

      return t.prototype.Zu = function (t) {
        this.Ml.push(t);
      }, t.prototype.Di = function () {
        window.removeEventListener("online", this.Fl), window.removeEventListener("offline", this.$l);
      }, t.prototype.Ol = function () {
        window.addEventListener("online", this.Fl), window.addEventListener("offline", this.$l);
      }, t.prototype.xl = function () {
        l("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");

        for (var t = 0, e = this.Ml; t < e.length; t++) {
          (0, e[t])(0
          /* AVAILABLE */
          );
        }
      }, t.prototype.kl = function () {
        l("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");

        for (var t = 0, e = this.Ml; t < e.length; t++) {
          (0, e[t])(1
          /* UNAVAILABLE */
          );
        }
      }, // TODO(chenbrian): Consider passing in window either into this component or
      // here for testing via FakeWindow.

      /** Checks that all used attributes of window are available. */
      t.Ln = function () {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
      }, t;
    }(),
        su =
    /** @class */
    function () {
      function t() {}

      return t.prototype.Zu = function (t) {// No-op.
      }, t.prototype.Di = function () {// No-op.
      }, t;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** Initializes the WebChannelConnection for the browser. */

    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function uu(t) {
      return new ye(t,
      /* useProto3Json= */
      !0);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var au = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",
        cu =
    /** @class */
    function () {
      function e() {}

      return e.prototype.initialize = function (e) {
        return t.__awaiter(this, void 0, void 0, function () {
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.Sh = this.Ll(e), this.persistence = this.Bl(e), [4
                /*yield*/
                , this.persistence.start()];

              case 1:
                return t.sent(), this.ql = this.Ul(e), this.ju = this.Ql(e), [2
                /*return*/
                ];
            }
          });
        });
      }, e.prototype.Ul = function (t) {
        return null;
      }, e.prototype.Ql = function (t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new Hs(), r = t.Wl, new go(e, n, r);
        var e, n, r;
      }, e.prototype.Bl = function (t) {
        if (t.persistenceSettings.jl) throw new c(a.FAILED_PRECONDITION, au);
        return new Zs(eu.ml);
      }, e.prototype.Ll = function (t) {
        return new $r();
      }, e.prototype.terminate = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.ql && this.ql.stop(), [4
                /*yield*/
                , this.Sh.Di()];

              case 1:
                return t.sent(), [4
                /*yield*/
                , this.persistence.Di()];

              case 2:
                return t.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, e.prototype.clearPersistence = function (t, e) {
        throw new c(a.FAILED_PRECONDITION, au);
      }, e;
    }(),
        hu =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n.prototype.initialize = function (n) {
        return t.__awaiter(this, void 0, void 0, function () {
          var r,
              i = this;
          return t.__generator(this, function (o) {
            switch (o.label) {
              case 0:
                return [4
                /*yield*/
                , e.prototype.initialize.call(this, n)];

              case 1:
                return o.sent(), r = this.Kl.fi, this.Sh instanceof Yr ? (this.Sh.fi = {
                  er: Ms.bind(null, r),
                  nr: Bs.bind(null, r),
                  sr: Ws.bind(null, r),
                  pi: zs.bind(null, r)
                }, [4
                /*yield*/
                , this.Sh.start()]) : [3
                /*break*/
                , 3];

              case 2:
                o.sent(), o.label = 3;

              case 3:
                // NOTE: This will immediately call the listener, so we make sure to
                // set it after localStore / remoteStore are started.
                return [4
                /*yield*/
                , this.persistence.Xa(function (e) {
                  return t.__awaiter(i, void 0, void 0, function () {
                    return t.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4
                          /*yield*/
                          , qs(this.Kl.fi, e)];

                        case 1:
                          return t.sent(), this.ql && (e && !this.ql.Ei ? this.ql.start(this.ju) : e || this.ql.stop()), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 4:
                // NOTE: This will immediately call the listener, so we make sure to
                // set it after localStore / remoteStore are started.
                return o.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.Ll = function (t) {
        if (t.persistenceSettings.jl && t.persistenceSettings.synchronizeTabs) {
          var e = Ar();
          if (!Yr.Ln(e)) throw new c(a.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
          var n = yo(t.bl.U, t.bl.persistenceKey);
          return new Yr(e, t.cs, n, t.clientId, t.Wl);
        }

        return new $r();
      }, n;
    }(
    /** @class */
    function (e) {
      function n(t) {
        var n = this;
        return (n = e.call(this) || this).Kl = t, n;
      }

      return t.__extends(n, e), n.prototype.initialize = function (n) {
        return t.__awaiter(this, void 0, void 0, function () {
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return [4
                /*yield*/
                , e.prototype.initialize.call(this, n)];

              case 1:
                return t.sent(), [4
                /*yield*/
                , So(this.ju)];

              case 2:
                return t.sent(), [4
                /*yield*/
                , this.Kl.initialize(this, n)];

              case 3:
                // Enqueue writes from a previous session
                return t.sent(), [4
                /*yield*/
                , Qs(this.Kl.fi)];

              case 4:
                // Enqueue writes from a previous session
                return t.sent(), [4
                /*yield*/
                , is(this.Kl.ph)];

              case 5:
                return t.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }, n.prototype.Ul = function (t) {
        var e = this.persistence.No.wo;
        return new ai(e, t.cs);
      }, n.prototype.Bl = function (t) {
        var e = yo(t.bl.U, t.bl.persistenceKey),
            n = uu(t.bl.U);
        return new ho(t.persistenceSettings.synchronizeTabs, e, t.clientId, ui.ao(t.persistenceSettings.cacheSizeBytes), t.cs, Ar(), Sr(), n, this.Sh, t.persistenceSettings.ka);
      }, n.prototype.Ll = function (t) {
        return new $r();
      }, n.prototype.clearPersistence = function (e, n) {
        return function (e) {
          return t.__awaiter(this, void 0, void 0, function () {
            var n;
            return t.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return gr.Ln() ? (n = e + "main", [4
                  /*yield*/
                  , gr.delete(n)]) : [2
                  /*return*/
                  , Promise.resolve()];

                case 1:
                  return t.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        }(yo(e, n));
      }, n;
    }(cu)),
        fu =
    /** @class */
    function () {
      function e() {}

      return e.prototype.initialize = function (e, n) {
        return t.__awaiter(this, void 0, void 0, function () {
          var r = this;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.ju ? [3
                /*break*/
                , 2] : (this.ju = e.ju, this.Sh = e.Sh, this.Ku = this.Gl(n), this.ph = this.zl(n), this.bh = this.Hl(n), this.fi = this.Yl(n), this.Sh.di = function (t) {
                  return Ts(r.fi, t, 1
                  /* SharedClientState */
                  );
                }, this.ph.Gu.Jl = Us.bind(null, this.fi), [4
                /*yield*/
                , fs(this.ph, this.fi.Uh)]);

              case 1:
                t.sent(), t.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, e.prototype.Hl = function (t) {
        return new Rr();
      }, e.prototype.Gl = function (t) {
        var e,
            n = uu(t.bl.U),
            r = (e = t.bl, new iu(e));
        /** Return the Platform-specific connectivity monitor. */

        return function (t, e, n) {
          return new Mo(t, e, n);
        }(t.credentials, r, n);
      }, e.prototype.zl = function (t) {
        var e,
            n,
            r,
            i,
            o,
            s = this;
        return e = this.ju, n = this.Ku, r = t.cs, i = function (t) {
          return Ts(s.fi, t, 0
          /* RemoteStore */
          );
        }, o = ou.Ln() ? new ou() : new su(), new jo(e, n, r, i, o);
      }, e.prototype.Yl = function (t) {
        return function (t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o, s) {
          var u = new ws(t, e, n, r, i, o);
          return s && (u.qh = !0), u;
        }(this.ju, this.ph, this.bh, this.Sh, t.Wl, t.Dh, !t.persistenceSettings.jl || !t.persistenceSettings.synchronizeTabs);
      }, e.prototype.terminate = function () {
        return Bo(this.ph);
      }, e;
    }(),
        lu =
    /** @class */
    function () {
      function t(t) {
        this.observer = t,
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
      }

      return t.prototype.next = function (t) {
        this.observer.next && this.Xl(this.observer.next, t);
      }, t.prototype.error = function (t) {
        this.observer.error ? this.Xl(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
      }, t.prototype.Zl = function () {
        this.muted = !0;
      }, t.prototype.Xl = function (t, e) {
        var n = this;
        this.muted || setTimeout(function () {
          n.muted || t(e);
        }, 0);
      }, t;
    }(),
        pu = function (t) {
      !function (t, e, n, r) {
        if (!(e instanceof Array) || e.length < 1) throw new c(a.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + W(1, "element") + ".");
      }(0, t);

      for (var e = 0; e < t.length; ++e) if (k("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new c(a.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");

      this.t_ = new N(t);
    },
        du =
    /** @class */
    function (e) {
      /**
       * Creates a FieldPath from the provided field names. If more than one field
       * name is provided, the path will point to a nested field in a document.
       *
       * @param fieldNames A list of field names.
       */
      function n() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];

        return e.call(this, t) || this;
      }

      return t.__extends(n, e), n.documentId = function () {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new n(N.v().R());
      }, n.prototype.isEqual = function (t) {
        if (!(t instanceof n)) throw G("isEqual", "FieldPath", 1, t);
        return this.t_.isEqual(t.t_);
      }, n;
    }(pu),
        vu = new RegExp("[~\\*/\\[\\]]"),
        yu =
    /**
         * @param _methodName The public API endpoint that returns this class.
         */
    function (t) {
      this.e_ = t;
    },
        gu =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n.prototype.n_ = function (t) {
        if (2
        /* MergeSet */
        !== t.s_) throw 1
        /* Update */
        === t.s_ ? t.i_(this.e_ + "() can only appear at the top level of your update data") : t.i_(this.e_ + "() cannot be used with set() unless you pass {merge:true}"); // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.

        return t.We.push(t.path), null;
      }, n.prototype.isEqual = function (t) {
        return t instanceof n;
      }, n;
    }(yu);
    /**
     * Provides all components needed for Firestore with in-memory persistence.
     * Uses EagerGC garbage collection.
     */

    /**
     * Creates a child context for parsing SerializableFieldValues.
     *
     * This is different than calling `ParseContext.contextWith` because it keeps
     * the fieldTransforms and fieldMask separate.
     *
     * The created context has its `dataSource` set to `UserDataSource.Argument`.
     * Although these values are used with writes, any elements in these FieldValues
     * are not considered writes since they cannot contain any FieldValue sentinels,
     * etc.
     *
     * @param fieldValue The sentinel FieldValue for which to create a child
     *     context.
     * @param context The parent context.
     * @param arrayElement Whether or not the FieldValue has an array.
     */


    function mu(t, e, n) {
      return new Lu({
        s_: 3
        /* Argument */
        ,
        r_: e.settings.r_,
        methodName: t.e_,
        o_: n
      }, e.U, e.serializer, e.ignoreUndefinedProperties);
    }

    var wu =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n.prototype.n_ = function (t) {
        return new cn(t.path, new Ze());
      }, n.prototype.isEqual = function (t) {
        return t instanceof n;
      }, n;
    }(yu),
        _u =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this, t) || this).a_ = n, r;
      }

      return t.__extends(n, e), n.prototype.n_ = function (t) {
        var e = mu(this, t,
        /*array=*/
        !0),
            n = this.a_.map(function (t) {
          return Uu(t, e);
        }),
            r = new tn(n);
        return new cn(t.path, r);
      }, n.prototype.isEqual = function (t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
      }, n;
    }(yu),
        bu =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this, t) || this).a_ = n, r;
      }

      return t.__extends(n, e), n.prototype.n_ = function (t) {
        var e = mu(this, t,
        /*array=*/
        !0),
            n = this.a_.map(function (t) {
          return Uu(t, e);
        }),
            r = new nn(n);
        return new cn(t.path, r);
      }, n.prototype.isEqual = function (t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
      }, n;
    }(yu),
        Iu =
    /** @class */
    function (e) {
      function n(t, n) {
        var r = this;
        return (r = e.call(this, t) || this).c_ = n, r;
      }

      return t.__extends(n, e), n.prototype.n_ = function (t) {
        var e = new on(t.serializer, we(t.serializer, this.c_));
        return new cn(t.path, e);
      }, n.prototype.isEqual = function (t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
      }, n;
    }(yu),
        Eu =
    /** @class */
    function () {
      /**
       * Creates a new immutable `GeoPoint` object with the provided latitude and
       * longitude values.
       * @param latitude The latitude as number between -90 and 90.
       * @param longitude The longitude as number between -180 and 180.
       */
      function t(t, e) {
        if (D("GeoPoint", arguments, 2), k("GeoPoint", "number", 1, t), k("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || t > 90) throw new c(a.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new c(a.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.u_ = t, this.h_ = e;
      }

      return Object.defineProperty(t.prototype, "latitude", {
        /**
         * The latitude of this `GeoPoint` instance.
         */
        get: function () {
          return this.u_;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * The longitude of this `GeoPoint` instance.
         */
        get: function () {
          return this.h_;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Returns true if this `GeoPoint` is equal to the provided one.
       *
       * @param other The `GeoPoint` to compare against.
       * @return true if this `GeoPoint` is equal to the provided one.
       */
      t.prototype.isEqual = function (t) {
        return this.u_ === t.u_ && this.h_ === t.h_;
      }, t.prototype.toJSON = function () {
        return {
          latitude: this.u_,
          longitude: this.h_
        };
      },
      /**
       * Actually private to JS consumers of our API, so this function is prefixed
       * with an underscore.
       */
      t.prototype.Y = function (t) {
        return H(this.u_, t.u_) || H(this.h_, t.h_);
      }, t;
    }(),
        Tu = function (t) {
      this.l_ = t;
    },
        Nu = /^__.*__$/,
        Au = function (t, e, n) {
      this.__ = t, this.f_ = e, this.d_ = n;
    },
        Su =
    /** @class */
    function () {
      function t(t, e, n) {
        this.data = t, this.We = e, this.fieldTransforms = n;
      }

      return t.prototype.w_ = function (t, e) {
        var n = [];
        return null !== this.We ? n.push(new _n(t, this.data, this.We, e)) : n.push(new wn(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new In(t, this.fieldTransforms)), n;
      }, t;
    }(),
        Du =
    /** @class */
    function () {
      function t(t, e, n) {
        this.data = t, this.We = e, this.fieldTransforms = n;
      }

      return t.prototype.w_ = function (t, e) {
        var n = [new _n(t, this.data, this.We, e)];
        return this.fieldTransforms.length > 0 && n.push(new In(t, this.fieldTransforms)), n;
      }, t;
    }();

    function xu(t) {
      switch (t) {
        case 0
        /* Set */
        : // fall through

        case 2
        /* MergeSet */
        : // fall through

        case 1
        /* Update */
        :
          return !0;

        case 3
        /* Argument */
        :
        case 4
        /* ArrayArgument */
        :
          return !1;

        default:
          throw y();
      }
    }
    /** A "context" object passed around while parsing user data. */


    var Lu =
    /** @class */
    function () {
      /**
       * Initializes a ParseContext with the given source and path.
       *
       * @param settings The settings for the parser.
       * @param databaseId The database ID of the Firestore instance.
       * @param serializer The serializer to use to generate the Value proto.
       * @param ignoreUndefinedProperties Whether to ignore undefined properties
       * rather than throw.
       * @param fieldTransforms A mutable list of field transforms encountered while
       *     parsing the data.
       * @param fieldMask A mutable list of field paths encountered while parsing
       *     the data.
       *
       * TODO(b/34871131): We don't support array paths right now, so path can be
       * null to indicate the context represents any location within an array (in
       * which case certain features will not work and errors will be somewhat
       * compromised).
       */
      function t(t, e, n, r, i, o) {
        this.settings = t, this.U = e, this.serializer = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.m_(), this.fieldTransforms = i || [], this.We = o || [];
      }

      return Object.defineProperty(t.prototype, "path", {
        get: function () {
          return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "s_", {
        get: function () {
          return this.settings.s_;
        },
        enumerable: !1,
        configurable: !0
      }),
      /** Returns a new context with the specified settings overwritten. */
      t.prototype.T_ = function (e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.U, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.We);
      }, t.prototype.E_ = function (t) {
        var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.T_({
          path: n,
          o_: !1
        });
        return r.I_(t), r;
      }, t.prototype.A_ = function (t) {
        var e,
            n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
            r = this.T_({
          path: n,
          o_: !1
        });
        return r.m_(), r;
      }, t.prototype.R_ = function (t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.T_({
          path: void 0,
          o_: !0
        });
      }, t.prototype.i_ = function (t) {
        return Gu(t, this.settings.methodName, this.settings.g_ || !1, this.path, this.settings.r_);
      },
      /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
      t.prototype.contains = function (t) {
        return void 0 !== this.We.find(function (e) {
          return t.T(e);
        }) || void 0 !== this.fieldTransforms.find(function (e) {
          return t.T(e.field);
        });
      }, t.prototype.m_ = function () {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.I_(this.path.get(t));
      }, t.prototype.I_ = function (t) {
        if (0 === t.length) throw this.i_("Document fields must not be empty");
        if (xu(this.s_) && Nu.test(t)) throw this.i_('Document fields cannot begin and end with "__"');
      }, t;
    }(),
        ku =
    /** @class */
    function () {
      function t(t, e, n) {
        this.U = t, this.ignoreUndefinedProperties = e, this.serializer = n || uu(t)
        /** Creates a new top-level parse context. */
        ;
      }

      return t.prototype.P_ = function (t, e, n, r) {
        return void 0 === r && (r = !1), new Lu({
          s_: t,
          methodName: e,
          r_: n,
          path: N.P(),
          o_: !1,
          g_: r
        }, this.U, this.serializer, this.ignoreUndefinedProperties);
      }, t;
    }();
    /**
     * Helper for parsing raw user input (provided via the API) into internal model
     * classes.
     */

    /** Parse document data from a set() call. */


    function Ru(t, e, n, r, i, o) {
      void 0 === o && (o = {});
      var s = t.P_(o.merge || o.mergeFields ? 2
      /* MergeSet */
      : 0
      /* Set */
      , e, n, i);
      Mu("Data must be an object, but it was:", s, r);
      var u,
          h,
          f = Cu(r, s);
      if (o.merge) u = new an(s.We), h = s.fieldTransforms;else if (o.mergeFields) {
        for (var l = [], p = 0, d = o.mergeFields; p < d.length; p++) {
          var v = d[p],
              g = void 0;
          if (v instanceof pu) g = v.t_;else {
            if ("string" != typeof v) throw y();
            g = ju(e, v, n);
          }
          if (!s.contains(g)) throw new c(a.INVALID_ARGUMENT, "Field '" + g + "' is specified in your field mask but missing from your input data.");
          zu(l, g) || l.push(g);
        }

        u = new an(l), h = s.fieldTransforms.filter(function (t) {
          return u.Ye(t.field);
        });
      } else u = null, h = s.fieldTransforms;
      return new Su(new Sn(f), u, h);
    }
    /** Parse update data from an update() call. */


    function Ou(t, e, n, r) {
      var i = t.P_(1
      /* Update */
      , e, n);
      Mu("Data must be an object, but it was:", i, r);
      var o = [],
          s = new Dn();

      _(r, function (t, r) {
        var u = ju(e, t, n),
            a = i.A_(u);
        if (r instanceof gu || r instanceof Tu && r.l_ instanceof gu) // Add it to the field mask, but don't add anything to updateData.
          o.push(u);else {
          var c = Uu(r, a);
          null != c && (o.push(u), s.set(u, c));
        }
      });

      var u = new an(o);
      return new Du(s.Xe(), u, i.fieldTransforms);
    }
    /** Parse update data from a list of field/value arguments. */


    function Pu(t, e, n, r, i, o) {
      var s = t.P_(1
      /* Update */
      , e, n),
          u = [qu(e, r, n)],
          h = [i];
      if (o.length % 2 != 0) throw new c(a.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");

      for (var f = 0; f < o.length; f += 2) u.push(qu(e, o[f])), h.push(o[f + 1]); // We iterate in reverse order to pick the last value for a field if the
      // user specified the field multiple times.


      for (var l = [], p = new Dn(), d = u.length - 1; d >= 0; --d) if (!zu(l, u[d])) {
        var v = u[d],
            y = h[d],
            g = s.A_(v);
        if (y instanceof gu || y instanceof Tu && y.l_ instanceof gu) // Add it to the field mask, but don't add anything to updateData.
          l.push(v);else {
          var m = Uu(y, g);
          null != m && (l.push(v), p.set(v, m));
        }
      }

      var w = new an(l);
      return new Du(p.Xe(), w, s.fieldTransforms);
    }
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */


    function Vu(t, e, n, r) {
      return void 0 === r && (r = !1), Uu(n, t.P_(r ? 4
      /* ArrayArgument */
      : 3
      /* Argument */
      , e));
    }
    /**
     * Parses user data to Protobuf Values.
     *
     * @param input Data to be parsed.
     * @param context A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */


    function Uu(t, e) {
      if ( // Unwrap the API type from the Compat SDK. This will return the API type
      // from firestore-exp.
      t instanceof Tu && (t = t.l_), Fu(t)) return Mu("Unsupported field value:", e, t), Cu(t, e);
      if (t instanceof yu) // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.

        /**
         * "Parses" the provided FieldValueImpl, adding any necessary transforms to
         * context.fieldTransforms.
         */
        return function (t, e) {
          // Sentinels are only supported with writes, and not within arrays.
          if (!xu(e.s_)) throw e.i_(t.e_ + "() can only be used with update() and set()");
          if (!e.path) throw e.i_(t.e_ + "() is not currently supported inside arrays");
          var n = t.n_(e);
          n && e.fieldTransforms.push(n);
        }(t, e), null;

      if ( // If context.path is null we are inside an array and we don't support
      // field mask paths more granular than the top-level array.
      e.path && e.We.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.o_ && 4
        /* ArrayArgument */
        !== e.s_) throw e.i_("Nested arrays are not supported");
        return function (t, e) {
          for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
            var s = Uu(o[i], e.R_(r));
            null == s && ( // Just include nulls in the array for fields being replaced with a
            // sentinel.
            s = {
              nullValue: "NULL_VALUE"
            }), n.push(s), r++;
          }

          return {
            arrayValue: {
              values: n
            }
          };
        }(t, e);
      }

      return function (t, e) {
        if (null === t) return {
          nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return we(e.serializer, t);
        if ("boolean" == typeof t) return {
          booleanValue: t
        };
        if ("string" == typeof t) return {
          stringValue: t
        };

        if (t instanceof Date) {
          var n = ot.fromDate(t);
          return {
            timestampValue: _e(e.serializer, n)
          };
        }

        if (t instanceof ot) {
          // Firestore backend truncates precision down to microseconds. To ensure
          // offline mode works the same with regards to truncation, perform the
          // truncation immediately without waiting for the backend to do that.
          var r = new ot(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
          return {
            timestampValue: _e(e.serializer, r)
          };
        }

        if (t instanceof Eu) return {
          geoPointValue: {
            latitude: t.latitude,
            longitude: t.longitude
          }
        };
        if (t instanceof J) return {
          bytesValue: be(e.serializer, t.q)
        };

        if (t instanceof Au) {
          var i = e.U,
              o = t.__;
          if (!o.isEqual(i)) throw e.i_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
          return {
            referenceValue: Te(t.__ || e.U, t.f_.path)
          };
        }

        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.i_("Unsupported field value: " + M(t));
      }(t, e);
    }

    function Cu(t, e) {
      var n = {};
      return b(t) ? // If we encounter an empty object, we explicitly add it to the update
      // mask to ensure that the server creates a map entry.
      e.path && e.path.length > 0 && e.We.push(e.path) : _(t, function (t, r) {
        var i = Uu(r, e.E_(t));
        null != i && (n[t] = i);
      }), {
        mapValue: {
          fields: n
        }
      };
    }

    function Fu(t) {
      return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof ot || t instanceof Eu || t instanceof J || t instanceof Au || t instanceof yu);
    }

    function Mu(t, e, n) {
      if (!Fu(n) || !F(n)) {
        var r = M(n);
        throw "an object" === r ? e.i_(t + " a custom object") : e.i_(t + " " + r);
      }
    }
    /**
     * Helper that calls fromDotSeparatedString() but wraps any error thrown.
     */


    function qu(t, e, n) {
      if (e instanceof pu) return e.t_;
      if ("string" == typeof e) return ju(t, e);
      throw Gu("Field path arguments must be of type string or FieldPath.", t,
      /* hasConverter= */
      !1,
      /* path= */
      void 0, n);
    }
    /**
     * Wraps fromDotSeparatedString with an error message about the method that
     * was thrown.
     * @param methodName The publicly visible method name
     * @param path The dot-separated string form of a field path which will be split
     * on dots.
     * @param targetDoc The document against which the field path will be evaluated.
     */


    function ju(e, n, r) {
      try {
        return function (e) {
          if (e.search(vu) >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'");

          try {
            return new (du.bind.apply(du, t.__spreadArrays([void 0], e.split("."))))();
          } catch (t) {
            throw new c(a.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
          }
        }(n).t_;
      } catch (n) {
        throw Gu((i = n) instanceof Error ? i.message : i.toString(), e,
        /* hasConverter= */
        !1,
        /* path= */
        void 0, r);
      }
      /**
      * Extracts the message from a caught exception, which should be an Error object
      * though JS doesn't guarantee that.
      */


      var i;
      /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */
    }

    function Gu(t, e, n, r, i) {
      var o = r && !r.m(),
          s = void 0 !== i,
          u = "Function " + e + "() called with invalid data";
      n && (u += " (via `toFirestore()`)");
      var h = "";
      return (o || s) && (h += " (found", o && (h += " in field " + r), s && (h += " in document " + i), h += ")"), new c(a.INVALID_ARGUMENT, (u += ". ") + t + h);
    }

    function zu(t, e) {
      return t.some(function (t) {
        return t.isEqual(e);
      });
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Internal transaction object responsible for accumulating the mutations to
     * perform and the base versions for any documents read.
     */


    var Bu =
    /** @class */
    function () {
      function e(t) {
        this.Ku = t, // The version of each document that was read during this transaction.
        this.y_ = new Map(), this.mutations = [], this.V_ = !1,
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.p_ = null,
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.b_ = new Set();
      }

      return e.prototype.v_ = function (e) {
        return t.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return t.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                if (this.S_(), this.mutations.length > 0) throw new c(a.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                return [4
                /*yield*/
                , function (e, n) {
                  return t.__awaiter(this, void 0, void 0, function () {
                    var r, i, o, s, u, a;
                    return t.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return r = m(e), i = Le(r.serializer) + "/documents", o = {
                            documents: n.map(function (t) {
                              return Ae(r.serializer, t);
                            })
                          }, [4
                          /*yield*/
                          , r.ku("BatchGetDocuments", i, o)];

                        case 1:
                          return s = t.sent(), u = new Map(), s.forEach(function (t) {
                            var e = function (t, e) {
                              return "found" in e ? function (t, e) {
                                g(!!e.found), e.found.name, e.found.updateTime;
                                var n = Se(t, e.found.name),
                                    r = Ee(e.found.updateTime),
                                    i = new Sn({
                                  mapValue: {
                                    fields: e.found.fields
                                  }
                                });
                                return new kn(n, r, i, {});
                              }(t, e) : "missing" in e ? function (t, e) {
                                g(!!e.missing), g(!!e.readTime);
                                var n = Se(t, e.missing),
                                    r = Ee(e.readTime);
                                return new Rn(n, r);
                              }(t, e) : y();
                            }(r.serializer, t);

                            u.set(e.key.toString(), e);
                          }), a = [], [2
                          /*return*/
                          , (n.forEach(function (t) {
                            var e = u.get(t.toString());
                            g(!!e), a.push(e);
                          }), a)];
                      }
                    });
                  });
                }(this.Ku, e)];

              case 1:
                return [2
                /*return*/
                , ((n = i.sent()).forEach(function (t) {
                  t instanceof Rn || t instanceof kn ? r.D_(t) : y();
                }), n)];
            }
          });
        });
      }, e.prototype.set = function (t, e) {
        this.write(e.w_(t, this.Ge(t))), this.b_.add(t.toString());
      }, e.prototype.update = function (t, e) {
        try {
          this.write(e.w_(t, this.C_(t)));
        } catch (t) {
          this.p_ = t;
        }

        this.b_.add(t.toString());
      }, e.prototype.delete = function (t) {
        this.write([new Nn(t, this.Ge(t))]), this.b_.add(t.toString());
      }, e.prototype.commit = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e,
              n = this;
          return t.__generator(this, function (r) {
            switch (r.label) {
              case 0:
                if (this.S_(), this.p_) throw this.p_;
                return e = this.y_, // For each mutation, note that the doc was written.
                this.mutations.forEach(function (t) {
                  e.delete(t.key.toString());
                }), // For each document that was read but not written to, we want to perform
                // a `verify` operation.
                e.forEach(function (t, e) {
                  var r = A.D(e);
                  n.mutations.push(new An(r, n.Ge(r)));
                }), [4
                /*yield*/
                , function (e, n) {
                  return t.__awaiter(this, void 0, void 0, function () {
                    var r, i, o;
                    return t.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return r = m(e), i = Le(r.serializer) + "/documents", o = {
                            writes: n.map(function (t) {
                              return Oe(r.serializer, t);
                            })
                          }, [4
                          /*yield*/
                          , r.$u("Commit", i, o)];

                        case 1:
                          return t.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(this.Ku, this.mutations)];

              case 1:
                // For each mutation, note that the doc was written.
                return r.sent(), this.V_ = !0, [2
                /*return*/
                ];
            }
          });
        });
      }, e.prototype.D_ = function (t) {
        var e;
        if (t instanceof kn) e = t.version;else {
          if (!(t instanceof Rn)) throw y(); // For deleted docs, we must use baseVersion 0 when we overwrite them.

          e = st.min();
        }
        var n = this.y_.get(t.key.toString());

        if (n) {
          if (!e.isEqual(n)) // This transaction will fail no matter what.
            throw new c(a.ABORTED, "Document version changed between two reads.");
        } else this.y_.set(t.key.toString(), e);
      },
      /**
       * Returns the version of this document when it was read in this transaction,
       * as a precondition, or no precondition if it was not read.
       */
      e.prototype.Ge = function (t) {
        var e = this.y_.get(t.toString());
        return !this.b_.has(t.toString()) && e ? fn.updateTime(e) : fn.ze();
      },
      /**
       * Returns the precondition for a document if the operation is an update.
       */
      e.prototype.C_ = function (t) {
        var e = this.y_.get(t.toString()); // The first time a document is written, we want to take into account the
        // read time and existence

        if (!this.b_.has(t.toString()) && e) {
          if (e.isEqual(st.min())) // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new c(a.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); // Document exists, base precondition on document update time.

          return fn.updateTime(e);
        } // Document was not read, so we just use the preconditions for a blind
        // update.


        return fn.exists(!0);
      }, e.prototype.write = function (t) {
        this.S_(), this.mutations = this.mutations.concat(t);
      }, e.prototype.S_ = function () {}, e;
    }(),
        Wu =
    /** @class */
    function () {
      function e(t, e, n, r) {
        this.cs = t, this.Ku = e, this.updateFunction = n, this.ls = r, this.N_ = 5, this.ys = new vr(this.cs, "transaction_retry"
        /* TransactionRetry */
        )
        /** Runs the transaction and sets the result on deferred. */
        ;
      }

      return e.prototype.run = function () {
        this.F_();
      }, e.prototype.F_ = function () {
        var e = this;
        this.ys.gn(function () {
          return t.__awaiter(e, void 0, void 0, function () {
            var e,
                n,
                r = this;
            return t.__generator(this, function (t) {
              return e = new Bu(this.Ku), (n = this.x_(e)) && n.then(function (t) {
                r.cs.ws(function () {
                  return e.commit().then(function () {
                    r.ls.resolve(t);
                  }).catch(function (t) {
                    r.k_(t);
                  });
                });
              }).catch(function (t) {
                r.k_(t);
              }), [2
              /*return*/
              ];
            });
          });
        });
      }, e.prototype.x_ = function (t) {
        try {
          var e = this.updateFunction(t);
          return !ut(e) && e.catch && e.then ? e : (this.ls.reject(Error("Transaction callback must return a Promise")), null);
        } catch (t) {
          // Do not retry errors thrown by user provided updateFunction.
          return this.ls.reject(t), null;
        }
      }, e.prototype.k_ = function (t) {
        var e = this;
        this.N_ > 0 && this.M_(t) ? (this.N_ -= 1, this.cs.ws(function () {
          return e.F_(), Promise.resolve();
        })) : this.ls.reject(t);
      }, e.prototype.M_ = function (t) {
        if ("FirebaseError" === t.name) {
          // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
          // non-matching document versions with ABORTED. These errors should be retried.
          var e = t.code;
          return "aborted" === e || "failed-precondition" === e || !wt(e);
        }

        return !1;
      }, e;
    }(),
        Ku =
    /** @class */
    function () {
      function e(t,
      /**
       * Asynchronous queue responsible for all of our internal processing. When
       * we get incoming work from the user (via public API) or the network
       * (incoming GRPC messages), we should always schedule onto this queue.
       * This ensures all of our work is properly serialized (e.g. we don't
       * start processing a new operation while the previous one is waiting for
       * an async I/O to complete).
       */
      e) {
        this.credentials = t, this.cs = e, this.clientId = Q.k(), // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        this.O_ = new dr()
        /**
        * Starts up the FirestoreClient, returning only whether or not enabling
        * persistence succeeded.
        *
        * The intent here is to "do the right thing" as far as users are concerned.
        * Namely, in cases where offline persistence is requested and possible,
        * enable it, but otherwise fall back to persistence disabled. For the most
        * part we expect this to succeed one way or the other so we don't expect our
        * users to actually wait on the firestore.enablePersistence Promise since
        * they generally won't care.
        *
        * Of course some users actually do care about whether or not persistence
        * was successfully enabled, so the Promise returned from this method
        * indicates this outcome.
        *
        * This presents a problem though: even before enablePersistence resolves or
        * rejects, users may have made calls to e.g. firestore.collection() which
        * means that the FirestoreClient in there will be available and will be
        * enqueuing actions on the async queue.
        *
        * Meanwhile any failure of an operation on the async queue causes it to
        * panic and reject any further work, on the premise that unhandled errors
        * are fatal.
        *
        * Consequently the fallback is handled internally here in start, and if the
        * fallback succeeds we signal success to the async queue even though the
        * start() itself signals failure.
        *
        * @param databaseInfo The connection information for the current instance.
        * @param offlineComponentProvider Provider that returns all components
        * required for memory-only or IndexedDB persistence.
        * @param onlineComponentProvider Provider that returns all components
        * required for online support.
        * @param persistenceSettings Settings object to configure offline
        *     persistence.
        * @returns A deferred result indicating the user-visible result of enabling
        *     offline persistence. This method will reject this if IndexedDB fails to
        *     start for any reason. If usePersistence is false this is
        *     unconditionally resolved.
        */
        ;
      }

      return e.prototype.start = function (e, n, r, i) {
        var o = this;
        this.L_(), this.bl = e; // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.

        var s = new dr(),
            u = !1; // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.

        return this.credentials.Hc(function (e) {
          if (!u) return u = !0, l("FirestoreClient", "Initializing. user=", e.uid), o.B_(n, r, i, e, s).then(o.O_.resolve, o.O_.reject);
          o.cs.Cs(function () {
            return function (e, n) {
              return t.__awaiter(this, void 0, void 0, function () {
                var r, i;
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (r = m(e)).cs.xs(), l("RemoteStore", "RemoteStore received new credentials"), i = Xo(r), // Tear down and re-create our network streams. This will ensure we get a
                      // fresh auth token for the new user and re-fill the write pipeline with
                      // new mutations from the LocalStore (since mutations are per-user).
                      r.Yu.add(3
                      /* CredentialChange */
                      ), [4
                      /*yield*/
                      , zo(r)];

                    case 1:
                      return t.sent(), i && // Don't set the network status to Unknown if we are offline.
                      r.th.set("Unknown"
                      /* Unknown */
                      ), [4
                      /*yield*/
                      , r.Gu.Jl(n)];

                    case 2:
                      return t.sent(), r.Yu.delete(3
                      /* CredentialChange */
                      ), [4
                      /*yield*/
                      , Go(r)];

                    case 3:
                      // Tear down and re-create our network streams. This will ensure we get a
                      // fresh auth token for the new user and re-fill the write pipeline with
                      // new mutations from the LocalStore (since mutations are per-user).
                      return t.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }(o.ph, e);
          });
        }), // Block the async queue until initialization is done
        this.cs.ws(function () {
          return o.O_.promise;
        }), s.promise;
      },
      /** Enables the network connection and requeues all pending operations. */
      e.prototype.enableNetwork = function () {
        var t = this;
        return this.L_(), this.cs.enqueue(function () {
          return t.persistence.tc(!0), function (t) {
            var e = m(t);
            return e.Yu.delete(0
            /* UserDisabled */
            ), Go(e);
          }(t.ph);
        });
      },
      /**
       * Initializes persistent storage, attempting to use IndexedDB if
       * usePersistence is true or memory-only if false.
       *
       * If IndexedDB fails because it's already open in another tab or because the
       * platform can't possibly support our implementation then this method rejects
       * the persistenceResult and falls back on memory-only persistence.
       *
       * @param offlineComponentProvider Provider that returns all components
       * required for memory-only or IndexedDB persistence.
       * @param onlineComponentProvider Provider that returns all components
       * required for online support.
       * @param persistenceSettings Settings object to configure offline persistence
       * @param user The initial user
       * @param persistenceResult A deferred result indicating the user-visible
       *     result of enabling offline persistence. This method will reject this if
       *     IndexedDB fails to start for any reason. If usePersistence is false
       *     this is unconditionally resolved.
       * @returns a Promise indicating whether or not initialization should
       *     continue, i.e. that one of the persistence implementations actually
       *     succeeded.
       */
      e.prototype.B_ = function (e, n, r, i, o) {
        return t.__awaiter(this, void 0, void 0, function () {
          var s,
              u,
              a = this;
          return t.__generator(this, function (c) {
            switch (c.label) {
              case 0:
                return c.trys.push([0, 3,, 4]), s = {
                  cs: this.cs,
                  bl: this.bl,
                  clientId: this.clientId,
                  credentials: this.credentials,
                  Wl: i,
                  Dh: 100,
                  persistenceSettings: r
                }, [4
                /*yield*/
                , e.initialize(s)];

              case 1:
                return c.sent(), [4
                /*yield*/
                , n.initialize(e, s)];

              case 2:
                return c.sent(), this.persistence = e.persistence, this.Sh = e.Sh, this.ju = e.ju, this.ql = e.ql, this.Ku = n.Ku, this.ph = n.ph, this.fi = n.fi, this.q_ = n.bh, this.q_.Us = _s.bind(null, this.fi), this.q_.js = Is.bind(null, this.fi), // When a user calls clearPersistence() in one client, all other clients
                // need to be terminated to allow the delete to succeed.
                this.persistence.Za(function () {
                  return t.__awaiter(a, void 0, void 0, function () {
                    return t.__generator(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4
                          /*yield*/
                          , this.terminate()];

                        case 1:
                          return t.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }), o.resolve(), [3
                /*break*/
                , 4];

              case 3:
                // An unknown failure on the first stage shuts everything down.
                if (u = c.sent(), // Regardless of whether or not the retry succeeds, from an user
                // perspective, offline persistence has failed.
                o.reject(u), !this.U_(u)) throw u;
                return [2
                /*return*/
                , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + u), this.B_(new cu(), new fu(), {
                  jl: !1
                }, i, o))];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      },
      /**
       * Decides whether the provided error allows us to gracefully disable
       * persistence (as opposed to crashing the client).
       */
      e.prototype.U_ = function (t) {
        return "FirebaseError" === t.name ? t.code === a.FAILED_PRECONDITION || t.code === a.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
      },
      /**
       * Checks that the client has not been terminated. Ensures that other methods on
       * this class cannot be called after the client is terminated.
       */
      e.prototype.L_ = function () {
        if (this.cs.ps) throw new c(a.FAILED_PRECONDITION, "The client has already been terminated.");
      },
      /** Disables the network connection. Pending operations will not complete. */
      e.prototype.disableNetwork = function () {
        var e = this;
        return this.L_(), this.cs.enqueue(function () {
          return e.persistence.tc(!1), function (e) {
            return t.__awaiter(this, void 0, void 0, function () {
              var n;
              return t.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (n = m(e)).Yu.add(0
                    /* UserDisabled */
                    ), [4
                    /*yield*/
                    , zo(n)];

                  case 1:
                    return t.sent(), // Set the OnlineState to Offline so get()s return from cache, etc.
                    n.th.set("Offline"
                    /* Offline */
                    ), [2
                    /*return*/
                    ];
                }
              });
            });
          }(e.ph);
        });
      }, e.prototype.terminate = function () {
        var e = this;
        this.cs.Ds();
        var n = new dr();
        return this.cs.bs(function () {
          return t.__awaiter(e, void 0, void 0, function () {
            var e, r;
            return t.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 4,, 5]), // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                  this.ql && this.ql.stop(), [4
                  /*yield*/
                  , Bo(this.ph)];

                case 1:
                  return t.sent(), [4
                  /*yield*/
                  , this.Sh.Di()];

                case 2:
                  return t.sent(), [4
                  /*yield*/
                  , this.persistence.Di()];

                case 3:
                  // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                  return t.sent(), // `removeChangeListener` must be called after shutting down the
                  // RemoteStore as it will prevent the RemoteStore from retrieving
                  // auth tokens.
                  this.credentials.Yc(), n.resolve(), [3
                  /*break*/
                  , 5];

                case 4:
                  return e = t.sent(), r = Lr(e, "Failed to shutdown persistence"), n.reject(r), [3
                  /*break*/
                  , 5];

                case 5:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }), n.promise;
      },
      /**
       * Returns a Promise that resolves when all writes that were pending at the time this
       * method was called received server acknowledgement. An acknowledgement can be either acceptance
       * or rejection.
       */
      e.prototype.waitForPendingWrites = function () {
        var e = this;
        this.L_();
        var n = new dr();
        return this.cs.ws(function () {
          return function (e, n) {
            return t.__awaiter(this, void 0, void 0, function () {
              var r, i, o, s, u;
              return t.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    Xo((r = m(e)).ph) || l("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), t.label = 1;

                  case 1:
                    return t.trys.push([1, 3,, 4]), [4
                    /*yield*/
                    , function (t) {
                      var e = m(t);
                      return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (t) {
                        return e.Sr.qo(t);
                      });
                    }(r.ju)];

                  case 2:
                    return -1 === (i = t.sent()) ? [2
                    /*return*/
                    , void n.resolve()] : ((o = r.Lh.get(i) || []).push(n), r.Lh.set(i, o), [3
                    /*break*/
                    , 4]);

                  case 3:
                    return s = t.sent(), u = Lr(s, "Initialization of waitForPendingWrites() operation failed"), n.reject(u), [3
                    /*break*/
                    , 4];

                  case 4:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }(e.fi, n);
        }), n.promise;
      }, e.prototype.listen = function (t, e, n) {
        var r = this;
        this.L_();
        var i = new lu(n),
            o = new Fr(t, i, e);
        return this.cs.ws(function () {
          return Or(r.q_, o);
        }), function () {
          i.Zl(), r.cs.ws(function () {
            return Pr(r.q_, o);
          });
        };
      }, e.prototype.Q_ = function (e) {
        return t.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return t.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return this.L_(), [4
                /*yield*/
                , this.O_.promise];

              case 1:
                return i.sent(), n = new dr(), [2
                /*return*/
                , (this.cs.ws(function () {
                  return function (e, n, r) {
                    return t.__awaiter(this, void 0, void 0, function () {
                      var i, o, s;
                      return t.__generator(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return t.trys.push([0, 2,, 3]), [4
                            /*yield*/
                            , function (t, e) {
                              var n = m(t);
                              return n.persistence.runTransaction("read document", "readonly", function (t) {
                                return n.Cc.Cr(t, e);
                              });
                            }(e, n)];

                          case 1:
                            return (i = t.sent()) instanceof kn ? r.resolve(i) : i instanceof Rn ? r.resolve(null) : r.reject(new c(a.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3
                            /*break*/
                            , 3];

                          case 2:
                            return o = t.sent(), s = Lr(o, "Failed to get document '" + n + " from cache"), r.reject(s), [3
                            /*break*/
                            , 3];

                          case 3:
                            return [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  }(r.ju, e, n);
                }), n.promise)];
            }
          });
        });
      }, e.prototype.W_ = function (e, n) {
        return void 0 === n && (n = {}), t.__awaiter(this, void 0, void 0, function () {
          var r,
              i = this;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.L_(), [4
                /*yield*/
                , this.O_.promise];

              case 1:
                return t.sent(), r = new dr(), [2
                /*return*/
                , (this.cs.ws(function () {
                  return function (t, e, n, r, i) {
                    var o = new lu({
                      next: function (o) {
                        // Remove query first before passing event to user to avoid
                        // user actions affecting the now stale query.
                        e.ws(function () {
                          return Pr(t, s);
                        });
                        var u = o.docs.has(n);
                        !u && o.fromCache ? // TODO(dimond): If we're online and the document doesn't
                        // exist then we resolve with a doc.exists set to false. If
                        // we're offline however, we reject the Promise in this
                        // case. Two options: 1) Cache the negative response from
                        // the server so we can deliver that even when you're
                        // offline 2) Actually reject the Promise in the online case
                        // if the document doesn't exist.
                        i.reject(new c(a.UNAVAILABLE, "Failed to get document because the client is offline.")) : u && o.fromCache && r && "server" === r.source ? i.reject(new c(a.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                      },
                      error: function (t) {
                        return i.reject(t);
                      }
                    }),
                        s = new Fr(Un(n.path), o, {
                      includeMetadataChanges: !0,
                      Xs: !0
                    });
                    return Or(t, s);
                  }(i.q_, i.cs, e, n, r);
                }), r.promise)];
            }
          });
        });
      }, e.prototype.j_ = function (e) {
        return t.__awaiter(this, void 0, void 0, function () {
          var n,
              r = this;
          return t.__generator(this, function (i) {
            switch (i.label) {
              case 0:
                return this.L_(), [4
                /*yield*/
                , this.O_.promise];

              case 1:
                return i.sent(), n = new dr(), [2
                /*return*/
                , (this.cs.ws(function () {
                  return function (e, n, r) {
                    return t.__awaiter(this, void 0, void 0, function () {
                      var i, o, s, u, a, c;
                      return t.__generator(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return t.trys.push([0, 2,, 3]), [4
                            /*yield*/
                            , To(e, n,
                            /* usePreviousResults= */
                            !0)];

                          case 1:
                            return i = t.sent(), o = new ys(n, i.Fc), s = o.wh(i.documents), u = o.yr(s,
                            /* updateLimboDocuments= */
                            !1), r.resolve(u.snapshot), [3
                            /*break*/
                            , 3];

                          case 2:
                            return a = t.sent(), c = Lr(a, "Failed to execute query '" + n + " against cache"), r.reject(c), [3
                            /*break*/
                            , 3];

                          case 3:
                            return [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  }(r.ju, e, n);
                }), n.promise)];
            }
          });
        });
      }, e.prototype.K_ = function (e, n) {
        return void 0 === n && (n = {}), t.__awaiter(this, void 0, void 0, function () {
          var r,
              i = this;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.L_(), [4
                /*yield*/
                , this.O_.promise];

              case 1:
                return t.sent(), r = new dr(), [2
                /*return*/
                , (this.cs.ws(function () {
                  return function (t, e, n, r, i) {
                    var o = new lu({
                      next: function (n) {
                        // Remove query first before passing event to user to avoid
                        // user actions affecting the now stale query.
                        e.ws(function () {
                          return Pr(t, s);
                        }), n.fromCache && "server" === r.source ? i.reject(new c(a.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                      },
                      error: function (t) {
                        return i.reject(t);
                      }
                    }),
                        s = new Fr(n, o, {
                      includeMetadataChanges: !0,
                      Xs: !0
                    });
                    return Or(t, s);
                  }(i.q_, i.cs, e, n, r);
                }), r.promise)];
            }
          });
        });
      }, e.prototype.write = function (e) {
        var n = this;
        this.L_();
        var r = new dr();
        return this.cs.ws(function () {
          return function (e, n, r) {
            return t.__awaiter(this, void 0, void 0, function () {
              var i, o, s, u;
              return t.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    i = Qs(e), t.label = 1;

                  case 1:
                    return t.trys.push([1, 5,, 6]), [4
                    /*yield*/
                    ,
                    /* Accepts locally generated Mutations and commit them to storage. */
                    function (t, e) {
                      var n,
                          r = m(t),
                          i = ot.now(),
                          o = e.reduce(function (t, e) {
                        return t.add(e.key);
                      }, Ot());
                      return r.persistence.runTransaction("Locally write mutations", "readwrite", function (t) {
                        return r.Cc.kr(t, o).next(function (o) {
                          n = o;

                          for ( // For non-idempotent mutations (such as `FieldValue.increment()`),
                          // we record the base state in a separate patch mutation. This is
                          // later used to guarantee consistent values and prevents flicker
                          // even if the backend sends us an update that already includes our
                          // transform.
                          var s = [], u = 0, a = e; u < a.length; u++) {
                            var c = a[u],
                                h = yn(c, n.get(c.key));
                            null != h && // NOTE: The base state should only be applied if there's some
                            // existing document to override, so use a Precondition of
                            // exists=true
                            s.push(new _n(c.key, h, xn(h.proto.mapValue), fn.exists(!0)));
                          }

                          return r.Sr.ko(t, i, s, e);
                        });
                      }).then(function (t) {
                        var e = t.lr(n);
                        return {
                          batchId: t.batchId,
                          wr: e
                        };
                      });
                    }(i.ju, n)];

                  case 2:
                    return o = t.sent(), i.Sh.xi(o.batchId), function (t, e, n) {
                      var r = t.Oh[t.currentUser.ti()];
                      r || (r = new bt(H)), r = r.ot(e, n), t.Oh[t.currentUser.ti()] = r;
                    }(i, o.batchId, r), [4
                    /*yield*/
                    , Vs(i, o.wr)];

                  case 3:
                    return t.sent(), [4
                    /*yield*/
                    , is(i.ph)];

                  case 4:
                    return t.sent(), [3
                    /*break*/
                    , 6];

                  case 5:
                    return s = t.sent(), u = Lr(s, "Failed to persist write"), r.reject(u), [3
                    /*break*/
                    , 6];

                  case 6:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }(n.fi, e, r);
        }), r.promise;
      }, e.prototype.U = function () {
        return this.bl.U;
      }, e.prototype.G_ = function (e) {
        var n = this;
        this.L_();
        var r = new lu(e);
        return this.cs.ws(function () {
          return t.__awaiter(n, void 0, void 0, function () {
            return t.__generator(this, function (t) {
              return [2
              /*return*/
              , function (t, e) {
                m(t).qs.add(e), // Immediately fire an initial event, indicating all existing listeners
                // are in-sync.
                e.next();
              }(this.q_, r)];
            });
          });
        }), function () {
          r.Zl(), n.cs.ws(function () {
            return t.__awaiter(n, void 0, void 0, function () {
              return t.__generator(this, function (t) {
                return [2
                /*return*/
                , function (t, e) {
                  m(t).qs.delete(e);
                }(this.q_, r)];
              });
            });
          });
        };
      }, Object.defineProperty(e.prototype, "z_", {
        get: function () {
          // Technically, the asyncQueue is still running, but only accepting operations
          // related to termination or supposed to be run after termination. It is effectively
          // terminated to the eyes of users.
          return this.cs.ps;
        },
        enumerable: !1,
        configurable: !0
      }),
      /**
       * Takes an updateFunction in which a set of reads and writes can be performed
       * atomically. In the updateFunction, the client can read and write values
       * using the supplied transaction object. After the updateFunction, all
       * changes will be committed. If a retryable error occurs (ex: some other
       * client has changed any of the data referenced), then the updateFunction
       * will be called again after a backoff. If the updateFunction still fails
       * after all retries, then the transaction will be rejected.
       *
       * The transaction object passed to the updateFunction contains methods for
       * accessing documents and collections. Unlike other datastore access, data
       * accessed with the transaction will not reflect local changes that have not
       * been committed. For this reason, it is required that all reads are
       * performed before any writes. Transactions must be performed while online.
       */
      e.prototype.transaction = function (t) {
        var e = this;
        this.L_();
        var n = new dr();
        return this.cs.ws(function () {
          return new Wu(e.cs, e.Ku, t, n).run(), Promise.resolve();
        }), n.promise;
      }, e;
    }();
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * TransactionRunner encapsulates the logic needed to run and retry transactions
     * with backoff.
     */


    function Qu(t) {
      /**
      * Returns true if obj is an object and contains at least one of the specified
      * methods.
      */
      return function (t, e) {
        if ("object" != typeof t || null === t) return !1;

        for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
          var o = i[r];
          if (o in n && "function" == typeof n[o]) return !0;
        }

        return !1;
      }(t);
    }

    var Hu =
    /** @class */
    function () {
      function t(t, e, n, r, i) {
        this.U = t, this.timestampsInSnapshots = e, this.H_ = n, this.Y_ = r, this.J_ = i;
      }

      return t.prototype.X_ = function (t) {
        switch (Jt(t)) {
          case 0
          /* NullValue */
          :
            return null;

          case 1
          /* BooleanValue */
          :
            return t.booleanValue;

          case 2
          /* NumberValue */
          :
            return se(t.integerValue || t.doubleValue);

          case 3
          /* TimestampValue */
          :
            return this.Z_(t.timestampValue);

          case 4
          /* ServerTimestampValue */
          :
            return this.tf(t);

          case 5
          /* StringValue */
          :
            return t.stringValue;

          case 6
          /* BlobValue */
          :
            return this.J_(ue(t.bytesValue));

          case 7
          /* RefValue */
          :
            return this.ef(t.referenceValue);

          case 8
          /* GeoPointValue */
          :
            return this.nf(t.geoPointValue);

          case 9
          /* ArrayValue */
          :
            return this.sf(t.arrayValue);

          case 10
          /* ObjectValue */
          :
            return this.if(t.mapValue);

          default:
            throw y();
        }
      }, t.prototype.if = function (t) {
        var e = this,
            n = {};
        return _(t.fields || {}, function (t, r) {
          n[t] = e.X_(r);
        }), n;
      }, t.prototype.nf = function (t) {
        return new Eu(se(t.latitude), se(t.longitude));
      }, t.prototype.sf = function (t) {
        var e = this;
        return (t.values || []).map(function (t) {
          return e.X_(t);
        });
      }, t.prototype.tf = function (t) {
        switch (this.H_) {
          case "previous":
            var e = Yt(t);
            return null == e ? null : this.X_(e);

          case "estimate":
            return this.Z_($t(t));

          default:
            return null;
        }
      }, t.prototype.Z_ = function (t) {
        var e = oe(t),
            n = new ot(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
      }, t.prototype.ef = function (t) {
        var e = E.g(t);
        g(He(e));
        var n = new rt(e.get(1), e.get(3)),
            r = new A(e.u(5));
        return n.isEqual(this.U) || // TODO(b/64130202): Somehow support foreign references.
        p("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.U.projectId + "/" + this.U.database + ") instead."), this.Y_(r);
      }, t;
    }(),
        Yu = ui.ho,
        $u =
    /** @class */
    function () {
      function t(t) {
        var e, n, r, i, o;

        if (void 0 === t.host) {
          if (void 0 !== t.ssl) throw new c(a.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
          this.host = "firestore.googleapis.com", this.ssl = !0;
        } else O("settings", "non-empty string", "host", t.host), this.host = t.host, P("settings", "boolean", "ssl", t.ssl), this.ssl = null === (e = t.ssl) || void 0 === e || e;

        if (j("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "experimentalAutoDetectLongPolling", "ignoreUndefinedProperties"]), P("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, P("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), P("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? p("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && p("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, P("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = ui._o;else {
          if (t.cacheSizeBytes !== Yu && t.cacheSizeBytes < ui.lo) throw new c(a.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + ui.lo);
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        P("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.experimentalForceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i, P("settings", "boolean", "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling), this.experimentalAutoDetectLongPolling = null !== (o = t.experimentalAutoDetectLongPolling) && void 0 !== o && o, function (t, e, n, r) {
          if (!0 === e && !0 === r) throw new c(a.INVALID_ARGUMENT, "experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.");
        }(0, t.experimentalForceLongPolling, 0, t.experimentalAutoDetectLongPolling);
      }

      return t.prototype.isEqual = function (t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
      }, t;
    }(),
        Xu =
    /** @class */
    function () {
      // Note: We are using `MemoryComponentProvider` as a default
      // ComponentProvider to ensure backwards compatibility with the format
      // expected by the console build.
      function e(n, r, i, o) {
        var s = this;

        if (void 0 === i && (i = new cu()), void 0 === o && (o = new fu()), this.rf = i, this.af = o, this.cf = null, // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.uf = new xr(), this.INTERNAL = {
          delete: function () {
            return t.__awaiter(s, void 0, void 0, function () {
              return t.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    // The client must be initalized to ensure that all subsequent API usage
                    // throws an exception.
                    return this.hf(), [4
                    /*yield*/
                    , this.lf.terminate()];

                  case 1:
                    // The client must be initalized to ensure that all subsequent API usage
                    // throws an exception.
                    return t.sent(), [2
                    /*return*/
                    ];
                }
              });
            });
          }
        }, "object" == typeof n.options) {
          // This is very likely a Firebase app object
          // TODO(b/34177605): Can we somehow use instanceof?
          var u = n;
          this.cf = u, this.__ = e._f(u), this.ff = u.name, this.df = new Oo(r);
        } else {
          var h = n;
          if (!h.projectId) throw new c(a.INVALID_ARGUMENT, "Must provide projectId");
          this.__ = new rt(h.projectId, h.database), // Use a default persistenceKey that lines up with FirebaseApp.
          this.ff = "[DEFAULT]", this.df = new Ro();
        }

        this.wf = new $u({});
      }

      return Object.defineProperty(e.prototype, "mf", {
        get: function () {
          return this.Tf || ( // Lazy initialize UserDataReader once the settings are frozen
          this.Tf = new ku(this.__, this.wf.ignoreUndefinedProperties)), this.Tf;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.settings = function (t) {
        D("Firestore.settings", arguments, 1), k("Firestore.settings", "object", 1, t), t.merge && // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this.wf), t)).merge;
        var e = new $u(t);
        if (this.lf && !this.wf.isEqual(e)) throw new c(a.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.wf = e, void 0 !== e.credentials && (this.df = function (t) {
          if (!t) return new Ro();

          switch (t.type) {
            case "gapi":
              var e = t.client; // Make sure this really is a Gapi client.

              return g(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Vo(e, t.sessionIndex || "0");

            case "provider":
              return t.client;

            default:
              throw new c(a.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
          }
        }(e.credentials));
      }, e.prototype.enableNetwork = function () {
        return this.hf(), this.lf.enableNetwork();
      }, e.prototype.disableNetwork = function () {
        return this.hf(), this.lf.disableNetwork();
      }, e.prototype.enablePersistence = function (t) {
        var e, n;
        if (this.lf) throw new c(a.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1,
            i = !1;
        if (t && (void 0 !== t.experimentalTabSynchronization && p("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new c(a.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
        return this.Ef(this.rf, this.af, {
          jl: !0,
          cacheSizeBytes: this.wf.cacheSizeBytes,
          synchronizeTabs: r,
          ka: i
        });
      }, e.prototype.clearPersistence = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e,
              n = this;
          return t.__generator(this, function (r) {
            if (void 0 !== this.lf && !this.lf.z_) throw new c(a.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
            return e = new dr(), [2
            /*return*/
            , (this.uf.bs(function () {
              return t.__awaiter(n, void 0, void 0, function () {
                var n;
                return t.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return t.trys.push([0, 2,, 3]), [4
                      /*yield*/
                      , this.rf.clearPersistence(this.__, this.ff)];

                    case 1:
                      return t.sent(), e.resolve(), [3
                      /*break*/
                      , 3];

                    case 2:
                      return n = t.sent(), e.reject(n), [3
                      /*break*/
                      , 3];

                    case 3:
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }), e.promise)];
          });
        });
      }, e.prototype.terminate = function () {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
      }, Object.defineProperty(e.prototype, "If", {
        get: function () {
          return this.hf(), this.lf.z_;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.waitForPendingWrites = function () {
        return this.hf(), this.lf.waitForPendingWrites();
      }, e.prototype.onSnapshotsInSync = function (t) {
        if (this.hf(), Qu(t)) return this.lf.G_(t);
        k("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
          next: t
        };
        return this.lf.G_(e);
      }, e.prototype.hf = function () {
        return this.lf || // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Ef(new cu(), new fu(), {
          jl: !1
        }), this.lf;
      }, e.prototype.Af = function () {
        return new nt(this.__, this.ff, this.wf.host, this.wf.ssl, this.wf.experimentalForceLongPolling, this.wf.experimentalAutoDetectLongPolling);
      }, e.prototype.Ef = function (t, e, n) {
        var r = this.Af();
        return this.lf = new Ku(this.df, this.uf), this.lf.start(r, t, e, n);
      }, e._f = function (t) {
        if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new c(a.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e,
            n = t.options.projectId;
        if (!n || "string" != typeof n) throw new c(a.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new rt(n);
      }, Object.defineProperty(e.prototype, "app", {
        get: function () {
          if (!this.cf) throw new c(a.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
          return this.cf;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.collection = function (t) {
        return D("Firestore.collection", arguments, 1), k("Firestore.collection", "non-empty string", 1, t), this.hf(), new la(E.g(t), this,
        /* converter= */
        null);
      }, e.prototype.doc = function (t) {
        return D("Firestore.doc", arguments, 1), k("Firestore.doc", "non-empty string", 1, t), this.hf(), ta.Rf(E.g(t), this,
        /* converter= */
        null);
      }, e.prototype.collectionGroup = function (t) {
        if (D("Firestore.collectionGroup", arguments, 1), k("Firestore.collectionGroup", "non-empty string", 1, t), t.indexOf("/") >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.hf(), new ha(
        /**
        * Creates a new Query for a collection group query that matches all documents
        * within the provided collection group.
        */
        function (t) {
          return new Pn(E.P(), t);
        }(t), this,
        /* converter= */
        null);
      }, e.prototype.runTransaction = function (t) {
        var e = this;
        return D("Firestore.runTransaction", arguments, 1), k("Firestore.runTransaction", "function", 1, t), this.hf().transaction(function (n) {
          return t(new Ju(e, n));
        });
      }, e.prototype.batch = function () {
        return this.hf(), new Zu(this);
      }, Object.defineProperty(e, "logLevel", {
        get: function () {
          switch (f()) {
            case n.LogLevel.DEBUG:
              return "debug";

            case n.LogLevel.ERROR:
              return "error";

            case n.LogLevel.SILENT:
              return "silent";

            case n.LogLevel.WARN:
              return "warn";

            case n.LogLevel.INFO:
              return "info";

            case n.LogLevel.VERBOSE:
              return "verbose";

            default:
              // The default log level is error
              return "error";
          }
        },
        enumerable: !1,
        configurable: !0
      }), e.setLogLevel = function (t) {
        var e;
        D("Firestore.setLogLevel", arguments, 1), U("setLogLevel", ["debug", "error", "silent", "warn", "info", "verbose"], 1, t), e = t, h.setLogLevel(e);
      }, // Note: this is not a property because the minifier can't work correctly with
      // the way TypeScript compiler outputs properties.
      e.prototype.gf = function () {
        return this.wf.timestampsInSnapshots;
      }, // Visible for testing.
      e.prototype.Pf = function () {
        return this.wf;
      }, e;
    }(),
        Ju =
    /** @class */
    function () {
      function t(t, e) {
        this.yf = t, this.Vf = e;
      }

      return t.prototype.get = function (t) {
        var e = this;
        D("Transaction.get", arguments, 1);
        var n = ya("Transaction.get", t, this.yf);
        return this.Vf.v_([n.f_]).then(function (t) {
          if (!t || 1 !== t.length) return y();
          var r = t[0];
          if (r instanceof Rn) return new na(e.yf, n.f_, null,
          /* fromCache= */
          !1,
          /* hasPendingWrites= */
          !1, n.d_);
          if (r instanceof kn) return new na(e.yf, n.f_, r,
          /* fromCache= */
          !1,
          /* hasPendingWrites= */
          !1, n.d_);
          throw y();
        });
      }, t.prototype.set = function (t, e, n) {
        L("Transaction.set", arguments, 2, 3);
        var r = ya("Transaction.set", t, this.yf);
        n = pa("Transaction.set", n);
        var i = ma(r.d_, e, n),
            o = Ru(this.yf.mf, "Transaction.set", r.f_, i, null !== r.d_, n);
        return this.Vf.set(r.f_, o), this;
      }, t.prototype.update = function (t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];

        return "string" == typeof e || e instanceof du ? (x("Transaction.update", arguments, 3), r = ya("Transaction.update", t, this.yf), i = Pu(this.yf.mf, "Transaction.update", r.f_, e, n, o)) : (D("Transaction.update", arguments, 2), r = ya("Transaction.update", t, this.yf), i = Ou(this.yf.mf, "Transaction.update", r.f_, e)), this.Vf.update(r.f_, i), this;
      }, t.prototype.delete = function (t) {
        D("Transaction.delete", arguments, 1);
        var e = ya("Transaction.delete", t, this.yf);
        return this.Vf.delete(e.f_), this;
      }, t;
    }(),
        Zu =
    /** @class */
    function () {
      function t(t) {
        this.yf = t, this.pf = [], this.bf = !1;
      }

      return t.prototype.set = function (t, e, n) {
        L("WriteBatch.set", arguments, 2, 3), this.vf();
        var r = ya("WriteBatch.set", t, this.yf);
        n = pa("WriteBatch.set", n);
        var i = ma(r.d_, e, n),
            o = Ru(this.yf.mf, "WriteBatch.set", r.f_, i, null !== r.d_, n);
        return this.pf = this.pf.concat(o.w_(r.f_, fn.ze())), this;
      }, t.prototype.update = function (t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];

        return this.vf(), "string" == typeof e || e instanceof du ? (x("WriteBatch.update", arguments, 3), r = ya("WriteBatch.update", t, this.yf), i = Pu(this.yf.mf, "WriteBatch.update", r.f_, e, n, o)) : (D("WriteBatch.update", arguments, 2), r = ya("WriteBatch.update", t, this.yf), i = Ou(this.yf.mf, "WriteBatch.update", r.f_, e)), this.pf = this.pf.concat(i.w_(r.f_, fn.exists(!0))), this;
      }, t.prototype.delete = function (t) {
        D("WriteBatch.delete", arguments, 1), this.vf();
        var e = ya("WriteBatch.delete", t, this.yf);
        return this.pf = this.pf.concat(new Nn(e.f_, fn.ze())), this;
      }, t.prototype.commit = function () {
        return this.vf(), this.bf = !0, this.pf.length > 0 ? this.yf.hf().write(this.pf) : Promise.resolve();
      }, t.prototype.vf = function () {
        if (this.bf) throw new c(a.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
      }, t;
    }(),
        ta =
    /** @class */
    function (e) {
      function n(t, n, r) {
        var i = this;
        return (i = e.call(this, n.__, t, r) || this).f_ = t, i.firestore = n, i.d_ = r, i.lf = i.firestore.hf(), i;
      }

      return t.__extends(n, e), n.Rf = function (t, e, r) {
        if (t.length % 2 != 0) throw new c(a.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.R() + " has " + t.length);
        return new n(new A(t), e, r);
      }, Object.defineProperty(n.prototype, "id", {
        get: function () {
          return this.f_.path._();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "parent", {
        get: function () {
          return new la(this.f_.path.h(), this.firestore, this.d_);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "path", {
        get: function () {
          return this.f_.path.R();
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.collection = function (t) {
        if (D("DocumentReference.collection", arguments, 1), k("DocumentReference.collection", "non-empty string", 1, t), !t) throw new c(a.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = E.g(t);
        return new la(this.f_.path.child(e), this.firestore,
        /* converter= */
        null);
      }, n.prototype.isEqual = function (t) {
        if (!(t instanceof n)) throw G("isEqual", "DocumentReference", 1, t);
        return this.firestore === t.firestore && this.f_.isEqual(t.f_) && this.d_ === t.d_;
      }, n.prototype.set = function (t, e) {
        L("DocumentReference.set", arguments, 1, 2), e = pa("DocumentReference.set", e);
        var n = ma(this.d_, t, e),
            r = Ru(this.firestore.mf, "DocumentReference.set", this.f_, n, null !== this.d_, e);
        return this.lf.write(r.w_(this.f_, fn.ze()));
      }, n.prototype.update = function (t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];

        return "string" == typeof t || t instanceof du ? (x("DocumentReference.update", arguments, 2), n = Pu(this.firestore.mf, "DocumentReference.update", this.f_, t, e, r)) : (D("DocumentReference.update", arguments, 1), n = Ou(this.firestore.mf, "DocumentReference.update", this.f_, t)), this.lf.write(n.w_(this.f_, fn.exists(!0)));
      }, n.prototype.delete = function () {
        return D("DocumentReference.delete", arguments, 0), this.lf.write([new Nn(this.f_, fn.ze())]);
      }, n.prototype.onSnapshot = function () {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];

        L("DocumentReference.onSnapshot", arguments, 1, 4);
        var s = {
          includeMetadataChanges: !1
        },
            u = 0;
        "object" != typeof i[u] || Qu(i[u]) || (j("DocumentReference.onSnapshot", s = i[u], ["includeMetadataChanges"]), P("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u++);
        var a = {
          includeMetadataChanges: s.includeMetadataChanges
        };

        if (Qu(i[u])) {
          var c = i[u];
          i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c);
        } else k("DocumentReference.onSnapshot", "function", u, i[u]), R("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), R("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);

        var h = {
          next: function (t) {
            i[u] && i[u](r.Sf(t));
          },
          error: i[u + 1],
          complete: i[u + 2]
        };
        return this.lf.listen(Un(this.f_.path), a, h);
      }, n.prototype.get = function (t) {
        var e = this;
        L("DocumentReference.get", arguments, 0, 1), va("DocumentReference.get", t);
        var n = this.firestore.hf();
        return t && "cache" === t.source ? n.Q_(this.f_).then(function (t) {
          return new na(e.firestore, e.f_, t,
          /*fromCache=*/
          !0, t instanceof kn && t.Je, e.d_);
        }) : n.W_(this.f_, t).then(function (t) {
          return e.Sf(t);
        });
      }, n.prototype.withConverter = function (t) {
        return new n(this.f_, this.firestore, t);
      },
      /**
       * Converts a ViewSnapshot that contains the current document to a
       * DocumentSnapshot.
       */
      n.prototype.Sf = function (t) {
        var e = t.docs.get(this.f_);
        return new na(this.firestore, this.f_, e, t.fromCache, t.hasPendingWrites, this.d_);
      }, n;
    }(Au),
        ea =
    /** @class */
    function () {
      function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e
        /**
        * Returns true if this `SnapshotMetadata` is equal to the provided one.
        *
        * @param other The `SnapshotMetadata` to compare against.
        * @return true if this `SnapshotMetadata` is equal to the provided one.
        */
        ;
      }

      return t.prototype.isEqual = function (t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
      }, t;
    }(),
        na =
    /** @class */
    function () {
      function t(t, e, n, r, i, o) {
        this.yf = t, this.f_ = e, this.Df = n, this.Cf = r, this.Nf = i, this.d_ = o;
      }

      return t.prototype.data = function (t) {
        var e = this;

        if (L("DocumentSnapshot.data", arguments, 0, 1), t = da("DocumentSnapshot.data", t), this.Df) {
          // We only want to use the converter and create a new DocumentSnapshot
          // if a converter has been provided.
          if (this.d_) {
            var n = new ra(this.yf, this.f_, this.Df, this.Cf, this.Nf,
            /* converter= */
            null);
            return this.d_.fromFirestore(n, t);
          }

          return new Hu(this.yf.__, this.yf.gf(), t.serverTimestamps || "none", function (t) {
            return new ta(t, e.yf,
            /* converter= */
            null);
          }, function (t) {
            return new et(t);
          }).X_(this.Df.rn());
        }
      }, t.prototype.get = function (t, e) {
        var n = this;

        if (L("DocumentSnapshot.get", arguments, 1, 2), e = da("DocumentSnapshot.get", e), this.Df) {
          var r = this.Df.data().field(qu("DocumentSnapshot.get", t, this.f_));
          if (null !== r) return new Hu(this.yf.__, this.yf.gf(), e.serverTimestamps || "none", function (t) {
            return new ta(t, n.yf, n.d_);
          }, function (t) {
            return new et(t);
          }).X_(r);
        }
      }, Object.defineProperty(t.prototype, "id", {
        get: function () {
          return this.f_.path._();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "ref", {
        get: function () {
          return new ta(this.f_, this.yf, this.d_);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "exists", {
        get: function () {
          return null !== this.Df;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "metadata", {
        get: function () {
          return new ea(this.Nf, this.Cf);
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw G("isEqual", "DocumentSnapshot", 1, e);
        return this.yf === e.yf && this.Cf === e.Cf && this.f_.isEqual(e.f_) && (null === this.Df ? null === e.Df : this.Df.isEqual(e.Df)) && this.d_ === e.d_;
      }, t;
    }(),
        ra =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n.prototype.data = function (t) {
        return e.prototype.data.call(this, t);
      }, n;
    }(na);
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // settings() defaults:


    function ia(t, e, n, r, i, o, s) {
      var u;

      if (i.p()) {
        if ("array-contains"
        /* ARRAY_CONTAINS */
        === o || "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        === o) throw new c(a.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");

        if ("in"
        /* IN */
        === o || "not-in"
        /* NOT_IN */
        === o) {
          ua(s, o);

          for (var h = [], f = 0, l = s; f < l.length; f++) {
            var p = l[f];
            h.push(sa(r, t, p));
          }

          u = {
            arrayValue: {
              values: h
            }
          };
        } else u = sa(r, t, s);
      } else "in"
      /* IN */
      !== o && "not-in"
      /* NOT_IN */
      !== o && "array-contains-any"
      /* ARRAY_CONTAINS_ANY */
      !== o || ua(s, o), u = Vu(n, e, s,
      /* allowArrays= */
      "in"
      /* IN */
      === o || "not-in"
      /* NOT_IN */
      === o);

      var d = Jn.create(i, o, u);
      return function (t, e) {
        if (e.hn()) {
          var n = qn(t);
          if (null !== n && !n.isEqual(e.field)) throw new c(a.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
          var r = Mn(t);
          null !== r && aa(t, e.field, r);
        }

        var i = function (t, e) {
          for (var n = 0, r = t.filters; n < r.length; n++) {
            var i = r[n];
            if (e.indexOf(i.op) >= 0) return i.op;
          }

          return null;
        }(t,
        /**
        * Given an operator, returns the set of operators that cannot be used with it.
        *
        * Operators in a query must adhere to the following set of rules:
        * 1. Only one array operator is allowed.
        * 2. Only one disjunctive operator is allowed.
        * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
        * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
        *
        * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
        * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
        */
        function (t) {
          switch (t) {
            case "!="
            /* NOT_EQUAL */
            :
              return ["!="
              /* NOT_EQUAL */
              , "not-in"
              /* NOT_IN */
              ];

            case "array-contains"
            /* ARRAY_CONTAINS */
            :
              return ["array-contains"
              /* ARRAY_CONTAINS */
              , "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              , "not-in"
              /* NOT_IN */
              ];

            case "in"
            /* IN */
            :
              return ["array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              , "in"
              /* IN */
              , "not-in"
              /* NOT_IN */
              ];

            case "array-contains-any"
            /* ARRAY_CONTAINS_ANY */
            :
              return ["array-contains"
              /* ARRAY_CONTAINS */
              , "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              , "in"
              /* IN */
              , "not-in"
              /* NOT_IN */
              ];

            case "not-in"
            /* NOT_IN */
            :
              return ["array-contains"
              /* ARRAY_CONTAINS */
              , "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              , "in"
              /* IN */
              , "not-in"
              /* NOT_IN */
              , "!="
              /* NOT_EQUAL */
              ];

            default:
              return [];
          }
        }(e.op));

        if (null !== i) // Special case when it's a duplicate op to give a slightly clearer error message.
          throw i === e.op ? new c(a.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new c(a.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
      }(t, d), d;
    }

    function oa(t, e, n) {
      if (null !== t.startAt) throw new c(a.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== t.endAt) throw new c(a.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      var r = new fr(e, n);
      return function (t, e) {
        if (null === Mn(t)) {
          // This is the first order by. It must match any inequality.
          var n = qn(t);
          null !== n && aa(t, n, e.field);
        }
      }(t, r), r
      /**
      * Create a Bound from a query and a document.
      *
      * Note that the Bound will always include the key of the document
      * and so only the provided document will compare equal to the returned
      * position.
      *
      * Will throw if the document does not contain all fields of the order by
      * of the query or if any of the fields in the order by are an uncommitted
      * server timestamp.
      */

      /**
      * Parses the given documentIdValue into a ReferenceValue, throwing
      * appropriate errors if the value is anything other than a DocumentReference
      * or String, or if the string is malformed.
      */
      ;
    }

    function sa(t, e, n) {
      if ("string" == typeof n) {
        if ("" === n) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!jn(e) && -1 !== n.indexOf("/")) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
        var r = e.path.child(E.g(n));
        if (!A.F(r)) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
        return ae(t, new A(r));
      }

      if (n instanceof Au) return ae(t, n.f_);
      throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + M(n) + ".");
    }
    /**
     * Validates that the value passed into a disjunctive filter satisfies all
     * array requirements.
     */


    function ua(t, e) {
      if (!Array.isArray(t) || 0 === t.length) throw new c(a.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
      if (t.length > 10) throw new c(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");

      if ("in"
      /* IN */
      === e || "array-contains-any"
      /* ARRAY_CONTAINS_ANY */
      === e) {
        if (t.indexOf(null) >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter(function (t) {
          return Number.isNaN(t);
        }).length > 0) throw new c(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
      }
    }

    function aa(t, e, n) {
      if (!n.isEqual(e)) throw new c(a.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
    }

    function ca(t) {
      if (Fn(t) && 0 === t.on.length) throw new c(a.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }

    var ha =
    /** @class */
    function () {
      function e(t, e, n) {
        this.Ff = t, this.firestore = e, this.d_ = n;
      }

      return e.prototype.where = function (t, n, r) {
        D("Query.where", arguments, 3), q("Query.where", 3, r); // Enumerated from the WhereFilterOp type in index.d.ts.

        var i = U("Query.where", ["<"
        /* LESS_THAN */
        , "<="
        /* LESS_THAN_OR_EQUAL */
        , "=="
        /* EQUAL */
        , "!="
        /* NOT_EQUAL */
        , ">="
        /* GREATER_THAN_OR_EQUAL */
        , ">"
        /* GREATER_THAN */
        , "array-contains"
        /* ARRAY_CONTAINS */
        , "in"
        /* IN */
        , "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        , "not-in"
        /* NOT_IN */
        ], 2, n),
            o = qu("Query.where", t),
            s = ia(this.Ff, "Query.where", this.firestore.mf, this.firestore.__, o, i, r);
        return new e(function (t, e) {
          var n = t.filters.concat([e]);
          return new Pn(t.path, t.collectionGroup, t.on.slice(), n, t.limit, t.an, t.startAt, t.endAt);
        }(this.Ff, s), this.firestore, this.d_);
      }, e.prototype.orderBy = function (t, n) {
        var r;
        if (L("Query.orderBy", arguments, 1, 2), R("Query.orderBy", "non-empty string", 2, n), void 0 === n || "asc" === n) r = "asc"
        /* ASCENDING */
        ;else {
          if ("desc" !== n) throw new c(a.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
          r = "desc"
          /* DESCENDING */
          ;
        }
        var i = qu("Query.orderBy", t),
            o = oa(this.Ff, i, r);
        return new e(function (t, e) {
          // TODO(dimond): validate that orderBy does not list the same key twice.
          var n = t.on.concat([e]);
          return new Pn(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.an, t.startAt, t.endAt);
        }(this.Ff, o), this.firestore, this.d_);
      }, e.prototype.limit = function (t) {
        return D("Query.limit", arguments, 1), k("Query.limit", "number", 1, t), z("Query.limit", 1, t), new e(Bn(this.Ff, t, "F"
        /* First */
        ), this.firestore, this.d_);
      }, e.prototype.limitToLast = function (t) {
        return D("Query.limitToLast", arguments, 1), k("Query.limitToLast", "number", 1, t), z("Query.limitToLast", 1, t), new e(Bn(this.Ff, t, "L"
        /* Last */
        ), this.firestore, this.d_);
      }, e.prototype.startAt = function (t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];

        x("Query.startAt", arguments, 1);
        var i = this.xf("Query.startAt", t, n,
        /*before=*/
        !0);
        return new e(Wn(this.Ff, i), this.firestore, this.d_);
      }, e.prototype.startAfter = function (t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];

        x("Query.startAfter", arguments, 1);
        var i = this.xf("Query.startAfter", t, n,
        /*before=*/
        !1);
        return new e(Wn(this.Ff, i), this.firestore, this.d_);
      }, e.prototype.endBefore = function (t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];

        x("Query.endBefore", arguments, 1);
        var i = this.xf("Query.endBefore", t, n,
        /*before=*/
        !0);
        return new e(Kn(this.Ff, i), this.firestore, this.d_);
      }, e.prototype.endAt = function (t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];

        x("Query.endAt", arguments, 1);
        var i = this.xf("Query.endAt", t, n,
        /*before=*/
        !1);
        return new e(Kn(this.Ff, i), this.firestore, this.d_);
      }, e.prototype.isEqual = function (t) {
        if (!(t instanceof e)) throw G("isEqual", "Query", 1, t);
        return this.firestore === t.firestore && Qn(this.Ff, t.Ff) && this.d_ === t.d_;
      }, e.prototype.withConverter = function (t) {
        return new e(this.Ff, this.firestore, t);
      },
      /** Helper function to create a bound from a document or fields */
      e.prototype.xf = function (e, n, r, i) {
        if (q(e, 1, n), n instanceof na) return D(e, t.__spreadArrays([n], r), 1), function (t, e, n, r, i) {
          if (!r) throw new c(a.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "()."); // Because people expect to continue/end a query at the exact document
          // provided, we need to use the implicit sort order rather than the explicit
          // sort order, because it's guaranteed to contain the document key. That way
          // the position becomes unambiguous and the query continues/ends exactly at
          // the provided document. Without the key (by using the explicit sort
          // orders), multiple documents could match the position, yielding duplicate
          // results.

          for (var o = [], s = 0, u = Gn(t); s < u.length; s++) {
            var h = u[s];
            if (h.field.p()) o.push(ae(e, r.key));else {
              var f = r.field(h.field);
              if (Ht(f)) throw new c(a.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + h.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');

              if (null === f) {
                var l = h.field.R();
                throw new c(a.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + l + "' (used as the orderBy) does not exist.");
              }

              o.push(f);
            }
          }

          return new ur(o, i);
        }(this.Ff, this.firestore.__, e, n.Df, i);
        var o = [n].concat(r);
        return function (t, e, n, r, i, o) {
          // Use explicit order by's because it has to match the query the user made
          var s = t.on;
          if (i.length > s.length) throw new c(a.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");

          for (var u = [], h = 0; h < i.length; h++) {
            var f = i[h];

            if (s[h].field.p()) {
              if ("string" != typeof f) throw new c(a.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof f);
              if (!jn(t) && -1 !== f.indexOf("/")) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + f + "' contains a slash.");
              var l = t.path.child(E.g(f));
              if (!A.F(l)) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + l + "' is not because it contains an odd number of segments.");
              var p = new A(l);
              u.push(ae(e, p));
            } else {
              var d = Vu(n, r, f);
              u.push(d);
            }
          }

          return new ur(u, o);
        }(this.Ff, this.firestore.__, this.firestore.mf, e, o, i);
      }, e.prototype.onSnapshot = function () {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];

        L("Query.onSnapshot", arguments, 1, 4);
        var s = {},
            u = 0;

        if ("object" != typeof i[u] || Qu(i[u]) || (j("Query.onSnapshot", s = i[u], ["includeMetadataChanges"]), P("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u++), Qu(i[u])) {
          var a = i[u];
          i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a);
        } else k("Query.onSnapshot", "function", u, i[u]), R("Query.onSnapshot", "function", u + 1, i[u + 1]), R("Query.onSnapshot", "function", u + 2, i[u + 2]);

        var c = {
          next: function (t) {
            i[u] && i[u](new fa(r.firestore, r.Ff, t, r.d_));
          },
          error: i[u + 1],
          complete: i[u + 2]
        };
        return ca(this.Ff), this.firestore.hf().listen(this.Ff, s, c);
      }, e.prototype.get = function (t) {
        var e = this;
        L("Query.get", arguments, 0, 1), va("Query.get", t), ca(this.Ff);
        var n = this.firestore.hf();
        return (t && "cache" === t.source ? n.j_(this.Ff) : n.K_(this.Ff, t)).then(function (t) {
          return new fa(e.firestore, e.Ff, t, e.d_);
        });
      }, e;
    }(),
        fa =
    /** @class */
    function () {
      function t(t, e, n, r) {
        this.yf = t, this.$f = e, this.kf = n, this.d_ = r, this.Mf = null, this.Of = null, this.metadata = new ea(n.hasPendingWrites, n.fromCache);
      }

      return Object.defineProperty(t.prototype, "docs", {
        get: function () {
          var t = [];
          return this.forEach(function (e) {
            return t.push(e);
          }), t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "empty", {
        get: function () {
          return this.kf.docs.m();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.kf.docs.size;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.forEach = function (t, e) {
        var n = this;
        L("QuerySnapshot.forEach", arguments, 1, 2), k("QuerySnapshot.forEach", "function", 1, t), this.kf.docs.forEach(function (r) {
          t.call(e, n.Lf(r, n.metadata.fromCache, n.kf.Wt.has(r.key)));
        });
      }, Object.defineProperty(t.prototype, "query", {
        get: function () {
          return new ha(this.$f, this.yf, this.d_);
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.docChanges = function (t) {
        t && (j("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), P("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.kf.Kt) throw new c(a.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.Mf && this.Of === e || (this.Mf =
        /**
        * Calculates the array of DocumentChanges for a given ViewSnapshot.
        *
        * Exported for testing.
        *
        * @param snapshot The ViewSnapshot that represents the expected state.
        * @param includeMetadataChanges Whether to include metadata changes.
        * @param converter A factory function that returns a QueryDocumentSnapshot.
        * @return An object that matches the DocumentChange API.
        */
        function (t, e, n) {
          if (t.Qt.m()) {
            // Special case the first snapshot because index calculation is easy and
            // fast
            var r = 0;
            return t.docChanges.map(function (e) {
              var i = n(e.doc, t.fromCache, t.Wt.has(e.doc.key));
              return e.doc, {
                type: "added",
                doc: i,
                oldIndex: -1,
                newIndex: r++
              };
            });
          } // A DocumentSet that is updated incrementally as changes are applied to use
          // to lookup the index of a document.


          var i = t.Qt;
          return t.docChanges.filter(function (t) {
            return e || 3
            /* Metadata */
            !== t.type;
          }).map(function (e) {
            var r = n(e.doc, t.fromCache, t.Wt.has(e.doc.key)),
                o = -1,
                s = -1;
            return 0
            /* Added */
            !== e.type && (o = i.indexOf(e.doc.key), i = i.delete(e.doc.key)), 1
            /* Removed */
            !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)), {
              type: ga(e.type),
              doc: r,
              oldIndex: o,
              newIndex: s
            };
          });
        }(this.kf, e, this.Lf.bind(this)), this.Of = e), this.Mf;
      },
      /** Check the equality. The call can be very expensive. */
      t.prototype.isEqual = function (e) {
        if (!(e instanceof t)) throw G("isEqual", "QuerySnapshot", 1, e);
        return this.yf === e.yf && Qn(this.$f, e.$f) && this.kf.isEqual(e.kf) && this.d_ === e.d_;
      }, t.prototype.Lf = function (t, e, n) {
        return new ra(this.yf, t.key, t, e, n, this.d_);
      }, t;
    }(),
        la =
    /** @class */
    function (e) {
      function n(t, n, r) {
        var i = this;
        if ((i = e.call(this, Un(t), n, r) || this).Bf = t, t.length % 2 != 1) throw new c(a.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.R() + " has " + t.length);
        return i;
      }

      return t.__extends(n, e), Object.defineProperty(n.prototype, "id", {
        get: function () {
          return this.Ff.path._();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "parent", {
        get: function () {
          var t = this.Ff.path.h();
          return t.m() ? null : new ta(new A(t), this.firestore,
          /* converter= */
          null);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "path", {
        get: function () {
          return this.Ff.path.R();
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.doc = function (t) {
        L("CollectionReference.doc", arguments, 0, 1), // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = Q.k()), k("CollectionReference.doc", "non-empty string", 1, t);
        var e = E.g(t);
        return ta.Rf(this.Ff.path.child(e), this.firestore, this.d_);
      }, n.prototype.add = function (t) {
        D("CollectionReference.add", arguments, 1);
        var e = this.d_ ? this.d_.toFirestore(t) : t;
        k("CollectionReference.add", "object", 1, e);
        var n = this.doc(); // Call set() with the converted value directly to avoid calling toFirestore() a second time.

        return new ta(n.f_, this.firestore, null).set(e).then(function () {
          return n;
        });
      }, n.prototype.withConverter = function (t) {
        return new n(this.Bf, this.firestore, t);
      }, n;
    }(ha);

    function pa(t, e) {
      if (void 0 === e) return {
        merge: !1
      };
      if (j(t, e, ["merge", "mergeFields"]), P(t, "boolean", "merge", e.merge), function (t, e, n, r, i) {
        void 0 !== r && function (t, e, n, r, i) {
          if (!(r instanceof Array)) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + M(r));

          for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + M(r[o]));
        }(t, e, n, r, i);
      }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function (t) {
        return "string" == typeof t || t instanceof du;
      }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new c(a.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
      return e;
    }

    function da(t, e) {
      return void 0 === e ? {} : (j(t, e, ["serverTimestamps"]), V(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e);
    }

    function va(t, e) {
      R(t, "object", 1, e), e && (j(t, e, ["source"]), V(t, 0, "source", e.source, ["default", "server", "cache"]));
    }

    function ya(t, e, n) {
      if (e instanceof Au) {
        if (e.firestore !== n) throw new c(a.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
      }

      throw G(t, "DocumentReference", 1, e);
    }

    function ga(t) {
      switch (t) {
        case 0
        /* Added */
        :
          return "added";

        case 2
        /* Modified */
        :
        case 3
        /* Metadata */
        :
          return "modified";

        case 1
        /* Removed */
        :
          return "removed";

        default:
          return y();
      }
    }
    /**
     * Converts custom model object of type T into DocumentData by applying the
     * converter if it exists.
     *
     * This function is used when converting user objects to DocumentData
     * because we want to provide the user with a more specific error message if
     * their set() or fails due to invalid data originating from a toFirestore()
     * call.
     */


    function ma(t, e, n) {
      // Cast to `any` in order to satisfy the union type constraint on
      // toFirestore().
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var wa =
    /** @class */
    function (e) {
      function n() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return t.__extends(n, e), n.serverTimestamp = function () {
        S("FieldValue.serverTimestamp", arguments);
        var t = new wu("serverTimestamp");
        return t.e_ = "FieldValue.serverTimestamp", new n(t);
      }, n.delete = function () {
        S("FieldValue.delete", arguments);
        var t = new gu("deleteField");
        return t.e_ = "FieldValue.delete", new n(t);
      }, n.arrayUnion = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        x("FieldValue.arrayUnion", arguments, 1);

        var r =
        /**
        * Returns a special value that can be used with {@link setDoc()} or {@link
        * updateDoc()} that tells the server to union the given elements with any array
        * value that already exists on the server. Each specified element that doesn't
        * already exist in the array will be added to the end. If the field being
        * modified is not already an array it will be overwritten with an array
        * containing exactly the specified elements.
        *
        * @param elements The elements to union into the array.
        * @return The `FieldValue` sentinel for use in a call to `setDoc()` or
        * `updateDoc()`.
        */
        function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; // NOTE: We don't actually parse the data until it's used in set() or
          // update() since we'd need the Firestore instance to do this.


          return x("arrayUnion()", arguments, 1), new _u("arrayUnion", t);
        }.apply(void 0, t);

        return r.e_ = "FieldValue.arrayUnion", new n(r);
      }, n.arrayRemove = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        x("FieldValue.arrayRemove", arguments, 1);

        var r = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; // NOTE: We don't actually parse the data until it's used in set() or
          // update() since we'd need the Firestore instance to do this.


          return x("arrayRemove()", arguments, 1), new bu("arrayRemove", t);
        }.apply(void 0, t);

        return r.e_ = "FieldValue.arrayRemove", new n(r);
      }, n.increment = function (t) {
        k("FieldValue.increment", "number", 1, t), D("FieldValue.increment", arguments, 1);

        var e = function (t) {
          return new Iu("increment", t);
        }(t);

        return e.e_ = "FieldValue.increment", new n(e);
      }, n.prototype.isEqual = function (t) {
        return this.l_.isEqual(t.l_);
      }, n;
    }(Tu),
        _a = {
      Firestore: Xu,
      GeoPoint: Eu,
      Timestamp: ot,
      Blob: et,
      Transaction: Ju,
      WriteBatch: Zu,
      DocumentReference: ta,
      DocumentSnapshot: na,
      Query: ha,
      QueryDocumentSnapshot: ra,
      QuerySnapshot: fa,
      CollectionReference: la,
      FieldPath: du,
      FieldValue: wa,
      setLogLevel: Xu.setLogLevel,
      CACHE_SIZE_UNLIMITED: Yu
    };
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Configures Firestore as part of the Firebase SDK by calling registerService.
     *
     * @param firebase The FirebaseNamespace to register Firestore with
     * @param firestoreFactory A factory function that returns a new Firestore
     *    instance.
     */

    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Registers the main Firestore build with the components framework.
     * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
     */


    function ba(t) {
      !function (t, e) {
        t.INTERNAL.registerComponent(new o.Component("firestore", function (t) {
          return function (t, e) {
            var n = new fu(),
                r = new hu(n);
            return new Xu(t, e, r, n);
          }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps(Object.assign({}, _a)));
      }(t), t.registerVersion("@firebase/firestore", "1.18.0");
    }

    ba(u.default), exports.__PRIVATE_registerFirestore = ba; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
    \*********************************************************************/

  /*! exports provided: default, ErrorCode, EventType, WebChannel, XhrIo, createWebChannelTransport */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorCode", function () {
      return ErrorCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventType", function () {
      return EventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebChannel", function () {
      return WebChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XhrIo", function () {
      return XhrIo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function () {
      return createWebChannelTransport;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };

      return extendStatics(d, b);
    };

    function __extends(d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
    var g,
        goog = goog || {},
        k = commonjsGlobal || self;

    function aa() {}

    function ba(a) {
      var b = typeof a;
      return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    }

    function ca(a) {
      var b = ba(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    }

    function n(a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    }

    function da(a) {
      return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa);
    }

    var ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        fa = 0;

    function ha(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }

    function ja(a, b, c) {
      if (!a) throw Error();

      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }

      return function () {
        return a.apply(b, arguments);
      };
    }

    function p(a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = ha : p = ja;
      return p.apply(null, arguments);
    }

    function ka(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    }

    var q = Date.now;

    function r(a, b) {
      function c() {}

      c.prototype = b.prototype;
      a.S = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
    }

    function u() {
      this.j = this.j;
      this.i = this.i;
    }

    var la = 0;
    u.prototype.j = !1;

    u.prototype.ja = function () {
      if (!this.j && (this.j = !0, this.G(), 0 != la)) {
        var a = da(this);
      }
    };

    u.prototype.G = function () {
      if (this.i) for (; this.i.length;) this.i.shift()();
    };

    var na = Array.prototype.indexOf ? function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;

      return -1;
    },
        oa = Array.prototype.forEach ? function (a, b, c) {
      Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
    };

    function pa(a) {
      a: {
        var b = qa;

        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }

        b = -1;
      }

      return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
    }

    function ra(a) {
      return Array.prototype.concat.apply([], arguments);
    }

    function sa(a) {
      var b = a.length;

      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];

        return c;
      }

      return [];
    }

    function ta(a) {
      return /^[\s\xa0]*$/.test(a);
    }

    var ua = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };

    function v(a, b) {
      return -1 != a.indexOf(b);
    }

    function xa(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }

    var w;

    a: {
      var ya = k.navigator;

      if (ya) {
        var za = ya.userAgent;

        if (za) {
          w = za;
          break a;
        }
      }

      w = "";
    }

    function Aa(a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    }

    function Ba(a) {
      var b = {};

      for (var c in a) b[c] = a[c];

      return b;
    }

    var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Da(a, b) {
      var c, d;

      for (var e = 1; e < arguments.length; e++) {
        d = arguments[e];

        for (c in d) a[c] = d[c];

        for (var f = 0; f < Ca.length; f++) c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    }

    function Ea(a) {
      Ea[" "](a);
      return a;
    }

    Ea[" "] = aa;

    function Fa(a, b) {
      var c = Ga;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    }

    var Ha = v(w, "Opera"),
        x = v(w, "Trident") || v(w, "MSIE"),
        Ia = v(w, "Edge"),
        Ja = Ia || x,
        Ka = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"),
        La = v(w.toLowerCase(), "webkit") && !v(w, "Edge");

    function Ma() {
      var a = k.document;
      return a ? a.documentMode : void 0;
    }

    var Na;

    a: {
      var Oa = "",
          Pa = function () {
        var a = w;
        if (Ka) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ia) return /Edge\/([\d\.]+)/.exec(a);
        if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (La) return /WebKit\/(\S+)/.exec(a);
        if (Ha) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();

      Pa && (Oa = Pa ? Pa[1] : "");

      if (x) {
        var Qa = Ma();

        if (null != Qa && Qa > parseFloat(Oa)) {
          Na = String(Qa);
          break a;
        }
      }

      Na = Oa;
    }

    var Ga = {};

    function Ra(a) {
      return Fa(a, function () {
        {
          var b = 0;
          var e = ua(String(Na)).split("."),
              f = ua(String(a)).split("."),
              h = Math.max(e.length, f.length);

          for (var m = 0; 0 == b && m < h; m++) {
            var c = e[m] || "",
                d = f[m] || "";

            do {
              c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
              d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
              if (0 == c[0].length && 0 == d[0].length) break;
              b = xa(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || xa(0 == c[2].length, 0 == d[2].length) || xa(c[2], d[2]);
              c = c[3];
              d = d[3];
            } while (0 == b);
          }
        }
        return 0 <= b;
      });
    }

    var Sa;

    if (k.document && x) {
      var Ta = Ma();
      Sa = Ta ? Ta : parseInt(Na, 10) || void 0;
    } else Sa = void 0;

    var Ua = Sa;

    var Va = !x || 9 <= Number(Ua),
        Wa = x && !Ra("9"),
        Xa = function () {
      if (!k.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
          b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });

      try {
        k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
      } catch (c) {}

      return a;
    }();

    function y(a, b) {
      this.type = a;
      this.a = this.target = b;
      this.defaultPrevented = !1;
    }

    y.prototype.b = function () {
      this.defaultPrevented = !0;
    };

    function A(a, b) {
      y.call(this, a ? a.type : "");
      this.relatedTarget = this.a = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.pointerId = 0;
      this.pointerType = "";
      this.c = null;

      if (a) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;

        if (b = a.relatedTarget) {
          if (Ka) {
            a: {
              try {
                Ea(b.nodeName);
                var e = !0;
                break a;
              } catch (f) {}

              e = !1;
            }

            e || (b = null);
          }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ya[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
      }
    }

    r(A, y);
    var Ya = {
      2: "touch",
      3: "pen",
      4: "mouse"
    };

    A.prototype.b = function () {
      A.S.b.call(this);
      var a = this.c;
      if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Wa) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };

    var C = "closure_listenable_" + (1E6 * Math.random() | 0),
        Za = 0;

    function $a(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.ca = e;
      this.key = ++Za;
      this.Y = this.Z = !1;
    }

    function ab(a) {
      a.Y = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.ca = null;
    }

    function bb(a) {
      this.src = a;
      this.a = {};
      this.b = 0;
    }

    bb.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();
      a = this.a[f];
      a || (a = this.a[f] = [], this.b++);
      var h = cb(a, b, d, e);
      -1 < h ? (b = a[h], c || (b.Z = !1)) : (b = new $a(b, this.src, f, !!d, e), b.Z = c, a.push(b));
      return b;
    };

    function db(a, b) {
      var c = b.type;

      if (c in a.a) {
        var d = a.a[c],
            e = na(d, b),
            f;
        (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
        f && (ab(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
      }
    }

    function cb(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d) return e;
      }

      return -1;
    }

    var eb = "closure_lm_" + (1E6 * Math.random() | 0),
        fb = {};

    function hb(a, b, c, d, e) {
      if (d && d.once) return ib(a, b, c, d, e);

      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) hb(a, b[f], c, d, e);

        return null;
      }

      c = jb(c);
      return a && a[C] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !1, d, e);
    }

    function kb(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var h = n(e) ? !!e.capture : !!e;
      if (h && !Va) return null;
      var m = lb(a);
      m || (a[eb] = m = new bb(a));
      c = m.add(b, c, d, h, f);
      if (c.proxy) return c;
      d = mb();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Xa || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(nb(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      return c;
    }

    function mb() {
      var a = ob,
          b = Va ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);
        if (!c) return c;
      };
      return b;
    }

    function ib(a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) ib(a, b[f], c, d, e);

        return null;
      }

      c = jb(c);
      return a && a[C] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !0, d, e);
    }

    function pb(a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) pb(a, b[f], c, d, e);else (d = n(d) ? !!d.capture : !!d, c = jb(c), a && a[C]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = cb(f, c, d, e), -1 < c && (ab(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = lb(a)) && (b = a.a[b.toString()], a = -1, b && (a = cb(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c));
    }

    function rb(a) {
      if ("number" !== typeof a && a && !a.Y) {
        var b = a.src;
        if (b && b[C]) db(b.c, a);else {
          var c = a.type,
              d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(nb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          (c = lb(b)) ? (db(c, a), 0 == c.b && (c.src = null, b[eb] = null)) : ab(a);
        }
      }
    }

    function nb(a) {
      return a in fb ? fb[a] : fb[a] = "on" + a;
    }

    function sb(a, b) {
      var c = a.listener,
          d = a.ca || a.src;
      a.Z && rb(a);
      return c.call(d, b);
    }

    function ob(a, b) {
      if (a.Y) return !0;

      if (!Va) {
        if (!b) a: {
          b = ["window", "event"];

          for (var c = k, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
            b = null;
            break a;
          }

          b = c;
        }
        b = new A(b, this);
        return sb(a, b);
      }

      return sb(a, new A(b, this));
    }

    function lb(a) {
      a = a[eb];
      return a instanceof bb ? a : null;
    }

    var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function jb(a) {
      if ("function" == ba(a)) return a;
      a[tb] || (a[tb] = function (b) {
        return a.handleEvent(b);
      });
      return a[tb];
    }

    function D() {
      u.call(this);
      this.c = new bb(this);
      this.J = this;
      this.C = null;
    }

    r(D, u);
    D.prototype[C] = !0;
    g = D.prototype;

    g.addEventListener = function (a, b, c, d) {
      hb(this, a, b, c, d);
    };

    g.removeEventListener = function (a, b, c, d) {
      pb(this, a, b, c, d);
    };

    g.dispatchEvent = function (a) {
      var b,
          c = this.C;
      if (c) for (b = []; c; c = c.C) b.push(c);
      c = this.J;
      var d = a.type || a;
      if ("string" === typeof a) a = new y(a, c);else if (a instanceof y) a.target = a.target || c;else {
        var e = a;
        a = new y(d, c);
        Da(a, e);
      }
      e = !0;
      if (b) for (var f = b.length - 1; 0 <= f; f--) {
        var h = a.a = b[f];
        e = ub(h, d, !0, a) && e;
      }
      h = a.a = c;
      e = ub(h, d, !0, a) && e;
      e = ub(h, d, !1, a) && e;
      if (b) for (f = 0; f < b.length; f++) h = a.a = b[f], e = ub(h, d, !1, a) && e;
      return e;
    };

    g.G = function () {
      D.S.G.call(this);

      if (this.c) {
        var a = this.c,
            c;

        for (c in a.a) {
          for (var d = a.a[c], e = 0; e < d.length; e++) ab(d[e]);

          delete a.a[c];
          a.b--;
        }
      }

      this.C = null;
    };

    g.va = function (a, b, c, d) {
      return this.c.add(String(a), b, !1, c, d);
    };

    g.wa = function (a, b, c, d) {
      return this.c.add(String(a), b, !0, c, d);
    };

    function ub(a, b, c, d) {
      b = a.c.a[String(b)];
      if (!b) return !0;
      b = b.concat();

      for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];

        if (h && !h.Y && h.capture == c) {
          var m = h.listener,
              l = h.ca || h.src;
          h.Z && db(a.c, h);
          e = !1 !== m.call(l, d) && e;
        }
      }

      return e && !d.defaultPrevented;
    }

    var vb = k.JSON.stringify;

    function wb() {
      this.b = this.a = null;
    }

    var yb = new (
    /** @class */
    function () {
      function class_1(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null;
      }

      class_1.prototype.get = function () {
        var a;
        0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
        return a;
      };

      return class_1;
    }())(function () {
      return new xb();
    }, function (a) {
      a.reset();
    }, 100);

    wb.prototype.add = function (a, b) {
      var c = yb.get();
      c.set(a, b);
      this.b ? this.b.next = c : this.a = c;
      this.b = c;
    };

    function zb() {
      var a = Ab,
          b = null;
      a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
      return b;
    }

    function xb() {
      this.next = this.b = this.a = null;
    }

    xb.prototype.set = function (a, b) {
      this.a = a;
      this.b = b;
      this.next = null;
    };

    xb.prototype.reset = function () {
      this.next = this.b = this.a = null;
    };

    function Bb(a) {
      k.setTimeout(function () {
        throw a;
      }, 0);
    }

    function Cb(a, b) {
      Db || Eb();
      Fb || (Db(), Fb = !0);
      Ab.add(a, b);
    }

    var Db;

    function Eb() {
      var a = k.Promise.resolve(void 0);

      Db = function () {
        a.then(Gb);
      };
    }

    var Fb = !1,
        Ab = new wb();

    function Gb() {
      for (var a; a = zb();) {
        try {
          a.a.call(a.b);
        } catch (c) {
          Bb(c);
        }

        var b = yb;
        b.g(a);
        b.b < b.f && (b.b++, a.next = b.a, b.a = a);
      }

      Fb = !1;
    }

    function Hb(a, b) {
      D.call(this);
      this.b = a || 1;
      this.a = b || k;
      this.f = p(this.Ya, this);
      this.g = q();
    }

    r(Hb, D);
    g = Hb.prototype;
    g.aa = !1;
    g.M = null;

    g.Ya = function () {
      if (this.aa) {
        var a = q() - this.g;
        0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ib(this), this.start()));
      }
    };

    g.start = function () {
      this.aa = !0;
      this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q());
    };

    function Ib(a) {
      a.aa = !1;
      a.M && (a.a.clearTimeout(a.M), a.M = null);
    }

    g.G = function () {
      Hb.S.G.call(this);
      Ib(this);
      delete this.a;
    };

    function Jb(a, b, c) {
      if ("function" == ba(a)) c && (a = p(a, c));else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
    }

    function Kb(a) {
      a.a = Jb(function () {
        a.a = null;
        a.c && (a.c = !1, Kb(a));
      }, a.h);
      var b = a.b;
      a.b = null;
      a.g.apply(null, b);
    }

    var Lb =
    /** @class */
    function (_super) {
      __extends(Lb, _super);

      function Lb(a, b, c) {
        var _this = _super.call(this) || this;

        _this.g = null != c ? a.bind(c) : a;
        _this.h = b;
        _this.b = null;
        _this.c = !1;
        _this.a = null;
        return _this;
      }

      Lb.prototype.f = function (a) {
        this.b = arguments;
        this.a ? this.c = !0 : Kb(this);
      };

      Lb.prototype.G = function () {
        _super.prototype.G.call(this);

        this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null);
      };

      return Lb;
    }(u);

    function E(a) {
      u.call(this);
      this.b = a;
      this.a = {};
    }

    r(E, u);
    var Mb = [];

    function Nb(a, b, c, d) {
      Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb);

      for (var e = 0; e < c.length; e++) {
        var f = hb(b, c[e], d || a.handleEvent, !1, a.b || a);
        if (!f) break;
        a.a[f.key] = f;
      }
    }

    function Ob(a) {
      Aa(a.a, function (b, c) {
        this.a.hasOwnProperty(c) && rb(b);
      }, a);
      a.a = {};
    }

    E.prototype.G = function () {
      E.S.G.call(this);
      Ob(this);
    };

    E.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    };

    function Pb() {
      this.a = !0;
    }

    function Qb(a, b, c, d, e, f) {
      a.info(function () {
        if (a.a) {
          if (f) {
            var h = "";

            for (var m = f.split("&"), l = 0; l < m.length; l++) {
              var t = m[l].split("=");

              if (1 < t.length) {
                var B = t[0];
                t = t[1];
                var z = B.split("_");
                h = 2 <= z.length && "type" == z[1] ? h + (B + "=" + t + "&") : h + (B + "=redacted&");
              }
            }
          } else h = null;
        } else h = f;
        return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h;
      });
    }

    function Rb(a, b, c, d, e, f, h) {
      a.info(function () {
        return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h;
      });
    }

    function F(a, b, c, d) {
      a.info(function () {
        return "XMLHTTP TEXT (" + b + "): " + Sb(a, c) + (d ? " " + d : "");
      });
    }

    function Tb(a, b) {
      a.info(function () {
        return "TIMEOUT: " + b;
      });
    }

    Pb.prototype.info = function () {};

    function Sb(a, b) {
      if (!a.a) return b;
      if (!b) return null;

      try {
        var c = JSON.parse(b);
        if (c) for (a = 0; a < c.length; a++) if (Array.isArray(c[a])) {
          var d = c[a];

          if (!(2 > d.length)) {
            var e = d[1];

            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if ("noop" != f && "stop" != f && "close" != f) for (var h = 1; h < e.length; h++) e[h] = "";
            }
          }
        }
        return vb(c);
      } catch (m) {
        return b;
      }
    }

    var Ub = null;

    function Vb() {
      return Ub = Ub || new D();
    }

    function Wb(a) {
      y.call(this, "serverreachability", a);
    }

    r(Wb, y);

    function G(a) {
      var b = Vb();
      b.dispatchEvent(new Wb(b, a));
    }

    function Xb(a) {
      y.call(this, "statevent", a);
    }

    r(Xb, y);

    function H(a) {
      var b = Vb();
      b.dispatchEvent(new Xb(b, a));
    }

    function Yb(a) {
      y.call(this, "timingevent", a);
    }

    r(Yb, y);

    function I(a, b) {
      if ("function" != ba(a)) throw Error("Fn must not be null and must be a function");
      return k.setTimeout(function () {
        a();
      }, b);
    }

    var Zb = {
      NO_ERROR: 0,
      Za: 1,
      gb: 2,
      fb: 3,
      bb: 4,
      eb: 5,
      hb: 6,
      Da: 7,
      TIMEOUT: 8,
      kb: 9
    };
    var $b = {
      ab: "complete",
      ob: "success",
      Ea: "error",
      Da: "abort",
      mb: "ready",
      nb: "readystatechange",
      TIMEOUT: "timeout",
      ib: "incrementaldata",
      lb: "progress",
      cb: "downloadprogress",
      pb: "uploadprogress"
    };

    function ac() {}

    ac.prototype.a = null;

    function bc(a) {
      var b;
      (b = a.a) || (b = a.a = {});
      return b;
    }

    function cc() {}

    var J = {
      OPEN: "a",
      $a: "b",
      Ea: "c",
      jb: "d"
    };

    function dc() {
      y.call(this, "d");
    }

    r(dc, y);

    function ec() {
      y.call(this, "c");
    }

    r(ec, y);
    var fc;

    function gc() {}

    r(gc, ac);
    fc = new gc();

    function K(a, b, c, d) {
      this.g = a;
      this.c = b;
      this.f = c;
      this.T = d || 1;
      this.J = new E(this);
      this.P = hc;
      a = Ja ? 125 : void 0;
      this.R = new Hb(a);
      this.B = null;
      this.b = !1;
      this.j = this.l = this.i = this.H = this.u = this.U = this.o = null;
      this.s = [];
      this.a = null;
      this.D = 0;
      this.h = this.m = null;
      this.N = -1;
      this.A = !1;
      this.O = 0;
      this.F = null;
      this.W = this.C = this.V = this.I = !1;
    }

    var hc = 45E3,
        ic = {},
        jc = {};
    g = K.prototype;

    g.setTimeout = function (a) {
      this.P = a;
    };

    function kc(a, b, c) {
      a.H = 1;
      a.i = lc(L(b));
      a.j = c;
      a.I = !0;
      mc(a, null);
    }

    function mc(a, b) {
      a.u = q();
      M(a);
      a.l = L(a.i);
      var c = a.l,
          d = a.T;
      Array.isArray(d) || (d = [String(d)]);
      nc(c.b, "t", d);
      a.D = 0;
      a.a = oc(a.g, a.g.C ? b : null);
      0 < a.O && (a.F = new Lb(p(a.Ca, a, a.a), a.O));
      Nb(a.J, a.a, "readystatechange", a.Wa);
      b = a.B ? Ba(a.B) : {};
      a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b));
      G(1);
      Qb(a.c, a.m, a.l, a.f, a.T, a.j);
    }

    g.Wa = function (a) {
      a = a.target;
      var b = this.F;
      b && 3 == N(a) ? b.f() : this.Ca(a);
    };

    g.Ca = function (a) {
      try {
        if (a == this.a) a: {
          var b = N(this.a),
              c = this.a.ua(),
              d = this.a.X();

          if (!(3 > b || 3 == b && !Ja && !this.a.$())) {
            this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? G(3) : G(2));
            pc(this);
            var e = this.a.X();
            this.N = e;
            var f = this.a.$();
            this.b = 200 == e;
            Rb(this.c, this.m, this.l, this.f, this.T, b, e);

            if (this.b) {
              if (this.V && !this.C) {
                b: {
                  if (this.a) {
                    var h,
                        m = this.a;

                    if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !ta(h)) {
                      var l = h;
                      break b;
                    }
                  }

                  l = null;
                }

                if (l) F(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"), this.C = !0, qc(this, l);else {
                  this.b = !1;
                  this.h = 3;
                  H(12);
                  O(this);
                  rc(this);
                  break a;
                }
              }

              this.I ? (tc(this, b, f), Ja && this.b && 3 == b && (Nb(this.J, this.R, "tick", this.Va), this.R.start())) : (F(this.c, this.f, f, null), qc(this, f));
              4 == b && O(this);
              this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, M(this)));
            } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, H(12)) : (this.h = 0, H(13)), O(this), rc(this);
          }
        }
      } catch (t) {} finally {}
    };

    function tc(a, b, c) {
      for (var d = !0; !a.A && a.D < c.length;) {
        var e = vc(a, c);

        if (e == jc) {
          4 == b && (a.h = 4, H(14), d = !1);
          F(a.c, a.f, null, "[Incomplete Response]");
          break;
        } else if (e == ic) {
          a.h = 4;
          H(15);
          F(a.c, a.f, c, "[Invalid Chunk]");
          d = !1;
          break;
        } else F(a.c, a.f, e, null), qc(a, e);
      }

      4 == b && 0 == c.length && (a.h = 1, H(16), d = !1);
      a.b = a.b && d;
      d ? 0 < c.length && !a.W && (a.W = !0, b = a.g, b.a == a && b.V && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), xc(b), b.F = !0)) : (F(a.c, a.f, c, "[Invalid Chunked Response]"), O(a), rc(a));
    }

    g.Va = function () {
      if (this.a) {
        var a = N(this.a),
            b = this.a.$();
        this.D < b.length && (pc(this), tc(this, a, b), this.b && 4 != a && M(this));
      }
    };

    function vc(a, b) {
      var c = a.D,
          d = b.indexOf("\n", c);
      if (-1 == d) return jc;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return ic;
      d += 1;
      if (d + c > b.length) return jc;
      b = b.substr(d, c);
      a.D = d + c;
      return b;
    }

    g.cancel = function () {
      this.A = !0;
      O(this);
    };

    function M(a) {
      a.U = q() + a.P;
      yc(a, a.P);
    }

    function yc(a, b) {
      if (null != a.o) throw Error("WatchDog timer not null");
      a.o = I(p(a.Ua, a), b);
    }

    function pc(a) {
      a.o && (k.clearTimeout(a.o), a.o = null);
    }

    g.Ua = function () {
      this.o = null;
      var a = q();
      0 <= a - this.U ? (Tb(this.c, this.l), 2 != this.H && (G(3), H(17)), O(this), this.h = 2, rc(this)) : yc(this, this.U - a);
    };

    function rc(a) {
      0 == a.g.v || a.A || uc(a.g, a);
    }

    function O(a) {
      pc(a);
      var b = a.F;
      b && "function" == typeof b.ja && b.ja();
      a.F = null;
      Ib(a.R);
      Ob(a.J);
      a.a && (b = a.a, a.a = null, b.abort(), b.ja());
    }

    function qc(a, b) {
      try {
        var c = a.g;
        if (0 != c.v && (c.a == a || zc(c.b, a))) if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
          try {
            var d = c.ka.a.parse(b);
          } catch (sc) {
            d = null;
          }

          if (Array.isArray(d) && 3 == d.length) {
            var e = d;
            if (0 == e[0]) a: {
              if (!c.j) {
                if (c.a) if (c.a.u + 3E3 < a.u) Ac(c), Bc(c);else break a;
                Cc(c);
                H(18);
              }
            } else c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = I(p(c.Ra, c), 6E3));

            if (1 >= Dc(c.b) && c.ea) {
              try {
                c.ea();
              } catch (sc) {}

              c.ea = void 0;
            }
          } else P(c, 11);
        } else if ((a.C || c.a == a) && Ac(c), !ta(b)) for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++) if (e = b[d], c.P = e[0], e = e[1], 2 == c.v) {
          if ("c" == e[0]) {
            c.J = e[1];
            c.ga = e[2];
            var f = e[3];
            null != f && (c.ha = f, c.c.info("VER=" + c.ha));
            var h = e[4];
            null != h && (c.pa = h, c.c.info("SVER=" + c.pa));
            var m = e[5];

            if (null != m && "number" === typeof m && 0 < m) {
              var l = 1.5 * m;
              c.D = l;
              c.c.info("backChannelRequestTimeoutMs_=" + l);
            }

            l = c;
            var t = a.a;

            if (t) {
              var B = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;

              if (B) {
                var z = l.b;
                !z.a && (v(B, "spdy") || v(B, "quic") || v(B, "h2")) && (z.f = z.g, z.a = new Set(), z.b && (Ec(z, z.b), z.b = null));
              }

              if (l.A) {
                var qb = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") : null;
                qb && (l.na = qb, Q(l.B, l.A, qb));
              }
            }

            c.v = 3;
            c.f && c.f.ta();
            c.V && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
            l = c;
            var va = a;
            l.la = Fc(l, l.C ? l.ga : null, l.fa);

            if (va.C) {
              Gc(l.b, va);
              var wa = va,
                  wc = l.D;
              wc && wa.setTimeout(wc);
              wa.o && (pc(wa), M(wa));
              l.a = va;
            } else Hc(l);

            0 < c.g.length && Ic(c);
          } else "stop" != e[0] && "close" != e[0] || P(c, 7);
        } else 3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? P(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
        G(4);
      } catch (sc) {}
    }

    function Kc(a) {
      if (a.K && "function" == typeof a.K) return a.K();
      if ("string" === typeof a) return a.split("");

      if (ca(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);

        return b;
      }

      b = [];
      c = 0;

      for (d in a) b[c++] = a[d];

      return a = b;
    }

    function Lc(a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (ca(a) || "string" === typeof a) oa(a, b, void 0);else {
        if (a.L && "function" == typeof a.L) var c = a.L();else if (a.K && "function" == typeof a.K) c = void 0;else if (ca(a) || "string" === typeof a) {
          c = [];

          for (var d = a.length, e = 0; e < d; e++) c.push(e);
        } else for (e in c = [], d = 0, a) c[d++] = e;
        d = Kc(a);
        e = d.length;

        for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
      }
    }

    function R(a, b) {
      this.b = {};
      this.a = [];
      this.c = 0;
      var c = arguments.length;

      if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");

        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
      } else if (a) if (a instanceof R) for (c = a.L(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
    }

    g = R.prototype;

    g.K = function () {
      Mc(this);

      for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);

      return a;
    };

    g.L = function () {
      Mc(this);
      return this.a.concat();
    };

    function Mc(a) {
      if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
          var d = a.a[b];
          S(a.b, d) && (a.a[c++] = d);
          b++;
        }

        a.a.length = c;
      }

      if (a.c != a.a.length) {
        var e = {};

        for (c = b = 0; b < a.a.length;) d = a.a[b], S(e, d) || (a.a[c++] = d, e[d] = 1), b++;

        a.a.length = c;
      }
    }

    g.get = function (a, b) {
      return S(this.b, a) ? this.b[a] : b;
    };

    g.set = function (a, b) {
      S(this.b, a) || (this.c++, this.a.push(a));
      this.b[a] = b;
    };

    g.forEach = function (a, b) {
      for (var c = this.L(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this);
      }
    };

    function S(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Oc(a, b) {
      if (a) {
        a = a.split("&");

        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e = null;

          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];

          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    }

    function T(a, b) {
      this.c = this.j = this.f = "";
      this.h = null;
      this.i = this.g = "";
      this.a = !1;

      if (a instanceof T) {
        this.a = void 0 !== b ? b : a.a;
        Pc(this, a.f);
        this.j = a.j;
        Qc(this, a.c);
        Rc(this, a.h);
        this.g = a.g;
        b = a.b;
        var c = new U();
        c.c = b.c;
        b.a && (c.a = new R(b.a), c.b = b.b);
        Sc(this, c);
        this.i = a.i;
      } else a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Tc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Tc(c[5] || "", !0), Sc(this, c[6] || "", !0), this.i = Tc(c[7] || "")) : (this.a = !!b, this.b = new U(null, this.a));
    }

    T.prototype.toString = function () {
      var a = [],
          b = this.f;
      b && a.push(Uc(b, Vc, !0), ":");
      var c = this.c;
      if (c || "file" == b) a.push("//"), (b = this.j) && a.push(Uc(b, Vc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
      if (c = this.g) this.c && "/" != c.charAt(0) && a.push("/"), a.push(Uc(c, "/" == c.charAt(0) ? Wc : Xc, !0));
      (c = this.b.toString()) && a.push("?", c);
      (c = this.i) && a.push("#", Uc(c, Yc));
      return a.join("");
    };

    function L(a) {
      return new T(a);
    }

    function Pc(a, b, c) {
      a.f = c ? Tc(b, !0) : b;
      a.f && (a.f = a.f.replace(/:$/, ""));
    }

    function Qc(a, b, c) {
      a.c = c ? Tc(b, !0) : b;
    }

    function Rc(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.h = b;
      } else a.h = null;
    }

    function Sc(a, b, c) {
      b instanceof U ? (a.b = b, Zc(a.b, a.a)) : (c || (b = Uc(b, $c)), a.b = new U(b, a.a));
    }

    function Q(a, b, c) {
      a.b.set(b, c);
    }

    function lc(a) {
      Q(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
      return a;
    }

    function ad(a) {
      return a instanceof T ? L(a) : new T(a, void 0);
    }

    function bd(a, b, c, d) {
      var e = new T(null, void 0);
      a && Pc(e, a);
      b && Qc(e, b);
      c && Rc(e, c);
      d && (e.g = d);
      return e;
    }

    function Tc(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }

    function Uc(a, b, c) {
      return "string" === typeof a ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }

    function cd(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }

    var Vc = /[#\/\?@]/g,
        Xc = /[#\?:]/g,
        Wc = /[#\?]/g,
        $c = /[#\?@]/g,
        Yc = /#/g;

    function U(a, b) {
      this.b = this.a = null;
      this.c = a || null;
      this.f = !!b;
    }

    function V(a) {
      a.a || (a.a = new R(), a.b = 0, a.c && Oc(a.c, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    }

    g = U.prototype;

    g.add = function (a, b) {
      V(this);
      this.c = null;
      a = W(this, a);
      var c = this.a.get(a);
      c || this.a.set(a, c = []);
      c.push(b);
      this.b += 1;
      return this;
    };

    function dd(a, b) {
      V(a);
      b = W(a, b);
      S(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, S(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a)));
    }

    function ed(a, b) {
      V(a);
      b = W(a, b);
      return S(a.a.b, b);
    }

    g.forEach = function (a, b) {
      V(this);
      this.a.forEach(function (c, d) {
        oa(c, function (e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };

    g.L = function () {
      V(this);

      for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);

      return c;
    };

    g.K = function (a) {
      V(this);
      var b = [];
      if ("string" === typeof a) ed(this, a) && (b = ra(b, this.a.get(W(this, a))));else {
        a = this.a.K();

        for (var c = 0; c < a.length; c++) b = ra(b, a[c]);
      }
      return b;
    };

    g.set = function (a, b) {
      V(this);
      this.c = null;
      a = W(this, a);
      ed(this, a) && (this.b -= this.a.get(a).length);
      this.a.set(a, [b]);
      this.b += 1;
      return this;
    };

    g.get = function (a, b) {
      if (!a) return b;
      a = this.K(a);
      return 0 < a.length ? String(a[0]) : b;
    };

    function nc(a, b, c) {
      dd(a, b);
      0 < c.length && (a.c = null, a.a.set(W(a, b), sa(c)), a.b += c.length);
    }

    g.toString = function () {
      if (this.c) return this.c;
      if (!this.a) return "";

      for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = encodeURIComponent(String(d));
        d = this.K(d);

        for (var f = 0; f < d.length; f++) {
          var h = e;
          "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
          a.push(h);
        }
      }

      return this.c = a.join("&");
    };

    function W(a, b) {
      b = String(b);
      a.f && (b = b.toLowerCase());
      return b;
    }

    function Zc(a, b) {
      b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (dd(this, d), nc(this, e, c));
      }, a));
      a.f = b;
    }

    function fd(a, b) {
      this.b = a;
      this.a = b;
    }

    function gd(a) {
      this.g = a || hd;
      k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().qb);
      this.f = a ? this.g : 1;
      this.a = null;
      1 < this.f && (this.a = new Set());
      this.b = null;
      this.c = [];
    }

    var hd = 10;

    function id(a) {
      return a.b ? !0 : a.a ? a.a.size >= a.f : !1;
    }

    function Dc(a) {
      return a.b ? 1 : a.a ? a.a.size : 0;
    }

    function zc(a, b) {
      return a.b ? a.b == b : a.a ? a.a.has(b) : !1;
    }

    function Ec(a, b) {
      a.a ? a.a.add(b) : a.b = b;
    }

    function Gc(a, b) {
      a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b);
    }

    gd.prototype.cancel = function () {
      var e_1, _a;

      this.c = jd(this);
      if (this.b) this.b.cancel(), this.b = null;else if (this.a && 0 !== this.a.size) {
        try {
          for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var a = _c.value;
            a.cancel();
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        this.a.clear();
      }
    };

    function jd(a) {
      var e_2, _a;

      if (null != a.b) return a.c.concat(a.b.s);

      if (null != a.a && 0 !== a.a.size) {
        var b = a.c;

        try {
          for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var c = _c.value;
            b = b.concat(c.s);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        return b;
      }

      return sa(a.c);
    }

    function kd() {}

    kd.prototype.stringify = function (a) {
      return k.JSON.stringify(a, void 0);
    };

    kd.prototype.parse = function (a) {
      return k.JSON.parse(a, void 0);
    };

    function ld() {
      this.a = new kd();
    }

    function md(a, b, c) {
      var d = c || "";

      try {
        Lc(a, function (e, f) {
          var h = e;
          n(e) && (h = vb(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
      }
    }

    function nd(a, b) {
      var c = new Pb();

      if (k.Image) {
        var d = new Image();
        d.onload = ka(od, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = ka(od, c, d, "TestLoadImage: error", !1, b);
        d.onabort = ka(od, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = ka(od, c, d, "TestLoadImage: timeout", !1, b);
        k.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1E4);
        d.src = a;
      } else b(!1);
    }

    function od(a, b, c, d, e) {
      try {
        b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
      } catch (f) {}
    }

    var pd = k.JSON.parse;

    function X(a) {
      D.call(this);
      this.headers = new R();
      this.H = a || null;
      this.b = !1;
      this.s = this.a = null;
      this.B = "";
      this.h = 0;
      this.f = "";
      this.g = this.A = this.l = this.u = !1;
      this.o = 0;
      this.m = null;
      this.I = qd;
      this.D = this.F = !1;
    }

    r(X, D);
    var qd = "",
        rd = /^https?$/i,
        sd = ["POST", "PUT"];
    g = X.prototype;

    g.ba = function (a, b, c, d) {
      if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
      b = b ? b.toUpperCase() : "GET";
      this.B = a;
      this.f = "";
      this.h = 0;
      this.u = !1;
      this.b = !0;
      this.a = new XMLHttpRequest();
      this.s = this.H ? bc(this.H) : bc(fc);
      this.a.onreadystatechange = p(this.za, this);

      try {
        this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
      } catch (f) {
        td(this, f);
        return;
      }

      a = c || "";
      var e = new R(this.headers);
      d && Lc(d, function (f, h) {
        e.set(h, f);
      });
      d = pa(e.L());
      c = k.FormData && a instanceof k.FormData;
      !(0 <= na(sd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      e.forEach(function (f, h) {
        this.a.setRequestHeader(h, f);
      }, this);
      this.I && (this.a.responseType = this.I);
      "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);

      try {
        ud(this), 0 < this.o && ((this.D = vd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Jb(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
      } catch (f) {
        td(this, f);
      }
    };

    function vd(a) {
      return x && Ra(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
    }

    function qa(a) {
      return "content-type" == a.toLowerCase();
    }

    g.xa = function () {
      "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8));
    };

    function td(a, b) {
      a.b = !1;
      a.a && (a.g = !0, a.a.abort(), a.g = !1);
      a.f = b;
      a.h = 5;
      wd(a);
      xd(a);
    }

    function wd(a) {
      a.u || (a.u = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    }

    g.abort = function (a) {
      this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), xd(this));
    };

    g.G = function () {
      this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), xd(this, !0));
      X.S.G.call(this);
    };

    g.za = function () {
      this.j || (this.A || this.l || this.g ? yd(this) : this.Ta());
    };

    g.Ta = function () {
      yd(this);
    };

    function yd(a) {
      if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != N(a) || 2 != a.X())) if (a.l && 4 == N(a)) Jb(a.za, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == N(a)) {
        a.b = !1;

        try {
          var b = a.X();

          a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break a;

            default:
              c = !1;
          }

          var d;

          if (!(d = c)) {
            var e;

            if (e = 0 === b) {
              var f = String(a.B).match(Nc)[1] || null;

              if (!f && k.self && k.self.location) {
                var h = k.self.location.protocol;
                f = h.substr(0, h.length - 1);
              }

              e = !rd.test(f ? f.toLowerCase() : "");
            }

            d = e;
          }

          if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
            a.h = 6;

            try {
              var m = 2 < N(a) ? a.a.statusText : "";
            } catch (l) {
              m = "";
            }

            a.f = m + " [" + a.X() + "]";
            wd(a);
          }
        } finally {
          xd(a);
        }
      }
    }

    function xd(a, b) {
      if (a.a) {
        ud(a);
        var c = a.a,
            d = a.s[0] ? aa : null;
        a.a = null;
        a.s = null;
        b || a.dispatchEvent("ready");

        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    }

    function ud(a) {
      a.a && a.D && (a.a.ontimeout = null);
      a.m && (k.clearTimeout(a.m), a.m = null);
    }

    function N(a) {
      return a.a ? a.a.readyState : 0;
    }

    g.X = function () {
      try {
        return 2 < N(this) ? this.a.status : -1;
      } catch (a) {
        return -1;
      }
    };

    g.$ = function () {
      try {
        return this.a ? this.a.responseText : "";
      } catch (a) {
        return "";
      }
    };

    g.Na = function (a) {
      if (this.a) {
        var b = this.a.responseText;
        a && 0 == b.indexOf(a) && (b = b.substring(a.length));
        return pd(b);
      }
    };

    g.ua = function () {
      return this.h;
    };

    g.Qa = function () {
      return "string" === typeof this.f ? this.f : String(this.f);
    };

    function zd(a) {
      var b = "";
      Aa(a, function (c, d) {
        b += d;
        b += ":";
        b += c;
        b += "\r\n";
      });
      return b;
    }

    function Ad(a, b, c) {
      a: {
        for (d in c) {
          var d = !1;
          break a;
        }

        d = !0;
      }

      d || (c = zd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : Q(a, b, c));
    }

    function Bd(a, b, c) {
      return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
    }

    function Cd(a) {
      this.pa = 0;
      this.g = [];
      this.c = new Pb();
      this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null;
      this.La = this.R = 0;
      this.Ia = Bd("failFast", !1, a);
      this.H = this.m = this.j = this.h = this.f = null;
      this.T = !0;
      this.I = this.oa = this.P = -1;
      this.U = this.o = this.u = 0;
      this.Fa = Bd("baseRetryDelayMs", 5E3, a);
      this.Ma = Bd("retryDelaySeedMs", 1E4, a);
      this.Ja = Bd("forwardChannelMaxRetries", 2, a);
      this.ma = Bd("forwardChannelRequestTimeoutMs", 2E4, a);
      this.Ka = a && a.g || void 0;
      this.D = void 0;
      this.C = a && a.supportsCrossDomainXhr || !1;
      this.J = "";
      this.b = new gd(a && a.concurrentRequestLimit);
      this.ka = new ld();
      this.da = a && a.fastHandshake || !1;
      this.Ga = a && a.b || !1;
      a && a.f && (this.c.a = !1);
      a && a.forceLongPolling && (this.T = !1);
      this.V = !this.da && this.T && a && a.c || !1;
      this.ea = void 0;
      this.N = 0;
      this.F = !1;
      this.s = null;
    }

    g = Cd.prototype;
    g.ha = 8;
    g.v = 1;

    function Jc(a) {
      Dd(a);

      if (3 == a.v) {
        var b = a.R++,
            c = L(a.B);
        Q(c, "SID", a.J);
        Q(c, "RID", b);
        Q(c, "TYPE", "terminate");
        Ed(a, c);
        b = new K(a, a.c, b, void 0);
        b.H = 2;
        b.i = lc(L(c));
        c = !1;
        k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
        !c && k.Image && (new Image().src = b.i, c = !0);
        c || (b.a = oc(b.g, null), b.a.ba(b.i));
        b.u = q();
        M(b);
      }

      Fd(a);
    }

    function Bc(a) {
      a.a && (xc(a), a.a.cancel(), a.a = null);
    }

    function Dd(a) {
      Bc(a);
      a.j && (k.clearTimeout(a.j), a.j = null);
      Ac(a);
      a.b.cancel();
      a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null);
    }

    function Gd(a, b) {
      a.g.push(new fd(a.La++, b));
      3 == a.v && Ic(a);
    }

    function Ic(a) {
      id(a.b) || a.h || (a.h = !0, Cb(a.Ba, a), a.u = 0);
    }

    function Hd(a, b) {
      if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0)) return !1;
      if (a.h) return a.g = b.s.concat(a.g), !0;
      if (1 == a.v || 2 == a.v || a.u >= (a.Ia ? 0 : a.Ja)) return !1;
      a.h = I(p(a.Ba, a, b), Id(a, a.u));
      a.u++;
      return !0;
    }

    g.Ba = function (a) {
      if (this.h) if (this.h = null, 1 == this.v) {
        if (!a) {
          this.R = Math.floor(1E5 * Math.random());
          a = this.R++;
          var b = new K(this, this.c, a, void 0),
              c = this.l;
          this.O && (c ? (c = Ba(c), Da(c, this.O)) : c = this.O);
          null === this.i && (b.B = c);
          var d;
          if (this.da) a: {
            for (var e = d = 0; e < this.g.length; e++) {
              b: {
                var f = this.g[e];

                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                  f = f.length;
                  break b;
                }

                f = void 0;
              }

              if (void 0 === f) break;
              d += f;

              if (4096 < d) {
                d = e;
                break a;
              }

              if (4096 === d || e === this.g.length - 1) {
                d = e + 1;
                break a;
              }
            }

            d = 1E3;
          } else d = 1E3;
          d = Jd(this, b, d);
          e = L(this.B);
          Q(e, "RID", a);
          Q(e, "CVER", 22);
          this.A && Q(e, "X-HTTP-Session-Id", this.A);
          Ed(this, e);
          this.i && c && Ad(e, this.i, c);
          Ec(this.b, b);
          this.Ga && Q(e, "TYPE", "init");
          this.da ? (Q(e, "$req", d), Q(e, "SID", "null"), b.V = !0, kc(b, e, null)) : kc(b, e, d);
          this.v = 2;
        }
      } else 3 == this.v && (a ? Kd(this, a) : 0 == this.g.length || id(this.b) || Kd(this));
    };

    function Kd(a, b) {
      var c;
      b ? c = b.f : c = a.R++;
      var d = L(a.B);
      Q(d, "SID", a.J);
      Q(d, "RID", c);
      Q(d, "AID", a.P);
      Ed(a, d);
      a.i && a.l && Ad(d, a.i, a.l);
      c = new K(a, a.c, c, a.u + 1);
      null === a.i && (c.B = a.l);
      b && (a.g = b.s.concat(a.g));
      b = Jd(a, c, 1E3);
      c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random()));
      Ec(a.b, c);
      kc(c, d, b);
    }

    function Ed(a, b) {
      a.f && Lc({}, function (c, d) {
        Q(b, d, c);
      });
    }

    function Jd(a, b, c) {
      c = Math.min(a.g.length, c);
      var d = a.f ? p(a.f.Ha, a.f, a) : null;

      a: for (var e = a.g, f = -1;;) {
        var h = ["count=" + c];
        -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);

        for (var m = !0, l = 0; l < c; l++) {
          var t = e[l].b,
              B = e[l].a;
          t -= f;
          if (0 > t) f = Math.max(0, e[l].b - 100), m = !1;else try {
            md(B, h, "req" + t + "_");
          } catch (z) {
            d && d(B);
          }
        }

        if (m) {
          d = h.join("&");
          break a;
        }
      }

      a = a.g.splice(0, c);
      b.s = a;
      return d;
    }

    function Hc(a) {
      a.a || a.j || (a.U = 1, Cb(a.Aa, a), a.o = 0);
    }

    function Cc(a) {
      if (a.a || a.j || 3 <= a.o) return !1;
      a.U++;
      a.j = I(p(a.Aa, a), Id(a, a.o));
      a.o++;
      return !0;
    }

    g.Aa = function () {
      this.j = null;
      Ld(this);

      if (this.V && !(this.F || null == this.a || 0 >= this.N)) {
        var a = 2 * this.N;
        this.c.info("BP detection timer enabled: " + a);
        this.s = I(p(this.Sa, this), a);
      }
    };

    g.Sa = function () {
      this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, Bc(this), Ld(this));
    };

    function xc(a) {
      null != a.s && (k.clearTimeout(a.s), a.s = null);
    }

    function Ld(a) {
      a.a = new K(a, a.c, "rpc", a.U);
      null === a.i && (a.a.B = a.l);
      a.a.O = 0;
      var b = L(a.la);
      Q(b, "RID", "rpc");
      Q(b, "SID", a.J);
      Q(b, "CI", a.H ? "0" : "1");
      Q(b, "AID", a.P);
      Ed(a, b);
      Q(b, "TYPE", "xmlhttp");
      a.i && a.l && Ad(b, a.i, a.l);
      a.D && a.a.setTimeout(a.D);
      var c = a.a;
      a = a.ga;
      c.H = 1;
      c.i = lc(L(b));
      c.j = null;
      c.I = !0;
      mc(c, a);
    }

    g.Ra = function () {
      null != this.m && (this.m = null, Bc(this), Cc(this), H(19));
    };

    function Ac(a) {
      null != a.m && (k.clearTimeout(a.m), a.m = null);
    }

    function uc(a, b) {
      var c = null;

      if (a.a == b) {
        Ac(a);
        xc(a);
        a.a = null;
        var d = 2;
      } else if (zc(a.b, b)) c = b.s, Gc(a.b, b), d = 1;else return;

      a.I = b.N;
      if (0 != a.v) if (b.b) {
        if (1 == d) {
          c = b.j ? b.j.length : 0;
          b = q() - b.u;
          var e = a.u;
          d = Vb();
          d.dispatchEvent(new Yb(d, c, b, e));
          Ic(a);
        } else Hc(a);
      } else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Hd(a, b) || 2 == d && Cc(a))) switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
        case 1:
          P(a, 5);
          break;

        case 4:
          P(a, 10);
          break;

        case 3:
          P(a, 6);
          break;

        default:
          P(a, 2);
      }
    }

    function Id(a, b) {
      var c = a.Fa + Math.floor(Math.random() * a.Ma);
      a.f || (c *= 2);
      return c * b;
    }

    function P(a, b) {
      a.c.info("Error code " + b);

      if (2 == b) {
        var c = null;
        a.f && (c = null);
        var d = p(a.Xa, a);
        c || (c = new T("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), lc(c));
        nd(c.toString(), d);
      } else H(2);

      a.v = 0;
      a.f && a.f.ra(b);
      Fd(a);
      Dd(a);
    }

    g.Xa = function (a) {
      a ? (this.c.info("Successfully pinged google.com"), H(2)) : (this.c.info("Failed to ping google.com"), H(1));
    };

    function Fd(a) {
      a.v = 0;
      a.I = -1;

      if (a.f) {
        if (0 != jd(a.b).length || 0 != a.g.length) a.b.c.length = 0, sa(a.g), a.g.length = 0;
        a.f.qa();
      }
    }

    function Fc(a, b, c) {
      var d = ad(c);
      if ("" != d.c) b && Qc(d, b + "." + d.c), Rc(d, d.h);else {
        var e = k.location;
        d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.W && Aa(a.W, function (f, h) {
        Q(d, h, f);
      });
      b = a.A;
      c = a.na;
      b && c && Q(d, b, c);
      Q(d, "VER", a.ha);
      Ed(a, d);
      return d;
    }

    function oc(a, b) {
      if (b && !a.C) throw Error("Can't create secondary domain capable XhrIo object.");
      b = new X(a.Ka);
      b.F = a.C;
      return b;
    }

    function Md() {}

    g = Md.prototype;

    g.ta = function () {};

    g.sa = function () {};

    g.ra = function () {};

    g.qa = function () {};

    g.Ha = function () {};

    function Nd() {
      if (x && !(10 <= Number(Ua))) throw Error("Environmental error: no available transport.");
    }

    Nd.prototype.a = function (a, b) {
      return new Y(a, b);
    };

    function Y(a, b) {
      D.call(this);
      this.a = new Cd(b);
      this.l = a;
      this.b = b && b.messageUrlParams || null;
      a = b && b.messageHeaders || null;
      b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
        "X-Client-Protocol": "webchannel"
      });
      this.a.l = a;
      a = b && b.initMessageHeaders || null;
      b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {
        "X-WebChannel-Content-Type": b.messageContentType
      });
      b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = {
        "X-WebChannel-Client-Profile": b.a
      });
      this.a.O = a;
      (a = b && b.httpHeadersOverwriteParam) && !ta(a) && (this.a.i = a);
      this.h = b && b.supportsCrossDomainXhr || !1;
      this.g = b && b.sendRawJson || !1;
      (b = b && b.httpSessionIdParam) && !ta(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
      this.f = new Z(this);
    }

    r(Y, D);
    g = Y.prototype;

    g.addEventListener = function (a, b, c, d) {
      Y.S.addEventListener.call(this, a, b, c, d);
    };

    g.removeEventListener = function (a, b, c, d) {
      Y.S.removeEventListener.call(this, a, b, c, d);
    };

    g.Oa = function () {
      this.a.f = this.f;
      this.h && (this.a.C = !0);
      var a = this.a,
          b = this.l,
          c = this.b || void 0;
      H(0);
      a.fa = b;
      a.W = c || {};
      a.H = a.T;
      a.B = Fc(a, null, a.fa);
      Ic(a);
    };

    g.close = function () {
      Jc(this.a);
    };

    g.Pa = function (a) {
      if ("string" === typeof a) {
        var b = {};
        b.__data__ = a;
        Gd(this.a, b);
      } else this.g ? (b = {}, b.__data__ = vb(a), Gd(this.a, b)) : Gd(this.a, a);
    };

    g.G = function () {
      this.a.f = null;
      delete this.f;
      Jc(this.a);
      delete this.a;
      Y.S.G.call(this);
    };

    function Od(a) {
      dc.call(this);
      var b = a.__sm__;

      if (b) {
        a: {
          for (var c in b) {
            a = c;
            break a;
          }

          a = void 0;
        }

        (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
      } else this.data = a;
    }

    r(Od, dc);

    function Pd() {
      ec.call(this);
      this.status = 1;
    }

    r(Pd, ec);

    function Z(a) {
      this.a = a;
    }

    r(Z, Md);

    Z.prototype.ta = function () {
      this.a.dispatchEvent("a");
    };

    Z.prototype.sa = function (a) {
      this.a.dispatchEvent(new Od(a));
    };

    Z.prototype.ra = function (a) {
      this.a.dispatchEvent(new Pd(a));
    };

    Z.prototype.qa = function () {
      this.a.dispatchEvent("b");
    };
    /*
    Copyright 2017 Google LLC
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */


    Nd.prototype.createWebChannel = Nd.prototype.a;
    Y.prototype.send = Y.prototype.Pa;
    Y.prototype.open = Y.prototype.Oa;
    Y.prototype.close = Y.prototype.close;
    Zb.NO_ERROR = 0;
    Zb.TIMEOUT = 8;
    Zb.HTTP_ERROR = 6;
    $b.COMPLETE = "complete";
    cc.EventType = J;
    J.OPEN = "a";
    J.CLOSE = "b";
    J.ERROR = "c";
    J.MESSAGE = "d";
    D.prototype.listen = D.prototype.va;
    X.prototype.listenOnce = X.prototype.wa;
    X.prototype.getLastError = X.prototype.Qa;
    X.prototype.getLastErrorCode = X.prototype.ua;
    X.prototype.getStatus = X.prototype.X;
    X.prototype.getResponseJson = X.prototype.Na;
    X.prototype.getResponseText = X.prototype.$;
    X.prototype.send = X.prototype.ba;

    var createWebChannelTransport = function () {
      return new Nd();
    };

    var ErrorCode = Zb;
    var EventType = $b;
    var WebChannel = cc;
    var XhrIo = X;
    var esm = {
      createWebChannelTransport: createWebChannelTransport,
      ErrorCode: ErrorCode,
      EventType: EventType,
      WebChannel: WebChannel,
      XhrIo: XhrIo
    };
    /* harmony default export */

    __webpack_exports__["default"] = esm; //# sourceMappingURL=index.esm.js.map

    /***/
  },

  /***/
  "./node_modules/firebase/firestore/dist/index.esm.js":
  /*!***********************************************************!*\
    !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
    \***********************************************************/

  /*! no exports provided */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/firestore */
    "./node_modules/@firebase/firestore/dist/index.cjs.js");
    /* harmony import */


    var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__); //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n\n<!--Send SMS for otp-->\n<div *ngIf=\"!verifyCode\">\n  <div class=\"form\">\n      <ion-list lines=\"none\">\n          <h1>Ingresa tu número de teléfono móvil</h1>\n          <p class=\"d-flex ion-text-left\" style=\"font-weight: 500;font-size: 14px;\">\n            Recibirás un código SMS de verificación al número telefónico dado\n          </p>\n\n          <ion-item lines=\"none\">\n            <div class=\"item_inner d-flex\">\n              <h3 class=\"d-flex\">\n                <img src=\"assets/mex.png\" alt=\"mex_flag\" style=\"max-width: 30%;\">\n                &nbsp;&nbsp;<ion-label>+52</ion-label>\n              </h3>\n              <ion-input mode=\"md\" #phone pattern=\"[0-9]{3}[0-9]{3}[0-9]{4}\" maxlength=\"10\" clearInput minlength=\"10\" name=\"phone\" type=\"tel\" placeholder=\"477 123 4567\"></ion-input>\n            </div>\n          </ion-item>\n\n          <ion-item class=\"pc_text\">\n            <ion-label>Al continuar acepto los <a href=\"https://babel-market.com/services/digital-photography/\" target=\"_blank\">\n              Términos y Condiciones y Aviso de Privacidad</a> \n            </ion-label>\n          </ion-item>\n          \n      </ion-list>\n  </div>\n\n  <div style=\"text-align: center;\">\n    <div id=\"recaptcha-container\" style=\"display: inline-block;\"></div>\n  </div> \n\n  <ion-button class=\"btn_next\" *ngIf=\"isKeyboardHide\" (click)=\"login()\" color=\"dark\" shape=\"round\" style=\"--border-radius:25px;\">\n      Continuar\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-button>\n</div>\n<!--Send SMS for otp-->\n</ion-content>\n\n<!--<ion-footer style=\"padding: 15px;text-align: center;\" *ngIf=\"isKeyboardHide\">\n  <ion-label color=\"medium\"  mode=\"ios\" routerLink=\"/signup\" routerDirection=\"forward\">No tienes una cuenta? <b>Registrate</b></ion-label> \n</ion-footer>-->";
    /***/
  },

  /***/
  "./src/app/account/login/login.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/account/login/login.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/account/login/login.page.ts");

    const routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];
    let LoginPageModule = class LoginPageModule {};
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/account/login/login.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/account/login/login.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  background: var(--white);\n}\n.form ion-list ion-item {\n  margin: 0 !important;\n  border-bottom: none !important;\n  padding: 0 !important;\n}\n.form ion-list ion-item h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  width: 30%;\n}\n.form ion-list ion-item .item_inner {\n  background-color: white;\n  border: 1px solid #e1e1e1;\n  padding: 10px;\n}\n.form ion-list ion-item .item_inner.d-flex {\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.form ion-list ion-item .item_inner.d-flex ion-label {\n  font-size: 20px;\n  padding-top: 8px;\n}\n.form ion-list ion-item .button.btn {\n  --border-radius: 50px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 35px;\n  font-size: 0.9rem;\n  min-width: 118px;\n  --padding-start: 15px;\n  --padding-end: 10px;\n}\n.form ion-list ion-item.pc_text {\n  margin: 0 !important;\n  padding: 0 !important;\n  font-size: 12px;\n}\n.form ion-list ion-item.pc_text ion-checkbox {\n  margin: 0 !important;\n  padding: 0 !important;\n  --border-radius:50%;\n  --size:15px;\n}\n.form ion-list ion-item.pc_text ion-label {\n  padding-left: 12px;\n  text-transform: capitalize;\n}\n.form ion-list ion-item.pc_text ion-label a {\n  color: var(--primary);\n}\n.sign_rs {\n  margin-top: 50px;\n  text-align: center;\n  position: relative;\n}\n.sign_rs span {\n  position: relative;\n  display: block;\n  width: 80%;\n  font-size: 14px;\n  color: #808080;\n  margin: 15px auto;\n  border-top: 1px solid #e1e1e1;\n  padding: 15px;\n}\n.sign_rs div {\n  margin-top: 10px;\n}\n.sign_rs div img {\n  position: relative;\n  margin: auto;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.sign_rs div p {\n  position: relative;\n  margin: 0 !important;\n  padding: 0 !important;\n  font-size: 14px;\n  color: #808080;\n}\n.social_login {\n  width: 80%;\n  margin: auto;\n  border-radius: 10px;\n}\n.social_login h3 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1rem;\n  padding: 20px 0;\n}\n.social_login .button_container {\n  width: 100%;\n}\n.social_login .button_container .btn {\n  min-height: 55px;\n  padding: 0 20px;\n}\n.social_login .button_container .btn .img_box {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 85px;\n}\n.social_login .button_container .btn .img_box img {\n  width: 27px;\n  margin: 0 auto;\n}\n.social_login .button_container .btn h6 {\n  margin: 0;\n  color: #fff;\n  font-weight: 400;\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  left: 0;\n}\n.social_login .button_container .btn.Facebook {\n  background: #3A559F;\n  border-radius: 10px;\n}\n.social_login .button_container .btn.Google {\n  background: #fff;\n}\n.social_login .button_container .btn.Google h6 {\n  color: #000000 !important;\n}\n.social_login .button_container .btn.Apple {\n  background: #000000;\n}\n.btn_next {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #000000;\n  margin: 15px;\n  --border-radius:25px !important;\n  border-radius: 25px !important;\n}\n.welcome_text {\n  font-weight: 600;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  z-index: 100;\n}\n.digit-group ion-input {\n  display: inline-block;\n  width: 50px;\n  height: 25px;\n  margin: 10px;\n  text-align: center;\n  border-bottom: 1px solid #2f2f2f;\n  --padding-start:7px;\n  --padding-top:7px;\n}\n#countdown {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 15px;\n  height: 40px;\n  width: 40px;\n  text-align: center;\n}\n#countdown-number {\n  color: #000000;\n  display: inline-block;\n  line-height: 40px;\n}\nsvg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  -webkit-transform: rotateY(-180deg) rotateZ(-90deg);\n          transform: rotateY(-180deg) rotateZ(-90deg);\n}\nsvg circle {\n  stroke-dasharray: 113px;\n  stroke-dashoffset: 0px;\n  stroke-linecap: round;\n  stroke-width: 2px;\n  stroke: #000000;\n  fill: none;\n  -webkit-animation: countdown 15s linear infinite forwards;\n          animation: countdown 15s linear infinite forwards;\n}\n@-webkit-keyframes countdown {\n  from {\n    stroke-dashoffset: 0px;\n  }\n  to {\n    stroke-dashoffset: 113px;\n  }\n}\n@keyframes countdown {\n  from {\n    stroke-dashoffset: 0px;\n  }\n  to {\n    stroke-dashoffset: 113px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9DOlxcaW9uaWNcXEJhYmVsXFx1c3Vhcmlvcy9zcmNcXGFwcFxcYWNjb3VudFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBQTtBQ0NEO0FER0U7RUFDQyxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNESDtBREdHO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDREo7QURJRztFQUNDLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDRko7QURJSTtFQUNDLG9DQUFBO1VBQUEsOEJBQUE7RUFDZSx3QkFBQTtVQUFBLHVCQUFBO0FDRnBCO0FESW9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRnhCO0FET0c7RUFDQyxxQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0xKO0FEU1E7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ1BaO0FEU1k7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUGhCO0FEVVk7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDUmhCO0FEVWdCO0VBQ0kscUJBQUE7QUNScEI7QURnQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRGVJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFFQSw2QkFBQTtFQUNBLGFBQUE7QUNkUjtBRGlCSTtFQUNJLGdCQUFBO0FDZlI7QURpQlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDZlo7QURrQlE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2hCWjtBRHNCQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNuQko7QURxQkk7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ25CUjtBRHNCSTtFQUNJLFdBQUE7QUNwQlI7QURzQlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNwQlo7QURzQlk7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0FDcEJoQjtBRHNCZ0I7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ3BCcEI7QUR3Qlk7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQ3RCaEI7QUQwQlk7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDeEJoQjtBRDJCWTtFQUNJLGdCQUFBO0FDekJoQjtBRDJCZ0I7RUFDSSx5QkFBQTtBQ3pCcEI7QUQ2Qlk7RUFDSSxtQkFBQTtBQzNCaEI7QURrQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBQy9CSjtBRG1DQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNoQ0o7QURzQ0M7RUFDTyxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDcENSO0FEeUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDdENKO0FEeUNFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUN0Q0o7QUR5Q0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDdENKO0FEeUNFO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QUN0Q0o7QUR5Q0U7RUFDRTtJQUNFLHNCQUFBO0VDdENKO0VEd0NFO0lBQ0Usd0JBQUE7RUN0Q0o7QUFDRjtBRGdDRTtFQUNFO0lBQ0Usc0JBQUE7RUN0Q0o7RUR3Q0U7SUFDRSx3QkFBQTtFQ3RDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cclxuXHRpb24tbGlzdCB7XHJcblxyXG5cdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0d2lkdGg6IDMwJTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lml0ZW1faW5uZXIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcblxyXG5cdFx0XHRcdCYuZC1mbGV4IHtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5idXR0b24uYnRuIHtcclxuXHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0XHRcdGhlaWdodDogMzVweDtcclxuXHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xyXG5cdFx0XHRcdG1pbi13aWR0aDogMTE4cHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG5cdFx0XHRcdC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ucGNfdGV4dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAtLXNpemU6MTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblx0fVxyXG59XHJcblxyXG4uc2lnbl9ycyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcclxuXHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IzgwODA4MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLnNvY2lhbF9sb2dpbiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25fY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuRmFjZWJvb2sge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzNBNTU5RjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuR29vZ2xlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuQXBwbGUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5idG5fbmV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MjVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLndlbGNvbWVfdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uZGlnaXQtZ3JvdXAge1xyXG4gICAgXHJcblxyXG5cdGlvbi1pbnB1dHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDo1MHB4O1xyXG4gICAgICAgIGhlaWdodDoyNXB4O1xyXG4gICAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmMmYyZjtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6N3B4O1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6N3B4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuI2NvdW50ZG93biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7O1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjY291bnRkb3duLW51bWJlciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBzdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKSByb3RhdGVaKC05MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIHN2ZyBjaXJjbGUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzcHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xyXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBzdHJva2U6ICMwMDAwMDA7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgYW5pbWF0aW9uOiBjb3VudGRvd24gMTVzIGxpbmVhciBpbmZpbml0ZSBmb3J3YXJkcztcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBjb3VudGRvd24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMTNweDtcclxuICAgIH1cclxuICB9XHJcbiIsIi5mb3JtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAzMCU7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIuZC1mbGV4IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyLmQtZmxleCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSAuYnV0dG9uLmJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtaW4td2lkdGg6IDExOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbS5wY190ZXh0IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ucGNfdGV4dCBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6NTAlO1xuICAtLXNpemU6MTVweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtLnBjX3RleHQgaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtLnBjX3RleHQgaW9uLWxhYmVsIGEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zaWduX3JzIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2lnbl9ycyBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzgwODA4MDtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnNpZ25fcnMgZGl2IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zaWduX3JzIGRpdiBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNpZ25fcnMgZGl2IHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5zb2NpYWxfbG9naW4ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc29jaWFsX2xvZ2luIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnNvY2lhbF9sb2dpbiAuYnV0dG9uX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNvY2lhbF9sb2dpbiAuYnV0dG9uX2NvbnRhaW5lciAuYnRuIHtcbiAgbWluLWhlaWdodDogNTVweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLnNvY2lhbF9sb2dpbiAuYnV0dG9uX2NvbnRhaW5lciAuYnRuIC5pbWdfYm94IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IDg1cHg7XG59XG4uc29jaWFsX2xvZ2luIC5idXR0b25fY29udGFpbmVyIC5idG4gLmltZ19ib3ggaW1nIHtcbiAgd2lkdGg6IDI3cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNvY2lhbF9sb2dpbiAuYnV0dG9uX2NvbnRhaW5lciAuYnRuIGg2IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xufVxuLnNvY2lhbF9sb2dpbiAuYnV0dG9uX2NvbnRhaW5lciAuYnRuLkZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNBNTU5RjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zb2NpYWxfbG9naW4gLmJ1dHRvbl9jb250YWluZXIgLmJ0bi5Hb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNvY2lhbF9sb2dpbiAuYnV0dG9uX2NvbnRhaW5lciAuYnRuLkdvb2dsZSBoNiB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG4uc29jaWFsX2xvZ2luIC5idXR0b25fY29udGFpbmVyIC5idG4uQXBwbGUge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuXG4uYnRuX25leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOjI1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xufVxuXG4ud2VsY29tZV90ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmRpZ2l0LWdyb3VwIGlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmYyZjJmO1xuICAtLXBhZGRpbmctc3RhcnQ6N3B4O1xuICAtLXBhZGRpbmctdG9wOjdweDtcbn1cblxuI2NvdW50ZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDE1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvdW50ZG93bi1udW1iZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgcm90YXRlWigtOTBkZWcpO1xufVxuXG5zdmcgY2lyY2xlIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTEzcHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gIHN0cm9rZTogIzAwMDAwMDtcbiAgZmlsbDogbm9uZTtcbiAgYW5pbWF0aW9uOiBjb3VudGRvd24gMTVzIGxpbmVhciBpbmZpbml0ZSBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBjb3VudGRvd24ge1xuICBmcm9tIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xuICB9XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTEzcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/login/login.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/account/login/login.page.ts ***!
    \*********************************************/

  /*! exports provided: LoginPage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/server.service */
    "./src/app/service/server.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/sms-retriever/ngx */
    "./node_modules/@ionic-native/sms-retriever/ngx/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/firebase-authentication/ngx */
    "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");

    let LoginPage = class LoginPage {
      constructor(route, server, toastController, keyboard, nav, loadingController, events, smsRetriever, menu, platform, firebaseAuthentication) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.keyboard = keyboard;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.smsRetriever = smsRetriever;
        this.menu = menu;
        this.platform = platform;
        this.firebaseAuthentication = firebaseAuthentication;
        this.user_id = null;
        this.isLoggedIn = false;
        this.users = {
          id: '',
          name: '',
          email: '',
          picture: {
            data: {
              url: ''
            }
          }
        };
        this.verifyCode = false;
        this.isKeyboardHide = true;
        this.isCheckedPC = true;
        this.time_verify = false;
        this.resend_stat = false;
        this.prefjix = "+521";
        this.text = JSON.parse(localStorage.getItem('app_text'));
      }

      ngOnInit() {
        this.windowsRef = this.server.windowRef;
        this.keyboard.onKeyboardWillShow().subscribe(() => {
          this.isKeyboardHide = false; // console.log('SHOWK');
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
          this.isKeyboardHide = true; // console.log('HIDEK');
        });
      }

      ionViewWillEnter() {
        this.phone.setFocus();
        this.menu.enable(false);
        this.Code = '';
        this.verifyCode = false;

        if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != null) {
          this.user_id = localStorage.getItem('user_id');
        }

        this.windowsRef.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].RecaptchaVerifier('recaptcha-container', {
          size: "invisible",
          callback: function (response) {
            this.login();
          }
        });
      }

      otpController(event, next, prev) {
        if (event.target.value.length < 1 && prev) {
          prev.setFocus();
        } else if (next && event.target.value.length > 0) {
          next.setFocus();
        } else {
          this.valid();
        }
      }

      login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const loading = yield this.loadingController.create({
            mode: 'md'
          });
          yield loading.present();

          if (this.phone.value.toString().length > 0) {
            this.number_phone = "+521" + this.phone.value.toString();
            this.firebaseAuthentication.verifyPhoneNumber(this.number_phone, 3000).then(verifyID => {
              localStorage.setItem('confirmationResult', verifyID);
              localStorage.setItem('phone', this.phone.value.toString());
              loading.dismiss();
              this.nav.navigateForward('/verfycode');
            });
          }
        });
      }

      processSMS() {
        setTimeout(() => {
          this.otp1.setFocus();
        }, 300);
        this.smsRetriever.startWatching().then(res => {
          this.time_verify = false;
          clearInterval(this.timer_code);
          var IncomingSMS = res.Message;
          let index = IncomingSMS.lastIndexOf("registro: ");
          let otp_1 = index + 10;
          let otp_2 = index + 11;
          let otp_3 = index + 12;
          let otp_4 = index + 13;
          let otp_5 = index + 14;
          this.OTP = IncomingSMS[otp_1] + IncomingSMS[otp_2] + IncomingSMS[otp_3] + IncomingSMS[otp_4] + IncomingSMS[otp_5];

          if (this.OTP > 0) {
            if (this.OTP == this.OTPorigin) {
              this.otp_1 = IncomingSMS[otp_1];
              this.otp_2 = IncomingSMS[otp_2];
              this.otp_3 = IncomingSMS[otp_3];
              this.otp_4 = IncomingSMS[otp_4];
              this.otp_5 = IncomingSMS[otp_5];
              var allData = {
                user_id: this.user_id,
                phone: this.number_phone
              };
              this.server.chkUser(allData).subscribe(res => {
                if (res.msg == 'phone_exist') {
                  this.presentToast("El número telefonico que intentas registrar ya se encuentra en uso, por favor intenta con otro.", "danger");
                  this.resend();
                } else if (res.msg == "not_exist") {
                  this.presentToast("Termina tu registro ingresando tus datos de contacto. ", "warning");
                  localStorage.setItem("number_phone", JSON.stringify(this.number_phone));
                  this.nav.navigateRoot('/signup');
                } else {
                  this.presentToast('Bienvenido(a) de nuevo...', 'success');
                  localStorage.setItem('user_id', res.user_id);
                  this.events.publish('user_login', res.user_id);
                  this.server.SignPhone({
                    phone: this.number_phone,
                    user_id: res.user_id
                  }).subscribe(req => {
                    if (req.msg == 'done') {
                      let navigationExtras = {
                        queryParams: {
                          redirect: 'home'
                        }
                      };
                      this.nav.navigateForward(['/waitpage'], navigationExtras);
                    } else {
                      this.presentToast(req.msg, 'danger');
                    }
                  });
                }
              });
            } else {
              this.resend_stat = true;
            }
          } else {
            this.presentToast("Algo ha ocurrido mal.", "danger");
            this.verifyCode = false;
            this.resend_stat = true;
          }
        }).catch(error => {
          this.presentToast(error, 'danger');
        });
      }

      resend() {
        this.Code = '';
        this.OTP = '';
        this.OTPorigin = '';
        this.verifyCode = false;
      }

      valid() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.time_verify = false;
          clearInterval(this.timer_code);
          const loading = yield this.loadingController.create({
            message: 'Validando...'
          });
          yield loading.present();
          let Code = this.otp_1 + this.otp_2 + this.otp_3 + this.otp_4 + this.otp_5; // Validamos

          if (Code == this.OTPorigin) {
            var allData = {
              user_id: this.user_id,
              phone: this.number_phone
            };
            this.server.chkUser(allData).subscribe(res => {
              if (res.msg == 'phone_exist') {
                this.presentToast("El número telefonico que intentas registrar ya se encuentra en uso, por favor intenta con otro.", "danger");
                this.resend();
              } else if (res.msg == "not_exist") {
                this.presentToast("Termina tu registro ingresando tus datos de contacto. ", "warning");
                localStorage.setItem("number_phone", JSON.stringify(this.number_phone));
                this.nav.navigateRoot('/signup');
              } else {
                this.presentToast('Bienvenido(a) de nuevo...', 'success');
                localStorage.removeItem('number_phone');
                localStorage.setItem('user_id', res.user_id);
                this.events.publish('user_login', res.user_id);
                this.server.SignPhone({
                  phone: this.number_phone,
                  user_id: res.user_id
                }).subscribe(req => {
                  if (req.msg == 'done') {
                    let navigationExtras = {
                      queryParams: {
                        redirect: 'home'
                      }
                    };
                    this.nav.navigateForward(['/waitpage'], navigationExtras);
                  } else {
                    this.presentToast(req.msg, 'danger');
                  }
                });
              }
            });
            loading.dismiss();
          } else {
            loading.dismiss();
            this.presentToast("El Codigo OTP no es válido", "danger");
            this.Code = '';
            this.resend_stat = true;
          }
        });
      }

      TimerCode() {
        let i = 15;
        this.timer_code = setInterval(() => {
          i = i - 1;

          if (i == 0) {
            this.resend_stat = true;
            this.time_verify = false;
            clearInterval(this.timer_code);
            this.TimerCode();
          }
        }, 1000);
      }

      presentToast(txt, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: txt,
            duration: 3000,
            position: 'top',
            mode: 'ios',
            color: color
          });
          toast.present();
        });
      }

      goBck() {
        this.nav.navigateRoot('welcome');
      }

    };

    LoginPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }, {
      type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]
    }, {
      type: _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_6__["SmsRetriever"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
    }, {
      type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAuthentication"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("phone", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"])], LoginPage.prototype, "phone", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("otp1", {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"])], LoginPage.prototype, "otp1", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/account/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_6__["SmsRetriever"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAuthentication"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=account-login-login-module-es5.js.map