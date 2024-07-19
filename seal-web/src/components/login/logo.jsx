const Logo1 = () => {
    return ( 
        <div className="logo gap-[47px] w-[624px] py-[32px] pl-[24px]">
            <section className=" flex flex-row gap-[77px] h-[250px] w-[570px]">
                <div className="flex flex-col gap-[12px] h-[97px] w-[259px]">
                    <p className="w-[74px] h-[34px] font-poppins font-medium text-[#000000] text-[24px] tracking-[32%] leading-[34.2px]">OUR</p>
                    <p className="w-[259px] h-[51px] font-poppins font-bold text-[36px] text-[#000000] tracking-[32%] leading-[51.3px]">CATALOG</p>
                </div>
                <article className="absolute translate-y-[100px] translate-x-[30px] w-[478px] h-[34pxpx] px-[10px] pt-[15px] pb-[10px] bg-[#FF0017] rounded-tl-[8px] rounded-bl-[8px]">
                    <p className="font-poppins font-medium text-[24px] text-[#FFFFFF] leading-[34.2px] tracking-[32%]">PLASTIC PADLOCK SEAL</p>
                </article>
                <div className="h-[249.35px] w-[190px] rounded-[12px] border-[1px] border-[#CECECE]">
                     <img className="w-[190px] h-[137px] bg-[#E0E5F4]" src="./src/assets/login/2.png" alt="img" />
                    <img className="w-[190px] h-[141.35px] bg-[#C9D4F0]" src="./src/assets/login/1.png" alt="img" />
                </div>
            </section>
            <section className="h-[336px] w-[600px] mt-[47px] border-[1px] border-[#C6C6C6]">
                <article className="absolute translate-y-[140px] translate-x-[20px] w-[327px] h-[59px] rounded-tr-[8px] bg-[#FF0017] rounded-br-[8px] px-[10px] pt-[15px] pb-[10px]">
                    <p className="font-poppins font-medium text-[24px] text-[#FFFFFF] text-center leading-[34.2px] tracking-[32%] ">METAL SEALS</p>
                </article>
                <div className=" grid grid-cols-3 h-[168px] w-[600px]">
                    <img src="./src/assets/login/3.png" alt="img" />
                    <img src="./src/assets/login/4.png" alt="img" />
                    <img src="./src/assets/login/5.png" alt="img" />
                    <img src="./src/assets/login/6.png" alt="img" />
                    <img src="./src/assets/login/7.png" alt="img" />
                    <img src="./src/assets/login/8.png" alt="img" />
                </div>
            </section>
            <section className=" flex w-[600px] h-[392px] py-[76px]">
                <article className=" gap-[12px] w-[338px] h-[155px] px-[45px]">
                    <p className="h-[34px] font-poppins font-normal text-[24px] text-[#000000] tracking-[19%] leading-[34.2px]"></p>
                    <h1 className="h-[46px] font-poppins font-normal text-[32px] text-[#000000] tracking-[32%] leading-[45.6px]"> YOU</h1>
                    <h1 className="h-[51px] font-poppins font-bold text-[36px] text-[#000000] tracking-[32%] leading-[51.3px]"> DESERVE</h1>
                </article>
                
                 <img src="./src/assets/login/12.png" alt="img" />
                
            </section>
        </div>
     );
}
 
export default Logo1;