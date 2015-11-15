var React = require('react');

// all react class must start with capital Letter.
var BadgeBtn = React.createClass({
	render: function() {
		return (<button className="btn btn-primary" type="button">
			{this.props.title} <span className="badge">{this.props.count}</span>
			</button>
		)}
});

module.exports = BadgeBtn;