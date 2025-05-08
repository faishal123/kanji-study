import { ReactNode } from "react";

type ButtonType = "button" | "link";

type ButtonProps = {
  type?: ButtonType;
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  containerClassName?: string;
};

interface ButtonOnlyProps extends ButtonProps {
  type: "button";
  children?: ReactNode;
  onClick?: () => void;
}

interface ButtonLinkProps extends ButtonProps {
  type: "link";
  children?: ReactNode;
  href: string;
}

export const Button = ({
  children,
  onClick,
  type,
  href,
  className,
  containerClassName,
}: ButtonLinkProps | ButtonOnlyProps) => {
  const combinedContainerClassName = `
    group
    w-full
    cursor-pointer
    transition-all pt-3 pb-0
    hover:pb-3 hover:pt-0
    focus:outline-none
    ${containerClassName}
  `;

  const childClassName = `
    cursor-pointer text-center flex flex-col gap-2 w-full h-full
    items-center justify-center shadow-sm border border-gray-100 
    transition-all rounded-lg p-5
    group-hover:shadow-lg
    dark:border-gray-700
    focus:outline-none
    ${className}
  `;

  if (type === "link") {
    return (
      <a href={href} className={combinedContainerClassName}>
        <div className={childClassName}>{children}</div>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedContainerClassName}>
      <div className={childClassName}>{children}</div>
    </button>
  );
};
