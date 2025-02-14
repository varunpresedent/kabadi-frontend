"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Event Registration", href: "/event-registration" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // Get current path

  return (
    <header className="bg-blue-600 text-white py-2 px-4 md:py-3 fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kabaddi_logo_without_background-aNjeXNZPpa35H3uLFqryHrdRIpYiit.png"
            alt="Kabaddi Club Logo"
            width={45}
            height={45}
            className="rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px]"
          />
          <span className="text-xl md:text-2xl font-bold">Kabaddi</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative group transition-colors duration-200 ${
                  pathname === item.href ? "text-yellow-300 font-semibold" : "hover:text-blue-200"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-300"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden p-2 text-white hover:bg-blue-700">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-blue-600 text-white border-none">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-lg rounded-md transition-colors duration-200 ${
                    pathname === item.href ? "bg-yellow-400 text-blue-900 font-semibold" : "hover:bg-blue-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
