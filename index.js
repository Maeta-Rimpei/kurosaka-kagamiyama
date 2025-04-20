const imgSrcMap = {};

for (let i = 0; i < 32; i++) {
    imgSrcMap[i] = `${i}.png`
}

/**
 * ダウンロード
 */
const getImage = () => {
    const target = document.getElementById("target");
    const options = {
        type: "png",
        quality: 1
    };
    html2canvas(target, options).then((canvas) => {

        const dataURL = canvas.toDataURL();
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "kurosaka_kagamiyamajo.png";
        link.click();
    });
}

/**
 * 和暦変換
 * @return number 年数(和暦)
 */
const jaYear = () => {
    const reiwaStartYear = 2019;
    const now = new Date();
    const nowYear = now.getFullYear();

    return nowYear - reiwaStartYear + 1;
}

/**
 * 日付を設定
 * @return void
 */
const setDate = () => {
    const d = document;
console.log("emthod");

    const year = d.querySelector('.year');
    const month = d.querySelector('.month');
    const day = d.querySelector('.day');
    const now = new Date();

    const imageDir = './images/days/';

    year.src = imageDir + imgSrcMap[jaYear()];
    month.src = imageDir + imgSrcMap[now.getMonth() + 1];
    day.src = imageDir + imgSrcMap[now.getDate()];
}

window.onload = setDate();

/**
 * iframeの高さを自動調整するために連携先へ高さを通知する
 */
const postIframeHeight = () => {
    const height = document.documentElement.offsetHeight;
    window.parent.postMessage({ iframeHeight: height }, 'https://sites.google.com/view/hog-hoge/%E3%83%9B%E3%83%BC%E3%83%A0');
};