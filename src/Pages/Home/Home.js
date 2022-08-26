import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const [direct] = useState(false);
	let navigate = useNavigate();
	useEffect(() => {
		if (!direct) {
			return navigate("/contacts");
		}
	}, [direct, navigate]);
	return <div></div>;
}

export default Home;
