type PaginationTypeProps = {
    total: number;
    limit?: number;
    pageSize: number;
    currentPage: number;
    setPage: (page: number) => void;
}