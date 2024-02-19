export const columns = [
  {
    accessorKey: "successful",
    header: "Successful",
  },
  {
    accessorKey: "flag",
    header: "Flag",
  },
  {
    accessorKey: "defense_reason",
    header: "Amount",
  },
  {
    accessorKey: "fighter",
    header: "Fighter",
    cell: ({ row }) => {
      const data = row.getValue("fighter");
      return data.name;
    },
  },
  {
    accessorKey: "opponent",
    header: "Opponent",
    cell: ({ row }) => {
      const data = row.getValue("opponent");
      return data.name;
    },
  },
  {
    accessorKey: "action_time_second",
    header: "Second",
    cell: ({ row }) => {
      const data = row.getValue("action_time_second");
      return `${Math.floor(data / 60)} : ${Math.floor(data % 60)}`;
    },
  },
];
