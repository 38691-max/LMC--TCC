import styles from "@/styles/ContaNavbar.module.css";
import usuario from "@/public/usuario.png"
import cadeado from '@/public/cadeado.png'
import paleta from '@/public/paleta.png'
import pessoa from '@/public/pessoa.png'
import autenticacao from '@/public/autenticacao.png'
import { useState } from "react";
import Image from "next/image";

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

        <button className={styles.button}> <Image src={usuario} width='30px' height='30px' /> Perfil</button>
        <button className={styles.button}> <Image src={cadeado} width='30px' height='30px' />Acesso</button>
        <button className={styles.button}> <Image src={paleta} width='30px' height='30px' />Aparência</button>
        <button className={styles.button}> <Image src={pessoa} width='30px' height='30px' />Acessibilidade</button>
        <button className={styles.button}> <Image src={autenticacao} width='30px' height='30px' />Autenticação</button>
      </div>
    </>
  )
}
