import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import { Catalog, Gifts, Main, SignIn, SignUp } from './pages';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
