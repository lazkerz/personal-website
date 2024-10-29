import Wrapper from "@/components/organ/wrapper";
export default function Home() {
  return (
    <Wrapper>
      <div className="md:m-10">
        <div className="flex flex-col gap-3 m-10">
        <h1 className="text-2xl font-medium text-gray-700">About</h1>
        <p className="text-md text-gray-600 text-justify">As a Fullstack Web Developer, I have a passion for Front-End and Android Development. I have created intuitive and engaging user 
          experiences, achieving Top 5 in best product collaboration in the Kampus Merdeka program. My strengths are collaboration, adaptability, 
          and a commitment to continuous learning. With this enthusiasm, I am seeking opportunities to contribute to innovative projects and look 
          forward to connecting with like-minded professionals to explore greater collaboration potential.</p>
        </div>
        <div className="flex flex-col gap-3 m-10">
          <h1 className="text-2xl font-medium text-gray-700">Tech Stack</h1>
          <p className="text-md text-gray-600 text-justify">- ReactJS<br/>
          - NextJS<br/>
          - TailwindCSS<br/>
          - Figma<br/>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
