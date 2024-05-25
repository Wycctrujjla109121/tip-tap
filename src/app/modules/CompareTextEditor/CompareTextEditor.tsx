'use client'

import { useState } from "react";
import { RichTextEditorBoard } from "../RichTextEditor";


export function CompareTextEditor() {
    const [jsonEditor, setJsonEditor] = useState()

    console.log(jsonEditor)
    return (
        <div>
            <RichTextEditorBoard setJsonEditor={setJsonEditor} />
        </div>
    );
}