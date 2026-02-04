import { useTranslation } from "react-i18next";
import MainBanner from "../components/Banners/MainBanner"
import HomeMain from "../components/HomeMain/HomeMain"
import SEO from "../components/Common/SEO"

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t("seoTitleHome")}
        description={t("seoDescHome")}
        keywords={t("seoKeywordsHome")}
        url="/"
      />
      <MainBanner />
      <HomeMain />
    </>
  )
}

export default Home