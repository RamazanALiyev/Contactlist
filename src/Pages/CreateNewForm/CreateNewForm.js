import React, { useReducer, useState } from "react";
import "./_createnewform.scss";
import { Link } from "react-router-dom";
import reducer from "../../utils/addToNewContacts";
import { nanoid } from "nanoid";

function CreateNewForm() {
	const id = nanoid();
	const [initailVal, setInitialVal] = useState({
		name: "",
		surname: "",
		dadName: "",
		mail: "",
		occupation: [],
		gender: "",
		additionalInformation: "",
		newAlertsInfo: false,
		id: id
	});
	const [contact, dispatch] = useReducer(reducer, initailVal);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "addToNewContact"});
	};
	console.log(initailVal);
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
					<table className="occupation">
						<tbody>
							<tr>
								<td>
									<label>Vəzifə</label>
								</td>
								<td>
									<input
										className="cb"
										defaultChecked
										id="id1"
										type="checkbox"
									/>
									<label htmlFor="id1">Front-End Developer</label>
								</td>
								<td>
									<input className="cb" id="id2" type="checkbox" />
									<label htmlFor="id2">Back-End Developer</label>
								</td>
								<td>
									<input className="cb" id="id3" type="checkbox" />
									<label htmlFor="id3">Full Stack Developer</label>
								</td>
								<td>
									<input className="cb" id="id4" type="checkbox" />
									<label htmlFor="id4">React Native Developer</label>
								</td>
							</tr>
							<tr>
								<td>
									<label>Cinsiyyət</label>
								</td>
								<td>
									<input
										name="gender"
										className="radio"
										id="id5"
										type="radio"
									/>
									<label htmlFor="id5">Kişi</label>
								</td>
								<td>
									<input
										name="gender"
										className="radio"
										id="id6"
										type="radio"
									/>
									<label htmlFor="id6">Qadın</label>
								</td>
							</tr>
						</tbody>
					</table>
					<table>
						<tbody>
							<tr>
								<td>
									<label>Əlavə məlumat</label>
								</td>
								<td>
									<textarea
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
