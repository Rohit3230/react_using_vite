import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AppHeader from "./AppHeader";
import Spinners from "./Snipper";
const About = () => {
    const [persons, setpersons] = useState([]);
    const componentDidMount = () => {
        return axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            setpersons(res?.data ?? []);
        })
    }
    useEffect(() => { componentDidMount(); }, []);
    return (
        <>
            <AppHeader />
            <div style={{ textAlign: "center", backgroundColor: "lightblue" }}>
                {persons.length ? 'Active Users' : 'Please wait...!'}
            </div>
            {
                !persons.length ? <div style={{ textAlign: "center" }} >
                    <Spinners />
                </div>
                    :
                    ''
            }
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(person =>
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.phone}</td>
                            <td>{person.email}</td>
                        </tr>)}
                </tbody>
            </Table>
        </>
    );
};
export default About;