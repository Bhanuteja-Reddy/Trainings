function sayHello(name,Id){
    ReactDOM.render(React.createElement(HelloMessage, { name: name }), document.getElementById(Id));
}
class HelloMessage extends React.Component {
    render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
      );
    }
  }
  sayHello("BhanuTeja Reddy",'hello-example')
