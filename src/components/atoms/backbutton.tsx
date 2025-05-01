"use client";

import { ArrowLeft } from "@/icons/arrow-left";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      className="!p-3 !w-[unset] !rounded-full"
      containerClassName="!w-[unset] mb-3"
      type="button"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeft width={24} height={24} />
    </Button>
  );
};
