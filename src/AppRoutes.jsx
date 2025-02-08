import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import DashboardInvest from "./pages/DashboardInvest";
import DashboardLoans from "./pages/DashboardLoans";
import DashboardSavings from "./pages/DashboardSavings";
import TransferPage from "./pages/TransferPage";
import DepositPage from "./pages/DepositPage";
import InvestPage from "./pages/InvestPage";
import SavePage from "./pages/SavePage";
import ContactPage from "./pages/ContactPage";
import Pay from "./pages/Pay";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/save"
        element={
          <Layout>
            <SavePage />
          </Layout>
        }
      />
      <Route
        path="/invest"
        element={
          <Layout>
            <InvestPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <DashboardHome />
            </DashboardLayout>
          }
        />
     
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardHome />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/savings"
        element={
            <DashboardLayout>
              <DashboardSavings />
            </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/invest"
        element={
            <DashboardLayout>
              <DashboardInvest />
            </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/loans"
        element={
            <DashboardLayout>
              <DashboardLoans />
            </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/transfer"
        element={
            <DashboardLayout>
              <TransferPage />
            </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/deposit"
        element={
            <DashboardLayout>
              <DepositPage />
            </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/pay"
        element={
            <DashboardLayout>
              <Pay />
            </DashboardLayout>
        }
      />
       </Route>
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};

export default AppRoutes;
