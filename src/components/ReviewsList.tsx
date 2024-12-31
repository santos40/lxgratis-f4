import { Card } from "./ui/card";
import UserRating from "./UserRating";

interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id} className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-semibold">{review.userName}</h4>
              <UserRating rating={review.rating} totalReviews={0} />
            </div>
            <span className="text-sm text-muted-foreground">
              {new Date(review.date).toLocaleDateString("pt-BR")}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{review.comment}</p>
        </Card>
      ))}
    </div>
  );
};

export default ReviewsList;