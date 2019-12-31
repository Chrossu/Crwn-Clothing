import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/Collection-item.component';

import { StyledContainer, StyledTitle, StyledItems } from './collection.style'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledItems>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </StyledItems>
    </StyledContainer>
)}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);