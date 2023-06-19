import { useEffect } from "react";
import { useState } from "react";
import { saveAs } from 'file-saver';

const PdfLink = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);

    try {
      const response = await fetch('/api/pdf');
      const blob = await response.blob();
      saveAs(blob, 'my_pdf.pdf');
    }
    catch (error) {
      console.error('Error generating PDF:', error);
    }

    setDownloading(false);
  };

    // useEffect(() => {
    //   const fetchPdf = async () => {
    //     const response = await fetch('/api/pdf');
    //     const blob = await response.blob();
    //     // saveAs(blob, 'my_pdf.pdf');
    //   };

    //   fetchPdf();
    // }, []);

    // return <p>Generating PDF....</p>;
    return (
      <button className="bg-gradient-to-r 
                        from-cyan-500 
                        to-teal-500 
                        text-white px-4 py-2 rounded-md ml-8"
              onClick={handleDownload} disabled={downloading}>
        {/* {t('doc')} */}
        Dowload Resume
      </button>
    )
}

export default PdfLink;