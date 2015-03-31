
var Blah = React.createClass({
    render: function () {
        return (
            <li>&quot;{this.props.blah}&quot; - {this.props.name}</li>
        );
    }
});

var BlahCloud = React.createClass({
    render: function () {
        var blahs = [];
        this.props.blahs.forEach(function (blah) {
            blahs.push(<Blah blah={blah.text} name={blah.author} />);
        });
        return (
            <ul>{blahs}</ul>
        );
    }
});

