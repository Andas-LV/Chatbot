"use client"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const AvatarUploader: React.FC = () => {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        const imageFile = acceptedFiles[0];

        console.log('Загруженный файл:', imageFile);

        const reader = new FileReader();
        reader.onload = () => {
            const base64Image = reader.result as string;
            setUploadedImage(base64Image);
        };
        reader.readAsDataURL(imageFile);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    function remove () {
        setUploadedImage(null);
    }

    return (
        <div>
            <div {...getRootProps()} style={{ border: '2px dashed #eee', padding: '20px', textAlign: 'center' }}>
                <input {...getInputProps()} />
                <p>Перетащите файл сюда или кликните, чтобы выбрать файл</p>
            </div>

            <button onClick={remove}>
                delete
            </button>

            {uploadedImage && (
                <div>
                    <h2>Загруженная картинка:</h2>
                    <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default AvatarUploader;

