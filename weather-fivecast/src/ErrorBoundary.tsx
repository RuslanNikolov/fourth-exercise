import React, { ErrorInfo } from 'react';
import { Alert } from '@mui/material'

interface IErrorBoundaryState {
    hasError: boolean,
    message: string
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false, message: '' };
    }

    static getDerivedStateFromError(error: unknown) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, message: (error as any).message };
    }

    componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
        this.setState({ hasError: true, message: (error as any).message });

        // You can also log the error to an error reporting service
        console.error(errorInfo.componentStack)
    }

    render() {
        if (this.state.hasError) {
            return <Alert severity="error">Something went wrong. {this.state.message}</Alert>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;