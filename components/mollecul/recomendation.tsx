import { Card, CardContent, CardHeader} from "@/components/atom/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atom/avatar"

const Recommendation = () => {
    const recommendations = [
        {
            id: 1,
            content: "Nurul is highly skilled in UI/UX design and frontend development. Her expertise in developing the UI and UX of applications is excellent. Occasionally, she makes a awikwok error that brings a touch of humor to the team.",
            author: {
                name: "Ananda Fiqri",
                role: "Backend Developer at Indofund.id",
                image: "/nurul.jpg",
                initials: "AF"
            }
        },
        {
            id: 2,
            content: "I am delighted to have had the opportunity to work with Nurul on our micro project at Infinite Learning, and now we are collaborating once again on a massive project. Nurul is a dedicated and committed colleague who brings exceptional expertise to her field. Her contributions have been invaluable in achieving our project's goals. I highly recommend Nurul for future collaborations.",
            author: {
                name: "Fatimatuzzahra",
                role: "Fresh Graduate in Electric Engineering",
                image: "/nurul.jpg",
                initials: "F"
            }
        }
    ];

    return (
        <Card className="border-none shadow-none">
            <CardHeader>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recommendations.map((recommendation) => (
                        <Card key={recommendation.id} className="bg-gray-200 border border-gray-400 shadow shadow-lg">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage 
                                        src={recommendation.author.image} 
                                        alt={recommendation.author.name} 
                                    />
                                    <AvatarFallback>
                                        {recommendation.author.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="text-sm font-semibold text-gray-700">
                                        {recommendation.author.name}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {recommendation.author.role}
                                    </p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">
                                    {recommendation.content}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default Recommendation;