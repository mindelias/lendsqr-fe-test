import React from 'react'
import { Row, Col,  Space } from 'antd'
import Avatar from '../../../../assets/icons/avatar.svg'
import StarGoldFill from '../../../../assets/icons/star-gold-filled.svg'
import StarGold from '../../../../assets/icons/star-gold.svg'
import { formatCurrency } from '../../../../utils/formatAmount'

const UserSummaryCard = ({user}: {user: Partial<User>}) => {
  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]} align={"middle"}>
    <Col>
      <Row align={"middle"} gutter={[16, 16]}>
        <Col>
          <div className="avatar">
            <img src={Avatar} alt="" />
          </div>
        </Col>
        <Col>
          <p className="app-heading--4 mb-10">{user?.fullName}</p>
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
      <p className="app-heading--4 mb-10 text-left"> {formatCurrency(parseFloat(user?.educationAndEmployment?.monthlyIncome[0] as string))}</p>

      <p className="app-paragraph">9912345678/Providus Bank</p>
    </Col>
  </Row>
  )
}

export default UserSummaryCard