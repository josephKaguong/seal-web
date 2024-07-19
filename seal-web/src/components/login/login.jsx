import Footer from "../footer";
import Head from "../head";
import Logo1 from "./logo";

const Login = () => {
    return (
        <>
        <Head/>
        <div className="flex flex-row gap-[32px] p-[16px]">
         <section className="hidden lg:block">
        <Logo1/>
        </section>
       <p className="hidden lg:block border-[1px] border-[#BFBFBF] h-[619.5px]"></p>
        <div className="login flex flex-col mx-auto lg:mx-0 gap-[10px] h-[574px] lg:h-[343px] w-[320px] py-[20px]  rounded-[16px]">
            
        <h1 className="h-[49px] p-[10px] w-[213px] font-poppins font-normal text-[20px] text-[#000000] leading-[28.5px] tracking-[15.5%] ">LOGIN</h1>
                
            
            <p className="h-[30px] py-[5px] px-[10px] font-poppins font-normal text-[14px] text-[#000000] leading-[19.95px] tracking-[14.5%]">Please fill in the following fields</p>
            <form >
                 <div className="flex gap-[10px] h-[43px] rounded-[12px] bg-[#FFFFFF] opacity-[61%] py-[10px] px-[16px] border-[1px] border-[#EBEBEB]">
                     <p><img className="h-[16px] w-[16px] " src="./src/assets/email.png" alt="img" /></p>
                     <input type="email" placeholder="Email Address" />
                </div>
                 <div className="flex gap-[10px] h-[43px] rounded-[12px] bg-[#FFFFFF] opacity-[61%] py-[10px] px-[16px] border-[1px] border-[#EBEBEB]">
                     <p><img className="h-[16px] w-[16px] " src="./src/assets/email.png" alt="img" /></p>
                     <input type="password" placeholder="Password" />
                </div>
                <article className=" flex gap-[10px] h-[50px]  py-[5px] px-[10px]">
                    <button className="h-[40px] w-[145px] rounded-[8px] border-[1px] border-[#5B5B5B] bg-[#FFFFFF] py-[12px] font-poppins font-bold text-[14px] text-[#5B5B5B] text-center tracking-[14.5%] leading-[19.95px]">SIGN UP</button>
                    <button className="h-[40px] w-[145px] rounded-[8px] border-[1px] border-[#5B5B5B] bg-[#5B5B5B] py-[12px] font-poppins font-bold text-[14px] text-[#FFFFFF] text-center tracking-[14.5%] leading-[19.95px]">SIGN IN</button>
                </article>
                <article className="h-[53px] pt-[6px] pb-[27px] px-[10px]">
                    <p className="h-[20px] font-poppins font-light text-[14px] text-[#4E4E4E] text-right leading-[19.95px] tracking-[14.5%]">Forgot Password</p>
                </article>
            </form>
            <div>
                <img src="./src/assets/login/google.png" alt="img" />
            </div>
        </div>        
        </div>
        <Footer/>
        </> 
     );
}
 
export default Login;