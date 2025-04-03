'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider, useAuth } from "@/hooks/use-auth";
import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/hooks/use-toast";
import './font.css'
import socket from "@/lib/socket";
import { useEffect } from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000 * 2,
        },
    },
});

export default function Providers({ children }) {
      const {user}=useAuth()
      useEffect(() => {
        if (user) {
          socket.emit("userConnected", user._id);
        }
      }, [user]);

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <NextUIProvider>
                    <ThemeProvider attribute="class" defaultTheme="light" >
                        <ToastProvider>
                            {children}
                        </ToastProvider>
                    </ThemeProvider>
                </NextUIProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
}