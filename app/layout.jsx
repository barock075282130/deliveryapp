import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { Noto_Sans_Thai } from 'next/font/google';
import 'styles/globals.css';

export const metadata = {
  title: "Delivery App",
  description: "Delivery App",
};

const notoSansThai = Noto_Sans_Thai({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={notoSansThai.className}>
      <body>
        <Provider>
          <Nav />
          <main className='p-4 flex justify-center h-screen pt-16'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
