import { Component, ReactNode } from 'react';

import {
  ErrorContainer,
  ErrorTitle,
  ErrorMessage,
  RetryButton,
} from './styles';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorContainer role="alert">
          <ErrorTitle>Что-то пошло не так</ErrorTitle>
          <ErrorMessage>
            {this.state.error?.message || 'Произошла непредвиденная ошибка'}
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>
            Попробовать снова
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}
