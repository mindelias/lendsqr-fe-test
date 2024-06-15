import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Row, Space } from "antd";
import TabList from "../../../components/Tabs/TabList";
import UserSummaryCard from "../../../components/User/UserDetails/UserSummaryCard/UserSummaryCard";
import UserProfile from "../../../components/User/UserDetails/UserProfile/UserProfile";

import "./styles.scss";
import { useUserStore } from "../../../store/users";


const UserDetails = () => {
  // const { getUser, user: userDetails } = useUserStore();
  const [user, setUser] = useState({} as User);
  const { updateUser} = useUserStore()
   

  useEffect(() => {
    // Check if user details exist in localStorage
    const storedUser = localStorage.getItem('lendsqr-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },  []);

  const [activeTab, setActiveTab] = React.useState("general-details");
  return (
    <div>
      <Row justify={"space-between"} align={"middle"} className="mb-3" gutter={[16, 16]}>
        <Col>
          <p className="app-heading--3 text-left mb-lg">User Details</p>
        </Col>
        <Col>
          <Space size="large" className="mb-lg">
            <Button type="primary" ghost className="border-secondary text-secondary text-transform-upper" size="large" onClick={() => updateUser({ ...user, status: "active" })}>
              Activate User
            </Button>
            <Button type="primary" danger ghost size="large" className="text-transform-upper" onClick={() => updateUser({ ...user, status: "blacklisted" })}>
              Blacklist User
            </Button>
          </Space>
        </Col>
      </Row>
      <div className="user-details-wrapper">
        <div className="card-style mb-lg pb-0">
          <UserSummaryCard user={user as User} />
          <TabList onTabClick={(tab) => setActiveTab(tab)} activeTab={activeTab} />
        </div>

        <div className="card-style pt-0 h-min-300">
          {activeTab === "general-details" && <UserProfile user={user as User} />}
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
