import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { Helmet } from "react-helmet";

const Career = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 my-5">
      <Header />
      <Navbar />
      <div className="mt-10">
        <Helmet><title>Career</title></Helmet>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        1. Introduction to the Career Page:
        </h1>
        <p className="text-xl mb-5 font-light">Begin with a brief introduction to the purpose of the page. Explain that this section is dedicated to helping your readers with career-related information, advice, and resources.</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        2. Featured Job Opportunities:
        </h1>
        <p className="text-xl mb-5 font-light">Highlight a few current job openings from various industries or sectors. Include the job title, company name, location, and a brief description. You can update this section periodically with new job listings.</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        3. Career Advice and Tips:
        </h1>
        <p className="text-xl mb-5 font-light">Share valuable career advice and tips for job seekers. Topics could include resume writing, interview preparation, networking, and career development strategies. You can also include articles or links to in-depth guides on these topics.</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        4. Industry Insights:
        </h1>
        <p className="text-xl mb-5 font-light">Provide insights into different industries and sectors. Discuss current trends, challenges, and opportunities within various fields such as technology, healthcare, finance, and more.</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        5. Success Stories:
        </h1>
        <p className="text-xl mb-5 font-light">Share inspiring success stories of individuals who have achieved remarkable careers. Highlight their journey, challenges they faced, and the lessons they learned along the way.</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        6. Education and Training Resources:
        </h1>
        <p className="text-xl mb-5 font-light">Provide information about educational programs, online courses, and certifications that can help readers advance in their careers. Include links to reputable institutions or platforms offering these resources.</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        7. Career Events and Workshops:
        </h1>
        <p className="text-xl mb-5 font-light">Promote upcoming career-related events, job fairs, workshops, and seminars. Include dates, locations, and registration details</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        8. Job Search Tools:
        </h1>
        <p className="text-xl mb-5 font-light">Offer links to job search engines and career websites where readers can explore job opportunities, post their resumes, and connect with employers.</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        9. Networking Opportunities:
        </h1>
        <p className="text-xl mb-5 font-light">Provide information on networking events, professional organizations, and online communities that can help readers expand their professional networks.</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        10. Q&A Section:
        </h1>
        <p className="text-xl mb-5 font-light">- Allow readers to submit career-related questions, and periodically answer them in this section. This can provide personalized advice and engage your audience.</p>
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
        11. Contact Information:
        </h1>
        <p className="text-xl mb-5 font-light">Remember to keep the content on your CAREER page updated and relevant to ensure that your readers find it valuable and engaging. Additionally, consider adding images, infographics, or videos to make the page more visually appealing.</p>
      </div>
    </div>
  );
};

export default Career;
