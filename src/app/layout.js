'use client'
import React from 'react';
import './globals.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function RootLayout({ children }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} >
      <html lang="en" className='h-full'>
        <body className='flex h-full items-center justify-center'>{children}</body>
      </html>
    </GoogleReCaptchaProvider>
  );
}