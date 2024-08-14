import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import TaskBoard from "./Components/Task/TaskBoard";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
};

export default App;
