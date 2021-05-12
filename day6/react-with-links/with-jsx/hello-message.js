function sayHello(name,Id){
  ReactDOM.render(
    <HelloMessage name={name} />,
    document.getElementById(Id)
  );
}
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}
sayHello("BhanuTeja Reddy",'hello-example')
