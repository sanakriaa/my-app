import './App.css';
import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

export const Create = ({ onNewEvent }) => {
  const [title, setTitle] = useState("");
  const [lieu, setlieu] = useState("");
  const [date, setdate] = useState("");
  const [heure, setheure] = useState("");
  const [tarif, settarif] = useState("");
  const [genre, setgenre] = useState("");
  const [desc, setDesc] = useState("");



  return (
    <Form>
      <Form.Field>
        <Input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
      <Input
          placeholder="Lieu"
          value={lieu}
          onChange={e => setlieu(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
      <Input
          placeholder="Date"
          value={date}
          onChange={e => setdate(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
      <Input
          placeholder="Heure"
          value={heure}
          onChange={e => setheure(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
      <Input
          placeholder="Tarif"
          value={tarif}
          onChange={e => settarif(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
      <Input
          placeholder="Genre"
          value={genre}
          onChange={e => setgenre(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
      <Input
          placeholder="Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            const event = { title, lieu, date , heure, tarif, genre, desc};
            const response = await fetch("/create", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(event)
            });

            if (response.ok) {
              console.log("response worked!");
              onNewEvent(event);
              setTitle("");
              setlieu("");
              setdate("");
              setheure("");
              settarif("");
              setgenre("");
              setDesc("");

            }
          }}
        >
          submit
        </Button>
      </Form.Field>
    </Form>
  );
};