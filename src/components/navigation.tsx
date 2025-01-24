import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-semibold"></Link>
        <div className="hidden items-center gap-6 sm:flex">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600">
            About Us
          </Link>
          <Link href="/property" className="text-sm font-medium text-gray-600">
            Property
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-600">
            Services
          </Link>
        </div>
      </div>
      <Button variant="default" className="rounded-full bg-black text-white hover:bg-black/90">
        Contact Us
      </Button>
    </nav>
  )
}

