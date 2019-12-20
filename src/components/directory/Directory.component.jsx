import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/MenuItem.component';

import { StyledDirectoryMenu } from './directory.style';

const Directory = ({ sections }) => (
    <StyledDirectoryMenu>
      {sections.map(({ id, ...otherProps }) => <MenuItem id={id} {...otherProps} />)}
    </StyledDirectoryMenu>
)

const mapStateToProps = state => ({
  sections: state.directorySections.sections
})

export default connect(mapStateToProps)(Directory);