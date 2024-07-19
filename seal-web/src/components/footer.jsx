
const Footer = () => {
    const socialicons=[
        {id:1, icon:"./src/assets/socialicons/Frame 2.png", text:"+254 792 639213"},
        {id:2, icon:"./src/assets/socialicons/Frame 1.png", text:"prolox.co.ke"},
        {id:3, icon:"./src/assets/socialicons/Frame 2.png", text:"+254 792 639213"},
        {id:4, icon:"./src/assets/socialicons/Frame 3.png", text:"info@prolox.co.ke"},
    ]
    return ( 
        <>
        <div className="footer h-[1093.5px] flex flex-col">
            <section className="flex h-[390px] w-[390px] sm:w-[600px] md:w-[800px] lg:w-[1024px] py-[32px]">
                <article className=" flex flex-col gap-[px] h-[390px] w-[423px] py-[48px] px-[16px] bg-[#F2F2F2]">
                    <div className="h-[72px] flex flex-col gap-[12px]">
                        <h1 className="h-[22px] font-bold text-[18px] leading-[21.78px] font-inter">OFFICE</h1>
                        <p className="text-[16px] font-inter leading-[19.36px] font-light">1st floor Habib house Gaberone road <br /> off Luthuri Avenue,C.B.D Nairobi</p>
                    </div>
                    <div className="h-[72px] ">
                        <h1 className="h-[22px] font-bold text-[18px] leading-[21.78px] font-inter mb-[12px]">OPERATIONS</h1>
                        <p  className="text-[16px] font-inter leading-[19.36px] font-light">1st flr office suite No.3 Lunga Lunga road, Industrial Area,next to National Bank</p>
                    </div>
                    <article className="h-[102px] py-[12px] gap-[12px] grid grid-cols-2">
                    {socialicons.map((s)=>(
                        <div key={s.id} className="flex  items-center">
                            <img className="w-[32px] h-[32px] rounded-full bg-[#57585A]" src={s.icon} alt="img" />
                            <p className="text-[16px] leading-[22.8px] font-poppins font-normal">{s.text}</p>
                        </div>
                    ))}
                </article>
                </article>
                <section className="h-[390px] w-[537px] md:w-[437px] py-[48px] hidden md:block ">
                    <img className="w-[260px] h-[242.67px] mt-[20px] mx-auto" src="./src/assets/logo.png" alt="img" />
                </section>
            </section>
           
       
       
            
        
        <section className=" grid grid-cols-1 md:grid-cols-2 h-[1172.5px] lg:h-[659.5px] py-[80px] px-[24px] gap-[24px] bg-[#FF0017]">
            <img className="hidden md:block" src="./src/assets/map.png" alt="img" />
            <img className="block md:hidden" src="./src/assets/Frame 117.png" alt="img" />
            <section className="flex flex-col">
            
            <form className="h-[499.5px] flex flex-col gap-[16px]">
               <h1 className="font-inter font-bold text-[24px] text-[#FFFFFF] leading-[29.5px] tracking-[10%]">REACH OUT</h1>
                <p className="border-t-[4px] border-[#FFFFFF] w-[110px]"></p>
                <div className="h-[32px] flex gap-[43px]">
                    <label className="font-inter font-normal leading-[19.36px] tracking-[10%] text-[16px] text-[#FFFFFF]">NAME</label>
                    <input type="text" className="h-[32px] rounded-[4px] w-[350px] bg-[#FFFFFF]"/>
                </div>
                <div className="h-[32px] flex gap-[43px]">
                    <label className="font-inter font-normal leading-[19.36px] tracking-[10%] text-[16px] text-[#FFFFFF]">EMAIL</label>
                    <input type="text" className="h-[32px] rounded-[4px] w-[350px] bg-[#FFFFFF]"/>
                </div>
                <div className="h-[32px] flex gap-[34px]">
                    <label className="font-inter font-normal leading-[19.36px] tracking-[10%] text-[16px] text-[#FFFFFF]">PHONE</label>
                    <input type="text" className="h-[32px] rounded-[4px] w-[350px] bg-[#FFFFFF]"/>
                </div>
                <div className="flex gap-[13px]">
                <label className="font-inter font-normal leading-[19.36px] tracking-[10%] text-[16px] text-[#FFFFFF]">MESSAGE</label>
                <textarea className="w-[350px] h-[163px] rounded-[4px] bg-[#FFFFFF]"></textarea>
                </div>
                <div className=" flex flex-col pl-[200px] gap-[10px] m-auto">
                    <button className=""><img src="./src/assets/image 1.png" alt="" /></button>
                    <button className="h-[41px] w-[165px] py-[12px] px-[32px] bg-white text-[#57585A]  font-normal leading-[16.94px]
                    text[14px]">Send Message</button>
                    
                 </div>
            </form>
        </section>
        </section>   
        </div>                  
        </>
     );
}
 
export default Footer;