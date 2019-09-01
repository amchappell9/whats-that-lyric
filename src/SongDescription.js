import React, { Component } from 'react';
import styled from 'styled-components';

const SongDescriptionContainer = styled.div`
  color: var(--grey-500);

  grid-row: 2;
  grid-column: 1;
  min-height: var(--song-info-min-sizing);
  padding: var(--spacing-5);
`;

class SongDescription extends Component {
  getSongDescriptionHTML = description => {
    if (description.dom.children.length > 0) {
      return <>Somehow needs to return song description from nodes</>;
    }

    return <></>;
  };

  render() {
    const { description } = this.props;
    const descriptionHtml = this.getSongDescriptionHTML(description);

    return (
      <SongDescriptionContainer className='flex1 px-4 py-2 m-2'>
        {descriptionHtml}
      </SongDescriptionContainer>
    );
  }
}

// SongDescription.propTypes = {
//
// }

export default SongDescription;
