import Footer from "../footer";
import Head from "../head";
import Logo from "./logo";

const Register = () => {
    return (  
        <>
        <Head/>
        <div className=" flex register h-[666px] pt-[16px] pr-[16px]">
            <section className="hidden lg:block" >
                <Logo/>
            </section>
            <section className=' flex flex-col mt-[100px] mx-auto lg:mx-0 h-[487px]  rounded-[16px] gap-[10px] bg-[#FFFFFF]'>
                <h1 className="h-[49px] p-[10px] w-[213px] font-poppins font-normal text-[20px] text-[#000000] leading-[28.5px] tracking-[15.5%] ">REGISTRATION</h1>
                <p className="h-[30px] w-[302px] py-[5px] px-[10px] font-poppins font-normal text-[14px] text-[#000000] tracking-[14.5%] leading-[19.95px]">Please fill in the following fields</p>
                <form className="flex flex-col gap-[10px]">
                    <div className="flex gap-[10px] h-[43px] rounded-[12px] bg-[#FFFFFF] opacity-[61%] py-[10px] px-[16px] border-[1px] border-[#EBEBEB]">
                        <p><img className="h-[16px] w-[16px] " src="./src/assets/email.png" alt="img" /></p>
                        <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="flex gap-[10px] h-[43px] rounded-[12px] bg-[#FFFFFF] opacity-[61%] py-[10px] px-[16px] border-[1px] border-[#EBEBEB]">
                        <p><img className="h-[16px] w-[16px] " src="./src/assets/email.png" alt="img" /></p>
                        <input type="text" placeholder="Full name" />
                    </div>
                    <div className="flex gap-[10px] h-[43px] rounded-[12px] bg-[#FFFFFF] opacity-[61%] py-[10px] px-[16px] border-[1px] border-[#EBEBEB]">
                        <p><img className="h-[16px] w-[16px] " src="./src/assets/email.png" alt="img" /></p>
                        <input type="text" placeholder="Company" />
                    </div>
                    <div className="flex gap-[10px] h-[43px] rounded-[12px] bg-[#FFFFFF] opacity-[61%] py-[10px] px-[16px] border-[1px] border-[#EBEBEB]">
                        <p><img className="h-[16px] w-[16px] " src="./src/assets/email.png" alt="img" /></p>
                        <input type="text" placeholder="Phone number" />
                    </div>
                    <article className="h-[74px] w-[358px] py-[20px] px-[10px]">
                        <p className="font-poppins font-normal text-[12px] text-[#000000] text-center tracking-[14.5%] leading-[17.1px]">ALL CONTACT INFORMATION WILL REQUIRE TO BE VERIFIED</p>
                    </article>
                    <article className=" flex gap-[10px] h-[52px] w-[358px] py-[5px] px-[10px]">
                        <button className="h-[42px] w-[164px] rounded-[8px] border-[1px] border-[#5B5B5B] bg-[#FFFFFF] py-[12px] font-poppins font-bold text-[14px] text-[#5B5B5B] text-center tracking-[14.5%] leading-[19.95px]">CANCEL</button>
                        <button className="h-[42px] w-[164px] rounded-[8px] border-[1px] border-[#5B5B5B] bg-[#5B5B5B] py-[12px] font-poppins font-bold text-[14px] text-[#FFFFFF] text-center tracking-[14.5%] leading-[19.95px]">VERIFY</button>
                    </article>
                </form>
            </section>
          
        </div>
        <Footer/>
        </>
    );
}
 
export default Register;