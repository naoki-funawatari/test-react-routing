import { memo } from "react";
import { Outlet } from "react-router-dom";
import Image from "@/components/Image";
import chiefImage from "@/assets/images/chief.png";

const Team = ({ team }) => (
  <>
    <h1>{team.teamFullName}</h1>
    <h2>{team.teamChief}</h2>
    <Image src={chiefImage} alt="chief" />
    <Outlet />
  </>
);

export default memo(Team);
