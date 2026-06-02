import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const charter = localFont({
  variable: '--font-charter',
  display: 'swap',
  src: [
    { path: '../public/fonts/charter_regular.woff2',     weight: '400', style: 'normal' },
    { path: '../public/fonts/charter_bold.woff2',        weight: '700', style: 'normal' },
    { path: '../public/fonts/charter_italic.woff2',      weight: '400', style: 'italic' },
    { path: '../public/fonts/charter_bold_italic.woff2', weight: '700', style: 'italic' },
  ],
});

export const metadata: Metadata = {
  title: 'Claude Builders Club @ TUM',
  description: 'Claude Builders Club Munich — TUM chapter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${charter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
