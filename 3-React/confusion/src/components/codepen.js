// This array is used for the Example.
const GAMES = [
  { id: 0, name: "Chess" },
  { id: 1, name: "Go" },
  { id: 2, name: "Risk" },
  { id: 3, name: "Cribbage"}, 
  { id: 4, name: "Spit" }
];

// This array is used for the Challenge.
const RESOURCES = [
  { id: 0, url: "https://wesbos.com/destructuring-objects/ "},
  { id: 1, url: "https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477" },  
  { id: 2, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" }
];

const App = () => { 
  return ( 
    <React.Fragment> 
      <PageTitle /> 
      <Games /> 
      <hr /> 
      <Explanation /> 
      <hr /> 
      <Challenge />
      <Resources />  
    </React.Fragment> 
  ); 
}
        
const PageTitle = () => {
  return (
    <h1>Code Challenge: Object Destructuring</h1>
  );
}

class Games extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      games: GAMES
    };
  }
  
  render() {
    const gamesList = this.state.games.map((game) => {
      return (
        <div key={game.id}>
          <RenderGame game={game} />
        </div>
      );
    });    
    return(
      <React.Fragment>
        <h2>Available Games</h2>
        <ul>{gamesList}</ul>
      </React.Fragment>
    );
  }
}

function RenderGame({game}) {
  return (
    <li>{game.name}</li>
  );
}

function Explanation() {
  return(
    <React.Fragment>
      <p>
        Object Destructuring is a new concept in ES6. We will focus here on one way it can be used in React. 
      </p>
      <p>
        First, read the function declaration for RenderGame() in the JS section (line 62). Instead of the <em>props</em> object, it has a <em>game</em> parameter being passed in, enclosed by curly braces. What does this mean?
      </p>
      <p>
        This is not React-specific syntax, but a part of ES6 JavaScript. Curly braces in a function's parameter list tells JavaScript to look for an object being passed in that has a property <em>game</em>. In this case, it would be <em>props</em>. Now inside RenderGame(), you can use the variable <em>game</em> directly to get to that object, instead of <em>props.game</em>. This is one example of how object destructuring can be used, there are others.</p>
      <p>By this time you may very well have curly brace fatigue, having learned so many different ways to use it. It's all about context, and with time and practice you will learn to quickly recognize the meaning based on context. Stick with it. :)
      </p>
    </React.Fragment>
  );
}

function Challenge() {
  return (
    <React.Fragment>
      <p>For your Code Challenge, you will use the RESOURCES array (line 11)</p>
      <ul>
        <li><strong>Challenge 1:</strong> Create a class component named Resources. Model this component on the Games component. Render it to the view in App, beneath the rendering of the Challenge component.</li>
        <li><strong>Challenge 2:</strong> Create a functional component named RenderResource. Use object destructuring in the parameter list to bring in <em>props.resource</em> as simply <em>resource</em>.</li>
        <li><strong>Challenge 3:</strong> List the URLs to the view in the render() function of Resources, similar to how the games are listed in the render() function of Games. Title the list "Further Resources".</li>
      </ul>
      <p><strong>Optional Extra Challenge</strong>: Use React elements to make each URL into clickable links. Have them open in a new tab, not the current one. Hint: You will NOT need to use React Router for this challenge.</p>
    </React.Fragment>
  );
}

class Resources extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resources: RESOURCES
        };
    }

    render() {
        const resourceList = this.state.resources.map((resource) => {
            return (
                <div key={resource.id}>
                    <RenderResource resource={resource} />
                </div>
            );
        });
        return (
            <React.Fragment>
                <h2>Further Resources</h2>
                <ul>{resourceList}</ul>
            </React.Fragment>
        );
    }
}

function RenderResource({ resource }) {
    return (
        <li>{resource.url}</li>
    );
}

ReactDOM.render( <App />, document.getElementById("root"));