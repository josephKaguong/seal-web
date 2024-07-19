import { useState } from "react";

import Catalog from "../catalog";
import Footer from "../footer";
import Head from "../head";

const Search = () => {
    const checkBox=[
        {id:1, text:"Tamper Evident Bags"},
        {id:2, text:"Plastic Padlock Seals"},
        {id:3, text:"Security Sealing Tapes"},
        {id:4, text:"Hexagonal Plastic Cables"},
        {id:5, text:"Aluminium Head Cables"},
        {id:6, text:"Tamper Proof Plastic Seals"},
    ]
    const [isSeen,setIsSeen]=useState(true)
    const add=()=>{
        setIsSeen(true)
    }
    const remove=()=>{
        setIsSeen(false)
    }
    return ( 
        <div className="search">
            <Head/>
             {!isSeen&&(<header className="hidden lg:flex justify-between max-w-screen h-[70px] pt-[24px] px-[24px] pb-[24px]">
                
                <p className="h-[34px] w-[169px] font-poppins font-normal text-[24px] text-[#A5A5A5] tracking-[15%] leading-[34.2px]">Our Catalog</p>
                <div onClick={add} className="flex gap-3 cursor-pointer">
                    <p className=" flex gap-[10px] w-[94px] font-popppins font-bold text-[12px] text-[#646464] tracking-[5%]">Search <img src="./src/assets/header/search.png" alt="img" /></p>
                    <p className=" flex gap-[10px] w-[72px] h-[20px]">filter <img src="./src/assets/filter.png" alt="img" /></p>
                </div>
            </header>)}
            <header className="flex justify-between lg:hidden h-[44px] px-[20px] pt-[12px]">
                <p onClick={add} className="font-poppins font-bold text-[16px] text-[#313131] tracking-[5%] leading-[22.8px] cursor-pointer">Search</p>
                <button onClick={remove} className="flex items-center gap-[4px] w-[62px] h-[14px] font-poppins font-bold text-[12px] text-[#646464] tracking-[5%]">
                            Clear
                            <img src="./src/assets/xx.png" alt="clear icon" />
                        </button>
            </header>
            {isSeen && (
                <div>
                    <nav className="flex justify-between gap-[12px] h-[70px] px-[24px] pt-[24px] pb-[24px]">
                        <p className="hidden lg:block h-[34px] font-poppins font-normal text-[24px] tracking-[15%] leading-[34.2px]">Filter Results</p>
                        <section className="flex items-center">
                            <div className="flex gap-[12px] items-center h-[32px] w-[310px] border-r-[1px]">
                                <input
                                    className="w-[266px] rounded-[8px] py-[4px] pl-[4px] pr-[90px] bg-[#F4F4F4] font-poppins font-normal text-[16px] text-[#646464] tracking-[5%]"
                                    type="text"
                                    placeholder="Enter your Search Here"
                                />
                                <img className="hidden lg:blockw-[20px] h-[20px]" src="./src/assets/header/search.png" alt="search icon" />
                            </div>
                            <div className="hidden lg:flex gap-[12px] h-[20px] w-[72px]">
                                <p className="w-[36px] font-poppins font-bold text-[12px] text-[#646464] tracking-[5%]">Filter</p>
                                <img src="./src/assets/filter.png" alt="filter icon" />
                            </div>
                        </section>
                    </nav>
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[23px] justify-center h-[650px] lg:h-[199px] max-w-screen p-[24px] border-[1px] border-[#DCDCDC]">
                        <article className="gap-[10px] h-[145px] lg:border-r-[1px] border-[#BFBFBF]">
                            <h1 className="h-[23px] font-poppins font-bold text-[16px] text-[#313131] mb-[10px] tracking-[5%] leading-[22.8px]">Category</h1>
                            <div className="grid mb-[10px] grid-cols-1 lg:grid-cols-2 gap-[12px] w-[350px] lg:w-[572px] h-[236px] md:h-[112px]">
                                {checkBox.map((c)=>(
                                    <div key={c.id} className="flex gap-[8px] h-[32px] w-[280px] py-[4px]">
                                        <input className="h-[24px] w-[24px] rounded-[4px] bg-[#DADADA] border-[1px] border-[#D7D7D7]" type="checkbox" />
                                        <p className="h-[23px] w-[248px] fnt-poppins font-normal text-[16px] text-[#57585A] tracking-[5%] leading-[22.8px]">{c.text}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                        <article className="h-[238px] lg:h-[151px] mt-[30px]">
                            <h1 className="h-[31px] py-[4px] font-poppins font-bold text-[16px] text-[#313131] tracking-[5%] leading-[22.8px]">Price</h1>
                            <section className="grid gap-[16px] grid-cols-1 lg:grid-cols-2 mt-[10px] h-[76px] lg:h-[30px]">
                                <div className="flex h-[30px] w-[350px] lg:w-[171px]">
                                    <div className="h-[20px] w-[32px]">
                                        <p className="font-poppins font-normal text-[14px] text-[#A4A4A4] tracking-[5%]">Min</p>
                                    </div>
                                    <input className="w-[248px] lg:w-[69px] h-[30px] bg-[#F4F4F4]" type="number" />
                                    <div className="bg-[#969696] w-[62px] h-[30px] rounded-tr-[8px] rounded-br-[8px] font-poppins text-[16px] font-normal text-[#FFFFFF]">Kes</div>
                                </div>
                                <div className="flex h-[30px] w-[350px] lg:w-[171px]">
                                    <p className="h-[20px] w-[32px] font-poppins font-normal text-[14px] text-[#A4A4A4] tracking-[5%]">Max</p>
                                    <input className="w-[248px] lg:w-[69px] h-[30px] bg-[#F4F4F4]" type="number" />
                                    <div className="bg-[#969696] w-[62px] h-[30px] rounded-tr-[8px] rounded-br-[8px] font-poppins text-[16px] font-normal text-[#FFFFFF]">Kes</div>
                                </div>
                            </section>
                            <h1 className="h-[31px] py-[4px] font-poppins font-bold text-[16px] text-[#313131] tracking-[5%] leading-[22.8px]">Length</h1>
                            <section className="grid gap-[16px] grid-cols-1 lg:grid-cols-2 h-[76px] lg:h-[30px]">
                                <div className="flex h-[30px] w-[350px] lg:w-[171px]">
                                    <div className="h-[20px] w-[32px] font-poppins font-normal text-[14px] text-[#A4A4A4] tracking-[5%]">Min</div>
                                    <input className="w-[248px] lg:w-[69px] h-[30px] bg-[#F4F4F4]" type="number" />
                                    <div className="bg-[#969696] w-[62px] h-[30px] rounded-tr-[8px] rounded-br-[8px] font-poppins text-[16px] font-normal text-[#FFFFFF]">Kes</div>
                                </div>
                                <div className="flex h-[30px] w-[350px] lg:w-[171px]">
                                    <div className="h-[20px] w-[32px] font-poppins font-normal text-[14px] text-[#A4A4A4] tracking-[5%]">Max</div>
                                    <input className="w-[248px] lg:w-[69px] h-[30px] bg-[#F4F4F4]" type="number" />
                                    <div className="bg-[#969696] w-[62px] h-[30px] rounded-tr-[8px] rounded-br-[8px] font-poppins text-[16px] font-normal text-[#FFFFFF]">Kes</div>
                                </div>
                            </section>
                        </article>
                    </section>
                    <nav className="flex justify-between h-[82px] px-[24px] pt-[36px] pb-[12px]">
                        <h1 className="hidden lg:block font-poppins font-normal text-[24px] text-[#646464] tracking-[5%] leading-[34.2px]">139 Products In Results</h1>
                        <button onClick={remove} className="flex items-center gap-[4px] w-[62px] h-[14px] font-poppins font-bold text-[12px] text-[#646464] tracking-[5%]">
                            Clear
                            <img src="./src/assets/xx.png" alt="clear icon" />
                        </button>
                        <div className="lg:hidden flex gap-[12px] h-[20px] w-[72px]">
                                <p className="w-[36px] font-poppins font-bold text-[12px] text-[#646464] tracking-[5%]">Filter</p>
                                <img src="./src/assets/filter.png" alt="filter icon" />
                         </div>
                    </nav>
                </div>
            )}
            <Catalog/>
            <Footer/>
        </div>
     );
}
 
export default Search;