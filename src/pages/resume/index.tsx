const Resume = () => {
  return (
    <iframe 
      src="/resume.pdf" 
      style={{ width: '100%', height: '100vh' }} 
    >
      This browser does not support PDFs.
      <a href="/resume.pdf">Use this link for the file.</a>
    </iframe>
  );
};

export default Resume;
