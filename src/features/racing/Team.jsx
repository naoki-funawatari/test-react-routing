import { memo } from "react";
import { Outlet } from "react-router-dom";
import Image from "@/components/Image";
import teams from "@/assets/data/teams.json";
import chiefImage from "@/assets/images/chief.png";

const Team = ({ teamId }) => {
  const { teamFullName, teamChief } = teams.find(o => o.teamId === Number(teamId));

  return (
    <>
      <h1>{teamFullName}</h1>
      <h2>{teamChief}</h2>
      <Image src={chiefImage} alt="chief" />
      <Outlet />
    </>
  );
};

export default memo(Team);
