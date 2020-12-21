import About from "./About";
import Work from "./Work";
import AudioIntro from "./audio/AudioIntro";
import { Link } from "react-router-dom";
import { RoutePattern } from "../../routes/RoutePattern";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex flex-col px-10 py-10 md:px-56">
        <h1 className="m-auto font-light leading-snug  w-full text-lg text-center md:text-2xl lg:w-1/2">
          I'm Kevin Nacario, a Frontend Developer and Jr. Fullstack Developer
          from Philippines. I build frontend applications and has 2+ years of
          coding experience in web development.
        </h1>
        <div className="w-10 h-1 mt-10  m-auto  bg-gray-600 transform rotate-90"></div>
        <div className="m-auto p-10 flex flex-row items-center">
          <Link to={RoutePattern.Portfolio}>
            <p className="inline-block focus">See my works</p>
          </Link>
          <AudioIntro />
        </div>
      </div>
      <Work />
      <About />
    </div>
  );
}
