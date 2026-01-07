import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import UnAuthWrapper from "./UnAuthWrapper";
const Products = lazy(() => import("../pages/user/Products"));
const Nav = lazy(() => import("../components/Nav"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const PageNotfound = lazy(() => import("../pages/PageNotfound"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const Cart = lazy(() => import("../pages/Cart"));

const MainRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />

        <Route
          path="/login"
          element={
            <UnAuthWrapper>
              <Login />
            </UnAuthWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <UnAuthWrapper>
              <Signup />
            </UnAuthWrapper>
          }
        />

        <Route
          path="/admin/create-product"
          element={
            <AuthWrapper>
              <CreateProduct />
            </AuthWrapper>
          }
        />
        <Route
          path="/admin/user-profile"
          element={
            <AuthWrapper>
              <UserProfile />
            </AuthWrapper>
          }
        />

        <Route
          path="/product/:id"
          element={
            <AuthWrapper>
              <ProductDetails />
            </AuthWrapper>
          }
        />

        <Route
          path="/cart"
          element={
            <AuthWrapper>
              <Cart />
            </AuthWrapper>
          }
        />

        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
