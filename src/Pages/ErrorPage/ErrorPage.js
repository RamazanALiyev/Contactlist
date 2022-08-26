import React from "react";
import "./_errorpage.scss";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div className="ErrorPage">
			<p>Belə bir səhifə mövcud deyildir.</p>
            <Link className="link" to='/contacts'>←←← Əlaqələr siyasısı səhifəsinə keçid edin.</Link>
		</div>
	);
}

export default ErrorPage;
