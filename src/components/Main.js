import React from 'react';
import { useSelector } from 'react-redux';

export default function Main() {  
  const state = useSelector((state) => state);
  
  return (
    <main>
      {state.page.activePage}
    </main>
  );
}
