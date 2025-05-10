"use client";
import { useState, useEffect } from "react";
import { ArrowLeft } from "@/icons/arrow-left";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  if (!rendered) return null;
  
  return (
    <Button
      className="!p-3 !rounded-full w-unset-important"
      containerClassName="!w-[unset] mb-3"
      type="button"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeft
        color={resolvedTheme === "dark" ? "#ffffff" : "#171717"}
        width={24}
        height={24}
      />
    </Button>
  );
};
