import { useRoutes } from "react-router-dom";
import { useParams } from "@/hooks/useParams";
import Main from "@/components/Main";
import Team from "@/features/racing/Team";
import Driver from "@/features/racing/Driver";

const MainRouter = () => {
  const { teamId, driverId } = useParams();

  const router = useRoutes([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: ":team",
          element: <Team {...{ teamId }} />,
          children: [
            {
              path: ":driver",
              element: <Driver {...{ teamId, driverId }} />,
            },
          ],
        },
      ],
    },
  ]);

  return router;
};

export default MainRouter;
