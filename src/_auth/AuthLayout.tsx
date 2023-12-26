import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYS4oLUTYHkL5TVD4P_ldBWPBS3DyK02E6ezIz2IvvVQQ5kR1vZAvyZ0s0Ved-C32fT0EPwhaVRhJncjq1diOMT9Jb_d=s1600"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}
