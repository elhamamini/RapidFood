import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { recipeDetails } from '../redux/oneRecipe';
import { setInstruction } from '../redux/instruction';
class ListOfRecipes extends React.Component {
  componentDidMount(){
    
  }
  render() {
    console.log('recepies', this.props.recipes);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: 'lightPink',
          height: '80',
        }}
      >
        <h2 style={{ marginTop: '2rem' }}>Choose your recipe</h2>
        <GridList
          cellHeight={180}
          style={{
            width: 500,
            height: 450,
          }}
        >
          <GridListTile
            key="Subheader"
            cols={2}
            style={{ height: 'auto' }}
          ></GridListTile>
          {this.props.recipes.map(recipe => (
            <GridListTile key={recipe.image}>
              <img src={recipe.image} alt={recipe.title} />
              <GridListTileBar
                title={recipe.title}
                // subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${recipe.title}`}
                    onClick={() => {
                      this.props.getDetails(recipe.id);
                      this.props.getInstruction(recipe.id);
                      this.props.history.push('/recipedetails');
                    }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.54)',
                    }}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
const mapStateToProps = ({ recipes }) => ({ recipes });
const mapDispatchToProps = dispatch => {
  return {
    getRecipe: () => dispatch(setRecipe()),
    postIngredient: ing => dispatch(sendIngredient(ing)),
    getDetails: id => dispatch(recipeDetails(id)),
    getInstruction: id => dispatch(setInstruction(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfRecipes);
