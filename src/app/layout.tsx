import './globals.css';
import CustomCursor from '@/components/custom_cursor';

export const metadata = {
  title: 'Jeffrey Boakye | Software Engineer',
  description: 'Full Stack Developer building web and mobile apps.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen text-white">
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}