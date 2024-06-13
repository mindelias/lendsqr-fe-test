import React, { useEffect, useState } from "react";
import UserMetricCardList from "../../components/User/UserCard/UserMetricCardList";
import { CustomPagination } from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import { PaginationProps } from "antd";

const Users = () => {
  const data = [
    { phoneNumber: "123-456-7890", status: "active" },
    { phoneNumber: "987-654-3210", status: "inactive" },
  ];
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const perPage = 10; // Number of items per page

  const paginate = (data: any[], page: number, perPage: number) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return data.slice(start, end);
  };
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setPage(page);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://run.mocky.io/v3/605d6edb-34bf-432f-b118-199e110cf2da?page=${page}&perPage=${perPage}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const paginatedData = paginate(data.data, page, perPage);

        console.log("data", paginatedData);

        setUsers(paginatedData);
        setLoading(false);
      } catch (error: any) {
        setError(error?.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]); // Fetch data when page changes
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <p className="app-heading--3 text-left mb-lg">Users</p>
      <div className="mb-lg">
        <UserMetricCardList />
      </div>
      <div className="mb-lg">
        <Table data={users} />
      </div>

      <CustomPagination currentPage={page} total={500} pageSize={perPage} setPage={setPage} />
    </div>
  );
};

export default Users;
