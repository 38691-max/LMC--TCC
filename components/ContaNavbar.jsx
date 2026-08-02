import styles from "@/styles/ContaNavbar.module.css";
import {
  User,
  Lock,
  Palette,
  Accessibility,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function ContaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.arrowButton} ${menuOpen ? styles.openArrow : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "<" : ">"}
      </button>

      <div className={`${styles.ContaNavbar} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.areaTitulo}>
          <span>Conta</span>
        </div>

        <Link href="/profile" className={styles.button}>
          <User size={30} strokeWidth={2} />
          Perfil
        </Link>

        <button className={styles.button}>
          <Lock size={30} strokeWidth={2} />
          Acesso
        </button>

        <button className={styles.button}>
          <Palette size={30} strokeWidth={2} />
          Aparência
        </button>

        <button className={styles.button}>
          <Accessibility size={30} strokeWidth={2} />
          Acessibilidade
        </button>

        <button className={styles.button}>
          <ShieldCheck size={30} strokeWidth={2} />
          Autenticação
        </button>
      </div>
    </>
  );
}