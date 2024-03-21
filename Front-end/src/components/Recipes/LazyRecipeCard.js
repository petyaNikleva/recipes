import React from 'react';

const LazyRecipeCard = React.lazy(() => import('./RecipeCard'));

export default LazyRecipeCard;