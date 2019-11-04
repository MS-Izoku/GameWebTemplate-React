import React from "react";

const PageNavigator = props => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <span class="page-link" onClick={()=>{}}>
              Home
            </span>
          </li>
          <li className="page-item">
            <span className="page-link" href="#">
              Features
            </span>
          </li>
          <li className="page-item">
            <span className="page-link" href="#">
              News
            </span>
          </li>
          <li className="page-item">
            <span class="page-link" href="#">
              Media
            </span>
          </li>
          <li className="page-item">
            <span className="page-link" href="#">
              Buy Now / Pre-Order
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageNavigator;
