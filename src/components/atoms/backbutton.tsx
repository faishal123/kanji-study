"use client";

import { ArrowLeft } from "@/icons/arrow-left";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  console.log("sini oi", resolvedTheme);
  return (
    <Button
      className="!p-3 !w-[unset] !rounded-full"
      containerClassName="!w-[unset] mb-3"
      type="button"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeft
        color={resolvedTheme === "dark" ? "white" : undefined}
        width={24}
        height={24}
      />
    </Button>
  );
};
