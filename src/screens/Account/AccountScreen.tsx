import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { UserGuestScreen } from "./UserGuestScreen/UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";
import { LoadingModal } from "../../components";

export function AccountScreen() {
  const [hasLogged, setHasLogged] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(!!user);
    });
  }, []);

  if (hasLogged === null) {
    return <LoadingModal show={true} text="Cargando..." />;
  }

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
}
