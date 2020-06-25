import React, { Component } from "react";
import "../../styles/ringchart.scss";

export const RingChart = () => {
	return (
		<div className="s container">
			<div className="c container">
				<div className="card col-sm-12">
					<div className="card-header">
						<h5 className="card-title">
							Cantidad de <strong>Nutrientes</strong>
						</h5>{" "}
						<a href="#" data-abc="true">
							<i className="fa fa-ellipsis-v" />
						</a>
					</div>
					<div className="card-body card-body">
						<div className="text-center py-20">
							<div
								data-provide="peity"
								data-type="donut"
								data-size="150"
								data-inner-radius="55"
								data-fill="#efb3e6,#ffdf7c,#b2def7"
							/>
							<svg className="peity" height="150" width="150">
								<path
									d="M 75 0 A 75 75 0 1 1 52.146854305878314 146.43342167279437 L 58.24102649097743 127.38450922671586 A 55 55 0 1 0 75 20"
									fill="#efb3e6"
								/>
								<path
									d="M 52.146854305878314 146.43342167279437 A 75 75 0 0 1 31.9107235882174 13.613403268229668 L 43.40119729802609 29.983162396701758 A 55 55 0 0 0 58.24102649097743 127.38450922671586"
									fill="#ffdf7c"
								/>
								<path
									d="M 31.9107235882174 13.613403268229668 A 75 75 0 0 1 74.99999999999999 0 L 74.99999999999999 20 A 55 55 0 0 0 43.40119729802609 29.983162396701758"
									fill="#b2def7"
								/>
							</svg>
						</div>
						<ul className="list-inline">
							<li className="flexbox mb-1">
								<div>
									{" "}
									<span
										className="badge badge-dot badge-lg mr-1"
										style={{ backgroundColor: "#efb3e6" }}
									/>{" "}
									<span>Proteinas</span>{" "}
								</div>
								<div>
									<span>22</span>
								</div>
							</li>
							<li className="flexbox mb-1">
								<div>
									{" "}
									<span
										className="badge badge-dot badge-lg mr-1"
										style={{ backgroundColor: "#ffdf7c" }}
									/>{" "}
									<span>Carbohidratos</span>{" "}
								</div>
								<div>
									<span>12</span>
								</div>
							</li>
							<li className="flexbox">
								<div>
									{" "}
									<span
										className="badge badge-dot badge-lg mr-1"
										style={{ backgroundColor: "#b2def7" }}
									/>{" "}
									<span>Grasas saludables</span>{" "}
								</div>
								<div>
									<span>4</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
