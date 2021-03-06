class MaterialTextField extends React.Component {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        pattern: React.PropTypes.string,
        errorMessage: React.PropTypes.string,
        floatingLabel: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    }

    static defaultProps = {
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-textfield" : true,
            "mdl-js-textfield" : true,
            "mdl-textfield--floating-label": this.props.floatingLabel,
            "is-upgraded": this.props.isUpgraded
        });

        var {
            children,
            errorMessage,
            ...props,
        } = this.props;

        var error = this.props.pattern !== "undefined" ? (<span className="mdl-textfield__error">{errorMessage}</span>) : null;

        return (            
            <div className={classList}>
                <input {...props} className="mdl-textfield__input" type="text" id={this.props.id} />
                <label className="mdl-textfield__label" htmlFor={this.props.id}>{children}</label>
                {error}
            </div>
        );
    };
}