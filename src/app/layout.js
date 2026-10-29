import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function RootLayout({ children, }) {
  return (
    <html lang="pt-br">
      <body className="d-flex flex-column min-vh-100">{children}</body>
    </html>
  );
}
