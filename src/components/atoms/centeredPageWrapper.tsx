import { ThemeToggle } from "./themeToggle";

export const CenteredPageWrapper = ({
  children,
  className,
  childrenClassName,
}: {
  children: React.ReactNode;
  className?: string;
  childrenClassName?: string;
}) => {
  return (
    <div className="p-5 flex flex-col items-end" style={{ minHeight: '100vh' }}>
      <ThemeToggle />
      <div
        className={`flex-1 flex flex-col gap-2 w-full items-center justify-center px-5 py-15 ${className}`}
      >
        <div className={`w-full ${childrenClassName}`} style={{ maxWidth: '1024px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
