import { ToastContainer } from 'react-toastify';
import RootLayout from './app/layout';
import RoutesComponent from './routes/routes';

function App() {
	return (
		<RootLayout>
			<RoutesComponent />
			<ToastContainer />
		</RootLayout>
	);
}

export default App;
