'use client'
import Link from "next/link"


const Footer = ()=>{
    return(
        <>
        <div id="footer">
    <h1 id="footer-h1"> contact me </h1>
  <ul id="ul">
    <li className="link-footer"><Link href="/">Twitter</Link></li>
    <li className="link-footer" ><Link href="mailto:mazzather@gmail.com">Email</Link></li>
    <li className="link-footer"><Link href="/t">Facebook</Link></li>
    <li className="link-footer"><Link href="/">Github</Link></li> 
     <li className="link-footer"><Link href="/">Instagram</Link></li>
     <li className="link-footer"><Link href="/">Discord</Link></li>
    <li>
      <p>👋</p>
    </li>
  </ul>
</div>
        </>
    )
}

export default Footer