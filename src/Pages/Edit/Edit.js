import React, { useState, useEffect, useReducer } from "react";
import "./_edit.scss";
import { Link } from "react-router-dom";
import { MainContext, useContext } from "../../context";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import reducer from "../../utils/addToNewContacts";

function Edit() {
	const { contacts, setContacts } = useContext(MainContext);
	const params = useParams();
	let setNavigate = useNavigate();
	const [eachDetailFinds, setEachDetailFinds] = useState("");
	const [neweachDetailFinds, newSetEachDetailFinds] = useState("");
	useEffect(() => {
		const findDetails = contacts.find((contact) => contact.id === params.id);
		setEachDetailFinds(findDetails);
		newSetEachDetailFinds(findDetails);
	}, [contacts, params.id]);
	const [, dispatch] = useReducer(reducer, neweachDetailFinds);
	const edited = contacts.filter((contact) => contact.id !== params.id);
	const setHandleSubmit = (e) => {
		e.preventDefault();
		if (
			neweachDetailFinds.name.trim().length === 0 ||
			neweachDetailFinds.surname.trim().length === 0 ||
			neweachDetailFinds.dadName.trim().length === 0 ||
			neweachDetailFinds.additionalInformation.trim().length === 0
		) {
			toast.error('Dəyərlər boş göndərilə bilməz')
		} else if (
			eachDetailFinds.name !== neweachDetailFinds.name ||
			eachDetailFinds.surname !== neweachDetailFinds.surname ||
			eachDetailFinds.dadName !== neweachDetailFinds.dadName ||
			eachDetailFinds.mail !== neweachDetailFinds.mail ||
			eachDetailFinds.occupation !== neweachDetailFinds.occupation ||
			eachDetailFinds.gender !== neweachDetailFinds.gender ||
			eachDetailFinds.additionalInformation !==
				neweachDetailFinds.additionalInformation ||
			eachDetailFinds.newAlertsInfo !== neweachDetailFinds.newAlertsInfo
		) {
			dispatch({
				type: "setToCurrentContact",
				payload: setContacts([neweachDetailFinds, ...edited]),
			});
			toast.success("Mövcud əlaqə əlaqələr siyahısında yeniləndi");
			setNavigate("/contacts");
		} else {
			toast.error("Mövcud əlaqədə heç bir dəyişiklik edilməyib");
		}
	};
	return (
		<div className="Edit">
			<Link to="/contacts" className="getToContacts">
				←←←
			</Link>
			<form onSubmit={setHandleSubmit}>
				<div>
					<table>
						<tbody>
							<tr>
								<td>
									<label htmlFor="name">Ad</label>
									<input
										required
										id="name"
										type="text"
										defaultValue={eachDetailFinds?.name}
										placeholder="Adı qeyd edin..."
										onChange={(e) =>
											newSetEachDetailFinds((initailVal) => ({
												...initailVal,
												name: e.target.value,
											}))
										}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="surname">Soyad</label>
									<input
										required
										defaultValue={eachDetailFinds?.surname}
										id="surname"
										type="text"
										placeholder="Soyadı qeyd edin..."
										onChange={(e) =>
											newSetEachDetailFinds((initailVal) => ({
												...initailVal,
												surname: e.target.value,
											}))
										}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="dad">Ata adı</label>
									<input
										required
										defaultValue={eachDetailFinds?.dadName}
										id="dad"
										type="text"
										placeholder="Ata adını qeyd edin..."
										onChange={(e) =>
											newSetEachDetailFinds((initailVal) => ({
												...initailVal,
												dadName: e.target.value,
											}))
										}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="email">Email</label>
									<input
										required
										defaultValue={eachDetailFinds?.mail}
										id="email"
										type="email"
										placeholder="Email qeyd edin..."
										onChange={(e) =>
											newSetEachDetailFinds((initailVal) => ({
												...initailVal,
												mail: e.target.value,
											}))
										}
									/>
								</td>
							</tr>
						</tbody>
					</table>
					<div className="centerAddOccupyandGender">
						<div className="occupation">
							<label htmlFor="occupationChoose">Vəzifə:</label>
							<select
								id="occupationChoose"
								value={eachDetailFinds?.occupation}
								onChange={(e) =>
									newSetEachDetailFinds((initailVal) => ({
										...initailVal,
										occupation: e.target.value,
									}))
								}
							>
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
							<select
								id="genderChoose"
								value={eachDetailFinds?.gender}
								onChange={(e) =>
									newSetEachDetailFinds((initailVal) => ({
										...initailVal,
										gender: e.target.value,
									}))
								}
							>
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
										required
										defaultValue={eachDetailFinds?.additionalInformation}
										onChange={(e) =>
											newSetEachDetailFinds((initailVal) => ({
												...initailVal,
												additionalInformation: e.target.value,
											}))
										}
									/>
								</td>
							</tr>
							<tr className="agreeWithApp">
								<td>
									<input
										checked={neweachDetailFinds?.newAlertsInfo ? true : false}
										id="newNotification"
										className="cb"
										type="checkbox"
										onChange={() =>
											newSetEachDetailFinds((initailVal) => ({
												...initailVal,
												newAlertsInfo: !neweachDetailFinds.newAlertsInfo,
											}))
										}
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
