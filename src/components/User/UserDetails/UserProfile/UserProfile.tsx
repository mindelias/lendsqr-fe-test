import React from "react";
import UserProfileItem from "./UserProfileItem";
import { Col } from "antd";
import './styles.scss'

const UserProfile = () => {
  return (
    <div className="user-profile">
      <UserProfileItem title="Personal Information">
        <Col>
          <p className="app-paragraph "> Full Name</p>
          <p className="app-heading--6 text-left"> Grace Effiom</p>
        </Col>

        <Col>
          <p className="app-paragraph text-left"> Full Name</p>
          <p className="app-heading--6 text-left"> Grace Effiom</p>
        </Col>
        <Col>
          <p className="app-paragraph text-left"> Full Name</p>
          <p className="app-heading--6 text-left"> Grace Effiom</p>
        </Col>
        {/* <p>Full Name: <span>Grace Effiom</span></p>
        <p>Email: <span>LSQFf587g90</span></p>
        <p>Phone Number: <span>9912345678</span></p>
        <p>Gender: <span>Female</span></p>
        <p>Marital Status: <span>Married</span></p>
        <p>Date of Birth: <span>11/11/1990</span></p> */}
      </UserProfileItem>
    </div>
  );
};

export default UserProfile;
