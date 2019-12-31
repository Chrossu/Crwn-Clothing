import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/Collections-overview.component';

const Shop = ({ match }) => (
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
)

export default Shop;