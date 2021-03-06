import React, { Component, PropTypes } from 'react';

export default class Loading extends Component {

  static propTypes = {
    loadingText: PropTypes.string.isRequired,
    longLoadingText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    loadingText: 'Loading',
    longLoadingText: 'Still loading, please check your internet connection',
  };

  constructor(props) {
    super(props);
    this.state = {
      // Don't show anything for the first second.
      currentText: '',
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ currentText: this.props.loadingText });
    }, 1000);
    this.longTimer = setTimeout(() => {
      this.setState({ currentText: this.props.longLoadingText });
    }, 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.longTimer);
  }

  render() {
    return (
      <div>
        {this.state.currentText}
      </div>
    );
  }

}
