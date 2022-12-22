import React, { useEffect } from 'react';
import ContainerComponent from './components/ContainerComponent';
import PageProvider from './utils/PageContext';

export default function App() {
  useEffect(() => {
    document.title = 'Jimmy Reilly Portfolio';
  }, []);

  return (
    <PageProvider>
      <ContainerComponent />
    </PageProvider>
  );
}