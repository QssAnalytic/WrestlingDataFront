import z from "zod";

export const ActionFormSchema = z.object({
  action_name_id: z.number({ required_error: "Please select action" }),
  technique_id: z.number({ required_error: "Please select technique" }),
  score_id: z.number({ required_error: "Please select score" }),
  successful: z.boolean({ required_error: "Please select succesful field" }),
  defense_reason: z.boolean({ required_error: "Please select defense field" }),
  flag: z.boolean({ required_error: "Identify flag yes/no" }),
  minute: z.string({ required_error: "Daxil ele minute" }),
  second: z.string({ required_error: "Daxil ele second" }),
  fighter_id: z.number({ required_error: "Select Fighter for action" }),
  opponent_id: z.number({ required_error: "Select Oponent for action" }),
});
