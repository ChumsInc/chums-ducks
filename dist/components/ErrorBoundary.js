import React, { Component } from 'react';
import Alert from "./Alert";
export default class ErrorBoundary extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false,
            componentStack: '',
            message: '',
        };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ componentStack: errorInfo.componentStack, message: error.message });
    }
    render() {
        const { hasError, componentStack, message } = this.state;
        if (hasError) {
            return (React.createElement(React.Fragment, null,
                React.createElement("h1", null, "Sorry! something went wrong!"),
                React.createElement(Alert, { color: "danger" }, message),
                React.createElement("code", { className: "pre" },
                    React.createElement("pre", { style: { whiteSpace: 'pre-wrap' } }, componentStack))));
        }
        return this.props.children;
    }
}
//# sourceMappingURL=ErrorBoundary.js.map