import React from "react";
import UserMetricItemCard from "./UserMetricItemCard";
import { Col, Row } from "antd";
import { userMetrics } from "../../../data/user/metric-data";


const UserMetricCardList = () => {
  return (
    <Row gutter={16} >
      {userMetrics.map((item) => (
        <Col span={6} xl={6} sm={12} xs={24}>
          <UserMetricItemCard item={item} />
        </Col>
      ))}
      {/* <Col span={6}>
        <UserMetricItemCard  item={item}/>
      </Col>

      <Col span={6}>
        <UserMetricItemCard />
      </Col>
      <Col span={6}>
        <UserMetricItemCard />
      </Col>
      <Col span={6}>
        <UserMetricItemCard />
      </Col> */}
    </Row>
  );
};

export default UserMetricCardList;
