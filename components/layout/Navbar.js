import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status: loading } = useSession();

  const startTour = () => {
    if (loading === "authenticated") {
      window.location.href = "/CDITGVirtualTour.html";
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
              className="h-full w-auto lg:w-32"
            />
          </div>

          {loading === "loading" && <p>Cargando...</p>}
          {loading === "unauthenticated" && (
            <button
              className="hidden lg:block bg-yellow px-7 py-3 rounded-full text-neutral-black text-xs bg-gradient-to-r from-yellow to-red-dark hover:button-brightness focus:outline-none focus:ring ring-yellow-400 font-semibold"
              onClick={() => signIn()}
            >
              Log In
            </button>
          )}
          {loading === "authenticated" && (
            <button
              className="hidden lg:block bg-yellow px-7 py-3 rounded-full text-neutral-black text-xs bg-gradient-to-r from-yellow to-red-dark hover:button-brightness focus:outline-none focus:ring ring-yellow-400 font-semibold"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          )}
        </nav>
      </div>
    </>
  );
}
