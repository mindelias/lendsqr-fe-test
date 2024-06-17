type PaginationTypeProps = {
    total: number;
    limit?: number;
    pageSize: number;
    currentPage: number;
    showing?: number;
    setPage: (page: number) => void;
}