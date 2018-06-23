import React from 'react';
import ReactDOM from 'react-dom';
import Other from './other';
import styles from './styles.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => (<div>
    <div className={styles.TopMenu}>
        <div className={styles.menuBtn}><Link to={'/'}>home</Link></div>
        <div className={styles.menuBtn}><Link to={'/yo/3'}>yo</Link></div>
        <div className={styles.menuBtn}><Link to={'/other'}>other</Link></div>
    </div>
    <Switch>
        <Route exact path='/' render={props => <Test hey={5} />} />
        <Route path='/yo/:id' render={props => <Yo match={props.match} />} />
        <Route path='/yo' render={props => <Yo />} />
        <Route path='/other' render={props => <Other />} />
    </Switch>
</div>);

const Test = (props) => <p>test{props.hey}</p>

class Yo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isMatchUndefined: true }
    }

    componentWillMount() {
        if (typeof (this.props.match) == "undefined") {
            this.setState({ isMatchUndefined: true });
        } else {
            this.setState({ isMatchUndefined: false });
        }
    }

    render() {
        return <p>did you do params? {this.state.isMatchUndefined ? 'no you did not' : 'yes you did: ' + this.props.match.params.id}</p>
    }
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById("root"));