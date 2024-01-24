import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'Mudit Mangtani',
  description: 'Explore the digital universe of Mudit Mangtani, a seasoned software engineer. Dive into a world where intricate codes meet innovation, showcasing a portfolio that echoes expertise, creativity, and a passion for solving complex problems through seamless technology solutions.',
  icons: {
    icon: '/icon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
