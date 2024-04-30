import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';

import {
  AddProduct,
  BuildSet,
  Catalog,
  CatalogGifts,
  Gifts,
  Main,
  Product,
  SignIn,
  SignUp,
  Tags,
  Articles,
  Applying,
  EditProduct,
  AddGifts,
  EditGifts,
  AddBuildSet,
  EditArticles,
  AddArticles,
  Categories,
} from './pages';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import Portfolio from './pages/Portfolio/Portfolio';
import Admin from './pages/Admin/Admin';
import { PadPrinting } from './pages/Applying';
import CreatePortfolio from './pages/Portfolio/CreatePortfolio';
import PortfolioDetail from './pages/Portfolio/PortfolioDetail';

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
        <Route path="/gifts/add" element={<AddGifts />} />
        <Route path="/gifts/:id" element={<EditGifts />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/build-set" element={<BuildSet />} />
        <Route path="/build-set-add" element={<AddBuildSet />} />
        <Route path="/catalog-gift" element={<CatalogGifts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/create-project" element={<CreatePortfolio />} />
        <Route path="/product" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/:id" element={<EditProduct />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<EditArticles />} />
        <Route path="/articles/add" element={<AddArticles />} />
        <Route path="/print/apply" element={<Applying />} />
        <Route path="/print/pad-printing" element={<PadPrinting />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
