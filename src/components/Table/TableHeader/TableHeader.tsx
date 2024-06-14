import React, { useState } from "react";
import { Popover } from "antd";
import FilterDropdownIcon from "../../../assets/icons/filter-icon.svg";
import { RenderFilterContent } from "./RenderFilterContent";

function TableHeader({
  isOpen,
  name,
  label,
  filterType,

  handleOpenChange,
}: TableHeaderProps) {
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>({
    phoneNumber: "",
    status: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <th>
      <div className="table-header">
        <p> {name} </p>

        <Popover
          //   content={renderFilterContent(name as string)}
          content={RenderFilterContent({
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
