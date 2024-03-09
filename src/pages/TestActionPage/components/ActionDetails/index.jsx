import { Button } from "../../../../newcomponents/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../../newcomponents/ui/dialog";
import useActionsStore from "../../../../services/state/actionStore";
import { UpdateForm } from "../update/update-form";

export function ActionDetails({ match }) {
  const { dialogOpen, setDialogOpen, editedAction } = useActionsStore();

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[825px] bg-[#151B43] border-none text-white">
        <DialogHeader>
          <DialogTitle>Edit Action {editedAction?.id}</DialogTitle>
          <DialogDescription>Make changes to selected action here</DialogDescription>
        </DialogHeader>
        <UpdateForm match={match} />
        <DialogFooter>{/* <Button type="submit">Save changes</Button> */}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
