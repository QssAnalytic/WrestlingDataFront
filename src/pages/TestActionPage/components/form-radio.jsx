import { Button } from "../../../newcomponents/ui/button";
import { FormControl, FormItem } from "../../../newcomponents/ui/form";
import { cn } from "../../../lib/utils";
import { CgArrowsExchange } from "react-icons/cg";

export default function FormRadio({ form, field, match }) {
  return (
    <FormItem className="flex gap-4 justify-center items-center space-y-0">
      {console.log("field,value", field.value)}
      {[match?.fighter, match?.oponent]?.map((opponent, idx) => (
        <FormControl>
          <div className="flex justify-center items-center gap-4">
            <div className="opponent-container flex flex-col justify-center items-center">
              <Button
                type="button"
                id={opponent?.id}
                className={cn(
                  "border border-white space-y-0 flex gap-2",
                  field?.value === opponent?.id ? "border-green-400" : "",
                )}
                onClick={(e) => {
                  const clickedOpponentId = Number(e.target.id);
                  const currentFighterId =
                    clickedOpponentId === match?.fighter.id ? match?.oponent.id : match?.fighter.id;
                  console.log("Clicked Opponent ID:", clickedOpponentId);
                  console.log("Current Fighter ID:", currentFighterId);

                  form.setValue("fighter_id", clickedOpponentId);
                  form.setValue("opponent_id", currentFighterId);
                }}>
                <img
                  src={`https://flagcdn.com/16x12/${opponent?.natinality_name.slice(0, 2)}.png`}
                  width="20"
                  height="20"
                  alt={opponent?.natinality_name}
                />
                {opponent?.natinality_name.toUpperCase()}
              </Button>

              <p className={`${opponent?.id === field?.value ? "text-green-300" : ""}`}>{opponent?.name}</p>
            </div>
            {idx === 0 ? (
              <CgArrowsExchange
                className="cursor-pointer"
                size={30}
                onClick={() => {
                  const fighter = form.watch("fighter_id");
                  form.setValue("fighter_id", form.watch("opponent_id"));
                  form.setValue("opponent_id", fighter);
                }}
              />
            ) : null}
          </div>
        </FormControl>
      ))}
    </FormItem>
  );
}
