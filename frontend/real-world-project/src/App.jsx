import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/axios.js";

const App = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axiosInstance.get("http://localhost:5001/api/auth/me"); // Assuming baseURL is set
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  console.log(data);

  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
