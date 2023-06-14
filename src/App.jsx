import { ListOfSubjects } from "./components/ListOfSubjects"
import { Chart } from "./components/Chart"

export const App = () => {
	return (
		<>
			<main className="main">
				<ListOfSubjects />
				<Chart />
			</main>
		</>
	)
}