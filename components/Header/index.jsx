import Image from "next/image"
import logo from '../../public/logo.png'

export default function Header()
{
    return <section className="w-[100vw] h-[70px] bg-black flex justify-center">
        <div className="h-[100%] flex items-center">
            <Image src={logo} alt="" width={100} height={100} style={{objectFit:'cover'}}/>
            <h2 className="font-bold text-[25px] text-[#FC9800] logo-text">M&M Apiaries</h2>
        </div>
    </section>
}