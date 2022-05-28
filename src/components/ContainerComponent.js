import React from 'react';
import { useSelector } from 'react-redux';

export default function ContainerComponent() {
  
  const state = useSelector((state) => state);
  
  return (
    <div>
      {state.page.activePage}
    </div>
  );
}
