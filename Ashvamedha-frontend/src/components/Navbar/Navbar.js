import { IoClose, IoMenu } from "react-icons/io5";
import React, { useState, useEffect, useRef } from "react"; // <-- NEW: Import useEffect and useRef
import { Link } from "react-scroll";
import { Link as ActualLink } from "react-router-dom";
import ashvamedhaLogo from "../../assests/demoPhotos/ashvamedhaLogo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const navigate = useNavigate();

  // --- Start of New Code ---
  const menuRef = useRef(null); // Ref for the mobile menu
  const hamburgerRef = useRef(null); // Ref for the hamburger icon

  useEffect(() => {
    // This function will be called when a click happens
    function handleClickOutside(event) {
      // Check if the click is outside the menu
      const isOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target);
      // Check if the click is outside the hamburger button
      const isOutsideHamburger =
        hamburgerRef.current && !hamburgerRef.current.contains(event.target);

      // If the click is outside BOTH, close the menu
      if (isOutsideMenu && isOutsideHamburger) {
        setShowMediaIcons(false);
      }
    }

    // Add the event listener only if the menu is open
    if (showMediaIcons) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function: Remove the listener when the menu closes or component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMediaIcons]); // This effect depends on 'showMediaIcons' state
  // --- End of New Code ---

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
      cName: "nav-text special", // This class will be used to hide it on mobile
      navigate: true,
    },
    {
      title: "Leaderboard",
      path: "/leaderboard",
      cName: "nav-text",
      navigate: true,
    },
  ];

  // Base styles for all menu links
  const linkStyles =
    "capitalize text-white transition-all duration-300 hover:text-ashva-orange cursor-pointer";
  // Base styles for all list items
  const liStyles = "text-lg font-medium";

  return (
    <nav className="w-full h-16 flex items-center justify-between fixed top-0 left-0 z-[100] bg-black/50 backdrop-blur-md px-6 lg:px-10">
      {/* Logo */}
      <div
        className="h-[50px] w-[60px] cursor-pointer"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/");
        }}
      >
        <img src={ashvamedhaLogo} alt="ASHVAMEDHA" className="w-full h-full" />
      </div>

      {/* Menu Links: Uses conditional classes for desktop nav vs. mobile dropdown */}
      <div
        ref={menuRef} // <-- NEW: Attach the ref to the mobile menu container
        className={
          showMediaIcons
            ? "lg:hidden absolute top-[70px] left-0 w-full bg-black -mt-2 backdrop-blur-md" // Mobile Dropdown (Open)
            : "hidden lg:flex" // Desktop Menu (Closed on mobile)
        }
      >
        <ul
          className={
            showMediaIcons
              ? "flex flex-col items-center gap-y-6 py-8" // Mobile UL
              : "flex items-center h-full gap-x-8" // Desktop UL
          }
        >
          {menuData.map((item, index) => {
            // This logic hides the "Gallery" (special) link on mobile
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
                    setShowMediaIcons(false); // Close menu on click
                  }}
                  className={linkStyles}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            ) : (
              // ... (your existing 'else' block)
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

          {/* External Links */}
          {/* ... (Your external links remain unchanged) ... */}
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
                 setShowMediaIcons(false); // Close menu on click
               }}
               className={linkStyles}
             >
               <span>Admin</span>
             </Link>
           </li>
        </ul>
      </div>

      {/* Hamburger Menu Icon (hidden on desktop) */}
      <div
        className="social-media lg:hidden"
        ref={hamburgerRef} // <-- NEW: Attach the ref to the hamburger icon container
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