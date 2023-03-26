import React, { Fragment, useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';

const CreateWiki = () => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });

  const { title, content } = formData;

  // for title change
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    api.post('/wiki/createWiki', formData);
    console.log('Success');
  };

  // this is to get the content from the editor and set it to the content state
  // cuz the editor is tynimce and it's a ref
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setFormData({ ...formData, text: editorRef.current.getContent() });
    }
  };

  // editor is tynimce
  return (
    <>
      <div className='container'>
        <h1 className='large text-primary'>Create a Wiki</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> GPT or Not GPT, that is a question
        </p>
        <small>* required field</small>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Title'
              name='title'
              value={title}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <Editor
              apiKey='api-here'
              onInit={(evt, editor) => (editorRef.current = editor)}
              onEditorChange={log}
              initialValue='<p>This is the initial content of the editor.</p>'
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
            <div onClick={log}>Log editor content</div>
          </div>
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/wiki'>
            Go Back
          </Link>
        </form>
      </div>
    </>
  );
};

export default CreateWiki;
