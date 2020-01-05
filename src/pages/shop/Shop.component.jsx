import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsData } from '../../redux/shop/shop.actions';
import { selectIsFetching} from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/Collections-overview.component';
import CollectionPage from '../collection/Collection.component'
import WithSpinner from '../../components/with-spinner/With-spinner.component';

import { StyledContainer } from './shop.style';

// Creating HOC components
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, isFetching, fetchCollectionsData }) => {
    useEffect(() => {
        fetchCollectionsData();
    }, []);

    return (
        <StyledContainer>
            <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={isFetching} {...props} />} />
        </StyledContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching
})

export default connect(mapStateToProps, { fetchCollectionsData })(ShopPage);