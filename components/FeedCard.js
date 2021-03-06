import Link from "next/link";
import PropTypes from "prop-types";
import FavoriteIcon from "../assets/svg/favorite.svg";
import { ArticleModel } from "./PropModels";

FeedCard.propTypes = {
  article: PropTypes.shape({
    ...ArticleModel
  })
};

FeedCard.defaultProps = {
  article: {}
};

export default function FeedCard(props) {
  const { article } = props;
  const { author = {} } = article;
  let { tagList = [] } = article;
  if (!Array.isArray(tagList)) {
    tagList = [];
  }

  return (
    <article>
      <div className="flex">
        <div className="flex items-center justify-center w-10 h-10 overflow-hidden mr-2">
          <img
            src="/placeholder.png"
            className="w-full"
            title={author.username}
            alt="Author picture"
          />
        </div>
        <div className="flex-1">
          <Link href={`/profile/${author.username}`}>
            <a className="hover:underline">{author.username}</a>
          </Link>
          <div>
            <span className="text-sm text-primary-500">{article.createdAt}</span>
          </div>
        </div>
        <div className="max-w-xs">
          <button
            title="favorite"
            className="flex items-center border rounded px-2 py-1 text-sm hover:text-primary-900 hover:bg-primary-700"
          >
            <FavoriteIcon className="w-4 h-4" />
            <span>{article.favoritesCount}</span>
          </button>
        </div>
      </div>
      <div className="py-4 clearfix">
        <h3 className="text-lg font-bold">
          <Link href={`/article/${article.slug}`}>
            <a>{article.title}</a>
          </Link>
        </h3>
        <p className="text-sm text-primary-300 mb-4">{article.description}</p>
        <div className="float-left mb-2">
          <Link href="/article/slug">
            <a className="text-xs text-primary-500 hover:text-primary-300">
              Read more...
            </a>
          </Link>
        </div>
        <ul className="float-right flex flex-wrap">
          {tagList.map((t, i) => (
            <li className="mr-1 mb-1" key={i}>
              <span className="border py-1 px-2 truncate cursor-default rounded-full text-xs text-primary-300">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
