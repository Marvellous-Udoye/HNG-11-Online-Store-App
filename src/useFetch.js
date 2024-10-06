import React, { useState, useEffect } from 'react';

const FetchJson = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.timbu.cloud/products?organization_id=2f92313e75c14aa8be16aa9ee8870ef1&reverse_sort=false&page=1&size=10&Appid=R20DNO8UMZ1DNI3&Apikey=75034892a33d4a9dbe62a8540f766cf220240712191924040081');

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        console.log(result)
        setProducts(result);        

        // Convert to JSON and download
        const json = JSON.stringify(result, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = 'products.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data fetched and saved to JSON file</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
};

export default FetchJson;
















// import { useState, useEffect } from "react";

// const useFetch = () => {
//   const [products, setProducts] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const NEXT_PUBLIC_APP_KEY = "75034892a33d4a9dbe62a8540f766cf220240712191924040081";
//       const NEXT_PUBLIC_APP_ID = "R20DNO8UMZ1DNI3";

//       try {
//         const response = await fetch(`https://api.timbu.cloud/products?organization_id=2f92313e75c14aa8be16aa9ee8870ef1&reverse_sort=false&page=1&size=10&Appid=R20DNO8UMZ1DNI3&Apikey=75034892a33d4a9dbe62a8540f766cf220240712191924040081`, {
//           method: "GET",
          
//           headers: {
//             Appid: NEXT_PUBLIC_APP_ID,
//             Apikey: NEXT_PUBLIC_APP_KEY,
//             "Access-Control-Allow-Origin": "*",
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const result = await response.json();
//         setProducts(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Data from API</h1>
//       <pre>{JSON.stringify(products, null, 2)}</pre>
//     </div>
//   );
// };

// export default useFetch;












// import { useState } from "react";
// import { useEffect } from "react";
// import { Await } from "react-router-dom";
// import axios from 'axios';


// const useFetch = () => {
//   const [products, setProducts] = useState(null);
//   const [error, setError] = useState(null);
//   const [Loading, setLoading] = useState(true);


//   useEffect(() => {
//     const fetchData = async () => {
//       const NEXT_PUBLIC_API_KEY = "75034892a33d4a9dbe62a8540f766cf220240712191924040081";
//       const NEXT_PUBLIC_API_ID = "R20DNO8UMZ1DNI3"

//       try {
//         const response = await fetch('https://api.timbu.cloud/products?organization_id=2f92313e75c14aa8be16aa9ee8870ef1&parents=false&debug=false&page=1&size=50&currency_code=NGN&reverse_sort=true&include_stocks_prices=true', {
//           method: "GET",

//           headers: {
//             'Authorization': '2f92313e75c14aa8be16aa9ee8870ef1', 
//             Appid: NEXT_PUBLIC_API_ID,
//             Apikey: NEXT_PUBLIC_API_KEY,
//             "Access-Control-Allow-Origin": "*",
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const result = await response.json();
//         setProducts(result);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Data from API</h1>
//       <pre>{JSON.stringify(products, null, 2)}</pre>
//     </div>
//   );
//}















  // const fetchProduct = async () => {
  //   const Apikey = '75034892a33d4a9dbe62a8540f766cf220240712191924040081';

  //   try {
  //     const response = await fetch(url, {
  //       method: "GET",

  //       headers: {
  //         Appid: R20DNO8UMZ1DNI3,
  //         Apikey: Apikey,
  //         "Access-Control-Allow-Origin": "*",
  //       }
  //     })
  //     if (!response.ok) {
  //       throw new Error('Could not get product list...')
  //     }
  //     const products = await response.json()
  //     setProducts(products)
  //     isLoading(false)
  //   }
  //   catch (error) {
  //     setError(error.msg)

  //   }
  // }
  // fetchProduct()

  // return {
  //   products, error, isLoading
  // }


// export default useFetch


