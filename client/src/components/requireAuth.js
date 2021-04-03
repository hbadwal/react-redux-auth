import React, { Component } from 'react';
import { connect } from 'react-redux';

//Higher order component which will be wrapped to all authed
//Reuse this HOC to extend functionality of our existing components by wrapping this on them
export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    //look for authed state and redirect accordingly
    //will execute whenever wrapped component gets mounted and updated
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
