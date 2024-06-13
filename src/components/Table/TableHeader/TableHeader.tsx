import React from "react";
import { Popover } from "antd";
import FilterDropdownIcon from "../../../assets/icons/filter-icon.svg";
import { renderFilterContent } from "./RenderFilterContent";
import InputField from "../../Input/Input";

function TableHeader({
  isOpen,
   
  name,
  label,
  filterType,
  filterValues,
  handleFilterChange,
  handleOpenChange,
}: TableHeaderProps) {

    // const renderFilterContent = (key: string) => {
    //     switch (key) {
    //       case "phoneNumber":
    //         return (
    //           <InputField
    //             label="Phone Number"
    //             value={filterValues.phoneNumber}
    //             placeholder="Filter by phone number"
    //             onChange={(e) => handleFilterChange("phoneNumber", e.target.value)}
    //           />
    //         );
    //       case "status":
    //         return (
    //           <div>
    //             <label>Status:</label>
    //             <select
    //               value={filterValues.status}
    //               onChange={(e) => handleFilterChange("status", e.target.value)}
    //             >
    //               <option value="">All</option>
    //               <option value="active">Active</option>
    //               <option value="inactive">Inactive</option>
    //             </select>
    //           </div>
    //         );
    //       default:
    //         return null;
    //     }
    //   };
  return (
    <th>
      <div className="table-header">
        <p> {name} </p>

        <Popover
        //   content={renderFilterContent(name as string)}
          content={renderFilterContent({
            
            name,
            filterType,
            handleOpenChange: handleOpenChange,
            filterValues: filterValues,
            handleFilterChange: handleFilterChange,
          })}
        //   title={name}
          trigger="click"
          open={isOpen && filterType === name}
          placement="bottom"
          onOpenChange={(isOpen) => handleOpenChange(isOpen, name as string)}
        >
          {/* <Button type="primary">Click me</Button> */}
          <img src={FilterDropdownIcon} alt="" />
        </Popover>
      </div>
    </th>
  );
}

export default TableHeader;
