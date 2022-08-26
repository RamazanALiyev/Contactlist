import React, { useId } from "react";
import "./_edit.scss";
import { Link } from "react-router-dom";

function Edit() {
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
									<input id={name} type="text" placeholder="Adı qeyd edin..." />
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor={surname}>Soyad</label>
									<input
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
										id={mail}
										type="email"
										placeholder="Email qeyd edin..."
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
									<input className="cb" id={id1} type="checkbox" />
									<label htmlFor={id1}>Front-End Developer</label>
								</td>
								<td>
									<input className="cb" id={id2} type="checkbox" />
									<label htmlFor={id2}>Back-End Developer</label>
								</td>
								<td>
									<input className="cb" id={id3} type="checkbox" />
									<label htmlFor={id3}>Full Stack Developer</label>
								</td>
								<td>
									<input className="cb" id={id4} type="checkbox" />
									<label htmlFor={id4}>React Native Developer</label>
								</td>
							</tr>
							<tr>
								<td>
									<label>Cinsiyyət</label>
								</td>
								<td>
									<input className="radio" id={id5} type="radio" />
									<label htmlFor={id5}>Kişi</label>
								</td>
								<td>
									<input className="radio" id={id6} type="radio" />
									<label htmlFor={id6}>Qadın</label>
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
									<textarea />
								</td>
							</tr>
							<tr className="agreeWithApp">
								<td>
									<input id={id7} className="cb" type="checkbox" />
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
