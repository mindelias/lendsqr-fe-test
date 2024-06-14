import React from "react";

import { Col, Pagination, Row } from "antd";
import "./styles.scss";

export const CustomPagination: React.FC<PaginationTypeProps> = ({ currentPage, total, pageSize, setPage }) => {
  return (
    <Row className="pagination-wrapper" align="middle" justify={"space-between"}>
      <Col span={6}>
        <div>
          <p className="app-paragraph text-left">
            Showing  
            <span className="total-info" >  {`${currentPage * pageSize} `}</span>
             out of {total}{" "}
          </p>
        </div>
      </Col>
      <Pagination
        current={currentPage}
        onChange={setPage}
        total={total}
        // showTotal={(total, range) => `$ showing  ${range[1]} of ${total}`}
        pageSize={pageSize}
        showSizeChanger
        onShowSizeChange={(current, size) => {
          console.log(current, size)
        }}
      />
      
    </Row>
  );
};
