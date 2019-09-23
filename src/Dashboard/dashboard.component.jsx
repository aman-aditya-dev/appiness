import React from 'react';
import dashboard from '../mockData/dashboard.json';
import './dashboard.scss';

function Dashboard() {
	return (
		<div className="dashboard">
			<h2>User Details</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Email</th>
						<th>Phone Number</th>
					</tr>
				</thead>
				<tbody>
					{dashboard.user.map((user, index) => {
						return (
							<tr key={user.id}>
								<td>
									{user.name}
								</td>
								<td>
									{user.age}
								</td>
								<td>
									{user.gender}
								</td>
								<td>
									{user.email}
								</td>
								<td>
									{user.phoneNo}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Dashboard;
