import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { List } from 'antd';



function MenuItem({ item, active, setActivePath, activePath }: MenuProps) {
  const navigate = useNavigate();
  const { title, path, icon, name } = item;

  const handleClick = (item: MenuItemProps, path: string) => {
    if(item.hasSubMenu){
       return null
    }else{
       navigate(path);
       setActivePath(path);
 
    }
   };

  return (
    <List.Item  key={name} onClick={() => handleClick(item, path as string)} className={`menu-item ${active ? 'active' : ''}`}>
      <div className="icon" style={{ opacity: active ? 1 : 0.5 }}>
         <img src={icon} alt="" />
         {/* <img src={Briefcase} alt="" /> */}
         
      </div>
      <span className={`title   ${active ? 'active' : ''}`}>{title}</span>
    </List.Item>
  );
}

export default MenuItem;
