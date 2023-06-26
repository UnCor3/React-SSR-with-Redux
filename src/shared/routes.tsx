import { Route , Routes } from 'react-router-dom'
import UsersPage from '../client/pages/Users.tsx'
import { fetchTodos, fetchUsers } from '../store/reducer/users/users.action.ts'
import Hello_world from '../client/pages/Hello_world.tsx'
import NotFound from '../client/pages/404.tsx'
import Index from '../client/pages/Index.tsx'


//*defining our routes
export const routes = [
    {
        path : '/',
        element : <Index/>,
    },
    {
        path : '/users',
        element : <UsersPage/>,
        //we dont need to fetch toDos but we may need to fetch from multiple sources
        //so just to test and implement the logic on the backend we are also fetching toDos
        loader : ({dispatch} : any) => [dispatch(fetchUsers()),dispatch(fetchTodos())],
    },
    {
        path : '/hello-world',
        element : <Hello_world/>,
    }
]

//*mapping over routes array to get routes 
export default () => {
    return (
        <Routes>
            {routes.map((route,i) =>  <Route path={route.path} element={route.element} key={i}/>)}
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}
