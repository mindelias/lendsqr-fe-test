// TabList.tsx

import React from "react";
import "./styles.scss";
import { tabList } from "../../data/user/user-tab-list";

interface TabListProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const TabList: React.FC<TabListProps> = ({ activeTab, onTabClick }) => {
  return (
    <div className="tab-list">
      {tabList.map((tab) => (
        <div className={`tab ${activeTab === tab.name ? "active" : "inactive"}`} onClick={() => onTabClick(tab.name)}>
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default TabList;
