import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProfile } from "../firebase/services/User";
import useUser from "./useUser";

export const USER_STATES = {
  NOT_KNOWN: undefined,
  NOT_PROFILE: false,
};

// Hook que chequea si existe sesion, si no existe devuelve al usuario al inicio
export default function useProfile() {
  const [profile, setProfile] = useState(USER_STATES.NOT_KNOWN);
  const userId = useUser();

  const router = useRouter();

  useEffect(() => {
    if (userId) {
      getProfile(userId, setProfile);
    }
  }, [userId]);

  useEffect(() => {
    if (profile === USER_STATES.NOT_PROFILE) {
      router.push("/Create/Profile");
    }
  }, [profile]);

  return profile;
}
