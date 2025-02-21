
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 px-6">
        <div className="max-w-[1400px] mx-auto min-h-[calc(100vh-8rem)] flex items-center justify-center">
          <div className="w-full aspect-[16/9] bg-gray-100 rounded-lg">
            {/* Aquí irá tu imagen del hero */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
