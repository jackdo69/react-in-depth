import React from 'react';
import DataClient from '../resources/DataClient';

export default function withDataFetcher(WrappedComponent, type) {
  return class WithDataFetcher extends React.Component {
    constructor(props) {
      super(props);
      this.client = new DataClient(type);
      this.state = {
        data: this.client.getData(),
      };
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
