import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";
import { leagueData } from "../data";
import GameweekTabs from "../components/GameweekTabs";

const HomeScreen = () => {
  const [search, setSearch] = useState(0);

  const [leagueStandings, setLeaguStandings] = useState([]);

  const onClickHandler = () => {
    setLeaguStandings(leagueData.standings.results);
  };

  return (
    <>
      <div className="flex p-3 gap-1">
        <Input
          variant="outlined"
          label="League Code "
          type="number"
          color="white"
          onChange={(e) => setSearch(e.target.value)}
          className=" border-white"
        />
        <Button
          size="sm"
          className="rounded-lg "
          color="white"
          onClick={onClickHandler}>
          {" "}
          Search{" "}
        </Button>
      </div>
      <div>
        {leagueStandings.length > 0 && <GameweekTabs prop={leagueStandings} />}
      </div>
    </>
  );
};

export default HomeScreen;
