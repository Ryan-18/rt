import React, { useCallback, useState } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      
      if (!file) return;
      
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      onFileUpload(file);
    },
    [onFileUpload]
  );

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors
        ${isDragging 
          ? 'border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-900/30' 
          : 'border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400'}`}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col items-center"
      >
        <Upload className={`w-16 h-16 mb-4 ${
          isDragging 
            ? 'text-green-500 dark:text-green-400' 
            : 'text-gray-400 dark:text-gray-500'
        }`} />
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
          {isDragging ? 'Drop your image here' : 'Drag and drop your image here'}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          or click to select a file
        </p>
      </label>
    </div>
  );
};

export default FileUpload;