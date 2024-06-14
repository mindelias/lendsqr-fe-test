import { Row } from "antd";
import React from "react";
import './styles.scss'

type UserProfileItemProps = {
  title: string;
  children: React.ReactNode;
};

const UserProfileItem: React.FC<UserProfileItemProps> = ({ title, children }) => {
  return (
    <div className="user-profile-item-container">
      <p className="profile-title mb-lg">{title}</p>
      <Row gutter={8} justify={"start"} wrap>

        {children}
      </Row>

       
    </div>
  );
};

export default UserProfileItem;
