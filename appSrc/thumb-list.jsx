var React = require('react');
var ThumbDom = require('./thumbnail');

var ThumbList = React.createClass({
    render: function() {
        var list = this.props.thumbData.map(function(thumbProps, i) {
            return <ThumbDom {...thumbProps} key={i} />
        });

        return (
            <div>
                {list}
            </div>
        );
    }
});

module.exports = ThumbList;