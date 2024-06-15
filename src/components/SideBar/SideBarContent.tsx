import React, { useState } from "react";
import { menu } from "../../data/app-menu";
import MenuItem from "../MenuItem/MenuItem";
import { useLocation } from "react-router-dom";

import "./styles.scss";
 

const SideBarContent = () => {
  const [activePath, setActivePath] = useState("/users");
  
  const location = useLocation();
  
  return (
     
      <div className="sidebar-content">
        {menu.map((menu) => {
          if (menu?.hasSubMenu) {
            return (
              <div key={menu.key}>
                <p className="submenu-title">{menu.title}</p>
                {menu.subMenu?.map((subMenu) => (
                  <MenuItem
                    key={subMenu.key}
                    item={subMenu}
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
      </div>
     
  );
};

export default SideBarContent;
