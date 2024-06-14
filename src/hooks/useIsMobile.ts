// eslint-disable-next-line
import { useEffect, useState } from "react";

// function useIsMobile(width = 992) {
//     const [isMobile, setIsMobile] = useState(window.innerWidth < width);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < width);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [width]);

     
//        return isMobile
    
// }
 

const useIsMobile = (width: number = 992) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < width);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < width);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return isMobile;
};

 

export default useIsMobile;
