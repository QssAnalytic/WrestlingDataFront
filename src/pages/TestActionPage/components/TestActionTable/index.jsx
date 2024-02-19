import React from "react";
import { DataTable } from "../../../../newcomponents/ui/data-table";
import { columns } from "../columns";

export default function TestActionTable({ statistics }) {
  return (
    <>
      <h2 className="text-center text-wOrange mb-3">Preview Match Info</h2>
      <div className="bg-[#080C2B] text-white rounded px-4 py-5">
        <DataTable columns={columns} data={statistics} />
      </div>
    </>
  );
}
