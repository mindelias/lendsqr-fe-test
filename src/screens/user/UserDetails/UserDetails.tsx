import React from "react";
import { Button, Col, Row, Space } from "antd";
import TabList from "../../../components/Tabs/TabList";
import UserSummaryCard from "../../../components/User/UserDetails/UserSummaryCard/UserSummaryCard";
import UserProfile from "../../../components/User/UserDetails/UserProfile/UserProfile";

import './styles.scss';

 

const UserDetails = () => {
  const [activeTab, setActiveTab] = React.useState("general-details");
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
        <div className="card-style mb-lg pb-0">
          <UserSummaryCard />
          <TabList onTabClick={(tab) => setActiveTab(tab)} activeTab={activeTab} />
        </div>

        <div className="card-style h-min-300">
          {activeTab === "general-details" &&  <UserProfile/>}
          {activeTab === "documents" && <div>Documents</div>}
          {activeTab === "bank-details" && <div>Bank Details</div>}
          {activeTab === "loans" && <div>Loans</div>}
          {activeTab === "savings" && <div>Savings</div>}
          {activeTab === "app-and-system" && <div>App and System</div>}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
