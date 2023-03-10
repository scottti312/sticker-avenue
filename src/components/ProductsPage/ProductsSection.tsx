import styled from "styled-components/macro";

import Products, { Product } from "../../util/Products";
import ProductDisplay from '../ProductDisplay';

interface ProductsSectionProps {
  selected: string;
}

const ProductsSection = ({ selected }: ProductsSectionProps) => {
  const productsArr = Object.values(Products);
  return (
    <>
      <ProductsContainer>
        {
          selected === 'food' &&
            productsArr
            .filter(product => product.category === 'food')
            .map((product: Product) => (
              <ProductWrapper key={product.id}>
                <ProductDisplay product={product} page={"products"} />
              </ProductWrapper>
            ))
        }
        {
          selected === 'other' &&
            productsArr
            .filter(product => product.category === 'other')
            .map((product: Product) => (
              <ProductWrapper key={product.id}>
                <ProductDisplay product={product} page={"products"} />
              </ProductWrapper>
            ))
        }
      </ProductsContainer>
    </>
  );
}

const ProductsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 250px);
  /* grid-template-columns: repeat(3, minmax(186px, 1fr)); */
  /* grid-template-columns: repeat(3, 200px); */
  gap: 5px;
  width: 100%;
  @media screen and (max-width: 505px) {
    grid-template-columns: repeat(auto-fit, 100%);
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export default ProductsSection;