"use client";

import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Moon, Sun, User2, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import UsageCreditProgress from "./UsageCreditProgress";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const { user } = useUser();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={60}
                height={60}
                className="h-10 w-10 m-0 rounded-full"
              />
              <h2 className="font-bold text-xl">Nexulon AI</h2>
            </div>

            <div>
              {mounted &&
                (theme === "light" ? (
                  <Button variant="ghost" onClick={() => setTheme("dark")}>
                    <Sun />
                  </Button>
                ) : (
                  <Button variant="ghost" onClick={() => setTheme("light")}>
                    <Moon />
                  </Button>
                ))}
            </div>
          </div>
          {user?
          <Button className="mt-7 w-full" size="lg">
            + New Chat
          </Button> :
          <SignInButton>
                      <Button className="mt-7 w-full" size="lg">
            + New Chat
          </Button>
          </SignInButton>}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <div className="p-3">
            <h2 className="font-bold text-lg">Chat</h2>
            {!user && <p className="text-sm text-gray-400">
              Sign in to start chatting with multiple AI models
            </p>}
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-3 mb-10">
          {!user ? (
            <SignInButton mode="modal">
              <Button className={"w-full"} size={"lg"}>
                Sign in/Sign up
              </Button>
            </SignInButton>
          ) : (
            <div>
              <UsageCreditProgress />
              <Button className={"w-full mb-3"}>
                <Zap /> Upgrade Plan
              </Button>
              <Button className="flex" variant={"ghost"}>
                <User2 /> <h2>Setting</h2>
              </Button>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
