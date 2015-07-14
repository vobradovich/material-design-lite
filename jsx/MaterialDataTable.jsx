class MaterialTable extends React.Component {
    static propTypes = {
        selectable: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool,
        shadow: React.PropTypes.number
    }
    
    static defaultProps = {
        shadow: 2   
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-data-table" : true,
            "mdl-js-data-table": !this.props.isUpgraded,
            "mdl-data-table--selectable": this.props.selectable,
            "is-upgraded": this.props.isUpgraded
        });
        if (this.props.shadow > 0) {
            var shadowClass = "mdl-shadow--" + this.props.shadow + "dp";
            classList = React.addons.classSet(classList, shadowClass);
        }

        return (
            <table {...this.props} className={classList}>
            </table>
        );
    }
}

class MaterialTableColumn extends React.Component {
    static propTypes = {
        nonNumeric: React.PropTypes.bool,
        valueSelector: React.PropTypes.func
    }
    
    render() {
        var classList = React.addons.classSet({
            "mdl-data-table__cell--non-numeric": this.props.nonNumeric
        });

        return (
            <th {...this.props} className={classList}>
            </th>
        );
    }
}

class MaterialTableCell extends React.Component {
    static propTypes = {
        nonNumeric: React.PropTypes.bool
    }
    
    render() {
        var classList = React.addons.classSet({
            "mdl-data-table__cell--non-numeric": this.props.nonNumeric
        });

        return (
            <td {...this.props} className={classList}>
            </td>
        );
    }
}

class MaterialDataTable extends React.Component {
    static propTypes = {
        nonNumeric: React.PropTypes.bool,
        rowSelector: React.PropTypes.func
    }

    render() {
        var {
            children,
            data,
            rowSelector,
            ...others,
        } = this.props;
        rowSelector = rowSelector || ((item, rowIndex) => false);

        var rows = data.map((item, rowIndex) => {
            var cells = children.map((column, cellIndex) => {
                var {
                    valueSelector,                    
                    ...cellProps,
                } = column.props;
                valueSelector = valueSelector || ((item, column, rowIndex) => item[column.props.dataField]);
                
                var value = valueSelector(item, column, rowIndex);
                return (<MaterialTableCell key={cellIndex} {...cellProps}>{value}</MaterialTableCell>)
            });
            var classList = React.addons.classSet({
                "is-selected": rowSelector(item)
            });
            return (<tr key={rowIndex} className={classList}>{cells}</tr>)
        });

        return (
            <MaterialTable {...others}>
                <thead>
                    <tr>
                        {children}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </MaterialTable>
        );
    }
}

