"use client";
import styles from '@/styles/Perfil.module.css';
import { TopNavbar } from '@/components/TopNavbar.jsx';
import { SideNavbar } from '@/components/SideNavbar.jsx';
import { ContaNavbar } from "@/components/ContaNavbar.jsx";
import lapis from '@/public/lapis.png';
import { useState } from 'react';

export function Perfil() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <main className={styles.conta}>
            <TopNavbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
            <SideNavbar
                menuOpen={menuOpen}
            />

            <div className={styles.area}>
                <ContaNavbar/>

                {/* area grid, separa form do perfil e foto de usuário */}
                <div className={styles.perfilContainer}>
                    
                    {/* formulário do perfil */}
                    <div className={styles.form}>
                        <h1>Perfil</h1>

                        <span className={styles.span}>Nome</span>
                        <input type="text" placeholder='Digite seu nome'/>

                        <span className={styles.span}>Senha</span>
                        <input type="text" placeholder='Digite sua senha'/>
        
                        <span className={styles.span}>E-mail</span>
                        <input type="text" placeholder='Email@email.com'/>

                        <button>Salvar</button>
                    </div>
                    
                    {/* imagem do perfil */}
                    <div className={styles.perfilImageContainer}>
                        <h2>Foto de Perfil</h2>
                        <div className={styles.profilePictureHolder} style={{backgroundImage: `url(${lapis})`}}>
                            {/* Fazer pegar foto de perfil aqui, n sabemos fazer! */}
                            {/* <img src={imageperfil} alt="Foto de Perfil" className={styles.profilePicture} /> */}
                            <button className={styles.editPicture} style={{backgroundImage: `url(${lapis})`}}></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}