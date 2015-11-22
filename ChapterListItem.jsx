const {Link} = ReactRouter;

// Task component - represents a single todo item
ChapterListItem = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        chapter: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <Link to={"/chapter/" + this.props.chapter.seq}>
                Chapter {this.props.chapter.seq}: {this.props.chapter.title}
            </Link>
        );
    }
});
