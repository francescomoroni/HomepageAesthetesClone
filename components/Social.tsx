import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Social() {
  return (
    <div className="flex justify-center pt-2 space-x-2 lg:pl-6 lg:pt-0">
      <a
        href="https://twitter.com/aesthetes_art"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiOutlineTwitter className="social-icons" />
      </a>
      <a
        href="https://www.instagram.com/aesthetes_fineart/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiOutlineInstagram className="social-icons" />
      </a>

      <a
        href="https://www.facebook.com/aesthetes.fineart"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillFacebook className="social-icons" />
      </a>

      <a
        href="https://www.linkedin.com/company/71714406/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillLinkedin className="social-icons" />
      </a>
      <a
        href="https://www.youtube.com/c/Aesthetes"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillYoutube className="social-icons" />
      </a>
    </div>
  );
}
