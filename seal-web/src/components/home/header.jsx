import Footer from "../footer";
import Clients from "./clients";
import Featured from "./featured";
import Services from "./services";
import {useState} from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    const Button=[
        {id:1, image:"https://s3-alpha-sig.figma.com/img/dd7c/6b2a/b6942b3620427e04ddc655685f1eb8b9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BpviaMIhg2QgQ7BiIZK9IHrVNeY-labTa~De4apQLf~S0PPOQabNBacS2njiOSJqswSrS409vnqTZhOea3k0Bph1AGl8eEq9Ln8patCdwjZH3mrv2~wo9A5w67UMJUytfDv1eRL-x8rZ-l3KHDYyLoj46Ums3~1IqPGLCR1Mlyed4IP9My1oAVCkXmjwzi5WQ2aBYq5R1Ar-8Yg1ZXZD5iCxVwoteTwgEXNvGM0HWOpqTmtrTNFwpihz--vJNcD5rw8BztBLvk6P4A-6GU2VGaKjgsHMK2H8IST~hOJpn8mEjasizqZ85UeqFBumveunQV~mErHtuWGfVcPx7JODOg__", title:"Seals Delivered", motto:"1,092,976"},
        {id:2, image:"https://s3-alpha-sig.figma.com/img/603c/b858/ac41e306b428e6ea155da0a1e47a5e29?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kkNJTMCxbHHB9qFeZq0CPAJrEswTFmktHA5yGdV0f4ba3lPkSA24~7zVQwLGlHoc5sI~7trotrR22OeQ3tanSApa9eqalcejrc82sMTqeZpdFEA7jsNf9~ElUgU7tbtVB0jHsVZclgW4xda-GqsKBmCtrEMXCnJC0QrXQggLbM-QY1Vk88Q6Ut6olATpcBBfj5ENQMpkSRS5~vG~RPt~wUB3wBwF78KKk9qkQvyG~q5TqJ6zZuDljOJb6PkNNKOgPvGOQg2xtogJSC9S3BuhHE4tTSlyN4N3nRVFelXW6JPhHCQ6GRQBoqu7WxrliqfX5DBrajVFBoMsWyIqwAd8Hg__", title:"Customers Served", motto:"1,828+"},
        {id:3,image:"https://s3-alpha-sig.figma.com/img/32a9/47df/d5ba2ffbd175f9b8211f57755ca316d6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=My~lYMu~OhKNlIsuM1WRW8JNwq73lW3XsE0xtsWgdawgs4a-DFIm9vxR~soFZV~sfARA-Yhq8FQ3-JqsBpWqE80cjFa7qTc9nkVqRHBeROOZ5fhjX1EA-GdOY4h7Eo-VzLObpY4GfU~z1GYwHg5HYYC2V2ezfejXDipAxg7APRdKdQ~lfjqkUJl20ydliZi-BHmQR03cKBfXjfmiYb5MN7sZlDN81L3Oh8HoIvfHvPcQEcLq8iL16IRO3eNw3oW90Kwq8w0HMuGhLaK6iuElRcz8i5M6fBPBZv4Ieu9Z~KLHZEaqAak0Y2v06zLjIT-y2MwHZIXonYh~h~FgC0F4nw__", title:"Self Checkout", motto:"Order Anytime"},
        {id:4,image:"https://s3-alpha-sig.figma.com/img/d662/29df/e3d7ecf3eb6f69a8f675eec77b78d3fc?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SrV0IfkxdwzB7Wpaa-iatMdNZ2OggY0~Xcsrac0jrR60yCyzlUgokuLKbu0PNjRGaZy~8Yu0rZEb69qivDbywkhArs0K2b-2KvdBrqlwuTyTwRayCOfLzeO-iv~oJxChKG4JF4JF7VTq59PHwfYSiF5qaIBbLJgngNFD~0mONzuMdFg8yz5JfiMvkWWL0y0FawNNjhl5xMi6aPsUuOa27qzwx0wEvaBaU0RUfW66Ehky5aN1wrjcCOK2A7uDlSiujiaFXh8E-qOlKRUXINk-8swPbTXbZcENStj9o8i3Auavdds9U2AHfG7-WWUeBt8gvzsbptCS-cRRGBOSrIWc5w__", title:"24/7 Customer Support", motto:"Quality Guarranteed"},
    ]
   
    const socialIcons=[
        {id:0, icon:'https://s3-alpha-sig.figma.com/img/e954/8514/7c3d11ea474c375da57e0b7cff8b03bf?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GY6otvdA1EeaVh7WktzAbaHJhv7xbpzxB7Knn0mg~bH1oksTKtIXLK5a3Qwg5Pfzn1qyOxM6-JsWQMc4j-KeX1dJ5qQJDZt2WsrOTElwcUcM80vuDWPvQvxRbR6R137peOnRwEHe-VLGlMLQb4ZUXbmjjNKcV5AnqciP0lgyuk7~qLzkxo3VlrM39dlKiCsouplZAS~UQhnm56BzYwA2v9bib7pAJmJnz43mytPMcIP1rAR0uwxPgq9VBVjOgDWImkkVMXCmADY3OeMKaOVCGSIpnhEWVRS-CdqVZNBzWrdmhUDkPxmk3WMeeKsRFWAMVBZ2uCuV9UgkIXU6k-EtoQ__'},
        {id:1, icon:'https://s3-alpha-sig.figma.com/img/7efc/0648/7f8f2983c5db7489ef94f68ca30bd6a8?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WnSSN-8olcK~-avvHu5xlks3vRCfR~EyF~KqD5LhXuyQGNgokiTN9vo4NPrbbFNH3wYDdxlnzv~xXZ3xfon0MbsvVCIbwb~Zk24KzElOhwKI99ayBprnj9HQkc6pYzKKGmP7GTj6XK~Sz4JeyTXKtlEUHxJqcFYvACQTaCRplmjDhbBpkTBb9BBsZxhUdO2Qe7qPHSD8qA8xHDyXowuNTXG9B9ZkPVS5TL2Inf5Zzr5WsGHg1BltfBRJ01aovXmIHEu-rlCKH57ouEVn0R6mBmNKwwkDMK9WSgZfPzfB-~wZloSRjTGG6Kjzh1k7zKiiDKfa4-66H8TDVe5jAjC9Gg__'},
        {id:2, icon:'https://s3-alpha-sig.figma.com/img/4650/82c4/c66f4875a6ca253e9606eda1f2872664?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VoSl10JOCXaiu47676v~R3tpR9E1WP3-55m6c5na95DYBkFhJB7AtUAYdE4ab8bv1idJtIy3WgOrfK5zZZ-desBmp3y2dG3kcVvbOE4PqLgrcSt1lzgzood36LtDmlPdKYu75KrOYVGZ2yI~4UAG7dYFT37~n3OjuJZU302v38sbjTiJnOdrsDpfzQczOJ7yZAtThh4zwhihb2PHLQE0T~emE5H6xBuSHORhlWooR2~8-vAMMODbSU0vG7xvKhMg4OnmXPJjJUxofpJEmDH0YOBckzVdsadwNNrLPmWaa736tv-xAcM1bvokwpnlPeKRisXzsC8Jpp1hnRpMpahxWg__'},
        {id:3, icon:'https://s3-alpha-sig.figma.com/img/f3ac/f254/fc352de3cc6ceff6591d0d601a604ecd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYoT1VWxVni-ZH2Z20pBCKZuTuikE5XFg~LGVeO~4cm4Hm-~ExlMdog~sX~IyJbSaQy3365tyhWGwbxfY8BzIn3o1ztmQOL3mh8lVGgH9DXOOELi24v-OcJjEmdd6VmH-F-3T-XuaVlSEof1Nt4mOo7ZDZM~bFK6rNQF30XdCDsZvE-hXob41ayhFeWOTSz61cl6VL5G43wdDJoKYfhGPGLPoL1QNbPfG8SJhiJ~G1OAcJlWBtflMEo14xTa0~FIu13fHUlTa99tKJReja4vJ-nEmPW6Xp~UBMy1kyWTWx8qxidKlzp0oEHY69I3Hcv6wwVW7XzSr-99d0LKpDSM6g__'},
        {id:4, icon:'https://s3-alpha-sig.figma.com/img/b557/4771/d1bdf23e9204e81239e4a1742d0a3a05?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H6FjJKURx2bPdr2CtndDZf1L4qltSICJw~gUs20aEdRbJsmowSxNo6cktb3EZ1XXbHLprsGWdFcoV88MaUTvbaKUiJVzmHk6OOnScOYjuj~yay5CErimZ-tUzq-hr~MzKLBGos5RgN65jXdANG18AIQ8fEtqkmwfoqmL2hXtkVe-R4poL35s-Eq8KlRcfyFTlZoC-ueppnR9-1YFeI-eO9C5RG~bPuO7aM5uKBQ8GV-hYIT6UUObw4pMTSWW~-ZkDnQR8NjW8w~awG8GFPmKU~d8RPzITPU~mzdUZcP1o7YDKU4aeyOfSQ2U-pMvoDXLSCX2phOyUeFZ5ILDF9RCwA__'},
    ]
    const [isVissible,setIsVissible]=useState(false)
    const Toggle=()=>{
        setIsVissible(!isVissible)
    }
   
    return ( 
        <div className="mx-[30px]">
        <div className="header h-[1020px] sm:h-[724px] md:h-[724px] lg:h-[524px] pt-[12px] pl-[24px] pb-[12px] pr-[24px] bg-[#DADADA]">
            <section className="flex mb-[20px] gap-4px h-[91px] pt-[16px] pb-[16px]">
                <section className="logo w-[328px] h-[59px] pt-[12px]">
                    <p className="h-[31px] text-[22px] font-black leading-[31.35px] w-[328px] tracking-wide">PROLOX SOLUTIONS</p>
                    <div className="motto flex items-center gap-[10px] h-[17px] w-[300px]">
                        <p className="border border-t-[1px] border-[#FF0017] w-[59.5px]"></p>
                        <h1 className="text-[12px] leading-[17.1px] font-bold tracking-tighter text-[#FF0017]">Commited To Quality</h1>
                        <p className="border-t-[1px] border-[#FF0017] w-[59.5px]"></p>
                    </div>
                </section>
                    <section className="block md:hidden py-[15px] ml-auto">
                        <button onClick={Toggle}><img src={isVissible? "./src/assets/close.png" : "./src/assets/square 2.png"} alt="img" /></button>
                    </section>
                  
                <section className="hidden md:flex gap-[12px] h-[24px] pt-[12px]">
                   <Link to="/search"> <button className=" flex gap-[8px] h-[20px] w-[82px] border-r-[1px] border-[#B7B7B7]">
                        <p className="font-poppins font-bold text-[14px] text-center tracking-[5%] leading-[19.95px]">Search</p>
                        <img src="./src/assets/header/search.png" alt="img" />
                    </button></Link>
                   <Link to="/product"> <button className="flex gap-[8px] h-[20px] w-[99px] border-r-[1px] border-[#B7B7B7]">
                        <p className="font-poppins font-bold text-[14px] text-center tracking-[5%] leading-[19.95px]">Products</p>
                        <img src="./src/assets/header/product.png" alt="img" />
                    </button></Link>
                    <Link to="/client"><button className="flex gap-[8px] h-[20px] w-[117px] border-r-[1px] border-[#B7B7B7]">
                        <p className="font-poppins font-bold text-[14px] text-center tracking-[5%] leading-[19.95px]">Our Client</p>
                        <img src="./src/assets/header/client.png" alt="img" />
                    </button></Link>
                    <Link to="/login"><button className="flex gap-[8px] h-[20px] w-[82px] border-r-[1px] border-[#B7B7B7]">
                        <p className="font-poppins font-bold text-[14px] text-center tracking-[5%] leading-[19.95px]">LogIn</p>
                        <img src="./src/assets/header/log.png" alt="img" />
                    </button></Link>
                   <Link to="/register"> <button className="flex gap-[8px] h-[20px] w-[152px] border-r-[1px] border-[#B7B7B7]">
                        <p className="font-poppins font-bold text-[14px] text-center tracking-[5%] leading-[19.95px]">Create Account</p>
                        <img src="./src/assets/header/lock.png" alt="img" />
                    </button></Link>
                </section>
              
            </section>
            <article className="p-[24px] h-auto md:h-[164px]">
            {isVissible&&(<section className=" flex flex-col gap-[12px] text-left h-[276px] w-[366px] p-[24px]">
                        <Link to="/search"><button className="flex items-center gap-[8px] bg-[#6A6A6A] h-[36px] w-[318px] rounded-[4px] py-[8px] px-[12px]">
                            <img  src="./src/assets/header/search.png" alt="img" />
                            <p className="font-poppins font-bold text-[12px] text-[#FFFFFF] tracking-[5%]">Search</p>
                        </button></Link>
                       <Link to="/product"> <button className="flex items-center gap-[8px] bg-[#6A6A6A] h-[36px] w-[318px] rounded-[4px] py-[8px] px-[12px]">
                            <img className="bg-[#FFFFFF]" src="./src/assets/header/product.png" alt="img" />
                            <p className="font-poppins font-bold text-[12px] text-[#FFFFFF] tracking-[5%]">Products</p>
                        </button></Link>
                        <button className="flex items-center gap-[8px] bg-[#6A6A6A] h-[36px] w-[318px] rounded-[4px] py-[8px] px-[12px]">
                            <img  src="./src/assets/header/client.png" alt="img" />
                            <p className="font-poppins font-bold text-[12px] text-[#FFFFFF] tracking-[5%]">Clients</p>
                        </button>
                        <Link to="/login"><button className="flex items-center gap-[8px] bg-[#6A6A6A] h-[36px] w-[318px] rounded-[4px] py-[8px] px-[12px]">
                            <img  src="./src/assets/header/log.png" alt="img" />
                            <p className="font-poppins font-bold text-[12px] text-[#FFFFFF] tracking-[5%]">Login</p>
                        </button></Link>
                        <Link to="/register"><button className="flex items-center gap-[8px] bg-[#6A6A6A] h-[36px] w-[318px] rounded-[4px] py-[8px] px-[12px]">
                            <img  src="./src/assets/header/lock.png" alt="img" />
                            <p className="font-poppins font-bold text-[12px] text-[#FFFFFF] tracking-[5%]">Create account</p>
                        </button></Link>
                    </section>)}
                <p className="text-[16px] md:text-[20px] leading-[22px] md:leading-[28.5px] text-justify font-normal">
                    A leading logistics security solutions company that suppplies high quality security seals
                    in Kenya and East Africa region at large.We are providers of tamper evident, tamper resistant and high-security 
                     loss prevention seals and allied products to meet the growing safety needs of customers cross a wide range 
                     of industries.

                </p>
            </article>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] h-[141px]">
                {Button.map((b)=>(
                    <div key={b.id}  className="flex flex-col gap-[6px] h-[141px] sm:h-[150px] rounded-[8px] pt-[10px] pl-[60px] pb-[10px] pr-[60px] bg-[#FFFFFF]">
                        <img className="w-[72px] h-[72px] mx-auto" src={b.image} alt="" />
                        <p className=" text-[12px] text-center font-bold leading-[17.1px] h-[17px] text-[#6C6C6C]">{b.title}</p>
                        <p className="font-bold text-center text-[14px] leading-[19.95px] h-[20px] text-[#FF0017]">{b.motto}</p>
                    </div>
                ))}
                 <section className='flex justify-end gap-[16px] h-[48px] pt-[16px] pb-[8px] text-right'>
                    {socialIcons.map((i)=>(
                        <div key={i.id}>
                        <img className="w-[24px] h-[24px] rounded-[8px]" src={i.icon} alt="img"></img>
                        </div>
                    ))}
                 </section>
            </section>         
           
        </div>
        <Featured/>
            <Services/>
            <Clients/>
            <Footer/>
        </div>
     );
}
 
export default Header;