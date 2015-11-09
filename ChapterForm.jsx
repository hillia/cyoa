// App component - represents the whole app
ChapterForm = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        parentSeq: React.PropTypes.object,
        chapterSeq: React.PropTypes.object,
    },

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
        var body = ReactDOM.findDOMNode(this.refs.bodyInput).value.trim();
        var parent = this.props.params.parentSeq;
        var seq = this.props.chapterSeq;

        chapterJson = {
            seq: MongoUtils.getNextSequence("chapterid"),
            parent: parent,
            title: title,
            body: body,
            createdAt: new Date() // current time
        };

        if (!seq) {
            Chapters.insert(chapterJson);
        } else {
            Chapters.update(
                {seq: seq},
                chapterJson,
                { upsert: true }
            );
        }

        // Clear form
        this.clear();
    },

    clear() {
        ReactDOM.findDOMNode(this.refs.titleInput).value = "";
        ReactDOM.findDOMNode(this.refs.bodyInput).value = "";
    },

    render() {
        return (
            <form
                onSubmit={this.handleSubmit} >

                <input
                    key="titleInput"
                    type="text"
                    ref="titleInput"
                    placeholder="That Time the Cool Thing Happened"/>
                <input
                    key="bodyInput"
                    type="text"
                    ref="bodyInput"
                    placeholder="And then they fucked..."/>
                <input
                    key="submit"
                    type="submit"/>
            </form>
        );
    }
});
