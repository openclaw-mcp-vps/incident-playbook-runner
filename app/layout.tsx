import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Playbook Runner — Automated Incident Response',
  description: 'Execute predefined incident response playbooks with automated notifications and task tracking for DevOps and SRE teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c3dcba67-4817-4dd1-b2d2-6b3ea5975746"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
