import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = (props) => {

  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    console.log('i will now go and fetch data using axios');
    const ingredientsPromise = axios.get('https://my-json-server.typicode.com/andydlindsay/chef-andy/ingredients');
    ingredientsPromise
    .then((response)=>{
      console.log('response:', response);
      setIngredients(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }, [] );

  return (
    <>
      <h1>FetchData</h1>

      { loading && <p>Loading...</p> }

      { ingredients.map( (ingredient, index) => {
        return (
          <p key={index}>Ingredient: { ingredient.name }</p>
        )
      } ) }
    </>
  );
};

export default FetchData;