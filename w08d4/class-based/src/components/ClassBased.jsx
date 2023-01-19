import React from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      student: props.student || '',
      anotherKey: null
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  clickHandler = () => {
    // this.state.count += 1

    this.setState({
      count: this.state.count + 1,
      anotherKey: 'hello world'
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Class-Based Component</h2>
        <h2>Count: {this.state.count}</h2>
        {/* <button onClick={() => this.clickHandler()}>Increment!</button> */}
        <button onClick={this.clickHandler}>Increment!</button>
      </div>
    );
  }
}

export default ClassBased;

// const jsx = MyComponent();

// const classBased = new ClassBased(props);
// classBased.props = props;
// const jsx = classBased.render();
