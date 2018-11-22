import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import "./mypage-buttons.css";

const MypageButtons: React.SFC = () => {
  return (
    <div className="mypage-buttons">
      <span className="mypage-icon d-inline-block">
        <FontAwesomeIcon icon="pencil-alt" className="mypage-fa" />
      </span>
      <span className="mypage-icon d-inline-block">
        <FontAwesomeIcon icon="download" className="mypage-fa" />
      </span>
      <span className="mypage-icon d-inline-block">
        <FontAwesomeIcon icon="share-alt" className="mypage-fa" />
      </span>
    </div>
  );
};

export default MypageButtons;
