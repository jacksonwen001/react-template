import React from 'react';
import { Outlet } from 'react-router-dom';
import SiderBar from './SiderBar';

const Layout = () => {
  return (
    <div className='flex w-screen h-screen overflow-x-auto'>
      <SiderBar />
      <main className="flex flex-grow items-stretch h-full min-w-0">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
