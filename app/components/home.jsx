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
const dairies = [
  'american cheese',
  'blue cheese',
  'brie',
  'butter',
  'buttermilk',
  'camembert cheese',
  'cheddar',
  'colby cheese',
  'condensed milk',
  'cottage cheese',
  'cream',
  'cream cheese',
  'custard',
  'edam cheese',
  'egg',
  'farmer cheese',
  'feta',
  'fontina',
  'frosting',
  'ghee',
  'goat cheese',
  'goat milk',
  'gouda',
  'gruyere',
  'half and half',
  'halloumi',
  'hard cheese',
  'ice cream',
  'italian cheese',
  'manchego',
  'milk',
  'monterey jack cheese',
  'mozzarella',
  'parmesan',
  'pecorino cheese',
  'pepper jack',
  'pepperjack cheese',
  'pizza cheese',
  'powdered milk',
  'aclette cheese',
  'ricotta',
  'soft cheese',
  'sour cream',
  'swiss cheese',
  'whipped cream',
  'yogurt',
];
const vegtables = [
  'artichoke',
  'artichoke heart',
  'arugula',
  'asparagus',
  'avocado',
  'bamboo shoot',
  'basil',
  'bean sprouts',
  'beet',
  'bell pepper',
  'bok choy',
  'broccoli',
  'broccoli rabe',
  'brussels sprout',
  'burdock',
  'butternut',
  'butternut squash',
  'cabbage',
  'canned tomato',
  'caper',
  'capsicum',
  'carrot',
  'cauliflower',
  'celery',
  'celery root',
  'chard',
  'chayote',
  'chia seeds',
  'chili pepper',
  'chinese broccoli',
  'cilantro',
  'collard',
  'corn',
  'cress',
  'cucumber',
  'daikon',
  'dill',
  'dulse',
  'eggplant',
  'endive',
  'fennel',
  'frozen vegetables',
  'garlic',
  'ginger',
  'green beans',
  'hearts of palm',
  'horseradish',
  'jerusalem artichoke',
  'jicama',
  'kale',
  'kohlrabi',
  'leek',
  'micro greens',
  'mint',
  'mixed vegetable',
  'mushroom',
  'mustard greens',
  'okra',
  'olive',
  'onion',
  'parsley',
  'parsnip',
  'pickle',
  'pimiento',
  'porcini',
  'portobello mushroom',
  'potato',
  'pumpkin',
  'radicchio',
  'radish',
  'red onion',
  'rocket',
  'rosemary',
  'rutabaga',
  'salad greens',
  'sauerkraut',
  'scallion',
  'seaweed',
  'shallot',
  'snow peas',
  'spaghetti squash',
  'spinach',
  'squash',
  'sun dried tomato',
  'sweet pepper',
  'sweet potato',
  'tomatillo',
  'tomato',
  'turnip',
  'water chestnut',
  'watercress',
  'yam',
  'zucchini',
];
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
            'url("https://lh3.googleusercontent.com/proxy/q4oDp6ymq4v2bSsXMu6fpdTYAS76gCSEoF3xNtuP-yepq0xa0bLP0o_dFXt-RYZqQVD3WQPUekDnFdBQHkgSf77hAHzE2j2sxJUzat_d77qay_Jr2mQeKSJAWdCOXDtj9qkqamExmq82stympyBNdrQ")',
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
              width: '50%',
              backgroundImage:
                'url("https://cdn.wallpapersafari.com/36/71/SyKeC9.jpg")',
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
              width: '50%',
              backgroundImage:
                'url("https://cdn.wallpapersafari.com/36/71/SyKeC9.jpg")',
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
