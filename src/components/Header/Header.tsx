import React from "react";
import Logo from "../../assets/images/logo.svg";
import "./styles.scss";
import { Button, Col, Divider, Dropdown, Input, Row, Space } from "antd";
import Bell from "../../assets/icons/bell.svg";
import UserImg from "../../assets/images/user-img.svg";
import DropdownIcon from "../../assets/icons/dropdown.svg";
import useLayoutStore from "../../store/layout";
import useIsMobile from "../../hooks/useIsMobile";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Search } = Input;

const Header = () => {
  const { isSidebarCollapsed, toggleSidebar } = useLayoutStore();
  const isMobile = useIsMobile();

  

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
      <Row  align="middle" justify={"space-between"} style={{width: "100%"}}>
        <Col xl={14} lg={12} span={8}>
          <Row className="item-left" align="middle" justify={"space-between"}>
            <Col span={4} offset={1} className="logo-cont">
              <img src={Logo} className="logo" alt="logo" />
            </Col>

            <Col span={isMobile ? 0 : 12}>
              <Search
                color="#39CDCC"
                placeholder="input search text"
                onSearch={(value) => console.log(value)}
                size="large"
                enterButton
              />
            </Col>
          </Row>
        </Col>
        <Col xl={8} span={12} >
          <Row className="item-right" align="middle" justify="end" gutter={20}>
            <Col lg={2} xs={0}>
              <a href="http://"> Docs</a>
            </Col>
            <Col lg={2} xs={0}>
              <img src={Bell} alt="" />
            </Col>
            <Col lg={4} xs={0}>
              <img className="user-image" src={UserImg} alt="" />
            </Col>
            <Col lg={4} xs={0}>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()} href="/">
                  <Space>
                    Adedeji
                    <img src={DropdownIcon} alt="" />
                  </Space>
                </a>
              </Dropdown>
            </Col>

            <Col lg={0} xs={4} >
              <Button type="primary"  onClick={toggleSidebar} >
                {isSidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Col>
            <Col  offset={1}>
            </Col>
          </Row>
        </Col>
      </Row>
    </nav>
  );
};

export default Header;
