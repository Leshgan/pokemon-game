import style from './Layout.module.css';

const Layout = ({ title, desc }) => {

  return (
    <section className={style.root}>
    <div className={style.wrapper}>
        <article>
            <div className={style.title}>
                <h3>{title}</h3>
                <span className={style.separator}></span>
            </div>
            <div className={style.desc.full}>
                <p>{desc}</p>
            </div>
        </article>
    </div>
</section>
  )
}

export default Layout;