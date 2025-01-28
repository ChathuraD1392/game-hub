import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../../assets/bullsEye.png";
import thumbsUp from "../../assets/tup.png";

const Emoji = ({ rating }: { rating: number }) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    // 3: {src:meh, alt:'meh'},
    4: { src: thumbsUp, alt: "meh" },
    5: { src: bullsEye, alt: "meh" },
  };
  return <Image marginY={1} {...emojiMap[rating]} boxSize="30px" />;
};

export default Emoji;
