import React, { ReactNode } from "react";

export type Props = {
    error: Error;
    resetErrorBoundary: () => void;
}

export const ErrorBoundaryFallback = ({ error, resetErrorBoundary }: Props) => {
    return (
        <div>
            <h1>An error occurred: {error.message}</h1>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};
