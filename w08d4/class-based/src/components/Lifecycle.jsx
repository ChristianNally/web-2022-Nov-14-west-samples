import {Component} from 'react';

// let intervalRef;

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      intervalRef: null
    }
  }

  // establishing a socket connection, fetching data, setting up an interval
  // useEffect(() => {}, []);
  componentDidMount() {
    console.log('the component has been added to the DOM');

    const intervalRef = setInterval(() => {
      console.log('the interval has fired');
    }, 500);

    this.setState({ intervalRef: intervalRef });
  }

  // did a particular thing change?
  // useEffect(() => {}, [username, student, interviewer]);
  // useEffect(() => {}, [interviewer.id]);
  componentDidUpdate(prevProps, prevState) {
    if (this.state.username !== prevState.username) {
      // username has changed
    }
    console.log('the component has updated');
  }

  // cleanup
  // useEffect that returns a "cleanup" function
  componentWillUnmount() {
    // this.setState({ intervalRef: null });
    console.log('the component will unmount');

    clearInterval(this.state.intervalRef);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Component</h2>
        <div>
          <label>Username:</label>
          <input 
            value={this.state.username}
            onChange={(event) => this.setState({ username: event.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default Lifecycle;

// Lifecycle.componentDidMount();
