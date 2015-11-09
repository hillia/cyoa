const {IndexRoute, Route} = ReactRouter;

Chapters = new Mongo.Collection("chapters");

AppRoutes = (
    <Route path="/" component={App}>
        <IndexRoute component={ChapterList} />
        <Route path="/chapter/:chapterId" component={ChapterView} />
    </Route>
);

ReactRouterSSR.Run(AppRoutes);
