import Navbar from '../components/Navbar';
import ChildComponent from '../components/ChildComponent';

const Home: React.FC = () => {
  const message: string = "Hello from the Parent Component!";

  return (
    <div>
      <Navbar />
      <h1>I created four route pages: Navbar, About, Contact, and Footer. I linked all components using the 'Link' component, added navigation with buttons and useRouter, explored Parent and Child components with data passed through props, and gained a solid understanding of routing in Next.js. </h1>

      <ChildComponent data={message} />
    </div>
  );
};

export default Home;
