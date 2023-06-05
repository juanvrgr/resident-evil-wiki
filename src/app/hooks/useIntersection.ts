import { useState, useEffect } from "react";

export default function useIntersection(element: any) {
  const [show, setShow] = useState(0);
  console.log(element);
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(Number(entries[0].target.id));

        observer.disconnect();
      }
    });

    observer.observe(element.current);
  }, [element]);

  return show;
}
