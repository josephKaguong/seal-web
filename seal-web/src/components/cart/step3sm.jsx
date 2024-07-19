import {Link} from 'react-router-dom'
import { useState } from 'react'
const Step3sm = () => {
    const [isVissible,setIsVissible]=useState(false)
    const Toggle=()=>{
        setIsVissible(!isVissible)
    }
    
    return ( 
        <>
        <div className="flex justify-between h-[72px]">
            <img src="./src/assets/prolox.png" alt="img"  />
             <section className="block md:hidden py-[15px] ml-auto">
                        <button onClick={Toggle}><img src={isVissible? "./src/assets/close.png" : "./src/assets/square 2.png"} alt="img" /></button>
                    </section>
        </div>
        {isVissible&&(<section className=" flex flex-col gap-[12px] text-left h-[145px] w-[366px] p-[24px]">
                       <Link to="/search"> <button className="flex items-center gap-[8px] bg-[#6A6A6A] h-[36px] w-[318px] rounded-[4px] py-[8px] px-[12px]">
                            <img  src="./src/assets/search.png" alt="img" />
                            <p className="font-poppins font-bold text-[12px] text-[#FFFFFF] tracking-[5%]">Search</p>
                        </button></Link>

                       <Link to="/product"> <button className="flex items-center gap-[8px] bg-[#6A6A6A] h-[36px] w-[318px] rounded-[4px] py-[8px] px-[12px]">
                         <img className="bg-[#FFFFFF]" src="./src/assets/header/product.png" alt="img" />
                            <p className="font-poppins font-bold text-[12px] text-[#FFFFFF] tracking-[5%]">Products</p>
                        </button></Link>
                        <button className="flex items-center gap-[8px] bg-[#6A6A6A] h-[36px] w-[318px] rounded-[4px] py-[8px] px-[12px]">
                            <img  src="./src/assets/header/lock.png" alt="img" />
                            <p className="font-poppins font-bold text-[12px] text-[#FFFFFF] tracking-[5%]">Log out</p>
                        </button>
                        
                    </section>)}
        <div className=" gap-[24px] h-[875px] w-[378px] sm:w-screen">
        <section className="gap-[24px] h-[251px] w-[378px] sm:w-screen rounded">
            <div className="flex justify-between h-[65px] w-[378px] sm:w-screen px-[24px] pt-[20px] b-[16px]  bg-[#616161]">
               <Link to="/step2"> <img className="cursor-pointer h-[20.8px] w-[25px]" src="./src/assets/back.png" alt="img" /></Link>
                <p className="font-poppins font-medium text-[20px] text-[#FFFFFF] tracking-[8%] leading-[28.5px]">SUMMARY</p>
                
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
        <section className="flex flex-col gap-[16px] h-[600px] w-[378px] sm:w-screen py-[24px] px-[8px]">
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
                    <p className="font-poppins font-normal text-[12px] text-[#000000] text-center leading-[17.1px] tracking-[14.5%]">*ALL CONTACT INFORMATION WILL REQUIRE TO BE VERIFIED</p>
            <p className="font-poppins font-normal text-[12px] text-[#000000] text-center leading-[17.1px] tracking-[14.5%]">*OUR SALES TEAM WILL REACH OUT TO HELP PROCESS YOUR ORDER</p>
                <p className="font-poppins font-bold text-center text-[14px] text-[#FFFFFF] tracking-[14.5%]">CONTINUE</p>
            <Link to="/order"><button className="mx-auto bg-[#5B5B5B] h-[42px] w-[342px] rounded-[8px] pt-[12px] pb-[10px]">
                Continue
            </button></Link>
            </form>
           
        </section>
     </div>
     </>
     );
}
 
export default Step3sm;