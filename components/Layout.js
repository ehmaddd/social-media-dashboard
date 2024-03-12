import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>SocialHub</title>
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
