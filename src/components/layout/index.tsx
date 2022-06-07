import { ReactNode } from 'react';

import BackToTop from './BackToTop';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-18rem)] bg-dark">
        <div className="prose prose-invert prose-sm max-w-none prose-pre:bg-secondary-900 prose-pre:text-primary-50 prose-a:no-underline prose-a:text-primary-100 p-8 md:p-10 lg:p-12 xl:p-16 flex justify-center">
          {children}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
