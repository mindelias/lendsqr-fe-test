import { create } from "zustand";

import axios from "axios";
import dayjs from "dayjs";

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  total: 0,
  filteredUsers: [],
  page: 1,
  perPage: 20,
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const { page, perPage } = get();
      const response = await axios.get(
        `https://run.mocky.io/v3/ad6c5f91-88f7-43e1-87e8-c34940018301?page=${page}&perPage=${perPage}`
      );
      set({
        users: response.data.data,
        filteredUsers: response.data.data,
        loading: false,
        total: response.data.data.length,
      });
    } catch (error) {
      set({ loading: false, error: "Failed to fetch users" });
    }
  },
  updateUser: (updatedUser) => {
    const { users } = get();
    const newUsers = users.map((user) => (user.id === updatedUser.id ? updatedUser : user));
    set({ users: newUsers, filteredUsers: newUsers });
  },
  filterUsers: (query) => {
    const { users } = get();
    const filteredUsers = users.filter((user) =>
      Object.entries(query).every(([key, value]) => {
        if (key === "dateJoined") {
          const filterDate = dayjs(value);
          const userDate = dayjs(user.dateJoined);

          // Compare year and month
          if (filterDate.isValid() && filterDate.isSame(userDate, "month")) {
            return true;
          }

          // Compare exact date
          if (filterDate.isValid() && filterDate.isSame(userDate, "day")) {
            return true;
          }

          return false;
        } else {
          return user[key as keyof User]?.toString().toLowerCase().includes(value.toString().toLowerCase());
        }
      })
    );
    // const filteredUsers = users.filter((user) =>
    //   Object.entries(query).every(([key, value]) =>
    //     user[key as keyof User]?.toString().toLowerCase().includes(value.toString().toLowerCase())
    //   )
    // );
    set({ filteredUsers, page: 1, total: filteredUsers.length }); // Reset to first page on filter
  },
  resetFilter: () => {
    const { users } = get();
    set({ filteredUsers: users, page: 1, total: users.length }); // Reset to first page on reset
  },
  setPage: (page) => set({ page }),
}));
