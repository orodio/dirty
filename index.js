import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";

const root =
  (typeof self === "object" && self.self === self && self) ||
  (typeof global === "object" && global.global === global && global) ||
  (typeof window === "object" && window.window === window && window) ||
  this;

const Root = styled.div`
  background: tomato;
  color: white;
`;

const Title = styled.h1`
  font-family: monospace;
`;

const Woot = props => (
  <Root>
    <Title>Hello From The Other Side</Title>
    <p>Must have tried a thousand times</p>
    <code>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </code>
  </Root>
);

root.__RAWR__ = {
  onMount: (domNode, props) => {
    ReactDOM.render(<Woot {...props} />, domNode);
  },

  onUnmount: (domNode, _props) => {
    ReactDOM.unmountComponentAtNode(domNode);
  }
};
