"use client";
import Image from "next/image";
import iphone1 from  "/public/phone5.png";
import iphone2  from "/public/phone7.jpg";
import iphone3  from "/public/phone3.jpeg";
import Link from "next/link";



const Shop = () => {
  return (
    <>
    <div className="bdy">

   <div className="ontainer">
   <div className="wrapper">
   <div className="banner-image"> </div>
   <h1>I PHONE 15 PRO </h1>
   <p>I phone 15 pro in best price ,  best quality and best service</p>


  </div>
  <div className="button-wrapper"> 
  <button className="btn outline">DETAILS</button>
    <button className="btn fill">BUY NOW</button>
  </div>
    </div>

    </div>
{/* short boxes ? */}
<section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <Image src={iphone1} alt="" height={300} width={400}/>
      </figure>
      <div className="article-body">
        <h2>I PHONE 11 PRO</h2>
        <p>
          I phone 11 pro  in best price ,  best quality and best service , buy  now and get 10% discount , also  get free shipping , limited  time offer . I  phone 11 pro  in best price ,  best quality and best service , buy  now and ........
           </p>
        <Link href="#" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <Image src={iphone2} alt="" height={300} width={400} />
      </figure>
      <div className="article-body">
        <h2>I PHONE 13 PRO </h2>
        <p>
         i phone 13 pro   in best price ,  best quality and best service , buy  now and get 10% discount  , also  get free shipping , limited  time offer . I  phone 13 pro  in best  price ,  best quality and best service , buy  now and ........

        </p>
        <a href="#" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <Image src={iphone3} alt="" height={300} width={400}/>
      </figure>
      <div className="article-body">
        <h2>I PHONE 12 PRO MAX </h2>
        <p>
            i phone 12 pro max  in best price , best service , buy now  and get 10% discount , also get free shipping ,buy now and ........

        </p>
        <a href="#" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>
    </>
  );
};

export default Shop;
