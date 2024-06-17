import React, { useState } from "react";
import { Popover } from "antd";
import FilterDropdownIcon from "../../../assets/icons/filter-icon.svg";
import { RenderFilterContent } from "./RenderFilterContent";
import { useUserStore } from "../../../store/users";
import { TableHeaderProps } from "./types";

function TableHeader({
  name,
}: TableHeaderProps) {
  const initialValues: Partial<User> = {
    phoneNumber: "",
    status: "",
    // dateJoined: "",
    organization: "",
    username: "",
    email: "",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [filterType, setFilterType] = useState<string | null>("");
  const [filterValues, setFilterValues] = useState<Partial<User>>(initialValues);
  const { resetFilter } = useUserStore();

  const handleFilterChange = (key: string, value: any) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleOpenChange = (isOpen: boolean, filterType: string) => {
    setIsOpen(isOpen);
    setFilterType(isOpen ? filterType : null);
  };

  return (
    <th>
      <div className="table-header">
        <p> {name} </p>

        <Popover
          content={RenderFilterContent({
            name,
            filterType: filterType as string,
            handleOpenChange: handleOpenChange,
            filterValues: filterValues,
            handleFilterChange: handleFilterChange,
            resetFilter: resetFilter,
            setIsOpen: setIsOpen,
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
