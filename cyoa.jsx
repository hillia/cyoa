const {IndexRoute, Route} = ReactRouter;

Chapters = new Mongo.Collection("chapters");

AppRoutes = (
    <Route path="/" component={App}>
        <IndexRoute component={ChapterList} />
        <Route path="/chapter/:chapterSeq"    component={ChapterView} />
        <Route path="/chapter/:parentSeq/new" component={ChapterForm} />
    </Route>
);

ReactRouterSSR.Run(AppRoutes);
