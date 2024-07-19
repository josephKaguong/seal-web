import Footer from "../footer";
import SProducts from "./similarproducts";
import Step2sm from "./step2sm";
import Step3sm from "./step3sm";

import Toggle from "./togglesm";

import {Link } from 'react-router-dom'
const Step2 = () => {
    const cart=Array.from({length: 4},(_,index)=>({
        id:index+1,
        text:"Prolox Solution Yellow Plastic Seal (30CM)",
        amount:"Kes 15.00/="
    }))
    return ( 
        <div className="step">
              <div className="hidden lg:flex justify-between pt-[24px] pb-[48px] ">
               <section className=" logo w-[358px] h-[45px] ">
                    <p className="h-[34px] text-[24px] font-black leading-[34.2px] w-[358px] tracking-[24%]">PLOLOX SOLUTIONS</p>
                    <div className="motto flex items-center gap-[10px] h-[17px] w-[319px]">
                        <p className=" border-t-[1px] border-[#FF0017] w-[20px] lg:w-[69px]"></p>
                        <h1 className="w-[130px] lg:w-[161px] h-[17px] text-[12px] leading-[17.1px] font-bold tracking-[10%] text-[#FF0017]">Commited To Quality</h1>
                        <p className="border-t-[1px] border-[#FF0017] w-[20px] lg:w-[69px]"></p>
                    </div>
                </section>
                <section className="flex gap-[8px]">
                    <Link to="/search"><button className="flex gap-[8px] h-[20px] w-[82px]">
                        <p className="font-poppins font-bold text-[14px] text-[#646464] tracking-[5%] leading-[19.95px]">Search</p>
                        <img className="h-[16px] w-[16px]" src="./src/assets/header/search.png" alt="img" />
                    </button></Link>
                    <p className="h-[24px] border-r-[1px] border-[#B7B7B7]"></p>
                   <Link to="/product"> <button className="flex gap-[8px] h-[20px] w-[99px]">
                        <p className="font-poppins font-bold text-[14px] text-[#646464] tracking-[5%] leading-[19.95px]">Products</p>
                        <img className="h-[16px] w-[16px]" src="./src/assets/header/product.png" alt="img" />
                    </button></Link>
                    <p className="h-[24px] border-r-[1px] border-[#B7B7B7]"></p>
                    <button className="flex gap-[8px] h-[20px] w-[123px]">
                        <p className="font-poppins font-bold text-[14px] text-[#646464] tracking-[5%] leading-[19.95px]">My Account</p>
                        <img className="h-[16px] w-[16px]" src="./src/assets/header/lock.png" alt="img" />
                    </button>
                    
                </section>
        </div>
            <section className="hidden lg:flex gap-[16px] h-[1046px] max-w-screen py-[24px] px-[20px]">
                <article className="flex flex-col gap-[10px] max-w-[574px] h-[998px]">
                    {cart.map((c)=>(
                        <section  key={c.id} className=" flex gap-[10px] max-w-[574px] h-[242px] rounded-[12px] bg-[#F4F4F4]">
                            <div className="h-[242px] w-[222px] padding-[16px]">
                                
                                   <img className="absolute translate-x-7 translate-y-[20px] text-white" src="./src/assets/xxwhite.png" alt="img" />
                                
                                <section className="h-[242px] w-[222px] p-[16px]">
                                    <img className="h-[210px] w-[190px] rounded-[8px]" src="./src/assets/pr2.png" alt="img" />
                                </section>
                                <button className="absolute -translate-y-[58px] translate-x-[15px] h-[43px] w-[190px] rounded-[8px] py-[10px] px-[19px] bg-[#FF0017]">
                                    <p className="font-poppins font-bold text-center text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px]">Remove</p>
                                </button>
                            </div>
                            <article className="flex flex-col  gap-[4px] h-[242px] w-[352px] py-[17px]">
                                <div className="flex flex-col gap-[14px] w-[352px] h-[143px] pt-[8px] pr-[24px] pb-[20px]"> 
                                    <p className="h-[70px] pr-[12px] font-poppins font-medium text-[20px] text-[#000000] tracking-[10%] leading-[28.5px] ">{c.text}</p>
                                    <p className="font-poppins font-bold text-[22px] text-[#939393] tracking-[12.5%] leading-[31.35px]">{c.amount}</p>
                                </div>
                                <div className="flex gap-[12px] w-[311px] h-[61px] pl-[24px]">
                                    <p className="h-[43px] w-[53px] p-[10px] font-poppins font-bold text-center text-[16px] text-[#000000] tracking-[5%] leading-[22.8px]">Qty</p>
                                    <button className="h-[43px] w-[48px] rounded-[8px] py-[10px] px-[20px] bg-[#6B6B6B]">
                                        <p className="font-poppins font-bold text-center text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px] ">-</p>
                                    </button>
                                    <div className="h-[43px] w-[100px] rounded-[8px] py-[10px] px-[48px] bg-[#FFFFFF]">
                                            <p className="font-poppins font-bold text-center text-[16px] text-[#000000] tracking-[5%] leading-[22.8px]">1</p>
                                    </div>
                                    <button className="h-[43px] w-[48px] rounded-[8px] py-[10px] px-[20px] bg-[#6B6B6B]">
                                        <p className="font-poppins font-bold text-center text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px] ">+</p>
                                    </button>
                                </div>
                            </article>
                       </section>
                    ))}
                </article>
                <div className=" gap-[24px] h-[875px] w-[378px]">
                            <section className="gap-[24px] h-[251px] w-[378px] rounded">
                                <div className="flex h-[65px] w-[378px] px-[24px] pt-[20px] b-[16px]  bg-[#616161]">
                                    <p className="font-poppins font-medium text-[20px] text-[#FFFFFF] tracking-[22.5px] leading-[28.5px]">SUMMARY</p>
                                    <img className="h-[24px] w-[24px]" src="./src/assets/summary.png" alt="img" />
                                </div>
                                <article className="h-[94px] p-[16px]">
                                    <div className="flex justify-between h-[23px]">
                                        <p className="font-poppins font-normal text-[16px] text-[#000000] tracking-[19%] leading-[22.8px]">ITEMS</p>
                                        <p className="font-poppins font-bold text-[16px] text-right text-[#000000] leading-[22.8px] tracking-[5%]">5</p>
                                    </div>
                                    <div className="flex justify-between h-[23px]">
                                        <p className="font-poppins font-normal text-[16px] text-[#000000] tracking-[19%] leading-[22.8px]">SUBTOTAL</p>
                                        <p className="font-poppins font-bold text-[16px] text-right text-[#000000] leading-[22.8px] tracking-[5%]">150,000</p>
                                    </div>
                                </article>
                                <section className="flex justify-end">
                                    <button className="ml-auto h-[44px] w-[189px] rounded-tr-[8px] py-[10px] pr-[24px] pl-[30px] bg-[#B1B1B1]">
                                        <p className="flex items-center font-poppins font-bold text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px]">Empty <img src="./src/assets/empty.png" alt="img" /></p>
                                    </button>
                                </section>
                            </section>
                            <section className="flex flex-col gap-[16px] h-[600px] max-w-[378px] py-[24px] px-[8px]">
                                <article className=" flex flex-col gap-[8px] h-[34px] px-[12px]">
                                    <h1 className="font-poppins font-bold text-[18px] text-[#272727] leading-[25.65px] tracking-[12%]">PROCESS ORDER</h1>
                                    <p className="w-[90px] border-t-[4px] border-[#FF0017]"></p>
                                </article>
                                <p className="h-[30px] max-w-[264px] py-[5px] px-[10px] font-poppins font-normal text-[14px] text-[#000000] tracking-[14.5%] leading-[19.95px] ">Confirm the following fields</p>
                                <form className="flex flex-col gap-[12px] h-[248px] py-[20px] px-[12px]">
                                        <div className=" flex items-center gap-[10px] h-[43px] rounded-[12px] border-[1px] border-[#EBEBEB] py-[10px] px-[16px]">
                                            <img src="./src/assets/@.png" alt="img" />
                                            <input className="w-[156px] h-[23px] font-poppins font-[250] text-[16px] text-[#000000] leading-[22.8px] tracking-[6%]" type="text" placeholder="Email Address" />
                                        </div>
                                        <div className=" flex items-center gap-[10px] h-[43px] rounded-[12px] border-[1px] border-[#EBEBEB] py-[10px] px-[16px]">
                                            <img src="./src/assets/@.png" alt="img" />
                                            <input className="w-[156px] h-[23px] font-poppins font-[250] text-[16px] text-[#000000] leading-[22.8px] tracking-[6%]" type="text" placeholder="Full Name" />
                                        </div>
                                        <div className=" flex items-center gap-[10px] h-[43px] rounded-[12px] border-[1px] border-[#EBEBEB] py-[10px] px-[16px]">
                                            <img src="./src/assets/@.png" alt="img" />
                                            <input className="w-[156px] h-[23px] font-poppins font-[250] text-[16px] text-[#000000] leading-[22.8px] tracking-[6%]" type="text" placeholder="Phone Number" />
                                        </div>
                                        <div className=" flex items-center gap-[10px] h-[43px] rounded-[12px] border-[1px] border-[#EBEBEB] py-[10px] px-[16px]">
                                            <img src="./src/assets/@.png" alt="img" />
                                            <input className="w-[156px] h-[23px] font-poppins font-[250] text-[16px] text-[#000000] leading-[22.8px] tracking-[6%]" type="text" placeholder="Delivery Address" />
                                        </div>
                                </form>
                                <p className="font-poppins font-normal text-[12px] text-[#000000] text-center leading-[17.1px] tracking-[14.5%]">*ALL CONTACT INFORMATION WILL REQUIRE TO BE VERIFIED</p>
                                <p className="font-poppins font-normal text-[12px] text-[#000000] text-center leading-[17.1px] tracking-[14.5%]">*OUR SALES TEAM WILL REACH OUT TO HELP PROCESS YOUR ORDER</p>
                               <Link to="/order"> <button className="mx-auto bg-[#5B5B5B] h-[42px] w-[342px] rounded-[8px] pt-[12px] pb-[10px]">
                                    <p className="font-poppins font-bold text-center text-[14px] text-[#FFFFFF] tracking-[14.5%]">CONTINUE</p>
                                </button></Link>
                            </section>
                        </div>
                 
            </section>
        
        <div className="block lg:hidden">
            <Toggle/>
        </div>
            
            <SProducts/>
            <Footer/>
            
        </div>
     );
}
 
export default Step2;