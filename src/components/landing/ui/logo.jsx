import Link from 'next/link'
import bcare from '@/assets/images/bcare.webp'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={bcare} alt="B-CARE" className="w-16 h-16" width={480} height={480}/>
    </Link>
  )
}