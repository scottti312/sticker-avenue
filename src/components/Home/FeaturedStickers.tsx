import React from 'react';
import styled from 'styled-components/macro';

import Products, { Product } from "../../util/Products";
import ProductDisplay from '../ProductDisplay';

const FeaturedStickers = () => {
  const { bread, love, bedding, grain, shampoo } = Products;
  const productsArr = [bread, love, bedding, grain, shampoo];

  return (
    <SectionContainer>
      <FeaturedTitle>Featured Stickers</FeaturedTitle>
      <FeaturedContainer>
        <FeaturedWrapper>
          {productsArr.map((product: Product) => (
            <div key={ product.id }>
              <ProductDisplay product={product} />

            </div>
          ))}
        </FeaturedWrapper>
      </FeaturedContainer>
      <CreditContainer>
        <Credit href="https://www.flaticon.com/free-icons/volunteering" title="Icons Credit - THANK YOU!!">
          Sticker icons created by Freepik - Flaticon
        </Credit>
      </CreditContainer>
    </SectionContainer>
  );
};




const SectionContainer = styled.div`
  width: 100%;
  margin: 8vh 0 8vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeaturedTitle = styled.div`
  font-family: ReallyAwesome;
  font-size: 2em;
`;

const FeaturedContainer = styled.div`
  display: flex;
  width: 65%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const FeaturedWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 30px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;


const CreditContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Credit = styled.a`
  margin: 0;
  color: inherit;
  font-size: 0.8em;
  &:link {
    text-decoration: none;
  }
`;

export default FeaturedStickers;