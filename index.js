var React = require('react'),
		mitch = require('hedberg');

module.exports = React.Component.extend({
	render: function() {
		return (<span {...this.props}>{mitch(this.props.value)}</span>);
	}
});
