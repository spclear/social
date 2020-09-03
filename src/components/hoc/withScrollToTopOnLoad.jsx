import React from 'react';

export const withScrollToTopOnLoad = (Component) => {
  class ContainerComponent extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render() {
      return <Component {...this.props} />
    }
  }
  return ContainerComponent;
}