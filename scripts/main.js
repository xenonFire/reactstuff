var Hello = React.createClass({
    render: function() {
        var text = "this is the variable text"
        return(
            <div>{text}</div>
        );
    }
});

ReactDOM.render(
    <Hello />,
    document.getElementById("content-wrapper")
);