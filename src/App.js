import React, { useEffect, useState } from 'react';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchHandler = async () => {
try{

    let response = await fetch(
      'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'
    );
    console.log(response)
    if(!response.ok){
      throw new Error ('something wrong')
    }
    
    let imageData = await response.json();
    setImageUrl(imageData[0].url);
    
    
  } catch (error){
  console.log(error)
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  if (!imageUrl) {
    return (
      <>
        <h1>Loading...</h1>
        <button onClick={fetchHandler}>Submit</button>
      </>
    );
  }

  return (
    <div>
      <h1>Random Dogs</h1>
      <img src={imageUrl} alt="Random Dog" />
      <button onClick={fetchHandler}>Submit</button>
    </div>
  );
};

export default App;
