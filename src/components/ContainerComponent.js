import React from 'react';
import { useSelector } from 'react-redux';

export default function ContainerComponent() {
  
  const state = useSelector((state) => state);

  console.log(state.page.activePage);
  return (
    <div>
      {state.page.activePage}
    </div>
  );
}
