import Logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  {
    title: 'sobre',
    href: '/about',
  },
  {
    title: 'política de privacidade',
    href: '/privacy',
  },
  {
    title: 'termos de serviço',
    href: '/terms',
  },
]

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32 border-t border-black/10">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          aria-label="go home"
          className="mx-auto block size-fit">
          <Image src={Logo} alt="Logo" />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150">
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <span className="text-muted-foreground block text-center text-sm"> © {2026} LMC+ PLUS, All rights reserved</span>
      </div>
    </footer>
  )
}