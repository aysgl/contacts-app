import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import Colors from '../../Colors'

export default function List({ contacts }) {
    const { randomcolor } = Colors();
    return (
        <ListGroup className='pt-5'>
            {contacts.map((list, i) =>
                <ListGroupItem key={i} className='d-flex justify-content-between align-items-center py-3'>
                    <div>
                        <span className={`user bg-${randomcolor} me-2`}>{list.name.toUpperCase().slice(0, 1)}</span>
                        <span>{list.name.charAt(0).toUpperCase() + list.name.slice(1)}</span>
                    </div>
                    <div><span>{list.phone}</span></div>
                </ListGroupItem>
            )}
        </ListGroup>
    )
}
