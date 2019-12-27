import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session, entities: { users, cart } }) => {
  let cartLength = cart.length
  return {
    currentUser: users[session.id],
    cartLength
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
