import React, { useEffect } from 'react';
import Header from "./components/Header";
import ContainerComponent from './components/ContainerComponent';
import Footer from "./components/Footer";
import PageProvider from './utils/PageContext';

export default function App() {
  useEffect(() => {
    document.title = 'Jimmy Reilly Portfolio';
  }, []);

  return (
    <PageProvider>
      <Header />
      <ContainerComponent />
      <Footer />
      </PageProvider>
  );
}