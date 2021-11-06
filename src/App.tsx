import React from 'react';
import type { FC } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import type { BaseComponent } from './typings';

const App: FC<BaseComponent> = () => {
  return (
    <ErrorBoundary>
      <div data-testid="div">hello world</div>
    </ErrorBoundary>
  );
};

export default App;
