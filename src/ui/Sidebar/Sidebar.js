import React from 'react';
import { connect } from 'react-redux';
import { selectHourEntries, selectTotalHours, timeToDecimal } from '../../app/Hours';
import Button from "../Button/Button";

export class Sidebar extends React.Component {

  state = {
    hourly: '',
    total: '',
    open: false
  };

  constructor(props) {
    super(props);
  }

  onHourlyChange = (e) => {
    const hourly = e.target.value;
    this.setState({hourly});
  };

  onTimeChange = (e) => {
    const time = e.target.value;
    this.setState({time});
  };

  onCalculate = () => {
    let total;
    if (!this.state.time) {
      total = this.state.hourly * this.props.totalHoursDecimal;
    } else {
      total = (this.state.hourly * timeToDecimal(this.state.time)).toFixed(2);
    }
    this.setState({total});
  };

  OnToggleSidebar = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    const { totalHours, totalHoursDecimal } = this.props;
    const { total, hourly, open } = this.state;
    return (
      <div id="sidebar-wrap" className={ open ? 'open' : '' }>
        <button
          id="open-sidebar"
          onClick={this.OnToggleSidebar}
          className={ open ? 'hidden' : '' }
        >
          <i className="fas fa-bars"></i>
          <div className="sideways">Summary</div>
        </button>
        <div id="sidebar" className={ open ? '' : 'hidden' }>
          <button
            id="close-sidebar"
            onClick={this.OnToggleSidebar}
          >
            <i className="fas fa-times"></i>
          </button>
          <br />
          <h2><b>Summary</b></h2>
          <p>
            Total hours:<br />
            <b>{totalHours} / {totalHoursDecimal}</b>
          </p>

          <h2><b>Calculate</b></h2>
          <p>
            <input
              type="number"
              placeholder="hourly"
              value={hourly}
              name="total"
              onChange={this.onHourlyChange}
            />
          </p>
          <p>
            <Button
              action={this.onCalculate}
              text="Calculate"
              color="secondary"
            />
            <br />
            {total &&
              <p>
                <b>Subtotal: €{total}</b><br />
                <b>VAT: €{(total * 0.21).toFixed(2)}</b><br />
                <b>Total: €{(total * 1.21).toFixed(2)}</b>
              </p>
            }
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ((state) => {
  const totalHours = selectTotalHours(selectHourEntries(state.hourEntries, state.hourFilters), state.selectedHourEntries.selectedHourEntries);
  return {
    totalClients: state.clients.length,
    totalProjects: state.projects.length,
    totalHours: totalHours,
    totalHoursDecimal: timeToDecimal(totalHours)
  }
});

export default connect(mapStateToProps)(Sidebar);