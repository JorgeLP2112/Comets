import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status: loading } = useSession();

  return (
    <div>
      <Link href="/CDITGVirtualTour.html">
        <button type="button">START</button>
      </Link>
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
