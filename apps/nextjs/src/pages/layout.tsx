import type { Metadata } from 'next';
import Header from '../components/header';

export const metadata: Metadata = {
  title: 'Catalogo de productos',
  description: 'Catalogo de productos tecnologicos de santiago garzon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
