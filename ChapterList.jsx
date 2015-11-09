// App component - represents the whole app
ChapterList = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.chapters
    getMeteorData() {
        return {
            chapters: Chapters.find({}, {sort: {createdAt: -1}}).fetch()
        }
    },

    render() {
        return (
            <div>
                {this.data.chapters.map((chapter) => {
                    return <ChapterListItem key={chapter.seq} chapter={chapter} />;
                })}
            </div>
        );
    }
});
