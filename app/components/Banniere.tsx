import Image from "next/image"
import Banner from '../../public/img/banner-massage.webp'


export default function Banniere() {
  return (
    <header>
    <Image src={Banner} alt="Vue sur un Bouddha de mon salon de massage - shiatsu" className="banner"></Image>
    </header>
  )
}
