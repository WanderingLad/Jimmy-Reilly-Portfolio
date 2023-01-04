import React, { useEffect } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PageProvider from './utils/PageContext';

export default function App() {
  useEffect(() => {
    document.title = 'Jimmy Reilly Portfolio';
  }, []);

  return (
    <PageProvider>
      <Header />
      <div class="d-flex">
        <Sidebar />
        <Main />
      </div>
    </PageProvider>
  );
}