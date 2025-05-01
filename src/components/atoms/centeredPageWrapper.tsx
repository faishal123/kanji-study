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
    <div
      className={`flex flex-col gap-2 w-full min-h-[100vh] items-center justify-center px-10 py-20 ${className}`}
    >
      <div className={`w-full max-w-[1024px] ${childrenClassName}`}>
        {children}
      </div>
    </div>
  );
};
