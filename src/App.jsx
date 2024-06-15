import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PromoPointView from "./pages/admin/promoPoint/promoPoint.jsx";
import PositionView from "./pages/mo/position/position.jsx";
import SalaryView from "./pages/owner/salary/owner.jsx";
import UserProfile from "./pages/user/UserProfile.jsx";
import ProdukAdminView from "./pages/admin/produk/produk.jsx";
import RecipeAdminView from "./pages/admin/recipe/recipe_admin.jsx";
import IngredientView from "./pages/mo/ingredient/ingredient.jsx";
import HampersAdminView from "./pages/admin/hampers/hampers.jsx";
import EmployeeView from "./pages/mo/employee/employee.jsx";
import PurchaseIngredientView from "./pages/mo/purchaseIngredient/purchaseIngredient.jsx";
import OtherNeedView from "./pages/mo/otherNeed/otherNeed.jsx";
import CustodianView from "./pages/mo/custodians/custodian.jsx";
import ChangePasswordAdmin from "./pages/COMPONENTS/UserProfile/ChangePassword.jsx";
import ChangePasswordCustomer from "./pages/COMPONENTS/change password/ChangePassword.jsx";
import ChangePasswordAdminNew from "./pages/admin/change password admin/ChangePassword.jsx";
import CustomerView from "./pages/admin/customers/customers.jsx";
import OrderDistanceView from "./pages/admin/order distance/order_distance_view.jsx";
import PaymentConfirmView from "./pages/admin/payment_confirm/paymentConfirm.jsx";
import ConfirmOrderView from "./pages/mo/confirm order/confirm_order_view.jsx";
import Home from "./pages/HomePage/Home.jsx";
import HomeCarousels from "./pages/COMPONENTS/Carousels/HomeCarousels.jsx";
import ProductPage from "./Product/ProductPage/ProductPage.jsx";
import CakePage from "./Product/BakePage/CakePage.jsx";
import BreadPage from "./Product/BreadPage/BreadPage.jsx";
import DrinkPage from "./Product/DrinkPage/DrinkPage.jsx";
import ConsignmentPage from "./Product/ConsignmentPage/ConsignmentPage.jsx";
import ReadyStock from "./pages/HomePage/ready_stock.jsx";
import Cart from "./pages/COMPONENTS/Cart/Cart.jsx";
import PdfPrintView from "./pages/COMPONENTS/pick up/invoice_view.jsx";
import LaporanPenjulananBulanan from "./pages/mo/laporan/laporan_penjualan_bulanan.jsx";
import LaporanPenjualanBulananPerProduct from "./pages/mo/laporan/laporan_penjualan_per_product.jsx";
import LaporanIngredients from "./pages/mo/laporan/laporan_ingredients.jsx";
import LaporanIngredientPerPeriode from "./pages/mo/laporan/laporan_ingredient_per_periode.jsx";
import LaporanPemasukanPengeluaran from "./pages/mo/laporan/Laporan_pemasukan_pengeluaran.jsx";
import LaporanIngredientPerPeriodeOwner from "./pages/mo/laporan owner/laporan_ingredient_per_periode.jsx";
import LaporanIngredientsOwner from "./pages/mo/laporan owner/laporan_ingredients.jsx";
import LaporanPemasukanPengeluaranOwner from "./pages/mo/laporan owner/Laporan_pemasukan_pengeluaran.jsx";
import LaporanPenjulananBulananOwner from "./pages/mo/laporan owner/laporan_penjualan_bulanan.jsx";
import LaporanPenjualanBulananPerProductOwner from "./pages/mo/laporan owner/laporan_penjualan_per_product.jsx";
import PesananHariIni from "./pages/mo/pesanan hari ini/pesanan_hari_ini.jsx";
import EmployeeAttendanceAndSalaryReportsView from "./pages/mo/laporan/laporan_gaji.jsx";
import EmployeeAttendanceAndSalaryReportsViewOwner from "./pages/mo/laporan owner/laporan_gaji.jsx";
import UpdateOrderStatusView from "./pages/admin/update_order_status/updateOrderStatus.jsx";
import LatePaymentView from "./pages/system/latepayment.jsx";
const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/readyStock",
    element: <ReadyStock />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <PromoPointView />,
  },
  {
    path: "/admin/Hampers",
    element: <HampersAdminView />,
  },
  {
    path: "/admin/changePassword",
    element: <ChangePasswordAdminNew />,
  },
  {
    path: "/admin/Ingeredients",
    element: <IngredientView />,
  },
  {
    path: "/admin/Recipe",
    element: <RecipeAdminView />,
  },
  {
    path: "/admin/Product",
    element: <ProdukAdminView />,
  },
  {
    path: "/admin/customer",
    element: <CustomerView />,
  },
  {
    path: "/admin/orderdistance",
    element: <OrderDistanceView />,
  },
  {
    path: "/admin/paymentConfirm",
    element: <PaymentConfirmView />,
  },
  {
    path: "/admin/updateStatusOrderPage",
    element: <UpdateOrderStatusView />,
  },
  {
    path: "/admin/system",
    element: <LatePaymentView />,
  },
  {
    path: "/mo",
    element: <PositionView />,
  },
  {
    path: "/mo/employee",
    element: <EmployeeView />,
  },
  {
    path: "/mo/purchase",
    element: <PurchaseIngredientView />,
  },
  {
    path: "/mo/custodians",
    element: <CustodianView />,
  },
  {
    path: "/mo/otherNeed",
    element: <OtherNeedView />,
  },
  {
    path: "/mo/confirmOrder",
    element: <ConfirmOrderView />,
  },
  {
    path: "/mo/report",
    element: <LaporanPenjulananBulanan />,
  },
  {
    path: "/mo/report-penjualan-per-product",
    element: <LaporanPenjualanBulananPerProduct />,
  },
  {
    path: "/mo/report-ingredient",
    element: <LaporanIngredients />,
  },
  {
    path: "/mo/report-ingredient-per-periode",
    element: <LaporanIngredientPerPeriode />,
  },
  {
    path: "/mo/report-gaji",
    element: <EmployeeAttendanceAndSalaryReportsView />,
  },
  {
    path: "/mo/pengeluaran-pemasukan",
    element: <LaporanPemasukanPengeluaran />,
  },
  {
    path: "/mo/pesanan-hari-ini",
    element: <PesananHariIni />,
  },
  {
    path: "/owner",
    element: <SalaryView />,
  },
  {
    path: "/owner/report",
    element: <LaporanPenjulananBulananOwner />,
  },
  {
    path: "/owner/report-penjualan-per-product",
    element: <LaporanPenjualanBulananPerProductOwner />,
  },
  {
    path: "/owner/report-ingredient",
    element: <LaporanIngredientsOwner />,
  },
  {
    path: "/owner/report-ingredient-per-periode",
    element: <LaporanIngredientPerPeriodeOwner />,
  },
  {
    path: "/owner/pengeluaran-pemasukan",
    element: <LaporanPemasukanPengeluaranOwner />,
  },
  {
    path: "/owner/report-gaji",
    element: <EmployeeAttendanceAndSalaryReportsViewOwner />,
  },
  {
    path: "/customer",
    element: <UserProfile />,
  },
  {
    path: "/changePasswordCustomer/:email",
    element: <ChangePasswordCustomer />,
  },
  {
    path: "/homecarousel",
    element: <HomeCarousels />,
  },
  {
    path: "/productpage",
    element: <ProductPage />,
  },
  {
    path: "/cakepage",
    element: <CakePage />,
  },
  {
    path: "/breadpage",
    element: <BreadPage />,
  },
  {
    path: "/drinkpage",
    element: <DrinkPage />,
  },
  {
    path: "/consignmentpage",
    element: <ConsignmentPage />,
  },
  {
    path: "/print-invoice",
    element: <PdfPrintView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
