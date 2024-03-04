import { create } from "zustand";

const useActionsStore = create((set) => ({
  mutate: async () => undefined,
  actionList: undefined,
  dialogOpen: false,
  editedAction: undefined,
  setMutate: (newMutate) => set({ mutate: newMutate }),
  setActions: (actionsList) => set({ actionList: actionsList }),
  setDialogOpen: () => set((state) => ({ dialogOpen: !state.dialogOpen })),
  setEditedAction: (action) => set({ editedAction: action }),
}));

export default useActionsStore;
