// Task component - represents a single todo item
ChapterView = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        chapter: React.PropTypes.object.isRequired
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
