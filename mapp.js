if (Meteor.isClient) {
    Meteor.starup(function () {
        var BLAHS = [
            {text: "Gotta follow the process.", author: "Alan"},
            {text: "Shut up!", author: "Brian"}
        ];

        React.render(
            <BlahCloud blahs={BLAHS} />, 
            document.getElementById("content")
        );
    });
}
