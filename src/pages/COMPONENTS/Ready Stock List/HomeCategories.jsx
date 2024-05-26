import React, { useEffect, useState } from "react";
import ProductBestCard from "../Ready Stock/ProductBestCard";
import cake1 from "../../IMAGES/cake1.png";
import cake2 from "../../IMAGES/cake2.png";
import cake3 from "../../IMAGES/cake3.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchReadyProductViewData } from "../../../store/customer/product_view";

const HomeCategories = () => {
  const dispatch = useDispatch();
  const initValue = useSelector(
    (state) => state.productDataViewStore.readyStockData
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(fetchReadyProductViewData());
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = initValue.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="allproducts" style={{ marginTop: "20px" }}>
      <h1>Ready Products Today's</h1>
      {initValue.length > 0 && (
        <div className="products">
          {currentItems.map((item, index) => (
            <ProductBestCard data={item} key={index} />
          ))}
        </div>
      )}
      {initValue.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <h1>No Ready Product Today</h1>
        </div>
      )}
      <ul
        className="pagination"
        style={{ textAlign: "center", listStyle: "none", padding: 0 }}
      >
        {initValue.length > itemsPerPage &&
          Array.from({
            length: Math.ceil(initValue.length / itemsPerPage),
          }).map((_, index) => (
            <div
              style={{
                width: "100%",
                justifyContent: "center",
              }}
            >
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                style={{ display: "inline-block", margin: "0 5px" }}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    border: "1px solid #ddd",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  {index + 1}
                </button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default HomeCategories;
