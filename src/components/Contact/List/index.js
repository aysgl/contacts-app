import React, { useState } from 'react'
import { ListGroup, ListGroupItem, FormGroup, Input, Label } from 'reactstrap'
import { Avatar } from '../Avatar';

export default function List({ contacts }) {
    const [filter, setFilter] = useState("")

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toLocaleLowerCase())
        );
    });
    // console.log(filtered);
    return (
        <>
            <FormGroup floating>
                <Input
                    name="search"
                    placeholder="search"
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <Label for="search">
                    Search
                </Label>
            </FormGroup>
            <ListGroup>
                {filtered.map((list, i) =>
                    <ListGroupItem key={i} className='d-flex justify-content-between align-items-center py-3'>
                        <div>
                            <Avatar initials={list.name.toUpperCase().slice(0, 1)} />
                            <span>{list.name.charAt(0).toUpperCase() + list.name.slice(1)}</span>
                        </div>
                        <div><span>{list.phone}</span></div>
                    </ListGroupItem>
                )}
            </ListGroup>
        </>
    )
}
