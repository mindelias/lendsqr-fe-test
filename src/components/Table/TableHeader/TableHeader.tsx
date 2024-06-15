import React, { useState } from "react";
import { Popover } from "antd";
import FilterDropdownIcon from "../../../assets/icons/filter-icon.svg";
import { RenderFilterContent } from "./RenderFilterContent";
import { useUserStore } from "../../../store/users";

function TableHeader({
  isOpen,
  name,
  label,
  filterType,

  handleOpenChange,
}: TableHeaderProps) {
  const initialValues: Partial<User> = {
    phoneNumber: "",
    status: "",
    // dateJoined: "",
    organization: "",
    username: "",
    email: "",
  };
  const [filterValues, setFilterValues] = useState<Partial<User>>(initialValues);
  const { resetFilter } = useUserStore();

  const handleFilterChange = (key: string, value: any) => {
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
          content={RenderFilterContent({
            name,
            filterType,
            handleOpenChange: handleOpenChange,
            filterValues: filterValues,
            handleFilterChange: handleFilterChange,
            resetFilter: resetFilter,
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
