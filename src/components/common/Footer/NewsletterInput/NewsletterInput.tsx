import s from "./NewsletterInput.module.scss";
import { ArrowRightIcon } from "@components/icons";
import IconButton from "@components/ui/IconButton";

const NewsletterInput = () => {
  return (
    <div className={s.root}>
      <input type="text" placeholder="Enter your email" />
      <IconButton variant="filled" color="primary" icon={<ArrowRightIcon />} />
    </div>
  );
};

export default NewsletterInput;
