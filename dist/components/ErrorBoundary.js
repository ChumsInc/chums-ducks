var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import Alert from "../ducks/alerts/Alert";
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false,
            componentStack: '',
            message: '',
        };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ componentStack: errorInfo.componentStack, message: error.message });
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.state, hasError = _a.hasError, componentStack = _a.componentStack, message = _a.message;
        if (hasError) {
            return (React.createElement(React.Fragment, null,
                React.createElement("h1", null, "Sorry! something went wrong!"),
                React.createElement(Alert, { color: "danger" }, message),
                React.createElement("code", { className: "pre" },
                    React.createElement("pre", { style: { whiteSpace: 'pre-wrap' } }, componentStack))));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(Component));
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map