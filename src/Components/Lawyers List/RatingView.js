import StarRating from 'react-native-star-rating';
import {EmptyStar, FullStar} from '../../../assets'
import React from 'react';

class RatingView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: isNaN(this.props.rating) ? 0 : parseFloat(this.props.rating)
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
    this.props.onPress(rating)
  }

  render() {
    // const rating = isNaN(this.props.rating)
    //   ? 0
    //   : parseFloat(this.props.rating);
    // this.setState({starCount: rating})  
    return (
      <StarRating
        containerStyle={this.props.style}
        starStyle={this.props.starStyle}        
        disabled={this.props.disabled}
        selectedStar={(rate)=>this.onStarRatingPress(rate)}
        emptyStar={EmptyStar}
        fullStar={FullStar}
        //iconSet={'FontAwesome'}
        maxStars={5}
        rating={this.state.starCount}
        // emptyStarColor={'#e0e0de'}
        // fullStarColor={'#FEE180'}
        starSize={14}
      />
    );
  }
}

export default RatingView