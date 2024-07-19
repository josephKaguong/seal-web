import {useState} from 'react'
import {Link} from 'react-router-dom'
const Featured = () => {
    const products=Array.from({length: 16},(_,index)=>({
        id:index+1,
        text:`Prolox Solution Yellow Plastic Seals (30cm)`,
        amount:`Kes 15.00/=`
    }));
    const [cPage, setCPage]=useState(1)
    const productsPP=4
    const finalIndex=productsPP*cPage 
    const initialIndex=finalIndex-productsPP 
    const newProducts=products.slice(initialIndex,finalIndex)
    const nPages=Math.ceil(products.length/productsPP)
    const n=[]
    for(let i=1;i<=nPages;i++){
        n.push(i)
    }
    const prePage=()=>{
        if(cPage !== 1){
        setCPage(cPage-1)
       }
    }
    const nextPage=()=>{
        if(cPage !==n.length){
            setCPage(cPage+1)
        }
    }
    const APage=(id)=>{
        setCPage(id)
    }
    return ( 
        <div className="featured  h-[1100px]">
              <nav className='flex justify-between max-w-screen py-[36px] px-[24px]'>
                <div className=" flex flex-col gap-[16px] h-[50px] w-[412.5px]">
                    <h1 className="font-poppins font-normal md:font-bold text-[16px] md:text-[24px] text-[#272727] tracking-[15%] leading-[34.2px]">Featured lists</h1>
                    <p className=' hidden md:block w-[150px] border-t-[4px] border-[#FF0017]'></p>
                </div>
                <section className="flex gap-[4px] h-[36px] w-[236px]">
                    <button onClick={prePage} className='h-[36px] w-[36px]'><img src="./src/assets/left.png" alt="img" /></button>
                   <div className="flex h-[33px] w-[142px] bg-[#DADADA]">
                        {n.map((w,i)=>(
                            <li key={i} onClick={()=>APage(w)} className={`list-none h-[33px] w-[35px] py-[4px] px-[8px] ${cPage===w ? 'bg-[#7A7B7D]' : ''}`}><a href="#">{w}</a></li>
                        ))}
                    </div>
                    <button onClick={nextPage} className='h-[36px] w-[36px]'><img src="./src/assets/right.png" alt="img" /></button>
                </section>
            </nav>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-[24px] h-[682px] max-w-screen py-[32px] px-[48px]">
            {newProducts.map((p)=>(
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
                                <Link to="/cart"> <button className="w-[183px] md:w-[170px] lg:w-[197px] h-[43px] bg-[#7A7B7D] rounded-tl-[8px] rounded-br-[8px] border-l-[8px] border-[#FF0017] py-[10px] px-[12px]">
                                     <p className="h-[23px] max-w-[107px] font-poppins font-bold text-center text-[16px] text-[#FFFFFF] tracking-[5%] leading-[22.8px]">Add to Cart</p>
                                 </button></Link>
                             </div>
                         </article>
                 </div>
                ))}
                </section>
        </div>
     );
}
 
export default Featured;