import React from "react";
import { Button, Col, Row, Space } from "antd";
import Avatar from "../../../assets/icons/avatar.svg";
import StarGoldFill from "../../../assets/icons/star-gold-filled.svg";
import StarGold from "../../../assets/icons/star-gold.svg";
import "./styles.scss";

const UserDetails = () => {
  return (
    <div>
      <Row justify={"space-between"} align={"middle"} className="mb-3" gutter={[16, 16]}>
        <Col>
          <p className="app-heading--3 text-left mb-lg">User Details</p>
        </Col>
        <Col>
          <Space>
            <Button type="primary" ghost className="border-secondary text-secondary text-transform-upper" size="large">
              Activate User
            </Button>
            <Button type="primary" danger ghost size="large" className="text-transform-upper">
              Blacklist User
            </Button>
          </Space>
        </Col>
      </Row>
      <div className="user-details-wrapper">
        <div className="card-style">
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]} align={"middle"}> 
            <Col>
              <Row align={"middle"} gutter={[16, 16]}>
                <Col>
                  <div className="avatar">
                    <img src={Avatar} alt="" />
                  </div>
                </Col>
                <Col>
                  <p className="app-heading--4 mb-10">Grace Effiom</p>
                  <p className="app-paragraph text-left">LSQFf587g90</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <div className="user-tier">
                <p className="app-paragraph mb-10">User's Tier</p>
                <Space>
                  <img src={StarGoldFill} alt="" />
                  <img src={StarGold} alt="" />
                  <img src={StarGold} alt="" />
                </Space>
              </div>
            </Col>
            <Col>
              <p className="app-heading--4 mb-10 text-left">₦200,000.00</p>

              <p className="app-paragraph">9912345678/Providus Bank</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
