import { useLocation } from "react-router-dom";

const useParams = () => {
  const location = useLocation();

  return {
    teamId: location.state?.teamId ?? null,
    driverId: location.state?.driverId ?? null,
  };
};

export { useParams };
