import React, { useEffect } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { GrFormEdit } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import "./_contacts.scss";
import { Link } from "react-router-dom";
import { useContext, MainContext } from "../../context";
import { toast } from "react-hot-toast";

function Contacts() {
	const { contacts, setContacts } = useContext(MainContext);
	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);
	const handleDelete = (id) => {
		const deleted = contacts.filter((contact) => contact.id !== id);
		console.log("deletedddd", deleted);
		setContacts(deleted);
		console.log(contacts);
		localStorage.setItem("contacts", JSON.stringify(deleted));
		toast.error("Mövcud əlaqə silinmişdir!");
	};
	return (
		<div className="ContactsPage">
			{contacts.length === 0 ? (
				<p className="countContactList">Əlaqələr siyahısı boşdur!</p>
			) : (
				<p className="countContactList">
					Əlaqələr siyahısı {contacts.length} nəfərdən ibarətdir!
				</p>
			)}
			<table className="contacts">
				<thead>
					<tr>
						<th>Ad</th>
						<th>Soyad</th>
						<th>Ata adı</th>
						<th>İxtisas</th>
						<th>Ətraflı məlumat</th>
						<th>Düzəliş</th>
						<th>Sil</th>
					</tr>
				</thead>
				<tbody>
					{contacts.length === 0 ? (
						<tr className="emptyContactList">
							<td>Əlaqələr siyahısı boşdur!</td>
						</tr>
					) : (
						contacts.map((contact, index) => (
							<tr key={index}>
								<td>
									{contact.newAlertsInfo ? (
										<IoIosNotifications className="iconSound" />
									) : null}
									{contact.name}
								</td>
								<td>{contact.surname}</td>
								<td>{contact.dadName}</td>
								<td>{contact.occupation}</td>
								<td className="info">
									<Link
										className="infoClass"
										to={`/contacts/detail${contact.id}`}
									>
										<BsInfoCircle className="icon" />
									</Link>
								</td>
								<td className="edit">
									<Link to={`/contacts/edit${contact.id}`}>
										<GrFormEdit className="icon" />
									</Link>
								</td>
								<td className="delete">
									<AiTwotoneDelete
										onClick={() => handleDelete(contact.id)}
										className="icon"
									/>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}

export default Contacts;
