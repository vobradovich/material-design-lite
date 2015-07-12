class MaterialSpinner extends React.Component {
    static propTypes = {
        isActive: React.PropTypes.bool,
        singleColor: React.PropTypes.bool
    }

    static defaultProps = {
        isActive: true
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-spinner" : true,
            "mdl-js-spinner" : true,
            "is-active": this.props.isActive,
            "mdl-spinner--single-color": this.props.singleColor
        });

        return (
            <div {...this.props} className={classList}>
                {this.props.children}
            </div>
        );
    };
}