import styles from '@/styles/Login.module.css';
import senha from '@/public/senha.png';
import user from '@/public/user.png';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export function Login() {

    const irHome = () => {
        redirect('/Dashboard');
    };

    return (
        <main className={styles.login_main}>
            <div className={styles.boing}>
                <form method="post" className={styles.login_form} onSubmit={irHome}>
                    <div className={styles.formulario_container}>
                        <h1 className={styles.login_title}>Fazer Login</h1>

                        <div className={styles.input_container}>
                            <Image
                                src={user}
                                draggable="false"
                                alt="Ícone de usuário"
                                className={styles.input_icon}>
                            </Image>
                            <input type="text" placeholder="Usuário" maxLength={12} className={styles.login_input} required></input>
                        </div>

                        <div className={styles.input_container}>
                            <Image
                                src={senha}
                                draggable="false"
                                alt="Ícone de senha"
                                className={styles.input_icon}>
                            </Image>
                            <input type="password" minLength="8" placeholder="Senha" className={styles.login_input} required></input>
                        </div>

                        <div className={styles.esqueceu_container}>
                            <a href="" className={styles.login_esqueceu}>Esqueceu sua senha?</a>
                        </div>

                        <button className={styles.entrar} type="submit">Entrar</button>
                    </div>
                </form>
            </div>



            <div className={styles.imagem}>
            </div>
        </main>
    )
}