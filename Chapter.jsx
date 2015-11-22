// Task component - represents a single todo item
Chapter = React.createClass({
    propTypes: {
        chapter: React.PropTypes.object.isRequired,
    },

    render() {
        return (
            <div>
                <h2>
                    {this.props.chapter.title}
                </h2>
                <p>
                    {this.props.chapter.body}
                </p>
            </div>
        );
    }
});
