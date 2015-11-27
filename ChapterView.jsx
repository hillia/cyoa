// Task component - represents a single todo item
ChapterView = React.createClass({
    propTypes: {
        chapter: React.PropTypes.object.isRequired,
    },

    render() {
        if (this.props.chapter) {
            return (
                <div>
                    <h2>
                        {this.props.chapter.title}
                    </h2>
                    <p>
                        {this.props.chapter.body}
                    </p>
                    <OptionsList chapter={this.props.chapter}></OptionsList>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>No one has written this chapter yet.</h2>
                    <p>It's up to you to continue the story!</p>
                    <ChapterForm></ChapterForm>
                </div>
            );
        }
    }
});
