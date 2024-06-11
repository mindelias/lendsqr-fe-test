import React, { useState } from "react";
import { menu } from "../../data/app-menu";
import MenuItem from "../MenuItem/MenuItem";
import "./styles.scss";
import { useLocation, useNavigate } from "react-router-dom";


const SideBar = () => {
  const [activePath, setActivePath] = useState('/users');
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar-container">
      {menu.map((menu) => {
        if (menu?.hasSubMenu) {
          return (
            <div  key={menu.key}>
              <p className="submenu-title">{menu.title}</p>
              {menu.subMenu?.map((subMenu) => (
                <MenuItem
                  key={subMenu.key}
                  item={subMenu}
                  // onClick={() => handleClick(subMenu, subMenu.path)}
                  active={location.pathname === subMenu.path}
                  activePath={activePath}
                  setActivePath={setActivePath}
                />
              ))}
            </div>
          );
        } else {
          return (
            <MenuItem
               key={menu.key}
               item={menu}
               active={location.pathname === menu.path}
               setActivePath={setActivePath}
               activePath={activePath}
               
            />
          );
        }
      })}
    </aside>
  );
};

export default SideBar;
