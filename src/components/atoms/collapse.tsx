import React, { useState, useEffect, useRef } from "react";

interface CollapseProps {
  open: boolean;
  children: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({ open, children }) => {
  const [height, setHeight] = useState(open ? "auto" : "0px");
  const [overflow, setOverflow] = useState("hidden");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  useEffect(() => {
    if (height === "0px") {
      setOverflow("hidden");
    } else {
      setTimeout(() => {
        setOverflow("unset");
      }, 150);
    }
  }, [height]);

  return (
    <div
      style={{
        overflow,
        transition: "height 0.15s ease",
        height,
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
