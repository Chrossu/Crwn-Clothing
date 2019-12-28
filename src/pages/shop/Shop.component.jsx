import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/Collection-preview.component';

const Shop = ({ collections }) => (
    collections.map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps} />)
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(Shop);