const Logo = () => {
    return ( 
        <div className="logo h-[650px] w-[618px] py-[32px] px-[24px]">
            <section className=" flex flex-row gap-[77px] h-[250px] w-[570px]">
                <div className="flex flex-col gap-[12px] h-[97px] w-[259px]">
                    <p className="w-[74px] h-[34px] font-poppins font-medium text-[#000000] text-[24px] tracking-[32%] leading-[34.2px]">OUR</p>
                    <p className="w-[259px] h-[51px] font-poppins font-bold text-[36px] text-[#000000] tracking-[32%] leading-[51.3px]">CATALOG</p>
                </div>
                <article className="absolute translate-y-[100px] translate-x-[73px] w-[498px] h-[59px] px-[10px] pt-[15px] pb-[10px] bg-[#FF0017] rounded-tl-[8px] rounded-bl-[8px]">
                    <p className="font-poppins font-medium text-[24px] text-[#FFFFFF] leading-[34.2px] tracking-[34%]">PLASTIC PADLOCK SEAL</p>
                </article>
                <img className="w-[234px] h-[250px] rounded-[8px]" src="./src/assets/register/logo 1.png" alt="img" />
            </section>

            <section className=" flex gap-[10px] h-[336px] w-[570px] p-[10px]">
                <img src="./src/assets/register/logo 2.png" alt="img" />  
                <img src="./src/assets/register/logo 2.png" alt="img" />  
                <img src="./src/assets/register/logo 2.png" alt="img" />  
                <article className="absolute translate-y-[150px] translate-x-[201px] w-[350px] h-[59px] py-[15px] px-[10px] bg-[#FF0017] rounded-tl-[8px] rounded-bl-[8px]">
                    <p className="font-poppins font-medium text-[24px] text-[#FFFFFF] leading-[34.2px] tracking-[32%]">METAL SEALS</p>
                </article>
            </section>
        </div>
     );
}
 
export default Logo;