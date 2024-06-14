import React from "react";
import UserProfileItem from "./UserProfileItem";
import { Col } from "antd";
import './styles.scss'

const UserProfile = () => {
  return (
    <div className="user-profile">
      <UserProfileItem title="Personal Information">
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Full Name</p>
          <p className="value"> Grace Effiom</p>
        </Col>

        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Phone Number</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Email Address</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> BVN</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Gender</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle">  Marital Status</p>
          <p className="value"> Grace Effiom</p>
        </Col>

        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Children</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Type Of residence</p>
          <p className="value"> Grace Effiom</p>
        </Col>
         
      </UserProfileItem>


      <UserProfileItem title="Education and Employment">
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Full Name</p>
          <p className="value"> Grace Effiom</p>
        </Col>

        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Phone Number</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Email Address</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> BVN</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Gender</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle">  Marital Status</p>
          <p className="value"> Grace Effiom</p>
        </Col>

        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Children</p>
          <p className="value"> Grace Effiom</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Type Of residence</p>
          <p className="value"> Grace Effiom</p>
        </Col>
         
      </UserProfileItem>

      
    </div>
  );
};

export default UserProfile;
