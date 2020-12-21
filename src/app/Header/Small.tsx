import { Link } from "react-router-dom";
import { CustomButton } from "../../components";
import { RoutePattern } from "../../routes/RoutePattern";

export default function Small() {
  return (
    <div className="relative block sm:hidden">
      <div className="flex flex-row items-center gap-2">
        <div>
          <Link to={RoutePattern.Home}>
            <p className="text-2xl font-light">
              Kev<span className="logo">iN</span>
            </p>
          </Link>
        </div>
        <div className="ml-auto">
          <CustomButton>Résumé</CustomButton>
        </div>
        <div>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white z-10 w-1/2 shadow p-5 right-0 top-14">
        <ul className="flex flex-col gap-2 items-center justify-center">
          <li>
            <Link to={RoutePattern.Home}>Home</Link>
          </li>
          <li>
            <Link to={RoutePattern.About}>About</Link>
          </li>
          <li>
            <Link to={RoutePattern.Portfolio}>Portfolio</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
