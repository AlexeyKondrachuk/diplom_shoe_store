import { useEffect, useState } from "react";

function useDebounce(searchVal, delay) {
  const [debouncedValue, setDebouncedValue] = useState(searchVal);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(searchVal);
    }, delay);

    return () => {
      clearTimeout(t);
    };
  }, [searchVal, delay]);
  return debouncedValue;
}

export default useDebounce;
