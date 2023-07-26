import Nav from '@components/Nav';
import Provider from '@components/Provider';
import 'styles/globals.css';

export const metadata = {
  title: "Delivery App",
  description: "Delivery App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-6">
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
