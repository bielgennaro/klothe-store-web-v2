import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4">
        <nav>
          {/* TODO - Add the logo */}
          {/*TODO - Finish this component */}
          <ul className="flex gap-4 text-lg">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <h1 className="text-2xl font-bold flex-grow text-center">
          Klothe Store
        </h1>
        <div className="flex">
          <div>
            <a
              href="https://github.com/bielgennaro"
              target="_blank"
              rel="noreferrer"
              className="m-2"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.instagram.com/bielgennaro"
              target="_blank"
              rel="noreferrer"
              className="m-2"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.twitter.com/eugxbrxxl"
              target="_blank"
              rel="noreferrer"
              className="m-2"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;