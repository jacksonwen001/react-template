import style from './index.module.scss'
export const Home = () => {
  return (
    <div className={style.home}>
         <button className={style.hello}> Hello world</button> 
    </div>
  );
}
