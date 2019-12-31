import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/Collections-overview.component';
import CategoryPage from '../collection/Collection.component'

import { StyledContainer } from './shop.style';

const Shop = ({ match }) => (
    <StyledContainer>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </StyledContainer>
)

export default Shop;