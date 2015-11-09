// Task component - represents a single todo item
ChapterView = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.chapters
    getMeteorData() {
        return {
            chapter: Chapters.findOne({ _id: this.props.params.chapterId })
        }
    },

    render() {
        return (
            <div>
                <h2>
                    {this.data.chapter.title}
                </h2>
                <p>
                    {this.data.chapter.body}
                </p>
            </div>
        );
    }
});
