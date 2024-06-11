import React from "react";
import Logo from "../../assets/images/logo.svg";
import "./styles.scss";
import { Col, Divider, Dropdown, Input, Row, Space } from "antd";
import Bell from "../../assets/icons/bell.svg";
import UserImg from "../../assets/images/user-img.svg";
import DropdownIcon from "../../assets/icons/dropdown.svg"
const { Search } = Input;

const Header = () => {
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          2nd menu item
        </a>
      ),
    },
  ];
  return (
    <nav className="header-container">
      <Row className="item-left" align="middle" justify={"space-between"}>
        <Col span={4} className="logo-cont">
          <img src={Logo} className="logo" alt="logo" />
        </Col>

        <div className="search-wrapper">
          <Search
            color="#39CDCC"
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            size="large"
            enterButton
          />
        </div>
      </Row>
      <Row className="item-right" align="middle" justify="end" gutter={20}>
        <Col>
          <a href="http://"> Docs</a>
        </Col>
        <Col>
          <img src={Bell} alt="" />
        </Col>
        <Col>
          <img className="user-image" src={UserImg} alt="" />
        </Col>
        <Col>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()} href="/">
              <Space>
                Adedeji
                <img src={DropdownIcon} alt="" />
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </nav>
  );
};

export default Header;
