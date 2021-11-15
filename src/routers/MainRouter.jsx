import { useRoutes } from "react-router-dom";
import { useParams } from "@/hooks/useParams";
import Main from "@/components/Main";
import Team from "@/features/racing/Team";
import Driver from "@/features/racing/Driver";
import teams from "@/assets/data/teams.json";

const MainRouter = () => {
  const { teamId, driverId } = useParams();
  const team = teams.find(o => o.teamId === Number(teamId));
  const driver = team && team.drivers.find(o => o.driverId === Number(driverId));

  const router = useRoutes([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: ":team",
          element: <Team {...{ team }} />,
          children: [
            {
              path: ":driver",
              element: <Driver {...{ driver }} />,
            },
          ],
        },
      ],
    },
  ]);

  return router;
};

export default MainRouter;
