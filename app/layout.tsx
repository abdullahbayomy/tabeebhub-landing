import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TabeebHub — Clinic Management System',
  description: 'Clinic management system for doctors and medical clinics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
