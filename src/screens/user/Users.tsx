import React, { useEffect, useMemo } from "react";
import UserMetricCardList from "../../components/User/UserCard/UserMetricCardList";
import { CustomPagination } from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import { useUserStore } from "../../store/users";

const Users = () => {
  const { users, total, filteredUsers, page, perPage, loading, error, fetchUsers, setPage } = useUserStore();

  // const paginatedUsers = filteredUsers.slice((page - 1) * perPage, page * perPage);
  const paginatedUsers = useMemo(() => {
    return filteredUsers.slice((page - 1) * perPage, page * perPage);
  }, [filteredUsers, page, perPage]);

  useEffect(() => {
    fetchUsers(); // Fetch users from Mocky API
  }, [fetchUsers]);

  if (loading && users.length === 0) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <p className="app-heading--3 text-left mb-lg">Users</p>
      <div className="mb-lg">
        <UserMetricCardList />
      </div>
      <div className="mb-lg">
        {loading && users.length > 1 ? <div>Loading...</div> : <Table data={paginatedUsers} />}
      </div>

      <CustomPagination currentPage={page} total={total} pageSize={perPage} setPage={setPage} />
    </div>
  );
};

export default Users;
