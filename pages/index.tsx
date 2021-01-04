import styles from '../styles/app.module.scss';

//Styled-JSX
function Heading(props) {
  const color = Math.random() > 0.5 ? 'red' : 'blue';
  return(
  <div>
    <h1>{props.heading}</h1>
    <style jsx>
      {`h1{
        color: ${color};
      }`}
    </style>
  </div>
  )
}

export default function Home() {
  return (
    <div>
      <Heading heading = "Heading"/>
      <h1 className="blue">H1</h1>
      <h1 className={styles.brown}>H1</h1>
    </div>
  )
}
