import { memo } from "react";
import { Outlet } from "react-router-dom";

const Main = () => (
  <main>
    <Outlet />
  </main>
);

export default memo(Main);
