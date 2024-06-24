export default function Image({src,...rest}) {
  src ='http://localhost:8000/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}