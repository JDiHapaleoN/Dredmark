import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NotFound.scss";

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="notFound">
            <div className="notFound__container">
                <h1 className="notFound__title">404</h1>
                <p className="notFound__text">Страница не найдена</p>
                <p className="notFound__subtext">Кажется, вы заплыли слишком далеко или такой страницы не существует.</p>
                <Link to="/" className="notFound__btn">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
