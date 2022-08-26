import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { GrFormEdit } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import "./_contacts.scss";
import { Link } from "react-router-dom";

function Contacts() {
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
					<tr>
						<td>Ramazan</td>
						<td>Aliyev</td>
						<td>Yasar</td>
						<td>Front-End Developer</td>
						<td className="info">
							<BsInfoCircle className="icon" />
						</td>
						<td className="edit">
							<Link to="/contacts/edit">
								<GrFormEdit className="icon" />
							</Link>
						</td>
						<td className="delete">
							<AiTwotoneDelete className="icon" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Contacts;
