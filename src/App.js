import { MainContext } from "./context";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";
import Header from "./components/Header/Header";
import CreateNewForm from "./Pages/CreateNewForm/CreateNewForm";
import Edit from "./Pages/Edit/Edit";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import { Toaster } from "react-hot-toast";
import DetailInformationEachContact from "./Pages/DetailInfo/DetailInfo";
function App() {
	const [contacts, setContacts] = useState(
		JSON.parse(localStorage.getItem("contacts")) || []
	);
	const data = { contacts, setContacts };
	return (
		<MainContext.Provider value={data}>
			<Toaster
				position="bottom-right"
				toastOptions={{
					duration: 2000,
					style: {
						background: "#363636",
						color: "#fff",
					},
					success: {
						duration: 2000,
						theme: {
							primary: "green",
							secondary: "black",
						},
					},
				}}
			/>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/contacts/new" element={<CreateNewForm />} />
				<Route path="/contacts/edit:id" element={<Edit />} />
				<Route
					path="/contacts/detail:id"
					element={<DetailInformationEachContact />}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</MainContext.Provider>
	);
}

export default App;
