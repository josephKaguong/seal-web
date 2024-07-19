const Head2 = () => {
    return (   
        <div className="pt-[24px] pb-[48px] flex justify-between">
               <section className="hidden md:block logo w-[358px] h-[45px] ">
                    <p className="h-[34px] text-[24px] font-black leading-[34.2px] w-[358px] tracking-[24%]">PLOLOX SOLUTIONS</p>
                    <div className="motto flex items-center gap-[10px] h-[17px] w-[319px]">
                        <p className=" border-t-[1px] border-[#FF0017] w-[40px] lg:w-[69px]"></p>
                        <h1 className="w-[130px] lg:w-[161px] h-[17px] text-[12px] leading-[17.1px] font-bold tracking-[10%] text-[#FF0017]">Commited To Quality</h1>
                        <p className="border-t-[1px] border-[#FF0017] w-[40px] lg:w-[69px]"></p>
                    </div>
                </section>
                <section className="flex gap-[8px]">
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
                        <p className="font-poppins font-bold text-[14px] text-[#646464] tracking-[5%] leading-[19.95px]">My Account</p>
                        <img className="h-[16px] w-[16px]" src="./src/assets/header/lock.png" alt="img" />
                    </div>
                    
                </section>
        </div>
     );
}
 
export default Head2;