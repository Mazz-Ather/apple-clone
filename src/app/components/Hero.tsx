import "../globals.css";
import Image from "next/image";
import iphone from  "/public/phone7r.png";


const Hero = ()=>{
    return(
      <>
      <div className= 'container'>
<div className="container_content">
<div className="container_content_inner">
<div className="title">
<h1>I PHONE 15 PRO</h1>
</div>
<div className="par">
<p>
Buy  the latest iPhone 15 Pro with the best deals and offers. Get the best price for your old
</p>
</div>
<div className="btns">
<button className='btns_more'> Buy Now </button>
</div>
</div>
</div>
<div className="container_outer_img">
<div className="img-inner">
<Image src={iphone}  alt="" className="container_img"/>
     </div>
   </div>
</div>
<div className="overlay"></div>
      </>
  
    )
}

export default Hero