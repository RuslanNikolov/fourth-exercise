import React, { ErrorInfo } from 'react';
import * as MUI from '@mui/material'

interface IErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: unknown) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.error(errorInfo.componentStack)
    }

    render() {
        if (this.state.hasError) {
            return <MUI.Alert severity="error">Something went wrong.</MUI.Alert>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;