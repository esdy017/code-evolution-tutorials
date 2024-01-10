export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2
        style={{
          backgroundColor: "lightgoldenrodyellow",
        }}
      >
        Inner Layout
      </h2>
      {children}
    </>
  );
}
