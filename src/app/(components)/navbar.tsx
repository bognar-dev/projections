
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Navbar() {
  return (
    <nav className="bg-gray-50 px-1 py-2 shadow-md">
      <div className="container flex items-center justify-items-stretch content-between justify-between min-w-full">

        <div className=" pl-2 flex items-center space-x-4">
          <Link className="text-md font-semibold uppercase tracking-wide" href="#">
            Projections
          </Link>
          <Link className="text-md font-semibold uppercase tracking-wide" href="#">
            By Adela Novakova
          </Link>
        </div>

        <div className="flex items-center space-x-4 pr-2 ">
          <Link className="text-md font-semibold uppercase tracking-wide" href="#">
            Portfolio
          </Link>
          <Link className="text-md font-semibold uppercase tracking-wide" href="#">
            Fall / Winter
          </Link>
          <MenuIcon className="h-6 w-6" />
        </div>
      </div>
    </nav>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
