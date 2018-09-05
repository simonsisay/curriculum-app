import React, { Component } from 'react';
import { Table, TableBody, TableHead, Card, CardTitle, CardText  } from 'mdbreact';
import { Link } from 'react-router-dom'

class Curriculum extends Component{
  render(){
    return (
      <Table className="content-table" bordered hover>
        <TableHead color="primary-color">
          <tr>
            <th className="t-head">Topics</th>
            <th className="t-head">Overview</th>
          </tr>
        </TableHead>
        <TableBody>
          <tr>
            <th><Link to={`/user/${this.props.header}/resource`}>Computer basics</Link></th>
            <td><Link to={`/user/${this.props.header}/resource`}>
              Lore ipsum dolor emit set .emit set emsdxfs sdzhs sdzf jbjhka zsdfzh
             ahsfvhsdf sdf emit set emsdxfs sdzhs sdzf jbjhka zsdfzh ahsfvhsdf sdf. </Link>
            </td>
          </tr>
          <tr>
            <th><Link to={`/user/${this.props.header}/resource`}> HTML </Link> </th>
            <td><Link to={`/user/${this.props.header}/resource`}>
            lorem ipsum dolor emit set emsdxfs sdzhs sdzf 
            emit set emsdxfs sdzhs sdzf jbjhka zsdfzh ahsfvhsdf sdf
            jbjhka zsdfzh ahsfvhsdf sdf </Link>
            </td>
          </tr>
          <tr>
            <th><Link to={`/user/${this.props.header}/resource`}>Css</Link></th>
            <td>
            <Link to={`/user/${this.props.header}/resource`}>
            lorem ipsum dolor emit set emsdxfs emit set emsdxfs sdzhs sdzf jbjhka zsdfzh ahsfvhsdf sdf
            sdzhs sdzf jbjhka zsdfzh ahsfvhsdf sdf </Link>
            </td>
          </tr>
          <tr>
            <th><Link to={`/user/${this.props.header}/resource`}>Javascript</Link></th>
            <td>
            <Link to={`/user/${this.props.header}/resource`}>
            lorem ipsum dolor emit set emsdxfs sdzhs sdzf emit set emsdxfs sdzhs sdzf jbjhka zsdfzh ahsfvhsdf sdf
            jbjhka zsdfzh ahsfvhsdf sdf </Link>
            </td>
          </tr>
        </TableBody>
     </Table>
    );
  }
}

export default Curriculum;