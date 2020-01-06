import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsData } from '../../redux/shop/shop.actions';

import { StyledContainer } from './shop.style';

// Creating HOC components
import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

const ShopPage = ({ match, fetchCollectionsData }) => {
    useEffect(() => {
        fetchCollectionsData();
        // eslint-disable-next-line
    }, []);

    return (
        <StyledContainer>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </StyledContainer>
    )
}

export default connect(null, { fetchCollectionsData })(ShopPage);