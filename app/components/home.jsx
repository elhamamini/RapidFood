import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
import Icon from '@material-ui/core/Icon';
import {
  dairies,
  vegtables,
  fruits,
  meats,
  grains,
  fishes,
  seaFoods,
  legumes,
} from './ingidiantsArrays.js';

class AllIngridientys extends React.Component {
  constructor() {
    super();
    this.state = {
      ingridient: [],
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
    if (this.state.ingridient.includes(event.target.value) === false) {
      this.setState({
        ingridient: [...this.state.ingridient, event.target.value],
      });
    } else {
      const newIngridient = this.state.ingridient.filter(
        ing => ing !== event.target.value
      );
      this.setState({ ingridient: newIngridient });
    }
  }

  render() {
    const { ingridient } = this.state;
    console.log('dairy', ingridient);
    return (
      <div
        style={{
          backgroundImage:
            'url("https://backgroundcheckall.com/wp-content/uploads/2017/12/background-cooking-11.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          //  height:'40rem',
          backgroundRepeat: 'repeat',
          paddingBottom: '30rem',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ExpansionPanel
            style={{
              height: '50%',
              width: '40%',
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Dairy</Typography>
            </ExpansionPanelSummary>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: 'peach',
              }}
            >
              {dairies.map(dairy => {
                return (
                  <ExpansionPanelDetails key={dairy}>
                    <FormGroup style={{ display: 'flex' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.handleChange}
                            value={dairy}
                          />
                        }
                        label={dairy}
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
              })}
            </div>
          </ExpansionPanel>
          <ExpansionPanel
            style={{
              height: '50%',
              width: '40%',
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Vegtebales</Typography>
            </ExpansionPanelSummary>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: 'peach',
              }}
            >
              {vegtables.map(vegi => {
                return (
                  <ExpansionPanelDetails key={vegi}>
                    <FormGroup style={{ display: 'flex' }}>
                      <FormControlLabel
                        control={
                          <Checkbox onChange={this.handleChange} value={vegi} />
                        }
                        label={vegi}
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
              })}
            </div>
          </ExpansionPanel>
          <ExpansionPanel
            style={{
              height: '50%',
              width: '40%',
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Fruits</Typography>
            </ExpansionPanelSummary>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: 'peach',
              }}
            >
              {fruits.map(fruit => {
                return (
                  <ExpansionPanelDetails key={fruit}>
                    <FormGroup style={{ display: 'flex' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.handleChange}
                            value={fruit}
                          />
                        }
                        label={fruit}
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
              })}
            </div>
          </ExpansionPanel>
          <ExpansionPanel
            style={{
              height: '50%',
              width: '40%',
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Baking and Grains</Typography>
            </ExpansionPanelSummary>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: 'peach',
              }}
            >
              {grains.map(grain => {
                return (
                  <ExpansionPanelDetails key={grain}>
                    <FormGroup style={{ display: 'flex' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.handleChange}
                            value={grain}
                          />
                        }
                        label={grain}
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
              })}
            </div>
          </ExpansionPanel>
          <ExpansionPanel
            style={{
              height: '50%',
              width: '40%',
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Meats</Typography>
            </ExpansionPanelSummary>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: 'peach',
              }}
            >
              {meats.map(meat => {
                return (
                  <ExpansionPanelDetails key={meat}>
                    <FormGroup style={{ display: 'flex' }}>
                      <FormControlLabel
                        control={
                          <Checkbox onChange={this.handleChange} value={meat} />
                        }
                        label={meat}
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
              })}
            </div>
          </ExpansionPanel>
          <ExpansionPanel
            style={{
              height: '50%',
              width: '40%',
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Fishes</Typography>
            </ExpansionPanelSummary>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: 'peach',
              }}
            >
              {fishes.map(fish => {
                return (
                  <ExpansionPanelDetails key={fish}>
                    <FormGroup style={{ display: 'flex' }}>
                      <FormControlLabel
                        control={
                          <Checkbox onChange={this.handleChange} value={fish} />
                        }
                        label={fish}
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
              })}
            </div>
          </ExpansionPanel>
          <ExpansionPanel
            style={{
              height: '50%',
              width: '40%',
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Sea Foods</Typography>
            </ExpansionPanelSummary>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: 'peach',
              }}
            >
              {seaFoods.map(seaFood => {
                return (
                  <ExpansionPanelDetails key={seaFood}>
                    <FormGroup style={{ display: 'flex' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.handleChange}
                            value={seaFood}
                          />
                        }
                        label={seaFood}
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
              })}
            </div>
          </ExpansionPanel>
          <ExpansionPanel
            style={{
              height: '50%',
              width: '40%',
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Legums</Typography>
            </ExpansionPanelSummary>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: 'peach',
              }}
            >
              {legumes.map(legum => {
                return (
                  <ExpansionPanelDetails key={legum}>
                    <FormGroup style={{ display: 'flex' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.handleChange}
                            value={legum}
                          />
                        }
                        label={legum}
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                );
              })}
            </div>
          </ExpansionPanel>
          <Button
            variant="contained"
            color="#bbab9b"
            style={{ height: '20%', width: '20%' }}
            onClick={() => {
              this.props.postIngredient(this.state.ingridient);
              this.props.history.push('/recipeslist');
            }}
          >
            Done
          </Button>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(AllIngridientys);
