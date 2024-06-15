// src/Table.js

import React, {   useState } from "react";
 
import "./styles.scss";
import TableHeader from "./TableHeader/TableHeader";
import Ellipsis from '../../assets/icons/ellipsis.svg'
import { faker } from '@faker-js/faker';
import TableBody from "./TableBody";




const Table = ({ data }: { data: any }) => {
  const tableHeaders = [
    { name: "Organization", key: "organization" },
    { name: "Username", key: "username" },
    { name: "Email", key: "email" },
    { name: "Phone Number", key: "phoneNumber" },
    { name: "Date Joined", key: "dateJoined" },
    { name: "Status", key: "status" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [filterType, setFilterType] = useState<string | null>("");

  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>({
    phoneNumber: "",
    status: ""
  });

 
 
  
  
  // const mockData = generateMockData(500); //

  // console.log(mockData);
  
  const handleOpenChange = (isOpen: boolean, filterType: string) => {
    setIsOpen(isOpen);
    setFilterType(isOpen ? filterType : null);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues(prevValues => ({
      ...prevValues,
      [key]: value
    }));
  };

  const showMenu = () => {
    
  }
// Generate mock data
 
  // const handleOpenChange = (newOpen: boolean, filterType: string) => {
  //   setIsOpen(newOpen);
  //   setFilterType(filterType);
  // };
  const hide = () => {
    setIsOpen(false);
    setFilterType("");
  };

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <TableHeader
                key={header.key}
                name={header.key}
                label={header.name}
                isOpen={isOpen}
                filterType={filterType as string}
                filterValues={filterValues}
                handleOpenChange={handleOpenChange}
                handleFilterChange={handleFilterChange}

              />
            ))}
            <th> </th>
            
          </tr>
        </thead>
       <TableBody data={data} showMenu={showMenu} />
      </table>
    </div>
  );
};

export default Table;
