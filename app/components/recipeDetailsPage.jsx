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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { addRecipeId } from '../redux/activeUser';
import { createFav } from '../redux/favorits';
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
  avatar: {
    backgroundColor: red[500],
  },
}));

function RecipeDetails(props) {
  console.log('my recipe', props.recipe);
  console.log('instruction', props.instruction);
  if (props.activeUser.recipeId.includes(props.recipe.id)) {
    IconButton.disabled = true;
  }
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        display: 'felx',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'lightpink',
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
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
          {/* <Typography paragraph>
            prep time: {props.instruction.preparationMinutes}minutes {'    '}
            cooking time: {props.instruction.cookingMinutes}minutes
          </Typography> */}
          <Typography paragraph variant="h6">
            Ingredients:
          </Typography>
          {props.recipe.missedIngredients &&
            props.recipe.missedIngredients.map(ingrid => (
              <li key={ingrid.name}>{ingrid.original}</li>
            ))}
          {props.recipe.usedIngredients &&
            props.recipe.usedIngredients.map(ingrid => (
              <li key={ingrid.name}>
                {ingrid.original}
                {/* {ingrid.name} : {ingrid.amount} {ingrid.unit} */}
              </li>
            ))}
        </CardContent>
        <CardActions disableSpacing>
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
            <Typography paragraph></Typography>

            <Typography paragraph>{props.instruction.instructions}</Typography>
            <Typography paragraph>Nutricion Facts</Typography>
            <Typography paragraph></Typography>
            <Typography variant="body1" style={{ marginLeft: '8rem' }}>
              Bon Appetit!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

const mapStateToProps = ({ recipe, instruction, activeUser }) => ({
  recipe,
  instruction,
  activeUser,
});
const mapDispatchToProps = dispatch => {
  return {
    addRecipe: id => dispatch(addRecipeId(id)),
    addFav: fav => dispatch(createFav(fav)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
