"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/react";

const RequiredNoAuth = ({ children }) => {
  const { authenticated, user, resolved } = useAuth();

  const route = useRouter();
  useEffect(() => {
    if (authenticated && user && resolved && route) {
      route.push("/home");
    }
  }, [authenticated, user, resolved, route]);

  if (!authenticated && resolved) return children;

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner />
    </div>
  );
};

export default RequiredNoAuth;
