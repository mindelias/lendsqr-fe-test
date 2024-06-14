import React, { useState } from "react";
import { menu } from "../../data/app-menu";
import MenuItem from "../MenuItem/MenuItem";
import "./styles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Drawer } from "antd";
import useIsMobile from "../../hooks/useIsMobile";
import useLayoutStore from "../../store/layout";
import SideBarContent from "./SideBarContent";

const SideBar = () => {
  const { isSidebarCollapsed, setSidebarCollapsed } = useLayoutStore();
  const isMobile = useIsMobile();

  const onClose = () => {
    setSidebarCollapsed(false);
  };

  return (
    <section className="sidebar-wrapper">
      <aside className={`sidebar-container ${isMobile ? "d-none" : ""} `}>
        <SideBarContent />
      </aside>
      <Drawer
        title="Menu"
        placement={"left"}
        closable={true}
        onClose={onClose}
        open={isSidebarCollapsed}
        key={"left"}
      >
        <SideBarContent />
      </Drawer>
    </section>
  );
};

export default SideBar;
