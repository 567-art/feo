import next from 'next'


export default function Hero(){
  return (
    <div style={{display: "flex", justifyContent: "space-between", padding: "10px 10%", marginTop: "40px"}}>
        <h1 style={{width: "30%", textShadow: "3px 0px 0px"}}>Ben Kimim</h1>
        <p>
            Ben aslında henüz fronend developer sayılırım yani backend tarafındaki bilgim az. Ama yine de var bir şeyler, bu yüzden bu siteyi next.js ile yapıyorum. Bu sitede bütün herşeyimi topladım. Ben Fatih efe, merhaba.
        </p>
    </div>
  )
}