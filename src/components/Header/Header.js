import React from "react";
import "./_header.scss";
import { useLocation, Link } from "react-router-dom";

function Header() {
	const params = useLocation();
	return (
		<div className="Header">
			{params.pathname === "/contacts" && (
				<span className="HeaderTextTitle">Əlaqələr siyahısı</span>
			)}
			{params.pathname === "/contacts/new" && (
				<span className="HeaderTextTitle">Yeni əlaqələrin yaradılması</span>
			)}
			{params.pathname === "/contacts/edit" && (
				<span className="HeaderTextTitle">Mövcud əlaqənin dəyişdirilməsi</span>
			)}
			{params.pathname === "/contacts/detail" && (
				<span className="HeaderTextTitle">Mövcud əlaqə haqqlnda ətraflı məlumat</span>
			)}
			{params.pathname !== "/contacts" &&
				params.pathname !== "/contacts/new" &&
				params.pathname !== "/contacts/detail" &&
				params.pathname !== "/contacts/edit" && (
					<span className="HeaderTextTitle">Belə bir səhifə mövcud deyil</span>
				)}
			<Link className="link" to="contacts/new">
				<button className="addNewContact">Yeni əlaqə əlavə edin</button>
			</Link>
		</div>
	);
}

export default Header;
