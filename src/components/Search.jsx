// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Search = () => {
//   const params = useParams();
//   const [searchedCharacters, setSearchCharacters] = useState({});
//   const [quotes, setQuotes] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getSearched = async (id) => {
//       try {
//         const api = await fetch(
//           `https://thronesapi.com/api/v2/Characters/${id}`
//         );
//         const data = await api.json();
//         setSearchCharacters(data);
//       } catch (error) {
//         console.log('Error fetching character:)');
//       }
//     };

//     getSearched(params.search);
//   }, [params.search]);

//   useEffect(() => {
//     const getQuotes = async (name) => {
//       try {
//         const url = `https://api.gameofthronesquotes.xyz/v1/author/${name}/2`;
//         const response = await fetch(url);
//         const data = await response.json();
//         setQuotes(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching quotes:', error);
//         setIsLoading(false);
//       }
//     };

//     if (searchedCharacters.firstName) {
//       getQuotes(searchedCharacters.firstName);
//     }
//   }, [searchedCharacters.firstName]);

//   return (
//     <div>
//       {isLoading ? (
//         <p style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Loading....</p>
//       ) : (
//         <div className="search">
//           <div className="search-detail">
//             <img src={searchedCharacters.imageUrl} alt="" />
//           </div>
//           <div className="text">
//             <h3>{searchedCharacters.fullName}</h3>
//             <h4>{searchedCharacters.title}</h4>
//             {quotes.map((item) => (
//               <p key={item.id}>&quot;{item.sentence}&quot;</p>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const params = useParams();
  const [searchedCharacters, setSearchCharacters] = useState({});
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSearched = async (id) => {
      setIsLoading(true); // Set loading state when starting fetch
      try {
        const response = await fetch(
          `https://thronesapi.com/api/v2/Characters/${id}`
        );
        if (!response.ok) {
          throw new Error('Character not found');
        }
        const data = await response.json();
        setSearchCharacters(data);
        setError(null); // Reset error state on success
      } catch (error) {
        console.error('Error fetching character:', error);
        setError('Error fetching character'); // Set error message
      } finally {
        setIsLoading(false); // Always set loading state to false after fetch
      }
    };

    getSearched(params.search);
  }, [params.search]);

  useEffect(() => {
    const getQuotes = async (name) => {
      setIsLoading(true); // Set loading state when starting fetch
      try {
        const response = await fetch(
          `https://api.gameofthronesquotes.xyz/v1/author/${name}/2`
        );
        if (!response.ok) {
          throw new Error('Quotes not found');
        }
        const data = await response.json();
        console.log(data);
        setQuotes(data);
        setError(null); // Reset error state on success
      } catch (error) {
        console.error('Error fetching quotes:', error);
        setError('Error fetching quotes'); // Set error message
      } finally {
        setIsLoading(false); // Always set loading state to false after fetch
      }
    };

    if (searchedCharacters.firstName) {
      getQuotes(searchedCharacters.firstName.toLowerCase());
    }
  }, [searchedCharacters.firstName]);

  return (
    <div>
      {isLoading ? (
        <p style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Loading....</p>
      ) : error ? (
        <p style={{ fontSize: '1.6rem', marginTop: '2rem', color: 'red' }}>
          {error}
        </p>
      ) : (
        <div className="search">
          <div className="search-detail">
            <img src={searchedCharacters.imageUrl} alt="" />
          </div>
          <div className="text">
            <h3>{searchedCharacters.fullName}</h3>
            <h4>{searchedCharacters.title}</h4>
            {quotes.map((item) => (
              <p key={item.id}>&quot;{item.sentence}&quot;</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
