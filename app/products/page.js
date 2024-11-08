// app/products/page.js

import Announcement from '@/components/announcement';
import createProductCard from '@/components/createProductCard';
import Header from '@/components/header';
import React from 'react';

function Products() {
  const productCard = createProductCard({
    imageUrl: '019_Back_d773d77b-b285-42c2-9664-d35eb41f9397_540x.png',
    productUrl: '/product/example',
    productName: 'Example Product',
    price: '₹ 1,250',
    tags: ['New', 'Hot'],
    description: 'This is an example description.',
  });

  return (
    <div>
      <Announcement />
      <Header />
      <div id="product-container">
        {productCard}
      </div>
      <div>Products</div>
    </div>
  );
}

export default Products;
