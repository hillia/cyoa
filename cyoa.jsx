const {IndexRoute, Route} = ReactRouter;

Chapters = new Mongo.Collection("chapters");

AppRoutes = (
    <Route path="/" component={App}>
        <IndexRoute component={ChapterList} />
    </Route>
);

ReactRouterSSR.Run(AppRoutes);
