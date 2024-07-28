import { lazy } from 'react';

// React Router
import { useRoutes } from 'react-router-dom';

// Layouts
const Container = lazy(() => import('../../Container/Container'));
const Home = lazy(() => import('../../Layouts/Pages/Home/Home'));
const Events = lazy(() => import('../../Layouts/Pages/Events/Events'));
const Parks = lazy(() => import('../../Layouts/Pages/Parks/Parks'));
const Villages = lazy(() => import('../../Layouts/Pages/Villages/Villages'));

const Routes = () => {
	const Path = '/';

	return useRoutes([
		{
			path: Path,
			element: <Container />,
			children: [
				{ path: '', element: <Home /> },
				{ path: 'Events', element: <Events /> },
				{ path: 'Parks', element: <Parks /> },
				{ path: 'Villages', element: <Villages /> },
			]
		},
	]);
}

export default Routes;