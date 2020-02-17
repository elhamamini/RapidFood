import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { addRecipeId } from '../redux/activeUser';
import { createFav } from '../redux/favorits';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    marginLeft: '30rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function RecipeDetails(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log('nutrition', props.nutrition);
  console.log('instruction', props.instruction);
  return (
    <div
      style={{
        display: 'felx',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage:
          'url("https://backgroundcheckall.com/wp-content/uploads/2017/12/recipe-background-5.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingTop: '5rem',
        paddingBottom: '10rem',
        borderRadious: '2rem',
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" stle={{ backgroundColor: 'purple' }}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.recipe.title}
        />
        <CardMedia
          className={classes.media}
          image={props.recipe.image}
          title="Paella dish"
        />
        <CardContent>
          {props.nutrition.readyInMinutes && (
            <Typography paragraph>
              Total Time:{props.nutrition.readyInMinutes} minutes
            </Typography>
          )}
          {props.nutrition.servings && (
            <Typography paragraph>
              Serving Size:{props.nutrition.servings} servings
            </Typography>
          )}
          <Typography paragraph variant="h6">
            Ingredients:
          </Typography>
          {props.recipe.missedIngredients &&
            props.recipe.missedIngredients.map(ingrid => (
              <li key={ingrid.name}>{ingrid.original}</li>
            ))}
          {props.recipe.usedIngredients &&
            props.recipe.usedIngredients.map(ingrid => (
              <li key={ingrid.name}>{ingrid.original}</li>
            ))}
        </CardContent>

        <CardActions disableSpacing>
          {props.activeUser.name ? (
            <div>
              {props.activeUser.recipeId.includes(props.recipe.id) ? (
                <IconButton aria-label="add to favorites" disabled={true}>
                  {' '}
                  <FavoriteIcon color="secondary" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="add to favorites"
                  disabled={false}
                  onClick={() => {
                    props.addRecipe(props.recipe.id);
                    props.addFav({
                      id: props.recipe.id,
                      image: props.recipe.image,
                      title: props.recipe.title,
                      userId: props.activeUser.id,
                    });
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
              )}
            </div>
          ) : null}
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="h6">
              Method:
            </Typography>

            {props.instruction.instructions ? (
              <Typography paragraph>
                {props.instruction.instructions}
              </Typography>
            ) : (
              <Typography paragraph>
                Sorry! cant find matching recipe
              </Typography>
            )}
            <h1>...................................</h1>
            {props.nutrition.nutrition ? (
              <div>
                <Typography paragraph>Nutritional Guidelines:</Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(%)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(%)</TableCell>
                        <TableCell align="right">Protein&nbsp;(%)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="right">
                          {Math.ceil(
                            props.nutrition.nutrition.nutrients[0].amount
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {
                            props.nutrition.nutrition.caloricBreakdown
                              .percentFat
                          }
                        </TableCell>
                        <TableCell align="right">
                          {
                            props.nutrition.nutrition.caloricBreakdown
                              .percentCarbs
                          }
                        </TableCell>
                        <TableCell align="right">
                          {
                            props.nutrition.nutrition.caloricBreakdown
                              .percentProtein
                          }
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ) : null}

            <Typography
              variant="body1"
              style={{ marginLeft: '8rem', paddingTop: '1rem' }}
            >
              Bon Appetit!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

const mapStateToProps = ({ recipe, instruction, activeUser, nutrition }) => ({
  recipe,
  instruction,
  activeUser,
  nutrition,
});
const mapDispatchToProps = dispatch => {
  return {
    addRecipe: id => dispatch(addRecipeId(id)),
    addFav: fav => dispatch(createFav(fav)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
