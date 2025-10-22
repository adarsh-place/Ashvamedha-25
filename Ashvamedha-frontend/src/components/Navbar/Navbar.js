import { IoClose, IoMenu } from "react-icons/io5";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Link as ActualLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// --- Logo Imports ---
import ashvamedhaLogo from "../../assests/demoPhotos/ashvamedhaLogo.png";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const navigate = useNavigate();

  // --- Click outside hook (unchanged) ---
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const isOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target);
      const isOutsideHamburger =
        hamburgerRef.current && !hamburgerRef.current.contains(event.target);

      if (isOutsideMenu && isOutsideHamburger) {
        setShowMediaIcons(false);
      }
    }
    if (showMediaIcons) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMediaIcons]);
  // --- End of hook ---

  const menuData = [
    // ... (Your menuData remains unchanged)
    {
      title: "Home",
      path: "/",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "Events",
      path: "/events",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "Team",
      path: "/team",
      cName: "nav-text",
      navigate: true,
    },
    {
      title: "Gallery",
      path: "/gallery",
      cName: "nav-text special",
      navigate: true,
    },
    {
      title: "Leaderboard",
      path: "/leaderboard",
      cName: "nav-text",
      navigate: true,
    },
  ];

  const linkStyles =
    "capitalize text-white transition-all duration-300 hover:text-ashva-orange cursor-pointer";
  const liStyles = "text-lg font-medium";

  return (
    <nav className="w-full h-16 flex items-center justify-between fixed top-0 left-0 z-[100] bg-black/50 backdrop-blur-md px-6 lg:px-10">
      
      {/* --- MODIFIED LOGO SECTION --- */}
      <div
        className="flex items-center gap-x-3 cursor-pointer" // <-- MODIFIED: Changed to flex
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/");
        }}
      >
        {/* Original Small Logo */}
        <div className="h-[50px] w-[60px] flex-shrink-0"> {/* Added flex-shrink-0 */}
          <img
            src={ashvamedhaLogo}
            alt="ASHVAMEDHA Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* New Typography Logo */}
        <img
          src="logo.png"
          alt="ASHVAMEDHA Typography"
          className="h-12 w-auto object-contain hidden sm:block" // <-- NEW: Added typography image
        />
      </div>
      {/* --- END OF MODIFIED LOGO SECTION --- */}


      {/* Menu Links: (unchanged) */}
      <div
        ref={menuRef} 
        className={
          showMediaIcons
            ? "lg:hidden absolute top-[70px] left-0 w-full bg-black -mt-2 backdrop-blur-md"
            : "hidden lg:flex"
        }
      >
        <ul
          className={
            showMediaIcons
              ? "flex flex-col items-center gap-y-6 py-8"
              : "flex items-center h-full gap-x-8"
          }
        >
          {menuData.map((item, index) => {
            const isSpecial = item.cName.includes("special");

            return item.navigate ? (
              <li
                key={index}
                className={`${liStyles} ${
                  isSpecial ? "hidden lg:block" : "block"
                }`}
              >
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`${item.path}`);
                    setShowMediaIcons(false); 
                  }}
                  className={linkStyles}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            ) : (
              <li
                key={index}
                className={`${liStyles} ${
                  isSpecial ? "hidden lg:block" : "block"
                }`}
              >
                <Link
                  to={item.path}
                  smooth={true}
                  onClick={() => setShowMediaIcons(false)}
                  className={linkStyles}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}

          {/* External Links (unchanged) */}
          <li className={liStyles}>
            <ActualLink
              target="_blank"
              to="https://drive.google.com/file/d/1q8wArG5pp0X8n_0Oql9BiVH1CTC_lQAn/view?usp=sharing"
              className={linkStyles}
            >
              <span>Brochure</span>
            </ActualLink>
          </li>
          <li className={liStyles}>
            <ActualLink
              target="_blank"
              to="https://drive.google.com/file/d/1InFTI3Zu8qfCHNtCNvprIHpEpjz94Xjg/view?usp=sharing"
              className={linkStyles}
            >
              <span>Rulebook</span>
            </ActualLink>
          </li>
          <li className={liStyles}>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/admin`);
                setShowMediaIcons(false);
              }}
              className={linkStyles}
            >
              <span>Admin</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu Icon (unchanged) */}
      <div
        className="social-media lg:hidden"
        ref={hamburgerRef} 
      >
        <div className="hamburger-menu">
          <Link to="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            {showMediaIcons ? (
              <IoClose className="text-4xl text-white" />
            ) : (
              <IoMenu className="text-4xl text-white" />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;