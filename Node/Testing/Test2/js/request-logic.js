//return file type based on filename extension

function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];

  switch(extension) {
    case "html":
      return 'text/html'
    case "css":
      return 'text/css';
    case "jpg":
      return 'image/jpeg';
    case "jpeg":
      return 'image/jpeg'
    default:
      return 'text/plain';
  }
}