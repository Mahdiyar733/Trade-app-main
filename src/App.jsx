/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { Loader } from "./components/utilities/Loader/Loader";
import SectionOne from "./components/Section 1/section-one";
import SectionTwo from "./components/Section 2/section-two";
import SectionThree from "./components/Section 3/section-three";

const colorScheme = { color1: "#4DA2FF", color2: "#8beed5" };

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<SectionOne colors={colorScheme} />
			<SectionTwo colors={colorScheme} />
			<SectionThree />
		</Suspense>
	);
}

export default App;
