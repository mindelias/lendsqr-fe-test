import { create } from "zustand";

import axios from "axios";
import dayjs from "dayjs";
import locallyStoredUser from "../data/user/user-data.json";

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  user: {},
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
      // Todo: extract this to a utility function
      // TODO:  define url in a constant file
      const response = await axios.get(
        `https://run.mocky.io/v3/8cc1a565-3ff5-403f-8b1f-f5dd4050e343?page=${page}&perPage=${perPage}`
      );
      const userData = response?.data && response?.data?.data;

      set((state) => ({
        ...state,
        users: userData.length > 0 ? userData : locallyStoredUser.data,
        filteredUsers: userData.length > 0 ? userData : locallyStoredUser.data,
        loading: false,
        total: userData.length > 0 ? userData.length : locallyStoredUser.data.length,
      }));
    } catch (error) {
      set((state) => ({
        ...state,
        users: locallyStoredUser.data as unknown as User[],
        filteredUsers: locallyStoredUser.data as unknown as User[],
        total: locallyStoredUser.data.length,
        loading: false,
        error: null,
      }));
    }
  },
  getUser: (id) => {
    const { users } = get();
    const user = users.find((user) => user.id === id);
    set((state) => ({
      ...state,
      user: user || null,
    }));

    return user || null;
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
          const filterDate = dayjs(value as string);
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
