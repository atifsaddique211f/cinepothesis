import "./VideoClip.css";

const VIDEO_URLS = [
  "https://clip.cafe/videoclips/i-think-should-prepare-the-fact-were-going-lose.mp4",
  "https://clip.cafe/videoclips/wait-a-minute-s4.mp4",
  "https://clip.cafe/videoclips/a-new-power-rising-s1.mp4",
  "https://clip.cafe/videoclips/not-very-sporting-fire-on-an-unarmed-opponent-s1.mp4",
  "https://clip.cafe/videoclips/thats-the-thing.mp4"
];

export default function VideoClip({ clipIndex }) {
  return (
    <video className="VideoClip" src={VIDEO_URLS[clipIndex]} autoPlay muted />
  );
}
