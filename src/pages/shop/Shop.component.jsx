import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/Collection-preview.component';

const Shop = ({ collections }) => (
    collections.map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps} />)
)

const mapStateToProps = state => ({
  collections: state.shop.collections
})

export default connect(mapStateToProps)(Shop);