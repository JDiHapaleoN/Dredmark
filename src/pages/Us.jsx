import { useTranslation } from "react-i18next";
import UsMain from "../components/UsMain/UsMain"
import SEO from "../components/Common/SEO"

const Us = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t("seoTitleUs")}
        description={t("seoDescUs")}
        url="/us"
      />
      <UsMain />
    </>
  )
}

export default Us