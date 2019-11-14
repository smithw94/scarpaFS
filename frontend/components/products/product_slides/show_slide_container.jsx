import { connect } from 'react-redux';
import ShowSlide from './show_slide';

const mSTP = (state, ownProps) => ({
  imgUrls: ownProps.photos
})

export default connect(mSTP)(ShowSlide);