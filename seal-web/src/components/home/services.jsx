const Services = () => {
    const service=[
        {id:1,image:"./src/assets/services/hexagon 1-1.png", heading:"Tamper evident bags", motto:"High quality tamper bags"},
        {id:2,image:"./src/assets/services/hexagon 1-2.png", heading:"Plastic Padlock Seals", motto:"High quality Plastic Padlock Seals"},
        {id:3,image:"./src/assets/services/hexagon 1-3.png", heading:"Securiy Sealing Tapes", motto:"Tamper evident adhesive security sealing tapes"},
        {id:4,image:"./src/assets/services/hexagon 1-4.png", heading:"Tamper Proof Plastic Seals", motto:"High quality tamper proof plastic seals"},
        {id:5,image:"./src/assets/services/hexagon 1-5.png", heading:"Aluminium Head Cable Seals", motto:"High quality, tamper proof aluminium high quality seals "},
        {id:6,image:"./src/assets/services/hexagon 1-6.png", heading:"Metal Security Strip Seals", motto:"High quality, tamper proof metal security strip seals"},
        
        
    ]
    return ( 
        <div className="services font-poppins">
            <section className="h-[50px] flex flex-col gap-[16px] mb-[16px] ">
                <h1 className='font-bold text-[24px] leading-[34.2px] tracking-[15%]'>OUR SERVICES</h1>
                <p className='border-t-[4px] border-[#FF0017] w-[150px]'></p>
            </section>
            <article className='h-[170px]'>
                <p className=" font-light text-[16px] md:text-[24px] leading-[22px] md:leading-[34.2px]">In the last few years we have made a name for ourselves as preffered supplier of choice fo many clients,
                    both big and small. We offer safety sealing solution to various industries such as;Petroleum and gas haulers,
                    tea and coffee processing,dairy industry players, agricultural processors,exporters and shipping agents etc.
                    below are some of the packaging products we offer:
                </p>
            </article>
           
         <section className="h-[1433]">
            <section className=" grid grid-cols-1 md:grid-cols-2 gap-2 ">
                {service.map((s)=>(
                    <div key={s.id} className=" flex flex-col justify-center h-[350px] rounded-[8px] mb-o border-[1px] border-[#D7D7D7] text-center">
                        <img className="h-[180px] w-[180px] mx-auto" src={s.image} alt="img" />
                        <h1 className="font-poppins font-bold text-[24px] leading-[34.2px] text-[#1E1E1E]">{s.heading}</h1>
                        <p className="font-poppins text-[20px] leading-[28.5px] text-[#000000] font-light">{s.motto}</p>
                    </div>
                ))}
               
                
               
            </section>
            <div className="h-[350px] rounded-[8px] border-[1px] border-[#D7D7D7] text-center mt-[8px]">
                    <img className="h-[180px] w-[180px] mx-auto" src="./src/assets/services/hexagon 1.png" alt="img" />
                    <h1 className="font-poppins font-bold text-[24px] leading-[34.2px] text-[#1E1E1E]">Hexagonal Plastic Head Cable seals</h1>
                    <p className="font-poppins text-[20px] leading-[28.5px] text-[#000000] font-light">High quality tamper proof hexagonal plastic head cable seals</p>
                    <p className="font-poppins text-[20px] leading-[28.5px] text-[#000000] font-light">(Both fixed end and non-fixed end)</p>
                

                </div>
         </section>
           
        </div>
     );
}
 
export default Services;