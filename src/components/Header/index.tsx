import { SignInButton } from '../SignInButton';
import styles from './style.module.scss';


export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <li className={styles.active}><a href="#">Home</a></li>
                    <li><a href="#">Posts</a></li>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}