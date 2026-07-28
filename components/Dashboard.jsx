"use client";
import styles from '@/styles/Dashboard.module.css';
import { useState } from 'react';
import { TopNavbar } from "@/components/TopNavbar.jsx";
import { SideNavbar } from "@/components/SideNavbar";
import Image from 'next/image';

export function Dashboard() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.main}>
      {/* Chama o componente da nav vertical esquerda */}
      <SideNavbar menuOpen={menuOpen} />
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}
      {/* Chama o componente da nav horizontal no topo */}
      <TopNavbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {/* Área do conteúdo principal */}
      <div className={styles.area}>
        {/* Área da programação e profile */}
        <div className={styles.area_prog_perf}>
          {/* Programação */}
          <div className={styles.programacao}>
            <div className={styles.prog_header}>
              <h1>Programação</h1>
              <button>Criar Programação</button>
            </div>
            <div className={styles.prog_content}>
              <h3>Criado por último</h3>
              <div className={styles.prog_info}>
                <Image src="" />
                <div>
                  <h3 id={styles.prog_titulo}>Programação-(dia)</h3>
                  <p id={styles.prog_horario}>*horário*</p>
                  <p>Possui horários fixos</p>
                  <p>Inserções: padrão</p>
                  <p>Perfil</p>
                </div>
              </div>
            </div>
          </div>
          {/* Profile */}
          <div className={styles.profile}>
            <div className={styles.profile_header}>
              <h1>Perfis</h1>
              <button>Ver Perfis</button>
            </div>
            <div className={styles.profile_content}>
              <h3>Usados Recentemente</h3>
              <div className={styles.prof_info}>
                <div className={styles.perfil}>
                  <div>
                    <Image src="" />
                    <h3 id={styles.perf_titulo}>Perfil 1</h3>
                  </div>
                  <button>Usar Perfil</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Área guias */}
        <div className={styles.area_guias}>
          {/* Guias */}
          <div className={styles.guias}>
            <div className={styles.guias_header}>
              <h1>Guias</h1>
              <button>Ir para Guias</button>
            </div>
            <div className={styles.guias_content}>
              <div className={styles.guias_elemento}>
                <div>
                  <h1>Uso de perfis de tabela</h1>
                  <h2>
                    O que são perfis, como criar e
                    como utilizar um perfil existente.
                  </h2>
                </div>
                <button>Ir para Guia</button>
              </div>
              <div className={styles.guias_elemento}>
                <div>
                  <h1>Criação de tabela</h1>
                  <h2>
                    Explicações sobre como a adição
                    de programas e inserções funciona.
                  </h2>
                </div>
                <button>Ir para guia</button>
              </div>
            </div>
          </div>
        </div>
        {/* Área importar */}
        <div className={styles.area_importar}>
          {/* Importar */}
          <div className={styles.importar}>
            <div className={styles.importar_1}>
              <h1>Importar arquivo</h1>
              <h2 className={styles.importar_info}>Importe uma tabela a partir de outro arquivo externo</h2>
            </div>
            <div className={styles.importar_2}>
              <h2>Arquivos suportados
                <p>.xlsx .tsv .xlsb .ods</p>
              </h2>
              <button>Importar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}