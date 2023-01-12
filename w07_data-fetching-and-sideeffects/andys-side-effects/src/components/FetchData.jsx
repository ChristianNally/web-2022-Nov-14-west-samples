import axios from 'axios';
import {useState, useEffect} from 'react';

const FetchData = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log('FetchData has rendered');

  const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';

  useEffect(() => {
    const recipePromise = axios.get(`${baseUrl}/recipes`)
      // .then((response) => {
      //   console.log(response.data);
      //   setRecipes(response.data);
      // });

    const ingredientPromise = axios.get(`${baseUrl}/ingredients`)
      // .then((response) => {
      //   console.log(response.data);
      //   setIngredients(response.data);
      // });

    const promises = [recipePromise, ingredientPromise];

    setLoading(true);

    Promise.all(promises)
      .then((response) => {
        console.log(response);
        setRecipes(response[0].data);
        setIngredients(response[1].data);
        setLoading(false);
      });

  }, []);

  return (
    <div>
      <h2>Data Fetching</h2>
      { loading && <p>Spinner</p> }

      { recipes.map((recipe, index) => {
        return (
          <p key={index}>Recipe title: {recipe.title} ({recipe.id})</p>
        )
      }) }
    </div>
  );
};

export default FetchData;
