var React = require('react'),
		mitch = require('hedberg');

module.exports = React.createClass({
	render: function() {
		return (<span {...this.props}>{mitch(this.props.value)}</span>);
	}
});
