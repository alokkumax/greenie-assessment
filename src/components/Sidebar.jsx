import React from 'react'
import "../../src/App.css"
import navs from '../constants/navs'
import { useLocation } from 'react-router-dom';
const Sidebar = () => {
  const loc = useLocation();

  return (
    <div className='sidebar'>
    <div>
      <h2 className='brand'>DASH</h2>
      <div className='navs'>
        {navs.map(({ name,icon, iconOutine , path ,id}) => {
              return (
                  <div key={id} className={loc.pathname === path ? "navTile activeNav" : "navTile"}>
                  <a href={path}>{loc.pathname === path ? icon : iconOutine}</a>
                  <a href={path}>{name}</a>
                  </div>
              );
            })}
      </div>
    </div>
    <div className='footer'>
      <span>D</span>
      <span>Copyright @Greenie</span>
    </div>
      
    </div>
  )
}

export default Sidebar