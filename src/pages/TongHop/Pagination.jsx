import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Campaign from "./Campaign";
import Select from "react-select";

Pagination.propTypes = {
  campaigns: PropTypes.array.isRequired,
};

function Pagination(props) {
  const { campaigns } = props;
  const optionsData = [
    { value: 1, label: "Hiển thị 1 mục/trang" },
    { value: 5, label: "Hiển thị 5 mục/trang" },
    { value: 10, label: "Hiển thị 10 mục/trang" },
  ];
  const [paginate, setPaginate] = useState(0);
  const handleSelectPagination = (paginate) => {
    setPaginate(paginate);
  };
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + paginate;
    setCurrentItems(campaigns.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(campaigns.length / paginate));
  }, [itemOffset, paginate]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * paginate) % campaigns.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Campaign currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      <Select
        id="pagination"
        onChange={(e) => handleSelectPagination(e.value)}
        options={optionsData}
      />
      <span>Tổng {campaigns.length}</span>
    </>
  );
}

export default Pagination;
