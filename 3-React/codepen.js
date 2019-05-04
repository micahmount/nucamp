class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            countries: [
                {
                    id: 0,
                    name: 'Greece',
                    continent: 'Europe'
                },
                {
                    id: 1,
                    name: 'Laos',
                    continent: 'Asia'
                },
                {
                    id: 2,
                    name: 'Zambia',
                    continent: 'Africa'
                }
            ],
        };
    }

    render() {
        return(
            <Countries countries={this.state.countries} />
        );
    }
}

class Countries extends React.Component {
    
    renderCoutries(countries) {
    return(    
        <div>
            <h1>My Travel Bucket List</h1>
            <ul>
                {this.props.countries.map((country) => {
                    return (
                        <li key={country.id}>{country.name}</li>
                    );
                })}
            </ul>
        </div>
        );
    }

    render() {
        return (
            this.renderCoutries(this.props.countries)
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));