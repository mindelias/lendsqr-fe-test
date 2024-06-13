import React from "react";
import InputField from "../../Input/Input";

export function renderFilterContent({ name, filterValues, handleFilterChange }: TableHeaderProps) {
  

  switch (name) {
    case "phoneNumber":
      return (
        <InputField
          label="Phone Number"
          value={filterValues.phoneNumber}
          placeholder="Filter by phone number"
          onChange={(e: { target: { value: string } }) => handleFilterChange("phoneNumber", e.target.value)}
        />
      );
    case "status":
      return (
        <div>
          <label>Status:</label>
          <select value={filterValues.status} onChange={(e) => handleFilterChange("status", e.target.value)}>
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      );
    default:
      return <div></div>;
  }
}
