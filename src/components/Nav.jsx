import Link from "@/components/Link";
import teams from "@/assets/data/teams.json";

const Nav = () => (
  <nav>
    <ul>
      {teams.map(team => {
        const url = `/${team.teamName}`.replace(/\s/g, "-");
        const state = { teamId: team.teamId };

        return (
          <li key={url}>
            <Link to={url} state={state}>
              {team.teamName}
            </Link>
            <ul>
              {team.drivers.map(driver => {
                const url = `/${team.teamName}/${driver.driverName}`.replace(/\s/g, "-");
                const state = { teamId: team.teamId, driverId: driver.driverId };

                return (
                  <li key={url}>
                    <Link to={url} state={state}>
                      {driver.driverName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Nav;
