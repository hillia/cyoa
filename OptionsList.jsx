const {Link} = ReactRouter;

// Task component - represents a single todo item
OptionsList = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    propTypes: {
        chapter: React.PropTypes.object.isRequired,
    },

    // Loads items from the Tasks collection and puts them on this.data.chapters
    getMeteorData() {
        return {
            options: Options.find({ parentChapterSeq: this.props.chapter.seq })
        }
    },

    render() {
        return (
            <ul>
                {this.data.options.map((option) => {
                    return (
                        <li key={option.seq}>
                            <Link to={"/chapter/" + (option.childChapterSeq ? option.childChapterSeq : "new")}>
                                {option.text}
                            </Link>
                        </li>);
                })}
            </ul>
        );
    }
});
