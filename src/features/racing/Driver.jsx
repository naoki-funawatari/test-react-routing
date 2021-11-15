import { memo } from "react";
import Image from "@/components/Image";
import teams from "@/assets/data/teams.json";
import racerImage from "@/assets/images/racer.png";
import carImage from "@/assets/images/car.png";

const Driver = ({ teamId, driverId }) => {
  const { driverName } = teams
    .filter(o => o.teamId === Number(teamId))
    .flatMap(o => o.drivers)
    .find(o => o.driverId === Number(driverId));

  return (
    <>
      <hr />
      <h2>{driverName}</h2>
      <Image src={racerImage} alt="racer" />
      <Image src={carImage} alt="car" />
    </>
  );
};

export default memo(Driver);
