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
  getDescriptionMarkup = description => {
    // if (
    //   description.dom &&
    //   description.dom.children &&
    //   description.dom.children.length > 0
    // ) {
    //   description.dom.children.map(child => {
    //     if (typeof child === 'object') {
    //       if (child.tag && child.tag === 'p') {
    //         if (child.children && child.children.length > 0) {
    //           child.children.map(subChild => {
    //             if (typeof subChild === 'string') {
    //               return subChild;
    //             }
    //             return <></>;
    //           });
    //         } else {
    //           return <p></p>;
    //         }
    //       }
    //     } else if (typeof child === 'string') {
    //       return <br />;
    //     }
    //     return <></>;
    //   });
    // }
  };

  render() {
    const { description } = this.props;
    const descriptionMarkup = this.getDescriptionMarkup(description);

    return (
      <SongDescriptionContainer>{descriptionMarkup}</SongDescriptionContainer>
    );
  }
}

// SongDescription.propTypes = {
//
// }

export default SongDescription;
