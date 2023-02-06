import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/greeting';

const Greeting = () => {
  const { greeting, loading, error } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {error && <h1>{error}</h1>}
      ,
      {loading && <h1>Loading...</h1>}
      ,
      {greeting && <h1>{greeting}</h1>}
    </div>
  );
};

export default Greeting;
