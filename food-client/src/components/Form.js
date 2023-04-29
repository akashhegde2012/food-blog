import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: Add form submission logic
    const data = {
        title: title,
        content: content,
        type: type,
        category: category,
        image: image
    }
    console.log(data);
    await axios
      .post('http://localhost:4000/recepie', data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(event) => setContent(event.target.value)} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      </label>
      <br />
      <label>
        Type:
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="">Select a type</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </label>
      <br />
      <label>
        Image:
        <input type="file" onChange={(event) => setImage(event.target.files[0])} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;