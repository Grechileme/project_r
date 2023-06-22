import { useEffect } from "react";
import { useState } from "react";
import { saveAs } from 'file-saver';

const PdfLink = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);

    try {
      const newTab = window.open('/api/pdf', '_blank');
      newTab.focus();
    }
    catch (error) {
      console.error('Error generating PDF:', error);
    }

    setDownloading(false);
  };

    return (
      <button className="bg-gradient-to-r 
                        from-cyan-500 
                        to-teal-500 
                        text-white px-4 py-2 rounded-md ml-8
                        hover:animate-[spin_2s]"
              onClick={handleDownload} disabled={downloading}>
        {/* {t('doc')} */}
        {downloading ? 'Opening....' : 'Resume'}
      </button>
    )
}

export default PdfLink;