import Image from 'next/image'
import Link from 'next/link' 
import LogoImage from '@/public/image/asteroid.svg'
import siteLinks from '@/components/frontend/siteLinks'
const Footer = () => {

  return (
    <footer className='mt-20 bg-primary p-2'>
    <div className='container mx-auto p-4'>
        <div className="flex justify-around items-center">
          <Image src={LogoImage} alt="Logo" width={100} height={100} />
          <p>Copyright &copy; 2024. All rights reserved.</p>
            <div className="flex">
            {siteLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='mr-4 text-lg font-medium underline-offset-4 hover:underline'
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