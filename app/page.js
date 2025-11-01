"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div>
      <h1>Home</h1>
      <Button>Click Me</Button>
      <Button onClick={() => setTheme('dark')}>Dark Model</Button>
      <Button onClick={() => setTheme('light')}>Light Model</Button>
    </div>
  );
}
