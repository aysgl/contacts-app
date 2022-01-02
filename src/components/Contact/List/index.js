import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Avatar } from '../Avatar';

export default function List({ contacts }) {
    return (
        <ListGroup className='pt-5'>
            {contacts.map((list, i) =>
                <ListGroupItem key={i} className='d-flex justify-content-between align-items-center py-3'>
                    <div>
                        {/* <span key={color} className={`user bg-${randomcolor} me-2`}>{list.name.toUpperCase().slice(0, 1)}</span> */}
                        <Avatar initials={list.name.toUpperCase().slice(0, 1)} />
                        <span>{list.name.charAt(0).toUpperCase() + list.name.slice(1)}</span>
                    </div>
                    <div><span>{list.phone}</span></div>
                </ListGroupItem>
            )}
        </ListGroup>
    )
}
