export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex justify-center items-center flex-col h-full w-full">
      {children}
    </div>
  );
}
