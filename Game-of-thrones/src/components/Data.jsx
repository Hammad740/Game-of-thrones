import React, { useEffect, useState } from 'react';

const Data = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          'https://thronesapi.com/api/v2/Characters'
        );
        const data = await response.json();
        setCharacters(data);
        setIsLoading(false); // Set isLoading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set isLoading to false in case of error
      }
    };

    getCharacters();
  }, []);

  return (
    <div className="main">
      <h1
        style={{
          textTransform: 'uppercase',
          color: 'white',
          paddingTop: '15px',
        }}
      >
        Popular Characters
      </h1>

      {isLoading ? (
        <p style={{ fontSize: '1.6rem', padding: '1.4rem', color: 'white' }}>
          Loading....
        </p>
      ) : (
        <div className="row">
          {characters.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="projectCard">
                <img src={item.imageUrl} alt={item.title} />
                <div className="info">
                  <div className="text">
                    <h2>{item.title}</h2>
                    <p className="name">{item.fullName}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Data;
