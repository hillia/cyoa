// Task component - represents a single todo item
ChapterPage = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.chapters
    getMeteorData() {
        return {
            chapter: Chapters.findOne({ seq: Number(this.props.params.chapterSeq) })
        }
    },

    render() {
        return (
            <ChapterView chapter={this.data.chapter}></ChapterView>
        );
    }
});
