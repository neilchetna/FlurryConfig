import React, { useState, useEffect } from "react";

export default function Download({ list }) {
  const [downloadLink, setDownloadLink] = useState("");
  const makeTextFile = () => {
    // This creates the file.
    // In my case, I have an array, and each item in
    // the array should be on a new line, which is why
    // I use .join('\n') here.
    const data = new Blob([list], { type: "application/json" });

    // this part avoids memory leaks
    if (downloadLink !== "") window.URL.revokeObjectURL(downloadLink);

    // update the download link state
    setDownloadLink(window.URL.createObjectURL(data));
  };

  // Call the function if list changes
  useEffect(() => {
    makeTextFile();
  }, [list]);

  return (
    <a download="color.json" href={downloadLink}>
      download
    </a>
  );
}
