// App component - represents the whole app
App = React.createClass({
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});
