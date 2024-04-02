import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status: loading } = useSession();

  const startTour = () => {
    if (loading === "authenticated") {
      window.location.href = "/CDITGVirtualTour.html";
    } else {
      signIn();
    }
  };

  return (
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
  );
}
