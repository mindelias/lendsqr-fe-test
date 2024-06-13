import React from "react";

import { Pagination, Row } from "antd";
import "./styles.scss";

export const CustomPagination: React.FC<PaginationTypeProps> = ({ currentPage, total, pageSize, setPage }) => {
  return (
    <Row className="pagination-wrapper">
      <div></div>
      <Pagination
        current={currentPage}
        onChange={setPage}
        total={total}
        showTotal={(total, range) => `$ showing  ${range[1]} of ${total}`}
        pageSize={pageSize}
        showSizeChanger
      />
      ;
    </Row>
  );
};
