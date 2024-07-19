const Catalog = () => {
    const products=Array.from({length: 12},(_,index)=>({
        id:index+1,
        text:`Prolox Solution Yellow Plastic Seals (30cm)`,
        amount:`Kes 15.00/=`
    }));
    console.log(products)
    return ( 
        <div className="catalog">
           {/*<header className=" flex justify-between max-w-screen h-[70px] pt-[24px] px-[24px] pb-[24px]">
                
                <p className="h-[34px] w-[169px] font-poppins font-normal text-[24px] text-[#A5A5A5] tracking-[15%] leading-[34.2px]">Our Catalog</p>
                <div className="flex gap-3">
                    <p className=" flex gap-[10px] w-[94px] font-popppins font-bold text-[12px] text-[#646464] tracking-[5%]">Search <img src="./src/assets/header/search.png" alt="img" /></p>
                    <p className=" flex gap-[10px] w-[72px] h-[20px]">filter <img src="./src/assets/filter.png" alt="img" /></p>
                </div>
            </header>*/}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-[24px] h-[1764px] max-w-screen p-[24px]">
                {products.map((p)=>(
                     <div key={p.id} className="flex h-218px md:h-[300px] lg:h-[266px] min-w-[366px] max-w-[476px] rounded-[8px] bg-[#F4F2F2]">
                     <img src="./src/assets/product.png" alt="img" className="h-[218px] md:h-[266px] min-w-[150px] max-w-[215px] rounded-tl-[8px] rounded-bl-[8px]" />
                         <article className=" h-[218px] md:h-[300px] lg:h-[266px] w-[216px] md:w-[210px] lg:w-[261px]">
                             <div className="flex flex-col gap-[12px] md:gap-[16px] h-[167px] md:h-[223px] min-w-[216px] max-w-[261px] py-[16px] px-[20px]">
                                 <p className="h-[93px] max-w-[221px] font-poppins font-normal text-[18px] md:text-[22px] text-[#171717] leading-[25.65px] md:leading-[31.35px] tracking-[9%]">{p.text}</p>
                                 <section className=" flex gap-[10px] h-[14px] md:h-[16px] w-[83px] md:w-[91px] ">
                                     <img className="h-[16px] w-[16px]" src="./src/assets/star 3.png" alt="img" />
                                     <img className="h-[16px] w-[16px]" src="./src/assets/star 3.png" alt="img" />
                                     <img className="h-[16px] w-[16px]" src="./src/assets/star 3.png" alt="img" />
                                     <img className="h-[16px] w-[16px]" src="./src/assets/star 3.png" alt="img" />
                                 </section>
                                 <article className="h-[35px] md:h-[50px] min-w-[188px] max-w-[221px] pt-[16px]  text-right">
                                         <p className="h-[34px] w-[179px] font-poppins font-light text-[16px] md:text-[24px] text-[#000000] leading-[22.8px] md:leading-[34.2px] tracking-[16%]">{p.amount}</p>
                                 </article>
                             </div>
                             <div className="h-[43px] w-[216px] md:w-[210px] lg:w-[261px] rounded-tl-[8px] pl-[33px] md:pl-[40px] lg:pl-[64px]">
                                 <button className="w-[183px] md:w-[170px] lg:w-[197px] h-[43px] bg-[#7A7B7D] rounded-tl-[8px] rounded-br-[8px] border-l-[8px] border-[#FF0017] py-[10px] px-[12px]">
                                     <p className="h-[23px] max-w-[107px] font-poppins font-bold text-center text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px]">Add to Cart</p>
                                 </button>
                             </div>
                         </article>
                 </div>
                ))}
               
            </section>
        </div>
     );
}
 
export default Catalog;