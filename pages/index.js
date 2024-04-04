import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Footer from "../components/layout/Footer";

const Home = () => {
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
      <Head>
        <title>AstraZeneca: Virtual Tour</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div>
        <button type="button" onClick={startTour}>
          START
        </button>
        {loading === "loading" && <p>Cargando...</p>}
        {loading === "unauthenticated" && (
          <button onClick={() => signIn()}>Iniciar sesión</button>
        )}
        {loading === "authenticated" && (
          <button onClick={() => signOut()}>Cerrar sesión</button>
        )}
      </div>
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -left-48 top-20"></div>
        </div>
        <Hero />
      </div>
      <Footer />
    </>
  );
};

export default Home;
