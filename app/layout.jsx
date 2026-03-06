export const metadata = {
  title: "Brujula Digital",
  description: "Plataforma de alfabetización digital para docentes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
