import React from 'react';
import {Table} from "semantic-ui-react";
import '../App.css';

export const Card = ({listeOfevent})=> {
    return (
        <Table celled padded >
            <Table.Header>  
                <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Place</Table.HeaderCell>
                    <Table.HeaderCell>Operation</Table.HeaderCell>
                </Table.Row> 
            </Table.Header>
            <Table.Body>
                {
                    listeOfevent.map(event => {
                        return (
                            <Table.Row key={event.Title} onClick={() => { console.log(event) }}>
                                    <Table.Cell>{event.Title}</Table.Cell>
                                    <Table.Cell>{event.Date}</Table.Cell>
                                    <Table.Cell>{event.Lieu}</Table.Cell>
                                    <Table.Cell><button className='button'>Participate</button></Table.Cell>
                            </Table.Row>
                        );
                    })
                }
            </Table.Body>
        </Table>   
    );
};