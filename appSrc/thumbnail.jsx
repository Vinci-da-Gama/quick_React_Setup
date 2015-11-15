var React = require('react');
var BadgeBtn = require('./badgeBtn');

var ThumbDom = React.createClass({
    render: function() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.imgUrl} alt={this.props.wasai} />
                    <div className="caption">
                        <h3>{this.props.thumbTitle}</h3>
                        <p>{this.props.description}</p>
                        <p>
                            <BadgeBtn title={this.props.title} count={this.props.count} />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ThumbDom;