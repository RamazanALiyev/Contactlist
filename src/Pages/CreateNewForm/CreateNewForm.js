import React, { useState, useReducer, useEffect } from "react";
import "./_createnewform.scss";
import { Link, useNavigate } from "react-router-dom";
import reducer from "../../utils/addToNewContacts";
import { useContext, MainContext } from "../../context";
import { nanoid } from "nanoid";
import toast, { Toaster } from 'react-hot-toast';


function CreateNewForm() {
	const id = nanoid()
	let navigate = useNavigate();
	const { contacts, setContacts } = useContext(MainContext);
	const [initailVal, setInitialVal] = useState({
		name: "",
		surname: "",
		dadName: "",
		mail: "",
		occupation: "Front-End Developer",
		gender: "Kişi",
		additionalInformation: "",
		newAlertsInfo: false,
		id: id
	});
	const [state, dispatch] = useReducer(reducer, initailVal);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "addToNewContact",
			payload: setContacts([...contacts, initailVal]),
		});
		toast.success('Əlaqələr siyahısına yeni əlaqə əlavə edildi!')
		navigate("/contacts");
	};

	return (
		<div className="CreateNewForm">
			<Link to="/contacts" className="getToContacts">
				Əlaqələr sihayısı səhifəsinə get
			</Link>
			<form onSubmit={handleSubmit}>
				<div>
					<table>
						<tbody>
							<tr>
								<td>
									<label htmlFor="name">Ad</label>
									<input
										onChange={(e) =>
											setInitialVal((initailVal) => ({
												...initailVal,
												name: e.target.value,
											}))
										}
										required
										value={initailVal.name}
										id="name"
										type="text"
										placeholder="Adı qeyd edin..."
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="surname">Soyad</label>
									<input
										required
										id="surname"
										type="text"
										placeholder="Soyadı qeyd edin..."
										onChange={(e) =>
											setInitialVal((initailVal) => ({
												...initailVal,
												surname: e.target.value,
											}))
										}
										value={initailVal.surname}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="dad">Ata adı</label>
									<input
										required
										id="dad"
										type="text"
										placeholder="Ata adını qeyd edin..."
										onChange={(e) =>
											setInitialVal((initailVal) => ({
												...initailVal,
												dadName: e.target.value,
											}))
										}
										value={initailVal.dadName}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="mail">Email</label>
									<input
										required
										id="mail"
										type="email"
										placeholder="Email qeyd edin..."
										onChange={(e) =>
											setInitialVal((initailVal) => ({
												...initailVal,
												mail: e.target.value,
											}))
										}
										value={initailVal.mail}
									/>
								</td>
							</tr>
						</tbody>
					</table>
					<div className="centerAddOccupyandGender">
						<div className="occupation">
							<label htmlFor="occupationChoose">Vəzifə:</label>
							<select
								onChange={(e) =>
									setInitialVal((initailVal) => ({
										...initailVal,
										occupation: e.target.value,
									}))
								}
								id="occupationChoose"
							>
								<optgroup label="Vəzifəniz:">
									<option value="Front-End Developer">
										Front-End Developer
									</option>
									<option value="Back-End Developer">Back-End Developer</option>
									<option value="Full Stact Developer">
										Full Stact Developer
									</option>
									<option value="Node JS MERN Developer">
										Node JS MERN Developer
									</option>
								</optgroup>
							</select>
						</div>
						<div className="gender">
							<label htmlFor="genderChoose">Cinsiyyət:</label>
							<select
								onChange={(e) =>
									setInitialVal((initailVal) => ({
										...initailVal,
										gender: e.target.value,
									}))
								}
								id="genderChoose"
							>
								<optgroup label="Cinsiyyət:">
									<option value="Kişi">Kişi</option>
									<option value="Qadın">Qadın</option>
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
										onChange={(e) =>
											setInitialVal((initailVal) => ({
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
										onChange={(e) =>
											setInitialVal((initailVal) => ({
												...initailVal,
												newAlertsInfo: !initailVal.newAlertsInfo,
											}))
										}
										id="id7"
										className="cb"
										type="checkbox"
									/>
									<label htmlFor="id7">
										Yeniliklər barədə məlumat almaq istəyirəm
									</label>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<button type="submit">Yeni Əlaqə Yarat</button>
			</form>
		</div>
	);
}

export default CreateNewForm;
