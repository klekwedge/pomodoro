import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export function formatTime(time: any) {
  return dayjs.duration(time, "seconds").format("mm:ss");
}

export function updateTitle(time: any, mode: any) {
  const message = mode === "focus" ? "Time for focus" : "Time for break";
  document.title = `${formatTime(time)} - ${message}`;
}

function changeUlrs(list: NodeListOf<Element>, url: string) {
  list.forEach((element) => {
    element.setAttribute(
      "href",
      element.getAttribute("href").replace(/\/.+\//g, `/${url}/`)
    );
  });
}

export function updateFavicon(mode: any) {
  const relIcons = document.querySelectorAll('link[rel="icon"]');
  const relAppleIcons = document.querySelectorAll(
    'link[rel="apple-touch-icon"]'
  );
  const manifest = document.querySelector('link[rel="manifest"]');
  const tileImage = document.querySelector(
    'meta[name="msapplication-TileImage"]'
  );

  let url = "focus";

  if (mode === "shortBreak") {
    url = "short-break";
  } else if (mode === "longBreak") {
    url = "long-break";
  }

  changeUlrs(relIcons, url);
  changeUlrs(relAppleIcons, url);
  manifest?.setAttribute(
    "href",
    manifest.getAttribute("href").replace(/\/.+\//g, `/${url}/`)
  );

  tileImage?.setAttribute(
    "content",
    tileImage.getAttribute("content").replace(/\/.+\//g, `/${url}/`)
  );
  tileImage;
}
