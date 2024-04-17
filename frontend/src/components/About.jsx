import MyFooter from "./MyFooter";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-300 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center h-screen relative">
          <div className="absolute inset-0 z-0"></div>
          <div className="z-10 relative text-center text-black">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-white bg-clip-text mb-4 max-w-md mx-auto px-4 lg:max-w-xl">
              About
            </h2>
            <div className="bg-gray-100 bg-opacity-50 p-8 rounded-xl max-w-lg mx-auto">
              <div className="italic text-gray-900">
                <p>
                  Di sini, Adalah tempat untuk menyimpan data buku-buku yang
                  ingin di simpan di dalam sebuah website. website ini di
                  khususkan untuk satu pengguna saja atau untuk diri sendiri
                  karena website ini adalah Inventory Book yang biasanya
                  inventory adalah tempat untuk menyimpan sesuatu dan inventory
                  ini di khususkan untuk menyimpan buku-buku dalam bentuk data.
                </p>
                <p>
                  Website ini hanya untuk mencatat buku-buku yang ingin di
                  simpan agar ketika lupa buku atau data buku apa yg pernah di
                  inginkan atau yg sudah pernah di baca tapi lupa buku tersebut
                  bisa di buka kembali website ini untuk data buku nya kembali
                </p>
                <p>
                  Semoga website ini bermanfaat untuk si pengguna yang
                  menggunakannya
                </p>
                <p>Semangat dalam membaca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default About;
