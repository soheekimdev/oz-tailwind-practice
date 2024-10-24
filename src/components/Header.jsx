function Li({ text }) {
  return <li className="list-none font-normal text-[13px]">{text}</li>;
}

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2.5 px-5 bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5">
        <Li text="로그인" />
        <Li text="회원가입" />
        <Li text="내클래스" />
      </ul>
    </header>
  );
}
