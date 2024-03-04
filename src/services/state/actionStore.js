import { create } from "zustand";

const useActionsStore = create((set) => ({
  mutate: async () => undefined,
  actionList: undefined,
  setMutate: (newMutate) => set({ mutate: newMutate }),
  setActions: (actionsList) => set({ actionList: actionsList }),
}));

export default useActionsStore;
