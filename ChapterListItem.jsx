// Task component - represents a single todo item
ChapterListItem = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        chapter: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div>
                Chapter {this.props.chapter._id}: {this.props.chapter.title}
            </div>
        );
    }
});
