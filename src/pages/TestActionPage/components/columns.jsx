import { Edit3 } from "lucide-react";
import { FaFlag } from "react-icons/fa";
import { DeleteAlert } from "../../../common/components/delete-alert";
import { deleteData } from "../../../services/api/requests";
import { statisticsEndpoints } from "../../../services/api/endponits";

export const columns = [
  {
    accessorKey: "id",
    header: "Action No",
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
  {
    accessorKey: "score",
    header: "Score",
  },
  {
    accessorKey: "action_name",
    header: "Action",
    cell: ({ row }) => {
      const data = row.getValue("action_name");
      return data.name;
    },
  },
  {
    accessorKey: "successful",
    header: "Successful",
  },
  {
    accessorKey: "technique",
    header: "Technique",
    cell: ({ row }) => {
      const data = row.getValue("technique");
      return data.name;
    },
  },
  {
    accessorKey: "defense_reason",
    header: "Defense Reason",
  },
  {
    header: "Edit",
    cell: () => {
      return <Edit3 size={17} />;
    },
  },
  {
    header: "Delete",
    cell: ({row}) => {
      const actionId = row.original?.id;
      const handleDelete = async()=>{
        try{
          await deleteData(statisticsEndpoints.byId(actionId));
        }catch(err){
          console.log('error', err)
        }
      }
      return <DeleteAlert handleDelete={handleDelete} />;
    },
  },
  {
    accessorKey: "flag",
    header: "View",
    cell: ({ row }) => {
      const data = row.getValue("flag");
      return <FaFlag className={`${data ? "text-red-500" : "text-white"}`} />;
    },
  },
];
