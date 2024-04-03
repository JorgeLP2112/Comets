export default function Navbar() {
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

          <button className="hidden lg:block bg-yellow px-7 py-3 rounded-full text-neutral-black text-xs bg-gradient-to-r from-yellow to-red-dark hover:button-brightness focus:outline-none focus:ring ring-yellow-400 font-semibold">
            Log In
          </button>
        </nav>
      </div>
    </>
  );
}
