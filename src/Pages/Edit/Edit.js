import React, { useId } from "react";
import "./_edit.scss";
import { Link } from "react-router-dom";
import { MainContext, useContext } from "../../context";

function Edit() {
	const { eachNewIdContact } = useContext(MainContext)
	const name = useId();
	const surname = useId();
	const dad = useId();
	const mail = useId();
	const id1 = useId();
	const id2 = useId();
	const id3 = useId();
	const id4 = useId();
	const id5 = useId();
	const id6 = useId();
	const id7 = useId();
	return (
		<div className="Edit">
			<Link to="/contacts" className="getToContacts">
				Əlaqələr səhifəsinə get
			</Link>
			<form>
				<div>
					<table>
						<tbody>
							<tr>
								<td>
									<label htmlFor={name}>Ad</label>
									<input id={name} type="text" defaultValue={eachNewIdContact?.name} placeholder="Adı qeyd edin..." />
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor={surname}>Soyad</label>
									<input
										defaultValue={eachNewIdContact?.surname}
										id={surname}
										type="text"
										placeholder="Soyadı qeyd edin..."
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor={dad}>Ata adı</label>
									<input
										defaultValue={eachNewIdContact?.dadName}
										id={dad}
										type="text"
										placeholder="Ata adını qeyd edin..."
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor={mail}>Email</label>
									<input
										defaultValue={eachNewIdContact?.mail}
										id={mail}
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
							<select
								id="occupationChoose"
							>
								<optgroup label="Vəzifəniz:">
									<option selected={eachNewIdContact?.occupation === 'Front-End Developer' ? true : false} value="Front-End Developer">
										Front-End Developer
									</option>
									<option selected={eachNewIdContact?.occupation === 'Back-End Developer' ? true : false} value="Back-End Developer">Back-End Developer</option>
									<option selected={eachNewIdContact?.occupation === 'Full Stact Developer' ? true : false} value="Full Stact Developer">
										Full Stact Developer
									</option>
									<option selected={eachNewIdContact?.occupation === 'Node JS MERN Developer' ? true : false} value="Node JS MERN Developer">
										Node JS MERN Developer
									</option>
								</optgroup>
							</select>
						</div>
						<div className="gender">
							<label htmlFor="genderChoose">Cinsiyyət:</label>
							<select
								id="genderChoose"
							>
								<optgroup label="Cinsiyyət:">
									<option selected={eachNewIdContact?.gender === 'Kişi' ? true : false} value="Kişi">Kişi</option>
									<option selected={eachNewIdContact?.gender === 'Qadın' ? true : false} value="Qadın">Qadın</option>
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
									<textarea defaultValue={eachNewIdContact?.additionalInformation}
									/>
								</td>
							</tr>
							<tr className="agreeWithApp">
								<td>
									<input checked={eachNewIdContact?.newAlertsInfo ? true : false} id={id7} className="cb" type="checkbox" />
									<label htmlFor={id7}>
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
