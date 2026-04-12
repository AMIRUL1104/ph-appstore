import Image from "next/image";
import Link from "next/link";
import LogiImage from "@/assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
function Navbar() {
  let links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/apps">Apps</Link>
      </li>
      <li>
        <Link href="/installation">Installation</Link>
      </li>
    </>
  );

  return (
    <div className="navbar  shadow-sm sticky top-0 z-20 bg-zinc-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content font-medium bg-transparent rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2.5"
          >
            {links}
          </ul>
        </div>
        <Link
          href="/"
          className="btn border-hidden bg-transparent ml-2  text-xl"
        >
          <Image
            src={LogiImage}
            alt="PH AppStore Logo"
            width={32}
            height={32}
          />
          <span className="ml-2 font-bold">PH AppStore</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-medium px-1 bg-transparent">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className=" btn btn-primary">
          <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
          <span>Contribute</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
