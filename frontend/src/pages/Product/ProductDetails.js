import React from 'react'
//import {Link } from 'react-router-dom'
//import {Row, Col, Button, Card, Image, ListGroup} from 'react-bootstrap'
import Products from '../../components/Product/Products'


const ProductDetails = ({match}) => {
  const product= Products.map.find((p) => p.id === match.params.id)


  return (
    <div>{product.name}</div>
  )
}

export default ProductDetails;
