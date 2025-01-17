import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-purple-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Press</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Privacy</Link></li>
              <li><Link href="#" className="hover:underline">Terms</Link></li>
              <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="flex space-x-4 items-center"> {/* Added items-center for vertical alignment */}
              <Link href="#" className="hover:text-gray-200 flex items-center justify-center w-6 h-6">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.x.com/steezelycorp" className="hover:text-gray-200 flex items-center justify-center w-6 h-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20(2)-esXBLyUR0nYw5oV0oOA3WPkSxBxbgk.png"
                  alt="X (formerly Twitter)"
                  width={18}
                  height={18}
                  className="brightness-0 invert"
                />
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>
              <Link href="https://www.instagram.com/steezelycorp" className="hover:text-gray-200 flex items-center justify-center w-6 h-6">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gray-200 flex items-center justify-center w-6 h-6">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Steezely</h3>
            <p className="text-sm">The future of fashion shopping.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">© 2025 Steezely. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

