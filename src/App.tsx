import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './features/posts/pages/HomePage';
import { PostCreatePage } from './features/posts/pages/PostCreatePage';
import { PostDetailsPage } from './features/posts/pages/PostDetailsPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="details">
            <Route path=":postId" element={<PostDetailsPage />} />
          </Route>
          <Route path="create" element={<PostCreatePage />} />
        </Routes>
      </main>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
}
