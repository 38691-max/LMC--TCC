"use client";
import styles from './Dashboard.module.css';
import lmc_logo from '@/public/lmcplusv2.png'
import casa from '@/public/casa.png'
import tabela from '@/public/tabela.png'
import user from '@/public/usuario.png'
import diario from '@/public/diario.png'
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Subtitles } from 'lucide-react';

export function Dashboard() {
    const navigate = useNavigate();

    const irHome = () => {
        navigate('/Dashboard');
    };

    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className={styles.main}>
            <nav className={`${styles.vertical_bar} ${menuOpen ? styles.open : ""}`}>
                <div className={styles.area_overflow}>
                    <button className={`${styles.menubtn} ${styles.inicio}`}>
                        <img src={casa} width="40" height="40"/>
                        <span>Início</span>
                    </button>

                    <div className={styles.area1}>
                        <button className={`${styles.menubtn} ${styles.parent_btn}`}>
                            <img src={tabela} width="40" height="40"/>
                            <span>Programação</span>
                        </button>
                        <button className={styles.menubtn}>Criar nova</button>
                        <button className={styles.menubtn}>Minhas Programações</button>
                    </div>

                    <button className={`${styles.menubtn} ${styles.parent_btn}`}>
                        <img src={user} width="40" height="40"/>
                        <span>Perfis</span>
                    </button>

                    <div className={styles.area2}>
                        <button className={`${styles.menubtn} ${styles.parent_btn}`}>
                            <img src={diario} width="40" height="40"/>
                            <span>Guias</span>
                        </button>
                        <button className={styles.menubtn}>Uso de perfis</button>
                        <button className={styles.menubtn}>Criação de tabela</button>
                        <button className={styles.menubtn}>Inserções</button>
                    </div>
                </div>
            </nav>

            {open && (
                <div className={styles.overlay} onClick={() => setOpen(false)}/>
            )}


            <div className={styles.horizontal_bar}>
                <div className={styles.left_side}>

                    <button 
                    className={`${styles.hamburger} ${menuOpen ? styles.active : styles.inactive}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    >☰</button>

                    <Link className={styles.img_link} onClick={irHome}><img src={lmc_logo} alt="Logo LMC" height="128px" className={styles.lmc_logo}></img></Link>
                    <span className={styles.page_atual}>Dashboard</span>
                </div>

                <div className={styles.right_side}>
                    <button className={styles.configuracoes_popovergear} onClick={() => setOpen(!open)}></button>
                </div>

                {open && (
                    <div className={styles.configuracoes_botao_container}>
                        <div className={styles.configuracoes_botao}>Perfil</div>
                        <div className={styles.configuracoes_botao}>Acesso</div>
                        <div className={styles.configuracoes_botao}>Aparência</div>
                        <div className={styles.configuracoes_botao}>Acessibilidade</div>
                        <div className={styles.configuracoes_botao}>Autenticação</div>
                    </div>
                )}
            </div>

            <div className={styles.area}>
                <div className={styles.area_prog_perf}>

                    <div className={styles.programacao}>
                        <div className={styles.prog_header}>
                            <h1>Programação</h1>
                            <button>Criar Programação</button>
                        </div>

                        <div className={styles.prog_content}>
                            <h3>Criado por último</h3>
                            <div className={styles.prog_info}>
                                <img src=""/>
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
                                        <img src=""/>
                                        <h3 id={styles.perf_titulo}>Perfil 1</h3>
                                    </div>
                                    <button>Usar Perfil</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.area_guias}>

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
                
                <div className={styles.area_importar}>

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
