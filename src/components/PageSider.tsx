import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

export interface PageMenuProps {
  title: string, 
  path: string,
  icon: ReactNode
}

const PageSider = (props: {
  groupName?: string
  menus: PageMenuProps[]
}) => {
  return (
    <div className='flex flex-col min-w-[220px] grow-0 shrink-0 overflow-x-hidden overflow-y-auto border-solid border-gray-100 border-r-1 bg-white p-3'>
      {props.groupName &&
        <div className='text-gray-200'>{props.groupName}</div>
      }
      <div className='flex flex-col'>
        {props.menus.map(it => (
          <div key={it.title} className='flex items-center min-w-0 h-10 text-gray-600 cursor-pointer pl-3 hover:bg-gray-200 hover:text-gray-900 first: pt-0 last:pb-0'>
            <i className='text-lg mr-2'>{it.icon}</i>
            <NavLink to={it.path} >{ it.title }</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageSider;
