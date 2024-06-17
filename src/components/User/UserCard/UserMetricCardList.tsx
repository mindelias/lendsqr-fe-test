import React from "react";
import UserMetricItemCard from "./UserMetricItemCard";
import { Col, Row } from "antd";
import { userMetrics } from "../../../data/user/metric-data";


const UserMetricCardList = () => {
  return (
    <Row gutter={16} >
      {userMetrics.map((item) => (
        <Col span={6} xl={6} md={8} xs={12} key={item.title} className="mb-lg">
          <UserMetricItemCard  item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default UserMetricCardList;
