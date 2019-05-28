import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import ReviewEntry from './ReviewEntry';
import styled from 'styled-components';

var ReviewList = ({reviews}) => { 
  return (
    <ReviewContainer>
      {
        reviews.map(review => {
          return <ReviewEntry review={ review } key={ review.id }/>
        })
      }
    </ReviewContainer>
  );
};

// ReviewList.PropTypes = {
//   reviews: reviews.PropTypes.array.isRequired
// }

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
`;

export default ReviewList;
