import styles from "@/styles/TopNavbar.module.css";
import lmc_logo from "@/public/lmcplusv2.png";

import { House } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "./kibo-ui/theme-switcher";

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
          title="Início"
          className={`${styles.tab} ${styles.inicio}`}
        >
          <House size={30} strokeWidth={2} />

          <span>Início</span>

          <button className={styles.closeTab}>×</button>
        </Link>
        <button className={styles.openTab}>+</button>
        <ThemeSwitcher className="ml-3"/>
      </div>
    </div>
  );
}