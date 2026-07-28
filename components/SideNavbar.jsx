import styles from "@/styles/SideNavbar.module.css";

import casa from "@/public/casa.png";
import tabela from "@/public/tabela.png";
import user from "@/public/usuario.png";
import diario from "@/public/diario.png";
import config from "@/public/config.png"
import Image from "next/image";
import { redirect } from "next/navigation";

export function SideNavbar({ menuOpen }) {
    const irPerfil = () => {
        redirect('/Perfil')
    }
    
    return (
        <nav className={`${styles.vertical_bar} ${menuOpen ? styles.open : ""}`}>
            <div className={styles.areaButton}>
                <button className={styles.button}>
                    <Image src={casa} width="40px"/>
                </button>
                <span>Início</span>
            </div>

            <div className={styles.areaButton}>
                <button className={styles.button}>
                    <Image src={tabela} width="40px"/>
                </button>
                <span>Programação</span>
            </div>

            <div className={styles.areaButton}>
                <button className={styles.button}>
                    <Image src={user} width="40px"/>
                </button>
                <span>Perfis</span>
            </div>

            <div className={styles.areaButton}>
                <button className={styles.button}>
                    <Image src={diario} width="40px"/>
                </button>
                <span>Guias</span>
            </div>

            <form method="post" onSubmit={irPerfil} className={`${styles.areaButton} ${styles.config}`}>
                <button type="submit" className={styles.button}>
                    <Image src={config} width="40px"/>
                </button>
                <span>Configurações</span>
            </form>

        </nav>
    );
}

