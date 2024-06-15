interface User {
    id: string;
    organization: string;
    username: string;
    fullName: string;
    email: string;
    gender: string;
    bvn: string;
    phoneNumber: string;
    maritalStatus: string;
    children: string;
    dateJoined: string;
    status: string;
    residentType: string;
    address: string;
    educationAndEmployment: EducationAndEmployment
    socials: Socials
    guarantor: Guarantors[]
  }

  type EducationAndEmployment={
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
    guarantor: Guarantors[];

  }

  type Socials = {
    facebook: string;
    instagram: string;
    twitter: string;
  }

  type Guarantors = {
    fullName: string;
    phoneNumber: string;
    email: string;
    gender: string;
    address?: string;
    relationship: string;
  }
  
  interface UserStore {
    users: User[];
    user: Partial<User> | null;
    total: number;
    filteredUsers: User[];
    page: number;
    perPage: number;
    loading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
    getUser: (id: string) => User | null;
    updateUser: (updatedUser: User) => void;
    filterUsers: (query: Partial<User>) => void;
    resetFilter: () => void;
    setPage: (page: number) => void;
  }
  