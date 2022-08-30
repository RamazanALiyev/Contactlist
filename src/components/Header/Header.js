import React from "react";
import "./_header.scss";
import { useLocation, Link } from "react-router-dom";
import { PageHeader } from "antd";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
function Header() {
	const params = useLocation();
	return (
		<div className="Header">
			{params.pathname === "/contacts" && (
				<PageHeader className="site-page-header" title="Əlaqələr siyahısı" />
			)}
			{params.pathname === "/contacts/new" && (
				<PageHeader className="site-page-header" title="Yeni əlaqələrin yaradılması" />
			)}
			{params.pathname.includes("/contacts/edit") && (
				<PageHeader className="site-page-header" title="Mövcud əlaqənin dəyişdirilməsi" />
			)}
			{params.pathname.includes("/contacts/detail") && (
				<PageHeader className="site-page-header" title="Mövcud əlaqə haqqında ətraflı məlumat" />
			)}
			{params.pathname !== "/contacts" &&
				params.pathname !== "/contacts/new" &&
				!params.pathname.includes("/contacts/detail") &&
				!params.pathname.includes("/contacts/edit") && (
				<PageHeader className="site-page-header" title="Belə bir səhifə mövcud deyil" />
				)}
			<Link className="link" to="contacts/new">
				<button className="addNewContact">Yeni əlaqə əlavə edin</button>
			</Link>
		</div>
	);
}

export default Header;
