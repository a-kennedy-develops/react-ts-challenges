import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../utils/constants";

export function Layout() {
  return (
    <div className="layout">
      <nav className="flex p-7">
        <div className="mr-auto w-2/3">
          <NavLink
            to={ROUTES[0].path}
            className={({ isActive }) =>
              clsx("hover:text-blue-600 font-bold", isActive && "text-blue-600")
            }
          >
            {ROUTES[0].name}
          </NavLink>
        </div>

        <div className="flex justify-between w-1/3">
          {ROUTES.map((route, index) => {
            if (index !== 0)
              return (
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    clsx(
                      "hover:text-blue-600 font-bold",
                      isActive && "text-blue-600"
                    )
                  }
                >
                  {route.name}
                </NavLink>
              );
          })}
        </div>
      </nav>
      <main className="flex px-7 pt-10 justify-center">
        <div className="flex flex-col items-center w-full max-w-3xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
