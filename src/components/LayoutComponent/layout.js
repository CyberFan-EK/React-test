import s from "./layout.module.css";
// import logo from "../assets/bg1.jpg";
const Layout = ({ id, title, desc, colorBg, urlBg }) => {
  const backgroundStyle = {
    color: colorBg ? colorBg : "none",
    background: urlBg ? urlBg : "none"
  };
  console.log(backgroundStyle);
  return (
    <>
      <section class={s.root} id={id} style={backgroundStyle}>
        <div class={s.wrapper}>
          <article>
            <div class={s.title}>
              <h3>{title}</h3>
              <span class={s.separator}></span>
            </div>
            <div class={[s.desc, s.full]}>
              <p>{desc}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Layout;
