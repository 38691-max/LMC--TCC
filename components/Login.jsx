import styles from '@/styles/Login.module.css';
import { User, Lock } from 'lucide-react';
import { redirect } from 'next/navigation';

export function Login() {

    const irHome = () => {
        redirect('/Dashboard');
    };

    return (
        <main className={styles.login_main}>
            <div className={styles.boing}>
                <form
                    method="post"
                    className={styles.login_form}
                    onSubmit={irHome}
                >
                    <div className={styles.formulario_container}>
                        <h1 className={styles.login_title}>
                            Fazer Login
                        </h1>

                        <div className={styles.input_container}>
                            <User
                                size={24}
                                strokeWidth={2}
                                className={styles.input_icon}
                            />

                            <input
                                type="text"
                                placeholder="Usuário"
                                maxLength={12}
                                className={styles.login_input}
                                required
                            />
                        </div>

                        <div className={styles.input_container}>
                            <Lock
                                size={24}
                                strokeWidth={2}
                                className={styles.input_icon}
                            />

                            <input
                                type="password"
                                minLength={8}
                                placeholder="Senha"
                                className={styles.login_input}
                                required
                            />
                        </div>

                        <div className={styles.esqueceu_container}>
                            <a href="" className={styles.login_esqueceu}>
                                Esqueceu sua senha?
                            </a>
                        </div>

                        <button
                            className={styles.entrar}
                            type="submit"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>

            <div className={styles.imagem}></div>
        </main>
    );
}