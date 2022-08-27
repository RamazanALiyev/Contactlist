import React, { useState, useEffect } from "react";
import "./_edit.scss";
import { Link } from "react-router-dom";
import { MainContext, useContext } from "../../context";
import { useParams } from "react-router-dom";

function Edit() {
	const { contacts } = useContext(MainContext);
	const params = useParams();
	const [eachDetailFinds, setEachDetailFinds] = useState("");
	useEffect(() => {
		const findDetails = contacts.find((contact) => contact.id === params.id);
		setEachDetailFinds(findDetails);
	}, [contacts, params.id]);
	return (
		<div className="Edit">
			<Link to="/contacts" className="getToContacts">
				←←←
			</Link>
			<form>
				<div>
					<table>
						<tbody>
							<tr>
								<td>
									<label htmlFor="name">Ad</label>
									<input
										id="name"
										type="text"
										defaultValue={eachDetailFinds?.name}
										placeholder="Adı qeyd edin..."
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="surname">Soyad</label>
									<input
										defaultValue={eachDetailFinds?.surname}
										id="surname"
										type="text"
										placeholder="Soyadı qeyd edin..."
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="dad">Ata adı</label>
									<input
										defaultValue={eachDetailFinds?.dadName}
										id="dad"
										type="text"
										placeholder="Ata adını qeyd edin..."
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="email">Email</label>
									<input
										defaultValue={eachDetailFinds?.mail}
										id="email"
										type="email"
										placeholder="Email qeyd edin..."
									/>
								</td>
							</tr>
						</tbody>
					</table>
					<div className="centerAddOccupyandGender">
						<div className="occupation">
							<label htmlFor="occupationChoose">Vəzifə:</label>
							<select id="occupationChoose" value={eachDetailFinds?.occupation}>
								<optgroup label="Vəzifəniz:">
									<option defaultValue="Front-End Developer">
										Front-End Developer
									</option>
									<option defaultValue="Back-End Developer">
										Back-End Developer
									</option>
									<option defaultValue="Full Stact Developer">
										Full Stact Developer
									</option>
									<option defaultValue="Node JS MERN Developer">
										Node JS MERN Developer
									</option>
								</optgroup>
							</select>
						</div>
						<div className="gender">
							<label htmlFor="genderChoose">Cinsiyyət:</label>
							<select id="genderChoose" value={eachDetailFinds?.gender}>
								<optgroup label="Cinsiyyət:">
									<option defaultValue="Kişi">Kişi</option>
									<option defaultValue="Qadın">Qadın</option>
								</optgroup>
							</select>
						</div>
					</div>
					<table>
						<tbody>
							<tr>
								<td>
									<label>Əlavə məlumat</label>
								</td>
								<td>
									<textarea
										defaultValue={eachDetailFinds?.additionalInformation}
									/>
								</td>
							</tr>
							<tr className="agreeWithApp">
								<td>
									<input
										checked={eachDetailFinds?.newAlertsInfo ? true : false}
										id="newNotification"
										readOnly
										className="cb"
										type="checkbox"
									/>
									<label htmlFor="newNotification">
										Yeniliklər barədə məlumat almaq istəyirəm
									</label>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<button>Mövcud əlaqə yenilənsin</button>
			</form>
		</div>
	);
}

export default Edit;
