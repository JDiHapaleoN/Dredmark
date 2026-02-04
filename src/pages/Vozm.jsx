import { useTranslation } from "react-i18next";
import BannerVozm from "../components/Banners/BannerVozm"
import VozmMain from "../components/VozmMain/VozmMain"
import SEO from "../components/Common/SEO"

const Vozm = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t("seoTitleVozm")}
        description={t("seoDescVozm")}
        url="/vozm"
      />
      <BannerVozm />
      <VozmMain />
    </>
  )
}

export default Vozm