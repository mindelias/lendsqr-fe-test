import { Row } from "antd";
import React from "react";

type UserProfileItemProps = {
  title: string;
  children: React.ReactNode;
};

const UserProfileItem: React.FC<UserProfileItemProps> = ({ title, children }) => {
  return (
    <div className="user-profile-item-container">
      <p className="app-heading--6 text-left">{title}</p>
      <Row gutter={8} justify={"space-between"} wrap>

        {children}
      </Row>

       
    </div>
  );
};

export default UserProfileItem;
