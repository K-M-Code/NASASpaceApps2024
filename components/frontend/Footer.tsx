import Image from 'next/image'
import Link from 'next/link' 
import LogoImage from '@/public/image/asteroid.svg'
import siteLinks from '@/components/frontend/siteLinks'
const Footer = () => {

  return (
    <footer className='mt-20 bg-primary p-2'>
    <div className='container mx-auto p-0'>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <Image src={LogoImage} alt="Logo" width={75} height={75} />
          <p>Copyright &copy; 2024. All rights reserved.</p>
            <div className="flex">
            {siteLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='mx-4 text-lg font-medium uppercase border-b-4 border-tertiary hover:border-white'
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
    </div>
        </div>
      </div>
    </footer>
)
}
export default Footer