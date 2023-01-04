import React from 'react';
import { useSelector } from 'react-redux';

export default function Main() {  
  const state = useSelector((state) => state);
  
  return (
    <div>
      {state.page.activePage}
    </div>
  );
}
