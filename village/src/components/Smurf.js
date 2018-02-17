import React from 'react';
import './Smurf.css'

class Smurf extends React.Component {
  state = {
    editing: false,
    smurfName: '',
    smurfAge: '',
    smurfHeight: '',
  }

  render() {
    const editing = this.state.editing;

    return (
      <div className="Smurf">
        {editing === true ? (
          <div>
            <div>Name</div>
            <input type="text" name="smurfName" value={this.state.smurfName} onChange={this.handleChange} />
            <div>Age</div>
            <input type="text" name="smurfAge" value={this.state.smurfAge} onChange={this.handleChange} />
            <div>Height</div>
            <input type="text" name="smurfHeight" value={this.state.smurfHeight} onChange={this.handleChange} />
            <button className="background__color-smurf" onClick={() => this.updateSmurf()}>Save</button>
          </div>
        ) : (
          <div>
            <h3>{this.props.name}</h3>
            <p>{this.props.age}<br/>years old</p>
            <strong>{this.props.height}<br/>inches tall</strong>
          </div>
        )}
        <button className="background__color-smurf" onClick={this.toggleEditing}>{ editing ? 'Cancel' : `Modify ${this.props.name}`}</button>
        <button className="background__color-red" onClick={() => this.props.onDelete(this.props.id)}>Delete {this.props.name}</button>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      smurfName: this.props.name,
      smurfAge: this.props.age,
      smurfHeight: this.props.height,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toggleEditing = () => {
    this.setState(prevState => {
      return {
        editing: !prevState.editing,
      };
    });
  };

  updateSmurf = () => {
    const updatedSmurf = {
      name: this.state.smurfName,
      age: this.state.smurfAge,
      height: this.state.smurfHeight,
      id: this.props.id
    };
    this.props.onUpdate(updatedSmurf)
      .then(() => {
        this.setState({ editing: false });
      })
      .catch((error) => console.error('update failed', error))

  };

}

export default Smurf;