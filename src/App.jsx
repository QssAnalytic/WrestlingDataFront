import React from "react";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container m-auto">
          <div className="main-inner">
            <div className="match-info">
              <h4 className="text-wOrange text-center">Preview match info</h4>
              <div className="match-table w-full bg-wMain p-5">
                <table
                  className="w-full"
                  style={{ border:'1px solid transparent', borderCollapse: "collapse" }}
                >
                  <thead className="rounded-sm bg-wSecMain text-wText font-[400]">
                    <tr>
                      <th className="p-2">Action No:</th>
                      <th>Fighter</th>
                      <th>Opponent</th>
                      <th>Second</th>
                      <th>Score</th>
                      <th>Action</th>
                      <th>Successful</th>
                      <th>Technique</th>
                      <th>Defense Reason</th>
                      <th>Autor</th>
                    </tr>
                  </thead>
                  <tbody className="rounded-sm bg-[#121C34] text-wText font-[400]">
                    <tr className="text-center">
                      <td>3</td>
                      <td className="p-2">A. Abakarov</td>
                      <td>A. Abakarov</td>
                      <td>A. Abakarov</td>
                      <td>A. Abakarov</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
