import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src="/bcare.png" alt="B-Care" className="size-16" width={64} height={64}/>
    </Link>
  )
}