import next from 'next'
import styles from "@/styles/Layout.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <a href="/" class={styles.aLogo}>
                Feo
            </a>
            <ul>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">Yazılarım</a></li>
                <li><a href="#">Sitelerim</a></li>
                <li><a href="#">Sosyal Medyam</a></li>
            </ul>
        </div>
    )
}