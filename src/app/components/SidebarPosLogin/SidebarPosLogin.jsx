"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import styles from "./SidebarPosLogin.module.css";

const linksPadrao = {
  aluno: [
    { label: "Painel do Aluno", href: "/aluno/painel-do-aluno" },
    { label: "Conteudos", href: "/aluno/conteudos" },
    { label: "Suporte", href: "/suporte" }
  ],
  admin: [
    { label: "Painel Admin", href: "/admin/painel-admin" },
    { label: "Conteudos", href: "/aluno/conteudos" },
    { label: "Suporte", href: "/suporte" }
  ]
};

export default function SidebarPosLogin({ perfil = "aluno", links, children }) {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);

  const linksNavegacao = useMemo(() => {
    if (Array.isArray(links) && links.length > 0) {
      return links;
    }

    return linksPadrao[perfil] ?? linksPadrao.aluno;
  }, [links, perfil]);

  const tituloPerfil = perfil === "admin" ? "Area da Equipe" : "Area do Aluno";

  const renderLinks = (aoClicar) => (
    <nav className={styles.navList}>
      {linksNavegacao.map((item) => {
        const estaAtivo =
          pathname === item.href ||
          (item.href !== "/" && pathname?.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${estaAtivo ? styles.navItemAtivo : ""}`.trim()}
            onClick={aoClicar}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className={styles.layoutRoot}>
      <aside className={`${styles.sidebarDesktop} d-none d-lg-flex flex-column`}>
        <div className={styles.brand}>
          <h2 className={styles.brandTitle}>
            Robot<span style={{ color: "var(--red)" }}>eco.</span>
          </h2>
          <span className={styles.brandBadge}>{tituloPerfil}</span>
        </div>

        {renderLinks()}

        <div className={styles.sideFooter}>
          <Link href="/" className={styles.navItem}>Pagina inicial</Link>
          <Link href="/login" className={styles.logoutBtn}>Sair</Link>
        </div>
      </aside>

      <main className={styles.mainArea}>
        <div className={`${styles.mobileTopbar} d-lg-none d-flex align-items-center justify-content-between`}>
          <h2 className={styles.mobileBrand}>
            Robot<span style={{ color: "var(--red)" }}>eco.</span>
          </h2>
          <button
            type="button"
            className={`btn btn-light ${styles.mobileMenuBtn}`}
            onClick={() => setMenuAberto(true)}
            aria-label="Abrir menu lateral"
          >
            Menu
          </button>
        </div>

        <div
          className={`offcanvas offcanvas-start ${styles.offcanvasCustom} ${menuAberto ? "show" : ""}`}
          tabIndex={-1}
          aria-modal={menuAberto ? "true" : undefined}
          role="dialog"
          style={{ visibility: menuAberto ? "visible" : "hidden" }}
        >
          <div className={`offcanvas-header ${styles.offcanvasHeader}`}>
            <h5 className="offcanvas-title">
              {tituloPerfil}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={() => setMenuAberto(false)}
            />
          </div>

          <div className="offcanvas-body d-flex flex-column">
            {renderLinks(() => setMenuAberto(false))}
            <div className={styles.sideFooter}>
              <Link href="/" className={styles.navItem} onClick={() => setMenuAberto(false)}>
                Pagina inicial
              </Link>
              <Link href="/login" className={styles.logoutBtn} onClick={() => setMenuAberto(false)}>
                Sair
              </Link>
            </div>
          </div>
        </div>

        {menuAberto ? (
          <div
            className="offcanvas-backdrop fade show d-lg-none"
            onClick={() => setMenuAberto(false)}
          />
        ) : null}

        {children}
      </main>
    </div>
  );
}
