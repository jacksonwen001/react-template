import React, { useEffect, useState } from 'react';
import { matchRoutes, NavLink, RouteObject, useLocation } from 'react-router-dom';
import { routes } from '../routes';
import {BsSlash} from 'react-icons/bs'
const pickPaths = (routes: RouteObject[], pathname: string) => {
  let matches = matchRoutes(routes, pathname);
  return matches && matches.map((match) => {
    
    if( match.route.path === '/') {
      return ({ name: "Dashboard", path: match.route.path || "" })
    }

    const name = match.route.path?.replaceAll("\/", ""); 
    return ({ name, path: match.route.path || "" })


  }).filter(it => it?.name || it.path.includes(":"));
}



const BreadCrumd = () => {
  const location = useLocation()
  const [matchRoutes, setMatchRoutes] = useState<any>([]);   

  useEffect(() => {
    const pathes = pickPaths(routes, location.pathname); 
    setMatchRoutes(pathes);
    console.log(pathes);
    
  }, [location]);

  return (
    <div className='flex items-center gap-5'>
      {matchRoutes?.map((it:any, index: number) => {
        if (it === null ) {
          return 
        }
        if(index === matchRoutes.length - 1) {
          return <NavLink key={index} className="capitalize " to={it.path}> {it.name}</NavLink>
        } else {
          return <NavLink key={index} className="capitalize inline-flex items-center gap-5" to={it.path}> {it.name} <i><BsSlash /></i></NavLink>
        }
      })}
    </div>
  );
}

export default BreadCrumd;
