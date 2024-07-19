import { Link } from "react-router-dom";
const Head = () => {
    return ( 
        <div className="head max-w-screen h-[46.15px] md:h-[141px] py-[48px] px-[24px]">
            <nav className=" flex justify-between h-[45px] ">
            <Link to="/">  <section className="hidden md:block logo w-[358px] h-[45px] ">
                    <p className="h-[34px] text-[24px] font-black leading-[34.2px] w-[358px] tracking-[24%]">PROLOX SOLUTIONS</p>
                    <div className="motto flex items-center gap-[10px] h-[17px] w-[319px]">
                        <p className=" border-t-[1px] border-[#FF0017] w-[40px] lg:w-[69px]"></p>
                        <h1 className="w-[130px] lg:w-[161px] h-[17px] text-[12px] leading-[17.1px] font-bold tracking-[10%] text-[#FF0017]">Commited To Quality</h1>
                        <p className="border-t-[1px] border-[#FF0017] w-[40px] lg:w-[69px]"></p>
                    </div>
                </section>
                <section className="block md:hidden">
                    <img src="./src/assets/prolox.png" alt="img" />
                </section>
                </Link>
                <section className="flex gap-[12px] w-[121px] h-[45px] rounded-[8px] px-[12px]">
                    <img className="w-[24px] h-[38px]" src="./src/assets/cart.png" alt="img" />
                    <div className=" bg-[#616161] h-[32px] w-[61px] rounded-[8px] py-[5px] px-[24px]">
                        <p className="font-poppins font-bold text-center text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px] ">0</p>
                    </div>
                </section>
            </nav>
        </div>
     );
}
 
export default Head;