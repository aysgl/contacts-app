import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

export default function AddContact({ contacts, setContacts }) {
    const [form, setForm] = useState({ name: "", phone: "" })
    const [show, setShow] = useState(false)

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const arr = form.name.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newname = arr.join(" ");

    const onSubmit = (e) => {
        e.preventDefault();
        setContacts([...contacts, form])
        setForm({ name: "", phone: "" })
        setShow(false)
        // console.log(form);
    }

    return (
        <>
            {show ?
                <Form inline className='pt-3' onSubmit={onSubmit}>
                    <FormGroup floating>
                        <Input
                            id="name"
                            name="name"
                            placeholder="name"
                            type="text"
                            // value={form.name}
                            value={newname}
                            onChange={onChangeInput}
                        />
                        <Label for="name">
                            Name Surname
                        </Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="phone"
                            type="tel"
                            value={form.phone}
                            onChange={onChangeInput}
                        />
                        <Label for="phone">
                            Phone number
                        </Label>
                    </FormGroup>
                    <div className='d-flex justify-content-end'>
                        <Button color="primary" disabled={form.name === "" || form.phone === ""}>
                            Add
                        </Button>
                    </div>
                </Form>
                :
                <Button className='my-3 w-100' color="primary" onClick={() => setShow(true)}>+ New Contact</Button>
            }
        </>
    )
}
