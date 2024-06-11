import { Card, Space } from "antd";
import React from "react";
import "./styles.scss";

const UserMetricItemCard = ({ item }: { item: UserMetricItemCardProps }) => {
  return (
    <Card>
      <Space  className="card-container" direction="vertical" align="start">
        <img src={item.icon} alt="" />

        <p className="app-paragraph text-transform-upper text-left">{item.title}</p>

        <p className="app-heading--4">{item.total}</p>
      </Space>
    </Card>
  );
};

export default UserMetricItemCard;
