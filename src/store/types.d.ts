interface User {
    id: number;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
  }
  
  interface UserStore {
    users: User[];
    total: number;
    filteredUsers: User[];
    page: number;
    perPage: number;
    loading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
    updateUser: (updatedUser: User) => void;
    filterUsers: (query: Partial<User>) => void;
    resetFilter: () => void;
    setPage: (page: number) => void;
  }
  