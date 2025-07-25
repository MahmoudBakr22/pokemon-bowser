"use client";

import { Component } from "react";
import ClientErrorBoundry from "./clientErrorBoundry";

export type Props = {
  children: React.ReactNode;
};

class ErrorBoundary extends Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  removeError = () => {
    this.setState({ hasError: false });
  };
  render() {
    if (this.state.hasError) {
      return <ClientErrorBoundry reset={this.removeError} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
