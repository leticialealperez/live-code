import { Fragment } from "react/jsx-runtime";
import { AppRoutes } from "./config/routes/AppRoutes";
import { GlobalStyled } from "./global/GlobalStyled";

export function App() {
	return (
		<Fragment>
			<GlobalStyled />
			<AppRoutes />
		</Fragment>
	);
}
