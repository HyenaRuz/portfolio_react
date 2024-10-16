import React from "react";
import styles from "./CopyButton.module.scss";
import { ReactComponent as Copy } from "../../../assets/icon/icon-copy32.svg";

function CopyButton({ copyText }) {
  const copyToClipboard = () => {
    const textarea = document.createElement("textarea");
    textarea.value = copyText;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(textarea);
  };

  return (
    <button onClick={copyToClipboard} className={styles.copyButton}>
      <Copy />
    </button>
  );
}

export default CopyButton;
