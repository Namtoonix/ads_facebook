import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Status.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

function Status(props) {
  const { start, end } = props;
  const [status, setStatus] = useState("isUsing");
  const [statusContent, setStatusContent] = useState("Đang hoạt động");

  useEffect(() => {
    const now = new Date();
    const front = new Date(start);
    const back = new Date(end);
    if (front > now) {
      setStatus("isWaitting");
      setStatusContent("Chờ xử lý");
    } else if (back < now) {
      setStatus("isCompleted");
      setStatusContent("Đã kết thúc");
    }
  }, []);

  return (
    <li className={"status " + status}>
      <div>
        <div></div>
      </div>
      <span>{statusContent}</span>
    </li>
  );
}

export default Status;
