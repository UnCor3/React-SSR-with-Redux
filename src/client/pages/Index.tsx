import withHelmet from "../hoc/withHelmet.hoc.tsx";

const Index = () => 
    <div style={{display:'flex',flexDirection:'column' , gap:'10px'}}>
      <a href="/users">Render users</a>
      <a href="/hello-world">Render hello world</a>
    </div>

const seo = {
  title: "React-SSR With Redux",
  og_title: "React-React-SSR With Redux",
};

export default withHelmet(seo,Index);
