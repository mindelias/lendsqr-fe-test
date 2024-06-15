// useLayoutStore.ts

import { create } from "zustand";

interface LayoutStore {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (value: boolean) => void;
}

const useLayoutStore = create<LayoutStore>((set) => ({
  isSidebarCollapsed: false,
  toggleSidebar: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
  setSidebarCollapsed: (value: boolean) => set({ isSidebarCollapsed: value }),
}));

export default useLayoutStore;
