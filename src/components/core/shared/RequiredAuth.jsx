'use client';
import React, { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { TbNetworkOff } from "react-icons/tb";
import { Button, Spinner } from "@nextui-org/react";

const RequiredAuth = ({ children }) => {
  const route = useRouter();
  const { authenticated, user, resolved, error, logOut } = useAuth();

  useEffect(() => {
    if(!authenticated  && resolved){
      route.replace("/login");
    }
    // if (authenticated && user && resolved) {
    //   route.replace("/home");
    // }
  }, [authenticated, user, resolved, route]);
  if (authenticated && resolved && user) return children;
  if (error) {
    if (error.response.status >= 400 && error.response.status < 500) {
      logOut();
    } else {
      return (
        <div className="flex h-screen w-full flex-col items-center justify-center text-center">
          <TbNetworkOff className="text-6xl text-red-500 opacity-50" />
          <p className="mt-10 max-w-[300px]">
            We're having trouble connecting, please check your internet
            connection and try again.
          </p>
          <Button
            variant="bordered"
            radius="full"
            onClick={() => window.location.reload()}
            className="mt-6"
          >
            Reload
          </Button>
        </div>
      );
    }
  }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner />
    </div>
  );
};

export default RequiredAuth;
