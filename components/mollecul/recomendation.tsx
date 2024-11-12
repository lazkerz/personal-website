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
                image: "/recomen/fiqri.jpg",
                initials: "AF"
            }
        },
        {
            id: 2,
            content: "I am delighted to have had the opportunity to work with Nurul on our micro project at Infinite Learning, and now we are collaborating once again on a massive project. Nurul is a dedicated and committed colleague who brings exceptional expertise to her field. Her contributions have been invaluable in achieving our project's goals. I highly recommend Nurul for future collaborations.",
            author: {
                name: "Fatimatuzzahra",
                role: "Fresh Graduate in Electric Engineering",
                image: "/recomen/fatima.jpg",
                initials: "F"
            }
        },
        {
            id: 3,
            content: "Bekerja dengan Nurul benar-benar membuat perbedaan dalam proyek kami. Dia tidak hanya membawa ide-ide segar ke dalam desain, tetapi juga membantu saya meng-handle sisi UI dan frontend dengan sangat baik. Setiap detail dikerjakannya dengan rapi, dan antarmuka yang dia buat selalu responsif dan intuitif. Ditambah lagi, Nurul cepat beradaptasi dengan teknologi dan tren baru, jadi hasilnya selalu terlihat up-to-date dan menarik. Kalau butuh Frontend Developer yang andal dan penuh inisiatif, Nurul pasti pilihan yang tepat!",
            author: {
                name: "Rezha Jamil Nasutionp",
                role: "Software Engineer",
                image: "/recomen/rezha.jpg",
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