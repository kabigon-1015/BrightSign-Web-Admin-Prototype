import { useRef } from "react";

export const MediaTableList = () => {
  const isOpen = useRef<HTMLDialogElement>(null);
  const openDialog = () => {
    isOpen.current?.showModal();
  };
  return (
    <>
      <dialog id="my_modal_1" className="modal" ref={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">メディアを削除しますか？</h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">戻る</button>
              <button className="btn btn-error">削除</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>名前</th>
              <th>説明</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      動画1
                      <br></br>
                      <span className="badge badge-primary badge-sm">動画</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>デモ用です</td>
              <th>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => openDialog()}
                >
                  削除
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      画像1
                      <br></br>
                      <span className="badge badge-accent badge-sm">画像</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>脳波用です</td>
              <th>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => openDialog()}
                >
                  削除
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      動画2
                      <br></br>
                      <span className="badge badge-primary badge-sm">動画</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>デモ用です</td>
              <th>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => openDialog()}
                >
                  削除
                </button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      画像2
                      <br></br>
                      <span className="badge badge-accent badge-sm">画像</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>脳波用です</td>
              <th>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => openDialog()}
                >
                  削除
                </button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};
