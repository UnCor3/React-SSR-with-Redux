import withHelmet from "../hoc/withHelmet.hoc.tsx"

const notFound = () => {
    return (
        <>
            404 Not Found
        </>
    )
}

const seo = {
    title : '404',
    og_title: '404'
}

export default withHelmet(seo,notFound)