import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({
    name,Control,label,defaultValue=""
}) {
    return (
        <div className='w-full'>
            {label&& <labe className='inline-block mb-1 pl-1'>{label}</labe>}

            <Controller
            name={name||"content"}
            control={Control||""}
            render={({field: {onChange}})=>(
                <Editor
                apiKey='lxmym93h5h5w1buuabaf2kkpvcdh0o79s3gv1y1nz4dwa0f1'
                 initialValue={defaultValue}
                 init={ {
                    initialValue:defaultValue,
                    branding:false,
                    height:500,
                    menubar:true,
                    plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }
        }
        onEditorChange={onChange}
        />
            )}
            />
        </div>
    )  
}

export default RTE
