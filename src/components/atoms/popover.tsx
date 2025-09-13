import { ReactNode } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

export const PopoverComponent = ({
  trigger,
  triggerAsChild = true,
  content,
  showPopover,
  contentClassName,
  onOpenChange
}: {
  trigger: ReactNode;
  triggerAsChild?: boolean;
  content: ReactNode;
  showPopover?: boolean;
  contentClassName?: string;
  onOpenChange?: ((open: boolean) => void) | undefined
}) => {
  return (
    <Popover onOpenChange={onOpenChange} open={showPopover ? undefined : false}>
      <PopoverTrigger asChild={triggerAsChild}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent className={contentClassName}>
        {content}
      </PopoverContent>
    </Popover>
  );
}