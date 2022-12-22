import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from "./Sidebar";

export default function ContainerComponent() {
  
  const state = useSelector((state) => state);
  
  return (
    <main class="d-flex">
      <Sidebar />
      {state.page.activePage}
    </main>
  );
}
