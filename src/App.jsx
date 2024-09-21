/* eslint-disable react/prop-types */
import { Loader } from "./components/utilities/Loader/Loader";
import SectionOne from "./components/Section 1/section-one";
import SectionTwo from "./components/Section 2/section-two";
import { Suspense } from "react";
import SectionThree from "./components/Section 3/section-three";

function App() {
	const colors = { color1: "#1867AC", color2: "#C5E063" };

	return (
		<Suspense fallback={<Loader />}>
			<SectionOne colors={colors} />
			<SectionTwo colors={colors} />
			<SectionThree />
		</Suspense>
	);
}

export default App;
