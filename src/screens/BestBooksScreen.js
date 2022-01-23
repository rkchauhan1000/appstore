import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listBestProducts } from '../actions/productActions'

export const BestBooksScreen = ({ match }) => {


  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const {products} = productList

  useEffect(() => {
    dispatch(listBestProducts())
  }, [dispatch])

  return (
    <>
      <h1>Best Books</h1>
      {products && 
      <>
        <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
      </>}
    </>
  )
}
