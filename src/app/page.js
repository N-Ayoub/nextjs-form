import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4 items-center justify-center flex flex-col">
      <h1 className="text-4xl font-bold mb-10">Welcome to the Home Page</h1>
      <Link href="/form" className='bg-transparent border-2 border-blue-500 hover:bg-blue-500 transition-all duration-500 py-3 px-6 rounded-[10px]'>
        Go to Form
      </Link>
    </div>
  );
}