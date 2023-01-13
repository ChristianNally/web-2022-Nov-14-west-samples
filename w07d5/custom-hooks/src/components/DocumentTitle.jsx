// import {useEffect} from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {
  const title = 'about us';

  useDocumentTitle(title);

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  return (
    <div>
      <h2>This is the document title component</h2>
    </div>
  );
};

export default DocumentTitle;
