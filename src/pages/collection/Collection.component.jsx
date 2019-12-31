import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/Collection-item.component';

import { StyledContainer } from './collection.style'

const CollectionPage = ({ collections }) => {
  console.log(collections);
  return (
    <StyledContainer>
      <h2>Collection Page</h2>
    </StyledContainer>
)}

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);