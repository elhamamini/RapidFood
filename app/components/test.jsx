import React from 'react';
import { connect } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { setRecipe, sendIngredient } from '../redux/recipe';
import { setUpInstructions } from '../redux/instruction';
import { fetchFavs } from '../redux/favorits';
class ChooseIngredient extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: false,
      flour: false,
      avocado: false,
      milk: false,
      apple: false,
      beef: false,
      strawberry: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componenDidMount() {
    console.log('cdm ');
    this.props.getRecipe();
    this.props.getInstruction();
    this.props.getFavs();
  }
  handleChange(event) {
    this.setState({ [event.target.value]: event.target.checked });
  }
  render() {
    const { banana, flour, apple, avocado, beef, strawberry } = this.state;
    console.log(this.state, 'state');
    const { recipes } = this.props;
    console.log('rrrrrr', recipes);
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose Ingredients</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={apple}
                  onChange={this.handleChange}
                  value="apple"
                />
              }
              label="apple"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={beef}
                  onChange={this.handleChange}
                  value="beef"
                />
              }
              label="beef"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={strawberry}
                  onChange={this.handleChange}
                  value="strawberry"
                />
              }
              label="strawberry"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={avocado}
                  onChange={this.handleChange}
                  value="avocado"
                />
              }
              label="avocado"
            />
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
              this.props.history.push('/recipeslist');
            }}
          >
            Done
          </Button>
        </FormControl>
      </div>
    );
  }
}
const mapStateToProps = ({ recipes }) => ({ recipes });
const mapDispatchToProps = dispatch => {
  return {
    getRecipe: () => dispatch(setRecipe()),
    postIngredient: ing => dispatch(sendIngredient(ing)),
    getInstruction: () => dispatch(setUpInstructions()),
    getFave: () => dispatch(fetchFavs()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseIngredient);
