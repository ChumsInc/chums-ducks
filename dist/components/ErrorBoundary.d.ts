import React, { Component } from 'react';
export default class ErrorBoundary extends Component {
    state: {
        hasError: boolean;
        componentStack: string;
        message: string;
    };
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: any): void;
    render(): React.ReactNode;
}
