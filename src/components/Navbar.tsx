"use client"
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="Flow Jobs logo" />
          <span className="text-xl font-bold tracking-tight">JobHunt.com</span>
        </Link>
        <div className="flex justify-center items-center gap-4"> 
              <Button onClick={() => router.push('/jobs/new')} asChild>
                <span className='cursor-pointer' >Post a new job</span>
              </Button>
              <Button variant='outline' onClick={() => router.push('/admin')} asChild>
                <span className='cursor-pointer' >Admin Dashboard</span>
              </Button>
        </div>
      </nav>
    </header>
  );
}
