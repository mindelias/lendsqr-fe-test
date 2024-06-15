import React from "react";
import UserProfileItem from "./UserProfileItem";
import { Col } from "antd";
import "./styles.scss";
import { truncateText } from "../../../../utils/truncateText";
import { formatCurrency } from "../../../../utils/formatAmount";

const UserProfile = ({ user }: { user: Partial<User> }) => {
  console.log(user);
  return (
    <div className="user-profile">
      <UserProfileItem title="Personal Information">
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Full Name</p>
          <p className="value"> {user?.fullName}</p>
        </Col>

        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Phone Number</p>
          <p className="value"> {user?.phoneNumber}</p>
        </Col>
        <Col span={4} xl={8} md={10} xs={12} className="mb-lg">
          <p className="subtitle"> Email Address</p>
          <p className="value"> {truncateText(user?.email as string)}</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> BVN</p>
          <p className="value"> {user?.bvn}</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Gender</p>
          <p className="value"> {user?.gender}</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Marital Status</p>
          <p className="value"> {user?.maritalStatus}</p>
        </Col>

        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Children</p>
          <p className="value"> {user?.children ? user?.children : "None"}</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Type Of residence</p>
          <p className="value"> {user?.residentType}</p>
        </Col>
      </UserProfileItem>

      <UserProfileItem title="Education and Employment">
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Level of Education</p>
          <p className="value"> {user?.educationAndEmployment?.level}</p>
        </Col>

        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Employment Status</p>
          <p className="value"> {user.educationAndEmployment?.employmentStatus}</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Sector of employment</p>
          <p className="value"> {user.educationAndEmployment?.sector}</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Duration of employment</p>
          <p className="value"> {user?.educationAndEmployment?.duration}</p>
        </Col>
        <Col span={4} xl={8} md={10} xs={12} className="mb-lg">
          <p className="subtitle"> Office email</p>
          <p className="value"> {truncateText(user?.educationAndEmployment?.officeEmail as string)}</p>
        </Col>
        <Col span={4} xl={8} md={10} xs={12} className="mb-lg">
          <p className="subtitle"> Monthly Income</p>
          <p className="value">
            {" "}
            {formatCurrency(parseFloat(user?.educationAndEmployment?.monthlyIncome[0] as string))}   - { formatCurrency(parseFloat(user.educationAndEmployment?.monthlyIncome[1] as string))}
          </p>
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

      <UserProfileItem title="Socials">
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Twitter</p>
          <p className="value"> {truncateText(user?.socials?.twitter as string)}</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Facebook</p>
          <p className="value"> {truncateText(user?.socials?.facebook as string)}</p>
        </Col>
        <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
          <p className="subtitle"> Instagram</p>
          <p className="value"> {truncateText(user?.socials?.instagram as string)}</p>
        </Col>
      </UserProfileItem>

      {user.guarantor &&
        user.guarantor.map((guarantor: any, index: number) => (
          <UserProfileItem title={"Guarantor " + (index + 1)}>
            <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
              <p className="subtitle"> Full Name</p>
              <p className="value"> {guarantor.fullname}</p>
            </Col>
            <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
              <p className="subtitle"> Phone Number</p>
              <p className="value"> {guarantor.phoneNumber}</p>
            </Col>
            <Col span={4} xl={4} md={8} xs={12} className="mb-lg">
              <p className="subtitle"> Email Address</p>
              <p className="value"> {truncateText(guarantor.email as string)}</p>
            </Col>
          </UserProfileItem>
        ))}
    </div>
  );
};

export default UserProfile;
