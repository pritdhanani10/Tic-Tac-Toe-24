import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Header() {
  const user=useSelector(store=>store.user);
  const {istoken}=useSelector(store=>store.token);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleCloseDropdown = () => {
    setIsDropdownActive(false);
  };

  return (
    <>
      <header className="bg-slate-800">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            <div className="flex-1 md:flex md:items-center md:gap-12">

                <a href="/" className="flex items-center gap-2">
                <h1 className="text-white font-bold">E-Library</h1>
              </a>
              {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div className="relative w-[75%]">
  <label htmlFor="Search" className="sr-only"> Search </label>

  <input
    type="text"
    id="Search"
    placeholder="Search for..."
    className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm inputs "
  />

  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button type="button" className="text-gray-600 hover:text-gray-700">
      <span className="sr-only">Search</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </span>
</div>
              
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
              {istoken && user?<p></p>:<ul className="flex items-center gap-6 text-sm">
                  
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to="/upload"
                    >
                        Upload
                     
                    </Link>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Careers{" "}
                    </a>
                  </li>

                  

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Contact Us{" "}
                    </a>
                  </li>
                </ul>}
                
              </nav>
              
              
              <div className="flex items-center gap-4">
                {user && istoken?<div className="sm:flex sm:gap-4">
                
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="/logout"
                >
                  Logout
                </Link>
              </div>: <div className="sm:flex sm:gap-4">
                
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="/login"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </div>}
               

                <div className="block md:hidden">
                <div className="relative">
                  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                    {user && istoken?<h1></h1>:
                     <Link
                     to="/register"
                     className="border-e px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700 bg-teal-600"
                   >
                     Register
                   </Link>}
                   
                   
                    <button
                      onClick={handleDropdownToggle}
                      className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <span className="sr-only">Menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {isDropdownActive && (
                    <div
                      className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                      role="menu"
                      onMouseLeave={handleCloseDropdown} // Close on mouse leave
                    >
                      <div className="p-2">
                        <Link
                          to="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Services
                        </Link>
                        <Link
                          to="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          About
                        </Link>
                        <Link
                          to="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Contact Us
                        </Link>
                        <Link
                          to="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Unpublish Product
                        </Link>
                        
                      </div>
                    </div>
                  )}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
