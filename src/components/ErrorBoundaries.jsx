import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Oops something went wrong...
          <br />
          <button onClick={() => window.location.reload()}>
            Back to Homepage
          </button>
        </h2>
      );
    }
    return this.props.children;
  }
}

ErrorBoundaries.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
export default ErrorBoundaries;
