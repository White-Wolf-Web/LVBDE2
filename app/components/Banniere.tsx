import Image from "next/image"
import Banner from '../../public/img/banner-massage.webp'


export default function Banniere() {
  return (
    <Image src={Banner} alt="Vue sur un Bouddha de mon salon de massage" className="banner"></Image>
  )
}
