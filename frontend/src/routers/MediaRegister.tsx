import { MediaFileInput } from "../components/commons/MediaFileInput";
import { NormalButton } from "../components/commons/NormalButton";
import { SelectMediaType } from "../components/commons/SelectMediaType";
import { TextField } from "../components/commons/TextField";
import { TextInput } from "../components/commons/TextInput";

export const MediaRegister = () => {
  return (
    <>
      <p className="text-2xl text-black font-bold text-center mb-5">
        メディア登録
      </p>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">メディアタイプ</div>
        <div className="md:w-2/3">
          動画 <SelectMediaType></SelectMediaType>　　　 画像{" "}
          <SelectMediaType></SelectMediaType>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">名前</div>
        <div className="md:w-2/3">
          <TextInput></TextInput>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">説明</div>
        <div className="md:w-2/3">
          <TextField></TextField>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">メディアファイル</div>
        <div className="md:w-2/3">
          <MediaFileInput></MediaFileInput>
        </div>
      </div>
      <NormalButton></NormalButton>
    </>
  );
};
