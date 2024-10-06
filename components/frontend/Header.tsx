// components/frontend/Header.tsx
import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { JSX, SVGProps } from 'react'
import AsteroidLogo from '@/public/image/asteroid.svg'
import Image from 'next/image'
import siteLinks from '@/components/frontend/siteLinks'

// Define routes and URLs as an array
interface Route {
  label: string
  href: string
}

export default function Component() {
  return (
    <header className='w-full bg-primary'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between px-4 py-2'>
          <Link href='/' className='flex items-center gap-2' prefetch={false}>
            <Image src={AsteroidLogo} alt='asteroid logo' width={32} />
            <span className='text-lg font-semibold'>Orrery VAMK&apos;d</span>
          </Link>
          <div className='hidden gap-4 md:flex'>
            {siteLinks.map((route: Route) => (
              <Link
                key={route.label}
                href={route.href}
                className='text-lg font-medium underline-offset-4 hover:underline'
                prefetch={false}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon' className='lg:hidden'>
                <MenuIcon className='h-6 w-6' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <div className='grid w-[200px] p-4'>
                {siteLinks.map(route => (
                  <Link
                    key={route.label}
                    href={route.href}
                    className='text-lg font-medium underline-offset-4 hover:underline'
                    prefetch={false}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  )
}
