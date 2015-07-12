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
            "mdl-js-data-table": true,
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

class MaterialDataTableHeader extends React.Component {
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
    selectRow(e, rowIndex) {
        this.props.selectRow(e, rowIndex)
    }

    render() {
        var {
            children,
            data,
            ...others,
        } = this.props;

        var rows = data.map((item, rowIndex) => {
            var cells = children.map((header, cellIndex) => {
                var {
                    valueSelector,
                    ...cellProps,
                } = header.props;
                valueSelector = valueSelector || ((item, header, rowIndex) => item[header.props.dataField]);
                var value = valueSelector(item, header, rowIndex);
                return (<MaterialTableCell key={cellIndex} {...cellProps}>{value}</MaterialTableCell>)
            });
            if (this.props.selectable) {
                var checkBoxCell = (<td><MaterialCheckBox id="checkbox_{index}" onChange={this.selectRow}/></td>);
                cells.unshift(checkBoxCell);
            }
            return (<tr key={rowIndex}>{cells}</tr>)
        });

        if (this.props.selectable) {
            var checkBoxTd = (<th><MaterialCheckBox id="checkbox_header" onChange={this.selectRow}/></th>);
            children.unshift(checkBoxTd);
        }

        return (
            <MaterialTable {...this.props}>
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

