const {IndexRoute, Route} = ReactRouter;

Chapters = new Mongo.Collection("chapters");
Options = new Mongo.Collection("options");

AppRoutes = (
    <Route path="/" component={App}>
        <IndexRoute component={ChapterList} />
        <Route path="/chapter/:chapterSeq"    component={ChapterPage} />
        <Route path="/chapter/:parentSeq/new" component={ChapterForm} />
    </Route>
);

ReactRouterSSR.Run(AppRoutes);
