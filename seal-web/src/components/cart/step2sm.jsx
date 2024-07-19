import {Link} from 'react-router-dom'
const Step2sm = () => {
    const cart=Array.from({length: 4},(_,index)=>({
        id:index+1,
        text:"Prolox Solution Yellow Plastic Seal (30CM)",
        amount:"Kes 15.00/="
    }))
    return ( 
        <div className=''>
            <div className=" flex justify-between h-[70.15px]  px-[12px] pt-[16px] pb-[20px]">
                <img src="./src/assets/prolox.png" alt="img" />
                <section className='flex gap-[12px]'>
                    <img src="./src/assets/head1.png" alt="img" />
                    <img className='bg-[#808384]' src="./src/assets/head2.png" alt="img" />
                </section>
            </div>
        <header className="flex justify-between items-centerw-screen h-[60px] py-[8px] pl-[24px] bg-[#616161]">
            <h1 className="font-poppins font-normal text-[20px] text-[#FFFFFF] tracking-[8%] leading-[28.5px]">Cart</h1>
            <div className=" flex gap-[8px] h-[44px] py-[10px] px-[12px]">
                <p className="font-poppins font-bold text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px] underline">Empty</p>
                <img src="./src/assets/empty.png" alt="img" />
            </div>
        </header>
        <article className="flex flex-col gap-[10px] w-screen h-[998px] sm:h-[1288px]">
        {cart.map((c)=>(
            <section  key={c.id} className=" grid grid-cols-2 gap-[10px] sm:gap-[50px] mx-auto w-[390px] sm:w-screen h-[238.68px] sm:h-[278px] rounded-[12px] bg-[#F4F4F4]">
                <div className="h-[163.68px] w-[154px] padding-[16px]">
                    
                       <img className="absolute translate-x-7 translate-y-[20px] text-white" src="./src/assets/xxwhite.png" alt="img" />
                    
                    <section className="h-[242px] w-[222px]  p-[16px]">
                        <img className="h-[143.68px] sm:h-[180px] w-[130px] sm:w-[230px] rounded-[8px]" src="./src/assets/pr2.png" alt="img" />
                    </section>
                    <button className="absolute -translate-y-[125px] translate-x-[15px] h-[43px] w-[130px] rounded-[8px] py-[10px] px-[19px] bg-[#FF0017]">
                        <p className="font-poppins font-bold text-center text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px]">Remove</p>
                    </button>
                </div>
                <article className="flex flex-col  gap-[4px] h-[142px] w-[227px]  py-[17px]">
                    <div className="flex flex-col gap-[14px] w-[227px] sm:w-[300px] h-[142px] sm:h-[180px] pt-[8px] pr-[24px] pb-[20px]"> 
                        <p className="h-[109px] pr-[12px] font-poppins font-medium text-[16px] sm:text-[24px] text-[#000000] tracking-[10%] leading-[22.8px] ">{c.text}</p>
                        <p className="font-poppins font-bold text-[20px] sm:text-[24px] text-[#939393] tracking-[12.5%] leading-[28.5px]">{c.amount}</p>
                    </div>
                </article>
                    <div className="flex gap-[12px] w-[311px] sm:w-screen h-[61px] sm:h-[80px] pl-[24px]">
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
                
           </section>
        ))}
         <Link to="/step3"><button className="mx-[40px] bg-[#5B5B5B] h-[42px] w-[342px] rounded-[8px] pt-[12px] pb-[10px]">
                <p className="font-poppins font-bold text-center text-[14px] text-[#FFFFFF] tracking-[14.5%]">CONTINUE</p>
            </button>
            </Link>
    </article>
    </div>
     );
}
 
export default Step2sm;