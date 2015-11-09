// App component - represents the whole app
ChapterForm = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        parent: React.PropTypes.object.isRequired,
        chapter: React.PropTypes.object,
    },

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var title = React.findDOMNode(this.refs.titleInput).value.trim();
        var body = React.findDOMNode(this.refs.bodyInput).value.trim();
        var parent = this.props.parent.id;
        var id = this.props.chapter ? this.props.chapter.id : null;


        Chapters.find({ _id: id }).upsert({
            title: title,
            body: body,
            parent: parent,
            createdAt: new Date() // current time
        });

        // Clear form
        this.clear();
    },

    clear() {
        React.findDOMNode(this.refs.titleInput).value = "";
        React.findDOMNode(this.refs.bodyInput).value = "";
    },

    render() {
        return (
            <form
                onSubmit={this.handleSubmit} >

                <input
                    key="titleInput"
                    type="text"
                    ref="titleInput"
                    placeholder="That Time the Cool Thing Happened"
                    value={this.props.chapter ? this.props.chapter.title : ""} />
                <input
                    key="bodyInput"
                    type="text"
                    ref="bodyInput"
                    placeholder="And then they fucked..."
                    value={this.props.chapter ? this.props.chapter.body : ""} />
                <input
                    key="submit"
                    type="submit"/>
            </form>
        );
    }
});
