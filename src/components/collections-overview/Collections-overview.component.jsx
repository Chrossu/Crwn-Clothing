import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/Collection-preview.component';

import { selectShopCollections } from '../../redux/shop/shop.selectors';

import { StyledContainer } from './collections-overview.style';

const CollectionOverview = ({ collections }) => (
  <StyledContainer>
    {
      collections.map(({ id, ...otherProps }) =>
        <CollectionPreview key={id} {...otherProps} />)
    }
  </StyledContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);