import {useState} from 'react'
const Reviews = () => {
    const reviews=Array.from({length: 15},(_,index)=>({
        id:index+1,
        text: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `,
        name: `joe doe`,
        about:`something about the product`,
    }))
    const [cPage, setCPage]=useState(1);
    const reviewsPP=5;
    const finalIndex=cPage * reviewsPP;
    const firstIndex=finalIndex-reviewsPP;
    const nPages=Math.ceil(reviews.length/reviewsPP);
    const newReviews=reviews.slice(firstIndex,finalIndex);
    console.log(newReviews)
    const n=[];
    for(let i=1 ;i<=nPages;i++){
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
        <div className="reviews">
            <nav className='flex justify-between max-w-screen py-[36px] px-[24px]'>
                <div className=" flex flex-col gap-[16px] h-[50px] w-[412.5px]">
                    <h1 className="font-poppins font-normal md:font-bold text-[16px] md:text-[24px] text-[#272727] tracking-[15%] leading-[34.2px]">Product Reviews</h1>
                    <p className=' hidden md:block w-[150px] border-t-[4px] border-[#FF0017]'></p>
                </div>
                <section className="flex gap-[4px] h-[25px] w-[127px]">
                    <button onClick={prePage} className='h-[25px] w-[25px]'><img src="./src/assets/left.png" alt="img" /></button>
                   <div className="flex h-[25px] w-[71px] bg-[#DADADA]">
                        {n.map((w,i)=>(
                            <li key={i} onClick={()=>APage(w)} className={`list-none h-[25px] w-[25px] py-[4px] px-[8px] ${cPage===w ? 'bg-[#7A7B7D]' : ''}`}><a href="#">{w}</a></li>
                        ))}
                    </div>
                    <button onClick={nextPage} className='h-[25px] w-[25px]'><img src="./src/assets/right.png" alt="img" /></button>
                </section>
            </nav>
            <article className='flex flex-col gap-[10px] max-w-screen h-[1463px] md:h-[1173px] p-[24px] '>
                {newReviews.map((r)=>(
                    <div key={r.id} className=" flex flex-col gap-[10px] h-[275px] md:h-[217px]  rounded-[12px] p-[4px] md:p-[12px] bg-[#E7E7E7]">
                        <nav className="flex gap-[10px] h-[93px] p-[10px]">
                            <img src="./src/assets/J.png" alt="img" />
                            <div className='flex flex-col gap-[4px] h-[73px] max-w-[713px] p-[10px]'>
                                <h1 className='font-poppins font-bold text-[20px] text-[#000000] leading-[28.5px] tracking-[5%]'>{r.name}</h1>
                                <p className="text-poppins font-medium text-[12px] md:text-[14px] text-[#858585] tracking-[5%] leading-[17.1px] md:leading-[19.95px]">{r.about}</p>
                            </div>
                        </nav>
                        <section className="h-[90px] p-[16px]">
                            <p className="font-poppins font-normal text-[16px] md:text-[20px] text-[#000000] leading-[22.8px] md:leading-[28.5px] tracking-[2%]">{r.text}</p>
                        </section>
                    </div>
                ))}
            </article>
        </div>
     );
}
 
export default Reviews;