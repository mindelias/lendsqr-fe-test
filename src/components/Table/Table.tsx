import React, {   useState } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody";
import "./styles.scss";




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
       <TableBody data={data} />
      </table>
    </div>
  );
};

export default Table;
