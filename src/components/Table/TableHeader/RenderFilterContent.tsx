import React from "react";
import InputField from "../../Input/Input";
import { Button, Col, Row } from "antd";
import { useUserStore } from "../../../store/users";

export function RenderFilterContent({ name, filterValues, handleFilterChange }: TableHeaderProps) {
  const { filterUsers } = useUserStore();
  const handleAppplyFilterChange = () => {
    console.log('====================================');
    console.log('filterValues ',filterValues);
    console.log('====================================');
    filterUsers({ ...filterValues });
  };

  switch (name) {
    case "phoneNumber":
      return (
        <div>
          <InputField
            label="Phone Number"
            value={filterValues.phoneNumber}
            placeholder="Filter by phone number"
            onChange={(e: { target: { value: string } }) => handleFilterChange("phoneNumber", e.target.value)}
          />
          <Row gutter={16}>
            <Col>
              <Button type="primary" className="border-primary text-primary"  ghost onClick={() =>  {}}>
                Reset
              </Button>
            </Col>
            <Col>
              <Button type="primary" className="bg-secondary" onClick={() => handleAppplyFilterChange()}>
                Apply
              </Button>
            </Col>
          </Row>
        </div>
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
