import { useSession, signIn, signOut } from "next-auth/react";

export default function Hero() {
  const { data: session, status: loading } = useSession();

  const startTour = () => {
    if (loading === "authenticated") {
      window.location.href = "/CDITGVirtualTour.html";
    } else {
      signIn();
    }
  };

  return (
    <section id="hero" className="relative">
      <div className="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div>
      <div className="bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block bg-left -right-42.6%"></div>
      <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -top-12 md:-top-16 bg-custom-mobile-mockup-size lg:hidden"></div>
      <div className="container h-screen relative z-20">
        <div className="h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center">
          <div className="h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl lg:text-5xl text-red-dark pb-5">
              Virtual Tour
            </h1>
            <p className="text-gray-dark text-xs lg:text-base leading-5 mb-7">
              Take your workers on a virtual tour of your office and show them
              where they will be working and where they can find the rest of the
              team. Simple, easy, and most importantly, efficient.
            </p>
            <button
              className="bg-yellow px-7 py-3 rounded-full text-black text-xs bg-gradient-to-r from-yellow to-red-dark hover:button-brightness mb-7 focus:outline-none focus:ring ring-yellow-400 font-semibold"
              onClick={startTour}
            >
              START
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
