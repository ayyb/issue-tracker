'use client';
import { TextArea, TextField,Button } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
        <TextField.Root placeholder="title"/>
        <SimpleMDE  placeholder="description"/>
        <Button>Submit new Issue</Button>
    </div>
  )
}

export default NewIssuePage