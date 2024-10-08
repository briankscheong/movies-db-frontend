"use client"

import Link from 'next/link';
import "@/app/globals.css";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';
import Spline from '@splinetool/react-spline';

export default function Main() {
    const router = useRouter();

    const redirectToLinkedIn = () => {
        router.push("https://www.linkedin.com/in/brian-cheong-computer-software/")
    }

    return (
        <div className="text-center p-10 items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-800 font-mono">
                Movies.db
            </h2>
            <div className="" style={{ height: '60vh', width: '40%', margin: '0 auto' }}>
                <Link href="https://www.linkedin.com/in/brian-cheong-computer-software/" target="_blank">
                    <Spline scene="https://prod.spline.design/i8eNphGELT2tDQVT/scene.splinecode" />
                </Link>
            </div>
            <div className="flex justify-center w-auto items-center">
                <h3 className="text-center text-base font-bold font-mono m-8 animate-typing overflow-hidden whitespace-nowrap relative border-r-4 border-r-cyan-700">
                    {/* A place to build your social circle around AI with different expertises. */}
                    Get the latest trending movies with up-to-date infomation and streaming options.
                </h3>
            </div>
            <button className="w-28 py-2 text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg text-sm" type="button" onClick={() => router.push('/dashboard')}>Get Started</button>
        </div>
    );
}

