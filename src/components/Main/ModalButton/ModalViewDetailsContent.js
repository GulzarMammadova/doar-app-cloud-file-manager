import React from "react";
import "../../../App.css";
import { DescriptionForm } from "./ViewDetailsTable";
import { useTranslation } from "react-i18next";

export default function ModalViewDetailsContent(props) {
  const { show, closeModal } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <h1>View Details</h1>
        <div className="details-description">
          <div className="description-line">
            <div className="left">
              <span>{t("modalDetailsDesc.fileName")}:</span>
            </div>
            <div className="right">
              <span>Medical Certificate.pdf</span>
            </div>
          </div>
          <div className="description-line">
            <div className="left">
              <span>{t("modalDetailsDesc.fileType")}:</span>
            </div>
            <div className="right">
              <span>PDF File</span>
            </div>
          </div>
          <div className="description-line">
            <div className="left">
              <span>{t("modalDetailsDesc.fileSize")}:</span>
            </div>
            <div className="right">
              <span>10.45 KB</span>
            </div>
          </div>
          <div className="description-line">
            <div className="left">
              <span>{t("modalDetailsDesc.created")}:</span>
            </div>
            <div className="right">
              <span>Monday, July 02, 2018 9:34am</span>
            </div>
          </div>
          <div className="description-line">
            <div className="left">
              <span>{t("modalDetailsDesc.accessed")}:</span>
            </div>
            <div className="right">
              <span>Monday, July 02, 2018 9:34am</span>
            </div>
          </div>
          <div className="description-line">
            <div className="left">
              <span>{t("modalDetailsDesc.description")}:</span>
            </div>
            <div className="right-text">
              <DescriptionForm />
            </div>
          </div>
        </div>
        <div className="submit">
          <div>
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
          <div></div>
        </div>{" "}
      </div>
    </>
  );
}
