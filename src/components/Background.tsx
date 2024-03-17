import Image from 'next/image'
 
export default function Background() {
  return (
    <Image className='z-[-2]'
      alt="Background1"
      src={"/bg-1.png"}
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}