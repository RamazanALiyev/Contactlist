import { MainContext } from "./context";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";
import Header from "./components/Header/Header";
import CreateNewForm from "./Pages/CreateNewForm/CreateNewForm";
import Edit from "./Pages/Edit/Edit";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
function App() {
	const [contacts, setContacts] = useState([]);
	const data = { contacts, setContacts };
	return (
		<MainContext.Provider value={data}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/contacts/new" element={<CreateNewForm />} />
				<Route path="/contacts/edit" element={<Edit />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</MainContext.Provider>
	);
}

export default App;
