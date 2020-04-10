import { useState, useEffect } from 'react';

const getVisibilityProperties = () => {
  var hidden, visibilityChange;

  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
  }

  return [hidden, visibilityChange];
};

/**
 * Returns a boolean that indicates if the page is visibile.
 */
const usePageVisibility = () => {
  const [pageVisible, setPageVisible] = useState(true);
  const [hidden, visibilityChange] = getVisibilityProperties();

  const handleVisibilityChange = () => {
    if (document[hidden]) {
      console.log('Page hidden');
      setPageVisible(false);
    } else {
      console.log('Page visibile');
      setPageVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);

    return () => {
      document.removeEventListener(
        visibilityChange,
        handleVisibilityChange,
        false
      );
    };
  });

  return pageVisible;
};

export default usePageVisibility;
