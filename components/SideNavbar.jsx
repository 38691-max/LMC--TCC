import styles from "@/styles/SideNavbar.module.css";
import { CalendarDays, Home, House, Settings, User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export function SideNavbar({ menuOpen }) {
  const irPerfil = () => {
    redirect('/Perfil')
  }

  return (
    <nav className={`${styles.vertical_bar} ${menuOpen ? styles.open : ""}`}>
      <div className={styles.areaButton}>
        <Link href="/" className={styles.button}>
          <Home size={50} />
        </Link>
        <span>Início</span>
      </div>

      <div className={styles.areaButton}>
        <button className={styles.button}>
          <House size={40} />
        </button>
        <span>Programação</span>
      </div>

      <div className={styles.areaButton}>
        <Link href="/profile" className={styles.button}>
          <User size={30} strokeWidth={2} />
          Perfil
        </Link>
      </div>

      <div className={styles.areaButton}>
        <button className={styles.button}>
          <CalendarDays size={40} />
        </button>
        <span>Guias</span>
      </div>

      <form
        method="post"
        onSubmit={irPerfil}
        className={`${styles.areaButton} ${styles.config}`}
      >
        <button type="submit" className={styles.button}>
          <Settings size={40} />
        </button>
        <span>Configurações</span>
      </form>

    </nav>
  );
}

