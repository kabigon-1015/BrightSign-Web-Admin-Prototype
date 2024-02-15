export const Header = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">メディアの管理画面</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">メディア一覧</a>
          </li>
          <li>
            <a href="/media-register">メディアの登録</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
