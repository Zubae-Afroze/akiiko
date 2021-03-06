import { useEffect, useState } from 'react';

const useMedia = (query, defaultState = false) => {
  const [state, setState] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) {
        return;
      }
      setState(!!mql.matches);
    };

    mql.addEventListener("change",onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeEventListener("change",onChange);
    };
  }, [query]);

  return state;
};

export default useMedia;