import styles from "@/styles/TopNavbar.module.css";
import lmc_logo from "@/public/lmcplusv2.png";
import casa from '@/public/casa.png';
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function TopNavbar({
  menuOpen,
  setMenuOpen
}) {

  const irHome = () => {
    redirect("/Dashboard");
  };

  return (
    <div className={styles.horizontal_bar}>
      <div className={styles.left_side}>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : styles.inactive}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <Link href="/" className={styles.img_link}>
          <Image
            src={lmc_logo}
            alt="Logo LMC"
            width={100}
            height={50}
            className={styles.lmc_logo}
          />
        </Link>

      </div>

      {/* Sistema de abas */}
      <div className={styles.tabs}>
        <Link
          href="/"
          title="Inicio"
          className={`${styles.tab} ${styles.inicio}`}
        >
          <Image
            src={casa}
            width={30}
            height={30}
            alt="Início"
          />
          <span>Início</span>
          <button className={styles.closeTab}>×</button>
        </Link>
        <button className={styles.openTab}>+</button>
      </div>


    </div>
  );
}
