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

function changeUlrs(list: any, mode: any) {
  list.forEach(function (element: any) {
    element.setAttribute(
      "href",
      element.getAttribute("href").replace(/\/.+\//g, `/${mode}/`)
    );
  });
}

export function updateFavicon(mode: any) {
  const relIcons = document.querySelectorAll('link[rel="icon"]');
  const relAppleIcons = document.querySelectorAll(
    'link[rel="apple-touch-icon"]'
  );
  const tileImages = document.querySelectorAll(
    'meta[name="msapplication-TileImage"]'
  );

  switch (mode) {
    case "focus":
      changeUlrs(relIcons, "focus");
      break;
    case "shortBreak":
      changeUlrs(relIcons, "short-break");
      break;
    case "longBreak":
      changeUlrs(relIcons, "long-break");
      break;
    default:
      changeUlrs(relIcons, "focus");
      break;
  }
}
