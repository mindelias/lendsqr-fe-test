import create from "zustand";
import axios from "axios";

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
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
        `https://run.mocky.io/v3/605d6edb-34bf-432f-b118-199e110cf2da?page=${page}&perPage=${perPage}`
      );
      set({ users: response.data.data, filteredUsers: response.data.data, loading: false });
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
      Object.entries(query).every(([key, value]) =>
        user[key as keyof User]?.toString().toLowerCase().includes(value.toString().toLowerCase())
      )
    );
    set({ filteredUsers, page: 1 }); // Reset to first page on filter
  },
  setPage: (page) => set({ page }),
}));
