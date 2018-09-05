import React from 'react'
import { Table, TableHead, TableBody, Input, FormInline } from 'mdbreact'

const Resources = () => {
	return (
		<div className="resources">
				<Table>
		      <TableHead color="primary-color" textWhite>
		        <tr>
		          <th>Topic</th>
		          <th>Resource Link</th>
		          <th>Done</th>
		        </tr>
		      </TableHead>
		      <TableBody>
		        <tr>
		          <td>How the internet works</td>
		          <td>sdzf</td>
		          <td>
		          	<FormInline>
		          		<input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />Completed
		          	</FormInline>
		          </td>
		        </tr>
		        <tr>
		          <td>how to learn </td>
		          <td>Jacob</td>
		          <td>
		          	<FormInline>
		          	 <input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />Completed
		          	</FormInline>
		          </td>
		        </tr>
		        <tr>
		          <td>stay updated</td>
		          <td>Larry</td>
		          <td>
		          	<FormInline className="checkbox">
		          		<input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />Completed
		          	</FormInline>
		          </td>
		        </tr>
		        <tr>
		          <td>how to learn </td>
		          <td>Jacob</td>
		          <td>
		          	<FormInline>
		          	 <input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />Completed
		          	</FormInline>
		          </td>
		        </tr>
		        <tr>
		          <td>how to learn </td>
		          <td>Jacob</td>
		          <td>
		          	<FormInline>
		          	 <input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />Completed
		          	</FormInline>
		          </td>
		        </tr>
		        <tr>
		          <td>how to learn </td>
		          <td>Jacob</td>
		          <td>
		          	<FormInline>
		          	 <input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />Completed
		          	</FormInline>
		          </td>
		        </tr>
		      </TableBody>
		    </Table>
		</div>
	)
}

export default Resources