// import { useEffect, useRef } from "react";
//
// const useTimeout = (cb, delay) => {
//   const timeRef = useRef(null);
//
//   useEffect(() => {
//     timeRef.current = setTimeout(cb, delay);
//
//     return () => {
//       clearTimeout(timeRef.current);
//     };
//   }, [cb, delay]);
//
//   const setTimer = (delay) => {
//     clearTimeout(timeRef.current);
//     timeRef.current = setTimeout(cb, delay);
//   };
//
//   return setTimer;
// };
//
// export default useTimeout;
