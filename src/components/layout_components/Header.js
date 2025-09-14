import next from 'next'
import styles from "@/styles/Layout.module.css"
import Image from 'next/image'

export default function Header() {
    return (
        <div className={styles.header}>
            <ul>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="/yazilarim">Yazılarım</a></li>
                <li><a href="#">Sitelerim</a></li>
                <li><a href="#">Sosyal Medyam</a></li>
            </ul>
        </div>
    )
}