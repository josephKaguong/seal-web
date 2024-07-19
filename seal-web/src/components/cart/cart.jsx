import Footer from "../footer";
import SProducts from "./similarproducts";
import Reviews from './reviews'
import Head from "../head";
import {Link} from 'react-router-dom'

const Cart = () => {
    return (  
        <div className="cart">
            <Head/>
            <section className=" flex flex-col mx-auto sm:flex-row gap-[20px] w-fit h-[826px] sm:h-[545px]  py-[32px] px-[16px]">
                <div className=" gap-[10px] h-[477px]  p-[10px]">
                    <header className="gap-[12px] h-[27px] w-[100px] lg:w-[420px] pr-[8px]">
                        <head className="gap-[10px] h-[20px] w-[238px]">
                            <div className=" flex gap-[10px] w-[111px] h-[20px]">
                                <img className="w-[20px] h-[20px]" src="./src/assets/star 3.png" alt="img" />
                                <img className="w-[20px] h-[20px]" src="./src/assets/star 3.png" alt="img" />
                                <img className="w-[20px] h-[20px]" src="./src/assets/star 3.png" alt="img" />
                                <img className="w-[20px] h-[20px]" src="./src/assets/star 3.png" alt="img" />
                            </div>
                        </head>
                       
                    </header>
                    <img className="h-[300px] sm:h-[420px] w-fit md:w-[420px] rounded-[8px]" src="./src/assets/product.png" alt="img" />
                </div>
                <article className="gap-[16px] h-[481px]  py-[33px] px-[10px]">
                    <div className=" gap-[10px] w-[300px] lg:w-[522px] h-[68px]">
                        <p className="font-poppins font-bold text-[24px] text-[#000000] leading-[34.2px] tracking-[18.5%]">PROLOX SOLUTIONS YELLOW <br /> PLASTIC SEAL (30CM)</p>                        
                    </div>
                    <article className="w-[300px] lg:w-[522px] h-[180px] py-[32px] px-[4px]">
                        <p className="h-[116px] text-justify font-poppins font-normal text-[16px] lg:text-[20px] leading-[28.5px] text-[#6C6C6C] tracking-[2%]">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </p>                        
                    </article>  
                    <div className="h-[70px] w-300px lg:w-[522px] py-[12px] ">
                        <p className="font-poppins font-bold text-[32px] text-left lg:text-right text-[#656565] leading-[45.6px] tracking-[8%]">kes 15.00/=</p>
                    </div> 
                    <footer className="flex gap-[12px] h-[49px] w-[100px] lg:w-[522px]">
                        <p className="w-[30px] lg:w-[62px] h-[49px] p-[10px] font-poppins font-bold text-[16px] lg:text-[20px] text-[#000000] text-center tracking-[5%] leading-[28.5px]">Qty</p>
                        <input type="number" min="1" placeholder="0" className="font-poppins font-normal w-[100px] lg:w-[200px] padding-[10px] text-center text-[20px] text-[#000000] leading-[28.5px] tracking-[5%]"/>
              
                       <Link to="/2"> <p className="h-[49px] w-[100px] lg:w-[252px] cursor-pointer rounded-[8px] py-[10px] px-[12px] bg-[#DEDFDF] font-poppins font-bold text-[12px] lg:text-[20px] text-[#616161] text-center leading-[28.5px] tracking-[5%] ">Add to cart</p></Link>
                    </footer>                 
                </article>
            </section>

            <SProducts/>
            <Reviews/>
            <Footer/>
        </div>
    );
};
 
export default Cart;