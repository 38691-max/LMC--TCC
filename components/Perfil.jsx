"use client";

import styles from '@/styles/Perfil.module.css';
import { TopNavbar } from '@/components/TopNavbar.jsx';
import { SideNavbar } from '@/components/SideNavbar.jsx';
import { ContaNavbar } from "@/components/ContaNavbar.jsx";
import { Pencil } from "lucide-react";
import { useState } from 'react';
import { session } from '@/lib/auth-client';

export function Perfil() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data, error } = session

  return (
    <main className={styles.conta}>
      <TopNavbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <SideNavbar
        menuOpen={menuOpen}
      />

      <div className={styles.area}>
        <ContaNavbar />

        {/* Área grid, separa formulário do perfil e foto do usuário */}
        <div className={styles.perfilContainer}>

          {/* Formulário do perfil */}
          <div className={styles.form}>
            <h1>Perfil</h1>

            <span className={styles.span}>Nome</span>
            <input type="text" placeholder={data.user.name} />

            <span className={styles.span}>Senha</span>
            <input type="text" placeholder="Digite sua nova senha" />

            <span className={styles.span}>E-mail</span>
            <input type="text" placeholder={data.user.email} />

            <button>Salvar</button>
          </div>

          {/* Foto de perfil */}
          <div className={styles.perfilImageContainer}>
            <h2>Foto de Perfil</h2>

            <div className={styles.profilePictureHolder}>
              {/* Futuramente colocar a foto do usuário aqui */}
              {/* <img src={imageperfil} alt="Foto de Perfil" className={styles.profilePicture} /> */}

              <button className={styles.editPicture}>
                <Pencil size={18} strokeWidth={2} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}