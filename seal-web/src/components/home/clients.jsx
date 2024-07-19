const Clients = () => {
    const clientlogo=[
        {id:1, logo:"./src/assets/clientslogo/Frame 37.png"},
        {id:2, logo:"./src/assets/clientslogo/Frame 38.png"},
        {id:3, logo:"./src/assets/clientslogo/Frame 39.png"},
        {id:4, logo:"./src/assets/clientslogo/Frame 40.png"},
        {id:5, logo:"./src/assets/clientslogo/Frame 41.png"},
        {id:6, logo:"./src/assets/clientslogo/Frame 42.png"},
        {id:7, logo:"./src/assets/clientslogo/Frame 43.png"},
        {id:8, logo:"./src/assets/clientslogo/Frame 44.png"},
        {id:9, logo:"./src/assets/clientslogo/Frame 45.png"},
        {id:10, logo:"./src/assets/clientslogo/Frame 46.png"},
        {id:11, logo:"./src/assets/clientslogo/Frame 47.png"},
        {id:12, logo:"./src/assets/clientslogo/Frame 48.png"},
    ]
    return ( 
        <div className="clients font-poppins mx-[30px]">
            <section className="h-[319px] py-[24px] ">
                <div className="h-[47px] mb-[48px]">
                    <h1 className="font-bold text-[24px] leading-[34.2px] tracking-[15%]">OUR CLIENTS</h1>
                    <p className="border-[4px] border-[#FF0017] mt-[10px] w-[150px] ml-[3px] ]"></p>
                </div>
                <article className="h-[138px] md:h-[176px]">
                    <p className="text-[16px] md:text-[24px] leading-[22.8px] md:leading-[34.2px]  font-light">Our teams work tirelessly to provide our clients with taiilored solution that meet there specific
                        sealing needs. We pride ourselves on our commitment to exceptional services and products that meet 
                        the highest standards of quality and reliability. Over the years, we have established strong and 
                        lasting partnership with many reputabe brands such as:
                    </p>
                </article>
            </section>

            <section className=" h-[960px] md:h-[690px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {clientlogo.map((c)=>(
                    <div key={c.id} >
                         <img className=" h-[150px] md:h-[230px] w-auto md:w-[230px]" src={c.logo} alt="img" />
                    </div>
                ))}
            </section>

            <section className="">
                <div className="h-[47px] w-[300px] mb-[48px]">
                    <h1 className="text-[24px] font-bold tracking-[15%] leading-[34.2px]">ABOUT US</h1>
                    <p className="border-b-[4px] border-[#FF0017] w-[150px] ml-[3px]"></p>
                </div>
                <article className="h-[176px]">
                    <p className="text-[16px] md:text-[24px] leading-[22.8px] md:leading-[34.2px] font-light">Prolox Solutions is a reliable and trusted supplier of top-quality safety sealing material to 
                        businesses in Kenya and East African region. Our company was founded in 2017 after identifying a need 
                        for a supplier that could provide responsive,quality focused and versatile security seals to meet 
                        the unique needs of businesses in the region.    
                     </p>
                </article>
            </section>
            
        </div>
     );
}
 
export default Clients;
