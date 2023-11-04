"use client"
import { NavData } from "@/app/constants";
import Link from "next/link";
import { usePathname } from 'next/navigation';
const navItems =[
     NavData("Kadin"),
     NavData("Çanta"),
     NavData("Çocuk"),
     NavData("Aksesuar"),
]

export default function Navigation(){
  const pathname = usePathname();
    return(
        <nav>
        <ul className="flex font-jacarta font-bold justify-center items-center   gap-10   pb-10">
          {navItems.map((item) => (
            <li key={item.id} className="cursor-pointer font-thin text-[16px] leading-3  ">
              <Link href={item.url}  className={pathname === item.url ? 'text-red-500 font-bold' : ''}>
                  {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
}