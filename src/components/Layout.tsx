import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="layout">
      <nav className="flex p-7">
        <div className="mr-auto w-2/3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx("hover:text-blue-600 font-bold", isActive && "text-blue-600")
            }
          >
            Home
          </NavLink>
        </div>

        <div className="flex justify-between w-1/3">
          <NavLink
            to="/basic"
            className={({ isActive }) =>
              clsx("hover:text-blue-600 font-bold", isActive && "text-blue-600")
            }
          >
            Basic
          </NavLink>
          <NavLink
            to="/intermediate"
            className={({ isActive }) =>
              clsx("hover:text-blue-600 font-bold", isActive && "text-blue-600")
            }
          >
            Intermediate
          </NavLink>
          <NavLink
            to="/advanced"
            className={({ isActive }) =>
              clsx("hover:text-blue-600 font-bold", isActive && "text-blue-600")
            }
          >
            Advanced
          </NavLink>
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
