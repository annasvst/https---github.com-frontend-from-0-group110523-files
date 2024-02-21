import { Routes, Route } from 'react-router-dom';
import { NewRecipe } from './modules/recipes/NewRecipe';
import { RegistrationForm } from './modules/user/RegistrationForm';
import { LoginForm } from './modules/user/LoginForm';
import { Settings } from './modules/user/Settings';
import { SearchBar } from './modules/recipes/SearchBar';
import {RecipeList} from './modules/recipes/RecipeList';
import {RecipeDetails} from './modules/recipes/RecipeDetails';
import {Navigate} from 'react-router-dom';

export const AppRouter = ({recipes , setRecipes}) => {
	return (
		<Routes>
      <Route path='user'>
        <Route path='register' element={<RegistrationForm />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='settings' element={<Settings />} />
      </Route>

      <Route path='admin'>
        <Route path='users'>
          {/* It's important not to use '/' before word "details" in the 'to' attribute of the Navigate element so that the path is attached to the current url. E.g. /admin/users/231231 becomes /admin/users/231231/details. */}
          <Route path=':id' element={<Navigate to="details" replace={true} />} />
          <Route path=':id/details' element={<h1>Details of the user with id :id</h1>} />
          <Route index element={<h1>List of all users</h1>} />
        </Route>
        <Route path='login' element={<LoginForm />} />
        <Route path='settings' element={<Settings />} />
      </Route>
			
      <Route path='recipes'>
        <Route path='new' element={<NewRecipe />} />
        <Route path=':id/details' element={<RecipeDetails />} />
        <Route index element={<Navigate to="/" replace={true} />} />
      </Route>

			
			<Route
				path='/'
				element={
					<>
						<SearchBar setRecipes={setRecipes} />
						<RecipeList recipes={recipes} />
					</>
				}
			/>
		</Routes>
	);
};
