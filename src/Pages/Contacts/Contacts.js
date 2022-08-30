import React, { useEffect } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { GrFormEdit } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import "./_contacts.scss";
import { Link } from "react-router-dom";
import { useContext, MainContext } from "../../context";
import { toast } from "react-hot-toast";
import { Space, Table } from "antd";
const { Column, ColumnGroup } = Table;

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
			<Table className="contacts"  dataSource={contacts} bordered style={{width: "90%", margin: '0 auto'}}>
				<ColumnGroup title="Ad, Soyad, Ata adı">
					<Column title="Ad" dataIndex="name" key="name" />
					<Column title="Soyad" dataIndex="surname" key="surname" />
					<Column title="Ata adı" dataIndex="dadName" key="dadName" />
				</ColumnGroup>
				<Column  title="Vəzifə" dataIndex="occupation" key="occupation" />
				<Column
					title="Action"
					key="action"
					render={(_, record) => (
						<Space size="middle">
							<Link className="infoClass" to={`/contacts/detail${record.id}`}>
								{" "}
								<BsInfoCircle className="icon" />
							</Link>
							<Link to={`/contacts/edit${record.id}`}>
								<GrFormEdit className="icon" />
							</Link>
							<AiTwotoneDelete
								onClick={() => handleDelete(record.id)}
								className="icon"
							/>
						</Space>
					)}
				/>
			</Table>
		</div>
	);
}

export default Contacts;
