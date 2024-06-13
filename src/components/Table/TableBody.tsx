import React, { useState } from "react";
import Ellipsis from "../../assets/icons/ellipsis.svg";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import Eye from "../../assets/icons/eye.svg";
import BlacklistUser from "../../assets/icons/user-blacklist.svg";
import ActivateUser from "../../assets/icons/activate-user.svg";
import { useNavigate } from "react-router-dom";


const TableBody = ({ data, showMenu }: { data: any; showMenu: any }) => {
  const [currentRow, setCurrentRow] = useState(-1)
  const navigate = useNavigate();
  const getStatusClassName = (status: string) => {
    switch (status) {
      case "active":
        return "status-span status-active";
      case "blacklisted":
        return "status-span status-blacklisted";
      case "pending":
        return "status-span status-pending";
      default:
        return "status-span status-inactive";
    }
  };
  
  const items: MenuProps["items"] = [
    {
      label: (
        <p className="flex-align-center app-paragraph" >
          <img src={Eye} alt="" />
          <span className="ml-5"> View Details</span>
        </p>
         
      ),
      key: "0",
    },
    {
      label: (
        <p className="flex-align-center app-paragraph">
        <img src={BlacklistUser} alt="" />
        <span className="ml-5"> Blacklist User</span>
      </p>
      ),
      key: "1",
    },

    {
      label: (
        <p className="flex-align-center app-paragraph">
        <img src={ActivateUser} alt="" />
        <span className="ml-5"> Activate User</span>
      </p>
      ),
      key: "2",
    },

    
    {
      type: "divider",
    },
     
  ];
  const onViewDetails = (key : any, id : number, row : any) => {
     
    console.log({key, index: id, row});
    setCurrentRow(id)
    switch (key.key) {
      case "0":
        console.log("View Details");
        navigate(`/user/${row.id}`);
        
        break;
      case "1":
        console.log("Blacklist User");
        break;
      case "2":
        console.log("Activate User");
        break;
      default:
        break;
    }
     
    
  };
  // const handleMenuClick: MenuProps['onClick'] = (e) => {
  //   message.info('Click on menu item.');
  //   console.log('click', e);
  // };

  return (
    <tbody>
      {data.map((row: any, index: number) => (
        <tr key={index}>
          <td>{row.organization}</td>
          <td>{row.username}</td>
          <td>{row.email}</td>
          <td>{row.phoneNumber}</td>
          <td>{row.dateJoined}</td>
          <td>
            {" "}
            <span className={getStatusClassName(row.status)}> {row.status}</span>
          </td>
          <td onClick={showMenu}>
            <Dropdown menu={{ items, onClick: (e) => onViewDetails(e, index, row) }} >
              <div >
                <Space>
                  <img src={Ellipsis} alt="" />
                </Space>
              </div>
            </Dropdown>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
