import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </>
  );
};

export default SharedLayout;