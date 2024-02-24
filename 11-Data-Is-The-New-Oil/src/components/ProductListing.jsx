import { useEffect, useState } from 'react';
import data from '../data.json';
import { ProductCard } from './ProductCard';
import ShimmerUI from './ShimmerUI';
import { useOnlineStatus } from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';
import withDiscountPercentage from './withDiscountPercentage';
import { useUser } from '../context/UserContext'

const ProductCardWithDiscountPercentage = withDiscountPercentage(ProductCard);

export const ProductListing = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filterdData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const { setUserName } = useUser()

  const onlineStatus = useOnlineStatus();
  function handleFilter(type) {
    switch (type) {
      case 'search':
        setFilteredData(
          restaurantData?.filter((data) => data?.info?.name?.includes(search)),
        );
        break;
      case 'rating':
        setFilteredData(
          filterdData.filter(
            (product) => Number(product.info.avgRatingString) >= 4,
          ),
        );

        break;
      default:
        break;
    }
  }

  async function fetchData() {
    const response = await fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .catch((e) => console.error('data fetching error', e));

    setRestaurantData(response?.products);
    setFilteredData(response?.products);
  }

  function searchOnChange(searchKeyword) {
    setSearch(searchKeyword);
    setUserName(searchKeyword)
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (!onlineStatus) return <h1>you are offline</h1>;
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search for a Restaurant Here"
          value={search}
          onChange={(e) => searchOnChange(e.target.value)}
        />
        <button onClick={() => handleFilter('search')}>Search</button>
      </div>
      <button onClick={() => handleFilter('rating')}>
        Filter based on Rating
      </button>
      <div className="products">
        {filterdData?.length > 0 &&
          filterdData?.map((res) => (
            <Link to={'/product/' + res.id}>
              {res.discountPercentage ? (
                <ProductCardWithDiscountPercentage details={res} />
              ) : (
                <ProductCard details={res} />
              )}
            </Link>
          ))}
      </div>
    </>
  );
};
