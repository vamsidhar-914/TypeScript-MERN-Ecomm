import { Col, Row } from 'react-bootstrap';
// import { ProductType } from '../types/ProductType';
// import React, { useEffect, useReducer } from 'react';
// import axios from 'axios';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ProductItem from '../components/ProductItem';
import { Helmet } from 'react-helmet-async';
import { UseGetProductsQuery } from '../hookss/ProductHooks';

// type State = {
//   products: ProductType[];
//   loading: boolean;
//   error: string;
// };

// type Action =
//   | { type: 'FETCH_REQUEST' }
//   | { type: 'FETCH_SUCCESS'; payload: ProductType[] }
//   | { type: 'FETCH_FAIL'; payload: string };

// const initialState: State = {
//   products: [],
//   loading: true,
//   error: '',
// };

// const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//   }
// };

const HomePage = () => {
  const { data: products, isLoading, error } = UseGetProductsQuery();
  // const { data: products, isLoading, error } = useGetProductsQuery();
  // const [{ loading, error, products }, dispatch] = useReducer<
  //   React.Reducer<State, Action>
  // >(reducer, initialState);

  // console.log(products);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: 'FETCH_REQUEST' });
  //     try {
  //       const result = await axios.get('/api/products');
  //       dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
  //     } catch (err) {
  //       dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) });
  //     }
  //   };
  //   fetchData();
  // }, []);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant='danger'>{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title> TS Amazon</title>
      </Helmet>
      {products!.map((product) => (
        <Col
          key={product.slug}
          sm={6}
          md={4}
          lg={3}
        >
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
