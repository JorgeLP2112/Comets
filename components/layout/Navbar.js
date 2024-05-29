import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

const navItems = ["Inicio", "Acerca De", "AstraZeneca", "Últimas Noticias"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status: loading } = useSession();

  const startTour = () => {
    if (loading === "authenticated") {
      window.location.href = "/VirtualTour.html";
    } else {
      signIn();
    }
  };

  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6">
            <img
              src="/img/az.png"
              alt="astrazeneca_logo"
              className="w-24 h-auto sm:w-40 md:w-56 lg:w-24 mt-auto"
            />
          </div>

          <div className="hidden lg:block text-sm text-black">
            {navItems.map((navItem) => (
              <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
                {navItem}
              </a>
            ))}
          </div>

          {loading === "unauthenticated" && (
            <button
              className="hidden lg:block text-neutral-black text-sm hover:border-black border-b-2 border-transparent transition duration-500 ease-in-out focus:outline-none font-semibold italic"
              onClick={() => signIn()}
            >
              Iniciar Sesión
            </button>
          )}
          {loading === "authenticated" && (
            <button
              className="hidden lg:block text-neutral-black text-sm hover:border-black border-b-2 border-transparent transition duration-500 ease-in-out focus:outline-none font-semibold italic"
              onClick={() => signOut()}
            >
              Cerrar Sesión
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img
              className={`${isOpen && "hidden"}`}
              src="/img/icon-hamburger.svg"
              alt=""
            />
            <img
              className={isOpen ? "block" : "hidden"}
              src="/img/icon-close.svg"
              alt=""
            />
          </button>
        </nav>
      </div>
      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800
      bg-opacity-50 ${isOpen ? "block" : "hidden"}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem) => (
            <a key={navItem} className="py-2" href="#">
              {navItem}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
