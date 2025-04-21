import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const linkClass = "cursor-pointer font-semibold";
  const activeClass = "text-blue-500";
  const inactiveClass = "text-gray-600 hover:text-blue-600";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 100
      ) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <>
      <div
        className={`bg-white border-b-2 border-gray-300 sticky top-0 z-50 transition-transform duration-300 shadow-lg ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto py-2">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown space-x-1">
                <div
                  onClick={toggleDropdown}
                  className="lg:hidden cursor-pointer w-10 h-10 flex items-center justify-center p-2"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/10336/10336994.png"
                    alt=""
                  />
                </div>
                {isDropdownOpen && (
                  <ul className="menu menu-sm bg-white rounded-box z-50 mt-3 w-52 p-2 shadow space-y-4 text-center absolute">
                    <li>
                      <NavLink
                        to="/departments_symptoms"
                        className={({ isActive }) =>
                          `${linkClass} ${
                            isActive ? activeClass : inactiveClass
                          }`
                        }
                        onClick={closeDropdown}
                      >
                        Consultation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/doctors"
                        className={({ isActive }) =>
                          `${linkClass} ${
                            isActive ? activeClass : inactiveClass
                          }`
                        }
                        onClick={closeDropdown}
                      >
                        Our Doctors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home_diagnostics"
                        className={({ isActive }) =>
                          `${linkClass} ${
                            isActive ? activeClass : inactiveClass
                          }`
                        }
                        onClick={closeDropdown}
                      >
                        Home Diagnostics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/subscription_plans"
                        className={({ isActive }) =>
                          `${linkClass} ${
                            isActive ? activeClass : inactiveClass
                          }`
                        }
                        onClick={closeDropdown}
                      >
                        Health Plans
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products"
                        className={({ isActive }) =>
                          `${linkClass} ${
                            isActive ? activeClass : inactiveClass
                          }`
                        }
                        onClick={closeDropdown}
                      >
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          `${linkClass} ${
                            isActive ? activeClass : inactiveClass
                          }`
                        }
                        onClick={closeDropdown}
                      >
                        Blogs
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
              <NavLink to="/" className="w-40 flex items-center justify-center">
                <img src="/Images/logo.png" alt="" />
              </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-6">
                <NavLink
                  to="/departments_symptoms"
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  Consultation
                </NavLink>
                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  Our Doctors
                </NavLink>
                <NavLink
                  to="/home_diagnostics"
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  Home Diagnostics
                </NavLink>
                <NavLink
                  to="/subscription_plans"
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  Health Plans
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : inactiveClass}`
                  }
                >
                  Blogs
                </NavLink>
              </ul>
            </div>
            <div className="navbar-end">
              <Link
                to="/doctors"
                className="btn bg-blue-500 hover:bg-blue-600 border-none shadow-none text-white"
              >
                Meet Doctors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
