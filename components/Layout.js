import Head from 'next/head';
import Header from './Header';
import Dashboard from './Dashboard';

const Layout = ({ children }) => (
  <div>
    <Head>
    </Head>
    <Header />
    <main>
      <Dashboard />
      {children}
    </main>
  </div>
);

export default Layout;
