import React, { useEffect } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { GrFormEdit } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import "./_contacts.scss";
import { Link } from "react-router-dom";
import { useContext, MainContext } from "../../context";
import { toast } from "react-hot-toast";

function Contacts() {
	const { contacts, setContacts, setEachNewIdContact } = useContext(MainContext);
	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, []);
	const handleEdit = (contact) => {
		setEachNewIdContact(contact)
	}
	const handleInfo = (contact) => {
		setEachNewIdContact(contact)
	}
	const handleDelete = (id) => {
		const deleted = contacts.filter((contact) => contact.id !== id)
		setContacts(deleted)
		console.log(contacts)
		localStorage.setItem("contacts", JSON.stringify(deleted));
		toast.error('Mövcud əlaqə silinmişdir!')
	}
	return (
		<div className="ContactsPage">
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
					{contacts.length === 0 ? <tr className="emptyContactList"><td>Əlaqələr siyahısı boşdur!</td></tr> : contacts.map((contact, index) => (
						<tr key={index}>
							<td>{contact.name}</td>
							<td>{contact.surname}</td>
							<td>{contact.dadName}</td>
							<td>{contact.occupation}</td>
							<td className="info">
								<Link onClick={() => handleInfo(contact)} to="/contacts/detail">
									<BsInfoCircle className="icon" />
								</Link>
							</td>
							<td className="edit">
								<Link onClick={() => handleEdit(contact)} to="/contacts/edit">
									<GrFormEdit className="icon" />
								</Link>
							</td>
							<td className="delete">
								<AiTwotoneDelete onClick={() => handleDelete(contact.id)} className="icon" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Contacts;
