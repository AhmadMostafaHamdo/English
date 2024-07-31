import CoursGallery from "./pages/Website/CoursGallery";
import Home from "./pages/Website/Home";
import Quiz from "./pages/Website/Quiz";
import AllCours from "./pages/Website/AllCours";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./pages/Website/ContactForm";
import { quizObject } from "./pages/Website/QuizQ";
import { AllOffers } from "./pages/Website/AllOffers";
import InformationTest from "./pages/Website/InformationTest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cours" element={<AllCours />} />
        <Route
          path="/test"
          element={<Quiz questions={quizObject.questions} />}
        />
        <Route path="/TestInformation" element={<InformationTest />} />
        <Route path="/offers" element={<AllOffers />} />
        <Route path="/cours/grammar" element={<CoursGallery />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
}
export default App;
