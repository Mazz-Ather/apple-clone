import Link from "next/link"
const  Navbar = ()=>{
    return(
        <>
 <header>
        <nav className="navbar">
            <div className="logo">APPLE</div>
            <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="#">Reviews</Link>
                <Link href="#">Contact</Link>
            </div>
            <div className="toggle" id="toggle">
                &#9776;
                 {/* <!-- Hamburger icon --> */}
            </div>
        </nav>
    </header>
{/* <!-- ========== END HEADER ========== --> */}
        </>
    )
}
export default Navbar