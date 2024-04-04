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
      <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -bottom-12 bg-custom-mobile-mockup-size lg:hidden"></div>
      <div className="container h-screen relative z-20">
        <div className="h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center">
          <div className="h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl lg:text-5xl text-red-dark pb-5">AstroVT</h1>
            <p className="text-gray-dark text-xs lg:text-base leading-5 mb-7">
              Explora, conoce y aprende sobre el entorno de trabajo de
              AstraZeneca. Con AstroVT, podrás conocer las instalaciones de la
              empresa y aprender sobre los procesos y áreas de trabajo. Además,
              podrás interactuar con los diferentes elementos y conocer más
              sobre la empresa.
            </p>
            <button
              className="text-neutral-black text-lg hover:border-black border-b-2 border-transparent transition duration-500 ease-in-out focus:outline-none font-semibold italic"
              onClick={startTour}
            >
              Iniciar Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
