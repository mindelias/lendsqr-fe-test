import { Col, Row, Space } from "antd";
import React from "react";

const UserDetails = () => {
  return (
    <div>
      <Row justify={"space-between"} align={"middle"} className="mb-3" gutter={[16, 16]}>
        <Col>
      <p className="app-heading--3 text-left mb-lg">User Details</p>
        
        </Col>
        <Col>
        <Space>

          
        </Space>
        </Col>

      </Row>
    </div>
  );
};

export default UserDetails;
