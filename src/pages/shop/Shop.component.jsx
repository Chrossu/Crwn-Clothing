import React from 'react';
import { connect } from 'react-redux';

const Shop = (collections) => (
    <h1>Shop page</h1>
)

const mapStateToProps = state => ({
  collections: state.shop.collections
})

export default connect(mapStateToProps)(Shop);