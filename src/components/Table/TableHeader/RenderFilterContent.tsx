import React from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useUserStore } from "../../../store/users";
import { TableHeaderProps } from "./types";

export function RenderFilterContent({ name, filterValues, handleFilterChange, resetFilter, setIsOpen  }: TableHeaderProps) {
  const { filterUsers } = useUserStore();
  const handleAppplyFilterChange = () => {
    filterUsers({ ...filterValues });
    setIsOpen?.(false);
  };
  const renderFilterActionButtons = () => (
    <Row gutter={16}>
      <Col>
        <Button type="primary" className="border-primary text-primary" ghost onClick={() => {
          resetFilter?.()
          setIsOpen?.(false)
        }}>
          Reset
        </Button>
      </Col>
      <Col>
        <Button onClick={() => handleAppplyFilterChange()}>Apply</Button>
      </Col>
    </Row>
  );

  switch (name) {
    case "organization":
      return (
        <Form layout="vertical">
          <Form.Item label="Organization">
            <Input
              size="large"
              placeholder="Filter by organization"
              value={filterValues.organization}
              onChange={(e: { target: { value: string } }) => handleFilterChange?.("organization", e.target.value)}
            />
          </Form.Item>

          {renderFilterActionButtons()}
        </Form>
      );
    case "username":
      return (
        <Form layout="vertical">
          <Form.Item label="Username">
            <Input
              size="large"
              placeholder="Filter by username"
              value={filterValues.username}
              onChange={(e: { target: { value: string } }) => handleFilterChange?.("username", e.target.value)}
            />
          </Form.Item>

          {renderFilterActionButtons()}
        </Form>
      );
    case "email":
      return (
        <Form layout="vertical">
          <Form.Item label="Email">
            <Input
              size="large"
              placeholder="Filter by email"
              value={filterValues.email}
              onChange={(e: { target: { value: string } }) => handleFilterChange?.("email", e.target.value)}
            />
          </Form.Item>

          {renderFilterActionButtons()}
        </Form>
      );
    case "phoneNumber":
      return (
        <Form layout="vertical">
          <Form.Item label="Phone Number">
            <Input
              size="large"
              placeholder="Filter by phone number"
              value={filterValues.phoneNumber}
              onChange={(e: { target: { value: string } }) => handleFilterChange?.("phoneNumber", e.target.value)}
            />
          </Form.Item>

          {renderFilterActionButtons()}
        </Form>
      );
    case "dateJoined":
      return (
        <Form layout="vertical">
          <Form.Item label="Date Joined">
            <DatePicker
              size="large"
              value={filterValues.dateJoined}
              onChange={(date) => handleFilterChange?.("dateJoined", date)}
            />
          </Form.Item>

          {renderFilterActionButtons()}
        </Form>
      );
    case "status":
      return (
        <Form layout="vertical">
          <Form.Item label="Status">
            <Select
              defaultValue="All"
              // style={{ width: 120 }}
              onChange={(value) => handleFilterChange?.("status", value)}
              options={[
                { value: "", label: "All" },
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
                { value: "blacklisted", label: "Blacklisted" },
                { value: "pending", label: "Pending" },
              ]}
            />
          </Form.Item>

          {renderFilterActionButtons()}
        </Form>
      );
    default:
      return <div></div>;
  }
}
