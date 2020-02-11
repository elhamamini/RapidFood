import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { setRecipe, sendIngredient } from '../redux/recipe';
class ChooseIngredient extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: false,
      flour: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componenDidMount() {
    console.log('cdm ');
    this.props.getRecipe();
  }
  handleChange(event) {
    this.setState({ [event.target.value]: event.target.checked });
  }
  render() {
    const { banana, flour } = this.state;
    const { recipe } = this.props;
    console.log('rrrrrr', recipe);
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose Ingredients</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={banana}
                  onChange={this.handleChange}
                  value="banana"
                />
              }
              label="Banana"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={flour}
                  onChange={this.handleChange}
                  value="flour"
                />
              }
              label="flour"
            />
          </FormGroup>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              this.props.postIngredient(this.state);
            }}
          >
            Done
          </Button>
        </FormControl>
      </div>
    );
  }
}
const mapStateToProps = ({ recipe }) => ({ recipe });
const mapDispatchToProps = dispatch => {
  return {
    getRecipe: () => dispatch(setRecipe()),
    postIngredient: ing => dispatch(sendIngredient(ing)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseIngredient);
