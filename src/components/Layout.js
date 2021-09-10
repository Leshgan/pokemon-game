import style from './Layout.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {
  const inlineStyle = {
    background: urlBg ? `url(${urlBg})` : colorBg || 'white',
  }

  return (
    <section className={style.root}  >
      <div className={style.wrapper} style={inlineStyle}>
        <article>
          <div className={style.title}>
            <h3>{title || ''}</h3>
            <span className={style.separator}></span>
          </div>
          <div className={style.desc.full}>
            <p>{descr || ''}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;
