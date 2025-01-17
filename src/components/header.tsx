"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Abril_Fatface } from 'next/font/google'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const abrilFatface = Abril_Fatface({ weight: '400', subsets: ['latin'] })

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="w-full border-b fixed top-0 bg-white z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className={`text-3xl font-extrabold text-purple-600 ${abrilFatface.className}`}>
            Steezely<span className="text-2xl align-super">©</span>
          </span>
        </Link>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-14 w-14">
              {isOpen ? (
                <X className="h-10 w-10 text-purple-600" />
              ) : (
                <Menu className="h-10 w-10 text-purple-600" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onSelect={() => scrollToSection('tools')}>
              Tools
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => scrollToSection('features')}>
              Features
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => scrollToSection('testimonials')}>
              Testimonials
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => scrollToSection('faq')}>
              FAQ
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

