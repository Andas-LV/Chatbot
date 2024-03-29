import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'],weight:"400" })

export const metadata: Metadata = {
  title: 'Chatbot',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
            {children}
        </body>
      </html>
  )
}
