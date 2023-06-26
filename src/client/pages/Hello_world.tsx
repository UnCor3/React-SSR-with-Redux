import { Helmet } from "react-helmet"
import withHelmetHoc from "../hoc/withHelmet.hoc.tsx"

const helloWorld = () => {
    return (
        <>
            Hello-world
        </>
    )    
}

const seo = {
    title : 'Hello-world',
    og_title : 'Hello-world'
}
  
export default withHelmetHoc(seo,helloWorld)