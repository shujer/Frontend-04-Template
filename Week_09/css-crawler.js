let standards = [
  {
    name: "CSS Properties and Values API Level 1",
    url: "https://www.w3.org/TR/2020/WD-css-properties-values-api-1-20201013/",
  },
  {
    name: "Requirements for Chinese Text Layout中文排版需求",
    url: "https://www.w3.org/TR/2020/WD-clreq-20201001/",
  },
  {
    name: "Worklets Level 1",
    url: "https://www.w3.org/TR/2020/WD-worklets-1-20200908/",
  },
  {
    name: "CSS Inline Layout Module Level 3",
    url: "https://www.w3.org/TR/2020/WD-css-inline-3-20200827/",
  },
  {
    name: "CSS Cascading and Inheritance Level 4",
    url: "https://www.w3.org/TR/2020/WD-css-cascade-4-20200818/",
  },
  {
    name: "CSS Grid Layout Module Level 1",
    url: "https://www.w3.org/TR/2020/CR-css-grid-1-20200818/",
  },
  {
    name: "CSS Grid Layout Module Level 2",
    url: "https://www.w3.org/TR/2020/CR-css-grid-2-20200818/",
  },
  {
    name: "CSS Cascading and Inheritance Level 3",
    url: "https://www.w3.org/TR/2020/CR-css-cascade-3-20200817/",
  },
  {
    name:
      "Requirements for Japanese Text Layout 日本語組版処理の要件(日本語版)",
    url: "https://www.w3.org/TR/2020/NOTE-jlreq-20200811/",
  },
  {
    name: "Media Queries Level 5",
    url: "https://www.w3.org/TR/2020/WD-mediaqueries-5-20200731/",
  },
  {
    name: "Media Queries Level 4",
    url: "https://www.w3.org/TR/2020/CR-mediaqueries-4-20200721/",
  },
  {
    name: "CSS Lists Module Level 3",
    url: "https://www.w3.org/TR/2020/WD-css-lists-3-20200709/",
  },
  {
    name: "CSS Overflow Module Level 3",
    url: "https://www.w3.org/TR/2020/WD-css-overflow-3-20200603/",
  },
  {
    name: "CSS Containment Module Level 2",
    url: "https://www.w3.org/TR/2020/WD-css-contain-2-20200603/",
  },
  {
    name: "Encoding",
    url: "https://www.w3.org/TR/2020/NOTE-encoding-20200602/",
  },
  {
    name:
      "Requirements for Hangul Text Layout and Typography : 한국어 텍스트 레이아웃 및 타이포그래피를 위한 요구사항",
    url: "https://www.w3.org/TR/2020/NOTE-klreq-20200527/",
  },
  {
    name: "Ethiopic Layout Requirements",
    url: "https://www.w3.org/TR/2020/WD-elreq-20200526/",
  },
  {
    name: "CSS Box Sizing Module Level 4",
    url: "https://www.w3.org/TR/2020/WD-css-sizing-4-20200526/",
  },
  {
    name: "CSS Positioned Layout Module Level 3",
    url: "https://www.w3.org/TR/2020/WD-css-position-3-20200519/",
  },
  {
    name: "CSS Display Module Level 3",
    url: "https://www.w3.org/TR/2020/CR-css-display-3-20200519/",
  },
  {
    name: "CSS Text Decoration Module Level 4",
    url: "https://www.w3.org/TR/2020/WD-css-text-decor-4-20200506/",
  },
  {
    name: "CSS Ruby Layout Module Level 1",
    url: "https://www.w3.org/TR/2020/WD-css-ruby-1-20200429/",
  },
  {
    name: "CSS Text Module Level 3",
    url: "https://www.w3.org/TR/2020/WD-css-text-3-20200429/",
  },
  {
    name: "CSS Box Model Module Level 3",
    url: "https://www.w3.org/TR/2020/WD-css-box-3-20200421/",
  },
  {
    name: "CSS Box Model Module Level 4",
    url: "https://www.w3.org/TR/2020/WD-css-box-4-20200421/",
  },
];

let iframe = document.createElement("iframe");
document.body.innerHTML = "";
document.body.append(iframe);

function happen(element, event) {
  return new Promise(function (resolve) {
    let handler = () => {
      resolve();
      element.removeEventListener(event, handler);
    };
    element.addEventListener(event, handler);
  });
}
void (async function () {
  for (let standard of standards) {
    iframe.src = standard.url;
    console.log(standard.name);
    await happen(iframe, "load");
    console.log(iframe.contentDocument.querySelectorAll(".propdef"));
  }
})();
