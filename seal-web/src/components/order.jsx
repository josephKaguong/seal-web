import Footer from "./footer";
import { useState } from "react";
import { Link } from "react-router-dom";
const Order = () => {
    const article=Array.from({length: 2},(_,index)=>({
        id:index+1,
        text:"Ordered three products to CBD Nairobi Kenya",
        amount:"Kes 15.00/=",
    }))
    const [isVissible,setIsVissible]=useState(false)
    const Toggle=()=>{
        setIsVissible(!isVissible)
    }
    return (  
        <div className="order">
             <div className="pt-[24px] pb-[48px] flex justify-between">
               <section className=" hidden lg:block logo w-[358px] h-[45px] ">
                    <p className="h-[34px] text-[24px] font-black leading-[34.2px] w-[358px] tracking-[24%]">PLOLOX SOLUTIONS</p>
                    <div className="motto flex items-center gap-[10px] h-[17px] w-[319px]">
                        <p className=" border-t-[1px] border-[#FF0017] w-[40px] lg:w-[69px]"></p>
                        <h1 className="w-[130px] lg:w-[161px] h-[17px] text-[12px] leading-[17.1px] font-bold tracking-[10%] text-[#FF0017]">Commited To Quality</h1>
                        <p className="border-t-[1px] border-[#FF0017] w-[40px] lg:w-[69px]"></p>
                    </div>
                </section>
                <img className="block lg:hidden h-[30px] w-[200px]" src="./src/assets/prolox.png" alt="img" />
                <section className="hidden md:flex gap-[8px]">
                    <div className="flex gap-[8px] h-[20px] w-[82px]">
                        <p className="font-poppins font-bold text-[14px] text-[#646464] tracking-[5%] leading-[19.95px]">Search</p>
                        <img className="h-[16px] w-[16px]" src="./src/assets/header/search.png" alt="img" />
                    </div>
                    <p className="h-[24px] border-r-[1px] border-[#B7B7B7]"></p>
                    <div className="flex gap-[8px] h-[20px] w-[99px]">
                        <p className="font-poppins font-bold text-[14px] text-[#646464] tracking-[5%] leading-[19.95px]">Products</p>
                        <img className="h-[16px] w-[16px]" src="./src/assets/header/product.png" alt="img" />
                    </div>
                    <p className="h-[24px] border-r-[1px] border-[#B7B7B7]"></p>
                    <div className="flex gap-[8px] h-[20px] w-[123px]">
                        <p className="font-poppins font-bold text-[14px] text-[#646464] tracking-[5%] leading-[19.95px]">Log out</p>
                        <img className="h-[16px] w-[16px]" src="./src/assets/header/lock.png" alt="img" />
                    </div>
                    
                </section>
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

            <section className="flex gap-[15px] h-[447px] lg:h-[1006px] py-[24px] px-[20px]">
                <article className="hidden lg:flex flex-col  gap-[24px] h-[958px] w-[614px]">
                    <div className="flex gap-[16px] h-[29px] w-[234px] px-[10px] ">
                        <p className="font-poppins font-bold text-[20px] text-[#484848] leading-[28.5px] tracking-[22%]">Active</p>
                        <p className=" h-[24px] border-l-[1px] border-[#B7B7B7]"></p>
                        <p className="font-poppins font-light text-[20px] text-[#484848] leading-[28.5px] tracking-[22%]">Closed</p>
                    </div>
                    <section className="h-[242px] w-[614px] rounded-[12px]">
                        {article.map((a)=>(
                            <div className="flex">
                             <div className="h-[242px] w-[222px] p-[16px]">
                                <img className="h-[210px] w-[190px] rounded-[8px]" src="./src/assets/pr2.png" alt="img" />
                                <button className="absolute -translate-y-[43px]  h-[43px] w-[190px] rounded-[8px] py-[10px] px-[19px] bg-[#FF0017]">
                                    <p className="font-poppins font-bold text-center text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px] ">View</p>
                                </button>
                             </div>
                             <section className="gap-[4px] h-[242px] w-[392px] py-[17px]">
                                <div className="flex flex-col gap-[14px] h-[143px] w-[392px] pt-[8px] pl-[24px] pb-[20px]">
                                    <p className="h-[70px] font-poppins font-medium text-[20px] text-[#000000] leading-[28.5px] tracking-[10%] ">{a.text}</p>
                                    <p className="h-[31px] font-popins font-normal text-[22px] text-[#939393] leading-[31.35px] tracking-[12.5px]">{a.amount}</p>
                                </div>
                                <div className="flex gap-[12px] h-[61px] w-[392px] pr-[18px]">
                                    <section className="flex justify-between gap-[6px] h-[43px] w-[150px]">
                                        <p className="font-poppins font-bold text-center text-[16px] text-[#000000] leading-[22.8px] tracking-[5%]"> Items</p>
                                        <p className="font-poppins font-bold text-center text-[16px] text-[#000000] leading-[22.8px] tracking-[5%]"> 1</p>
                                        
                                    </section>
                                    <p className="h-[39px] w-[212px] pt-[16px]">Monday, 23 June 2023</p>
                                </div>
                             </section>
                            </div>
                        ))}
                    </section>
                   
                </article>
                <p className="hidden lg:block h-[958px] border-l-[1px] border-[#DCDCDC]"></p>
                <section className="gap-[24px] h-[447px] lg:h-[958px]  lg:w-[340px] mx-auto pt-[32px]">
                        <div className="gap-[16px] h-[447px] w-[340px] rounded-[8px] py-[24px]">
                            <article className="flex flex-col gap-[8px] px-[12px] h-[34px]">
                                <h1 className="font-poppins font-bold text-[18x] text-[#272727] leading-[25.65px] tracking-[12%]">MY ACCOUNT</h1>
                                <p className="w-[90px] border-t-[4px] border-[#FF0017]"></p>
                            </article>
                            <p className="h-[30px] py-[5px] px-[11px] font-poppins font-bold text-[14px] text-[#000000] leading-[19.95px] tracking-[14.5%]">Register Customer Info</p>
                            <form className=" flex flex-col gap-[12px] h-[303px] w-[340px]  py-[20px] px-[12px]">
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
                                            <input className="w-[156px] h-[23px] font-poppins font-[250] text-[16px] text-[#000000] leading-[22.8px] tracking-[6%]" type="text" placeholder="Company" />
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
                        </div>
                    </section>
            </section>
            <Footer/>
        </div>
    );
}
 
export default Order;