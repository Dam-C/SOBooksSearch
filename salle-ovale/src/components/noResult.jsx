const NoResult = () => {
  const lennys = [
    "(.づ◡﹏◡)づ.",
    "(￣ ￣|||)",
    "(︶︹︺)",
    "(ｏ´_｀ｏ)",
    "⊙︿⊙",
    "(´・ω・｀)",
    "(´-ω-`)",
    "（◞‸◟）",
    "(; ꒪ö꒪)",
    "¯\\_(⊙︿⊙)_/¯",
    "(つ﹏<。)",
    "(◞д◟)",
    "(´°ω°`)",
    "乁( ͡ಠ ʖ̯ ͡ಠ)ㄏ",
  ];

  const lennysLen = lennys.length;

  function rngLenny(ln) {
    let temp = Math.floor(Math.random() * ln);
    return temp;
  }

  return (
    <article className="no-result">
      <h3 className="no-result__title">
        {lennys[rngLenny(lennysLen)]} - {lennys[rngLenny(lennysLen)]}
      </h3>
      <h4></h4>
      <p className="no-result__text">
        Le livre que vous recherchez ne semble pas être présent dans la Salle
        Ovale.
        <br />
        N&apos;hésitez pas à vous rapprocher des équipes de la BNF pour en
        savoir plus.
      </p>
    </article>
  );
};

export default NoResult;
