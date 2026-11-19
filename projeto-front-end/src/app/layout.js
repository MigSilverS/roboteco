import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClientJs from "./components/BootstrapClientJs/BootstrapClientJs";


export default function RootLayout({ children }) {
  return (
    <>
    <BootstrapClientJs/>
      <html lang="pt-br">
        <body className="d-flex flex-column min-vh-100">{children}</body>
      </html>
    </>
  );
}
