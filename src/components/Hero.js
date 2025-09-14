import next from 'next'
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6"
import styles from "@/styles/Layout.module.css"


export default function Hero(){
  return (
    <div style={{display: "flex", justifyContent: "space-between", padding: "10px 10%", marginTop: "40px", minHeight: "80vh"}}>
        <div style={{flex: 1, width: "80%", position: "relative"}}>
          <h1 style={{width: "100%", textShadow: "3px 0px 0px"}}>Ben Kimim</h1>
          <div className={styles.socialMedias}>
            <div className={styles.socialMedia}>
              <FaWhatsapp/>
            </div>
            <div className="socialMedia">
              <FaInstagram/>
            </div>
            <div className="socialMedia">
              <FaTiktok/>
            </div>
          </div>
        </div>
        <p style={{flex: 2}}>
            Ben aslında henüz fronend developer sayılırım yani backend tarafındaki bilgim az. Ama yine de var bir şeyler, bu yüzden bu siteyi next.js ile yapıyorum. Bu sitede bütün herşeyimi topladım. Ben Fatih efe, merhaba.
        </p>
    </div>
  )
}