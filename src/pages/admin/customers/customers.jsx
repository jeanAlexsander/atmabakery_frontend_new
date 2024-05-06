// import AdminSideBar from "../component/side_navbar_admin";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const CustomerView = () => {
//   const initValue = useSelector((state) => state.customerStore.customerData);
//   const [customer, setCustomers] = useState([...initValue]);
//   const searchRef = useRef(null);
//   const dispatch = useDispatch();

//   const filterCustomer = (cek) => {
//     var lowerCek = cek.toLowerCase();
//     var temp = initValue.filter(
//       (c) =>
//         c.customer_id.toLowerCase().includes(lowerCek) ||
//         c.first_name.toLowerCase().includes(lowerCek) ||
//         c.last_name.toLowerCase().includes(lowerCek) ||
//         c.email.toLowerCase().includes(lowerCek) ||
//         c.password.toLowerCase().includes(lowerCek) ||
//         c.date_birth.toLowerCase().includes(lowerCek) 
//     );
//     setCustomers(temp);
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <AdminSideBar />
//       <div style={{ width: "100%" }}>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//             marginLeft: "20px",
//             marginTop: "20px",
//             flex: "1",
//           }}
//         >
//           <h4>Customer</h4>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               marginRight: "20px",
//             }}
//           >
//             <input
//               type="text"
//               className="form-control form-control-sm "
//               placeholder="Search..."
//               style={{ width: "300px", marginRight: "10px" }}
//               ref={searchRef}
//             />
//             <Button
//               variant="danger"
//               className="mb-2"
//               onClick={() => {
//                 filterCustomer(String(searchRef.current.value));
//               }}
//             >
//               Search
//             </Button>
//           </div>
//         </div>
//         <Button
//           onClick={() => {
//             handleOpenModal();
//           }}
//           variant="success"
//           className="mt-3 "
//           style={{ marginLeft: "20px" }}
//         >
//           + Add Customer
//         </Button>
//         <div
//           className="p-4 container-fluid"
//           style={{ overflowY: "auto", flex: "1" }}
//         >
//           <div className="card shadow-lg p-4 mb-5 rounded">
//             <div className="card-header mb-3">
//               <h2 className="fw-semibold" style={{ textAlign: "center" }}>
//                 Customer
//               </h2>
//             </div>

//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">Customer ID</th>
//                   <th scope="col">Product Name</th>
//                   <th></th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {customer.map((c) => {
//                   return (
//                     <tr key={c.customer_id}>
//                       <td>{c.customer_id}</td>
//                       <td>{c.product_name}</td>
//                       <td></td>
//                       <td>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerView;
