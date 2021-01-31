import s from "./layout.module.css";
// import logo from "../assets/bg1.jpg";
const Layout = ({ id, title, desc, colorBg, urlBg, children }) => {
  const backgroundStyle = {
    background: urlBg ? urlBg : colorBg
  };
  console.log(backgroundStyle);
  return (
    <>
      <section className={s.root} id={id} style={backgroundStyle}>
        <div className={s.wrapper}>
          <article>
            <div className={s.title}>
              <h3>{title}</h3>
              <span className={s.separator}></span>
            </div>
            <div className={[s.desc, s.full]}>
              <p>{desc} </p>
              <p>{children} </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Layout;
