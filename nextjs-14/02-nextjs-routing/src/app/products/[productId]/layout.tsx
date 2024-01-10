export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2
        style={{
          backgroundColor: "lightcoral",
        }}
      >
        Features Products
      </h2>
      {/* Carousal Here */}
    </>
  );
}
