
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface SkillRatingProps {
  name: string;
  rating: number;
}

export const SkillRating = ({ name, rating }: SkillRatingProps) => {

  const normalizedRating = Math.min(5, Math.max(0.5, rating));

  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-between w-full min-w-0 gap-2">

      {name && (
        <h4 className="flex-1 min-w-0 text-gray-500 text-base sm:text-xl lg:text-3xl break-words">
          {name}
        </h4>
      )}

      <div className="flex items-center shrink-0 text-xl sm:text-3xl text-amber-400">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} />
        ))}

        {hasHalfStar && <FaStarHalfAlt />}

        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))}
      </div>

    </div>
  );
};