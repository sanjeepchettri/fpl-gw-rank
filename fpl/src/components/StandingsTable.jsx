import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";

const StandingsTable = ({ prop }) => {
  const TABLE_HEAD = [
    "Rank",
    "Player Name",
    "Team Name",
    "GW Score",
    "Points Deducted",
    "Final Score",
    "Total Points",
  ];
  const [rank, setRank] = useState(0);

  return (
    <Card className="h-full flex w-full  rounded-md  overflow-x-scroll scroll-smooth ">
      <table className="w-full min-w-max table-auto text-left  rounded">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b  bg-fpl-pur p-4">
                <Typography
                  color="blue-gray"
                  className="font-bold text-white  leading-tight  ">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {prop.map((player, index) => {
            const isLast = index === prop.length - 1;
            const isEven = index % 2 === 0;
            const classes = `p-4 ${isLast ? "" : "border-b "} ${isEven ? "bg-fpl-gr opacity-80" : "bg-fpl-gr"}`;
            return (
              <tr key={player.id}>
                {" "}
                <td className={classes}>
                  {" "}
                  <Typography
                    variant="large"
                    color="blue-gray"
                    className="font-bold text-fpl-pur">
                    {index + 1}
                  </Typography>
                </td>
                <td className={classes}>
                  {" "}
                  <Typography
                    variant="large"
                    color="blue-gray"
                    className=" text-fpl-pur font-extrabold">
                    {player.player_name}
                  </Typography>
                </td>
                <td className={classes}>
                  {" "}
                  <Typography
                    variant="large"
                    color="blue-gray"
                    className=" text-fpl-pur font-extrabold">
                    {player.entry_name}{" "}
                  </Typography>
                </td>
                <td className={classes}>
                  {" "}
                  <Typography
                    variant="large"
                    color="blue-gray"
                    className=" text-fpl-pur font-extrabold">
                    {player.event_total}
                  </Typography>
                </td>
                <td className={classes}>
                  {" "}
                  <Typography
                    variant="la"
                    color="blue-gray"
                    className=" text-fpl-pur font-extrabold">
                    4
                  </Typography>
                </td>
                <td className={classes}>
                  {" "}
                  <Typography
                    variant="la"
                    color="blue-gray"
                    className=" font-extrabold text-fpl-pur">
                    {player.event_total - 4}
                  </Typography>
                </td>
                <td className={classes}>
                  {" "}
                  <Typography
                    variant="la"
                    color="blue-gray"
                    className=" text-fpl-pur font-extrabold">
                    {player.total}
                  </Typography>
                </td>
              </tr>
            ); // Closing bracket for the `return` statement
          })}{" "}
        </tbody>
      </table>
    </Card>
  );
};

export default StandingsTable;
