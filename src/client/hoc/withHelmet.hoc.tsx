import { Helmet } from "react-helmet";

type SeoType = {
  title: string;
  og_title: string;
  og_type?: string;
  og_url?: string;
  og_image?: string;
};

export default (seo: SeoType, Component : () => JSX.Element) => {
  const withHelmet = () => {
    return (
      <>
        <Helmet>
          <title>{seo.title}</title>
          <meta property="og:title" content={seo.og_title} />
          {seo.og_image ? <meta property="og:image" content={seo.og_image} /> : null}
          {seo.og_type ? <meta property="og:type" content={seo.og_type} /> : null}
          {seo.og_url ? <meta property="og:url" content={seo.og_type} /> : null}
        </Helmet>
        <Component/>
      </>
    );
  };
  return withHelmet;
};
