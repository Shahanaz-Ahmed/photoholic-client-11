import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} PhotoHolic Page`;
  }, [title]);
};

export default useTitle;
